import { useEffect, useState, type ReactNode } from 'react'
import { t, type Locale } from '../lib/i18n'
import { THEMES, applyTheme, readTheme, saveTheme, type Theme } from '../lib/theme'

const icons: Record<Theme, ReactNode> = {
  system: <path d="M4 5h16v11H4zM9 20h6M12 16v4" />,
  light: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  dark: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />,
}

/** Cycles System → Light → Dark. The icon follows <html data-theme> via CSS, so it is right before hydration. */
export function ThemeToggle({ lang }: { lang: Locale }) {
  const dict = t(lang)
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => setTheme(readTheme()), [])

  useEffect(() => {
    if (theme !== 'system') return
    const query = matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyTheme('system')
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [theme])

  const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]
  const label = `${dict.theme}: ${dict.themes[theme]}`

  return (
    <button
      type="button"
      onClick={() => {
        saveTheme(next)
        setTheme(next)
      }}
      aria-label={label}
      title={`${label} → ${dict.themes[next]}`}
      className="inline-flex size-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:border-brand-500 hover:text-brand-700 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
    >
      {THEMES.map((name) => (
        <svg
          key={name}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`theme-icon theme-icon-${name} size-5`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icons[name]}
        </svg>
      ))}
    </button>
  )
}
