import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, Outlet, createFileRoute, notFound, useLocation } from '@tanstack/react-router'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'
import { Sidebar } from '../../components/Sidebar'
import { getNav } from '../../lib/content'
import { isLocale, t, type Locale } from '../../lib/i18n'

export const Route = createFileRoute('/$lang')({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.lang)) throw notFound()
    return { lang: params.lang }
  },
  loader: ({ context }) => ({ nav: getNav(context.lang) }),
  component: LangLayout,
})

function LangLayout() {
  const { lang } = Route.useRouteContext()
  const { nav } = Route.useLoaderData()
  const dict = t(lang)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const pathname = useLocation({ select: (l) => l.pathname })

  useEffect(closeMenu, [pathname, closeMenu])

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-lg bg-brand-700 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {dict.skipToContent}
      </a>

      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
          <button
            type="button"
            className="-ml-1 inline-flex size-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 lg:hidden dark:text-zinc-200 dark:hover:bg-zinc-900"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">{dict.menu}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <Link to="/$lang/" params={{ lang }} activeOptions={{ exact: true }} className="flex min-w-0 items-center gap-2.5 font-bold tracking-tight text-zinc-900 dark:text-white">
            <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" className="size-8 shrink-0" />
            <span className="truncate">{dict.siteName}</span>
          </Link>
          <div className="ml-auto">
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto py-8 pr-2">
            <Sidebar lang={lang} nav={nav} />
          </div>
        </aside>
        <main id="main" tabIndex={-1} className="min-w-0 py-8 outline-none lg:py-10">
          <Outlet />
        </main>
      </div>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-zinc-500 sm:px-6 dark:text-zinc-400">{dict.footer}</div>
      </footer>

      {menuOpen && <MobileNav lang={lang} nav={nav} onClose={closeMenu} />}
    </>
  )
}

function MobileNav({ lang, nav, onClose }: { lang: Locale; nav: ReturnType<typeof getNav>; onClose: () => void }) {
  const dict = t(lang)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    panelRef.current?.querySelector<HTMLElement>('button, a')?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      previous?.focus()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm" aria-hidden="true" onClick={onClose} />
      <div
        ref={panelRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label={dict.navLabel}
        className="absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col bg-white shadow-xl dark:bg-zinc-950"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 px-4 dark:border-zinc-800">
          <span className="font-semibold text-zinc-900 dark:text-white">{dict.navLabel}</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            <span className="sr-only">{dict.closeMenu}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto px-2 py-6">
          <Sidebar lang={lang} nav={nav} />
        </div>
      </div>
    </div>
  )
}
