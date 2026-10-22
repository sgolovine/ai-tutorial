export const THEMES = ['system', 'light', 'dark'] as const
export type Theme = (typeof THEMES)[number]

export const THEME_STORAGE_KEY = 'theme'

export function readTheme(): Theme {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : 'system'
  } catch {
    return 'system'
  }
}

/** Sets `.dark` and `data-theme` on <html>. Mirrors `themeInitScript` below. */
export function applyTheme(theme: Theme) {
  const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.dataset.theme = theme
}

export function saveTheme(theme: Theme) {
  try {
    if (theme === 'system') localStorage.removeItem(THEME_STORAGE_KEY)
    else localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // storage unavailable (private mode etc.) — the choice lasts for this page only
  }
  applyTheme(theme)
}

/** Inline in <head> so the right theme is set before first paint (no flash). */
export const themeInitScript = `(function(){var t;try{t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})}catch(e){}if(t!=='light'&&t!=='dark')t='system';var r=document.documentElement;r.dataset.theme=t;if(t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches))r.classList.add('dark')})()`
