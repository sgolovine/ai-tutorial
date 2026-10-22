import { useEffect, useState } from 'react'
import type { DocHeading } from '../lib/content-types'

/** Highlights the heading currently at the top of the viewport. */
function useActiveHeading(idsKey: string) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const elements = idsKey
      .split(' ')
      .map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return
    const onScroll = () => {
      let current: string | null = null
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= 120) current = el.id
        else break
      }
      setActive(current ?? elements[0].id)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [idsKey])
  return active
}

export function Toc({ headings, title }: { headings: Array<DocHeading>; title: string }) {
  const active = useActiveHeading(headings.map((h) => h.id).join(' '))
  return (
    <nav aria-label={title}>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{title}</h2>
      <ul className="space-y-1.5 border-l border-zinc-200 text-sm dark:border-zinc-800">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? 'location' : undefined}
              className={`-ml-px block border-l-2 py-0.5 leading-snug transition-colors ${h.depth === 3 ? 'pl-6' : 'pl-3'} ${
                active === h.id
                  ? 'border-sun-400 font-medium text-zinc-900 dark:text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
