# Supervisor notes for the adversarial content review

Known issues/questions collected while content agents reported back:
- Sora status: research 01 (pass 2) says app closed 26 Apr 2026 & API removed 24 Sep 2026; research 03 lists a Sora model in OpenAI docs. Settle definitively; make all pages consistent.
- Committee-confirmation markers are inconsistent: `[CONFIRMAR]`, "confirm with the committee", etc. Standardize: in body text use a `> [!IMPORTANT]` "Confirm with the committee"/"Confirme com a comissão" callout or inline "(confirm with the committee)"/"(confirmar com a comissão)"; inside copy-paste prompts/fact-sheet keep `[CONFIRMAR]` placeholders (explain once in prompting-basics).
- Example brand palette (#17324D navy, #3F8F79 green, #F6F2E9 cream) is used in brand-kit and image-prompts as placeholder; ensure motion-graphics examples and any other pages are consistent or clearly labeled.
- Meta UI menu paths/pt-BR labels were not verifiable (Meta help pages blocked) — reviewer should try to verify (e.g. "Informações de IA", "Painel profissional", "coanfitriões", WhatsApp "Criar canal").
- Even3 referral/affiliate links and custom registration questions unverified.
- Claims from general knowledge (not research): LGPD art. 5 II sensitive data incl. racial/ethnic origin; 2 Nov Finados holiday; IG professional account required for Business Suite; contrast 4.5:1. Verify.
- Instagram 5-hashtag limit ("reportedly") — verify.
- Facebook Live eligibility (60-day account, 100 followers) sourced from StreamYard, not Meta — verify.
- pt-BR anchors contain accents (rehype-slug keeps them) — verify every in-page/cross-page anchor resolves.
- Overlap/consistency between conafroedu-sprint (Start) and campaign-timeline (Facebook) — dates, roles, and recommendations must match.
- Price tiers R$55–70 → R$60–75 on 16 Nov; publication fee R$16,98/paper — consistent everywhere and flagged "confirm at checkout".
- Two different brand-voice blocks: EN "VOICE" in copywriting vs "VOZ DA MARCA" in prompting-basics — unify (one canonical block, in prompting-basics; others link/reuse verbatim).
- WhatsApp quick-reply shortcuts differ across quick-start, conafroedu-sprint, instagram-whatsapp, replies-inbox — unify to replies-inbox's set.
- WhatsApp label "Não enviar novidades" (instagram-whatsapp) vs "Não enviar divulgação" (replies-inbox) — unify.
- Palette: motion-graphics examples use terracotta/ochre; brand-kit/image-prompts use navy/green/cream example palette. Decide: keep both clearly labeled as EXAMPLES, with a note in brand-kit that any palette works — or align. Don't re-render MP4s unless needed.
- "online" vs "on-line" in pt-BR: official announcement uses "on-line"; standardize pt-BR body text to "on-line" (keep "100% on-line" consistent), except proper quotes.
- Size: total ~229k words; prompt-library ~12k words per lang. Reviewers should flag bloat/redundancy that hurts usability for non-experts (but don't cut substance).
- NEW (user request): audience has used chatgpt.com/claude.ai only. Every page that mentions installing/enabling a tool (Claude in Chrome, computer use, Claude Code, Skills, Atlas, NotebookLM, OBS, CapCut, Node.js, WhatsApp Business, Meta Business Suite) must link to `setup-tools.md` (the relevant anchor) rather than assuming knowledge. Home page reading paths + quick-start Day 1 should point to setup-tools and learning-with-ai. Glossary & prompt-library should include their terms/prompts.
