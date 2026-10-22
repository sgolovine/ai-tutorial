import { useRouter } from '@tanstack/react-router'
import type { MouseEvent } from 'react'

const BASE = import.meta.env.BASE_URL

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // Fallback for older browsers / non-secure contexts
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    document.execCommand('copy')
    area.remove()
  }
}

/** Renders compiled Markdown HTML; wires up Copy buttons and client-side navigation for internal links. */
export function Prose({ html }: { html: string }) {
  const router = useRouter()

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement

    const button = target.closest<HTMLButtonElement>('button[data-copy]')
    if (button) {
      const code = button.closest('.code-block')?.querySelector('pre')
      if (!code) return
      void copyText(code.textContent.replace(/\n$/, '')).then(() => {
        const original = button.textContent
        button.textContent = button.dataset.copiedLabel ?? original
        button.dataset.state = 'copied'
        setTimeout(() => {
          button.textContent = original
          delete button.dataset.state
        }, 2000)
      })
      return
    }

    const link = target.closest<HTMLAnchorElement>('a[href]')
    if (
      !link ||
      link.target ||
      link.hasAttribute('download') ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }
    const url = new URL(link.href)
    if (url.origin !== window.location.origin || !url.pathname.startsWith(BASE)) return
    if (url.pathname === window.location.pathname && url.hash) return // in-page anchor: native behaviour
    if (/\.[a-z0-9]+$/i.test(url.pathname)) return // file (image, pdf…)
    event.preventDefault()
    void router.navigate({ href: url.pathname + url.search + url.hash })
  }

  return <div className="guide-prose" onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
