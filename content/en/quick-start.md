---
title: "Quick Start: Your First Week"
description: A day-by-day plan for the team's first seven days — free tools set up, a fact sheet and brand voice, the first posts and a first Reel — while the CONAFROEDU call for papers is running.
order: 10
section: start
icon: 🚀
updated: 2026-10-21
---

This page turns the rest of the site into **seven concrete days**. By the end of the week your team will have free AI and design tools set up, one source of truth for the facts, a simple brand kit, the call for papers published and pinned, a first Reel, and a way to answer questions.

**What you'll get from this page:**

- A **day-by-day checklist** (about 60–90 minutes per day, shared across the team).
- Copy-paste prompts for the first posts.
- Two beginner recipes for a **first Reel** in under 30 minutes.
- An end-of-week checklist.

> [!IMPORTANT]
> Your first week **is** the urgent part of the campaign: CONAFROEDU submissions close on **Wednesday, 4 November 2026**. So this week is not just "setup" — the call for papers must be live by Day 4. The full dated plan is in the [CONAFROEDU sprint plan](conafroedu-sprint.md).

## Before you start

You need:

- A computer and a smartphone per person (any recent model).
- A free Google account per person.
- Admin or editor access to the organizing **Facebook Page** — or a decision to create one (see Day 1).
- The organizers' WhatsApp number on a phone the team can use: (19) 98816-7751.
- About **5–7 hours in total** this week across the team.

Days are a **sequence**, not fixed dates. If someone can't work on the weekend, shift the days — but get Day 4 (first posts) done by **Monday 26 October**.

## Day 1 — Team, roles and tools (≈ 90 min)

**Goal:** everyone knows their job and has their tools.

