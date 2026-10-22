# Independent final review — Facebook, Automate and Extras

Review date: **21 October 2026**. Read-only content review of the current working tree, including the parent's intervening weekly-prompt and certificate fixes. Read BRIEF, REVIEW_GUIDE, CONTENT_GUIDE, the GPT-03/04/05 findings, `resolved-facebook-automate.md`, and the canonical fact/voice guidance. Scope: both locales of the 15 assigned slugs: `facebook-playbook`, `facebook-events-groups`, `campaign-timeline`, `instagram-whatsapp`, `speaker-partner-kits`, `measuring-results`, `ethics-legal`, `computer-use-agents`, `no-code-automation`, `scheduling-tools`, `outreach`, `replies-inbox`, `tips-tricks`, `prompt-library`, `glossary-resources`.

**Remaining: 0 CRITICAL · 4 MAJOR · 1 MINOR.** Repeated occurrences are grouped. Findings concern executable advice or factual/parity defects, not stylistic preferences. Line numbers refer to the reviewed working tree and may move during integration. Only this report was written.

## Remaining findings

### FINAL-FBA-01 — MAJOR — The RSS recipe retains Make's quota-exhausting default schedule

**Location:** both `content/en/no-code-automation.md:199–207` and `content/pt-BR/no-code-automation.md:199–207`, Flow 4; compare the explicit polling budget in Flow 2 at line 136.

**Problem:** Flow 4 correctly repairs the trigger topology and moves duplicate checking to a person, but never sets the scenario's polling frequency. The person checking rows once/twice daily is not a scenario schedule. Activating the recipe with Make's default costs about **2,880 trigger checks per 30 days**, before any rows are added. It consumes the stated 1,000-credit allowance in approximately 10.4 days and can also stop Flow 2 in the same account.

