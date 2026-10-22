---
title: Prompting Basics for Marketers
description: How to write prompts that give accurate, natural Brazilian Portuguese copy for CONAFROEDU — with a reusable context block, brand voice, iteration and fact-checking.
order: 30
section: start
icon: 💬
updated: 2026-10-21
---

A **prompt** is the message you type to an AI assistant (Claude, ChatGPT, Gemini, Meta AI…). The quality of what comes back depends less on "magic words" and more on two things: **the facts you give it** and **how clearly you say what you want**.

**What you'll get from this page:**

- A simple anatomy for any marketing prompt.
- The **CONAFROEDU context block** — a copy-paste "fact sheet" you put at the start of every chat so the AI stops guessing dates and prices.
- How to get natural Brazilian Portuguese (not "translated" Portuguese).
- How to save your context once (Projects, Gems/skills, custom GPTs, Gemini Notebook) instead of pasting it every time.
- A checklist for catching the AI's most dangerous mistakes: wrong dates, wrong prices and invented promises.

> [!NOTE]
> All tools mentioned here have a free version. Feature names change often; menus described below were checked against official help pages on 21 October 2026. If something looks different in your account, look for the closest equivalent. For which assistant to use, see [Choosing AI tools](choosing-ai-tools.md).

## Why prompting matters for a small team

An AI assistant is a very fast first-draft writer that **has never heard of CONAFROEDU**. If you ask "write a post about our congress", it will fill the gaps with plausible inventions: a venue in São Paulo, a deadline of 30 November, "certificate recognized by MEC", "limited places". Every one of those would be false — and once published, it costs you trust with teachers and researchers.

The fix is not to stop using AI. The fix is to **always give it the facts, tell it what not to invent, and have a person check the result**.

## The anatomy of a good prompt

Think of a prompt as a short briefing you would give a new volunteer. It has up to seven parts. You don't need all of them every time, but the first four make the biggest difference.

| Part | What it means | CONAFROEDU example |
|---|---|---|
| 1. **Role** | Who the AI should act as | "You are the communications assistant for an academic education congress in Brazil." |
| 2. **Context** | The facts it must use (and only those) | Paste the CONAFROEDU context block (below). |
| 3. **Task** | Exactly what you want | "Write a Facebook post inviting teachers to submit a classroom-practice report." |
| 4. **Audience** | Who will read it | "Basic-education teachers who have never presented at a congress." |
| 5. **Format** | Length, structure, channel | "Up to 80 words, one call to action, 0–3 hashtags at the end." |
| 6. **Constraints** | What it must *not* do | "Do not invent prices, deadlines, speakers or certificate rules. Use [CONFIRMAR] when information is missing." |
| 7. **Check** | Ask it to flag its own risks | "At the end, list every fact a human must verify." |

A weak prompt:

```prompt
Write a post about our congress.
```

A strong prompt:

```prompt
You are the communications assistant for CONAFROEDU 2026, an online academic congress on Africanidades and anti-racist education in Brazil.

Use ONLY the facts in the context block below. Write in natural Brazilian Portuguese — warm, professional, educator-to-educator — never sounding like a translation.

Task: a Facebook post inviting basic-education teachers to turn a classroom practice they already did into a "práticas exitosas" submission.
Audience: teachers who have never submitted work to a congress.
Format: up to 80 words, one clear call to action with the Even3 link, up to 3 hashtags at the end.
Do not invent prices, deadlines, speakers, accessibility services or certificate rules. If something is missing, write [CONFIRMAR].
After the post, list every fact a person must check before publishing.

[PASTE THE CONAFROEDU CONTEXT BLOCK HERE]
```

> [!TIP]
> Even in English-language chats, ask for the **output** in Brazilian Portuguese. You can give instructions in English and still get good pt-BR copy — but have a native speaker read it before posting. The Portuguese version of every prompt on this page is on the [pt-BR page](../pt-BR/prompting-basics.md).

## The CONAFROEDU context block

