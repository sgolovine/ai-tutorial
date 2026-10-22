import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { contentPlugin, pagePath, scanContent } from './plugins/content.ts'

/** `BASE_PATH=/repo-name/` for GitHub Pages project sites; defaults to `/`. */
function normalizeBase(value: string | undefined): string {
  const trimmed = (value ?? '').trim().replace(/^\/+|\/+$/g, '')
  return trimmed ? `/${trimmed}/` : '/'
}

const base = normalizeBase(process.env.BASE_PATH)
/** Public origin, e.g. https://user.github.io — used for canonical/OG/hreflang URLs. */
const siteUrl = (process.env.SITE_URL ?? '').trim().replace(/\/+$/, '')

// Every Markdown file becomes a prerendered page. These paths include the base so
// they dedupe against crawled links; static routes ('/', '/404') are auto-discovered
// without it.
const contentPages = scanContent('content').map(({ lang, slug }) => ({
  path: base + pagePath(lang, slug).slice(1),
}))

export default defineConfig({
  base,
  define: {
    __SITE_URL__: JSON.stringify(siteUrl),
  },
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    contentPlugin({ contentDir: 'content', siteUrl }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
      pages: [
        // Rendered once and turned into a static, script-free 404.html by scripts/postbuild.mjs
        { path: '/404', prerender: { enabled: true, outputPath: '/404.html' } },
        ...contentPages,
      ],
    }),
    viteReact(),
  ],
})
