import { useCallback, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from '@tanstack/react-router'
import type MiniSearch from 'minisearch'
import type { SearchEntry } from '../lib/content-types'
import { t, type Locale } from '../lib/i18n'
import { loadSearch, runSearch, type SearchHit } from '../lib/search'

function SearchIcon({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

/** Header button + modal search dialog. Opens with "/" or Ctrl/⌘+K. */
export function Search({ lang }: { lang: Locale }) {
  const dict = t(lang)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const [session, setSession] = useState(0) // a fresh, empty panel each time search opens

  const openSearch = useCallback(() => {
    if (dialogRef.current?.open) return
    dialogRef.current?.showModal()
    setOpen(true)
    setSession((n) => n + 1)
  }, [])
  const closeSearch = useCallback(() => dialogRef.current?.close(), [])

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      const target = e.target as HTMLElement
      const typing = target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)
      const isCtrlK = e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey
      const isSlash = e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey
      if (isCtrlK || isSlash) {
        e.preventDefault()
        openSearch()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openSearch])

  return (
    <>
      <button
        type="button"
        onClick={openSearch}
        aria-haspopup="dialog"
        aria-keyshortcuts="/ Control+K Meta+K"
        title={dict.searchLabel}
        className="inline-flex h-9 items-center gap-2 rounded-lg border border-zinc-200 px-2.5 text-sm text-zinc-600 hover:border-brand-500 hover:text-brand-700 sm:w-44 lg:w-56 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
      >
        <SearchIcon className="size-[1.125rem] shrink-0" />
        <span className="sr-only sm:not-sr-only">{dict.search}</span>
        <kbd className="ml-auto hidden rounded border border-zinc-200 px-1.5 font-sans text-xs text-zinc-500 sm:inline dark:border-zinc-700 dark:text-zinc-400">
          /
        </kbd>
      </button>
      <dialog
        ref={dialogRef}
        aria-label={dict.searchLabel}
        // `close` fires asynchronously; ignore it if the dialog was already reopened.
        onClose={() => !dialogRef.current?.open && setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeSearch() // backdrop
        }}
        className="search-dialog mx-auto mt-[min(10vh,6rem)] mb-auto w-[calc(100%-1.5rem)] max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white p-0 text-zinc-800 shadow-2xl backdrop:bg-zinc-950/50 backdrop:backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
      >
        {open && <SearchPanel key={session} lang={lang} onClose={closeSearch} />}
      </dialog>
    </>
  )
}

function hitLink(lang: Locale, hit: SearchHit) {
  const hash = hit.anchor ?? undefined
  return hit.slug === 'index'
    ? ({ to: '/$lang/', params: { lang }, hash } as const)
    : ({ to: '/$lang/guides/$slug/', params: { lang, slug: hit.slug }, hash } as const)
}

function SearchPanel({ lang, onClose }: { lang: Locale; onClose: () => void }) {
  const dict = t(lang)
  const listId = useId()
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState<MiniSearch<SearchEntry> | null>(null)
  const [failed, setFailed] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let cancelled = false
    loadSearch(lang).then(
      (index) => !cancelled && setSearch(index),
      () => !cancelled && setFailed(true),
    )
    return () => {
      cancelled = true
    }
  }, [lang])

  const trimmed = query.trim()
  const hits = useMemo(() => (search && trimmed ? runSearch(search, trimmed) : []), [search, trimmed])
  const optionId = (i: number) => `${listId}-${i}`

  useEffect(() => setActive(0), [hits])
  useEffect(() => {
    document.getElementById(optionId(active))?.scrollIntoView({ block: 'nearest' })
  })

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const step = e.key === 'ArrowDown' ? 1 : -1
      setActive((i) => (hits.length ? (i + step + hits.length) % hits.length : 0))
    } else if (e.key === 'Enter' && hits[active]) {
      e.preventDefault()
      document.getElementById(optionId(active))?.querySelector('a')?.click()
    }
  }

  let message: string | null = null
  if (failed) message = dict.searchError
  else if (!trimmed) message = dict.searchEmpty
  else if (!search) message = dict.searchLoading
  else if (hits.length === 0) message = dict.searchNoResults(trimmed)

  return (
    <div className="flex max-h-[min(38rem,80dvh)] flex-col">
      <div className="flex shrink-0 items-center gap-3 border-b border-zinc-200 px-4 dark:border-zinc-800">
        <SearchIcon className="size-5 shrink-0 text-zinc-400" />
        <input
          autoFocus
          type="text"
          inputMode="search"
          enterKeyHint="go"
          autoComplete="off"
          spellCheck={false}
          role="combobox"
          aria-label={dict.searchLabel}
          aria-autocomplete="list"
          aria-controls={listId}
          aria-expanded={hits.length > 0}
          aria-activedescendant={hits.length > 0 ? optionId(active) : undefined}
          placeholder={dict.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          className="h-14 min-w-0 flex-1 bg-transparent text-base text-zinc-900 outline-none placeholder:text-zinc-500 focus-visible:outline-none dark:text-white"
        />
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-md border border-zinc-200 px-1.5 py-0.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-white"
        >
          <span aria-hidden="true">Esc</span>
          <span className="sr-only">{dict.close}</span>
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-2">
        <ul id={listId} role="listbox" aria-label={dict.searchLabel} hidden={hits.length === 0}>
          {hits.map((hit, i) => (
            <li key={hit.id} id={optionId(i)} role="option" aria-selected={i === active} onMouseMove={() => setActive(i)}>
              <Link
                {...hitLink(lang, hit)}
                tabIndex={-1}
                onClick={onClose}
                className={`block rounded-xl px-3 py-2.5 ${i === active ? 'bg-brand-50 dark:bg-brand-950/70' : ''}`}
              >
                <span className="flex min-w-0 items-baseline gap-1.5 text-sm font-semibold text-zinc-900 dark:text-white">
                  {hit.icon && (
                    <span aria-hidden="true" className="shrink-0">
                      {hit.icon}
                    </span>
                  )}
                  <span className="truncate">
                    {hit.title}
                    {hit.heading && (
                      <>
                        <span aria-hidden="true" className="mx-1.5 font-normal text-zinc-400">
                          ›
                        </span>
                        <span className={i === active ? 'text-brand-800 dark:text-brand-200' : ''}>{hit.heading}</span>
                      </>
                    )}
                  </span>
                </span>
                {hit.snippet.length > 0 && (
                  <span className="mt-0.5 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {hit.snippet.map((part, j) =>
                      part.match ? (
                        <mark key={j} className="rounded-sm bg-gold-200 px-0.5 text-inherit dark:bg-gold-500/30">
                          {part.text}
                        </mark>
                      ) : (
                        part.text
                      ),
                    )}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {message && <p className="px-3 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">{message}</p>}
      </div>

      <p role="status" className="sr-only">
        {trimmed && search ? dict.searchResults(hits.length) : ''}
      </p>
      <p className="hidden shrink-0 border-t border-zinc-200 px-4 py-2 text-xs text-zinc-500 sm:block dark:border-zinc-800 dark:text-zinc-400">
        {dict.searchHelp}
      </p>
    </div>
  )
}
