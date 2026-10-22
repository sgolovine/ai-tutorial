---
title: Copywriting with AI (in Portuguese & English)
description: Prompt templates and example outputs for every CONAFROEDU campaign moment (hooks, captions, the Facebook Event, WhatsApp, partner e-mails, alt text, hashtags), plus how to edit AI copy so it sounds human, warm and accurate.
order: 160
section: create
icon: ✍️
updated: 2026-10-21
---

AI assistants are excellent first-draft writers and terrible fact-keepers. This page shows how to use them for **every piece of text** in the CONAFROEDU campaign: Facebook posts, Reels hooks, the Facebook Event, WhatsApp messages, partner e-mails and alt text. The result should sound like a committee of educators, not a sales bot.

**What you'll get from this page:**

- A caption formula and a hook bank that work for an academic, anti-racist education audience.
- A master prompt you can reuse for any post.
- Ready prompts **and example outputs** for each campaign moment: the call for papers (deadline 4 Nov), "trabalho aprovado", the price change (15→16 Nov), Consciência Negra (20 Nov), program release, live days, certificates and proceedings.
- Templates for the Facebook Event description, WhatsApp messages (opt-in only), partner e-mails and alt text.
- Hashtags that are actually relevant, and how to turn one message into many formats.
- An editing checklist to make AI text sound human and academic-warm, plus the fact-check step that protects your credibility.

> [!NOTE]
> **Cost:** everything here works on the free plans of Claude, ChatGPT, Gemini or Meta AI. Free usage limits vary by account and reset over time. If you hit the limit, wait or switch assistants. For which assistant to choose, see [Choosing AI tools](choosing-ai-tools.md). The team posts in **Portuguese**, so the prompts below ask for Brazilian Portuguese output. The same prompts written in Portuguese are on the [pt-BR version of this page](../pt-BR/copywriting.md).

## Before you write anything: facts, voice, vocabulary

### 1. Paste the fact sheet every time

