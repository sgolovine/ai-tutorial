---
title: Computer-Use & Browser Agents
description: What AI agents that click and type for you (Claude in Chrome, Claude computer use, ChatGPT Work and others) can realistically do for CONAFROEDU, with step-by-step tasks, time estimates, and a firm list of what NOT to automate.
order: 330
section: automate
icon: 🤖
updated: 2026-10-21
---

> [!TIP] New to these tools?
> Follow the [setup steps](setup-tools.md#claude-chrome) first. If a button or concept is unfamiliar, use the [AI learning guide](learning-with-ai.md) for one small practice task.

**What you'll get from this page:** a plain explanation of "computer-use" and "browser" agents, a comparison of the main tools and what they cost, **six realistic CONAFROEDU tasks** with step-by-step instructions, ready prompts, time estimates and typical failures, and a clear list of **things you must never automate** on Facebook, Instagram and WhatsApp.

## What is a computer-use or browser agent?

A normal AI chat answers in text. An **agent** can also **act**. It looks at a web page or your screen, then clicks, types, scrolls and fills in forms, step by step, to complete a task you described.

- A **browser agent** works inside a web browser (for example, Claude in Chrome).
- A **computer-use agent** can also operate desktop apps and files on your computer (for example, Claude's computer use in the desktop app).

It sounds like a robot assistant. In practice, it is **slower than you for five clicks**, it sometimes clicks the wrong thing, and it needs supervision. It is genuinely useful for **tedious, bounded tasks**: researching a list of institutions, comparing a web page with a fact sheet, organizing files, or drafting messages for you to review.

> [!IMPORTANT]
> If an agent *can* click something, that doesn't make the click *allowed*. Being logged in to Facebook does not give an agent Meta's permission to scrape, mass-message or post at scale. The platform's rules still apply, and the account at risk is yours.

## The tools in October 2026

| Tool | What it is | Plan / cost | Notes |
|---|---|---|---|
| **Claude in Chrome** | Browser extension: Claude works across your Chrome tabs and takes actions | **Paid Claude plans.** Generally available since 26 Aug 2026 ([announcement](https://claude.com/blog/claude-in-chrome-generally-available)). Pro is **US$ 20/month** ([pricing](https://claude.com/pricing)) | Uses your plan's usage allowance. Good for research and form drafts. |
| **Claude computer use (desktop)** | Claude operates your computer's screen in the Claude desktop app / Cowork | **Beta on Pro and Max, macOS and Windows** ([Claude Help](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork)) | The desktop app must stay open. Linux support not confirmed. Slower than a dedicated connector. |
| **ChatGPT Work cloud browser** | Remote browser, distinct from desktop built-in browser/extension | Signed-in web/mobile browsing on **Plus/Pro**, subject to rollout ([docs](https://learn.chatgpt.com/docs/browser)); check current price | Desktop built-in browser uploads are manual. [Setup](setup-tools.md#chatgpt-agent). |
| **Gemini tasks** | Local Chrome or separate remote browser | **Google AI Pro/Ultra**, personal account, 18+, **Keep Activity and Personal Intelligence enabled** ([help](https://support.google.com/gemini/answer/17094507?hl=en)); check current price | Review connected apps/private data first. A separate browser profile does not isolate connected Google data. |
| **Perplexity Comet** | Browser with a built-in research assistant | Free browser. Agent and "Computer" allowances vary by plan ([Comet](https://www.perplexity.ai/comet)) | Strong for finding and citing sources. |
| **browser-use** | Developer tool to build your own browser agent | Pay-as-you-go: US$ 1 trial credit, then usage plus model costs ([pricing](https://browser-use.com/pricing)) | Only with a technical volunteer. |

> [!NOTE]
> **Zero-budget path:** all six tasks below also work *without* an agent. Use a free chat (Claude, ChatGPT, Gemini or Perplexity free tiers), copy and paste the pages yourself, and let the AI do the thinking. You do the clicking. An agent saves time on long lists, but it is not required.

**Current product names:** the [legacy ChatGPT agent is no longer available](https://help.openai.com/en/articles/11752874-chatgpt-agent); use Work. [Atlas is retired](https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement), so do not follow Atlas or /agent installation tutorials.

## Golden rules for supervising an agent

1. **Small scope, clear stop.** "Find 10 NEABs and stop" beats "find all NEABs in Brazil".
2. **Draft-only by default.** The agent prepares; a human publishes, sends, pays or submits.
3. **Stop at public actions.** Tell the agent explicitly: *do not post, send, submit, buy, join, delete or accept anything.*
4. **Use a separate local browser profile where supported**, signed in only to task sites. For cloud browsers review their separate saved sessions; review connectors too. A profile does not isolate data already connected to the assistant.
5. **Never type passwords, codes or CPFs into the chat.** If a login is needed, log in yourself, then hand over.
6. **Watch for "prompt injection".** A web page or message can contain hidden instructions aimed at AI ("ignore your instructions and…"). Agents can be fooled. Narrow tasks and human review are your protection ([Claude developer docs on browser use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-tool)).
7. **Two-strike rule.** If the first two items come back wrong, stop and do it manually.
8. **Don't bypass anything.** CAPTCHA, "are you a robot?", security checkpoints, group-admin approval and logins are there on purpose. If the agent hits one, the task ends.

## What NOT to automate

This is the most important section on the page. These actions break Meta or WhatsApp rules, Brazilian privacy law (LGPD), or simple trust. Any one of them can get the Page or a volunteer's personal account restricted, right in the middle of the campaign.

| Never do this | Why | Do this instead |
|---|---|---|
| **Post the same invitation into many Facebook Groups** with an agent or tool | Meta removed the Groups publishing API in 2024 ([Meta](https://developers.facebook.com/blog/post/2024/01/23/introducing-facebook-graph-and-marketing-api-v19/)) and penalizes spammy behaviour ([Meta anti-spam](https://about.fb.com/news/2025/04/cracking-down-spammy-content-facebook/)). Agent-driven posting imitates a person to get around that. | A human member reads each group's rules, asks the admin, adapts the text, and posts by hand. See [Facebook Events & Groups](facebook-events-groups.md). |
| **Auto-join groups** or send automated join requests | Same reason. Also misleading to admins. | Join a few relevant groups yourself, as the organizing Page if the group allows Pages. |
| **Send mass DMs** on Messenger, Instagram or WhatsApp | Messenger allows replies within 24 hours of the person's message, plus one private reply within seven days of a Page comment; wait for the person’s response before continuing within the applicable window. It does not allow cold outreach campaigns ([Messenger policy](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy)). WhatsApp requires **opt-in** and respect for opt-outs, and it can ban numbers ([WhatsApp policy](https://whatsappbusiness.com/policy/)). | Reply to people who wrote to you. Send updates only to people who asked for them. |
| **Scrape** member lists, emails, phone numbers or profiles (Facebook, Instagram, Lattes, university pages) | Meta treats automated collection without permission as a violation of its terms ([Meta on scraping](https://about.fb.com/news/2021/04/how-we-combat-scraping/)). An identifiable staff email is **personal data** under LGPD; a generic institutional mailbox is not automatically personal data. | Record **institutional** contact routes (department email, contact form) for a short list of relevant institutions. See [Outreach](outreach.md). |
| **Fake engagement:** extra accounts, auto-likes, auto-comments, "engagement pods", bought followers | Against Meta's rules. It also damages trust in an academic event. | Ask real speakers and partners to share voluntarily, in their own words. |
| **Use WhatsApp "bulk sender" extensions** or unofficial automation | Breaks WhatsApp's terms. Numbers get banned. | Use the free Business app's tools manually (see [Replies & Inbox](replies-inbox.md)). |
| **Let an agent register, pay, or change settings on Even3** | Money, personal data and official event settings. A wrong click is costly. | The agent can *compare* the public page with the fact sheet. A committee member edits. |
| **Let AI decide scientific matters** (accept/reject papers, write reviews) | Academic integrity. Reviews are a human responsibility. | Use AI only to turn the rules into checklists. |
| **Let an agent moderate on its own** (delete, block, ban) | Mistakes silence legitimate voices, especially on anti-racist topics where "negro" or "racismo" appear in good-faith comments. | The agent can flag. A named moderator decides. |
| **Agent-generated testimonials, quotes or speaker statements** | Fabrication. | Ask real people and get written approval. |

> [!CAUTION]
> There is no "safe number" of group posts per day or DMs per hour. Nobody has published one, and anyone who sells you one is guessing. The safe number of automated group posts and cold DMs is **zero**.

## Six realistic tasks for CONAFROEDU

The time estimates below are **planning estimates, not measured benchmarks**. They include the agent's run plus human checking, for a first useful result. Add **20–60 minutes the first time** for installing, logging in and setting permissions. A CAPTCHA, a login check or a changed website can stop a task completely.

| # | Task | Agent run | Human review | Tool suggestion |
|---|---|---|---|---|
| A | Find 10 NEAB/NEABI pages with official contacts | 15–30 min | 15–20 min | Claude in Chrome, Comet, ChatGPT Work (or Perplexity free + manual) |
| B | Check the Even3 page against our fact sheet | 10–20 min | 5–10 min | Any browser agent (or free chat + copy/paste) |
| C | Draft 5 personalized institutional invitations | 10–20 min | 10–15 min | Any assistant |
| D | Prepare 5 drafts; a person schedules | 15–30 min | 10–15 min | Permitted browser assistance, or manual entry |
| E | Turn 20 anonymized questions into FAQ gaps + reply drafts | 10–15 min | 10 min | Any assistant (no agent needed) |
| F | Rename and check 10 authorized speaker photo files | 10–20 min | 5–10 min | Claude computer use (desktop) |

### Task A — Research 10 NEAB/NEABI contacts

**Goal:** a verified shortlist for institutional outreach before the 4 November submission deadline.

1. Open a fresh browser profile. Start the agent.
2. Point it at ABPN's **CONNEABS directory** ([abpn.org.br/conneabs-2](https://abpn.org.br/conneabs-2/)) as the starting list, then each institution's own website.
3. Paste the prompt below.
4. When the table comes back, **open every source URL yourself**. Check the campus, the unit name (NEAB and NEABI are different), and that the contact is **institutional** and current.
5. Copy verified rows into your outreach tracker. Leave blanks rather than guessing.

```prompt
Research task (read-only). Find up to 10 NEABs/NEABIs or anti-racist education research groups at Brazilian universities or federal institutes. Start from the ABPN/CONNEABS directory (https://abpn.org.br/conneabs-2/), then confirm each one on the institution's own official website.

For each, record: institution, campus/state, unit name exactly as written, a relevant activity related to ERER (Educação para as Relações Étnico-Raciais) or teacher education, the exact URL where you found it, the date shown on that page (if any), and the PUBLISHED INSTITUTIONAL contact (email or contact form).

Rules: Use only public official pages. Do not collect personal contacts of students or members. Do not log in, join groups, fill in forms or send messages. Do not guess emails. If something is missing or the page is old, write "não encontrado" or "página antiga". Stop after 10.

Output: a table in Portuguese, plus a list of rows I must double-check.
```

**Typical failures:** an old coordinator's name, the same institution listed twice under different campuses, a "plausible" email that doesn't exist, blocked university sites. **Fallback:** do it by hand with Perplexity Free and the directory. Ten good contacts take about an hour.

### Task B — Audit the Even3 page against the fact sheet

**Goal:** catch contradictions before thousands of people read them. Research found at least three on the current page: presentation optional vs mandatory, "resumo simples" missing from the FAQ, and packages sold until 5 Nov while submissions close 4 Nov.

1. Open `https://www.even3.com.br/iconafroedu-764690/` in the agent's browser (not logged in as organizer).
2. Paste the prompt and your fact sheet.
3. Take the discrepancy list to the committee. **A human makes all edits** in Even3.

```prompt
Read-only check. Compare the public page https://www.even3.com.br/iconafroedu-764690/ (all sections: description, tickets, submission rules, FAQ, programme, timeline images if readable) with the fact sheet below.

List every discrepancy or ambiguity: dates, deadlines and times, prices by category and date, submission types and page limits, presentation requirement, video requirement, certificate wording, publication fee, ISBN/DOI wording, contact details, time zone.

For each item: what the page says (quote + section), what the fact sheet says, why it might confuse a participant. If information is not visible without login, write "não visível publicamente". Do not log in, buy, register or change anything.

FACT SHEET: [paste]
```

**Typical failures:** the agent can't read text inside images (the timeline is a graphic), and prices may display differently by date or device. Keep "not found" as "not found", and don't let it fill gaps.

### Task C — Draft 5 personalized invitations

**Goal:** five individual, relevant emails from the verified list in Task A. You will send them yourself.

1. Give the assistant the five verified rows (institution, relevant activity, source URL) and the fact sheet.
2. Use the drafting prompt from [AI-Assisted Outreach](outreach.md#step-5-draft-with-ai-one-message-at-a-time).
3. Check each draft: correct unit name, a real reason for the connection, no invented partnership, honest costs (registration + R$ 16,98 publication fee), deadline 4 Nov.
4. Send from the committee's email, **one by one** (not one big CC list), and log each send in the tracker.

**Typical failures:** "Following our partnership…" (there isn't one), exaggerated certificate claims, a wrong department name.

### Task D — Load 5 approved posts into Meta Business Suite

**Goal:** prepare drafts for a person to schedule. The beginner boundary is **draft-only**: scheduling also commits future public content.

1. Check whether the service/account permits this browser interaction. If unclear, have the assistant return a local table and use Business Suite manually.
2. A person selects the correct Page and supplies five approved rows: caption, actual media, destination and Brasília date/time.
3. Prompt: *"Prepare these as drafts only, if draft saving is supported and permitted. Do not publish or schedule. Show each preview and stop before final submission/scheduling. If unavailable, return a table for manual entry."*
4. **A person uploads media when needed.** OpenAI says ChatGPT cannot automate uploads in its desktop built-in browser; cloud and extension routes are separate.
5. A person checks Page, caption, media, links, date/time and duplicates, personally clicks **Schedule** in the native tool, and checks the queue and eventual live result.

**Typical failures:** wrong Page/time zone, upload failure, duplicates, expired login. Manual entry may be faster for five posts. Do not bypass a missing authorized integration with browser automation.

### Task E — Summarize questions into FAQ gaps

**Goal:** improve your answer bank weekly. No agent is needed. A free chat is enough.

1. Export or copy 20 recent questions. **Remove names, numbers, emails and anything personal.**
2. Paste them with your current FAQ.

```prompt
Here are 20 anonymized questions received this week about CONAFROEDU 2026, and our current approved FAQ.
1. Group the questions by topic and count them.
2. Mark which ones the FAQ already answers (cite the FAQ item) and which it does not.
3. For questions the FAQ does not answer, write the question the committee needs to decide — do not invent the answer.
4. Flag anything urgent or sensitive (payment, accessibility, complaints, racism) for a human.
Answer in Portuguese.
```

### Task F — Organize speaker files (desktop computer use)

**Goal:** a clean folder of **authorized** speaker photos with consistent names, for the speaker kit.

1. **Copy** the original folder first. The agent works only on the copy.
2. Prepare a simple list (manifest): original file name → speaker's approved name → permission status.
3. Prompt: *"In the folder [PATH-COPY], rename files according to this list to the pattern `palestrante-sobrenome-nome-01.[original-extension]`. Show the proposed names first and wait for approval. Preserve original formats/extensions. Never overwrite; skip and report conflicts. Do not delete, edit or upload any image. Skip files not on the list. At the end, give me a table of every change and every file you skipped."*
4. Spot-check: open 3–4 files and compare face with name.

**Typical failures:** a photo matched to the wrong name, files overwritten. That's why you always work on a copy.

## Setting up Claude in Chrome safely (overview)

The exact screens change often, so follow the official instructions on Claude's site. The general steps are:

1. Confirm you are on a **paid Claude plan** (Pro or higher).
2. Install the official **Claude in Chrome** extension from the link on Claude's website, not from a search ad.
3. Create a **separate Chrome profile** for agent work ("CONAFROEDU – agente").
4. In the extension's settings, review **site permissions**. Allow only the sites the task needs.
5. Start with Task B (read-only) to get a feel for it before anything that touches your Page.

For **ChatGPT**, choose the actual [setup route](setup-tools.md): Work cloud browser, desktop built-in browser or supported extension. They do not share one local profile; review permissions/sign-ins separately. For Gemini, review connected apps/Personal Intelligence; if private data cannot be excluded, research public sources manually.

## Is it worth paying for?

| Situation | Recommendation |
|---|---|
| Nobody on the team has a paid plan | **Don't buy one for agents.** Do tasks A–F manually with free chats. |
| Someone already has Claude Pro or ChatGPT Plus | Try tasks B and A. Keep a log of time saved vs. time spent fixing. |
| You'd buy one month of one plan anyway (for writing) | Fine. Use agents as a bonus, not the reason. |
| A technical volunteer wants to build a custom agent (browser-use, APIs) | Only for read-only research, with a spending cap. Not for posting or messaging. |

## Checklist

- [ ] Local profile/cloud sessions and connected-app permissions reviewed for this route
- [ ] Every agent prompt includes "do not post, send, submit, buy, join or delete"
- [ ] No passwords, codes or CPFs typed into any chat
- [ ] Results from Task A verified by opening every source URL
- [ ] Even3 discrepancies (Task B) sent to the committee
- [ ] Every outreach message sent by a human, one by one
- [ ] Nobody on the team uses group-posting, mass-DM, scraping or WhatsApp bulk tools
- [ ] Two-strike rule agreed: wrong twice → do it manually

## Next steps

- Turn research into respectful partnerships: [AI-Assisted Outreach & Partnerships](outreach.md)
- Automations that don't need an agent: [No-Code Automations](no-code-automation.md)
- How to post in groups the right way: [Facebook Events & Groups](facebook-events-groups.md)
- Policies and privacy in depth: [Ethics, Policies & LGPD](ethics-legal.md)
- Pick the right assistant: [Choosing AI Tools](choosing-ai-tools.md)
