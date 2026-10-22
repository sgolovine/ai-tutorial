import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { PrevNext } from '../../../components/PrevNext'
import { Prose } from '../../../components/Prose'
import { Toc } from '../../../components/Toc'
import { getGuideList, hasDoc, loadDoc } from '../../../lib/content'
import { LOCALES, formatDate, t } from '../../../lib/i18n'
import { localePath, seo } from '../../../lib/seo'

export const Route = createFileRoute('/$lang/guides/$slug')({
  loader: async ({ context, params }) => {
    if (params.slug === 'index') throw notFound()
    return { doc: await loadDoc(context.lang, params.slug) }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { meta } = loaderData.doc
    return seo({
      lang: meta.lang,
      title: meta.title,
      description: meta.description,
      path: localePath(meta.lang, meta.slug),
      type: 'article',
      alternates: Object.fromEntries(LOCALES.filter((l) => hasDoc(l, meta.slug)).map((l) => [l, localePath(l, meta.slug)])),
    })
  },
  component: GuidePage,
})

function GuidePage() {
  const { lang } = Route.useRouteContext()
  const { doc } = Route.useLoaderData()
  const { meta, html, headings } = doc
  const dict = t(lang)

  const guides = getGuideList(lang)
  const index = guides.findIndex((g) => g.slug === meta.slug)
  const prev = index > 0 ? guides[index - 1] : undefined
  const next = index >= 0 ? guides[index + 1] : undefined
  const showToc = headings.length > 1

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-10 print:block">
      <article className="mx-auto min-w-0 max-w-3xl xl:mx-0 print:max-w-none">
        <header className="mb-8">
          <nav aria-label={dict.breadcrumb} className="mb-3 text-sm print:hidden text-zinc-500 dark:text-zinc-400">
            <Link to="/$lang/" params={{ lang }} activeOptions={{ exact: true }} className="hover:text-brand-700 dark:hover:text-brand-300">
              {dict.home}
            </Link>
            {meta.section && (
              <>
                <span aria-hidden="true" className="mx-2">
                  /
                </span>
                <span>{dict.sections[meta.section].label}</span>
              </>
            )}
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-balance text-zinc-900 sm:text-4xl dark:text-white">
            {meta.icon && <span aria-hidden="true">{meta.icon} </span>}
            {meta.title}
          </h1>
          <p className="mt-3 text-lg text-pretty text-zinc-600 dark:text-zinc-300">{meta.description}</p>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
            {meta.updated && (
              <>
                <span>
                  {dict.updated} <time dateTime={meta.updated}>{formatDate(lang, meta.updated)}</time>
                </span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span>{dict.readingTime(meta.readingMinutes)}</span>
          </p>
        </header>

        {showToc && (
          <details className="group mb-8 rounded-xl border border-zinc-200 px-4 py-3 xl:hidden print:hidden dark:border-zinc-800">
            <summary className="cursor-pointer font-semibold text-zinc-900 select-none dark:text-white">{dict.onThisPage}</summary>
            <ul className="mt-3 space-y-1.5 text-sm">
              {headings.map((h) => (
                <li key={h.id} className={h.depth === 3 ? 'pl-4' : undefined}>
                  <a href={`#${h.id}`} className="text-zinc-600 hover:text-brand-700 dark:text-zinc-400 dark:hover:text-brand-300">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        )}

        <Prose html={html} />

        <PrevNext lang={lang} prev={prev} next={next} />
      </article>

      {showToc && (
        <aside className="hidden xl:block print:hidden">
          <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto pb-8">
            <Toc headings={headings} title={dict.onThisPage} />
          </div>
        </aside>
      )}
    </div>
  )
}
