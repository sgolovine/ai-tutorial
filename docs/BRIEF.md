# Project Brief: "AI for Conference Marketing" guide site

## Who it's for
A small team of friends marketing an **education-focused conference in Brazil**. They are not AI experts.
- Primary channel: **Facebook** (also consider Instagram + WhatsApp, which are huge in Brazil and share Meta tooling).
- **Organic only** — no paid-ads budget. Free/cheap tools preferred; always mention free tiers & costs.

## What the site must teach (comprehensive guides, tips, everything)
1. Getting started: which AI assistants/models exist and what each is best at (Claude, ChatGPT/GPT, Gemini, Meta AI, Grok, open models...).
2. Image generation: best models, when to use which, prompting, brand consistency, Portuguese text in images.
3. Video generation: best models (Veo, Sora, Kling, Runway, etc.), short-form Reels, avatars/dubbing, prompting.
4. Stop-motion / motion graphics with Claude (Claude writing SVG/HTML/CSS/JS animations, Remotion, frame-by-frame, exporting to MP4/GIF).
5. Facebook organic playbook for events (Pages, Events, Groups, Reels, Stories, Live, algorithm, posting cadence, Brazil timing).
6. Copywriting & content calendar with AI (bilingual, pt-BR tone, campaign phases: announce → speakers → early bird → countdown → live → recap).
7. Automation: scheduling (Meta Business Suite), computer-use agents (Claude computer use, ChatGPT agent, etc.), n8n/Make/Zapier, auto-replies, Messenger/WhatsApp Business, outreach — WITH platform-policy and ethics guardrails (no spam, no fake accounts).
8. Extra tips & tricks: speaker co-marketing kits, partnerships with schools/universities, UGC, LGPD/privacy, accessibility, measuring results, prompt library, checklists.

## Languages
English (`en`) and Brazilian Portuguese (`pt-BR`). Every page exists in both. pt-BR must read natively (not literal translation).

## Tech
- TanStack Start (React, file-based routing), fully static prerendered output for **GitHub Pages**.
- GitHub Actions workflow builds & deploys to Pages on push to `main`.
- Content lives as Markdown files in `content/<locale>/<slug>.md` with frontmatter (see content/README.md once created) so content agents and technical agents work independently.

## Repo layout
- `docs/research/` — research notes from research agents (sources + findings, dated).
- `content/en/`, `content/pt-BR/` — page content.
- `src/` — app code.
- `.github/workflows/` — CI/CD.

## Rules for agents
- Do NOT run `git commit` — the supervisor commits. Only touch files in your assigned area.
- Today's date is 2026-10-21. AI tools change fast: prefer sources from 2026; flag anything you could not verify as current.
