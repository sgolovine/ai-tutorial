/**
 * Build-time Markdown pipeline.
 *
 * Any `content/<lang>/<slug>.md` imported by the app is compiled here (in Node),
 * so the browser only ever receives ready-made HTML — no Markdown parser ships
 * to the client.
 *
 *   import doc from '/content/en/x.md'        -> DocModule ({ meta, html, headings })
 *   import meta from '/content/en/x.md?meta'  -> DocMeta (frontmatter only, for nav)
 *   import('virtual:search-index/en')         -> Array<SearchEntry> (every page of a language, for search)
 *
 * It also writes robots.txt and (when SITE_URL is set) sitemap.xml into the client build.
 *
 * See content/README.md for the authoring contract.
 */
import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import { parse as parseYaml } from 'yaml'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import { visit, SKIP } from 'unist-util-visit'
import { toString as hastToString } from 'hast-util-to-string'
import { h } from 'hastscript'
import type { Root as MdRoot, Paragraph, Text } from 'mdast'
import type { Root as HastRoot, Element, ElementContent } from 'hast'
import { CALLOUT_TYPES, isLocale, isSection, LOCALES, t, type CalloutType, type Locale } from '../src/lib/i18n.ts'
import type { DocEvent, DocHeading, DocMeta, DocModule, SearchEntry } from '../src/lib/content-types.ts'

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const WORDS_PER_MINUTE = 200
const SEARCH_INDEX_ID = 'virtual:search-index/'

export interface ContentFile {
  lang: Locale
  slug: string
  file: string
}

/** Lists every content file. Used for the prerender route list. */
export function scanContent(contentDir: string): Array<ContentFile> {
  const files: Array<ContentFile> = []
  for (const lang of LOCALES) {
    const dir = path.join(contentDir, lang)
    if (!fs.existsSync(dir)) continue
    for (const name of fs.readdirSync(dir).sort()) {
      if (!name.endsWith('.md')) continue
      files.push({ lang, slug: name.slice(0, -3), file: path.join(dir, name) })
    }
  }
  return files
}

/** Site path of a page, without the base: `/en/` or `/en/guides/<slug>/`. */
export function pagePath(lang: Locale, slug: string): string {
  return slug === 'index' ? `/${lang}/` : `/${lang}/guides/${slug}/`
}

class ContentError extends Error {
  constructor(file: string, message: string) {
    super(`[content] ${file}: ${message}`)
  }
}

function splitFrontmatter(source: string, file: string): { data: Record<string, unknown>; body: string } {
  const text = source.replace(/^﻿/, '')
  const match = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(text)
  if (!match) throw new ContentError(file, 'missing YAML frontmatter (the file must start with ---)')
  let data: unknown
  try {
    data = parseYaml(match[1])
  } catch (error) {
    throw new ContentError(file, `invalid YAML frontmatter: ${(error as Error).message}`)
  }
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    throw new ContentError(file, 'frontmatter must be a YAML mapping')
  }
  return { data: data as Record<string, unknown>, body: text.slice(match[0].length) }
}

function readString(data: Record<string, unknown>, key: string, required: boolean, file: string): string | null {
  const value = data[key]
  if (value === undefined || value === null || value === '') {
    if (required) throw new ContentError(file, `frontmatter "${key}" is required`)
    return null
  }
  if (typeof value !== 'string') throw new ContentError(file, `frontmatter "${key}" must be a string`)
  return value.trim()
}

function parseEvent(value: unknown, file: string): DocEvent | null {
  if (value === undefined || value === null) return null
  if (typeof value !== 'object' || Array.isArray(value)) {
    throw new ContentError(file, 'frontmatter "event" must be a mapping with name, dates and url')
  }
  const data = value as Record<string, unknown>
  const str = (key: string, required: boolean) => readString(data, key, required, `${file} (event)`)
  const url = str('url', true)!
  if (!/^https?:\/\//.test(url)) throw new ContentError(file, 'frontmatter "event.url" must start with https://')
  return { name: str('name', true)!, dates: str('dates', true)!, url, cta: str('cta', false), details: str('details', false) }
}

/** Rough word count of the Markdown body (link targets and HTML tags excluded). */
function estimateReadingMinutes(body: string): number {
  const text = body.replace(/\]\([^)]*\)/g, ']').replace(/<[^>]+>/g, ' ')
  const words = text.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu)?.length ?? 0
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