**Primary evidence, retrieved 2026-10-21:** [Make scheduling](https://help.make.com/schedule-a-scenario) documents the default 15-minute interval; [operations](https://help.make.com/operations) counts polling checks independently of returned bundles; [pricing](https://www.make.com/en/pricing) confirms 1,000 Free credits and that scenarios stop without credits. [RSS documentation](https://apps.make.com/rss) identifies Watch RSS Feed Items as the trigger. The consumption estimate is arithmetic from those rules, not an account test.

**Exact addition before activation/testing, in both languages:** “Open Schedule settings and replace ‘Every 15 minutes’ with two daily runs, for example 09:00 and 17:00 in the scenario's confirmed Brasília time zone. That is about 60 trigger checks per 30 days, plus one Add a Row action per item. Budget this together with Flow 2 and tests; check actual usage before enabling.” Portuguese: “Abra Schedule settings e substitua ‘Every 15 minutes’ por duas execuções diárias, por exemplo às 9h e às 17h, com o fuso de Brasília confirmado no cenário. São cerca de 60 consultas em 30 dias, mais uma ação Add a Row por item. Some esse consumo ao Fluxo 2 e aos testes; confira o uso real antes de ativar.”

### FINAL-FBA-02 — MAJOR — Operational calendar snippets still contradict the approved publishing rows

**Locations:** `content/en/scheduling-tools.md:182–188`; pt-BR `:179–185`; both `prompt-library.md:330–333`; `content/en/campaign-timeline.md:309` and pt-BR `:308`.

**Evidence and consequence:** the corrected calendar fixes first call **by 23 Oct**, C01 submission how-to on **26 Oct**, C02 seven-day checklist on **28 Oct**, C03 classroom Reel on **30 Oct**, and price reminders **10/14 Nov in Stories/Channel only** (`campaign-timeline.md:79,83,85,257`; sprint line 162 in both locales). Nevertheless:

- Scheduling still says first call by **25 Oct**, how-to on **28 Oct**, and price reminder **12–14 Nov** without the channel restriction.
- Library §3.11 still instructs reminders around **12 Nov and 15 Nov** and requests a **Facebook post**. Its own §2.2 now correctly says 10/14 Nov, Stories/Channel.
- The calendar's final checklist still requires price-change **posts on 12/15/16 Nov**.
- Scheduling's **20 Nov** row permits a light attendance CTA inside the educational post. The approved calendar explicitly puts any invitation in a **separate** optional post (`campaign-timeline.md:114–115`, pt-BR `:116–117`).

These are remaining fixed-text conflicts; **the newly repaired weekly sprint/library prompt is resolved**. No external source can decide an internal editorial schedule.

**Fix:** make these snippets references to the approved calendar rows, or synchronize them exactly: first call by 23 Oct; C01/C02/C03 on 26/28/30 Oct; price reminders on 10/14 Nov in Stories/Channel only; 16 Nov edits existing prices; 20 Nov educational contribution has an educational question and no sales CTA. In library §3.11 replace “a Facebook post” with “the approved Story/WhatsApp Channel reminder for [10 or 14 November]”; update its usage sentence and the calendar checklist accordingly. Do not add new Feed posts.

### FINAL-FBA-03 — MAJOR — English Instagram instructions still promise unvalidated registration attribution

**Location:** `content/en/instagram-whatsapp.md:63`; related partner success metric in **both locales** at line 35.

**Problem:** English says to tag placements “so Even3 shows where registrations came from.” Portuguese line 63 correctly limits this to visit origins and requires separate validation for registrations. The English claim contradicts both `measuring-results.md:48` versions and the resolved GPT03-003 finding. The partner table also still presents registrations from partner links as an unconditional metric.

**Primary evidence, retrieved 2026-10-21:** [Even3's Analytics instructions](https://blog.even3.com.br/como-usar-o-even3-analytics/) describe tagged **visitor origins**, separately from sales data; they do not establish this event's tested source-to-registration join. This is an unsupported guarantee, not proof that attribution can never be available.

**Exact replacement for EN line 63:** “Use tagged links per placement to distinguish visit sources; attribute registrations only after separately validating that connection in the event panel. See [Measuring results](measuring-results.md).” Replace the partner table metric in both languages with “Tagged visits; registrations only with validated attribution” / “Visitas rastreadas; inscrições só com atribuição validada”.

### FINAL-FBA-04 — MAJOR — The Portuguese standalone speaker-card prompt loses the external-processing permission boundary

**Location:** `content/pt-BR/prompt-library.md:709–713`, §6.2, versus EN `:709–713`; related upload prompts in §6.6, EN `:778–779`, pt-BR `:778–779`.

**Problem:** EN §6.2 now requires a photo approved **separately for this external AI processing**, with documented privacy conditions, and supplies a local-placeholder fallback. PT only says the attached photo is authorized. The library's section introduction says only that the name/title/photo are approved; the explicit upload warning from the source motion guide was not carried over. A volunteer entering through the library can treat permission to publish a portrait as permission to upload it. Both §6.6 copies use the same insufficient shorthand.

**Evidence:** both `ethics-legal.md:64,163` distinguish external processing from publication permission; the source motion guide states the upload requirement immediately before its speaker-card prompt. Independently checked [LGPD arts. 8–9](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) require determined purposes and transparent processing/controller information (retrieved 2026-10-21). This finding applies the campaign's documented permission rule; it does not claim consent is the only possible LGPD legal basis.

**Exact PT replacement for the photo instruction:** “Use foto de palestrante somente com autorização separada para este processamento externo por IA e com as condições de privacidade documentadas; sem isso, deixe um espaço reservado para uma pessoa inserir a foto localmente. Estou anexando uma foto que atende a essas condições. Incorpore a foto no HTML e não altere, retoque, clareie nem corte o rosto.” Carry the same requirement/fallback into §6.6 in both languages. This permits authorized embedding; it does not permit generative portrait reconstruction.

### FINAL-FBA-05 — MINOR — English calendar aftercare still states certificate availability as certain

**Location remaining at final check:** `content/en/campaign-timeline.md:89` still says “Certificate instructions (available from 6 Dec)” whereas PT `:91` now requires actual release.

**Assessment:** the **main fix passes**: the canonical fact sheet, public `/certificado` answer at line 155 and certificate prompt §3.16 distinguish forecast, actual availability and criteria. At the final recheck, the parent also corrected **both** FAQ rollover rows at line 402 and library calendar prompts at line 130; those are resolved. This is one residual English summary/parity inconsistency, not a repeat of the old certificate finding.

**Exact fix:** match the corrected Portuguese row: “Certificate instructions only after actual release (expected from 6 Dec)”. The evidence is the corrected canonical wording and current public answer, not a claim that release has already occurred.

## Passed checks

- **Consent and suppression:** actual instructions now reject public-number/acquaintance WhatsApp outreach, require affirmative opt-in in the subscription-only form, test unchecked/suppressed cases, and preserve a minimal suppression record. This agrees with the independently retrieved [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/), updated 23 September 2026, and LGPD purpose/transparency requirements.
- **Replies and rollover:** canonical 18-shortcut bank and five labels are present in both locales. The cutoff audit covers the whole bank, including registration/prices/modalities/video; package sales do not reopen submissions. Private replies specify one reply within seven days and waiting for the recipient's response. Source review only; no Meta account test.
- **Event/programme facts:** independently retrieved the live [Even3 page](https://www.even3.com.br/iconafroedu-764690/) and parsed its activity data: **12 activities**, some named presenters, overlapping slots. The partial/final distinction is justified. R$16.98/work and individually advertised DOIs are present; presentation wording remains contradictory and is correctly escalated.
- **Kits/rights:** master edit links are prohibited; template copies must be tested. Benefit-for-post arrangements now require platform partnership disclosure, supported by [Meta's explanation](https://about.fb.com/fr/news/2023/02/comment-meta-accompagne-les-createurs-de-contenus-et-les-acteurs-de-linfluence-en-ligne/). The authorization no longer invents nonprofit status. Acceptance is separated from publication; [Crossref](https://www.crossref.org/documentation/research-nexus/pending-publications/) independently confirms DOIs may precede publication.
- **Automation fixes:** single RSS trigger, human duplicate review, mapped Sheet row number, explicit calendar start/end offsets and replay checks are present. Email by Zapier's **Send Outbound Email, five/day Free/Trial** limit matches the [official integration](https://zapier.com/apps/email/integrations). Flow 2's four-check/day budget is corrected; Flow 4 is the separate remaining issue above.
- **Agent boundaries:** draft preparation and personal scheduling/queue verification agree across guides. [Official OpenAI browser documentation](https://learn.chatgpt.com/docs/browser) independently confirms the desktop built-in browser's manual upload boundary and Plus/Pro cloud sign-in rollout. No legacy installation route is prescribed. Native managed-Group scheduling is distinguished from external API publishing.
- **Parent's intervening fixes:** both library §2.1 prompts now require approved rows, preserve IDs/dates/topics/channels, protect inbox capacity and separate proposed changes from approval. Public certificate wording and §3.16 now gate download instructions on actual release. These are not reported as unresolved major defects.
- **Bilingual structure:** all **15 pairs** have matching heading-level sequences and prompt counts; library has **89 prompt blocks per locale**. All **30 files** link setup and learning. Numeric/external-URL comparisons were inspected for material drift; the semantic parity exceptions are identified above. This is not a claim of complete semantic equivalence.

## Limits

No app-code review, preview use, rebuild, installation, authenticated organizer session, payment, enrollment, sending or publishing. No subagents, commits or pushes. Tool recipes were reviewed against instructions and selected primary documentation, not executed in real accounts. Did not repeat every pricing/rollout check without cause. Exact submission cutoff, presentation/video handling, certificate eligibility, final timetable, actual certificate release, account-specific scheduling/Live controls, checkout and source-to-registration attribution still require committee/account verification. The parent owns final integration, build, ZIP verification and deployment.

## Supervisor resolutions

Addressed all five findings in both languages:

- FBA01: Flow4 now requires Daily09:00/17:00 Brasília scheduling before activation, budgets approximately60polls/30days plusAddaRow actions and shares the account budget with Flow2/tests. Parent independently opened Make scheduling/operations primary pages.
- FBA02: scheduling rows match23/26/28/30October; reminders10/14November are Stories/Channelonly,16November edits existingprices;20November educational contribution excludes a salesCTA. Priceprompt source and library copies updated together; calendar final checklist uses the same plan.
- FBA03: English placement links distinguish visits; registration attribution is conditional on event-panel validation. Both partner tables use the same conditional metric.
- FBA04: speaker-photo prompts in both the library and source motion guide now require separate external-processing permission/privacy conditions and provide a local-placeholder fallback, including Motion prompts.
- FBA05: English calendar aftercare now requires actual certificate release, with6December identified as forecast.

These are source/instruction corrections, not authenticated account tests. Parent owns final build, link/asset checks and deployment.
