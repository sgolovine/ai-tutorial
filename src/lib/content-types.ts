import type { Locale, Section } from './i18n.ts'

/** Optional `event:` block in index.md frontmatter, shown as a banner on the home page. */
export interface DocEvent {
  name: string
  dates: string
  url: string
  cta: string | null
  details: string | null
}

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
  event: DocEvent | null
  /** Estimated from the body's word count. */
  readingMinutes: number
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

/** One searchable chunk: a page's intro, or the text under one `##`/`###` heading. */
export interface SearchEntry {
  id: string
  slug: string
  title: string
  icon: string | null
  /** null for the intro (text before the first heading). */
  heading: string | null
  anchor: string | null
  description: string
  text: string
}