function parseMeta(lang: Locale, slug: string, data: Record<string, unknown>, body: string, file: string): DocMeta {
  const isIndex = slug === 'index'
  const str = (key: string, required: boolean) => readString(data, key, required, file)

  const order = data.order ?? (isIndex ? 0 : undefined)
  if (typeof order !== 'number' || !Number.isFinite(order)) {
    throw new ContentError(file, 'frontmatter "order" is required and must be a number')
  }

  const section = data.section ?? null
  if (section === null ? !isIndex : !isSection(section)) {
    throw new ContentError(file, 'frontmatter "section" must be one of: start, create, facebook, automate, extras')
  }

  let updated = data.updated ?? null
  if (updated instanceof Date) updated = updated.toISOString().slice(0, 10)
  if (updated !== null && (typeof updated !== 'string' || !DATE_RE.test(updated))) {
    throw new ContentError(file, 'frontmatter "updated" must be a date like 2026-10-21')
  }

  return {
    lang,
    slug,
    title: str('title', true)!,
    description: str('description', true)!,
    order,
    section: section as DocMeta['section'],
    icon: str('icon', false),
    updated: updated as string | null,
    event: parseEvent(data.event, file),
    readingMinutes: estimateReadingMinutes(body),
  }
}

// ---------------------------------------------------------------------------
// Markdown -> HTML plugins
// ---------------------------------------------------------------------------

/** GitHub-style alerts: `> [!TIP]` (optionally `> [!TIP] Custom title`). */
function remarkCallouts(lang: Locale) {
  const labels = t(lang).callouts
  return (tree: MdRoot) => {
    visit(tree, 'blockquote', (node) => {
      const first = node.children[0]
      if (first?.type !== 'paragraph') return
      const text = first.children[0]
      if (text?.type !== 'text') return
      const match = /^\[!(\w+)\][ \t]*([^\n]*)\n?/.exec(text.value)
      if (!match) return
      const type = match[1].toUpperCase() as CalloutType
      if (!CALLOUT_TYPES.includes(type)) return

      text.value = text.value.slice(match[0].length)
      if (text.value === '') {
        first.children.shift()
        if (first.children[0]?.type === 'break') first.children.shift()
      }
      if (first.children.length === 0) node.children.shift()

      const title: Paragraph = {
        type: 'paragraph',
        data: { hProperties: { className: ['callout-title'] } },
        children: [{ type: 'text', value: match[2].trim() || labels[type] } satisfies Text],
      }
      node.children.unshift(title)
      node.data = {
        hName: 'div',
        hProperties: { className: ['callout', `callout-${type.toLowerCase()}`], role: 'note' },
      }
    })
  }
}

/** The page title is the only <h1>; demote any `# Heading` in the body. */
function rehypeDemoteH1() {
  return (tree: HastRoot) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'h1') node.tagName = 'h2'
    })
  }
}

function rehypeCollectHeadings(headings: Array<DocHeading>) {
  return () => (tree: HastRoot) => {
    visit(tree, 'element', (node) => {
      if (node.properties.id === 'footnote-label') return // remark-gfm's (visually hidden) footnotes heading
      if ((node.tagName === 'h2' || node.tagName === 'h3') && typeof node.properties.id === 'string') {
        headings.push({ id: node.properties.id, text: hastToString(node).trim(), depth: node.tagName === 'h2' ? 2 : 3 })
      }
    })
  }
}

/**
 * - `other-guide.md`, `./other-guide.md#part`  -> /<base>/<lang>/guides/other-guide/#part
 * - `../pt-BR/other-guide.md`                  -> same guide in another language
 * - `index.md`                                 -> /<base>/<lang>/
 * - `/images/x.png`, `/en/guides/x/`           -> prefixed with the base path
 * - `https://…`                                -> opens in a new tab
 */
function rehypeLinks(lang: Locale, base: string) {
  const mdLink = /^(?:\.\/)?(?:\.\.\/([A-Za-z-]+)\/)?([a-z0-9-]+)\.md(#.*)?$/
  const withBase = (url: string) => (url.startsWith('/') && !url.startsWith('//') ? base + url.slice(1) : url)
  return () => (tree: HastRoot) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        if (typeof node.properties.src === 'string') node.properties.src = withBase(node.properties.src)
        node.properties.loading = 'lazy'
        node.properties.decoding = 'async'
        return
      }
      if (node.tagName !== 'a' || typeof node.properties.href !== 'string') return
      const href = node.properties.href
      const md = mdLink.exec(href)
      if (md) {
        const targetLang = md[1] && isLocale(md[1]) ? md[1] : lang
        const slug = md[2]
        node.properties.href = `${base}${targetLang}/${slug === 'index' ? '' : `guides/${slug}/`}${md[3] ?? ''}`
      } else if (/^https?:\/\//.test(href)) {
        node.properties.target = '_blank'
        node.properties.rel = ['noopener', 'noreferrer']
      } else {
        node.properties.href = withBase(href)
      }
    })
  }
}

