import { notFound } from '@tanstack/react-router'
import type { DocMeta, DocModule } from './content-types'
import { SECTIONS, type Locale, type Section } from './i18n'

// Globs pick up new files automatically. `?meta` is small (frontmatter only) and
// bundled eagerly for navigation; full documents are separate lazy chunks.
const metaModules = import.meta.glob<DocMeta>('/content/*/*.md', { query: '?meta', import: 'default', eager: true })
const docModules = import.meta.glob<DocModule>('/content/*/*.md', { import: 'default' })

const allMeta = Object.values(metaModules)

export interface NavGroup {
  section: Section
  docs: Array<DocMeta>
}

function byOrder(a: DocMeta, b: DocMeta) {
  return a.order - b.order || a.title.localeCompare(b.title)
}

/** Guides (everything except index.md) grouped by section, in navigation order. */
export function getNav(lang: Locale): Array<NavGroup> {
  const guides = allMeta.filter((m) => m.lang === lang && m.slug !== 'index')
  return SECTIONS.map((section) => ({
    section,
    docs: guides.filter((m) => m.section === section).sort(byOrder),
  })).filter((group) => group.docs.length > 0)
}

export function getGuideList(lang: Locale): Array<DocMeta> {
  return getNav(lang).flatMap((group) => group.docs)
}

export function hasDoc(lang: Locale, slug: string): boolean {
  return `/content/${lang}/${slug}.md` in docModules
}

export async function loadDoc(lang: Locale, slug: string): Promise<DocModule> {
  const load = docModules[`/content/${lang}/${slug}.md`]
  if (!load) throw notFound()
  return load()
}
