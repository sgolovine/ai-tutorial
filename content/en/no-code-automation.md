---
title: No-Code Automations (n8n, Make, Zapier)
description: Five concrete, free-tier automations for CONAFROEDU, from opt-in forms to AI-drafted replies, each with a text diagram, step list and safety rules, built on the "AI drafts, human approves" pattern.
order: 340
section: automate
icon: ⚙️
updated: 2026-10-21
---

> [!TIP] New to these tools?
> Follow the [setup steps](setup-tools.md#ai-studio) first. If a button or concept is unfamiliar, use the [AI learning guide](learning-with-ai.md) for one small practice task.

**What you'll get from this page:** a beginner-friendly introduction to no-code automation tools (Zapier, Make, n8n), what their free tiers really include, and **five recipes to configure and test** for CONAFROEDU. Each flow comes with a simple diagram, numbered steps, a "zero-tool" alternative, and the guardrails that stop an automation from embarrassing you. Every flow follows one pattern: **AI drafts, a human approves.**

> [!IMPORTANT]
> Automate a task only after you've done it by hand a few times and know exactly what "correct" looks like. With six weeks left, a shared spreadsheet and two daily 15-minute inbox passes beat a half-finished automation. Build at most **one or two** flows below, and only if a volunteer enjoys this kind of work.

## Key words in plain language

| Word | Meaning |
|---|---|
| **Automation / workflow** | A set of steps a tool runs for you: "when X happens, do Y". Zapier calls it a *Zap*, Make a *scenario*, n8n a *workflow*. |
| **Trigger** | The event that starts it: a new form response, a new row in a sheet, a time of day. |
| **Action** | What the tool then does: send an email, add a row, create a calendar event. |
| **Connector / integration** | The ready-made link between the automation tool and another app (Google Sheets, Gmail…). |
| **API key** | A password-like code that lets a tool use a service (for example an AI model) on your behalf. Usually **billed separately**. |
| **Webhook** | A web address that an app calls instantly when something happens, a "doorbell" for automations. |
| **Task / credit / execution** | How each tool counts usage for billing. They are *not* the same unit across tools. |

## Free tiers: what you actually get (checked 21 Oct 2026)

| Tool | Free option | Paid entry | Watch out for |
|---|---|---|---|
| **Zapier** | **100 tasks/month**, **two-step Zaps** (one trigger + one action), unlimited Zaps ([pricing](https://zapier.com/pricing)) | Professional from about **US$ 19,99/month** (annual view) | Multi-step flows (AI → approval → send) usually need a paid plan. |
| **Make** | **1,000 credits/month**, **max 2 active scenarios**. Free also has small data/file limits (around 5 MB per file) ([pricing](https://www.make.com/en/pricing), [Make Academy](https://academy-content.make.com/courses/make-foundation-operations-credits/01-introduction-to-operations-and-credits/)) | Core about **US$ 12/month** for 10,000 credits | Most steps cost 1 credit, but AI steps can cost more. Not suitable for moving video files. Check the minimum scheduling interval in your account. |
| **n8n** | **Free if you host it yourself** (Community edition, "Sustainable Use License", fine for your own internal use) ([license FAQ](https://support.n8n.io/article/can-i-use-your-license-for-my-use-case)) | n8n Cloud Starter about **€ 20/month** (annual billing), 2,500 executions ([pricing](https://n8n.io/pricing/)) | Self-hosting means someone handles the server, updates, backups and security. There is no permanent free cloud plan. |

> [!WARNING]
> **A chat subscription does not automatically include API use.** OpenAI and Anthropic APIs normally need separate billing. The [Gemini API has a Free tier for eligible models](https://ai.google.dev/gemini-api/docs/billing); check limits and data handling. Keep participant data out of this drafting flow.
>
> [Make counts each polling check](https://help.make.com/operations), even without new rows. [Zapier triggers/polls and failed actions do not consume tasks](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier); successful actions, including repeated successful replay steps, can count. Check n8n's execution rules separately.

**Simple rule for CONAFROEDU:** use **Zapier Free** for one simple two-step notification, or **Make Free** if you need a few more steps. Use n8n only if a technical volunteer already runs it.

## The core pattern: AI drafts, human approves

Every flow on this page uses the same safety pattern. The automation prepares the work, a person decides, and only then does anything leave the building.

```text
 [Trigger]  →  [Collect + clean data]  →  [AI drafts]  →  [Sheet: "needs review"]
                                                                   │
                                                          Human reads & edits
                                                                   │
                                     ┌──────── approved ───────────┴──── rejected ──┐
                                     ▼                                             ▼
                          Human sends / schedules                         Note why; improve FAQ
                                     │
                          Log: sent / date / by whom
```

| Stage | Who | Rule |
|---|---|---|
| Collect | Automation | Only the minimum data needed. No CPF, no payment data. |
| Draft | AI | Only from the approved fact sheet/FAQ. Mark gaps `[CONFIRMAR]`. |
| Review | Human | Check facts, tone and appropriateness. |
| Send/publish | Human (or a native scheduler after approval) | Nothing goes to the public or to a participant without a named approver. |
| Log | Automation or human | Record what was sent, when and by whom. |

## Flow 1 — Opt-in "keep me updated" form → team alert

**Problem it solves:** people ask "can you let me know when the programme is out?" You need their **permission** recorded, and a person needs to follow up.

```text
Google Form (required affirmative consent; one selected channel)
        │  new response
        ▼
Google Sheet "Avisos – opt-in"   ←── stores answer + consent text + date/time
        │  new row (Zapier trigger)
        ▼
Email to the committee inbox: "New opt-in: [first name], channel: [WhatsApp/email]"
        │
        ▼
Human checks consent, selected channel and suppression record before enrollment
```

**Zero-tool version:** Google Forms can email you when new responses arrive (in the Responses tab). For a small event, that may be enough. You don't need Zapier at all.

**Build it with Zapier Free (about 30 minutes):**

1. Use this form **only for subscribing**. Ask for first name, one preferred channel and its contact. Add one initially unchecked affirmative consent option and enable **Required** ([Google Forms help](https://support.google.com/docs/answer/2839737?hl=en)). Name the controller/contact and privacy notice; state purpose, frequency, end date and opt-out. Do not bundle channels.
2. In the form's **Responses** tab, link it to a new Google Sheet.
3. In Zapier, click **Create → Zap**.
4. **Trigger:** Google Sheets → *New Spreadsheet Row*. Connect the committee's Google account, then choose the spreadsheet and worksheet. Click **Test**.
5. **Action:** Gmail → *Send Email* to the committee. Include row ID, selected channel, consent answer, consent-text version and date. Call it a **subscription request**. A human checks the restricted sheet and suppression record before enrollment.
6. **Test before publishing:** affirmative consent reaches the alert; an unchecked option must block form submission and never enroll a contact. Test the chosen channel and a suppressed contact. If non-subscribers can also submit, use a separately verified consent filter before enrollment; that is a different workflow.
7. One successful email action uses one task per new row. Budget tests too; 100 tasks/month may suffice for a small list.

**Alternative sender limit:** Email by Zapier’s action is **Send Outbound Email**, limited to **5 emails/day on Free/Trial** ([official integration](https://zapier.com/apps/email/integrations)). Do not confuse this with the monthly 100-task quota. If that cap or Gmail connection access blocks you, use Google Forms’ native alerts and the sheet; do not buy a plan just for alerts.

Consent text (adapt and have the committee approve):

```text
[ ] Quero receber pelo [WhatsApp/e-mail] avisos sobre o CONAFROEDU 2026 (programação, prazos e orientações de acesso) até 6 de dezembro de 2026, no máximo [2] mensagens por semana. Posso cancelar a qualquer momento respondendo SAIR. Responsável: Comissão Organizadora do CONAFROEDU – conapsuporte@gmail.com.
```

> [!TIP]
> Keep the consent text, the date and the form version in the sheet. If someone later asks "why did I get this?", you can show exactly what they agreed to. This is good practice under the LGPD (Brazil's data protection law).

## Flow 2 — Question log → AI draft reply → human approval

**Problem it solves:** the same unusual questions arrive by email and WhatsApp, and drafting good answers takes time.

```text
Volunteer pastes question (personal data removed) into Sheet "Perguntas"
        │  new row (Make: Watch New Rows)
        ▼
AI module drafts a reply using ONLY the approved FAQ text
        │
        ▼
Sheet updated: column "Rascunho" + status "needs review"
        │
        ▼
Human checks → edits → sends from WhatsApp/email → marks "sent"
```

**Zero-tool version:** paste the question into a free AI chat with the prompt from [Replies & Inbox](replies-inbox.md#layer-3-ai-drafts-a-human-approves). For fewer than ~20 questions a day, this is faster than building the flow.

**Build it with Make Free (about 1–2 hours, needs an AI API key):**

1. Create a Google Sheet "Perguntas" with columns: `ID`, `Data`, `Canal`, `Pergunta (sem dados pessoais)`, `Categoria`, `Rascunho`, `Status`, `Respondido por`.
2. In Make, **Create a new scenario**.
3. Add **Google Sheets → Watch New Rows**. Connect the account, then choose the sheet and the start point ("from now on").
4. Add the chosen AI provider module and its API key; enable billing **where required**. For Gemini, select an eligible Free-tier model and check data terms. Make credits still apply.
5. In the prompt field, paste the approved FAQ text and the drafting rules (below), then map the "Pergunta" column into it.
6. Add **Google Sheets → Update a Row**. Map the **Row number** from the trigger to update that same row; write the AI output into `Rascunho` and set `Status` = `needs review`. Test two different questions to ensure neither overwrites the other.
7. Start with **four checks a day**: about **120 trigger credits per 30 days**, plus AI and update credits per question. Every 15 minutes means 2,880 checks in 30 days, exceeding the 1,000-credit allowance before processing questions. Check actual credit use.
8. Run once with a test row. Check the credits used in Make's history.
9. Turn it on. **Never add a "send message" step.** A human sends.

```prompt
You draft replies for the CONAFROEDU 2026 organizing committee. Write in natural Brazilian Portuguese, max 90 words.
Use ONLY the approved FAQ below. If the FAQ does not answer, or marks [CONFIRMAR], write: "PRECISA DE DECISÃO DA COMISSÃO: " followed by the open question.
If the question involves payment, refund, an existing registration, review results, accessibility, a complaint or racism, write only: "ENCAMINHAR PARA HUMANO".
Never invent dates, prices, extensions, certificate conditions, accessibility services or MEC/Qualis recognition.
APPROVED FAQ (version/date): [paste]
QUESTION: {{Pergunta}}
```

## Flow 3 — Approved Group post → calendar reminder for a human

**Problem it solves:** posts in other people's Facebook Groups **must** be made by hand (this workflow uses manual posting in other people’s groups; native scheduling remains available in groups you manage). Volunteers forget.

```text
Content sheet tab "Lembretes – grupos" (one row per approved group post)
        │  new row (Zapier trigger)
        ▼
Google Calendar event for the volunteer at the agreed date/time
  title: "Postar no grupo [NOME]" · description: approved text + group link + rules note
        │
        ▼
Volunteer posts by hand → pastes the post link back into the sheet
```

**Build it with Zapier Free:**

1. In your content sheet, create a tab **Lembretes – grupos** with: `Grupo`, `Link do grupo`, `Regras/observação`, `Texto aprovado`, `Data`, `Hora (Brasília)`, `Responsável (e-mail)`.
2. Only add a row **after** the group admin has allowed the post and the text is approved.
3. Zapier → **Create Zap**. Trigger: **Google Sheets → New Spreadsheet Row** on that tab.
4. Action: **Google Calendar → Create Detailed Event**. Use the date/time columns, title `Postar no grupo {{Grupo}}`, the description with text, link and rules, and the volunteer's email as attendee.
5. Test with one row, then publish.

For calendar mapping, add explicit **Start_BRT** and **End_BRT** values in the sheet (e.g. `2026-10-28T19:00:00-03:00` and `2026-10-28T19:15:00-03:00`). Map both fields, select the committee calendar, and verify its displayed Brasília date/time after a test. This avoids relying on ambiguous day/month parsing or another paid formatting step. Keep a unique row ID and check for an existing reminder before replaying a successful run.

**Zero-tool version:** create the calendar events by hand. For 5–10 group posts in the whole campaign, that takes ten minutes.

> [!CAUTION]
> This flow creates a **reminder for a person**. Never replace the human step with a browser agent or a "group poster" tool. See [what NOT to automate](computer-use-agents.md#what-not-to-automate).

## Flow 4 — Trusted education news → post ideas for review

**Problem it solves:** you want useful, timely content (for example, around 20 November or new ERER policy news), not just "buy a ticket".

```text
RSS feeds from a SHORT allowlist of official/institutional sources
        │  new item (Make: RSS → Watch RSS feed items)
        ▼
Skip duplicates (same link already in sheet)
        │
        ▼
(Optional AI) 2-sentence summary in pt-BR + why it matters to teachers + source link/date
        │
        ▼
Sheet "Ideias de pauta" with status "needs review"
        │
        ▼
Human opens the ORIGINAL article, checks rights & relevance → idea enters the calendar
```

**Steps (Make Free):**

1. Choose **one** trusted institution with a working RSS feed, verified on its own site.
2. Make → new scenario → **RSS → Watch RSS feed items** as the sole trigger. [A trigger must be first and can appear only once](https://help.make.com/types-of-modules); a router branches incoming data and cannot merge independent Watch triggers.
3. Beginner version: **Google Sheets → Add a Row** with title, original URL, date and `needs review`. Keep AI summaries optional and manual.
4. Once or twice daily, a person checks for already listed URLs, marks repeated rows `duplicate` and approves only one copy. This avoids relying on an untested search/no-match branch.
5. Test a new URL, a repeated URL and an empty feed. No empty rows or duplicate calendar entries should appear. For automated de-duplication, ask a technical volunteer to configure and test empty-search continuation first.

**Rules:** read the original before posting; link and comment instead of reproducing articles. Discard uncheckable summaries. This one feed uses one active scenario; Flow 2 plus Flow 4 uses both Make Free slots. Each additional independent Watch feed needs another scenario. Respect the two-slot and credit limits.

## Flow 5 — Weekly results report (human-in-the-loop)

**Problem it solves:** the Monday review takes too long, and nobody remembers what worked.

```text
Monday: export last week's Page/Instagram insights (CSV) + Even3 aggregate report
        │  (manual download — no personal data)
        ▼
Upload the AGGREGATED numbers to an AI assistant with the prompt below
        │
        ▼
Draft summary: what was published, link clicks, questions received, registrations trend
        │
        ▼
Team decides 1–2 changes for next week (humans decide; AI only describes)
```

No automation tool is needed. It's a 20-minute ritual. A technical volunteer *could* automate the exports with n8n, but for six weeks that isn't worth it.

```prompt
Here are last week's aggregated numbers for CONAFROEDU 2026: Facebook/Instagram post metrics (CSV) and the count of confirmed registrations and submissions per day (no personal data).
1. List each post with its objective, reach, link clicks and shares.
2. Describe patterns carefully, mentioning sample sizes. Do not claim that a post "caused" registrations.
3. Suggest 2 small tests for next week, consistent with our calendar.
Answer in Portuguese, in a short table plus 5 bullet points.
```

Never upload Even3 exports with names, emails or CPFs into an AI tool. Use counts. See [Measuring Results for Free](measuring-results.md).

## What about connecting Even3 directly?

Even3's help centre lists integrations, including APIs and webhooks ([Even3 integrations](https://ajuda.even3.com.br/hc/pt-br/sections/4404413740955-Integra%C3%A7%C3%B5es)). We could **not** confirm which ones are available on CONAFROEDU's account. For now:

- **Confirmation emails and receipts:** Even3 already handles these. Don't duplicate them.
- **Messages to registrants:** use Even3's own "notify people" feature for service messages ([Even3 help](https://ajuda.even3.com.br/hc/pt-br/articles/115003452963-Notificar-pessoas-pela-plataforma)). Scheduled sending must be enabled by Even3 support.
- **Never** add registrants to WhatsApp marketing lists just because they bought a ticket. Buying a ticket is not consent to marketing.

If a technical volunteer wants to try a webhook flow ("new paid registration → thank-you draft"), it must: check the payment is confirmed; de-duplicate by order ID so nobody gets two messages; keep a human approving the first runs; and send only through an existing permitted channel.

## Safety must-haves for any automation

- [ ] **Approval boundary:** nothing public or personal is sent without a named human approving it.
- [ ] **Duplicate key:** each item has an ID, checked before any outward action; Flow 4 uses human duplicate review.
- [ ] **Stop switch:** everyone knows how to turn the scenario/Zap off (and who is allowed to).
- [ ] **Owner:** one named person checks the run history twice a week.
- [ ] **Quota alerts:** check usage (tasks/credits) weekly. Free tiers just stop when they run out.
- [ ] **Visible errors:** failed runs go to an email someone reads.
- [ ] **Credentials safe:** API keys live in the tool's connection settings, never in a prompt, a sheet cell or a group chat.
- [ ] **Test with your own accounts first**, then a tiny real batch.
- [ ] **Minimum data:** no CPF, no payment data, no health/accessibility details, no student data.
- [ ] **LGPD check:** Zapier, Make and AI providers process data abroad. Read their terms before putting contact lists in them, and keep lists small and purposeful. See [Ethics, Policies & LGPD](ethics-legal.md).

## Which flow should you build first?

| If your biggest pain is… | Build | Tool |
|---|---|---|
| People ask to be notified and you lose track | Flow 1 | Google Forms alone, or Zapier Free |
| Drafting answers to unusual questions | Flow 2 (or just the prompt) | Make Free + API key |
| Volunteers forget manual group posts | Flow 3 | Zapier Free, or calendar by hand |
| Running out of useful content ideas | Flow 4 | Make Free |
| The weekly review never happens | Flow 5 | No tool, just a ritual + AI chat |

## Next steps

- The inbox routine these flows support: [Automating Replies & Community Management](replies-inbox.md)
- The publishing side: [Scheduling & Publishing Tools](scheduling-tools.md)
- Agents that click for you (and their limits): [Computer-Use & Browser Agents](computer-use-agents.md)
- Outreach tracking and follow-ups: [AI-Assisted Outreach & Partnerships](outreach.md)
- All prompts in one place: [Prompt Library](prompt-library.md)