1. **Hold a 45-minute kick-off.** Assign the four roles from the [sprint plan](conafroedu-sprint.md#team-roles): Coordination, Content/Design, Social/Community, Partnerships. Write a name next to each.
2. **Agree on two rules:** (a) no date, price or rule is published unless it's in the fact sheet; (b) a second person checks anything made with AI before it goes out.
3. **Create free accounts** (each person, their own login — never share passwords):
   - [ ] One main AI assistant — we suggest **Claude** or **Gemini** (see [Choosing AI tools](choosing-ai-tools.md)). Optionally a second one to compare.
   - [ ] **Canva Free** for design.
   - [ ] **Meta Business Suite** access via the Facebook Page (each person invited with their own profile).
   - [ ] **WhatsApp Business** app on the organizers' phone (free).
4. **Check the Facebook Page.** Is there an official CONAFROEDU Page? Who are the admins? We couldn't find a verified Page or Event in our research. If none exists, Coordination asks the committee for a decision today; setup steps are in the [Facebook playbook](facebook-playbook.md).
5. **Create a shared folder** (Google Drive or similar) with these subfolders:

```text
CONAFROEDU 2026/
  01-ficha-oficial/
  02-marca/          (logo, colors, voice guide)
  03-artes/          (Canva exports)
  04-textos/         (approved captions)
  05-fotos-autorizadas/
  06-relatorios/     (weekly numbers)
```

6. **Create a content sheet** (Google Sheets) with these columns: *ID, date, time (Brasília), channel, goal, audience, approved text, image/video file, fact-sheet version, reviewer, status, published link, result*. Use the statuses: `ideia → rascunho → revisar → aprovado → agendado → publicado → conferido`.

> [!TIP]
> One shared sheet prevents the classic volunteer problem: the same post published twice, or a post with an old price going out because nobody knew it had been replaced.

## Day 2 — Fact sheet and brand voice (≈ 60 min)

**Goal:** the AI (and the team) stop guessing.

1. **Coordination** copies the [CONAFROEDU context block](prompting-basics.md#the-conafroedu-context-block) into a document named "FICHA OFICIAL — versão 22/10" in folder `01`.
2. Open the [Even3 page](https://www.even3.com.br/iconafroedu-764690/) on a phone and check every line: dates, prices, contact, submission formats. Anything that doesn't match, or that the page leaves unclear, goes on a list.
3. **Send the committee the decision list** from the [sprint plan](conafroedu-sprint.md#decisions-to-confirm-with-the-committee) — top priorities: the **cut-off time on 4 November**, whether **presentation is mandatory**, and the **presenter video** rule. Ask for answers by Tuesday 27 October.
4. **Content/Design** adds the "VOZ DA MARCA" paragraph from [Prompting basics](prompting-basics.md#your-brand-voice-in-one-paragraph) under the fact sheet.
5. **Save the context** in your main assistant: a Claude Project, a Gemini Gem/skill, or a pinned document (see [Save your context](prompting-basics.md#save-your-context-so-you-dont-paste-it-every-time)).
6. Optional but worthwhile (20 min): run the [pt-BR comparison test](choosing-ai-tools.md#test-them-yourself-a-20-minute-pt-br-comparison) in two assistants and pick your main writer.

## Day 3 — Minimum brand kit and the first card (≈ 90 min)

**Goal:** one reusable template and the call-for-papers card.

1. **Collect** the official logo and 3 existing CONAFROEDU graphics into `02-marca`. Write down the colors (hex codes) and fonts — or agree on new ones ([Brand kit](brand-kit.md#part-2--visual-identity)).
2. **Build the feed master** in Canva Free (about 25 minutes):
   1. Create a design → Custom size → **1080 × 1350 px**.
   2. Upload the approved logo and, if you have one, a real consented photo. If not, use solid color and simple shapes.
   3. Add editable text: `CONAFROEDU 2026` · `Desenvolvimento, Participação e Educação Antirracista` · `5 e 6 de dezembro de 2026` · `100% on-line` · `Inscrições e normas na Even3`.
   4. Two text sizes, strong contrast, generous margins.
   5. Name it "MESTRE — Feed — NÃO EDITAR".
3. **Duplicate** it to make the **call-for-papers card**: headline "Chamada de trabalhos", line "Submissões até 4 de novembro", formats as confirmed.
4. **Second person checks** at phone size: *Participação*, *Educação*, *Antirracista*, the date. Then **Share → Download → PNG**.
5. Make a **Story version** (1080 × 1920): on the free plan, create a new design at that size and paste/rearrange the elements.

> [!WARNING]
> Don't ask an AI image tool to write "CONAFROEDU" or the dates inside a picture — it often misspells Portuguese. Keep all text as editable Canva text. Before generating any image with people, read [Representation & bias](representation-bias.md).

## Day 4 — The first posts (≈ 90 min)

**Goal:** the call for papers is live, pinned and supported by an Event and a few scheduled posts.

1. **Draft the caption with AI.** Open your saved project (or paste the fact sheet + voice) and run:

```prompt
Using only the fact sheet and the brand voice above, write a Facebook post in Brazilian Portuguese for the CONAFROEDU 2026 call for papers.
Goal: get teachers, students and researchers to open the submission rules on Even3.
Include: the 4 November deadline; that the congress is on 5 and 6 December, 100% online; the accepted formats as listed in the fact sheet; that publication in the proceedings has a separate fee of R$ 16,98 per work; the Even3 link.
Up to 110 words, one call to action, up to 3 hashtags at the end. Mark anything uncertain as [CONFIRMAR].
Then give me a 40-word version for WhatsApp (no hashtags, link on its own line).
```

2. **Check it** with the [60-second fact check](prompting-basics.md#the-60-second-fact-check). Remove anything marked `[CONFIRMAR]` that the committee hasn't answered.
3. **Publish** on the Facebook Page with the Day 3 card and **pin** it to the top of the Page.
4. **Create one Facebook Event** for the congress (online, 5–6 December, Brasília time, Even3 as the registration link). Steps in [Facebook Events & Groups](facebook-events-groups.md).
5. **Schedule three more posts** for next week in Meta Business Suite (see [Scheduling tools](scheduling-tools.md)): a "how to submit in 5 steps" carousel (Mon 26), the "7 days left" checklist (Wed 28), and a short author Reel (Fri 30). Use the AI to draft each; a person checks each one.
6. **Instagram:** adapt the call for papers (up to 5 hashtags; the link goes in the bio). See [Instagram & WhatsApp](instagram-whatsapp.md).

## Day 5 — Your first Reel (≈ 30–45 min)

**Goal:** one short vertical video. Pick **one** recipe. Both cost R$ 0 if you avoid premium elements.

### Recipe A — a real person's phone invitation (best option)

A real educator speaking for 20 seconds is more credible than any generated video.

1. Ask a confirmed speaker or committee member to record **15–20 seconds** vertically, facing a window, in a quiet room. Suggested script (check it with the fact sheet):

> "O CONAFROEDU 2026 será nos dias 5 e 6 de dezembro, totalmente on-line. Se você tem uma pesquisa ou uma prática de educação antirracista, as submissões vão até 4 de novembro. Confira as normas na Even3."

2. Open **CapCut** (or the editor you know) → New project → import the clip → **9:16**.
3. Trim silence at the start and end. Don't use face-retouching or voice effects.
4. Add captions (auto-captions in Portuguese if available) and **proofread every line**.
5. Add a 3-second end card: `CONAFROEDU 2026 · Submissões até 4/11 · Even3`.
6. Export at **1080 × 1920, 30 fps**, watch once with sound and once muted.

### Recipe B — a three-card animated teaser (no people needed)

1. In Canva, create a **1080 × 1920** video with three pages:
   - "Educação antirracista em diálogo"
   - "CONAFROEDU 2026 · 5 e 6 de dezembro · 100% on-line"
   - "Submissões até 4/11 · Normas na Even3"
2. Use your colors and logo; give each page 5–6 seconds.
3. Add one simple free entrance animation. Keep text still long enough to read.
4. Download as MP4 and check every accent on a phone.

Then schedule the Reel for Friday 30 October in Business Suite, with the Even3 link in the caption. More techniques: [Reels, clips & captions](video-repurposing.md) and [Motion graphics with Claude](motion-graphics-claude.md).

## Day 6 — Set up answers (≈ 60 min)

**Goal:** nobody waits days for a reply.

1. **WhatsApp Business** (free app) on the organizers' phone:
   - [ ] Business profile: organizer name, Even3 link, support hours.
   - [ ] **Greeting** and **away** messages stating when a person will reply.
   - [ ] **Quick replies** (shortcuts a person chooses — not a robot): `/submissao`, `/valores`, `/certificado`, `/acesso`, `/humano`. Only approved facts; for anything not decided yet, "a comissão vai confirmar".
   - [ ] **Labels**: "Dúvida de submissão", "Dúvida de inscrição", "Instituição parceira", "Precisa de resposta humana".
2. **Facebook Page inbox:** turn on an instant reply. Example (adjust the hours):

```text
Olá! Esta é uma resposta automática da organização do CONAFROEDU 2026.
Recebemos sua mensagem. O congresso será 100% on-line, em 5 e 6 de dezembro.
Respondemos de [DIAS], das [HORAS], no horário de Brasília.
Inscrições e normas: https://www.even3.com.br/iconafroedu-764690/
Não envie CPF, dados de pagamento ou documentos por aqui.
```

3. **Social/Community** blocks 15 minutes a day to check comments, Page messages, the Event discussion and WhatsApp.

Details and limits (what's free, what's not, and Meta's messaging rules) are in [Automating replies](replies-inbox.md).

## Day 7 — Partners and the first weekly review (≈ 90 min)

**Goal:** the first personal invitations go out, and the team learns from week one.

1. **Partnerships** builds a shortlist of **10** relevant NEABs/NEABIs, education graduate programs and associations. Start from the ABPN's [CONNEABS directory](https://abpn.org.br/conneabs-2/) and check each institution's own website. You can use Perplexity to find them, but open every link:

```prompt
Find up to 10 NEABs/NEABIs or anti-racist education research groups at Brazilian universities, using institutional websites and the ABPN CONNEABS directory. For each one, show: institution, campus/state, relevant ERER activity, exact URL, date of the source and the published institutional contact. Open the source; don't invent e-mails. Don't send messages or collect personal contacts of members or students. Goal: assess an institutional invitation to share CONAFROEDU 2026 (100% online, 5–6/12/2026); do not assume any partnership or support.
```

2. **Draft five personalized invitations** with AI (ask for Brazilian Portuguese, under 120 words, with a specific and honest connection to the institution's work). A person reviews and sends each from the organizers' e-mail. See [Outreach](outreach.md).
3. **First weekly review (30 min):**
   - [ ] How many submissions and registrations on Even3 since Day 1?
   - [ ] Which questions came in most?
   - [ ] Did the committee answer the decision list? Update the fact sheet.
   - [ ] What's scheduled for next week? Who reviews it?

## End-of-week checklist

- [ ] Four roles assigned, each with a name.
- [ ] Everyone has their own free accounts.
- [ ] Facebook Page confirmed (or created) and admins known.
- [ ] Fact sheet created, checked against Even3, saved in the main assistant.
- [ ] Decision list sent to the committee.
- [ ] Feed and Story masters in Canva.
- [ ] Call for papers published, pinned, and adapted to Instagram and WhatsApp.
- [ ] Facebook Event created.
- [ ] Next week's three posts scheduled.
- [ ] First Reel done and scheduled.
- [ ] WhatsApp Business quick replies and Page instant reply on.
- [ ] Ten partners shortlisted; five invitations sent by a person.
- [ ] First weekly review done.

## Next steps

- Continue with **Week 1** of the [CONAFROEDU sprint plan](conafroedu-sprint.md).
- See the post-by-post calendar in [Campaign timeline](campaign-timeline.md).
- Improve your captions: [Copywriting with AI](copywriting.md).
- Grow on Facebook organically: [Facebook playbook](facebook-playbook.md).
