import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '../components/NotFound'
import { t } from '../lib/i18n'

// Prerendered to /404.html (see vite.config.ts); scripts/postbuild.mjs strips its
// scripts so GitHub Pages can serve it as a plain static page for any missing URL.
export const Route = createFileRoute('/404')({
  head: () => ({
    meta: [
      { title: `404 · ${t('en').notFoundTitle} · ${t('pt-BR').notFoundTitle}` },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: NotFound,
})