/** Wraps <pre> in a toolbar with a language label and a Copy button (wired up client-side). */
function rehypeCodeBlocks(lang: Locale) {
  const dict = t(lang)
  return () => (tree: HastRoot) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre' || !parent || index === undefined) return
      const code = node.children.find((c): c is Element => c.type === 'element' && c.tagName === 'code')
      const classes = (code?.properties.className as Array<string> | undefined) ?? []
      const language = classes.find((c) => c.startsWith('language-'))?.slice('language-'.length) ?? ''
      node.properties.tabIndex = 0
      const wrapper = h('div.code-block', [
        h('div.code-block-bar', [
          language ? h('span.code-block-lang', language) : h('span'),
          h('button.copy-btn', { type: 'button', 'data-copy': '', 'data-copied-label': dict.copied, title: dict.copyCode }, dict.copy),
        ]),
        node,
      ])
      parent.children[index] = wrapper as ElementContent
      return [SKIP, index + 1]
    })
  }
}

/** Text under each `##`/`###` heading (and the intro before the first one), for the search index. */
interface TextChunk {
  heading: DocHeading | null
  text: string
}

function rehypeCollectText(chunks: Array<TextChunk>) {
  return () => (tree: HastRoot) => {
    let current: TextChunk = { heading: null, text: '' }
    chunks.push(current)
    for (const node of tree.children) {
      if (node.type !== 'element') continue
      const id = node.properties.id
      if ((node.tagName === 'h2' || node.tagName === 'h3') && typeof id === 'string' && id !== 'footnote-label') {
        current = { heading: { id, text: hastToString(node).trim(), depth: node.tagName === 'h2' ? 2 : 3 }, text: '' }
        chunks.push(current)
      } else {
        current.text += ` ${hastToString(node)}`
      }
    }
    for (const chunk of chunks) chunk.text = chunk.text.replace(/\s+/g, ' ').trim()
  }
}

/** Task-list checkboxes can be ticked on screen (state is saved per page by <Prose>). */
function rehypeTaskLists() {
  return (tree: HastRoot) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'li' || !(node.properties.className as Array<string> | undefined)?.includes('task-list-item')) return
      const isInput = (c: ElementContent): c is Element => c.type === 'element' && c.tagName === 'input'
      const paragraph = node.children.find((c): c is Element => c.type === 'element' && c.tagName === 'p')
      const input = node.children.find(isInput) ?? paragraph?.children.find(isInput)
      if (!input) return
      delete input.properties.disabled
      const label = node.children
        .filter((c) => !(c.type === 'element' && (c.tagName === 'ul' || c.tagName === 'ol')))
        .map((c) => hastToString(c))
        .join('')
        .replace(/\s+/g, ' ')
        .trim()
      if (label) input.properties.ariaLabel = label.length > 120 ? `${label.slice(0, 119)}…` : label
    })
  }
}

/** Tables scroll horizontally on small screens instead of breaking the layout. */
function rehypeTables() {
  return (tree: HastRoot) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'table' || !parent || index === undefined) return
      parent.children[index] = h('div.table-wrap', { tabIndex: 0 }, [node]) as ElementContent
      return [SKIP, index + 1]
    })
  }
}

function compile(source: string, opts: { lang: Locale; slug: string; base: string; file: string }) {
  const { data, body } = splitFrontmatter(source, opts.file)
  const meta = parseMeta(opts.lang, opts.slug, data, body, opts.file)
  const headings: Array<DocHeading> = []
  const chunks: Array<TextChunk> = []
  const html = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkCallouts, opts.lang)
    .use(remarkRehype, {
      allowDangerousHtml: true,
      footnoteLabel: t(opts.lang).footnotes,
      footnoteBackLabel: t(opts.lang).backToContent,
    })
    .use(rehypeDemoteH1)
    .use(rehypeSlug)
    .use(rehypeCollectHeadings(headings))
    .use(rehypeCollectText(chunks))
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      test: (node: Element) => node.properties.id !== 'footnote-label',
      properties: { className: ['heading-anchor'], ariaLabel: t(opts.lang).permalink },
      content: { type: 'text', value: '#' },
    })
    .use(rehypeLinks(opts.lang, opts.base))
    .use(rehypeCodeBlocks(opts.lang))
    .use(rehypeTables)
    .use(rehypeTaskLists)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(body)
  return { doc: { meta, html: String(html), headings } satisfies DocModule, chunks }
}

export function compileMarkdown(source: string, opts: { lang: Locale; slug: string; base: string; file: string }): DocModule {
  return compile(source, opts).doc
}

