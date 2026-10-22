import { LOCALES, t, type Locale } from './i18n'

declare const __SITE_URL__: string

const BASE = import.meta.env.BASE_URL

/** Path inside the site (no base), e.g. `/en/guides/x/` -> `/<base>/en/guides/x/`. */
export function withBase(path: string): string {
  return BASE + path.replace(/^\/+/, '')
}

/** Absolute URL when SITE_URL is configured, otherwise a root-relative one. */
export function absoluteUrl(path: string): string {
  return __SITE_URL__ + withBase(path)
}

export function localePath(lang: Locale, slug?: string): string {
  return slug && slug !== 'index' ? `/${lang}/guides/${slug}/` : `/${lang}/`
}

interface SeoInput {
  lang: Locale
  title: string
  description: string
  path: string
  /** Paths of this page in each language (for hreflang alternates). */
  alternates?: Partial<Record<Locale, string>>
  type?: 'website' | 'article'
}

export function seo({ lang, title, description, path, alternates = {}, type = 'website' }: SeoInput) {
  const dict = t(lang)
  const fullTitle = title === dict.siteName ? title : `${title} · ${dict.siteName}`
  const url = absoluteUrl(path)
  const meta = [
    { title: fullTitle },
    { name: 'description', content: description },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: dict.siteName },
    { property: 'og:locale', content: dict.ogLocale },
    ...LOCALES.filter((l) => l !== lang && alternates[l]).map((l) => ({
      property: 'og:locale:alternate',
      content: t(l).ogLocale,
    })),
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
  ]
  const links = [
    { rel: 'canonical', href: url },
    ...LOCALES.flatMap((l) => {
      const alt = alternates[l]
      return alt ? [{ rel: 'alternate', hrefLang: l, href: absoluteUrl(alt) }] : []
    }),
    ...(alternates.en ? [{ rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl(path === `/${lang}/` ? '/' : alternates.en) }] : []),
  ]
  return { meta, links }
}
