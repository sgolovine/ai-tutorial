import type { Locale, Section } from './i18n.ts'

/** Frontmatter + identity of one Markdown file (content/<lang>/<slug>.md). */
export interface DocMeta {
  lang: Locale
  slug: string
  title: string
  description: string
  order: number
  section: Section | null
  icon: string | null
  updated: string | null
}

export interface DocHeading {
  id: string
  text: string
  depth: 2 | 3
}

/** What `import doc from 'content/en/x.md'` resolves to (compiled at build time). */
export interface DocModule {
  meta: DocMeta
  html: string
  headings: Array<DocHeading>
}
