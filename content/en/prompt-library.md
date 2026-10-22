---
title: Prompt Library
description: Every key CONAFROEDU 2026 prompt in one place, grouped by task (fact sheet, planning, copy for each campaign phase, images, video, motion graphics, replies, outreach, measurement, fact-checking and accessibility), each linked to the guide it comes from.
order: 450
section: extras
icon: 📚
updated: 2026-10-21
---

> [!TIP] New to these tools?
> Follow the [setup steps](setup-tools.md#starter-stack) first. If a button or concept is unfamiliar, use the [AI learning guide](learning-with-ai.md) for one small practice task.

This page collects the best prompts from across the site, so you don't have to hunt through the guides during a busy week. Prompts link to their source guides; the canonical fact sheet and voice stay at their source, and each prompt links back to the page that explains when and how to use it. Three prompts for moments no guide covered yet (the switch on 5 November, the final-week access FAQ and the post-event recap) were written for this page; they are marked **new**.

**What you'll get from this page:**

- The **fact sheet** and **brand voice** blocks that go at the start of every chat.
- **Task-based copy-paste prompts** in 11 groups, plus setup and learning help, from planning to accessibility.
- The **`[CONFIRMAR]` convention**, explained once.
- A short **safety checklist** for every AI output.

> [!NOTE] Which language?
> Prompts on this English page are in English. Where a prompt produces social copy, it asks for **Brazilian Portuguese output**, because the team posts in Portuguese; this is marked **Output: pt-BR**. The fact sheet and voice blocks stay in Portuguese, because they hold the official wording. The [Portuguese version of this page](../pt-BR/prompt-library.md) has every prompt fully in Portuguese.

> [!TIP] Do this today: choose one task
> Keep the [sprint](conafroedu-sprint.md) open. Choose: (1) [current fact sheet](prompting-basics.md), (2) [one caption](copywriting.md), (3) [submission checklist](replies-inbox.md), (4) [deadline rollover](replies-inbox.md), (5) [partner invitation](outreach.md), (6) [speaker kit](speaker-partner-kits.md), (7) [real-image alt text](ethics-legal.md), (8) [queue review](scheduling-tools.md), (9) [weekly numbers](measuring-results.md), or (10) [learn a tool](learning-with-ai.md). The full library below is reference material; you do not need to read it end to end.

## How to use this library

1. **Open your main assistant** (Claude, Gemini, ChatGPT; see [Choosing AI tools](choosing-ai-tools.md)), or the Project/Gem/Notebook where you saved the context.
2. **Paste the fact sheet and the voice paragraph** from [section 1](#1-context-the-fact-sheet-and-the-brand-voice), unless they're already saved there.
3. **Copy one prompt** with the **Copy** button and replace everything in `[BRACKETS]`.
4. **Start with one approved core message; then adapt it.** Bundle prompts are optional batch shortcuts; review each output separately. Refine with the follow-ups in [section 3](#3-copy-for-each-campaign-phase).
5. **A second person checks the result** with the [60-second fact check](prompting-basics.md#the-60-second-fact-check) before anything is scheduled.

> [!WARNING]
> Keep personal data out of prompts, except the narrowly documented [approved professional bio workflow](ethics-legal.md). Publication permission alone does not permit external AI processing. Never paste: no registrant lists, CPFs, phone numbers, payment details, private messages, accessibility requests or unpublished papers. Replace identifiers with `[PESSOA]` or `[ESCOLA]`, and analyze numbers only as aggregates ([Ethics, policies & LGPD](ethics-legal.md#4-lgpd-emails-whatsapp-numbers-and-registrant-data)).

## The `[CONFIRMAR]` convention

Follow the single [marker convention in Prompting basics](prompting-basics.md). Search **all unresolved brackets and missing facts**, not just the literal token. Replace with verified facts or remove the entire unsupported claim; keep questions outside publishable copy. Never erase a warning to make an unapproved answer look final.

## Quick index

| # | Task | Prompts | Main source guides |
|---|---|---|---|
| 1 | [Context](#1-context-the-fact-sheet-and-the-brand-voice) | Fact sheet, voice, notebook bio | [Prompting basics](prompting-basics.md) |
| 2 | [Planning](#2-planning-the-week-and-the-calendar) | Weekly plan, campaign calendar, Monday refresh, future edition | [Sprint](conafroedu-sprint.md), [Campaign timeline](campaign-timeline.md) |
| 3 | [Copy for each phase](#3-copy-for-each-campaign-phase) | Master caption, call for papers, authors, speakers, price change, 20 Nov, program, live days, certificates, recap, Event, Groups, WhatsApp | [Copywriting](copywriting.md), [Kits](speaker-partner-kits.md), [Facebook Events & Groups](facebook-events-groups.md) |
| 4 | [Images](#4-images) | Style block, recipes, representation, fixes | [Image prompt cookbook](image-prompts.md), [Representation](representation-bias.md) |
| 5 | [Video](#5-video-and-reels) | Shots, image-to-video, permissions, clips, captions | [Video generation](video-generation.md), [Reels & clips](video-repurposing.md) |
| 6 | [Motion graphics](#6-motion-graphics-with-claude) | Countdown, speaker card, kinetic quote, stop motion | [Motion graphics with Claude](motion-graphics-claude.md) |
| 7 | [Replies & FAQ](#7-replies-and-faq) | Quick replies, AI-drafted replies, FAQ gaps | [Replies & inbox](replies-inbox.md) |
| 8 | [Outreach](#8-outreach-and-partners) | Find NEABs, invitation e-mail, partner packet, ambassadors | [Outreach](outreach.md), [Kits](speaker-partner-kits.md) |
| 9 | [Measurement](#9-measurement) | Weekly analysis, committee summary, spreadsheet | [Measuring results](measuring-results.md) |
| 10 | [Review & fact-check](#10-review-and-fact-check) | Fact comparison, pre-scheduling check, queue and calendar audits, Even3 audit, image review | Several |
| 11 | [Accessibility](#11-accessibility) | Alt text, accessibility review | [Ethics, policies & LGPD](ethics-legal.md) |

## 1. Context: the fact sheet and the brand voice

### 1.1 The official fact sheet (FICHA OFICIAL)

Copy the current, versioned **master FICHA OFICIAL** from [Prompting basics](prompting-basics.md#the-conafroedu-context-block), maintained by Coordination. Check owner/verifier, source, next update, separate registration/submission/video deadlines, partial programme and certificate/proceedings targets. Saved contexts are copies. At closure audit every FAQ/context; remove expired packages after their 5 Nov sales end. This library does not maintain another fact-sheet master.

### 1.2 The brand voice paragraph (VOZ DA MARCA)

Use the exact Portuguese **VOZ DA MARCA — CONAFROEDU** block in [Prompting basics](prompting-basics.md#your-brand-voice-in-one-paragraph) in either language. It is the only canonical voice; copywriting and this library refer to it.

### 1.3 Draft a one-page voice and tone guide

**Output:** pt-BR. **Source:** [Brand kit](brand-kit.md#let-ai-draft-your-voice-document).

```prompt
Using the fact sheet above, draft a one-page "voice and tone guide" for CONAFROEDU 2026 in Brazilian Portuguese, for volunteers and AI assistants to follow.
Include: (1) who we talk to (teachers, undergrad and postgrad students, researchers, school managers, community educators); (2) four voice principles; (3) a table of tone by situation (call for papers, deadline reminder, price change, 20 November, support replies, event days, corrections) with one example sentence each; (4) 10 words/phrases to use and 10 to avoid, with the reason; (5) formatting conventions for dates, money, times and the event name.
The tone must be academic but warm, respectful about race and culture, honest (no fake urgency or promises about MEC, Qualis or career progression). Keep it under 600 words.
```

### 1.4 A starter prompt for a Gemini Notebook (sourced bio)

**Use:** in a Gemini Notebook that holds only approved sources. **Output:** pt-BR. **Source:** [Prompting basics](prompting-basics.md#a-starter-prompt-for-a-gemini-notebook).

```prompt
Use only the sources selected in this notebook. Prepare a 60-word bio of [NAME] for promoting CONAFROEDU 2026, in Brazilian Portuguese.
Separate: (1) publishable text; (2) a table "fact → source/passage"; (3) doubts marked [CONFIRMAR].
Do not confuse people with the same name, do not update job titles by inference, and do not invent degrees, racial self-identification, institution or confirmed participation.
```

### 1.5 Choose your main writer: the 20-minute pt-BR test

**Use:** once, in two or three assistants, with the fact sheet pasted. **Output:** pt-BR. **Source:** [Choosing AI tools](choosing-ai-tools.md#test-them-yourself-a-20-minute-pt-br-comparison).

```prompt
Using ONLY the fact sheet above, write in natural Brazilian Portuguese:
1. A 70-word Facebook invitation for CONAFROEDU 2026.
2. A 20-word hook for a Reel.
3. A reply to the WhatsApp question "Tem certificado?" — don't invent rules; use [CONFIRMAR] where needed.
4. A 120-word e-mail inviting a university education graduate program to share the call for papers.
Mark any information you could not find in the fact sheet.
```

## 2. Planning: the week and the calendar

### 2.1 Plan this week (every Monday)

**Output:** pt-BR. **Source:** [Sprint plan](conafroedu-sprint.md#copy-paste-plan-your-week-with-ai).

```prompt
You are helping a volunteer team deliver the approved CONAFROEDU 2026 campaign. Use ONLY the current fact sheet and approved publishing rows pasted below.
Today: [DATE]. Week: [WEEK]. Available combined person-hours: [X]. Plan: [FULL OR REDUCED].
Approved rows: [PASTE THIS WEEK'S ROWS WITH IDS, DATES, CHANNELS, TOPICS, FORMATS, OWNERS AND STATUS].
Roles: Coordination, Content/Design, Social/Community, Partnerships.
If the rows or their approval are missing, ask for them; do not invent another calendar.

In Brazilian Portuguese:
1. Preserve each approved ID, date, topic and channel. Assign production, fact review, export and scheduling tasks to its owner, with estimated minutes and dependencies.
2. Adapt those rows for other channels only where the approved plan permits; do not add posts to meet a quota.
3. Check deadlines and current facts. Protect daily inbox coverage. If capacity is insufficient, flag the affected rows and propose a reduced scope for Coordination to approve.
4. List proposed date/topic changes separately; do not treat them as approved or scheduled.
No new submission invitations after closure unless the current approved fact sheet confirms an extension. No false urgency; mark necessary unknown facts [CONFIRMAR].
```

### 2.2 The CONAFROEDU 2026 calendar (today → 15 December)

**Output:** a table with pt-BR hooks. **Source:** [Campaign timeline](campaign-timeline.md#2-the-conafroedu-2026-calendar-today--15-december).

```prompt
Build an organic content calendar for CONAFROEDU — Congresso Nacional de Africanidades na Educação, 100% online, 5–6 December 2026. Today is 21 October 2026.
Team: [number] people, [hours] hours per week in total. Main channel: Facebook. Support: Instagram and a WhatsApp Channel.
Verified dates: submissions and presenter video until 4 Nov (closing time: [CONFIRMAR]); review within 5 business days; current ticket tier until 15 Nov, new tier from 16 Nov; 20 Nov is the national holiday Dia Nacional de Zumbi e da Consciência Negra (Friday); official program by 25 Nov; registrations until 6 Dec; certificates expected from 6 Dec; proceedings target 15 Dec.
Approved facts: [paste fact sheet]. Existing materials: [list videos, photos, speakers who agreed].

Rules:
- Separate the call for papers from attendee registration. After 4 Nov, keep submission posts only if a formal extension exists.
- 20 Nov: one sourced educational contribution ending with an educational question. Any congress invitation goes in a separate optional post; no sales CTA or discount in the educational piece.
- Reuse C01–C03 on 26/28/30 Oct (submission how-to, seven-day checklist, classroom Reel); do not add another 28 Oct reminder. Price reminders: Stories/Channel on 10 and 14 Nov.
- Programme-derived itineraries require confirmed session details; partial Even3 listings are not the final timetable.
- Honest urgency only (real dates); no "últimas vagas" for an online event without a confirmed cap.
- Maximum 4 Facebook posts per week, at most 2 videos; one Event update per week; 1–2 WhatsApp Channel updates per week.
- Do not invent observances, speakers, testimonials or availability.

Output a table with: date, proposed BRT time, objective, funnel, audience, topic, format, source material, hook in pt-BR, CTA, UTM content code, owner, reviewer, estimated effort, metric, hypothesis being tested. Flag any recommendation without evidence as HYPOTHESIS.
```

### 2.3 Weekly calendar refresh

**Source:** [Campaign timeline](campaign-timeline.md#3-weekly-refresh-every-monday).

```prompt
Here is last week's content calendar with results (aggregated numbers only, no personal data) and next week's planned rows.
Last week: [paste rows with clicks, questions, registrations/submissions].
Next week: [paste rows]. Today's date: [date]. Approved facts: [paste].

1) Flag any row that mentions a deadline that has passed or a fact that changed (e.g., submissions after 4 Nov, old prices after 16 Nov).
2) Separate observation, hypothesis and missing information. Don't claim causality from small numbers.
3) Propose at most 2 changes for next week, with time cost and how we'll judge them.
4) Return the corrected next-week table.
```

### 2.4 A reusable calendar for a future edition

**Use:** when planning the next CONAFROEDU or another academic congress. **Source:** [Campaign timeline](campaign-timeline.md#1-reusable-calendar-for-a-future-edition).

```prompt
You are a campaign planner for an online academic congress in Brazil (education, anti-racist education, Africanidades).
Event dates: [T]. Submission deadline: [date]. Review turnaround: [days]. Presenter video deadline: [date]. Price tier changes: [dates]. Program release: [date]. Registration closes: [date].
Team: [number] volunteers, [hours] total hours per week. Main channel: Facebook Page + Event. Support: Instagram and a WhatsApp Channel. No ad budget.

1) Check the dates for problems (e.g., video deadline before review results, submissions closing too close to the event) and list them first.
2) Build a week-by-week plan from T−24 weeks to T+6 weeks using these phases: foundation, announcement, call for papers, speaker reveals, price tier, program depth, objection handling, countdown, live event, recap, resources, continuing relationship.
3) Keep two funnels separate: authors (submissions) and participants (registrations). After the submission deadline, no submission CTAs.
4) Maximum 4 Facebook posts per week, including at most 2 videos. Include time for replies and human review.
Output a table: week, dates, phase, funnel, Facebook posts, Event update, Instagram, WhatsApp, partner action, main metric. Write hooks in natural Brazilian Portuguese.
Do not invent speakers, prices, partners, testimonials or observances. Mark anything without evidence as HYPOTHESIS.
```

## 3. Copy for each campaign phase

These prompts produce the posts themselves. Example outputs for each moment, a hook bank and an editing checklist are in [Copywriting with AI](copywriting.md).

> [!TIP] How the "Task:" prompts work
> Prompts in this section that start with **"Task:"** come from [Copywriting with AI](copywriting.md#the-master-caption-prompt). Use them inside the master caption prompt (3.1): replace its `Task:` line with the one below, or paste the task right after the fact sheet and the voice paragraph.

### 3.1 The master caption prompt (any post)

**Output:** pt-BR. **Source:** [Copywriting with AI](copywriting.md#the-master-caption-prompt). A similar three-caption prompt is in the [Facebook playbook](facebook-playbook.md#prompt-three-facebook-captions-from-approved-facts), and the annotated teaching example is in [Prompting basics](prompting-basics.md#the-anatomy-of-a-good-prompt).

```prompt
You are the communications writer for CONAFROEDU 2026, an online academic congress on Africanidades and anti-racist education in Brazil.
[Paste the CONAFROEDU context block and the canonical VOZ DA MARCA block here]

Use ONLY the approved facts above. Do not invent benefits, statistics, testimonials, speakers, certificate rules, institutional support, accessibility services or scarcity. If something essential is missing, write [CONFIRMAR] outside the publishable text.

Task: [e.g. a Facebook post inviting basic-education teachers to submit a "práticas exitosas" report before 4 November]
Audience: [specific segment]
Channel and format: [Facebook post / Instagram caption / Reel hook / Story frames], [length]

Write 3 versions in natural Brazilian Portuguese (not translated-sounding), 80–130 words each, with different openings:
1) a concrete problem from teaching practice; 2) a genuine question; 3) a documented benefit.
Each with exactly one call to action and the Even3 link. Up to 3 relevant hashtags at the end.
Do not ask for likes, tags or shares. After the versions, list every fact you used and anything a person must check.
```


### 3.2 Follow-ups that improve any draft

**Source:** [Prompting basics](prompting-basics.md#iterate-the-second-prompt-is-where-quality-happens). Send them one at a time, in the same chat.

```prompt
Shorter, same facts. Max 40 words.
```

```prompt
Less formal — like a colleague talking, not an institution. Keep every date and price exactly the same.
```

```prompt
Remove anything that sounds like a promise we can't guarantee (credit hours, MEC recognition, progression, limited places).
```

```prompt
Explain the difference between registering (inscrição) and submitting a paper (submissão) in two simple sentences a first-time author would understand.
```

### 3.3 Make AI copy sound human and academic-warm

**Output:** pt-BR. **Source:** [Copywriting with AI](copywriting.md#make-ai-copy-sound-human-and-academic-warm).

```prompt
Revise this text so it sounds like Brazilian Portuguese written by a team of educators: warm, precise, educator-to-educator. Keep every fact and the intent; add no sales arguments. Remove marketing clichés, Anglicisms, excessive exclamation marks and emojis, and empty adjectives. Replace abstractions with the concrete examples already in the text. Deliver: the revised text, a list of changes, and any ambiguity to confirm.
Text: [paste]
```

### 3.4 Call for papers (now → 4 November)

**Output:** pt-BR. **Source:** [Quick start, day 4](quick-start.md#day-4--the-first-posts--90-min). This one is self-contained and also gives you the WhatsApp version.

```prompt
Using only the fact sheet and the brand voice above, write a Facebook post in Brazilian Portuguese for the CONAFROEDU 2026 call for papers.
Goal: get teachers, students and researchers to open the submission rules on Even3.
Include: the 4 November deadline; that the congress is on 5 and 6 December, 100% online; the accepted formats as listed in the fact sheet; that publication in the proceedings has a separate fee of R$ 16,98 per work; the Even3 link.
Up to 110 words, one call to action, up to 3 hashtags at the end. Mark anything uncertain as [CONFIRMAR].
Then give me a 40-word version for WhatsApp (no hashtags, link on its own line).
```

**Angle for first-time authors** (a Task for the master prompt; source: [Copywriting](copywriting.md#1-call-for-papers-now--4-november)):

```prompt
Task: a Facebook post for the call for papers. Audience: teachers who have never submitted to a congress. Angle: a classroom practice they already did can become a "práticas exitosas / relato de experiência" submission. Mention: submissions until 4 de novembro de 2026; read the rules on Even3 first; the submitting author must be registered; publication in the Anais has a separate fee of R$ 16,98 per paper. Do not say "submissão gratuita" without explaining the registration and publication costs.
```

> [!WARNING]
> Write the final-day reminder ("encerram hoje, 4 de novembro, às…") only after the committee confirms the exact cut-off time.

### 3.5 Accepted authors: "Trabalho aprovado"

**Use:** as review results arrive (within 5 business days of each submission). Never publish an author's name without consent. **Output:** pt-BR.

A template for authors plus a congratulations post from the organizers (Task; source: [Copywriting](copywriting.md#2-trabalho-aprovado-as-review-results-arrive)):

```prompt
Task: write a short, warm caption template that an AUTHOR can post on their own profile to share that their paper was accepted at CONAFROEDU 2026. Leave blanks for [título do trabalho], [modalidade] and [coautoras/es]. Mention the congress dates and the Even3 link for colleagues who want to attend. First person, proud but modest, no exaggeration ("publicação garantida", "Qualis") and no claims about the presentation format. Also write a 2-line organizer post congratulating "as autoras e os autores aprovados" without naming anyone.
```

Personal captions for one author who asks for help (source: [Speaker & partner kits](speaker-partner-kits.md#prompt-personalize-captions-for-an-author)):

```prompt
You are helping an author write a short, personal social post in Brazilian Portuguese.
Facts (do not add anything else): the author's work "[TITLE]" ([MODALITY]) was accepted at the I CONAFROEDU – Congresso Nacional de Africanidades na Educação, 5–6 December 2026, 100% online. Registration link: [TRACKED LINK]. Today is [DATE]; paper submissions close on 4 November 2026 (only mention submissions if today is on or before that date).
Write 3 options of 50–90 words in natural, warm pt-BR, first person, for Facebook/Instagram and WhatsApp Status:
1) proud and personal; 2) focused on why the topic matters for schools; 3) a short invitation to colleagues.
Do not claim publication, DOI, Qualis, presentation time or certificate hours. Do not ask for likes or shares. Use at most 2 hashtags (#CONAFROEDU #EducaçãoAntirracista).
```

### 3.6 The switch on 5 November: submissions closed, registrations open (new)

**Use:** on Thursday 5 November, unless the committee has officially extended the deadline. **Output:** pt-BR. **Based on:** [Sprint plan, week 2](conafroedu-sprint.md#week-2--mon-2-to-sun-8-nov-close-submissions-switch-to-attendance).

```prompt
Using ONLY the fact sheet above, write in natural Brazilian Portuguese:
1. A Facebook post (60–100 words) that thanks everyone who submitted work, states that submissions closed on 4 November, and invites teachers, students and researchers to register as listeners (ouvintes) for 5 and 6 December, 100% online. Make clear that taking part does not require presenting a paper. One call to action with the Even3 link.
2. A new pinned-post text with only the current essentials: what, when, for whom, how to register, contact.
3. Replacements for /prazo and /comosubmeter, plus an audit of /inscricao, /valores, /modalidades, /video and /prorrogacao; use attendance wording and never imply buying a ticket reopens submissions. Remove expired package offers at their sales end.
Do not mention any extension unless the fact sheet shows one. Mark anything uncertain as [CONFIRMAR].
```

### 3.7 Speakers: invitation video script

**Output:** pt-BR. **Source:** [Reels, clips & captions](video-repurposing.md#speaker-invitation-videos-recorded-on-a-phone). Offer it as a suggestion; speakers sound best in their own words.

```prompt
Write a 20–25 second video script in Brazilian Portuguese for a confirmed speaker to record on their phone, inviting people to CONAFROEDU 2026 (Congresso Nacional de Africanidades na Educação, 5 and 6 December 2026, 100% online, registration on Even3). Speaker: [NAME], [ROLE/INSTITUTION — as approved]. Talk topic: [APPROVED TOPIC]. Structure: (1) one-line introduction, (2) one concrete question or idea from the talk that matters to teachers, (3) invitation with "inscrições pelo Even3, link na publicação". Natural spoken language, short sentences, no exaggerated claims, no promises about certificates beyond what is written here. Give two versions: one more formal, one warmer.
```

### 3.8 Speakers: bio from approved sources

**Output:** pt-BR. **Source:** [Speaker & partner kits](speaker-partner-kits.md#prompt-speaker-bio-from-approved-sources). For a bio built inside a Gemini Notebook, use prompt 1.4.

```prompt
Use ONLY the source text below. Write two bios of [FULL NAME, exactly as written] for the CONAFROEDU 2026 program: 60 words and 120 words, third person, in natural Brazilian Portuguese.
Then give me a table "fact → exact sentence in the source".
Mark anything unclear as [CONFIRMAR]. Do not add degrees, positions, awards, institutions, racial self-identification or publications that are not in the source. Do not correct the spelling of names.
Source: [PASTE ONLY MINIMAL PROFESSIONAL BIO APPROVED FOR THIS EXTERNAL AI PROCESSING; OTHERWISE STOP AND WRITE MANUALLY]
```

### 3.9 Speakers: the full kit drafts

**Output:** pt-BR. **Source:** [Speaker & partner kits](speaker-partner-kits.md#prompt-the-full-speaker-kit-drafts).

```prompt
Prepare draft materials for a promo kit for confirmed speaker [NAME].
Approved topic: [TOPIC]. Event facts: [PASTE FACT SHEET]. What we really know about their audience: [INFO or "unknown"]. Agreed benefits for the speaker: [DESCRIBE or "none"].
Deliver in Brazilian Portuguese: (1) a short personal invitation caption, (2) a caption built around one useful idea from their topic, (3) a factual caption with date and link, (4) a 30-second vertical video script in their voice, (5) a short message they could forward to a colleague or institution.
For a benefit-for-post arrangement, check eligibility and use Meta’s paid partnership label plus clear caption disclosure; Collab does not replace it. Do not claim support from the institution where they work. Do not invent credentials or quotes. Do not write as if they already approved. Mark where the tracked link goes. Everything will be reviewed by the team and by the speaker.
```

### 3.10 Speakers: an Instagram Collab Reel script

**Output:** pt-BR. **Source:** [Instagram & WhatsApp](instagram-whatsapp.md#a-collab-reel-script-with-a-speaker).

```prompt
Write a 45-second vertical video script in natural Brazilian Portuguese for an Instagram Collab between CONAFROEDU and a confirmed speaker.
Speaker: [name, as approved]. Approved topic: [topic]. Audience: [e.g., history teachers].
Structure: a concrete classroom question in the first 3 seconds → one useful answer or example (most of the time) → a one-line, factual invitation to CONAFROEDU (5–6 December, 100% online, link in bio).
Don't invent credentials, quotes or results. Mark lines the speaker must approve. Add on-screen caption text and a short alt-text-style description of the video.
```

### 3.11 Price change: 15 → 16 November

**Use:** a reminder around 12 November and a short one on 15 November, after checking prices in the Even3 checkout that day. **Output:** pt-BR. **Source (Task):** [Copywriting](copywriting.md#3-price-change-15--16-november).

```prompt
Task: a Facebook post about the registration price change. Facts: current values valid until 15 de novembro; from 16 de novembro they change. Ouvinte/público geral R$ 55,00 → R$ 60,00; graduação + 1 submissão R$ 55,00 → R$ 60,00; pós-graduação + 1 submissão R$ 60,00 → R$ 65,00; professor(a)/profissional da educação + 1 submissão R$ 70,00 → R$ 75,00. Note: since submissions closed on 4/11, focus on participating as ouvinte unless the committee says otherwise. Calm, factual tone; no "últimas vagas", no pressure.
```

### 3.12 Consciência Negra: Friday 20 November

**Use:** for a substantive educational contribution, ideally shaped and approved by the Black educator the team invited ([sprint, week 4](conafroedu-sprint.md#week-4--mon-16-to-sun-22-nov-novembro-negro-and-20-november)). If you invite people to the congress, do it in a separate, short post. **Output:** pt-BR. **Source (Task):** [Copywriting](copywriting.md#4-consciência-negra-friday-20-november).

```prompt
Task: a Facebook carousel text (4 slides + caption) for 20 de novembro. Content: slide 1 the question "20 de novembro no calendário; ERER no cotidiano?"; slide 2 what Lei 10.639/2003 changed (Afro-Brazilian history and culture in the curriculum, and 20 November in the school calendar); slide 3 Lei 11.645/2008 (adds Indigenous history and culture); slide 4 one practical question for the next school-planning meeting. Cite the laws by number only, no invented statistics or quotes. Caption: reflective and respectful, with sources, credit and a genuine educational question. Keep any optional congress invitation in a **separate post**. No discount, no urgency, no submission call.
```

> [!CAUTION]
> Check every legal fact against the official texts on Planalto before publishing: [Lei 10.639/2003](https://www.planalto.gov.br/ccivil_03/leis/2003/l10.639.htm), [Lei 11.645/2008](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11645.htm) and [Lei 14.759/2023](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14759.htm), which made 20 November a national holiday. For images, see [prompt 4.5](#45-consciência-negra-visual-20-november).

### 3.13 Program release (by 25 November)

**Use:** only with the **official** program, names copied exactly. **Output:** pt-BR. **Source (Task):** [Copywriting](copywriting.md#5-program-release-by-25-november).

```prompt
Task: from the official program pasted below, write 3 short Facebook posts, each a "roteiro" for one audience: (a) basic-education teachers, (b) undergraduate students, (c) school managers. Each picks 2–3 sessions relevant to that audience, with exact speaker names, titles and times in "horário de Brasília" as in the program. Do not add sessions, credentials or descriptions not in the program. End with the Even3 link.
PROGRAM: [paste the official program]
```

### 3.14 The final week: how to take part (new)

**Use:** for the posts of 30 November – 4 December. Fill in the access details only once the committee confirms them. **Output:** pt-BR. **Based on:** [Sprint plan, week 6](conafroedu-sprint.md#week-6--mon-30-nov-to-sun-6-dec-final-week-and-the-congress).

```prompt
Using ONLY the fact sheet above, write in natural Brazilian Portuguese a "Como participar" FAQ for registered people, for a carousel (5 slides) and a WhatsApp Channel update (under 500 characters).
Cover only what the fact sheet confirms: dates (5 and 6 December 2026), "horário de Brasília", how access is received, where the program is, support contact and hours, the certificate-release forecast from 6 December (confirm actual release before giving download instructions). For anything not confirmed (platform, access route, recordings, accessibility services), write [CONFIRMAR].
Never include a meeting link or password; access goes privately to registered people.
Remind readers that registrations stay open until 6 December — do not write that registration "closes in 48 hours".
```

### 3.15 Live days: 5–6 December

**Use:** post these by hand on the day, never pre-scheduled. **Output:** pt-BR. **Source (Task):** [Copywriting](copywriting.md#6-live-days-56-december).

```prompt
Task: write (a) a "Bom dia, começamos!" Facebook post for 5 December, (b) a 3-frame Story sequence with today's highlights, (c) a short schedule-change notice template, and (d) a closing thank-you post for 6 December. Facts: times in horário de Brasília from the official program; registered participants access the sessions via [CONFIRMAR] — platform and how they receive the link; support via WhatsApp (19) 98816-7751 and conapsuporte@gmail.com. Do not include any private access link. Warm, energetic but calm.
```

### 3.16 Certificates (from 6 December)

**Use:** once the committee confirms actual release, eligibility and download steps. **Output:** pt-BR. **Source (Task):** [Copywriting](copywriting.md#7-certificates-from-6-december), which also gives the careful certificate wording to paste with it.

```prompt
Task: a short Facebook post and a WhatsApp reply template explaining how to download the CONAFROEDU certificate. Forecast: expected from 6 de dezembro on Even3. Actual release: [CONFIRMAR]; eligibility and steps: [CONFIRMAR] with the committee. Write download instructions only after actual release is confirmed; otherwise draft a status update for committee approval. Use the careful certificate wording provided. Do not promise acceptance as horas complementares or career progression.
```

### 3.17 After the event: recap and proceedings status (new)

**Use:** between 7 and 15 December. **Output:** pt-BR. **Based on:** [Sprint plan, after the event](conafroedu-sprint.md#after-the-event--mon-7-to-tue-15-dec-deliver-the-promises) and the [proceedings template](copywriting.md#8-proceedings--anais-by-15-december).

```prompt
Using ONLY the fact sheet above, write in natural Brazilian Portuguese:
1. A recap post (80–120 words) thanking speakers, authors, partners and participants. Name only people and institutions listed here as having agreed to be named: [LIST]. Do not invent attendance numbers or testimonials; if I give real numbers, use them exactly: [NUMBERS or "none"].
2. A proceedings update: if a real link is provided here, announce it: [LINK or "not published yet"]; if not, write an honest status update without a date the committee hasn't confirmed. Never write an ISBN, DOI or link yourself.
```

### 3.18 One approved message, many formats

**Output:** pt-BR. **Source (Task):** [Copywriting](copywriting.md#one-message-many-formats). For a simpler three-channel version, see [Instagram & WhatsApp](instagram-whatsapp.md#adapt-one-approved-announcement-to-three-channels); to start from a calendar row, see [prompt 4 of the campaign timeline](campaign-timeline.md#4-turn-one-calendar-row-into-ready-drafts).

```prompt
Task: adapt the approved text below into: (A) a self-contained Facebook post with the Even3 link; (B) an Instagram carousel: 5 slide texts of max 15 words each + caption, pointing to the link in bio (caption links aren't clickable); (C) a 20-second Reel script with an on-screen hook in the first 2 seconds and burned-in caption lines; (D) 3 Story frames; (E) a WhatsApp Channel summary under 500 characters, no hashtags; (F) a Facebook Event discussion post; (G) one paragraph for a partner e-mail. Keep dates, prices, names and conditions exactly. Then give a table checking every fact across all versions.
Approved text: [paste]
```

### 3.19 Next week's posts from calendar rows (batch session)

**Output:** pt-BR. **Source:** [Scheduling tools](scheduling-tools.md#prompt-draft-next-weeks-posts-from-the-calendar).

```prompt
You are helping the volunteer committee of CONAFROEDU 2026 (Congresso Nacional de Africanidades na Educação), a 100% online academic congress on 5–6 December 2026. Registration: https://www.even3.com.br/iconafroedu-764690/

Use ONLY the official fact sheet below. Do not invent prices, speakers, deadlines, certificate rules or partnerships. If something is missing, write [CONFIRMAR].

Write the captions in natural Brazilian Portuguese (academic but warm, "você", no translated-from-English tone).

Next week's calendar rows:
[paste the rows: ID, date/time, objective, audience, format, key message]

For each row, give me:
1. A Facebook caption (60–120 words), one clear call to action, the Even3 link written out in full.
2. A shorter Instagram version (no clickable link; say "link na bio" only if we confirm that the bio link exists).
3. Alt text only from the FINAL IMAGE attached or a factual description plus all visible text. If neither is supplied, write AGUARDAR IMAGEM; never invent people, objects or text.
4. A list of every fact you used, so the reviewer can check them.

FINAL IMAGES (attach, or factual descriptions + visible text): [supply per row]
FACT SHEET (version and date): [paste]
```

### 3.20 The Facebook Event description

**Output:** pt-BR. To write it from scratch (Task; source: [Copywriting](copywriting.md#the-facebook-event-description)):

```prompt
Task: write the Facebook Event description in Brazilian Portuguese, maximum 250 words, scannable with short headings. Blocks: (1) one-paragraph purpose and audience; (2) Inscrição: Even3 link and current values with the date they change; (3) Submissões: until 4/11 — or "encerradas" if after that date; (4) Acesso: how registered participants receive access [CONFIRMAR], noting the Event RSVP is not a registration; (5) Certificado: careful 40-hour wording; (6) Dúvidas: WhatsApp and e-mail. No invented speakers or accessibility services.
```

To improve an existing description (source: [Facebook Events & Groups](facebook-events-groups.md#draft-or-improve-the-event-description)):

```prompt
You are helping the organizing committee of an online academic congress in Brazil. Write in natural Brazilian Portuguese.
Rewrite the Facebook Event description below so it is clear on a phone: short paragraphs, the key dates first, one registration link.
Keep every date, price, name and condition EXACTLY as given. Do not add benefits, speakers, accessibility services or certificate rules that are not in the facts. Where information is missing, write [CONFIRMAR].
Make it explicit that clicking "Vou/Tenho interesse" on Facebook is not registration.
Facts: [paste fact sheet]. Current description: [paste].
```

### 3.21 Adapt a post to one group's rules

**Output:** pt-BR. **Source:** [Facebook Events & Groups](facebook-events-groups.md#adapt-one-post-to-a-specific-groups-rules).

```prompt
I'm part of the CONAFROEDU organizing team. Below are the rules of a Facebook group and a summary of recent conversations there.
1) Tell me whether event promotion seems allowed, restricted (day/thread/approval) or forbidden. Quote the rule.
2) If allowed, adapt my post to this group in natural pt-BR (max 120 words): start with something useful for this group's topic, disclose that I'm an organizer, mention that the event is paid, give one link.
3) If it's unclear, draft a short, polite permission request to the moderator instead.
Do not invent rules. Do not suggest workarounds to moderation.
Group rules: [paste]. Recent topics: [paste]. My base post: [paste]. Facts: [paste].
```

### 3.22 Genuine discussion questions for the Event

**Output:** pt-BR. **Source:** [Facebook Events & Groups](facebook-events-groups.md#weekly-discussion-questions).

```prompt
Suggest 6 genuine discussion questions in pt-BR for the CONAFROEDU Facebook Event, for teachers and researchers interested in Africanidades and anti-racist education (ERER). Each question must invite real experience, not yes/no answers or "comment YES" bait. Avoid asking people to share identifiable cases about children or traumatic experiences in public. Link each question to a theme from this confirmed program list only: [paste confirmed sessions].
```

### 3.23 WhatsApp messages (opt-in contacts only)

**Use:** only for people who asked for updates or wrote to you first. **Output:** pt-BR. **Source (Task):** [Copywriting](copywriting.md#whatsapp-messages-opt-in-contacts-only).

```prompt
Task: write in Brazilian Portuguese (a) a WhatsApp Channel update under 500 characters announcing that the official program is out; (b) a direct message for a person who ASKED to receive reminders, about the price change on 16/11, with an opt-out line; (c) a short forwardable invitation a teacher can send to colleagues; (d) a reply to "Tem certificado?" using the careful wording. No hashtags, at most one emoji each, Even3 link in each.
```

## 4. Images

Default tools: ChatGPT Images or the Gemini app (free, with limits), then **Canva Free** to add all text. Read [Representing Black & African cultures respectfully](representation-bias.md) before generating any image of people. The full recipe book, with sizes and the text to add in Canva, is the [Image prompt cookbook](image-prompts.md).

### 4.1 The style block (paste once per chat)

**Source:** [Image prompt cookbook](image-prompts.md#the-style-block-paste-once-per-chat). The colors are an **example palette**, not CONAFROEDU's official one; use the colors from your [brand kit](brand-kit.md#colors).

```prompt
STYLE FOR ALL IMAGES IN THIS CONVERSATION
Project: CONAFROEDU 2026 – National Congress of Africanidades in Education (online, Brazil), theme "Development, Participation and Anti-racist Education".
Visual style: contemporary editorial illustration in paper-cut shapes, subtle paper texture, clean composition, warm and professional.
Palette: [main colour, e.g. navy #17324D], [second colour, e.g. green #3F8F79], [background, e.g. cream #F6F2E9], [accent colour].
People (only when I ask for them): adult Black Brazilian educators and researchers with varied skin tones, ages, bodies and hair (coily, curly, braids, locs, short), in roles of authority: teaching, researching, leading. Faces must be distinct, not clones. Lighting that preserves detail in dark skin.
Always: no words, letters, numbers, logos, signatures or watermarks. Leave clean empty space for text that I will add later.
Never: religious symbols, orixás, Adinkra, Kente or generic "tribal" patterns, savannahs, wild animals, huts, masks, scenes of poverty or rescue, an in-person venue or audience.
Confirm you understood in one sentence and wait for my first request.
```

### 4.2 Event poster background

**Size:** 4:5 (1080 × 1350), then extend. **Source:** [Image prompt cookbook](image-prompts.md#1-event-poster--background).

```prompt
Using the agreed style, create the main background for the CONAFROEDU 2026 campaign. Vertical 4:5. In the lower half: a contemporary scene of knowledge exchange among adult Black Brazilian educators: one presents ideas, others listen and take notes, a laptop shows an abstract online meeting with no readable screen. Books and notebooks without readable text. The upper half must be calm and almost empty (background colour with a few soft shapes) for a title. Conceptual illustration, not a photograph of a real event. No text, numbers or logos.
```

**No-people alternative (lowest risk):**

```prompt
Using the agreed style, create an abstract background: overlapping paper shapes that suggest connection, dialogue and growth (paths that meet, open books seen from above, circles that link together). Vertical 4:5, empty upper half for a title. No people, no text, no symbols with cultural or religious meaning.
```

### 4.3 Speaker card background

**Use:** with the speaker's **real, approved photo** placed in Canva. **Source:** [Image prompt cookbook](image-prompts.md#2-speaker-card).

```prompt
Using the agreed style, create a background for a speaker card. Vertical 4:5. Leave a large empty area on the left (about 55% of the width) where I will place a real portrait photo, and a clean band at the bottom for name and topic. On the right, only soft paper shapes in the palette colours. No people, no faces, no text, no frames that look like a photo.
```

### 4.4 Countdown background (one image for the whole series)

**Size:** 9:16 (1080 × 1920). **Source:** [Image prompt cookbook](image-prompts.md#6-countdown).

```prompt
Using the agreed style, create a vertical 9:16 background for a countdown series. A large, completely empty circular area in the centre (where I will place a big number), surrounded by paper shapes arranged like a clock face or a path moving forward. Keep the top 15% and bottom 20% of the image simple (the app's buttons will cover these areas). No numbers, no letters, no clock hands, no people.
```

### 4.5 Consciência Negra visual (20 November)

**Best option:** a commissioned or licensed work by a Black Brazilian artist, or typography alone. **Source:** [Image prompt cookbook](image-prompts.md#7-consciência-negra-visual-20-november).

```prompt
Using the agreed style, create a contemporary editorial illustration for a reflection on Black Consciousness Day in Brazilian education. Vertical 4:5. Adult Black Brazilian educators of different ages and skin tones, in a present-day school library, choosing books together and planning a class; one of them explains, others contribute. Atmosphere of pride, study and collective work. Clearly an illustration, not a photograph. Upper third empty for text. Do NOT include: chains, whips, slave ships, scenes of suffering, portraits of Zumbi or other historical figures, orixás or religious objects, raised-fist icons, flags, generic "African" patterns, savannah or animals. No text.
```

### 4.6 Recap cover background

**Use:** behind **real** screenshots and approved quotes, never generated "participants". **Source:** [Image prompt cookbook](image-prompts.md#11-recap-715-december).

```prompt
Using the agreed style, create a square 1:1 cover background for a thank-you and recap carousel. Paper shapes arranged like a mosaic of empty frames of different sizes (where I will place real screenshots), with a soft warm glow. Large empty band for a title. No people, no faces, no text, no numbers.
```

### 4.7 A contemporary scene with specific roles

**Source:** [Representation & bias](representation-bias.md#prompt-patterns-that-work-better). Specific roles keep authority with the people you intend.

```prompt
Contemporary editorial illustration, clearly not a documentary photograph. Three adult Black Brazilian teachers discuss a lesson plan on Afro-Brazilian history and culture in a present-day Brazilian school. A teacher with dark skin presents the plan, a teacher with brown skin organizes the references, and the third teacher asks questions and takes notes. Vary facial features and skin tones, with lighting that preserves detail in dark skin. Include short coily hair, braids and curly hair, drawn with care; these are the characters' choices, not a uniform for an identity. Everyday clothes, a plausible library and school materials, a computer used by the teachers themselves. Horizontal composition with space for text added later. No rescue scene, no poverty as visual shorthand, no white saviour, no generic "tribal" pattern, no exotic animals, no religious objects. Do not link the scene to real CONAFROEDU participants. Do not generate letters, names or logos.
```

### 4.8 Preserving a real person's identity

**Manual checklist, not a generative-edit prompt.** Use the approved original in a normal crop/exposure editor. Preserve face, skin tone, hair texture, age and personal marks; keep a name area outside the photo. Compare with the original; stop if the edit changes identity. Do not upload a real portrait for generative reconstruction. Follow the full [portrait checklist](representation-bias.md#prompt-patterns-that-work-better) and [permissions](ethics-legal.md).

### 4.9 A culturally specific session: consult before drawing

**Source:** [Representation & bias](representation-bias.md#prompt-patterns-that-work-better).

```prompt
We need to promote a session on [specific tradition/community, confirmed by the invited speaker]. Before suggesting any images, list what we should ask the responsible person: which terms they use, which symbols may appear publicly, which references they authorize and which elements must not be depicted. First propose a composition with the title, simple shapes and the authorized portrait. Do not invent orixás, rituals, graphic symbols, Adinkra meanings or a generic "African aesthetic". Separate what is confirmed from what depends on consultation.
```

### 4.10 Fix-it prompts

**Use:** in the same chat, **one problem per message**. If two fixes fail, return to the last good version or use a plain background. **Source:** [Image prompt cookbook](image-prompts.md#fix-it-prompts-iteration).

Text appeared anyway:

```prompt
Recreate exactly this image but remove all letters, words, numbers and pseudo-text, including on books, screens and posters. Keep everything else the same.
```

Change the format (outpainting):

```prompt
Extend this image to [9:16 / 16:9 / 1.91:1]. Continue only the background, shapes and texture. Do not add people, objects, text or logos. Do not change anything that already exists.
```

Faces look alike:

```prompt
The people have very similar faces. Keep the composition and roles, but give each person distinct facial features, ages, body types and hairstyles. Don't change skin tones toward lighter shades.
```

Skin was lightened:

```prompt
Skin tones look lighter than requested and faces lose detail. Keep the composition and restore deeper skin tones as described before, with soft lighting that shows facial detail in dark skin. Change nothing else.
```

Looks too much like a real photo:

```prompt
Make the image clearly an illustration: flatter colours, visible paper-cut shapes and texture, less photographic detail. It must not be mistaken for a photograph of a real event.
```

### 4.11 A careful fix on an authorized photo

**Use:** only for non-factual background defects, and compare original and edit side by side. **Source:** [Image generation](image-generation.md#editing-real-photos-speakers-lives-and-recaps).

```prompt
Photo 1 is an authorized photograph. Edit ONLY the empty area of the wall marked in the mask to fix an uneven light spot. Keep all pixels outside the marked area unchanged where the tool allows. Do not change people, faces, skin tone, hair, clothing, the number of people, signs, logos or objects. Keep the framing and the documentary look of the photograph.
```

## 5. Video and Reels

Most CONAFROEDU Reels should come from **real footage**. Generate only small, text-free, people-free inserts. Sora was discontinued in 2026, so ignore tutorials built on it ([Video generation](video-generation.md#what-changed-in-2026-so-old-tutorials-dont-mislead-you)).

### 5.1 The one-shot video template

**Source:** [Video generation](video-generation.md#shot-first-prompting-how-to-write-a-video-prompt).

```prompt
Vertical 9:16 video, [5] seconds. [SUBJECT — simple, no identifiable people]. [ONE ACTION]. Camera: [ONE MOVE]. Style: [STYLE], [LIGHT]. Colors: [2–3 BRAND COLORS]. Audio: [AMBIENCE ONLY / NO AUDIO], no speech, no recognizable music. No text, numbers, letters, logos or brand marks.
```

**Example: conceptual B-roll**

```prompt
Vertical 9:16 conceptual video, 5 seconds, for an education congress campaign. A tidy desk with blank notebooks and colorful paper shapes that slowly connect to each other, symbolizing collaboration among teachers. A single slow push-in of the camera. Soft light, navy blue, green and cream palette, editorial paper aesthetic. Keep the objects' shapes stable. No identifiable people, text, numbers, brands or logos. Audio: only a subtle ambience; no speech and no recognizable music.
```

**Let a text assistant write the shot for you:**

```prompt
Turn this idea into a single-shot video prompt using this structure: format, subject, one action, one camera move, style, palette, audio, exclusions. Keep it under 80 words. Idea: [your idea].
```

### 5.2 Animate a text-free poster background (image-to-video)

**Use:** on the illustration **without** text or logo; put the original text layers back on top in the editor. **Source:** [Video generation](video-generation.md#workflow-2-animate-the-poster-image-to-video-safely).

```prompt
Use this illustration as the first frame. Animate only the small paper shapes: they float slowly and return to their starting position. Static camera. Keep the composition, colors, outlines and lighting. Do not create people, words, logos or new objects. Very subtle movement, no abrupt cuts.
```

### 5.3 A 15-second typography storyboard (no people)

**Source:** [Representation & bias](representation-bias.md#prompt-patterns-that-work-better).

```prompt
Create a 15-second storyboard to promote CONAFROEDU 2026 to Brazilian teachers. Use readable typography and simple moving geometric shapes. Facts: 5 and 6 December 2026; 100% online; registration on Even3. Do not invent people, quotes, cultural symbols, images of previous editions or supporters. Leave certificate hours and conditions as placeholders to fill after the committee confirms them. Deliver the script, the screen order and a list of facts that need human review.
```

### 5.4 Ask speakers for permission, use by use

**Output:** pt-BR. **Source:** [Reels, clips & captions](video-repurposing.md#step-0-permissions-do-this-before-anything-else).

```prompt
Write a short, friendly message in Brazilian Portuguese from the organizing committee of CONAFROEDU 2026 (Congresso Nacional de Africanidades na Educação, 5–6 December 2026, online) to a confirmed speaker. Ask for permission for each of these uses separately, so they can answer yes/no to each: (1) recording their talk, (2) publishing short clips (up to 90 seconds) on the congress's Facebook, Instagram and WhatsApp, (3) using their name, photo and institution in posts, (4) translated captions. State that we will NOT use AI dubbing, voice cloning or avatars without a separate request. Say they can review clips before publication if they wish. Warm, respectful academic tone. Max 150 words.
```

### 5.5 Pick clips from a talk (never invent them)

**Use:** with a **corrected, authorized** transcript. **Source:** [Reels, clips & captions](video-repurposing.md#step-3--ask-ai-to-propose-clips-not-invent-them).

```prompt
You are a content editor for an education congress in Brazil (CONAFROEDU 2026, on Africanidades and anti-racist education). Use ONLY the transcript below. Select up to six excerpts that could become 20–60-second vertical videos for teachers and researchers. Aim for variety: a practical classroom tip, a surprising insight, a short story, a research finding, an answer to an audience question, and an inspiring closing thought. For each excerpt give: start/end timestamp, the exact words, the core idea, any context the viewer needs, a short faithful title (max 8 words, in Brazilian Portuguese), and why it is useful for this audience. Do not invent quotes, data or timestamps. Do not cut caveats that change the meaning. If timestamps look unreliable, say so. Do not give "virality scores".

[PASTE CORRECTED, AUTHORIZED TRANSCRIPT WITH TIMESTAMPS]
```

### 5.6 Captions for a clip

**Output:** pt-BR. **Source:** [Reels, clips & captions](video-repurposing.md#step-6--write-the-post-copy).

```prompt
Write 3 alternative Facebook/Instagram captions in Brazilian Portuguese for a vertical video clip from CONAFROEDU 2026 (Congresso Nacional de Africanidades na Educação). Speaker: [APPROVED NAME, ROLE, INSTITUTION]. Clip summary: [CORE IDEA]. Exact quote to feature (do not change it): "[QUOTE]". Phase: [before the congress — registrations open on Even3 / after the congress — thank you + proceedings]. Each caption: 60–110 words, opens with the idea from the clip (not with the event name), credits the speaker, has one clear call to action, and ends with at most 3 relevant hashtags from this list: #CONAFROEDU #EducaçãoAntirracista #Africanidades #CongressoOnline #PesquisaEmEducação. Natural, warm academic tone. No exaggerated claims, no "últimas vagas", no engagement bait. Mark any quote as literal.
```

Then, in the same chat:

```prompt
For the same clip, suggest: (1) five on-screen cover titles in Brazilian Portuguese, max 6 words each, faithful to what the speaker said; (2) a short accessible description of the video for the caption (what is seen and who speaks), without guessing anyone's race, religion, disability or emotions.
```

## 6. Motion graphics with Claude

Claude writes a small, self-contained HTML page that animates; you record it to MP4 (free with OBS Studio, then trim in Canva). Step-by-step instructions, example files and troubleshooting are in [Stop-motion & motion graphics with Claude](motion-graphics-claude.md). The on-screen text stays in Portuguese because that's what you'll post.

### 6.1 Animated countdown "Faltam 7 dias"

**Post on:** Saturday 28 November 2026. Make one MP4 per date, and write "Falta 1 dia" (singular) for the last one. **Source:** [Motion graphics with Claude](motion-graphics-claude.md#2-paste-the-prompt).

```prompt
Create a Design/Artifact and give me a single self-contained HTML file named conafroedu-faltam-7-dias.html, exportable as standalone HTML.
I am not a programmer: don't ask me to install libraries or edit code.

Format: vertical 9:16, 1080×1920, scaled to fit any browser window without distortion. Opaque background. Use system fonts only. No internet, CDN, audio, React or external dependencies. Save with <meta charset="utf-8"> so Portuguese accents display correctly.

Style: paper-cut animation, warm palette (terracotta #b4532a, ochre #d99a2b, cream #f5e9d7, dark brown #3a1d12). Only simple geometric shapes, with no cultural or religious symbols and no generic "African" patterns.

Exact on-screen text in Brazilian Portuguese (do not add, translate or change anything):
"CONAFROEDU 2026"
"Faltam"
"7"
"dias"
"Desenvolvimento, Participação e Educação Antirracista"
"5 e 6 de dezembro de 2026"
"100% online"
"Inscreva-se pelo Even3"
"link na legenda"

Timing: one 12-second animation, then hold the last frame (no loop). 0–2 s shapes and title enter; 2–5 s "Faltam 7 dias"; 5–8 s theme, date and "100% online"; 8–12 s the invitation. Movement in stepped poses at 8 poses per second, like stop motion. No flashing.
Keep all text inside a safe area: top 14%, bottom 22% and 12% on each side, so the Reels buttons and caption don't cover it. Reloading the page restarts the animation.
After building it, tell me how to download and open the HTML file.
```

> [!NOTE]
> The palette in these motion prompts is the one used for the example files on that page. If your committee has a [brand kit](brand-kit.md#colors), swap in its hex codes.

### 6.2 Animated speaker or author card

**Use:** only confirmed speakers, with approved name, title and photo. **Source:** [Motion graphics with Claude](motion-graphics-claude.md#animated-speaker-or-author-card).

```prompt
Create a self-contained HTML animation, 9:16 (1080×1920), no internet or external libraries, <meta charset="utf-8">, system fonts.
Only use a speaker photo approved separately for this external AI processing, with the documented privacy conditions; otherwise leave a local placeholder for a person to insert later. I am attaching such an approved photo. Embed it in the HTML file itself and do not alter, retouch, lighten or crop the face.

Exact text (Brazilian Portuguese, do not change):
"CONAFROEDU 2026 · Palestra"
"[EXACT NAME AS APPROVED]"
"[APPROVED ROLE / INSTITUTION]"
"[EXACT TALK TITLE]"
"[CONFIRMAR] — data da sessão · [CONFIRMAR] — horário (horário de Brasília)"
"Inscrições: Even3 · link na legenda"

12 seconds, play once, hold the last frame. The photo slides in during 0–2 s; the name appears at 2 s and stays visible for at least 6 seconds; the title appears at 5 s; the date and invitation appear at 8 s.
Warm terracotta/ochre/cream palette, paper-cut shapes, stepped movement at 8 poses per second, no flashing. Keep text inside the safe area (top 14%, bottom 22%, 12% each side). Test with the longest name and title so nothing is cut off.
```

### 6.3 Kinetic typography for a verified quote

**Use:** only text checked at the source (here, the law itself) or approved by the person quoted. **Source:** [Motion graphics with Claude](motion-graphics-claude.md#kinetic-typography-for-a-quote).

```prompt
Create a self-contained HTML kinetic-typography animation, 9:16 (1080×1920), no internet or libraries, <meta charset="utf-8">, system fonts.
Background terracotta #b4532a, text cream #f5e9d7, highlights ochre #d99a2b.

Small label at the top: "O QUE DIZ A LEI"
Quote (exact text, do not change a single word or accent):
"Nos estabelecimentos de ensino fundamental e de ensino médio, públicos e privados, torna-se obrigatório o estudo da história e cultura afro-brasileira e indígena."
Highlight "obrigatório" and "história e cultura afro-brasileira e indígena".
Source line: dark-brown text on an opaque cream panel, with at least 4.5:1 contrast at its displayed phone size; keep this panel and the final box inside the safe area. Text: "LDB (Lei nº 9.394/1996), art. 26-A, com redação dada pela Lei nº 11.645/2008"
Final box: "CONAFROEDU 2026 — 5 e 6 de dezembro de 2026 — 100% online"

Words appear one at a time, about 4 per second, and stay on screen. Then the source appears, then the final box. Total about 14 s, play once, hold the last frame. Put the quote text and the speed in clearly labeled settings at the top of the file so I can change them without knowing code. Keep everything inside the safe area.
```

### 6.4 A paper "stop-motion" sequence made entirely in code

**Source:** [Motion graphics with Claude](motion-graphics-claude.md#a-stop-motion-paper-sequence-made-entirely-in-code).

```prompt
Create a self-contained HTML animation, 9:16 (1080×1920), no internet or libraries, <meta charset="utf-8">.
Style: paper cut-outs on a cream paper background with a subtle paper texture drawn in CSS/SVG. Every movement happens in visible poses at 8 poses per second (use stepped timing, not smooth easing), and the cut-outs tremble slightly between 3 poses like real stop motion.
Scene: a paper notebook opens over 2 seconds; a paper sun rises above it; then a card holds for 5 seconds with this exact text:
"CONAFROEDU 2026"
"5 e 6 de dezembro de 2026 · 100% online"
"Inscrições no Even3"
No people, no cultural or religious symbols, no flashing. Play once and hold the last frame. Total 10 seconds.
```

### 6.5 Stop motion from image frames: the continuity sheet

**Use:** Claude plans; an image tool draws the frames; CapCut or Canva assembles them. Test 8 frames first. **Source:** [Motion graphics with Claude](motion-graphics-claude.md#a-real-stop-motion-workflow-with-image-frames).

```prompt
Plan a 24-frame stop-motion sequence (frames 0000–0023) for a vertical 9:16 image. Scene, seen from above: a paper notebook on a wooden desk opens gradually, then a paper sun rises above it. No people, no words, no logos, no cultural or religious symbols. Fixed camera, same lighting, same paper texture and shadow direction in every frame. For each frame give: file name, the ONE small change from the previous frame, and what must stay identical. Then write the image prompt for the master frame (frame 0000).
```

Then, in the image tool, for each next frame:

```prompt
Use the approved image as reference. Next frame of the same scene: the paper notebook opens 10 more degrees; everything else stays exactly in the same position. Fixed camera, constant lighting and shadow, same crop and texture. No new text, no new objects, no change of scenery.
```

### 6.6 Claude Motion (Team/Enterprise plans only)

**Source:** [Motion graphics with Claude](motion-graphics-claude.md#option-b-claude-motion-teamenterprise-only).

```prompt
Use the Motion template to announce a talk. Destination: Facebook Reel, vertical 9:16, ideally 1080×1920, 12 seconds. If any setting is not available, tell me before rendering.
Use the attached authorized photo without altering the face.
0–2 s: a short question about [a real challenge teachers face].
2–7 s: [EXACT NAME], [APPROVED ROLE], [EXACT TALK TITLE].
7–10 s: "5 e 6 de dezembro de 2026 • 100% online".
10–12 s: "Inscreva-se pelo Even3 • link na legenda".
Large text, no invented information, no fast flashes. First propose the script; render only after I approve.
```

## 7. Replies and FAQ

The ready-to-paste Portuguese answers (`/datas`, `/valores`, `/prazo`, `/certificado`…) are in the [FAQ answer bank](replies-inbox.md#the-conafroedu-2026-faq-answer-bank). Use AI to **draft**; a person sends.

### 7.1 Write WhatsApp Business quick replies from the fact sheet

**Output:** pt-BR. **Source:** [Instagram & WhatsApp](instagram-whatsapp.md#write-the-quick-replies-from-the-fact-sheet).

```prompt
Using ONLY the fact sheet below, write WhatsApp Business quick replies in natural Brazilian Portuguese for these shortcuts: /inscricao, /valores, /prazo, /comosubmeter, /datas, /acesso, /certificado, /publicacao, /acessibilidade, /humano.
Each reply: up to 60 words, friendly and clear, one link at most. Where the fact sheet doesn't answer, write [CONFIRMAR] — never guess (especially about certificate criteria, whether presenting is mandatory, and access).
After the confirmed 4/11 cutoff, review every reply, especially /inscricao, /valores, /prazo, /comosubmeter, /modalidades and /video. Redirect new enquiries to attendance without implying a new paper can be submitted.
Fact sheet: [paste].
```

### 7.2 Draft a reply to an unusual question (AI drafts, a human approves)

**Use:** after removing personal data from the message. **Output:** pt-BR. **Source:** [Replies & inbox](replies-inbox.md#layer-3-ai-drafts-a-human-approves).

```prompt
You help the organizing committee of CONAFROEDU 2026 answer messages. Draft a reply in natural Brazilian Portuguese (warm, respectful, concise, "você").

Rules:
- Use ONLY the approved FAQ below. If the answer is not in it, or the FAQ says [CONFIRMAR], write a short reply saying the team will confirm and get back, and tell me which question needs a committee decision.
- Never invent deadlines, prices, certificate conditions, extensions, accessibility services or MEC/Qualis recognition.
- If the message is about payment, refund, an existing registration, a review result, accessibility needs, a complaint or racism, do NOT draft an answer: reply only "ENCAMINHAR PARA HUMANO" and the reason.
- Maximum 90 words. One link at most (the Even3 page).

Incoming message (personal data removed): [paste]

APPROVED FAQ (version/date): [paste]
```

> [!TIP]
> If a volunteer builds the [Make flow that drafts replies into a sheet](no-code-automation.md#flow-2--question-log--ai-draft-reply--human-approval), it uses a shorter version of these same rules. Never add a "send message" step to it.

### 7.3 Turn this week's questions into FAQ gaps

**Use:** with 20 **anonymized** questions and the current FAQ. **Source:** [Computer-use agents, task E](computer-use-agents.md#task-e--summarize-questions-into-faq-gaps).

```prompt
Here are 20 anonymized questions received this week about CONAFROEDU 2026, and our current approved FAQ.
1. Group the questions by topic and count them.
2. Mark which ones the FAQ already answers (cite the FAQ item) and which it does not.
3. For questions the FAQ does not answer, write the question the committee needs to decide — do not invent the answer.
4. Flag anything urgent or sensitive (payment, accessibility, complaints, racism) for a human.
Answer in Portuguese.
```

## 8. Outreach and partners

Aim for 10–20 excellent conversations, sent one by one by a person, with one follow-up at most. The ready-made Portuguese e-mail and WhatsApp templates (T1–T11) are in [Outreach](outreach.md#templates-in-brazilian-portuguese).

### 8.1 Find NEABs/NEABIs with sources

**Use:** in a search-first assistant (Perplexity, or Gemini/ChatGPT/Claude with web search). Open every source yourself. **Source:** [Outreach](outreach.md#step-2-find-candidates-with-ai).

```prompt
Find up to 10 NEABs/NEABIs or anti-racist education research groups at Brazilian universities or federal institutes, using the ABPN/CONNEABS directory (https://abpn.org.br/conneabs-2/) and the institutions' own official websites.
For each: institution, campus/state, exact unit name, one relevant ERER or teacher-education activity, exact source URL, date of the source, and the PUBLISHED institutional contact (email or contact form).
Open each source; do not invent emails. Separate confirmed current contacts from old directory entries or inaccessible pages.
Do not collect personal contacts of members or students.
Purpose: evaluate an institutional invitation to share CONAFROEDU 2026 (online, 5–6/12/2026). Do not assume any partnership. Answer in Portuguese, as a table.
```

> [!NOTE]
> Using a browser agent instead? The read-only agent version of this task, with "stop after 10" and "do not log in, join groups, fill in forms or send messages", is [Task A](computer-use-agents.md#task-a--research-10-neabneabi-contacts).

### 8.2 One personalized invitation e-mail

**Output:** pt-BR. **Source:** [Outreach](outreach.md#step-5-draft-with-ai-one-message-at-a-time).

```prompt
Write an email draft in Brazilian Portuguese to [INSTITUTION / UNIT], max 120 words.
Verified context: [ACTIVITY], source [URL], checked on [DATE].
Real request: [share the call for papers with your list / share an attendance invitation / talk about a possible collaboration].
Approved event facts: [FACT SHEET].
Make a specific and honest connection between the institution's work and the congress. Do not invent prior relationships, support, discounts, sponsorship or the recipient's interest. Be transparent that registration is paid and that publication has a separate fee. End with one simple question and offer not to contact them again. Do not send; give me the draft for review.
```

**A longer version with a ready-to-forward text** (Task for the master prompt; source: [Copywriting](copywriting.md#e-mail-to-partners-neabis-graduate-programs-associations)):

```prompt
Task: a formal but warm e-mail in Brazilian Portuguese from the CONAFROEDU organizing committee to [NEABI/NEAB of UNIVERSITY X / PPGE coordinator], asking whether they would consider sharing the congress with their community. Personalize with this real detail about their work: [paste a fact from their public page]. Structure: subject line; who we are (1 sentence); why it fits their work; event facts (dates, online, audience, Even3 link); [if before 4/11: submission deadline, formats, registration requirement and R$ 16,98 publication fee]; a ready-to-forward 3-line text; thanks and contact. Do not claim any partnership, endorsement or MEC recognition. Max 220 words.
```

### 8.3 Adapt the partner packet to each partner

**Output:** pt-BR. **Source:** [Speaker & partner kits](speaker-partner-kits.md#prompt-adapt-the-packet-to-each-partner).

```prompt
Adapt the approved release below for [PARTNER NAME], whose real work is [ACTIVITY, with source URL].
Rewrite only the opening (max. 2 sentences) to connect honestly with that work. Keep every date, price, link and condition exactly as written. Do not claim any partnership, endorsement or previous relationship.
Then produce: (a) a WhatsApp version under 400 characters with one link; (b) an email subject line.
Output in Brazilian Portuguese. Approved release: [PASTE]
```

### 8.4 A one-page brief for volunteer ambassadors

**Output:** pt-BR. **Source:** [Speaker & partner kits](speaker-partner-kits.md#prompt-ambassador-brief).

```prompt
Write a one-page brief in Brazilian Portuguese for volunteer ambassadors of the CONAFROEDU 2026 congress.
Facts: [PASTE FACT SHEET]. Their agreed commitment: [DESCRIBE]. Benefits they receive: [DESCRIBE or "none"].
Include: why their help matters (2 sentences), the key dates, what to share and where, 3 short caption examples in different tones, what NOT to promise (certificate recognition, Qualis, career progression, scarcity), how to handle questions (redirect to the official WhatsApp (19) 98816-7751 or conapsuporte@gmail.com), and a reminder to disclose any benefit, check branded-content eligibility and use Meta’s paid partnership label for benefit-for-post arrangements. Warm, clear, no marketing jargon.
```

### 8.5 WhatsApp Status texts for ambassadors

**Output:** pt-BR. **Source:** [Instagram & WhatsApp](instagram-whatsapp.md#status-messages-for-ambassadors).

```prompt
Write 3 short WhatsApp Status texts (max 140 characters of message text each, excluding the supplied URL; append that URL unchanged and report total characters) in natural Brazilian Portuguese that a teacher could post to invite colleagues to CONAFROEDU — personal, warm, not salesy. Each must mention 5–6 December and 100% online, and end with "link: [link rastreável]". Give one version for teachers, one for undergraduates and one for researchers. No invented benefits; the 40-hour certificate may be mentioned as "certificado de 40 horas" only.
```

## 9. Measurement

Paste **aggregated numbers only**: counts by date, category, source and post. Never paste names, e-mails, phone numbers or Even3 exports ([Measuring results](measuring-results.md#step-5-use-ai-to-analyze-your-numbers-safely)).

### 9.1 Weekly analysis

**Source:** [Measuring results](measuring-results.md#prompt-weekly-analysis).

```prompt
Analyze this aggregated table. It contains no names, phones or emails.
Definitions: reach = [definition]; interactions = [components]; confirmed registration = [Even3 definition]; window = [period].
Data: [PASTE TABLE]. Calendar of what we published and what partners did: [PASTE].
Compare results by objective (submissions vs registrations) and by format. Separate: observation, hypothesis, and missing information. Do not claim causality or statistical significance; samples are small. Propose only 2 tests for next week, with time cost, main metric and how we'll judge them. List possible data errors.
```

### 9.2 A summary for the committee's WhatsApp group

**Output:** pt-BR. **Source:** [Measuring results](measuring-results.md#prompt-summary-for-the-committees-whatsapp-group).

```prompt
Turn this weekly analysis into a short message in Brazilian Portuguese for our volunteer organizing committee's WhatsApp group (max. 120 words). Structure: 1 line on the main result, 2 bullets on what worked, 1 bullet on what to stop, the 2 decisions for next week with an owner each. Friendly, direct, no jargon. Analysis: [PASTE]
```

### 9.3 Design the tracking spreadsheet (no data needed)

**Source:** [Measuring results](measuring-results.md#prompt-plan-the-spreadsheet-no-data-needed).

```prompt
I'm a volunteer with no analytics experience. Design a simple Google Sheets structure to track a 6-week organic campaign for an online academic congress (Facebook, Instagram, WhatsApp; registrations on Even3). I need tabs for: tracked links, post log, weekly scorecard, partners, learning log. For each tab give the columns, one example row with placeholder values, and any formulas. Keep it usable in 30 minutes per week.
```

## 10. Review and fact-check

AI can help a reviewer, but it is never the only check: it can confidently confirm its own mistakes. A person always compares with Even3 and the fact sheet ([The 60-second fact check](prompting-basics.md#the-60-second-fact-check)).

### 10.1 Compare a draft with the fact sheet

**Source:** [Prompting basics](prompting-basics.md#verify-every-output-dates-prices-promises).

```prompt
Compare the text below with the official fact sheet. List in a table every date, price, name, link and promise in the text, and mark each one as: MATCHES / DIFFERENT / NOT IN FACT SHEET. Do not fix anything; only list.

FACT SHEET: [paste context block]
TEXT: [paste draft]
```

### 10.2 Final check before scheduling

**Source:** [Copywriting with AI](copywriting.md#the-fact-check-step-never-skip), an extended version of the check in the [Facebook playbook](facebook-playbook.md#prompt-final-check-before-scheduling) that also catches mixed submission/registration calls and leftover `[CONFIRMAR]`.

```prompt
Compare the post below with the official fact sheet. Do not publish or send anything — only review.
Check: names, roles, dates, weekday, time zone (horário de Brasília), prices, deadlines, certificate wording, links, image permissions, pt-BR language, and whether the post mixes the submission and registration calls.
Flag: unsourced promises, invented urgency or scarcity, engagement bait, personal data, [CONFIRMAR] left in the text, and essential information that only appears in the image.
Output: APPROVE AS DRAFT or FIX, with objective reasons.
Fact sheet: [paste] Post: [paste]
```

### 10.3 Audit the scheduled queue

**Use:** every week, and on the evening of 4 November and the morning of 16 November. **Source:** [Scheduling tools](scheduling-tools.md#prompt-audit-the-queue).

```prompt
Below is our list of scheduled posts (date, time, text) and our current fact sheet. Today is [DATE].
Flag every post that:
- invites people to submit papers after 4 November 2026 (unless the fact sheet shows an approved extension);
- mentions prices that will be outdated on its publication date (prices change on 16 November 2026);
- says "last chance", "últimas vagas" or similar without a fact in the sheet that supports it;
- contradicts the fact sheet in any date, price, name, link or certificate condition;
- duplicates another post's message within 48 hours.
Return a table: post date | problem | suggested fix. Do not rewrite posts that have no problem.

SCHEDULED POSTS: [paste]
FACT SHEET: [paste]
```

### 10.4 Audit the content calendar

**Source:** [Campaign timeline](campaign-timeline.md#5-audit-the-calendar-before-scheduling).

```prompt
Audit this content calendar against the official fact sheet. Do not rewrite the posts; only list problems.
Check: wrong dates or weekdays; missing "horário de Brasília"; submission CTAs after 4 Nov; prices not matching the tier for that date; invented urgency or scarcity; 20 Nov posts that are sales-driven; posts that rely on unconfirmed facts (certificate rules, presentation requirements, speakers); duplicate posts on the same day across channels; weeks with more than 4 Facebook posts.
Output a table: row ID, problem, why it matters, suggested fix.
Calendar: [paste]. Fact sheet: [paste].
```

### 10.5 Check the public Even3 page against the fact sheet

**Use:** read-only, in a browser agent or by pasting the page text into a free chat. A committee member makes any edit. **Source:** [Computer-use agents, task B](computer-use-agents.md#task-b--audit-the-even3-page-against-the-fact-sheet).

```prompt
Read-only check. Compare the public page https://www.even3.com.br/iconafroedu-764690/ (all sections: description, tickets, submission rules, FAQ, programme, timeline images if readable) with the fact sheet below.

List every discrepancy or ambiguity: dates, deadlines and times, prices by category and date, submission types and page limits, presentation requirement, video requirement, certificate wording, publication fee, ISBN/DOI wording, contact details, time zone.

For each item: what the page says (quote + section), what the fact sheet says, why it might confuse a participant. If information is not visible without login, write "não visível publicamente". Do not log in, buy, register or change anything.

FACT SHEET: [paste]
```

### 10.6 Image review helper (never the approver)

**Source:** [Representation & bias](representation-bias.md#prompt-patterns-that-work-better). Approval stays with a named human reviewer, ideally a Black educator or designer with real decision power.

```prompt
Analyze this image as support for a human review: who is at the center, who teaches, who listens and who uses the technology? Are faces homogenized? Is skin tone associated with authority? Are there cultural elements without context, or a look of documentary evidence? List questions and possible problems. Do not infer the race or religion of real people and do not declare the image culturally correct. Approval is human.
```

## 11. Accessibility

### 11.1 Alt text for a card

**Output:** pt-BR. **Source:** [Copywriting with AI](copywriting.md#alt-text-describe-whats-actually-there) (a shorter snippet is in the [brand kit](brand-kit.md#part-5--reusable-prompt-snippets)). Repeat in the caption any date or link that only appears in the image.

```prompt
Task: write alt text in Brazilian Portuguese (max 2 sentences, under 250 characters) for the image described below. Convey the information that matters (event name, date, call to action). Describe people only by visible actions and setting, never assume race, identity, disability or emotions unless the person has approved that description. Do not start with "Imagem de".
Image: [describe what is visible and transcribe all text in the image]
```

### 11.2 Full accessibility review of a post or video

**Output:** pt-BR. **Source:** [Ethics, policies & LGPD](ethics-legal.md#prompt-alt-text-and-caption-review).

```prompt
Prepare an accessibility review for this social media asset. Answer in Brazilian Portuguese.
Factual description of the image/video and all visible text: [PASTE]. Corrected transcript, if video: [PASTE].
1) Write a short alt text (max. 250 characters) conveying the important information, without assuming anyone's identity, race, disability or emotions.
2) List the information that appears only in the image and must be repeated in the caption (date, time zone, price, link).
3) For video: list speech, speaker identification and sounds needing captions, plus essential visual information that must be narrated or described.
4) List what a person must check visually before publishing (contrast, small text, edges).
```

For video clips, the cover-title and description prompt in [section 5.6](#56-captions-for-a-clip) also produces an accessible description. Captions themselves must be proofread by a person ([Auto-captions in Portuguese](video-repurposing.md#auto-captions-in-portuguese-accessibility)).

## Before you use any output: checklist

- [ ] The fact sheet in the chat is the **current version** (prices change on 16 November).
- [ ] No `[CONFIRMAR]` or other bracket is left in the text.
- [ ] Every date, weekday, price and link matches Even3 and the fact sheet.
- [ ] No submission call after 4 November, unless the committee officially extended the deadline.
- [ ] No promise about MEC, Qualis, credit hours or progression; no "últimas vagas".
- [ ] Names, titles and institutions match **approved** bios; no invented quotes or partners.
- [ ] Images and videos passed the [representation checklist](representation-bias.md#pre-publication-review-checklist); realistic AI media is labeled.
- [ ] No personal data was pasted into the AI tool.
- [ ] A second person checked it with the [60-second fact check](prompting-basics.md#the-60-second-fact-check).

## Setup and learning prompts

First follow [Installing and configuring tools](setup-tools.md); use [Learning with AI](learning-with-ai.md) for the full learning method. Never paste passwords, API keys, private inboxes or participant records.

```prompt
Help me set up [TOOL] on [DEVICE/OS]. I have only used chatgpt.com or claude.ai. Use the official setup source I supply: [URL/text]. Explain one step at a time, what it costs and which permissions it asks for. Pause after each step so I can report what I see. If my screen differs, ask me for the visible labels; do not invent buttons. Never ask for a password, API key or login code in chat. Start with a harmless test using public CONAFROEDU facts.
```

```prompt
Teach me [ONE TASK] so I can do it myself. My starting level: beginner. Use the official source [URL/text] and my goal [CONAFROEDU TASK]. First ask one diagnostic question; explain with one small example; then give me a practice task without the answer. Check my attempt and explain mistakes. Separate sourced facts from uncertain UI details. End with a short checklist I can use without you. Answer in Brazilian Portuguese.
```

## Next steps

- Learn why these prompts are built this way: [Prompting basics](prompting-basics.md).
- Captions, hooks, e-mails and hashtags in depth: [Copywriting with AI](copywriting.md).
- All image recipes, with sizes and the text to add in Canva: [Image prompt cookbook](image-prompts.md).
- When to use which prompt: [CONAFROEDU 2026 sprint plan](conafroedu-sprint.md) and [Campaign timeline](campaign-timeline.md).
- Quick wins: [50 tips & tricks](tips-tricks.md). Unfamiliar terms: [Glossary & resources](glossary-resources.md).
