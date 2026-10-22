---
title: Measuring Results for Free
description: Track what actually brings submissions and registrations to CONAFROEDU 2026 with Meta's free insights, a ready UTM naming scheme, Even3 reports and a 30-minute weekly review, plus safe ways to let AI read the numbers.
order: 420
section: extras
icon: 📊
updated: 2026-10-21
---

**What you'll get from this page:** a measurement setup that costs R$ 0 and fits a volunteer team. You'll learn which numbers matter for **paper submissions** and which for **registrations**, how to read Meta Business Suite and the Professional Dashboard, and a ready-made **UTM link scheme** for CONAFROEDU. You'll also learn what Even3 can tell you, how to run a 30-minute weekly review in a spreadsheet, and how to use AI on your data without exposing anyone's personal information.

> [!NOTE]
> Measuring doesn't mean becoming a data analyst. For a six-week campaign, the goal is simple: **find out what brings people to Even3, do more of that, and stop doing what takes hours and brings nobody.**

## What to measure: two funnels, one real outcome each

A **funnel** is the path a person takes from first hearing about the congress to doing the thing you want. CONAFROEDU has two different funnels with different deadlines. Mixing them up is the most common measurement mistake.

| | Submission funnel (authors) | Registration funnel (attendees) |
|---|---|---|
| **Path** | Sees the call → reads the rules → registers (required for the responsible author) → submits → review → corrections → presentation/publication | Sees a post → checks program and conditions → registers and pays on Even3 → receives access → attends |
| **Deadline** | **4 Nov 2026** (unless the committee formally extends it) | Registration runs until **6 Dec**; price tier changes **16 Nov** |
| **The outcome that matters** | Completed, eligible submissions (by modality) | Confirmed registrations (by category), then actual attendance |
| **Useful intermediate signals** | Visits to the rules page from tagged links, author questions received | Tagged visits to Even3, questions about price/certificate/access |
| **Signals that can fool you** | Likes on the call poster | Views, likes, Facebook Event "Interested/Going" |

> [!WARNING]
> **Don't add the two funnels together.** One person can be an author *and* an attendee. And a ticket that "includes one submission" is not a submitted paper. Count submitted works from the submissions report, not from ticket sales.

After 4 November, the submission funnel closes. From then on, track **review results, corrections and presenter readiness** privately, and put all public measurement effort into registrations and attendance.

## Your free measurement stack

