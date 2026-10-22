import { Link, createFileRoute } from '@tanstack/react-router'
import { LANG_STORAGE_KEY, rememberLanguage } from '../components/LanguageSwitcher'
import { LOCALES, t } from '../lib/i18n'
import { absoluteUrl } from '../lib/seo'

// Runs before first paint on the prerendered page: sends visitors to their saved
// or browser language. Without JS, the page below is a plain language chooser.
const detectLanguage = `(function(){var l;try{l=localStorage.getItem(${JSON.stringify(LANG_STORAGE_KEY)})}catch(e){}if(l!=='en'&&l!=='pt-BR'){var n=((navigator.languages&&navigator.languages[0])||navigator.language||'').toLowerCase();l=n.indexOf('pt')===0?'pt-BR':'en'}location.replace(${JSON.stringify(import.meta.env.BASE_URL)}+l+'/')})()`

export const Route = createFileRoute('/')({
  head: () => {
    const title = `${t('en').siteName} · ${t('pt-BR').siteName}`
    const description = `${t('en').siteTagline} ${t('pt-BR').siteTagline}`
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: absoluteUrl('/') },
      ],
      links: [
        { rel: 'canonical', href: absoluteUrl('/') },
        ...LOCALES.map((lang) => ({ rel: 'alternate', hrefLang: lang, href: absoluteUrl(`/${lang}/`) })),
        { rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl('/') },
      ],
      scripts: [{ children: detectLanguage }],
    }
  },
  component: LanguageChooser,
})

function LanguageChooser() {
  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6 py-16">
      <div className="mb-10 flex items-center gap-3">
        <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" className="size-10" />
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">
          {t('en').chooseLanguage} · <span lang="pt-BR">{t('pt-BR').chooseLanguage}</span>
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {LOCALES.map((lang) => {
          const dict = t(lang)
          return (
            <Link
              key={lang}
              to="/$lang/"
              params={{ lang }}
              lang={lang}
              hrefLang={lang}
              onClick={() => rememberLanguage(lang)}
              className="group flex flex-col rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-brand-500 hover:bg-brand-50/50 dark:border-zinc-800 dark:hover:border-brand-400 dark:hover:bg-brand-950/40"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {dict.languageName}
              </span>
              <span className="mt-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{dict.siteName}</span>
              <span className="mt-2 text-zinc-600 dark:text-zinc-400">{dict.siteTagline}</span>
              <span className="mt-5 font-semibold text-brand-700 group-hover:underline dark:text-brand-300">
                {dict.startReading} →
              </span>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
