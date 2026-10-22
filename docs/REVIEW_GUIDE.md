# Adversarial content review guide

The CONTENT is what matters most. Review deeply, adversarially, as if your reputation depends on catching every error before volunteers in Brazil act on this advice. Today is 2026-10-21.

Context: docs/BRIEF.md (CONAFROEDU 2026 facts & verified dates), docs/CONTENT_PLAN.md, docs/CONTENT_GUIDE.md (writing rules), docs/REVIEW_NOTES.md (known issues to resolve), research in docs/research/ (sources). Content in content/en/*.md and content/pt-BR/*.md.

## What to check (per page, both languages)
1. **Factual accuracy** — every concrete claim about tools, models, prices, free tiers, plan names, features, limits, platform policies, specs (sizes, durations), laws, dates. Independently verify with web searches against official/primary sources (pricing pages, help centers, laws on planalto.gov.br, Meta/WhatsApp docs, Even3 help/event page). Do not trust the research files blindly — they can be wrong.
2. **CONAFROEDU facts** — dates, prices, deadlines, offers must match the Even3 page (https://www.even3.com.br/iconafroedu-764690/) and BRIEF; nothing invented about the event; open questions flagged.
3. **Internal consistency** — same facts/dates/recommendations/labels/prompts across pages and across languages.
4. **Practical usefulness & correctness of instructions** — can a non-technical volunteer actually follow each step? Are menu paths plausible/current? Do prompts work and produce what's claimed? Missing steps? Wrong order? Advice that would backfire (spam flags, account bans, LGPD issues)?
5. **Completeness vs brief** — gaps in coverage the user asked for (image gen & best models, video gen & best models, stop-motion with Claude, model differences, Facebook organic focus, automation/computer use/outreach/replies, tips & tricks).
6. **Ethics & representation** — respectful, accurate treatment of Afro-Brazilian cultures and anti-racist education; no stereotypes; correct terminology; consent & disclosure; policy compliance.
7. **Quality** — clarity, redundancy/bloat, tone (academic-warm), structure, outdated/hedged language, broken Markdown, broken links/anchors.
8. **Language parity** — pt-BR and EN say the same things (no missing sections, facts, or warnings in either).

## Output
Write findings to the file you are assigned in docs/review/. For each finding:
- ID, severity (CRITICAL = wrong/harmful fact or instruction; MAJOR = misleading, significant gap, inconsistency; MINOR = polish), file(s) + heading/line, the problem, evidence (URL + what it says, retrieved date), and a concrete suggested fix (exact replacement text when possible).
Also include a short "verified OK" list of important claims you checked and confirmed (so later reviewers don't redo them).
Do NOT edit content files. Do NOT git commit.
