# Content guide (contract between content and site)

Every page on the site is one Markdown file. The site is rebuilt from these files on each
push. **No code changes are needed to add, edit, rename or remove a page.**

## Where files go

```
content/
  en/<slug>.md       English
  pt-BR/<slug>.md    Brazilian Portuguese
```

- The **same slug** (file name) must exist in both languages: `content/en/video-generation.md`
  ↔ `content/pt-BR/video-generation.md`. The slug stays in English in both languages. The
  language switcher uses it to find the matching page. If a translation is missing, the build
  shows a warning and the switcher goes to the other language's home page.
- Slugs are lowercase-kebab-case: `a-z`, `0-9` and `-` only (`image-generation.md`, not
  `Image Generation.md`).
- `index.md` is the language's **home page** (`/en/`, `/pt-BR/`). All other files become
  guides at `/<lang>/guides/<slug>/`.
- `formatting-sample.md` and `getting-started.md` are placeholders. Replace or delete them.

## Frontmatter

Each file starts with YAML frontmatter:

```yaml
---
title: Image generation with AI          # required — page <h1>, <title>, nav label
description: Which image models to use…  # required — one or two sentences; meta description + subtitle
order: 10                                # required for guides — sort order inside its section (lower first)
section: create                          # required for guides — start | create | facebook | automate | extras
icon: 🎨                                 # optional — one emoji shown in nav and title
updated: 2026-10-21                      # optional — YYYY-MM-DD, shown as "Updated …"
---
```

| `section`  | Nav group (en / pt-BR)              | Use for                                      |
| ---------- | ----------------------------------- | -------------------------------------------- |
| `start`    | Getting started / Primeiros passos  | AI assistants overview, first steps          |
| `create`   | Create content / Criar conteúdo     | Images, video, motion graphics, copywriting  |
| `facebook` | Facebook & Meta / Facebook e Meta   | Facebook, Instagram, WhatsApp organic playbook |
| `automate` | Automate / Automação                | Scheduling, agents, n8n/Make/Zapier, guardrails |
| `extras`   | Tips & extras / Dicas e extras      | Partnerships, LGPD, accessibility, metrics, checklists, prompt library |

Sections appear in the order shown. Inside a section, guides are sorted by `order`, then by
title. **Prev/next** links follow the same order across sections. Use gaps (10, 20, 30…) so
you can insert pages later. For `index.md`, only `title` and `description` are required.

If the frontmatter is invalid (a missing field, an unknown section or a bad date), **the build
fails** with an error that names the file. Run `pnpm build` to check your work.

## Body: Markdown features

Use GitHub-flavored Markdown.

- **Headings:** do not write a `# H1`. The title comes from frontmatter. Start at `##`.
  `##` and `###` headings appear in the "On this page" table of contents and get anchor links
  (`#heading-text`).
- **Tables, task lists (`- [ ]`), ~~strikethrough~~, footnotes (`[^1]`) and autolinks** all
  work. Wide tables scroll sideways on phones.
- **Prompts and code:** use fenced code blocks. Every block gets a **Copy** button. Write the
  language after the fence to show a label. Use `prompt` for AI prompts:

  ````markdown
  ```prompt
  Act as a social media manager for an education conference…
  ```
  ````

  Long lines wrap, so you can write prompts as normal paragraphs.

- **Callouts** (GitHub-style alerts):

  ```markdown
  > [!TIP]
  > Post Reels in the evening, Brasília time.

  > [!WARNING] Custom title here
  > The text after the marker replaces the default title.
  ```

  Types: `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`. Default titles are translated
  automatically (Tip → Dica, Warning → Atenção, …).

- **Links between guides:** link to the Markdown file. The build changes it to the correct URL,
  including the GitHub Pages base path:

  ```markdown
  See [video generation](video-generation.md) or [this part](video-generation.md#prompting).
  Back to the [home page](index.md). The English version: [EN](../en/video-generation.md).
  ```

  Do not hard-code `https://…github.io/…` links to our own site.
- **External links** (`https://…`) open in a new tab.
- **Images:** put files in `public/images/…` and write `![Alt text](/images/file.png)`. The base
  path is added for you. Always write alt text.
- Raw HTML is passed through (for example `<kbd>`, or `<details>` for a collapsible block).
  Use it only when necessary.

## Checklist before you finish

1. The file exists in **both** `content/en/` and `content/pt-BR/`, with the same slug.
2. The frontmatter has `title`, `description`, `order` and `section`.
3. There is no `#` H1 in the body.
4. `pnpm build` passes.
