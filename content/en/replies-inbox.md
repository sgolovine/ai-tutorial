---
title: Automating Replies & Community Management
description: Set up free auto-replies, WhatsApp quick replies and an AI-drafts-human-approves inbox routine, with a ready-to-adapt FAQ answer bank for CONAFROEDU 2026.
order: 320
section: automate
icon: 💬
updated: 2026-10-21
---

> [!TIP] New to these tools?
> Follow the [setup steps](setup-tools.md#whatsapp-business) first. If a button or concept is unfamiliar, use the [AI learning guide](learning-with-ai.md) for one small practice task.

**What you'll get from this page:** a practical inbox system for a small volunteer committee. It covers what to automate (greetings, away messages, stable FAQs), what to keep human (payments, certificates, accessibility, conflicts), and how to use AI to draft replies without letting it invent answers. At the centre is a **ready-to-adapt FAQ answer bank for CONAFROEDU 2026** in Portuguese. Each answer is marked either *confirmed on the Even3 page* or *confirm with the committee*.

> [!IMPORTANT]
> Every unanswered question is a lost registration. With **submissions closing on 4 November 2026**, the most valuable automation this month is a fast, correct answer to "how do I submit?". Clever bots can wait.

## The four layers of reply automation

Think of inbox automation as four layers, from simplest and safest to most complex. Most small teams only need layers 1–3.

| Layer | What it is | Example | Cost | Risk |
|---|---|---|---|---|
| **1. Automatic fixed messages** | The same text is sent automatically when someone writes (greeting, away message) | "Olá! Recebemos sua mensagem…" | Free (Facebook Page, WhatsApp Business app) | Low, if the text is accurate and says it is automatic |
| **2. Quick replies (saved replies)** | Pre-written answers that **a person chooses** and sends with a shortcut | Typing `/certificado` inserts the approved certificate answer | Free | Low. A human is still reading |
| **3. AI drafts, human approves** | An assistant drafts a reply from your approved FAQ, and a person checks it and sends it | Unusual question about co-authorship | Free AI chat tiers | Medium. Needs checking and privacy care |
| **4. AI agent replies on its own** | A bot answers customers directly (e.g., Meta Business Agent) | 24/7 answers on WhatsApp/Messenger | Free start in some accounts, paid tiers | High for an academic event with unresolved rules |

> [!WARNING]
> A **quick reply** is not a chatbot. On WhatsApp Business, it is a shortcut that a person selects. Also, **consumer Meta AI** (the assistant in your WhatsApp/Instagram) is a different product from a business inbox agent. Using Meta AI does not give it permission to answer as your Page.

## Before you automate: the official answer sheet

Automation repeats whatever you give it, including mistakes, hundreds of times. So start with the **answer bank** below. Paste it into your shared sheet as a tab called **FAQ aprovado**, with a version number and date. Then:

1. A committee member reviews every answer marked **(confirm with the committee)**. They replace the brackets with the official decision, or keep the "we'll confirm" version.
2. Only answers marked ✅ (or confirmed by the committee) go into automatic messages and quick replies.
3. Each time a fact changes (4 Nov, 16 Nov, 25 Nov, 6 Dec), update the sheet **first**, then the quick replies.

## The CONAFROEDU 2026 FAQ answer bank

**Sources:** the public [CONAFROEDU page on Even3](https://www.even3.com.br/iconafroedu-764690/) and the organizers' published timeline (checked on 21 October 2026), plus the official announcement. Where the public page has gaps or contradicts itself, the answer is marked **(confirm with the committee)**. Don't send that part until the committee decides.

### Summary table

| Shortcut | Question people ask | Status |
|---|---|---|
| `/datas` | When and where is it? | ✅ Dates and format confirmed. Detailed schedule comes with the programme (by 25 Nov) |
| `/inscricao` | How do I register? | ✅ |
| `/valores` | How much does it cost? | ✅ Prices shown on the page. ⚠️ Final checkout amount and the 4 vs 5 Nov package date |
| `/ouvinte` | Can I attend without presenting a paper? | ✅ |
| `/prazo` | What is the submission deadline? | ✅ 4 Nov. ⚠️ Exact closing **time** |
| `/modalidades` | What types of work can I submit? Formatting rules? | ✅ Rules on the page. ⚠️ "Resumo simples" missing from the FAQ |
| `/comosubmeter` | How do I submit on Even3? | ✅ Requirements. ⚠️ Exact menu path (record a screen video) |
| `/publicacao` | Is there an ISBN/DOI? Does it cost extra? | ✅ As advertised. ⚠️ Publisher and how the DOI is delivered |
| `/certificado` | Is there a certificate? How many hours? | ✅ 40 hours advertised, from 6 Dec. ⚠️ **Who qualifies and under what conditions** |
| `/apresentacao` | Is presenting mandatory? | ⚠️ **Contradiction on the page. The committee must decide** |
| `/video` | What about the presentation video? | ✅ Deadline 4 Nov. ⚠️ Format, upload route, review-timing conflict |
| `/prorrogacao` | Will the deadline be extended? | ⚠️ Only the committee can answer |
| `/horas` | Will it count for complementary hours / career progression? | ✅ Safe answer: depends on the institution |
| `/acesso` | How do I watch / where is the link? | ⚠️ Platform and access route not published |
| `/acessibilidade` | Is there Libras, captions…? | ⚠️ Promise nothing until confirmed |
| `/pagamento` | Payment problem / refund / registration already made | Always a human |
| `/humano` | (Handover to a person) | ✅ |
| `/contato` | Official contacts | ✅ |

**This is the canonical shortcut bank.** Other guides use subsets, not separate answers. Retire aliases `/submissao` → `/prazo` + `/comosubmeter`, `/anais` → `/publicacao`, and `/programacao` → `/datas`. Review any existing aliases at every rollover. Labels are exactly: **Dúvida sobre inscrição; Dúvida sobre submissão; Instituição parceira; Precisa de resposta humana; Não enviar divulgação**. Labels do not enforce suppression automatically; the sender checks the record.

### The answers (ready to paste, in Portuguese)

Replace placeholders only with recorded committee decisions. **Never erase an unresolved warning and leave its claim.** Mixed answers are not approved as a whole: save only confirmed sentences or the holding reply “a comissão vai confirmar”. Follow the [marker convention](prompting-basics.md).

**`/datas` — When and where**

```text
O CONAFROEDU 2026 – Congresso Nacional de Africanidades na Educação acontece nos dias 5 e 6 de dezembro de 2026, 100% on-line. A Even3 já mostra uma programação parcial, com atividades e alguns palestrantes identificados. A programação oficial completa está prevista até 25 de novembro; confirme os horários de Brasília antes de divulgar cada sessão: https://www.even3.com.br/iconafroedu-764690/
```

**`/inscricao` — How to register**

```text
As inscrições são feitas pela Even3: https://www.even3.com.br/iconafroedu-764690/
Escolha a categoria que combina com você (ouvinte ou inscrição com submissão de trabalho) e conclua o pagamento. Use um e-mail que você consulta sempre e, se for submeter trabalho, use esse mesmo e-mail na submissão. As inscrições ficam abertas até 6 de dezembro.
```

**`/valores` — Prices** (✅ prices displayed on 21/10; ⚠️ check the final checkout amount)

```text
Valores exibidos na página do evento:
• Até 15/11: Ouvinte/público geral R$ 55,00 | Graduação + 1 submissão R$ 55,00 | Pós-graduação + 1 submissão R$ 60,00 | Professor(a)/profissional da educação + 1 submissão R$ 70,00
• A partir de 16/11: R$ 60,00 | R$ 60,00 | R$ 65,00 | R$ 75,00
• Pacotes (até 5/11): inscrição + 2 submissões R$ 99,00 | inscrição + 3 submissões R$ 150,00
O valor final aparece no checkout da Even3. Para trabalhos aprovados, a publicação nos anais tem taxa à parte de R$ 16,98 por trabalho.
```

> [!NOTE]
> The page sells multi-submission packages until **5 November**, but submissions close on **4 November**. Ask the committee how to explain this before quoting the packages. Buying a package does not reopen submissions.

**`/ouvinte` — Attending without a paper** ✅

```text
Sim! Você pode participar como ouvinte, sem apresentar trabalho. A categoria Ouvinte/público geral custa R$ 55,00 até 15/11 e R$ 60,00 a partir de 16/11. Inscrições: https://www.even3.com.br/iconafroedu-764690/
```

**`/prazo` — Submission deadline** (✅ date; ⚠️ time)

```text
As submissões de trabalhos vão até 4 de novembro de 2026, às [CONFIRMAR] (HORÁRIO) (horário de Brasília). Quem for apresentar também deve enviar o vídeo de apresentação até 4 de novembro. O resultado da avaliação sai em até 5 dias úteis após a submissão.
Normas e submissão: https://www.even3.com.br/iconafroedu-764690/
```

**`/modalidades` — Types of work and formatting** (✅ public rules; ⚠️ "resumo simples" appears in the rules and the submission form but not in the FAQ, so confirm it is accepted)

```text
Modalidades aceitas:
• Artigo completo – até 20 páginas
• Resumo expandido – de 2 a 5 páginas
• Resumo simples – 1 página [CONFIRMAR] (se está aceito)
• Práticas exitosas / relato de experiência – até 10 páginas
Formatação: arquivo em PDF, papel A4, Arial ou Times New Roman 12, espaçamento 1,5, texto justificado, margens superior e esquerda de 3 cm e inferior e direita de 2 cm, até 6 autores, citações e referências conforme a ABNT.
Leia as normas completas antes de enviar: https://www.even3.com.br/iconafroedu-764690/
```

**`/comosubmeter` — How to submit on Even3** (✅ requirements; ⚠️ exact menu names)

```text
Passo a passo para submeter seu trabalho:
1. Faça sua inscrição na Even3 em uma categoria com submissão. A pessoa autora responsável pelo envio precisa estar inscrita.
2. Use o MESMO e-mail na inscrição e na submissão.
3. Na página do evento, acesse a área de submissão de trabalhos [CONFIRMAR] (o caminho exato / link do vídeo tutorial).
4. Escolha a modalidade e a área temática, preencha os dados de autoria e envie o arquivo em PDF, conforme as normas.
5. Confira se o trabalho aparece como enviado.
A submissão não tem custo adicional além da inscrição. Se o trabalho for aprovado, a publicação nos anais tem taxa de R$ 16,98 por trabalho.
Prazo: 4 de novembro de 2026.
```

> [!TIP]
> The best support tool you can make this week is a **60–90-second screen recording** of a committee member walking through a test submission on Even3. Link it in `/comosubmeter`. It answers the question better than any bot, and it also confirms the real menu names.

**`/publicacao` — Proceedings, ISBN and DOI** (✅ as advertised; ⚠️ publisher/DOI details)

```text
Os trabalhos aprovados serão publicados nos Anais do CONAFROEDU 2026, com ISBN, e a organização informa DOI individual para cada trabalho. A publicação está prevista até 15 de dezembro de 2026 e tem taxa de R$ 16,98 por trabalho, à parte da inscrição. [CONFIRMAR] (responsável pela publicação e como cada autor recebe o DOI.)
```

If someone asks about **Qualis**, never say the proceedings are "Qualis A" or "count points". Use:

```text
ISBN e DOI identificam a publicação e facilitam que ela seja encontrada e citada, mas não significam uma classificação Qualis automática. A forma como anais são considerados depende das regras da sua área, programa ou processo seletivo – vale consultar o edital ou a coordenação.
```

**`/certificado` — Certificate** (✅ 40 hours advertised, available from 6 Dec; ⚠️ **conditions**)

```text
O CONAFROEDU oferece certificado com carga horária de 40 horas, disponível a partir de 6 de dezembro de 2026, pela Even3. [CONFIRMAR] (quem recebe (ouvintes, autores, apresentadores), se há exigência de presença ou atividades e como as 40 horas são compostas.)
O aproveitamento como atividade complementar ou para progressão depende das regras da sua instituição ou rede de ensino.
```

**`/apresentacao` — Is presenting mandatory?** ⚠️ **Don't automate this one yet.** The event's rules and slide instructions say presentation is optional, but its FAQ says it is mandatory. Until the committee decides, use the holding reply:

```text
Ótima pergunta! Estamos confirmando essa informação com a comissão científica e respondemos você em breve. Enquanto isso, as normas completas estão em https://www.even3.com.br/iconafroedu-764690/
```

After the decision, replace it with **one** of these (and fix the page so it no longer contradicts itself):

```text
[VERSÃO A – se for opcional] A apresentação é opcional. Trabalhos aprovados podem ser publicados nos anais mesmo sem apresentação, conforme as normas. [CONFIRMAR] (efeito no certificado.)

[VERSÃO B – se for obrigatória] Para ter o trabalho publicado nos anais, é necessário apresentá-lo, conforme as normas. O vídeo de apresentação deve ser enviado até [DATA].
```

**`/video` — Presentation video** (✅ deadline; ⚠️ details)

```text
Quem for apresentar deve enviar o vídeo de apresentação até 4 de novembro de 2026. [CONFIRMAR] (duração, formato, onde enviar e o que fazer se o resultado da avaliação ainda não tiver saído.)
```

> [!WARNING]
> Someone who submits on 4 November gets a result "within 5 business days", which is after the 4 November video deadline. Don't invent a grace period in a reply. Ask the committee to publish one clear rule.

**`/prorrogacao` — Deadline extension** ⚠️

```text
Até o momento, o prazo de submissão é 4 de novembro de 2026. Se houver qualquer mudança, ela será publicada na página oficial do evento e nos nossos canais.
```

Only change this answer after the committee formally decides **and** Even3 is updated. Never hint at an extension to "keep people interested".

**`/horas` — Complementary hours / progression** ✅

```text
O certificado informa carga horária de 40 horas. Se ele pode ser aproveitado como atividade complementar, formação continuada ou progressão, isso depende das regras do seu curso, instituição ou rede de ensino. Recomendamos consultar sua coordenação.
```

**`/acesso` — How to watch** ⚠️

```text
O congresso é 100% on-line. As orientações de acesso serão enviadas às pessoas inscritas [CONFIRMAR] (por e-mail / área do participante da Even3 / plataforma) antes do evento. Confira se o e-mail da sua inscrição está correto.
```

**`/acessibilidade` — Accessibility** ⚠️ Never promise Libras, captions or recordings unless confirmed.

```text
Queremos garantir a sua participação. Conte para nós qual recurso de acessibilidade você precisa, e uma pessoa da equipe responde você diretamente. [CONFIRMAR] (quais recursos estão garantidos.)
```

**`/pagamento` — Payment, refund, registration already made.** Always handed to a person.

```text
Sinto muito pelo transtorno! Questões de pagamento, reembolso ou inscrição já realizada são atendidas por uma pessoa da equipe. Por favor, informe o e-mail usado na inscrição. Não envie CPF, dados de cartão ou documentos por aqui.
```

**`/humano` — Handover**

```text
Vou passar sua mensagem para uma pessoa da comissão organizadora. Respondemos de [DIAS], das [HORA] às [HORA] (horário de Brasília).
```

**`/contato` — Official contacts** ✅

```text
Comissão Organizadora do CONAFROEDU 2026
WhatsApp: (19) 98816-7751
E-mail: conapsuporte@gmail.com
Página oficial e inscrições: https://www.even3.com.br/iconafroedu-764690/
```

### Questions that never get an automatic or AI answer

Send these to a committee member every time:

- payment problems, refunds, invoices, duplicate charges;
- certificate disputes ("I attended but didn't get it");
- review results, appeals, co-author changes, corrections after review;
- accessibility needs (these may involve sensitive health information);
- "Is this recognized by MEC?", "Does it count for my selection process / progression?" beyond the safe `/horas` answer;
- any question about a minor or a school's students;
- complaints, harassment, racist messages, press requests, partnership proposals.

### After the submission cutoff: replace the whole active bank

At the committee-confirmed cutoff on 4 November (review on 5 November), audit **every** answer, greeting, scheduled reply and saved AI context. These are replacements, not extra shortcuts:

```text
/inscricao — As inscrições como ouvinte seguem pela Even3 até 6/12: https://www.even3.com.br/iconafroedu-764690/ As submissões estão encerradas. Para pendências de trabalho já enviado, nossa equipe atende você; comprar ingresso não reabre submissões.
/prazo e /comosubmeter — As submissões estão encerradas, salvo alteração publicada oficialmente. Você pode participar como ouvinte. Pendências de trabalhos já enviados serão atendidas por uma pessoa da comissão.
/modalidades e /video — Estas orientações agora são apenas para trabalhos já enviados. Nossa equipe confirma eventuais pendências; não há promessa de nova submissão ou prazo extra.
```

Remove submission-purchase instructions from `/inscricao`. Rewrite `/valores` for attendance: R$55 through 15/11, R$60 from 16/11, **check checkout**. Route existing-author/category questions to a human. Packages advertised through 5/11 never extend the 4/11 submission deadline; remove expired package offers as soon as sales end (check on 6/11). Update `/prorrogacao` from the actual official status. Test “Can I buy now and submit a new paper?”: no reopened deadline may be implied.

## Layer 1: automatic greeting and away messages

### Facebook Page / Messenger

Meta documents an **instant reply** (greeting) for Page messages ([Meta Help](https://www.facebook.com/help/1698046970464236/)). The current screens are behind login and we couldn't test them, so labels may differ. In Business Suite, look for **Inbox** ("Caixa de entrada") → **Automations** ("Automações"). Common options include *Instant reply* ("Resposta instantânea"), *Away message* ("Mensagem de ausência") and *Frequently asked questions* ("Perguntas frequentes"). If you see them:

1. Turn on **Instant reply** with the greeting below.
2. Turn on **Away message** for the hours nobody is watching.
3. If the FAQ option appears, add 3–4 ✅ questions only (dates, registration, deadline, contact). Each answer links to Even3.
4. Send a test message from a teammate's personal account and check what arrives.

Greeting (tell people it is automatic, and tell them not to send sensitive data):

```text
Olá! Esta é uma resposta automática da organização do CONAFROEDU 2026.
Recebemos sua mensagem. O congresso será 100% on-line, em 5 e 6 de dezembro.
Respondemos de [DIAS], das [HORAS], no horário de Brasília.
Inscrições e normas: https://www.even3.com.br/iconafroedu-764690/
Se sua dúvida for sobre inscrição já realizada, aguarde nossa equipe.
Não envie CPF, dados de pagamento ou documentos por aqui.
```

### WhatsApp Business app (free)

The WhatsApp Business app is free. It includes a business profile, catalog, **greeting message**, **away message**, **labels** and **quick replies** ([WhatsApp Business features](https://whatsappbusiness.com/products/business-app-features/)). In the Brazilian app these are usually under **Settings → Business tools** ("Configurações → Ferramentas comerciais"). Exact names may vary by version.

1. **Business profile:** "Comissão Organizadora – CONAFROEDU 2026", the description, the Even3 link, email and service hours.
2. **Greeting message** ("Mensagem de saudação"): use the greeting above.
3. **Away message** ("Mensagem de ausência"): set it for outside your service hours.
4. **Quick replies** ("Respostas rápidas"): create one per shortcut in the answer bank (`/datas`, `/valores`, `/prazo`…).
5. **Labels** ("Etiquetas"): *Dúvida sobre submissão*, *Dúvida sobre inscrição*, *Instituição parceira*, *Precisa de resposta humana*, *Não enviar divulgação*.

> [!CAUTION]
> Labels organize conversations. They are **not** permission to send marketing to everyone with a label. WhatsApp's policy requires opt-in for messages you start and respect for opt-outs ([WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/)).

**About broadcast lists:** an ordinary broadcast list only reaches people who have **saved your number in their own contacts**. Lists hold up to **256 contacts**, and WhatsApp warns that monthly limits are rolling out by country ([WhatsApp Help](https://faq.whatsapp.com/861663048350950/?cms_platform=iphone&locale=en_US)). Someone saving your number lets the message be delivered. It does **not** mean they agreed to receive marketing. Use broadcast lists only for people who asked for updates.

## Layer 2: quick replies in daily practice

- The person on inbox duty reads each message, picks the right shortcut, **adjusts the first line to the person** ("Oi, Ana! …"), and sends.
- If the question doesn't match any shortcut, it goes to layer 3 or to a human.
- Every Friday, look at the questions that had no shortcut. Should one become a new FAQ entry (after committee approval)?

## Layer 3: AI drafts, a human approves

This is the right place for AI in a small team's inbox. An assistant can draft a polite, accurate answer to an unusual question in seconds, **as long as it only uses your approved FAQ**.

### Step by step

1. Copy the question. **Remove personal data** first: name, phone, email, CPF, school, anything health-related. Replace them with `[PESSOA]`, `[ESCOLA]`.
2. Open your assistant (Claude, ChatGPT and Gemini all have free tiers; see [Choosing AI Tools](choosing-ai-tools.md)) inside a Project/notebook that already contains the **FAQ aprovado** document.
3. Use the prompt below.
4. Check every fact in the draft against the FAQ sheet. Fix the tone.
5. Send it yourself. Log the question category in the sheet.

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
> In **Gemini Notebook** (formerly NotebookLM, free with limits), upload the approved FAQ and the event rules as sources. Any volunteer can then ask "what do we answer about the video?" and get an answer with a citation to the source. It is a great internal help desk. You still check the cited passage before replying. ([Google Help](https://support.google.com/gemininotebook/answer/16206563?hl=pt-BR))

### Privacy rules for AI drafting (LGPD)

- Never paste CPFs, payment details, registration exports, student lists, health or accessibility details, or whole conversation histories into a consumer AI assistant.
- Use the minimum: the question itself, without identifiers.
- Don't use real attendee messages as "examples" in public prompts or posts.
- See [Ethics, Policies & LGPD](ethics-legal.md).

## Layer 4: AI agents and chatbot tools (evaluate carefully)

### Meta Business Agent

In June 2026, Meta announced **Meta Business Agent** in Brazil. It is a business-facing AI that answers customer messages on WhatsApp and Messenger, with a free starting offer and human handoff ([Meta announcement, pt-BR](https://about.fb.com/br/news/2026/06/conversations-2026-apresentamos-o-meta-business-agent/)). In September, Meta launched **Meta One** business bundles with more Business Agent access, from **R$ 59/month** (Essencial) ([Meta One announcement](https://about.fb.com/br/news/2026/09/apresentando-o-meta-one-um-servico-de-assinatura-com-mais-recursos-e-ia-para-criar-se-conectar-e-se-destacar/)).

What we could **not** confirm: whether it is active on your Page/number, how many free replies are included, and how good it is in Portuguese for academic questions. Our recommendation for CONAFROEDU:

- **Not before 4 November.** The submission rules still contain contradictions (presentation, video timing, resumo simples). A bot will repeat them confidently.
- If you test it later, feed it **only** the approved FAQ. Test it with 20 real (anonymized) questions, including tricky ones. Turn on human handoff, and make sure it says it is automated.
- Never pay for a bundle just for this event without the committee agreeing.

### ManyChat

ManyChat can send a DM when someone comments a keyword. Its **free plan** now covers **25 active contacts per month, 2 channels, 4 active automations and 1 inbox seat**. It covers Messenger/Instagram but **not WhatsApp** ([ManyChat Help](https://help.manychat.com/hc/en-us/articles/25800197498652-Free-plan)). The old "1,000 free contacts" claims are out of date. ManyChat also removed Messenger **Message Tags** on 9 February 2026 ([ManyChat update](https://community.manychat.com/product-updates/meta-s-deprecation-of-the-message-tags-feature-on-messenger-9010)). A national campaign may exceed 25 contacts/month quickly; that is a planning risk, not a measured result. **Verdict:** skip it for this campaign.

### Rules that apply to any bot on Messenger

Meta's Messenger policy gives a standard **24-hour window** after a person's message for automated replies. A separate **Human Agent** option allows **manual** replies up to **7 days** after the person's message, but it does not allow automated promotional follow-ups. A Page comment allows **one private reply within seven days**. That reply alone does not open an ongoing sequence: wait for the person to respond, then respect the applicable window. Human Agent is for a human continuing unresolved support, not sales follow-ups ([Messenger policy](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy)). "They liked our post" never means "we can DM them".

### WhatsApp Business Platform (API): not needed now

The API is a different, technical product. From **1 October 2026**, each business number gets **1,000 free service messages per month**. After that, and for marketing templates, Meta charges per message. In Brazil, a **marketing template costs R$ 0,3217** and a utility template R$ 0,0350 at base rates ([Meta pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/)). Providers usually add their own fees. For a zero-budget event, the free app is enough.

## Community management: comments, Groups and difficult moments

### Public comments

- Answer comments with questions **in public** (others have the same doubt), using the short version of the FAQ answer plus the Even3 link.
- If the question is personal (payment, a specific submission), reply publicly with: *"Oi, [nome]! Te chamamos no privado para ajudar."* Send one private reply only within seven days of the comment. For older comments, publicly invite the person to initiate contact. Wait for their reply before continuing.
- Like or thank genuine contributions. A good conversation under a post is the best organic signal you can have.

Public reply example:

```text
Oi, [nome]! As submissões vão até 4/11. Normas, modalidades e inscrição aqui: https://www.even3.com.br/iconafroedu-764690/ 😊 Qualquer dúvida, chama a gente no WhatsApp (19) 98816-7751.
```

### Moderating an anti-racist education page

A page about anti-racist education may receive racist or hostile comments. Agree on a plan **before** it happens:

1. **Hide or delete** comments that are racist, harassing, or expose someone's personal data. Take a screenshot for your records first.
2. **Ban/block** repeat offenders. Report serious cases to Meta.
3. Don't debate trolls in public. One calm, short moderation note is enough when needed (*"Comentários discriminatórios são removidos. Este é um espaço de diálogo respeitoso."*).
4. **Support the person who was targeted**, privately if appropriate.
5. Use Meta's moderation tools (Page *Moderation Assist*, and *Admin Assist* in Groups you manage) carefully. **Never blanket-block words like "negro", "racismo" or "antirracista".** Legitimate scholarship and people sharing their experience use them every day.
6. Keep the final decision on deletions, bans and disputes with a named human moderator.

## The daily inbox routine (2 × 15 minutes)

| When | Who | What |
|---|---|---|
| Morning (15 min) | Inbox owner of the day | Facebook/Instagram inbox + comments + WhatsApp. Answer with quick replies. Tag anything for humans. |
| Evening (15 min) | Same person or backup | Second pass. Make sure nothing waits more than 24 hours. |
| Friday (20 min) | Inbox owner + committee member | Review new question types → update the FAQ → update quick replies. |
| 2–4 Nov, 3–6 Dec | Two people | Extra passes. These are the busiest days. |

> [!TIP]
> Publish your real service hours in the greeting, the WhatsApp profile and the Page "About" section. People are patient when they know when a human will answer.

## When to update the answer bank

| Date | Update |
|---|---|
| As soon as the committee answers | All ⚠️ items: presentation, video, resumo simples, closing time, certificate conditions, access platform |
| **4 Nov cutoff / 5 Nov review** | Audit every answer/context; switch to attendance; `/prazo` and `/comosubmeter` closed; `/inscricao`, `/valores`, `/modalidades`, `/video`, `/prorrogacao` reviewed |
| **5–6 Nov** | Remove package offers at their confirmed sales end; no package purchase reopens submissions |
| **16 Nov** | `/valores` and `/ouvinte` → new tier prices only |
| **25 Nov** | `/datas` → link to the published programme |
| **6 Dec** | `/certificado` → how to download |
| **15 Dec** | `/publicacao` → real proceedings link (never before it exists) |

## Checklist

- [ ] FAQ answer bank pasted into the shared sheet, with version and date
- [ ] Committee reviewed every ⚠️ item (especially presentation, video, certificate)
- [ ] Facebook instant reply + away message tested from a personal account
- [ ] WhatsApp Business profile, greeting, away message and quick replies set up
- [ ] Labels created, including "Não enviar divulgação"
- [ ] Screen-recorded "how to submit" video linked in `/comosubmeter`
- [ ] Human-only topics list shared with every volunteer
- [ ] Moderation plan for racist/hostile comments agreed, with a named moderator
- [ ] Daily inbox owner rota for the next two weeks
- [ ] Update dates (5 Nov, 16 Nov, 25 Nov, 6 Dec) in the calendar

## Next steps

- Write the posts that drive these questions: [Copywriting with AI](copywriting.md)
- WhatsApp Channels, Communities and Status: [Instagram & WhatsApp](instagram-whatsapp.md)
- Simple flows that route questions to the right person: [No-Code Automations](no-code-automation.md)
- Privacy, consent and Meta policies: [Ethics, Policies & LGPD](ethics-legal.md)
- Turn recurring questions into content: [Measuring Results for Free](measuring-results.md)
