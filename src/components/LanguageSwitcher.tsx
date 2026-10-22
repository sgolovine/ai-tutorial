import { Link, useParams } from '@tanstack/react-router'
import { hasDoc } from '../lib/content'
import { otherLocale, t, type Locale } from '../lib/i18n'

export const LANG_STORAGE_KEY = 'preferred-lang'

export function rememberLanguage(lang: Locale) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang)
  } catch {
    // storage unavailable (private mode etc.) — not important
  }
}

/** Links to the same guide in the other language (or its home if it doesn't exist yet). */
export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const { slug } = useParams({ strict: false })
  const target = otherLocale(lang)
  const className =
    'inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-2.5 py-1.5 text-sm font-medium text-zinc-700 hover:border-brand-500 hover:text-brand-700 dark:border-zinc-800 dark:text-zinc-200 dark:hover:border-brand-400 dark:hover:text-brand-300'
  const label = (
    <>
      <span aria-hidden="true" className="text-xs font-bold uppercase tracking-wide">
        {target === 'en' ? 'EN' : 'PT'}
      </span>
      <span className="hidden sm:inline">{t(target).languageName}</span>
    </>
  )
  const common = {
    className,
    hrefLang: target,
    lang: target,
    'aria-label': t(lang).switchLanguage,
    title: t(lang).switchLanguage,
    onClick: () => rememberLanguage(target),
  }

  if (slug && hasDoc(target, slug)) {
    return (
      <Link to="/$lang/guides/$slug/" params={{ lang: target, slug }} {...common}>
        {label}
      </Link>
    )
  }
  return (
    <Link to="/$lang/" params={{ lang: target }} {...common}>
      {label}
    </Link>
  )
}
