# Instructions for content agents

Read first: docs/BRIEF.md (esp. CONAFROEDU section + verified dates), docs/CONTENT_PLAN.md (your pages), content/README.md (Markdown/frontmatter contract — follow exactly), and the research files in docs/research/ (01 image/video, 02 Facebook, 03 LLMs/motion/automation, 04 CONAFROEDU context & representation). Today is 2026-10-21.

## Writing rules
- Audience: a small volunteer committee of Brazilian educators/academics, NOT tech experts. Explain jargon on first use. Step-by-step, numbered instructions. Concrete over abstract.
- Use CONAFROEDU 2026 as the running example everywhere (real dates/offers from BRIEF). Never invent facts about the event; where the organizers must decide/confirm something, say so explicitly ("confirm with the committee"). Respect the verified deadlines (submissions close 4 Nov; price tier changes 16 Nov; 20 Nov Consciência Negra; event 5–6 Dec).
- Organic only, zero/low budget: always state cost & free-tier status, and the cheapest path first.
- Accuracy: only state tool facts that the research supports. Where research says [UNVERIFIED], either omit or phrase cautiously ("at the time of writing… check current plan page"). Add `updated: 2026-10-21` in frontmatter. Do not include raw [UNVERIFIED] tags in site content. Link to official sources inline for key claims (pricing pages, help docs) — real URLs from the research only, never invented URLs.
- Ethics: no spam, no fake accounts/engagement, no mass unsolicited messaging, respect Meta/WhatsApp policies, LGPD, consent for photos/likeness, disclose AI-generated media. Respectful, accurate representation of Black and Afro-Brazilian people and cultures (see representation-bias page) — cross-link it from image/video pages.
- Every page should include: a short intro ("what you'll get from this page"), the core guide, copy-paste prompts in ```prompt code blocks where relevant, callouts (> [!TIP], > [!WARNING], > [!NOTE]), a checklist (`- [ ]`) where useful, and "Next steps"/related links to other guides (link as `slug.md`).
- Depth: comprehensive. Typical guide 1,500–3,500 words in EN. Use tables for comparisons.
- Headings start at `##`. Description frontmatter: 1–2 sentences.

## Bilingual rules
- Write BOTH `content/en/<slug>.md` and `content/pt-BR/<slug>.md` for each of your pages. Same slug, same structure, same facts.
- pt-BR is the primary audience: it must read as natural Brazilian Portuguese written by a native speaker (not a literal translation) — use "você", natural academic-but-warm tone, Brazilian terms (inscrição, submissão de trabalhos, anais, certificado de 40 horas, chamada, Reels, Stories, grupo, publicação, agendamento, etc.).
- Prompts: in the pt-BR page, prompts are in Portuguese. In the EN page, show prompts in English, and for prompts that generate Portuguese social copy, include a note or the pt-BR version too (the team will post in Portuguese).
- Keep proper nouns/product names in original form; translate UI labels the way Meta/tools show them in Brazilian Portuguese when known (e.g., "Meta Business Suite", "Planejador", "Respostas automáticas") — if unsure, give both.

## Process
- Only write files for your assigned slugs. Do NOT git commit. Do not edit code.
- After writing, run `pnpm build` from the repo root to confirm your files parse (frontmatter validation); fix any errors.
- Reply with: list of files written, word counts, and any facts you were unsure about.
