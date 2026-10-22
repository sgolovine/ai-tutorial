import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { NotFound } from './components/NotFound'

export function getRouter() {
  return createRouter({
    routeTree,
    basepath: import.meta.env.BASE_URL,
    // GitHub Pages serves /x/index.html at /x/ and redirects /x -> /x/
    trailingSlash: 'always',
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultNotFoundComponent: NotFound,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
