/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import { HeadContent, Outlet, Scripts, createRootRoute, useParams } from '@tanstack/react-router'
import { NotFound } from '../components/NotFound'
import { DEFAULT_LOCALE, isLocale } from '../lib/i18n'
import { withBase } from '../lib/seo'
import appCss from '../styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'color-scheme', content: 'light dark' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: withBase('/favicon.svg') },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  const { lang } = useParams({ strict: false })
  return (
    <html lang={isLocale(lang) ? lang : DEFAULT_LOCALE}>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