| Tool | What it tells you | Cost |
|---|---|---|
| **Meta Business Suite** (web + app) | Views, interactions and follows for Facebook and Instagram; per-post results | Free app ([App Store listing](https://apps.apple.com/br/app/meta-business-suite/id514643583)); optional paid Meta features exist but aren't needed |
| **Professional Dashboard** (Painel profissional) | Post and Reel performance, video retention where available | Free; available fields vary by account |
| **Even3 reports and exports** | Confirmed registrations, sales by category and date, submissions, certificates | Included with the event |
| **Even3 Analytics** | Visits, registrations and traffic origin from tagged links (as described in Even3's own guide) | Included; check what your event's panel shows |
| **UTM links** | Which post, partner or person sent each visit | Free: they're just text added to the link |
| **A shared spreadsheet** (Google Sheets or similar) | Your link register, post log and weekly scorecard | Free |
| **Google Analytics 4** (optional) | Detailed site traffic, if configured in Even3 | Free tool ([Google](https://marketingplatform.google.com/about/analytics/)), but takes setup time and requires cookie/privacy care (see [ethics-legal](ethics-legal.md)). **Not necessary** for this campaign |

## Step 1: Set up your UTM links

### What a UTM is

A **UTM** is a set of labels you add to the end of a link so that analytics tools know where a visitor came from. The link still goes to the same page. For example:

```text
https://www.even3.com.br/iconafroedu-764690/?utm_source=facebook&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=reel_professora_01
```

Google documents the three main parameters (`utm_source`, `utm_medium`, `utm_campaign`) plus the optional `utm_content`, and notes that values are **case-sensitive** ([Google Analytics Help](https://support.google.com/analytics/answer/10917952)). Even3's own [Analytics guide](https://blog.even3.com.br/como-usar-o-even3-analytics/) describes reading traffic origins from tagged campaign links.

### The CONAFROEDU naming scheme

**Rules:** lowercase only, no spaces, no accents, words separated by `_`, and **never** a person's name, email or phone number in the link.

| Parameter | Meaning | Allowed values for CONAFROEDU |
|---|---|---|
| `utm_campaign` | Which funnel | `conafroedu_2026_submissoes` (until 4 Nov) · `conafroedu_2026_inscricoes` (attendance) |
| `utm_source` | Where the link was placed | `facebook` · `instagram` · `whatsapp` · `email` · `even3_email` · `autores` · `palestrante_01`…`palestrante_20` · `parceiro_<code>` (e.g. `parceiro_neabi_01`, `parceiro_ppg_02`) · `embaixador_01`…`embaixador_10` · `qrcode` |
| `utm_medium` | The type of channel | `organic_social` (posts, Stories, Reels, bio) · `messaging` (WhatsApp Channel, groups, Status) · `email` · `referral` (speakers, partners, ambassadors, authors) · `print` (QR on slides/posters) |
| `utm_content` | Which specific piece | `<format>_<topic>_<nn>`, e.g. `reel_professora_01`, `card_normas_01`, `story_lote_01`, `event_ticket_link`, `bio_link`, `kit_aprovado`, `release` |

> [!NOTE]
> `messaging` is a custom label chosen for this guide. Some analytics tools won't group it automatically with "social" traffic, which is fine: you'll read source and medium directly.

### Ready-made links

| Placement | Full link |
|---|---|
| Facebook post: submission rules (until 4 Nov) | `https://www.even3.com.br/iconafroedu-764690/?utm_source=facebook&utm_medium=organic_social&utm_campaign=conafroedu_2026_submissoes&utm_content=card_normas_01` |
| Facebook Event ticket link | `https://www.even3.com.br/iconafroedu-764690/?utm_source=facebook&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=event_ticket_link` |
| Instagram bio | `https://www.even3.com.br/iconafroedu-764690/?utm_source=instagram&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=bio_link` |
| Instagram Story about the 16 Nov price change | `https://www.even3.com.br/iconafroedu-764690/?utm_source=instagram&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=story_lote_01` |
| WhatsApp Channel update | `https://www.even3.com.br/iconafroedu-764690/?utm_source=whatsapp&utm_medium=messaging&utm_campaign=conafroedu_2026_inscricoes&utm_content=canal_programacao_01` |
| 20 Nov Consciência Negra post | `https://www.even3.com.br/iconafroedu-764690/?utm_source=facebook&utm_medium=organic_social&utm_campaign=conafroedu_2026_inscricoes&utm_content=post_20nov_01` |
| Partner NEABI newsletter | `https://www.even3.com.br/iconafroedu-764690/?utm_source=parceiro_neabi_01&utm_medium=referral&utm_campaign=conafroedu_2026_submissoes&utm_content=release` |
| Speaker kit | `https://www.even3.com.br/iconafroedu-764690/?utm_source=palestrante_03&utm_medium=referral&utm_campaign=conafroedu_2026_inscricoes&utm_content=kit_palestrante` |

> [!IMPORTANT]
> Don't invent a "direct submission link". Use the main event page for both funnels and let the `utm_campaign` tell them apart. Test whether the parameters survive if a visitor has to log in to submit.

### Build links in the spreadsheet (no extra tool needed)

Create a tab called **Links** with these columns:

| A: Destination | B: source | C: medium | D: campaign | E: content | F: Full link | G: Placed where | H: Owner | I: Created | J: Tested? |
|---|---|---|---|---|---|---|---|---|---|

In cell F2, paste this formula and drag it down:

```text
=A2&"?utm_source="&B2&"&utm_medium="&C2&"&utm_campaign="&D2&"&utm_content="&E2
```

Put `https://www.even3.com.br/iconafroedu-764690/` in column A. Every link the team uses comes from this tab, and nobody types UTMs by hand.

### Test every link (2 minutes each)

1. Open the link on a phone, in the Facebook or WhatsApp in-app browser.
2. Check that the correct CONAFROEDU page opens and the registration button works.
3. Check the address bar still contains the `utm_` part (if you use a shortener or QR code, check after the redirect).
4. Mark **Tested? = yes** in the Links tab.

> [!CAUTION]
> Attribution will never be perfect. When someone forwards your WhatsApp message, the new person arrives with *your* UTM. People also see a post on their phone and register later on a computer. Treat UTM numbers as **clues, not exact truth**, and combine them with other signals (coupon uses, the "how did you hear about us?" question, conversations).

## Step 2: Read Meta's free insights

### Meta Business Suite Insights

1. Open [business.facebook.com](https://business.facebook.com) or the Meta Business Suite app and choose the CONAFROEDU Page (you need appropriate access).
2. Go to **Insights** (the label may vary slightly in pt-BR).
3. Check the **28-day overview**. Meta's help describes **Views**, **Interactions** and **Follows** ([Meta Business Help](https://www.facebook.com/business/help/4185855074991336)).
4. Open **Content** to see each post individually, not just account totals.
5. Copy the numbers you care about into your Weekly tab (Step 4).

**How to read them:**

- **Views are not people.** Meta defines a view as content played or displayed; replays and repeat displays count. Where **reach** is available, use it as the estimate of unique people.
- **Interactions** (reactions, comments, shares, saves) show interest, not registrations. A deadline post can get few likes and still bring the most registrations.
- **Compare like with like:** a Reel with a Reel, a deadline post with a deadline post, over the same time window (e.g. 48 hours and 7 days after publishing).
- **Write down the exact metric names you used.** Dashboards change.

### Professional Dashboard (Painel profissional)

For Reels and videos, look for **retention** (how long people watched) and, where shown, reach among **non-followers**. Meta has announced these graphs before, but not every account sees every field, so check what yours shows before building a routine around it.

### Facebook Event responses

"Going" and "Interested" are expressions of interest, **not registrations**, and Facebook doesn't guarantee that everyone who responded gets reminders. Record them as a secondary signal only. Never copy the list of respondents to send them messages.

### WhatsApp

If you run a WhatsApp Channel, note the views on each update. The most reliable WhatsApp signal is **tagged clicks to Even3** (`utm_source=whatsapp`) plus the questions people send you.

## Step 3: Even3 registration and submission data

Even3 is where your *outcomes* live. Inspect it before installing any other tool.

1. **Reports and exports.** Even3's Help Center documents exports for People, Sales, Program, Submissions and Certificates ([Help: reports](https://ajuda.even3.com.br/hc/pt-br/articles/360016649591-Acessar-relat%C3%B3rios-com-informa%C3%A7%C3%B5es-sobre-o-meu-evento)). The detailed sales export includes purchase time, email and amounts ([Help: sales export](https://ajuda.even3.com.br/hc/pt-br/articles/32877235816219-Exportar-relat%C3%B3rio-de-vendas-do-meu-evento)), and there's a separate submissions export ([Help](https://ajuda.even3.com.br/hc/pt-br/articles/32668621542043-Exportar-relat%C3%B3rio-das-submiss%C3%B5es-do-evento)).
2. **Even3 Analytics.** Even3's [guide](https://blog.even3.com.br/como-usar-o-even3-analytics/) describes a built-in panel with visits, registrations/payments and traffic origins from tagged links. Check which of these your event's panel actually shows.
3. **Separate confirmed from pending.** Count only confirmed/paid registrations as results. Incomplete purchases are a signal of friction (price? payment method? doubts about the certificate?).
4. **Coupons.** If the committee created partner coupons, the number of uses per code is one of your most reliable partner metrics (it survives forwarding and device changes).
5. **"How did you hear about us?"** If the registration form lets you add an optional custom question, add one with multiple choice options (Facebook, Instagram, WhatsApp, e-mail, professor/colega, NEABI/universidade, outro) plus free text. It fills the gaps UTMs leave.

### Turn exports into safe aggregates

Exports contain **personal data** (names, emails, amounts). Never paste them into an AI tool or a shared public folder. Instead:

1. Save the export in a private, access-restricted folder.
2. In the spreadsheet, create a **pivot table** (in Google Sheets: Insert → Pivot table; in Portuguese, Inserir → Tabela dinâmica) counting registrations by **date**, **category** and, if available, **source/coupon**.
3. Copy only those counts into your Weekly tab.
4. Delete local copies of exports you no longer need.

## Step 4: The weekly review (30 minutes)

### Spreadsheet tabs

| Tab | Purpose |
|---|---|
| **Links** | Every tracked link (Step 1) |
| **Posts** | One row per published piece: date, time (BRT), channel, format, objective (submissions/registrations/education), topic, link code, 48 h and 7-day results |
| **Weekly** | The scorecard below |
| **Partners** | Partner/speaker/ambassador code, kit sent (date), what they shared, tagged visits, coupon uses |
| **Learning log** | One line per week: what we tried, what we learned, what we'll change |

### The Weekly scorecard

| Week | Confirmed registrations (total / new) | New registrations by category | Submissions (until 4 Nov) | Tagged visits to Even3 | Top 3 sources (UTM/coupon) | Reach (FB + IG, not summed as people) | Questions received (top themes) | Team hours | Decisions |
|---|---|---|---|---|---|---|---|---|---|
| 26 Oct–1 Nov | | | | | | | | | |
| 2–8 Nov | | | | | | | | | |
| 9–15 Nov | | | | | | | | | |
| 16–22 Nov | | | | | | | | | |
| 23–29 Nov | | | | | | | | | |
| 30 Nov–6 Dec | | | | | | | | | |

**Useful formulas** (adapt column letters):

- Engagement rate for a post: `=(reactions+comments+shares)/reach*100`. Always say which components you used, and don't compare it with rates calculated differently.
- Registrations per team hour: `=new_registrations/team_hours`, a reality check on effort.
- Conversion of tagged visits: `=confirmed_registrations_from_source/visits_from_source`, only where both numbers come from the same source.

### The 30-minute ritual

1. **(5 min)** Update the Weekly row: Even3 aggregates, Meta numbers, link/coupon counts.
2. **(5 min)** Look at the Posts tab: which 2 pieces brought the most *tagged visits or registrations*, not likes?
3. **(5 min)** Read the questions people sent. Repeated questions mean the page or posts are missing information. Fix that first.
4. **(5 min)** Check partners: who shared? Send a thank-you.
5. **(5 min)** Optional: paste the *aggregated* table into an AI assistant with the prompt below.
6. **(5 min)** Choose **two** changes for next week and write them in the Learning log.

In the **final fortnight before 4 Nov** and in the **last week before 5 Dec**, do a short check twice a week.

### Dates that deserve a specific look

| Date | What to check |
|---|---|
| **4 Nov** | Final submission count by modality; then remove submission CTAs and update links |
| **15–16 Nov** | Did the honest price-change reminder bring registrations? Compare the days before and after |
| **20 Nov** | Did the Consciência Negra content generate conversations and shares? (It's educational content first; don't judge it only by sales) |
| **25 Nov** | Program release: tagged visits and questions |
| **5–6 Dec** | Attendance vs. confirmed registrations; support questions |
| **15 Dec** | Final review: what to repeat in future editions |

## Step 5: Use AI to analyze your numbers safely

AI assistants (ChatGPT, Claude, Gemini, Meta AI, see [Choosing AI Tools](choosing-ai-tools.md)) are good at spotting patterns in a small table and turning them into a clear weekly summary. They are also good at inventing explanations that aren't true.

> [!WARNING]
> **Privacy first.** Only ever paste **aggregated** numbers: counts by date, category, source, post. Never paste names, emails, phone numbers, CPFs, payment details, private messages or accessibility requests. Check your AI tool's privacy settings (for example, whether your chats are used for training) before uploading anything.

### Prompt: weekly analysis

```prompt
Analyze this aggregated table. It contains no names, phones or emails.
Definitions: reach = [definition]; interactions = [components]; confirmed registration = [Even3 definition]; window = [period].
Data: [PASTE TABLE]. Calendar of what we published and what partners did: [PASTE].
Compare results by objective (submissions vs registrations) and by format. Separate: observation, hypothesis, and missing information. Do not claim causality or statistical significance; samples are small. Propose only 2 tests for next week, with time cost, main metric and how we'll judge them. List possible data errors.
```

### Prompt: summary for the committee's WhatsApp group

```prompt
Turn this weekly analysis into a short message in Brazilian Portuguese for our volunteer organizing committee's WhatsApp group (max. 120 words). Structure: 1 line on the main result, 2 bullets on what worked, 1 bullet on what to stop, the 2 decisions for next week with an owner each. Friendly, direct, no jargon. Analysis: [PASTE]
```

### Prompt: plan the spreadsheet (no data needed)

```prompt
I'm a volunteer with no analytics experience. Design a simple Google Sheets structure to track a 6-week organic campaign for an online academic congress (Facebook, Instagram, WhatsApp; registrations on Even3). I need tabs for: tracked links, post log, weekly scorecard, partners, learning log. For each tab give the columns, one example row with placeholder values, and any formulas. Keep it usable in 30 minutes per week.
```

## Testing without fooling yourself

Organic posts are not scientific experiments: audiences, timing and partner shares change every week. You can still learn:

1. **Change one thing at a time:** a question opening vs. a benefit opening; a teacher on camera vs. an organizer; a morning vs. evening slot.
2. **Write the hypothesis before you look**, e.g. "A teacher explaining a classroom practice brings more tagged visits than a poster."
3. **Compare several posts**, not one lucky outlier.
4. **Judge by the post's goal.** A deadline reminder exists to drive registrations, not comments.
5. **Note what else happened:** a partner shared, a deadline was near, a holiday.

Suggested time slots to test (Brasília time, hypotheses, not proven rules): Tue/Thu 07h–09h, Tue/Wed 12h–14h, Wed/Thu 18h30–20h30. More in the [Facebook Organic Playbook](facebook-playbook.md).

## Which metric matters for which goal

| Goal | Metric that matters | Vanity metric to ignore as a goal |
|---|---|---|
| More eligible submissions (until 4 Nov) | Completed submissions by modality; tagged visits from author-focused posts and partners | Likes on the call-for-papers poster |
| More registrations | Confirmed registrations by category and source; coupon uses | Page follows, total views |
| Reach the right people | Non-follower reach on relevant topics; questions from teachers; partner shares | Total impressions |
| Better partners | Tagged registrations per partner, with attribution caveats | Partner's follower count |
| Attendance | Attendees ÷ confirmed registrations; access-support questions resolved | Event "Interested" count |
| Sustainable team | Registrations per team hour; formats dropped | Number of posts published |

## After the event: closing the loop

Between 7 and 15 December:

- [ ] Final registrations by category and by source; attendance ÷ registrations.
- [ ] Certificates issued (Even3 certificate report) and support questions about them.
- [ ] Proceedings: published on time? Share the real link only when it exists.
- [ ] Partner contributions: thank each partner with their results (if they want to know).
- [ ] Team hours vs. results per format: what to drop next time.
- [ ] Learning log turned into a one-page "what we'd do differently" document for future editions.
- [ ] Delete or archive exports with personal data according to the retention rule the committee defined (see [ethics-legal](ethics-legal.md)).

## Setup checklist

- [ ] Spreadsheet created with Links, Posts, Weekly, Partners and Learning log tabs.
- [ ] UTM scheme agreed; every published link comes from the Links tab and is tested.
- [ ] Access to Meta Business Suite confirmed for at least two people.
- [ ] Someone checked what Even3 Analytics and reports show for this event.
- [ ] Optional "how did you hear about us?" question added (if Even3 allows it).
- [ ] Rule agreed: only aggregated data goes into AI tools.
- [ ] Weekly review slot in the calendar (30 minutes, same day each week).

## Next steps

- Build the kits that these links track: [Speaker & Partner Promo Kits](speaker-partner-kits.md)
- Privacy, cookies and data retention: [Ethics, Policies & LGPD](ethics-legal.md)
- Schedule posts and read results in one place: [Scheduling & Publishing Tools](scheduling-tools.md)
- The campaign weeks you'll be measuring: [CONAFROEDU 2026: The 6-Week Sprint Plan](conafroedu-sprint.md)
- Automate the boring parts of reporting: [No-Code Automations](no-code-automation.md)
