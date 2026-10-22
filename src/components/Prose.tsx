import { useRouter } from '@tanstack/react-router'
import { useEffect, useRef, type MouseEvent } from 'react'

const BASE = import.meta.env.BASE_URL

// Ticked task-list items (`- [ ]`) are remembered per page, so a checklist survives a reload.
const checklistKey = () => `checklist:${window.location.pathname}`
const checkboxes = (root: HTMLElement | null) =>
  Array.from(root?.querySelectorAll<HTMLInputElement>('.task-list-item input[type="checkbox"]') ?? [])
const taskLabels = (boxes: Array<HTMLInputElement>) => boxes.map((box) => box.closest('li')?.textContent?.trim() ?? '')

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

/** Renders compiled Markdown HTML; wires up Copy buttons, checklists and client-side navigation for internal links. */
export function Prose({ html }: { html: string }) {
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const copyTimers = useRef(new Map<HTMLButtonElement, ReturnType<typeof setTimeout>>())

  useEffect(() => {
    const boxes = checkboxes(ref.current)
    if (boxes.length === 0) return
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(checklistKey()) ?? 'null')
      if (saved && typeof saved === 'object' && 'tasks' in saved && 'checked' in saved) {
        const checked = saved.checked
        if (JSON.stringify(saved.tasks) === JSON.stringify(taskLabels(boxes)) && Array.isArray(checked) && checked.length === boxes.length) {
          boxes.forEach((box, i) => (box.checked = checked[i] === true))
        }
      }
    } catch {
      // storage unavailable or invalid — start unticked
    }
  }, [html])

  useEffect(() => {
    const timers = copyTimers.current
    return () => {
      timers.forEach(clearTimeout)
      timers.clear()
    }
  }, [html])

  // Collapsed <details> would hide their content on paper.
  useEffect(() => {
    const expand = () => ref.current?.querySelectorAll('details:not([open])').forEach((d) => d.setAttribute('open', ''))
    window.addEventListener('beforeprint', expand)
    return () => window.removeEventListener('beforeprint', expand)
  }, [])

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement

    if (target.matches('.task-list-item input[type="checkbox"]')) {
      try {
        const boxes = checkboxes(ref.current)
        localStorage.setItem(checklistKey(), JSON.stringify({ tasks: taskLabels(boxes), checked: boxes.map((box) => box.checked) }))
      } catch {
        // storage unavailable — ticks last until the page is left
      }
      return
    }

    const button = target.closest<HTMLButtonElement>('button[data-copy]')
    if (button) {
      const code = button.closest('.code-block')?.querySelector('pre')
      if (!code) return
      void copyText(code.textContent.replace(/\n$/, '')).then(() => {
        const original = button.dataset.copyLabel ??= button.textContent ?? ''
        clearTimeout(copyTimers.current.get(button))
        button.textContent = button.dataset.copiedLabel ?? original
        button.dataset.state = 'copied'
        copyTimers.current.set(button, setTimeout(() => {
          button.textContent = original
          delete button.dataset.state
          copyTimers.current.delete(button)
        }, 2000))
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

  return <div ref={ref} className="guide-prose" onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
