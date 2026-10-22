import { Link, createFileRoute } from '@tanstack/react-router'
import { Prose } from '../../components/Prose'
import { getGuideList, getNav, hasDoc, loadDoc } from '../../lib/content'
import { LOCALES, t } from '../../lib/i18n'
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

function Home() {
  const { lang } = Route.useRouteContext()
  const { doc } = Route.useLoaderData()
  const dict = t(lang)
  const guides = getGuideList(lang)
  const first = guides[0]

  return (
    <div className="mx-auto max-w-4xl">
      <section className="relative overflow-hidden rounded-3xl border border-brand-100 bg-linear-to-br from-brand-50 via-white to-sun-200/40 px-6 py-10 sm:px-10 sm:py-14 dark:border-brand-900 dark:from-brand-950 dark:via-zinc-950 dark:to-zinc-900">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">{dict.siteName}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance text-zinc-900 sm:text-5xl dark:text-white">
          {doc.meta.icon && <span aria-hidden="true">{doc.meta.icon} </span>}
          {doc.meta.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-zinc-600 dark:text-zinc-300">{doc.meta.description}</p>
        {first && (
          <Link
            to="/$lang/guides/$slug/"
            params={{ lang, slug: first.slug }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white shadow-sm hover:bg-brand-800 dark:bg-brand-400 dark:text-brand-950 dark:hover:bg-brand-300"
          >
            {dict.startReading} <span aria-hidden="true">→</span>
          </Link>
        )}
      </section>

      <SectionCards />

      {doc.html.trim() && (
        <div className="mt-14">
          <Prose html={doc.html} />
        </div>
      )}
    </div>
  )
}

function SectionCards() {
  const { lang } = Route.useRouteContext()
  const dict = t(lang)

  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {getNav(lang).map(({ section, docs }) => (
        <section key={section} className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">{dict.sections[section].label}</h2>
            <span className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400">{dict.guidesInSection(docs.length)}</span>
          </div>
          <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">{dict.sections[section].description}</p>
          <ul className="mt-4 space-y-1.5">
            {docs.map((doc) => (
              <li key={doc.slug}>
                <Link
                  to="/$lang/guides/$slug/"
                  params={{ lang, slug: doc.slug }}
                  className="flex items-start gap-2 text-[0.9375rem] font-medium text-brand-700 hover:underline dark:text-brand-300"
                >
                  <span aria-hidden="true" className="w-5 shrink-0 text-center">
                    {doc.icon ?? '→'}
                  </span>
                  <span>{doc.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
