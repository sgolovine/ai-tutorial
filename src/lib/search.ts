import type MiniSearch from 'minisearch'
import type { SearchEntry } from './content-types'
import type { Locale } from './i18n'

// Both the index (built from content/<lang>/*.md) and MiniSearch load only when search opens.
const indexLoaders: Record<Locale, () => Promise<{ default: Array<SearchEntry> }>> = {
  en: () => import('virtual:search-index/en'),
  'pt-BR': () => import('virtual:search-index/pt-BR'),
}

const MAX_RESULTS = 20
const MAX_PER_GUIDE = 3
const SNIPPET_LENGTH = 170

/** Lowercase without accents ("Educação" -> "educacao"). Keeps the length, so match positions map back. */
export function fold(text: string): string {
  let out = ''
  for (let i = 0; i < text.length; i++) {
    const folded = text[i].normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()
    out += folded.length === 1 ? folded : text[i]
  }
  return out
}

const cache = new Map<Locale, Promise<MiniSearch<SearchEntry>>>()

export function loadSearch(lang: Locale): Promise<MiniSearch<SearchEntry>> {
  let index = cache.get(lang)
  if (!index) {
    index = Promise.all([import('minisearch'), indexLoaders[lang]()]).then(([{ default: MiniSearch }, { default: entries }]) => {
      const search = new MiniSearch<SearchEntry>({
        // The page title counts fully only for the page's intro; sections under a heading
        // match it weakly (as `guide`), so "video prompts" still finds "Video › Prompts".
        fields: ['pageTitle', 'guide', 'heading', 'description', 'text'],
        extractField: (entry, field) => {
          if (field === 'pageTitle') return entry.heading ? '' : entry.title
          if (field === 'guide') return entry.heading ? entry.title : ''
          return (entry as unknown as Record<string, string>)[field]
        },
        storeFields: ['slug', 'title', 'icon', 'heading', 'anchor', 'description', 'text'],
        processTerm: (term) => fold(term),
        searchOptions: {
          boost: { pageTitle: 4, heading: 2.5, description: 1.5, guide: 0.5 },
          prefix: true,
          fuzzy: (term) => (term.length > 4 ? 0.2 : false),
        },
      })
      search.addAll(entries)
      return search
    })
    index.catch(() => cache.delete(lang)) // allow a retry after a network error
    cache.set(lang, index)
  }
  return index
}

export interface SnippetPart {
  text: string
  match: boolean
}

export interface SearchHit extends Omit<SearchEntry, 'text' | 'description'> {
  snippet: Array<SnippetPart>
}

export function runSearch(search: MiniSearch<SearchEntry>, query: string): Array<SearchHit> {
  let results = search.search(query, { combineWith: 'AND' })
  if (results.length === 0) results = search.search(query)

  const perGuide = new Map<string, number>()
  const hits: Array<SearchHit> = []
  for (const result of results) {
    const entry = result as unknown as SearchEntry
    const count = perGuide.get(entry.slug) ?? 0
    if (count >= MAX_PER_GUIDE) continue
    perGuide.set(entry.slug, count + 1)
    hits.push({
      id: entry.id,
      slug: entry.slug,
      title: entry.title,
      icon: entry.icon,
      heading: entry.heading,
      anchor: entry.anchor,
      snippet: makeSnippet(entry.text || entry.description, result.terms),
    })
    if (hits.length >= MAX_RESULTS) break
  }
  return hits
}

/** ~170 characters around the first match, with every matched word marked. */
function makeSnippet(text: string, terms: Array<string>): Array<SnippetPart> {
  const folded = fold(text)
  const isWordChar = (c: string | undefined) => c !== undefined && /[\p{L}\p{N}]/u.test(c)
  const ranges: Array<[number, number]> = []
  for (const term of terms) {
    for (let i = folded.indexOf(term); i !== -1; i = folded.indexOf(term, i + term.length)) {
      if (!isWordChar(folded[i - 1])) ranges.push([i, i + term.length])
    }
  }
  ranges.sort((a, b) => a[0] - b[0])

  let start = Math.max(0, (ranges[0]?.[0] ?? 0) - 40)
  if (start > 0) start = text.indexOf(' ', start) + 1 || start
  let end = Math.min(text.length, start + SNIPPET_LENGTH)
  if (end < text.length) end = text.lastIndexOf(' ', end) > start ? text.lastIndexOf(' ', end) : end

  const parts: Array<SnippetPart> = []
  let pos = start
  for (const [from, to] of ranges) {
    if (from < pos || to > end) continue
    if (from > pos) parts.push({ text: text.slice(pos, from), match: false })
    parts.push({ text: text.slice(from, to), match: true })
    pos = to
  }
  if (pos < end) parts.push({ text: text.slice(pos, end), match: false })
  if (start > 0) parts.unshift({ text: '…', match: false })
  if (end < text.length) parts.push({ text: '…', match: false })
  return parts
}