function searchEntries(source: string, opts: { lang: Locale; slug: string; base: string; file: string }): Array<SearchEntry> {
  const { doc, chunks } = compile(source, opts)
  const { slug, title, icon, description } = doc.meta
  return chunks
    .filter((chunk) => chunk.heading || chunk.text)
    .map((chunk) => ({
      id: `${slug}#${chunk.heading?.id ?? ''}`,
      slug,
      title,
      icon,
      heading: chunk.heading?.text ?? null,
      anchor: chunk.heading?.id ?? null,
      description: chunk.heading ? '' : description,
      text: chunk.text,
    }))
}

const xmlEscape = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]!)

/** sitemap.xml with hreflang alternates. Sitemaps need absolute URLs, so this needs SITE_URL. */
function buildSitemap(files: Array<ContentFile>, siteUrl: string, base: string): string {
  const url = (path: string) => xmlEscape(siteUrl + base + path.slice(1))
  const link = (lang: string, path: string) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url(path)}"/>`
  const entries = [
    [
      `    <loc>${url('/')}</loc>`,
      ...LOCALES.map((lang) => link(lang, pagePath(lang, 'index'))),
      link('x-default', '/'),
    ],
  ]
  for (const { lang, slug, file } of files) {
    const { data, body } = splitFrontmatter(fs.readFileSync(file, 'utf8'), file)
    const { updated } = parseMeta(lang, slug, data, body, file)
    const langs = LOCALES.filter((l) => files.some((f) => f.lang === l && f.slug === slug))
    entries.push([
      `    <loc>${url(pagePath(lang, slug))}</loc>`,
      ...(updated ? [`    <lastmod>${updated}</lastmod>`] : []),
      ...(langs.length > 1 ? langs.map((l) => link(l, pagePath(l, slug))) : []),
      ...(langs.length > 1 && langs.includes('en') ? [link('x-default', pagePath('en', slug))] : []),
    ])
  }
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries.map((lines) => `  <url>\n${lines.join('\n')}\n  </url>`),
    '</urlset>',
    '',
  ].join('\n')
}

export function contentPlugin(options: { contentDir: string; siteUrl: string }): Plugin {
  const contentDir = path.resolve(options.contentDir)
  let base = '/'

  return {
    name: 'guide-content',
    enforce: 'pre',
    configResolved(config) {
      base = config.base.endsWith('/') ? config.base : `${config.base}/`
    },
    resolveId(id) {
      return id.startsWith(SEARCH_INDEX_ID) ? `\0${id}` : null
    },
    load(id) {
      if (id.startsWith(`\0${SEARCH_INDEX_ID}`)) {
        const lang = id.slice(SEARCH_INDEX_ID.length + 1)
        if (!isLocale(lang)) throw new Error(`[content] unknown search index language: ${lang}`)
        const entries = scanContent(contentDir)
          .filter((f) => f.lang === lang)
          .flatMap(({ slug, file }) => {
            this.addWatchFile(file)
            return searchEntries(fs.readFileSync(file, 'utf8'), { lang, slug, base, file: path.relative(process.cwd(), file) })
          })
        return `export default ${JSON.stringify(entries)}`
      }

      const [file, query = ''] = id.split('?', 2)
      if (!file.endsWith('.md') || !file.startsWith(contentDir + path.sep)) return null
      if (query !== '' && query !== 'meta') return null // e.g. ?raw — let Vite handle it

      const rel = path.relative(contentDir, file).split(path.sep)
      const [lang, name] = rel
      if (rel.length !== 2 || !isLocale(lang)) {
        throw new ContentError(file, `content must live in content/<${LOCALES.join('|')}>/<slug>.md`)
      }
      const slug = name.slice(0, -3)
      if (!SLUG_RE.test(slug)) {
        throw new ContentError(file, 'file name must be a lowercase-kebab-case slug, e.g. image-generation.md')
      }

      const source = fs.readFileSync(file, 'utf8')
      const relFile = path.relative(process.cwd(), file)
      if (query === 'meta') {
        const { data, body } = splitFrontmatter(source, relFile)
        return `export default ${JSON.stringify(parseMeta(lang, slug, data, body, relFile))}`
      }
      return `export default ${JSON.stringify(compileMarkdown(source, { lang, slug, base, file: relFile }))}`
    },
    generateBundle() {
      if (this.environment.name !== 'client') return
      const { siteUrl } = options
      const robots = ['User-agent: *', 'Allow: /']
      if (siteUrl) {
        const files = scanContent(contentDir).map((f) => ({ ...f, file: path.relative(process.cwd(), f.file) }))
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: buildSitemap(files, siteUrl, base) })
        robots.push('', `Sitemap: ${siteUrl}${base}sitemap.xml`)
      } else {
        this.warn('SITE_URL is not set, so sitemap.xml is not generated (sitemaps need absolute URLs)')
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots.join('\n')}\n` })
    },
  }
}