Every prompt on this page assumes you start the chat with the **CONAFROEDU context block** from [Prompting basics](prompting-basics.md#the-conafroedu-context-block). Or store it once in a Claude Project, standalone Gemini Notebook or the shared fact-sheet document. Without it, the AI invents venues, deadlines, "MEC recognition" and "limited places".

Key facts, as published on Even3 on 21 October 2026:

| Fact | Value |
|---|---|
| Name | I CONAFROEDU — Congresso Nacional de Africanidades na Educação (1st edition) |
| Theme | "Desenvolvimento, Participação e Educação Antirracista" |
| Dates | 5–6 December 2026, 100% online |
| Submissions (and presenter video) | until **4 Nov 2026**, exact cut-off time to be confirmed |
| Current prices | until **15 Nov**: R$ 55,00 (ouvinte; graduação + 1 submissão), R$ 60,00 (pós-graduação + 1), R$ 70,00 (professor/profissional + 1) |
| New prices | from **16 Nov**: R$ 60,00 / R$ 60,00 / R$ 65,00 / R$ 75,00 |
| Program | Partial activities and some speakers already on Even3; final approved schedule expected by **25 Nov** |
| Certificates | from **6 Dec** (40-hour certificate; eligibility criteria to be confirmed) |
| Proceedings (Anais) | by **15 Dec**, with ISBN and DOI; publication fee **R$ 16,98 per paper**, in addition to registration |
| Registration | Open for participation until **6 Dec**; price-tier and submission deadlines are separate. https://www.even3.com.br/iconafroedu-764690/ |

> [!WARNING]
> The committee still has to decide or confirm: whether presenting is mandatory, the exact deadline time, any deadline extension (*prorrogação*), the certificate criteria, accessibility services and the access/streaming platform. Until then, the AI must write `[CONFIRMAR]`, and **you must not publish** a post containing `[CONFIRMAR]`.

### 2. One paragraph of brand voice

Paste the **canonical VOZ DA MARCA block** from [Prompting basics](prompting-basics.md#your-brand-voice-in-one-paragraph) after the current fact sheet. Maintain that block in one place; do not create a second voice master here.

### 3. Get the vocabulary right

Academics notice these mistakes immediately. Paste this table into your fact sheet if the AI keeps mixing terms.

| Term | Means | Don't confuse with |
|---|---|---|
| **Inscrição** | Registering to take part in the event | Submitting a paper |
| **Submissão** | Sending a paper for evaluation | Acceptance or publication |
| **Chamada de trabalhos** | The call for papers | *Edital*, a formal document; don't call a social post an edital |
| **Avaliação / parecer / carta de aceite** | The review and its documented result | AI-generated praise |
| **Artigo completo, resumo expandido, resumo simples, práticas exitosas (relato de experiência)** | Distinct submission formats | Use the exact labels from the Even3 rules |
| **Anais** | Proceedings | A journal or "Qualis" publication |
| **Ouvinte / autor(a) / apresentador(a)** | Different participation roles | They may have different requirements |
| **Carga horária / certificado de participação** | The documented hours and conditions | Guaranteed *horas complementares* or career progression |
| **Prorrogação / virada de lote** | A real deadline extension / price-tier change | Keep scientific and commercial deadlines separate |

**Formats:** in Portuguese prose write *4 de novembro de 2026*; in compact calendars *04/11/2026*; money as *R$ 55,00*; times as *19h (horário de Brasília)*. In English, write *4 November 2026* to avoid month/day confusion.

## The caption formula

Almost every good post follows four steps:

1. **A specific opening**: a real question or problem from teaching practice. Not the event logo.
2. **Something useful**: an example, a fact, a tip someone could use even without registering.
3. **The verified event connection**: CONAFROEDU, 5–6 December, online, and what's relevant to *this* reader.
4. **One clear action**: submit, register, read the program, ask a question. Only one.

### Hook bank (first lines)

| Purpose | Example opening (pt-BR) | English gist |
|---|---|---|
| Practical relevance | "Como trabalhar a história e a cultura afro-brasileira ao longo do ano, e não só em novembro?" | How to teach Afro-Brazilian history all year, not just in November? |
| Turning practice into research | "Aquela prática de ERER que deu certo na sua turma pode virar um relato de experiência." | That ERER practice that worked in your class can become an experience report. |
| Peer expertise | "O que uma professora aprendeu ao levar autoras negras para a turma do 6º ano?" *(only if it's a real, authorized story)* | What a teacher learned bringing Black women authors to 6th grade |
| Program fit | "Três conversas da programação para quem trabalha na educação infantil." | Three program sessions for early-childhood educators |
| Objection | "Quer participar, mas ainda tem dúvidas sobre o certificado ou o acesso on-line?" | Want to join but unsure about the certificate or online access? |
| Honest urgency | "O valor da inscrição muda em 16 de novembro." | The registration price changes on 16 November. |
| Discussion | "Que desafio aparece quando você planeja uma prática de educação antirracista?" | What challenge comes up when you plan an anti-racist practice? |

> [!CAUTION]
> Never present an illustrative case as a real testimonial. If the AI writes "A professora Ana, de Salvador, conta que…", and Ana doesn't exist, delete it.

## The master caption prompt

Use this for a Facebook caption, then adjust the **task** and length lines for other formats. For a Reel hook or one Story frame, replace the 80–130-word caption range with the relevant short limit. (Portuguese version on the [pt-BR page](../pt-BR/copywriting.md#o-prompt-mestre-de-legenda).)

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

The 80–130 words is a drafting range to test, not a Facebook rule.

## Captions for each campaign moment

The dates follow the [6-week sprint](conafroedu-sprint.md) and the [campaign timeline](campaign-timeline.md). Each moment has its own goal: don't mix "submit your paper" with "register to attend" in the same post.

### 1. Call for papers (now → 4 November)

**Goal:** completed submissions. **Audience:** postgraduates, researchers, NEABI members, teachers with documented practices. **Must say:** deadline 4 Nov, formats, rules link, that the submitting author must be registered, and the separate R$ 16,98 publication fee.

```prompt
Task: a Facebook post for the call for papers. Audience: teachers who have never submitted to a congress. Angle: a classroom practice they already did can become a "práticas exitosas / relato de experiência" submission. Mention: submissions until 4 de novembro de 2026; read the rules on Even3 first; the submitting author must be registered; publication in the Anais has a separate fee of R$ 16,98 per paper. Do not say "submissão gratuita" without explaining the registration and publication costs.
```

**Example output (review before use):**

> Aquela prática de educação antirracista que funcionou na sua turma merece ser compartilhada. 📚
>
> O CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação recebe trabalhos até **4 de novembro**, inclusive relatos de experiência (práticas exitosas). Antes de enviar, confira nas normas a modalidade, o modelo e as condições: a pessoa que submete precisa estar inscrita, e a publicação nos Anais tem taxa de R$ 16,98 por trabalho, à parte da inscrição.
>
> O congresso acontece em 5 e 6 de dezembro, 100% on-line.
>
> Normas e submissão: https://www.even3.com.br/iconafroedu-764690/
>
> #CONAFROEDU #EducaçãoAntirracista #PesquisaEmEducação

**Final reminder (4 Nov).** Only after the committee confirms the exact cut-off time:

> Último dia para submeter trabalhos ao CONAFROEDU 2026: as submissões encerram hoje, 4 de novembro, às [HORÁRIO CONFIRMADO] (horário de Brasília). Revise o arquivo em PDF, a modalidade escolhida e o e-mail usado na inscrição. Normas: [link]

**After 4 Nov:** update pinned posts, the Event and your queued posts to "Submissões encerradas". Only announce an extension (*prorrogação*) if the committee formally approves it **and** Even3 is updated. Never invent "a pedidos" (by popular demand).

### 2. "Trabalho aprovado" (as review results arrive)

Reviews come back within 5 business days of submission. Authors love to share their acceptance, so **give them a kit** rather than publishing names yourself. Never publish an author's name or title without their consent.

```prompt
Task: write a short, warm caption template that an AUTHOR can post on their own profile to share that their paper was accepted at CONAFROEDU 2026. Leave blanks for [título do trabalho], [modalidade] and [coautoras/es]. Mention the congress dates and the Even3 link for colleagues who want to attend. First person, proud but modest, no exaggeration ("publicação garantida", "Qualis") and no claims about the presentation format. Also write a 2-line organizer post congratulating "as autoras e os autores aprovados" without naming anyone.
```

**Example author template:**

> Feliz em compartilhar que o trabalho "[título do trabalho]", em [modalidade], foi aprovado para o I CONAFROEDU — Congresso Nacional de Africanidades na Educação. 🌱 Obrigada, [coautoras/es], pela parceria nessa escrita.
>
> O congresso acontece em 5 e 6 de dezembro, 100% on-line. Quem quiser participar como ouvinte: https://www.even3.com.br/iconafroedu-764690/

### 3. Price change: 15 → 16 November

**Goal:** registrations before the change. This is a **real** deadline, so you can say it plainly. No "últimas vagas": an online event isn't scarce unless the committee has confirmed a cap.

```prompt
Task: a Facebook post about the registration price change. Facts: current values valid until 15 de novembro; from 16 de novembro they change. Ouvinte/público geral R$ 55,00 → R$ 60,00; graduação + 1 submissão R$ 55,00 → R$ 60,00; pós-graduação + 1 submissão R$ 60,00 → R$ 65,00; professor(a)/profissional da educação + 1 submissão R$ 70,00 → R$ 75,00. Note: since submissions closed on 4/11, focus on participating as ouvinte unless the committee says otherwise. Calm, factual tone; no "últimas vagas", no pressure.
```

**Example output:**

> Vai participar do CONAFROEDU 2026? O valor atual da inscrição vale até **15 de novembro**. A partir do dia 16, a inscrição de ouvinte passa de R$ 55,00 para R$ 60,00.
>
> São dois dias de pesquisa e troca de experiências em educação antirracista, em 5 e 6 de dezembro, 100% on-line, com certificado de 40 horas conforme os critérios da organização.
>
> Inscrições: https://www.even3.com.br/iconafroedu-764690/

> [!IMPORTANT]
> Check the prices in the Even3 checkout **on the day you schedule** this post. Prices on the page can change.

### 4. Consciência Negra (Friday 20 November)

20 November is the **Dia Nacional de Zumbi e da Consciência Negra**, a national holiday since Lei 14.759/2023. Many educators will be running school and community actions that day. Publish **something substantive** that's useful even to people who never register. If you want an invitation, keep it short and separate. **No discounts or "celebrate by buying" framing.**

```prompt
Task: a Facebook carousel text (4 slides + caption) for 20 de novembro. Content: slide 1 the question "20 de novembro no calendário; ERER no cotidiano?"; slide 2 what Lei 10.639/2003 changed (Afro-Brazilian history and culture in the curriculum, and 20 November in the school calendar); slide 3 Lei 11.645/2008 (adds Indigenous history and culture); slide 4 one practical question for the next school-planning meeting. Cite the laws by number only, no invented statistics or quotes. Caption: reflective and respectful, with sources, credit and a genuine educational question. Keep any optional congress invitation in a **separate post**. No discount, no urgency, no submission call.
```

**Example caption:**

> Neste 20 de novembro, a valorização das histórias e dos conhecimentos negros também nos chama a olhar para o cotidiano da escola. A Lei nº 10.639/2003 incluiu a história e a cultura afro-brasileira no currículo; a Lei nº 11.645/2008 ampliou esse compromisso para a história e a cultura indígena. Que mudança de currículo, de formação ou de participação a sua escola está construindo ao longo do ano?
>
> #ConsciênciaNegra #EducaçãoAntirracista #CONAFROEDU

> [!TIP]
> The best 20 November content credits a real Black educator: a practice they used, a book they recommend, a question they want schools to ask, all with their approval. See [Representing Black & African cultures respectfully](representation-bias.md) for images.

### 5. Program release (by 25 November)

Even3 already lists activities and some speakers; do not call that listing absent or final. Confirm session dates, times and overlaps with the committee. Publish audience itineraries only from the **approved final** program. Copy names **exactly as listed**, and never let AI "correct" an unusual name. Turn the program into audience-specific guides instead of one wall of text.

```prompt
Task: from the official program pasted below, write 3 short Facebook posts, each a "roteiro" for one audience: (a) basic-education teachers, (b) undergraduate students, (c) school managers. Each picks 2–3 sessions relevant to that audience, with exact speaker names, titles and times in "horário de Brasília" as in the program. Do not add sessions, credentials or descriptions not in the program. End with the Even3 link.
PROGRAM: [paste the official program]
```

### 6. Live days (5–6 December)

On the event days, the honest message is **access and support**, not "buy now". Registered people need to know where to go. Never post a private meeting link or password publicly.

```prompt
Task: write (a) a "Bom dia, começamos!" Facebook post for 5 December, (b) a 3-frame Story sequence with today's highlights, (c) a short schedule-change notice template, and (d) a closing thank-you post for 6 December. Facts: times in horário de Brasília from the official program; registered participants access the sessions via [CONFIRMAR] — platform and how they receive the link; support via WhatsApp (19) 98816-7751 and conapsuporte@gmail.com. Do not include any private access link. Warm, energetic but calm.
```

**Example (a):**

> Bom dia! Começa hoje o I CONAFROEDU — Congresso Nacional de Africanidades na Educação. 🌅 A programação vai das [HORÁRIO] às [HORÁRIO] (horário de Brasília). Quem está inscrito recebe o acesso por [CONFIRMAR]. Dúvidas ou dificuldade para entrar? Fale com a equipe pelo WhatsApp (19) 98816-7751. Bom congresso a todas e todos!

### 7. Certificates (from 6 December)

Certificate posts generate many questions. Be precise and use the careful wording below **once the committee confirms the criteria**.

> Certificado de participação com carga horária de 40 horas, conforme os critérios de participação divulgados pela organização. O aproveitamento para atividades complementares ou progressão depende das regras da instituição de cada participante.

```prompt
Task: a short Facebook post and a WhatsApp reply template explaining how to download the CONAFROEDU certificate. Facts: available from 6 de dezembro on Even3; criteria: [CONFIRMAR]; step-by-step: [CONFIRMAR] — with the committee. Use the careful certificate wording provided. Do not promise acceptance as horas complementares or career progression.
```

### 8. Proceedings / Anais (by 15 December)

Only post the proceedings when they actually exist, **with the real link and identifiers**. If they're late, post an honest status update. Never let the AI write an ISBN or DOI. It will invent a plausible-looking one.

> Os Anais do I CONAFROEDU estão publicados! 📖 Acesse em [LINK REAL]. ISBN: [NÚMERO REAL]. Cada trabalho tem seu DOI individual, informado na página do trabalho. Obrigado a todas as autoras e todos os autores.

## The Facebook Event description

Use one canonical Event: **"CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação | Online"**. Keep registration, access, participation and open content as separate, clear blocks (see [Facebook Events & Groups](facebook-events-groups.md)).

```prompt
Task: write the Facebook Event description in Brazilian Portuguese, maximum 250 words, scannable with short headings. Blocks: (1) one-paragraph purpose and audience; (2) Inscrição: Even3 link and current values with the date they change; (3) Submissões: until 4/11 — or "encerradas" if after that date; (4) Acesso: how registered participants receive access [CONFIRMAR], noting the Event RSVP is not a registration; (5) Certificado: careful 40-hour wording; (6) Dúvidas: WhatsApp and e-mail. No invented speakers or accessibility services.
```

**Example output (abridged):**

> **CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação**
> Tema: Desenvolvimento, Participação e Educação Antirracista · 5 e 6 de dezembro de 2026 · 100% on-line
>
> Um espaço para professoras e professores da educação básica, estudantes, pesquisadoras, pesquisadores e gestores compartilharem pesquisas e práticas sobre africanidades, relações étnico-raciais e educação antirracista.
>
> **Inscrição:** pela Even3 → https://www.even3.com.br/iconafroedu-764690/ (marcar "Vou" aqui no Facebook não é inscrição). Valores atuais até 15/11.
>
> **Acesso:** as pessoas inscritas recebem as orientações de acesso por [CONFIRMAR].
>
> **Dúvidas:** WhatsApp (19) 98816-7751 · conapsuporte@gmail.com

## WhatsApp messages (opt-in contacts only)

WhatsApp is where Brazilian educators actually read things, which is exactly why abuse burns trust fast. The rules:

- Send reminders and news only to people who **authorized that type of update**. If someone writes first, answer their question; obtain and record permission before later promotional messages. A saved number, a group membership or a Facebook "Interested" click is **not** consent ([WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/)).
- In the free WhatsApp Business app, broadcast lists only reach people **who have saved your number**, with up to 256 contacts per list ([WhatsApp Help](https://faq.whatsapp.com/861663048350950/?cms_platform=iphone&locale=en_US)).
- Always offer an easy way out, and honor **any** clear request to stop, not just the word "SAIR".
- For public updates, a **WhatsApp Channel** is better: followers' numbers aren't shown. See [Instagram & WhatsApp](instagram-whatsapp.md).

```prompt
Task: write in Brazilian Portuguese (a) a WhatsApp Channel update under 500 characters announcing that the official program is out; (b) a direct message for a person who ASKED to receive reminders, about the price change on 16/11, with an opt-out line; (c) a short forwardable invitation a teacher can send to colleagues; (d) a reply to "Tem certificado?" using the careful wording. No hashtags, at most one emoji each, Even3 link in each.
```

**Example outputs:**

> **(b) Lembrete para quem pediu:** Oi, [nome]! Aqui é [pessoa], da organização do CONAFROEDU. Você pediu para receber lembretes sobre o congresso: o valor atual da inscrição vale até 15/11; a partir de 16/11 ele muda. Detalhes: https://www.even3.com.br/iconafroedu-764690/ Se preferir não receber novos avisos, é só me dizer.

> **(c) Para encaminhar:** CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação. Dias 5 e 6 de dezembro, 100% on-line. Um espaço de pesquisa e troca de experiências em educação antirracista, com certificado de 40 horas conforme os critérios da organização. Inscrições: https://www.even3.com.br/iconafroedu-764690/

For automating replies (greeting and away messages, quick replies), see [Automating replies](replies-inbox.md).

## E-mail to partners (NEABIs, graduate programs, associations)

Write **one at a time**, personalized, to a public institutional contact. Never mass-mail scraped addresses. For finding and approaching partners, see [AI-assisted outreach](outreach.md) and [Speaker & partner kits](speaker-partner-kits.md).

```prompt
Task: a formal but warm e-mail in Brazilian Portuguese from the CONAFROEDU organizing committee to [NEABI/NEAB of UNIVERSITY X / PPGE coordinator], asking whether they would consider sharing the congress with their community. Personalize with this real detail about their work: [paste a fact from their public page]. Structure: subject line; who we are (1 sentence); why it fits their work; event facts (dates, online, audience, Even3 link); [if before 4/11: submission deadline, formats, registration requirement and R$ 16,98 publication fee]; a ready-to-forward 3-line text; thanks and contact. Do not claim any partnership, endorsement or MEC recognition. Max 220 words.
```

**Example subject lines:**

- `Chamada de trabalhos | CONAFROEDU 2026 | submissões até 04/11`
- `Convite à divulgação | CONAFROEDU 2026 — 5 e 6/12, on-line`

## Alt text: describe what's actually there

**Alt text** is the image description read aloud by screen readers. Facebook and Instagram let you edit it. Write it for every graphic, and repeat in the caption any date or link that only appears in the image.

```prompt
Task: write alt text in Brazilian Portuguese (max 2 sentences, under 250 characters) for the image described below. Convey the information that matters (event name, date, call to action). Describe people only by visible actions and setting, never assume race, identity, disability or emotions unless the person has approved that description. Do not start with "Imagem de".
Image: [describe what is visible and transcribe all text in the image]
```

**Example:** "Card em tons de terracota e creme com a contagem regressiva: Faltam 7 dias para o CONAFROEDU 2026, em 5 e 6 de dezembro de 2026, 100% online. Convite para se inscrever pelo Even3."

## Hashtags: few and relevant

- **Facebook:** hashtags work as clickable topic labels. Use **0–3** relevant ones and write the topic naturally in the text too. Meta's anti-spam guidance lists excessive hashtags and unrelated captions as problematic ([Meta, April 2025](https://about.fb.com/news/2025/04/cracking-down-spammy-content-facebook/)). No hashtag guarantees reach.
- **Instagram:** Instagram has been moving to a limit of **five hashtags** per post or Reel. Check what your composer allows, and never use the old "30 hashtags" formula.
- **WhatsApp:** no hashtags.

| Use | Hashtags |
|---|---|
| Default | `#CONAFROEDU #EducaçãoAntirracista #Africanidades` |
| Author/submission posts | `#CONAFROEDU #PesquisaEmEducação #PósGraduação` |
| November content with real substance | add `#ConsciênciaNegra` |
| Avoid | Unrelated trending tags, city tags (it's a national online event), all the event's tags on every post |

Before adopting a tag, search it on Facebook/Instagram and check that the results are relevant. Capitalize words (#EducaçãoAntirracista), which is easier to read and better for screen readers.

## One message, many formats

Start from **one approved text** and adapt it. Don't paste the same text everywhere.

```prompt
Task: adapt the approved text below into: (A) a self-contained Facebook post with the Even3 link; (B) an Instagram carousel: 5 slide texts of max 15 words each + caption, pointing to the link in bio (caption links aren't clickable); (C) a 20-second Reel script with an on-screen hook in the first 2 seconds and burned-in caption lines; (D) 3 Story frames; (E) a WhatsApp Channel summary under 500 characters, no hashtags; (F) a Facebook Event discussion post; (G) one paragraph for a partner e-mail. Keep dates, prices, names and conditions exactly. Then give a table checking every fact across all versions.
Approved text: [paste]
```

For animated versions of the same message, see [Motion graphics with Claude](motion-graphics-claude.md). For clips from talks, see [Reels, clips, captions & dubbing](video-repurposing.md).

## Make AI copy sound human and academic-warm

AI Portuguese has tells. Readers spot them, and they make a scholarly community feel like an ad. After every draft, edit with this list:

| AI tell | Replace with |
|---|---|
| "Imperdível!", "Não perca!", "Venha fazer parte dessa jornada" | A concrete reason: what the reader will discuss, learn or share |
| "Em um mundo cada vez mais…", "Você sabia que…?" | Start with the real question or fact |
| "Mergulhe", "potencialize", "transformador", "incrível" | Plain verbs: discutir, apresentar, conhecer, compartilhar |
| Calques: "aplicar para", "endereçar um problema", "fazer sentido" everywhere, "performar" | inscrever-se/submeter, tratar/enfrentar, ser coerente, ter desempenho |
| Three adjectives in a row ("um evento rico, plural e transformador") | One precise adjective, or none |
| An exclamation mark on every sentence, emoji on every line | One exclamation at most; one or two purposeful emojis |
| Generic praise of "diversidade" | Name the actual theme: ERER, Lei 10.639/2003, africanidades no currículo |
| Hedge-less promises ("certificado válido para progressão") | The careful, conditional wording |

Then run this editing prompt:

```prompt
Revise this text so it sounds like Brazilian Portuguese written by a team of educators: warm, precise, educator-to-educator. Keep every fact and the intent; add no sales arguments. Remove marketing clichés, Anglicisms, excessive exclamation marks and emojis, and empty adjectives. Replace abstractions with the concrete examples already in the text. Deliver: the revised text, a list of changes, and any ambiguity to confirm.
Text: [paste]
```

> [!TIP]
> **Read it aloud.** If it sounds like something you'd never say to a colleague in the staff room, rewrite it. Ask a teammate who didn't write it to read it too.

## Avoid engagement bait

Meta demotes posts that coerce reactions, and the policy covers Portuguese. Asking a genuine question is fine. Manipulating distribution is not.

| ❌ Don't | ✅ Do instead |
|---|---|
| "Comente SIM se você valoriza a educação antirracista!" | "Que livro de autoria negra você usa em sala? Conta pra gente." |
| "Marque 5 professores para concorrer a uma inscrição" | Share a useful resource; run promotions only after checking the rules |
| "Compartilhe para mais pessoas verem!" | Make it worth sharing: a checklist, a law summary, a practical question |
| "Últimas vagas!" (online event, no cap) | A true date: "o valor muda em 16/11" |
| AI-written testimonials or invented quotes | Real, authorized statements from participants and speakers |

## The fact-check step (never skip)

AI errors in this campaign would be costly: a wrong deadline, a wrong price, a promised certificate benefit. Before scheduling **anything**:

```prompt
Compare the post below with the official fact sheet. Do not publish or send anything — only review.
Check: names, roles, dates, weekday, time zone (horário de Brasília), prices, deadlines, certificate wording, links, image permissions, pt-BR language, and whether the post mixes the submission and registration calls.
Flag: unsourced promises, invented urgency or scarcity, engagement bait, personal data, [CONFIRMAR] left in the text, and essential information that only appears in the image.
Output: APPROVE AS DRAFT or FIX, with objective reasons.
Fact sheet: [paste] Post: [paste]
```

Then a **human** does the 60-second check:

- [ ] Date, weekday and time zone are right (20/11/2026 is a Friday; 5–6/12 are Saturday–Sunday).
- [ ] Prices match the Even3 checkout today.
- [ ] Submission language only appears if submissions are open (or officially extended).
- [ ] No `[CONFIRMAR]`, no invented speaker, partner, quote or statistic.
- [ ] The link opens the right Even3 page on a phone.
- [ ] Names are spelled exactly as approved, accents included.
- [ ] Someone other than the writer has read it.

## Checklist for the copy system

- [ ] Fact sheet saved and dated; one person owns updates.
- [ ] Voice paragraph and vocabulary table shared with everyone who writes.
- [ ] Master prompt saved in a Project/Notebook/shared document.
- [ ] Separate drafts for submissions (until 4/11) and registrations.
- [ ] Price-change post scheduled for before 16/11 and re-checked on the day.
- [ ] Substantive 20/11 content prepared with a Black educator's approved contribution.
- [ ] Author "trabalho aprovado" kit ready.
- [ ] Event description, WhatsApp templates and certificate reply approved by the committee.
- [ ] Alt text written for every graphic.
- [ ] Fact-check prompt plus human review before every scheduled post.

Before enabling saved instructions or installing/configuring an editor, use [Set up your tools](setup-tools.md).

## Next steps

- Store your context once: [Prompting basics](prompting-basics.md).
- Turn captions into animated cards: [Motion graphics with Claude](motion-graphics-claude.md).
- Put everything on a calendar: [Campaign timeline](campaign-timeline.md) and [6-week sprint](conafroedu-sprint.md).
- Schedule posts in bulk: [Scheduling & publishing tools](scheduling-tools.md).
- Facebook formats and cadence: [Facebook organic playbook](facebook-playbook.md).
- Consent, LGPD and AI disclosure: [Ethics, policies & LGPD](ethics-legal.md).
- All prompts in one place: [Prompt library](prompt-library.md).
