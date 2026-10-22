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

## THE ACTUAL CONFERENCE (tailor ALL content to this) — see docs/conference-announcement.md
**CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação** ("Desenvolvimento, Participação e Educação Antirracista").
- Dates: **5–6 December 2026**, **100% online**. Today is 2026-10-21 → only ~6.5 weeks of campaign left. Content must include an urgent, compressed 6-week plan (and a general reusable timeline for future editions).
- Registration on **Even3** (https://www.even3.com.br/iconafroedu-764690/). Contact via WhatsApp (19) and Gmail — small volunteer/academic organizing committee.
- Offers: paper presentations, publication in proceedings (Anais) with **ISBN and DOI**, **40-hour certificate**, submission types: artigo completo, resumo expandido, práticas exitosas.
- Audience: teachers (educação básica), undergrad & grad students (pós-graduação), researchers, school managers, professionals; national (all of Brazil).
- Themes: Africanidades, Afro-Brazilian history & culture, anti-racist education, ethnic-racial relations (ERER), teacher training.
- Big timely hooks: **20 de novembro – Dia Nacional de Zumbi e da Consciência Negra** (national holiday) falls inside the campaign window; "Novembro Negro"; Lei 10.639/2003 & 11.645/2008 (mandatory Afro-Brazilian/Indigenous history teaching).
- Natural partners: NEABIs/NEABs (Núcleos de Estudos Afro-Brasileiros e Indígenas) at universities, ABPN (Associação Brasileira de Pesquisadores/as Negros/as), education graduate programs, teacher unions/secretariats, Black-led education collectives & creators.
- Hashtags they already use: #CONAFROEDU #EducaçãoAntirracista #Africanidades #CongressoOnline #CongressoAcadêmico #PesquisaEmEducação ...

### Content implications
- Use CONAFROEDU as the running worked example everywhere (real name, dates, offers) — not a fictional event.
- Selling points for academics: certificate hours (horas complementares / progressão), ISBN/DOI publication, presenting research — content should show how to market these.
- Online event → no venue; focus on lives, Zoom/YouTube/StreamYard, clipping talks after, digital certificates.
- **Representation & bias are critical**: AI image/video models can stereotype Black people and African cultures (exoticism, generic "African" patterns, colorism, wrong hair textures, mixing unrelated cultures). Content must teach how to prompt respectfully, review outputs critically, prefer real photos of real participants (with consent) and Black Brazilian artists/designers where possible, avoid caricature, and disclose AI use. Cultural symbols (Adinkra, orixás/religious imagery, Kente etc.) need care and accuracy.
- Tone: academic yet warm, community-driven, respectful; pt-BR is the primary audience language.

### Verified key dates (from Even3 page, see docs/research/04-conafroedu-context.md §2.2–2.3)
- This is the **1st edition** (I CONAFROEDU) — don't invent past editions.
- Paper submissions (+ presenter video) close **4 Nov 2026** → only 2 weeks of submission campaign. Review result within 5 business days.
- Multi-submission packages until 5 Nov. Current ticket tier ends **15 Nov**; prices rise **16 Nov** (R$55–70 → R$60–75) — a natural urgency hook.
- **20 Nov** Consciência Negra → attendance/registration push (not submissions).
- Program published by **25 Nov**. Congress **5–6 Dec** (08:00–22:00 BRT). Certificates from 6 Dec. Proceedings by 15 Dec.
- Proceedings publication carries an extra R$ 16,98/paper fee. Official presence: Even3 page + Instagram @congressosnacionais_online; no verified Facebook Page/Event found — the guide should include "set up your Facebook Page/Event properly" steps.
- Open questions for organizers (flag in content, don't invent answers): presentation mandatory vs optional; certificate eligibility; deadline extension (prorrogação) plans.
