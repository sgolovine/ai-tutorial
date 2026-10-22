import { Link, createFileRoute } from '@tanstack/react-router'
import { Prose } from '../../components/Prose'
import { getGuideList, getNav, hasDoc, loadDoc } from '../../lib/content'
import type { DocEvent } from '../../lib/content-types'
import { LOCALES, t, type Locale } from '../../lib/i18n'
import { localePath, seo } from '../../lib/seo'

export const Route = createFileRoute('/$lang/')({
  loader: async ({ context }) => ({ doc: await loadDoc(context.lang, 'index') }),
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { meta } = loaderData.doc
    return seo({
      lang: meta.lang,
      title: meta.title,
      description: meta.description,
      path: localePath(meta.lang),
      alternates: Object.fromEntries(LOCALES.filter((l) => hasDoc(l, 'index')).map((l) => [l, localePath(l)])),
    })
  },
  component: Home,
})

const GUIDE_INDEX_ID = 'guide-index'

function Home() {
  const { lang } = Route.useRouteContext()
  const { doc } = Route.useLoaderData()
  const dict = t(lang)
  const guides = getGuideList(lang)
  const first = guides.find((guide) => guide.slug === 'conafroedu-sprint') ?? guides[0]

  return (
    <div className="mx-auto max-w-4xl">
      <section className="relative overflow-hidden rounded-3xl border border-brand-100 bg-linear-to-br from-brand-50 via-white to-gold-100/70 px-6 py-10 sm:px-10 sm:py-14 dark:border-brand-900/70 dark:from-brand-950/80 dark:via-zinc-950 dark:to-gold-950/40 print:border-0 print:bg-none print:p-0">
        <div aria-hidden="true" className="hero-pattern pointer-events-none absolute inset-y-0 right-0 w-1/2 print:hidden" />
        <p className="relative text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">{dict.siteName}</p>
        <h1 className="relative mt-3 text-3xl font-bold tracking-tight text-balance text-zinc-900 sm:text-5xl dark:text-white">
          {doc.meta.icon && <span aria-hidden="true">{doc.meta.icon} </span>}
          {doc.meta.title}
        </h1>
        <p className="relative mt-4 max-w-2xl text-lg text-pretty text-zinc-600 dark:text-zinc-300">{doc.meta.description}</p>
        {first && (
          <div className="relative mt-8 flex flex-wrap gap-3 print:hidden">
            <Link
              to="/$lang/guides/$slug/"
              params={{ lang, slug: first.slug }}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white shadow-sm hover:bg-brand-800 dark:bg-brand-400 dark:text-brand-950 dark:hover:bg-brand-300"
            >
              {dict.startCampaign} <span aria-hidden="true">→</span>
            </Link>
            <a
              href={`#${GUIDE_INDEX_ID}`}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/70 px-5 py-3 font-semibold text-zinc-800 hover:border-brand-500 hover:text-brand-700 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:border-brand-400 dark:hover:text-brand-300"
            >
              {dict.allGuides} <span aria-hidden="true">↓</span>
            </a>
          </div>
        )}
      </section>

      {doc.meta.event && <EventBanner lang={lang} event={doc.meta.event} />}

      {doc.html.trim() && (
        <div className="mt-12">
          <Prose html={doc.html} />
        </div>
      )}

      <GuideIndex />
    </div>
  )
}

function EventBanner({ lang, event }: { lang: Locale; event: DocEvent }) {
  const dict = t(lang)
  return (
    <aside
      aria-label={dict.eventLabel}
      className="mt-6 flex flex-col gap-4 rounded-2xl border border-gold-300 bg-gold-50 p-5 sm:flex-row sm:items-center sm:p-6 dark:border-gold-800/70 dark:bg-gold-950/50"
    >
      <span aria-hidden="true" className="hidden size-12 shrink-0 items-center justify-center rounded-xl bg-gold-400 text-gold-950 sm:flex">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
          <path d="M3.5 10h17M8 3v4M16 3v4M8 14h3M8 17h6" />
        </svg>
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-800 dark:text-gold-300">{dict.eventLabel}</p>
        <p className="mt-1 text-lg font-bold text-balance text-zinc-900 dark:text-white">{event.name}</p>
        <p className="mt-0.5 text-sm text-zinc-700 dark:text-zinc-300">
          <span className="font-semibold">{event.dates}</span>
          {event.details && <> · {event.details}</>}
        </p>
      </div>
      <a
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white shadow-sm hover:bg-brand-800 sm:ml-auto dark:bg-brand-400 dark:text-brand-950 dark:hover:bg-brand-300"
      >
        {event.cta ?? dict.eventCta} <span aria-hidden="true">↗</span>
        <span className="sr-only">{dict.opensInNewTab}</span>
      </a>
    </aside>
  )
}

function GuideIndex() {
  const { lang } = Route.useRouteContext()
  const dict = t(lang)

  return (
    <section aria-labelledby={GUIDE_INDEX_ID} className="mt-16">
      <h2 id={GUIDE_INDEX_ID} className="scroll-mt-24 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {dict.allGuides}
      </h2>
      <div className="mt-8 space-y-12">
        {getNav(lang).map(({ section, docs }, i) => (
          <section key={section} aria-labelledby={`${GUIDE_INDEX_ID}-${section}`} className="break-inside-avoid-page">
            <div className="flex items-end justify-between gap-4 border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <div className="min-w-0">
                <h3 id={`${GUIDE_INDEX_ID}-${section}`} className="flex items-center gap-2.5 text-lg font-semibold text-zinc-900 dark:text-white">
                  <span aria-hidden="true" className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white dark:bg-brand-400 dark:text-brand-950">
                    {i + 1}
                  </span>
                  {dict.sections[section].label}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{dict.sections[section].description}</p>
              </div>
              <span className="shrink-0 pb-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">{dict.guidesInSection(docs.length)}</span>
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {docs.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    to="/$lang/guides/$slug/"
                    params={{ lang, slug: doc.slug }}
                    className="group flex h-full gap-3.5 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-brand-400 hover:shadow-md motion-safe:hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-brand-500"
                  >
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-xl dark:bg-gold-900/40">
                      {doc.icon ?? '📄'}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold leading-snug text-zinc-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                        {doc.title}
                      </span>
                      <span className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{doc.description}</span>
                      <span className="mt-2 block text-xs text-zinc-500 dark:text-zinc-400">{dict.readingTime(doc.readingMinutes)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