This is the most important thing on this page. It is a short, approved **fact sheet** written for an AI to read. Paste it at the start of every chat (or store it once — see [Save your context](#save-your-context-so-you-dont-paste-it-every-time)).

Rules for the block:

1. **One owner.** The Coordination person keeps the master copy in a shared document and updates the "version" date whenever a fact changes.
2. **Only verified facts.** Everything below was checked on the Even3 page on 21 October 2026. Prices and dates can change — re-check before a price or deadline campaign.
3. **Unknowns are marked `[CONFIRMAR]`.** This teaches the AI to leave a gap instead of inventing an answer.
4. **Keep it in Portuguese.** The team posts in Portuguese, so the facts should already use the official wording.

```prompt
FICHA OFICIAL — CONAFROEDU 2026
Versão: 21/10/2026 (conferir na Even3 antes de publicar preços ou prazos)

EVENTO
- Nome: I CONAFROEDU — Congresso Nacional de Africanidades na Educação (1ª edição; não existem edições anteriores)
- Tema: "Desenvolvimento, Participação e Educação Antirracista"
- Datas: 5 e 6 de dezembro de 2026 (sábado e domingo), 100% on-line
- Horários das sessões: [CONFIRMAR] — sempre informar "horário de Brasília"
- Plataforma de transmissão e forma de acesso: [CONFIRMAR]
- Inscrições, normas e submissões: https://www.even3.com.br/iconafroedu-764690/

PÚBLICO
- Professoras e professores da educação básica, estudantes de graduação e pós-graduação, pesquisadoras e pesquisadores, gestoras e gestores escolares e demais profissionais da educação; alcance nacional.

O QUE O EVENTO OFERECE (como divulgado)
- Apresentação de trabalhos
- Publicação nos Anais com ISBN e DOI (após avaliação; taxa de publicação de R$ 16,98 por trabalho, à parte da inscrição)
- Certificado de 40 horas (critérios para receber: [CONFIRMAR])
- Modalidades: artigo completo, resumo expandido, práticas exitosas (as normas na Even3 também citam resumo simples — [CONFIRMAR])

DATAS IMPORTANTES
- Submissões de trabalhos (e vídeo de apresentação): até 4/11/2026 — horário-limite [CONFIRMAR]
- Resultado da avaliação: em até 5 dias úteis após a submissão
- Pacotes com 2 ou 3 submissões: disponíveis até 5/11/2026
- Valor atual das inscrições: até 15/11/2026; novo valor a partir de 16/11/2026
- Programação oficial: até 25/11/2026
- Congresso: 5 e 6/12/2026
- Certificados: a partir de 6/12/2026
- Anais: até 15/12/2026

VALORES EXIBIDOS NA EVEN3 EM 21/10/2026 (até 15/11 → a partir de 16/11)
- Ouvinte/público geral: R$ 55,00 → R$ 60,00
- Graduação + 1 submissão: R$ 55,00 → R$ 60,00
- Pós-graduação + 1 submissão: R$ 60,00 → R$ 65,00
- Professor(a)/profissional da educação + 1 submissão: R$ 70,00 → R$ 75,00
- Inscrição + 2 submissões: R$ 99,00 / + 3 submissões: R$ 150,00 (até 5/11)

CONTATO
- WhatsApp da Comissão Organizadora: (19) 98816-7751
- E-mail: conapsuporte@gmail.com
- Instagram: @congressosnacionais_online
- Página/Evento no Facebook: [CONFIRMAR URL]

HASHTAGS PRINCIPAIS
#CONAFROEDU #EducaçãoAntirracista #Africanidades

NÃO AFIRMAR (ainda sem decisão da comissão)
- Se a apresentação é obrigatória ou opcional
- Prorrogação de prazo de submissão
- Regras detalhadas do certificado de 40 horas
- Recursos de acessibilidade (Libras, legendas), gravações, local físico (o evento é on-line)
- Reconhecimento pelo MEC, Qualis, pontuação em progressão ou "vagas limitadas"
```

> [!WARNING]
> The block contains the public support phone and e-mail from the official announcement — that's fine. **Never** add personal data to it: no registrant lists, CPFs, payment details, private messages or unpublished papers. Those must not go into public AI assistants (see [Ethics, policies & LGPD](ethics-legal.md)).

### Keep the block alive

- [ ] After **4 November**, change the submissions line to "Submissões encerradas em 4/11" (unless the committee officially extends the deadline).
- [ ] After **15 November**, remove the old prices and keep only the current ones.
- [ ] On **25 November** (or when the program is published), add confirmed session times and speakers.
- [ ] After the event, add how to download certificates and, when available, the real proceedings link.

## Your brand voice in one paragraph

Facts alone give you correct but bland copy. Add a short **voice** paragraph so every assistant sounds like CONAFROEDU. The full voice and tone guide lives in [Build your brand kit](brand-kit.md); this is the compact version to paste right after the context block:

```prompt
VOZ DA MARCA — CONAFROEDU
Tom acadêmico, mas acolhedor: de educadora para educador. Português brasileiro natural, com "você". Frases curtas e concretas; explique siglas na primeira menção (ex.: ERER — Educação para as Relações Étnico-Raciais). Valorize a experiência de quem está na escola e na pesquisa. Linguagem respeitosa sobre pessoas negras e culturas afro-brasileiras; nunca use "moreno(a)" como eufemismo. Use "professoras e professores" ou outra forma inclusiva que soe natural. Evite: urgência falsa ("últimas vagas"), promessas ("garanta sua progressão"), exageros ("evento imperdível!!!"), excesso de emojis (no máximo 2) e clichês de marketing traduzidos do inglês. Um único convite para ação por publicação.
```

## How to write in natural Brazilian Portuguese with AI

AI models write Portuguese well, but they drift into three problems: **European Portuguese forms**, **"translated" marketing English**, and **over-formal academic stiffness**. Ask for what you want explicitly:

| Ask for | Instead of |
|---|---|
| "português brasileiro natural, com 'você'" | Leaving the variety unspecified (you may get "vós", "telemóvel", "registo") |
| "tom de conversa entre colegas educadores" | "tom profissional" (often produces corporate jargon) |
| Dates as **4 de novembro de 2026** in text, **04/11** in compact cards | "November 4th" logic or "11/04" (US order — a dangerous ambiguity) |
| Money as **R$ 55,00** | "R$55" or "BRL 55" |
| Times as **"às 23h59, horário de Brasília"** | "midnight" without date or time zone (Brazil has several time zones) |
| **"inscrição"** (registration) vs **"submissão"** (sending a paper) | Mixing them — they are different steps with different deadlines |
| **"certificado de 40 horas"** | "40h de aulas ao vivo" (not documented) |

Useful vocabulary to include in prompts so the AI uses the right academic terms: *chamada de trabalhos, submissão, parecer, carta de aceite, anais, eixos temáticos, relato de experiência, carga horária, ouvinte, prorrogação de prazo, virada de lote*.

> [!TIP]
> A quick test of naturalness: read the draft aloud. If it sounds like a dubbed movie, ask: *"Reescreva como uma professora brasileira falaria com colegas no grupo da escola. Mantenha os fatos exatamente iguais."*

## Iterate: the second prompt is where quality happens

Don't accept the first draft and don't start over from scratch. Treat the chat as a conversation with an editor. Change **one thing at a time**:

1. **Ask for options.** "Give me 3 versions with different opening lines: a question, a fact, a teacher's situation."
2. **Pick and refine.** "Use version 2. Make it shorter (max 50 words) and replace the last sentence with a clearer call to action."
3. **Adapt the channel.** "Now adapt it for WhatsApp: no hashtags, plain text, the link on its own line."
4. **Change the audience.** "Now a version for postgraduate students focused on publishing in the proceedings with ISBN and DOI."
5. **Ask for critique.** "Act as a skeptical teacher reading this. What is unclear, exaggerated or missing?"

Useful follow-up phrases:

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

> [!NOTE]
> Once a chat becomes very long, assistants start "forgetting" early instructions. If quality drops, open a new chat and paste the context block + voice again with your best draft.

## Save your context so you don't paste it every time

All major assistants let you save instructions and documents once. Names change frequently — here is what each offers as of October 2026:

| Tool | Feature | What to do | Free? |
|---|---|---|---|
| **Claude** | **Projects** — a workspace with saved instructions and files | Create a project "CONAFROEDU 2026", paste the context block + voice into the project instructions, upload approved documents (the official announcement, approved bios). Every chat inside the project uses them. | Claude has a free plan; check whether Projects appear in your account's sidebar. [Claude plans](https://claude.com/pricing) |
| **Gemini** | **Gems** (being replaced by **skills**) | Google's release notes from 30 September 2026 say skills are rolling out to replace Gems, so you may see either. Create one called "Redator CONAFROEDU" with the block and voice as its instructions. | Free Google account; features vary by region. [Gemini release notes](https://gemini.google/us/release-notes/) |
| **Gemini Notebook** (known to many as **NotebookLM**) | A notebook that answers **only from the sources you upload**, with citations | Upload the approved fact sheet, rules and speaker bios. Ask for FAQs and bios — every answer points to the source passage. Free standard plan lists 100 notebooks and 50 sources per notebook. | Yes. [Plans and limits](https://support.google.com/gemininotebook/answer/16213268?hl=en) |
| **ChatGPT** | **Custom GPTs** (OpenAI is moving some workplace customers to "plugins") | If available in your account, create a GPT with the block as instructions. If not, use the fallback below. | Varies by plan. [OpenAI guidance](https://learn.chatgpt.com/docs/migrate-custom-gpts) |
| **Any assistant** | **Fallback** | Keep the block in a shared Google Doc/Word file called "FICHA OFICIAL — versão DD/MM". Paste it at the top of every new chat. | Always works |

> [!WARNING]
> A saved project or Gem does **not** update itself. When a fact changes (for example, after 15 November prices go up), update the master document **and** every saved project/Gem/GPT. Write down where copies exist so you don't leave an old price running in one of them.

### A starter prompt for a Gemini Notebook

```prompt
Use only the sources selected in this notebook. Prepare a 60-word bio of [NAME] for promoting CONAFROEDU 2026, in Brazilian Portuguese.
Separate: (1) publishable text; (2) a table "fact → source/passage"; (3) doubts marked [CONFIRMAR].
Do not confuse people with the same name, do not update job titles by inference, and do not invent degrees, racial self-identification, institution or confirmed participation.
```

Then send the bio to the speaker for approval before publishing. More on this in [Speaker & partner promo kits](speaker-partner-kits.md).

## Verify every output: dates, prices, promises

AI assistants **hallucinate** — they produce confident, fluent statements that are false. In event marketing the costly hallucinations are almost always the same five types. Check them every time.

| Type of error | Real-world examples the AI might produce | Correct fact |
|---|---|---|
| **Dates** | "Submissões até 30 de novembro"; "dia 5/12, segunda-feira"; "Lei 10.639 completa aniversário em novembro" | Submissions close **4/11**; 5 Dec 2026 is a **Saturday**; Lei 10.639 is from **9 January 2003** |
| **Prices** | "Inscrição gratuita"; "R$ 49,50" (a number from Even3's hidden metadata, not the displayed price); "publicação incluída" | Displayed prices R$ 55–70 until 15/11; publication fee **R$ 16,98 per work** is separate |
| **Promises** | "Certificado reconhecido pelo MEC"; "Anais Qualis A"; "garante pontos na progressão" | None of these are established. The certificate's use depends on each institution's rules |
| **Place and format** | "Em Campinas"; "auditório da universidade" | **100% on-line**; no venue (don't infer a city from the WhatsApp area code) |
| **People and history** | Invented speaker, invented quote, "3ª edição", fake testimonial | 1st edition. Only confirmed speakers with approved bios; no invented quotes |

### The 60-second fact check

Before anything AI-written goes to the scheduler, a second person ticks this list:

- [ ] Every **date** matches the context block (and the weekday is right).
- [ ] Every **price** matches what Even3 displays today.
- [ ] The **link** opens the CONAFROEDU page on Even3.
- [ ] No promise about **MEC, Qualis, credit hours or progression**.
- [ ] No **scarcity** ("últimas vagas") or **urgency** that isn't a real date.
- [ ] Names, titles and institutions match **approved** bios.
- [ ] The post doesn't ask for **submissions after 4 November** (unless an official extension exists).
- [ ] Accents are right: *Educação, Participação, Antirracista, Africanidades, Consciência*.
- [ ] Nothing says or implies an institution is a partner or sponsor without written agreement.

You can also ask the AI to help check — but never as the only check:

```prompt
Compare the text below with the official fact sheet. List in a table every date, price, name, link and promise in the text, and mark each one as: MATCHES / DIFFERENT / NOT IN FACT SHEET. Do not fix anything; only list.

FACT SHEET: [paste context block]
TEXT: [paste draft]
```

## Common mistakes (and quick fixes)

| Mistake | Why it hurts | Fix |
|---|---|---|
| Asking without facts | The AI invents plausible details | Always paste the context block |
| "Make it go viral" | Produces clickbait, fake urgency and spammy hashtags | Ask for a specific goal: "get teachers to open the submission rules" |
| Accepting the first draft | Generic, sometimes wrong | Ask for 3 options, pick one, refine |
| Asking for everything at once (post + Reel script + email + WhatsApp) | Quality drops, facts drift between versions | One deliverable per message, then adapt |
| Pasting personal data | LGPD risk; data may be stored by the provider | Anonymize: "a teacher asked whether…" |
| Uploading unpublished papers | Authors didn't authorize it | Never upload submissions to public AI |
| Letting the AI "verify" itself | It can confidently confirm its own error | A human checks against Even3 and the fact sheet |
| Translating English copy word by word | Sounds foreign, loses warmth | Ask for an original pt-BR version from the facts |
| Generating images of "African" people or symbols without review | Stereotypes and cultural errors | Follow [Representation & bias](representation-bias.md) |
| Copying hashtags from every post | Meta treats excessive/unrelated hashtags as spammy | 0–3 relevant hashtags on Facebook; see [brand kit](brand-kit.md#hashtag-set) |

## Practice exercise (15 minutes)

1. Open a free assistant (Claude, Gemini or ChatGPT).
2. Paste the context block and the voice paragraph.
3. Run this prompt:

```prompt
Using only the fact sheet and the brand voice above, write in Brazilian Portuguese:
1. A 70-word Facebook invitation for teachers to submit a "práticas exitosas" report by 4 November.
2. A 20-word hook for a Reel.
3. A reply to the WhatsApp question "Tem certificado?" — without inventing rules (use [CONFIRMAR] where needed).
4. A 120-word e-mail to a university education graduate program asking them to share the call for papers.
Then list every fact that needs human verification.
```

4. Run the same prompt in a second assistant and compare. Which one needed less fixing? That comparison is more useful than any online ranking — see [Choosing AI tools](choosing-ai-tools.md#test-them-yourself-a-20-minute-pt-br-comparison).

## Next steps

- Turn the voice paragraph into a full guide: [Build your brand kit](brand-kit.md).
- Use your prompts on real posts: [Copywriting with AI](copywriting.md).
- Grab ready-made prompts by task: [Prompt library](prompt-library.md).
- See what to post this week: [CONAFROEDU 2026 sprint plan](conafroedu-sprint.md).
- Before generating any image of people: [Representing Black & African cultures respectfully](representation-bias.md).
