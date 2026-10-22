/**
 * Build-time Markdown pipeline.
 *
 * Any `content/<lang>/<slug>.md` imported by the app is compiled here (in Node),
 * so the browser only ever receives ready-made HTML — no Markdown parser ships
 * to the client.
 *
 *   import doc from '/content/en/x.md'        -> DocModule ({ meta, html, headings })
 *   import meta from '/content/en/x.md?meta'  -> DocMeta (frontmatter only, for nav)
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
import type { DocHeading, DocMeta, DocModule } from '../src/lib/content-types.ts'

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

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

function parseMeta(lang: Locale, slug: string, data: Record<string, unknown>, file: string): DocMeta {
  const isIndex = slug === 'index'
  const str = (key: string, required: boolean): string | null => {
    const value = data[key]
    if (value === undefined || value === null || value === '') {
      if (required) throw new ContentError(file, `frontmatter "${key}" is required`)
      return null
    }
    if (typeof value !== 'string') throw new ContentError(file, `frontmatter "${key}" must be a string`)
    return value.trim()
  }

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

export function compileMarkdown(source: string, opts: { lang: Locale; slug: string; base: string; file: string }): DocModule {
  const { data, body } = splitFrontmatter(source, opts.file)
  const meta = parseMeta(opts.lang, opts.slug, data, opts.file)
  const headings: Array<DocHeading> = []
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
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      test: (node: Element) => node.properties.id !== 'footnote-label',
      properties: { className: ['heading-anchor'], ariaLabel: t(opts.lang).permalink },
      content: { type: 'text', value: '#' },
    })
    .use(rehypeLinks(opts.lang, opts.base))
    .use(rehypeCodeBlocks(opts.lang))
    .use(rehypeTables)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(body)
  return { meta, html: String(html), headings }
}

export function contentPlugin(options: { contentDir: string }): Plugin {
  const contentDir = path.resolve(options.contentDir)
  let base = '/'

  return {
    name: 'guide-content',
    enforce: 'pre',
    configResolved(config) {
      base = config.base.endsWith('/') ? config.base : `${config.base}/`
    },
    load(id) {
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
        const { data } = splitFrontmatter(source, relFile)
        return `export default ${JSON.stringify(parseMeta(lang, slug, data, relFile))}`
      }
      return `export default ${JSON.stringify(compileMarkdown(source, { lang, slug, base, file: relFile }))}`
    },
  }
}
