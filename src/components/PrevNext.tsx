import { Link } from '@tanstack/react-router'
import type { DocMeta } from '../lib/content-types'
import { t, type Locale } from '../lib/i18n'

export function PrevNext({ lang, prev, next }: { lang: Locale; prev?: DocMeta; next?: DocMeta }) {
  if (!prev && !next) return null
  const dict = t(lang)
  const card =
    'group flex flex-col gap-1 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-brand-500 dark:border-zinc-800 dark:hover:border-brand-400'
  return (
    <nav aria-label={`${dict.previous} / ${dict.next}`} className="mt-16 grid gap-4 border-t border-zinc-200 pt-8 sm:grid-cols-2 print:hidden dark:border-zinc-800">
      {prev ? (
        <Link to="/$lang/guides/$slug/" params={{ lang, slug: prev.slug }} rel="prev" className={card}>
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">← {dict.previous}</span>
          <span className="font-semibold text-zinc-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next && (
        <Link to="/$lang/guides/$slug/" params={{ lang, slug: next.slug }} rel="next" className={`${card} sm:text-right`}>
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{dict.next} →</span>
          <span className="font-semibold text-zinc-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  )
}
