# AI for Conference Marketing · IA para Marketing de Eventos

A bilingual (English / Brazilian Portuguese) guide site. It shows a small team how to use AI
tools and organic Facebook, Instagram and WhatsApp to promote an education conference in Brazil.

It is built with [TanStack Start](https://tanstack.com/start), fully prerendered to static
HTML, and deployed to GitHub Pages.

## Develop

Requirements: Node 24+ and pnpm (the version is pinned in `package.json` → `packageManager`).

```sh
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck
pnpm build        # static site in dist/client/
pnpm preview      # serves dist/client/ the way GitHub Pages does (http://localhost:4173)
```

To build and preview under a sub-path, as on GitHub Pages:

```sh
BASE_PATH=/ai-marketing-info/ pnpm build
BASE_PATH=/ai-marketing-info/ pnpm preview   # http://localhost:4173/ai-marketing-info/
```

| Env var     | Default | Purpose                                                                          |
| ----------- | ------- | -------------------------------------------------------------------------------- |
| `BASE_PATH` | `/`     | URL prefix the site is served under (`/<repo-name>/` for Pages project sites).   |
| `SITE_URL`  | (empty) | Public origin, e.g. `https://user.github.io`, for canonical, Open Graph and hreflang URLs. |

## Add or edit content

Content is Markdown in `content/en/` and `content/pt-BR/`. **Read
[`content/README.md`](content/README.md)** for the frontmatter fields, sections, callouts,
links and images. New files are found and prerendered automatically. Interface text (nav
labels, section names, buttons) lives in `src/lib/i18n.ts`.

## Deploy (GitHub Pages)

1. Push the repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow by hand). The site is published
   at `https://<user>.github.io/<repo-name>/`.

`.github/workflows/deploy.yml` gets `BASE_PATH` and `SITE_URL` from `actions/configure-pages`,
so it also works for user sites and custom domains. `.github/workflows/ci.yml` runs a typecheck
and a build on every pull request.

## How it works

- `plugins/content.ts`: a Vite plugin that compiles each `.md` file at build time (frontmatter
  validation, GFM, callouts, heading anchors, copy buttons, link rewriting). Only HTML reaches
  the browser.
- `src/lib/content.ts`: finds all content with `import.meta.glob`. Frontmatter is bundled for
  navigation, and each page body is a lazy-loaded chunk.
- `src/routes/`: `/` (language chooser that auto-detects the browser language), `/$lang/` (home)
  and `/$lang/guides/$slug/` (guide).
- `vite.config.ts`: lists every content file as a prerender page. Links are crawled as well.
- `scripts/postbuild.mjs`: makes `404.html` static, writes `.nojekyll` and checks that every
  page was generated.
