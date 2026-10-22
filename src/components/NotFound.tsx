import { Link } from '@tanstack/react-router'
import { LOCALES, t } from '../lib/i18n'

/** Bilingual on purpose: it's also the static 404.html, where the language is unknown. */
export function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-6 py-16">
      <p className="font-mono text-sm font-semibold text-brand-700 dark:text-brand-300">404</p>
      <div className="mt-4 grid gap-10 sm:grid-cols-2">
        {LOCALES.map((lang) => {
          const dict = t(lang)
          return (
            <section key={lang} lang={lang}>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{dict.notFoundTitle}</h1>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">{dict.notFoundBody}</p>
              <Link
                to="/$lang/"
                params={{ lang }}
                className="mt-6 inline-flex items-center gap-1 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 dark:bg-brand-500 dark:text-brand-950 dark:hover:bg-brand-400"
              >
                {dict.backHome} <span aria-hidden="true">→</span>
              </Link>
            </section>
          )
        })}
      </div>
    </main>
  )
}
