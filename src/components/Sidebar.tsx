import { Link } from '@tanstack/react-router'
import type { NavGroup } from '../lib/content'
import { t, type Locale } from '../lib/i18n'

const linkBase =
  'flex items-start gap-2 rounded-lg px-3 py-1.5 text-[0.9375rem] leading-snug text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white'
const linkActive =
  'bg-brand-50 font-medium text-brand-800 hover:bg-brand-50 hover:text-brand-800 dark:bg-brand-950 dark:text-brand-200 dark:hover:bg-brand-950 dark:hover:text-brand-200'

export function Sidebar({ lang, nav }: { lang: Locale; nav: Array<NavGroup> }) {
  const dict = t(lang)
  return (
    <nav aria-label={dict.navLabel} className="space-y-6 text-sm">
      <Link
        to="/$lang/"
        params={{ lang }}
        activeOptions={{ exact: true }}
        className={linkBase}
        activeProps={{ className: linkActive, 'aria-current': 'page' }}
      >
        <span aria-hidden="true">🏠</span>
        {dict.home}
      </Link>
      {nav.map((group) => (
        <div key={group.section}>
          <h2 className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {dict.sections[group.section].label}
          </h2>
          <ul className="space-y-0.5">
            {group.docs.map((doc) => (
              <li key={doc.slug}>
                <Link
                  to="/$lang/guides/$slug/"
                  params={{ lang, slug: doc.slug }}
                  className={linkBase}
                  activeProps={{ className: linkActive, 'aria-current': 'page' }}
                >
                  {doc.icon && (
                    <span aria-hidden="true" className="w-5 shrink-0 text-center">
                      {doc.icon}
                    </span>
                  )}
                  <span>{doc.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
