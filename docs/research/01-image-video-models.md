# AI image and video generation for conference marketing

**Research cut-off: 2026-10-21.** Prepared for the small team described in `docs/BRIEF.md`: an education conference in Brazil, organic Facebook first, with Instagram and WhatsApp reuse and no advertising budget. Prices are USD unless explicitly marked BRL. Subscription prices distinguish monthly billing from annual commitments. Taxes, exchange fees, regional offers, account quotas, and failed creative attempts can change the real cost.

**Pass 2 verified for CONAFROEDU 2026 — Congresso Nacional de Africanidades na Educação**, “Desenvolvimento, Participação e Educação Antirracista,” **100% online, 5–6 December 2026**. The brief is the authority for conference facts; tool documentation cannot verify registration offers. Use the approved Even3 destination, https://www.even3.com.br/iconafroedu-764690/, and approved wording for the 40-hour certificate, submissions and proceedings with ISBN/DOI. There is no physical venue to illustrate. Do not invent ticket prices, submission deadlines, speaker attendance or previous editions. Pass 2 is independent desk verification, including direct browser reading of Meta help; no authenticated Brazil checkout or original generation benchmark was performed. See the final verification log.

## 1. What the team should actually use

**Recommended starting workflow:** real speaker photographs and past-event footage → a reusable Canva layout → short clips edited and captioned in CapCut or another editor the team already knows. Use ChatGPT Images or Gemini for illustrations, backgrounds, selective edits, and brainstorming. Keep event names, speaker names, dates, prices, logos, and calls to action in editable text/vector layers. This is an editorial recommendation, based on the tools' editing capabilities and documented limitations, rather than a claim that AI artwork improves Facebook reach. [S06] [S08] [S11] [S22] [S23]

The useful division of work is:

| Need | Best starting choice for this team | Why / limitation |
| --- | --- | --- |
| A finished event poster, speaker card, or quote card | Canva template plus an approved photo; optionally generate the background elsewhere | Exact Portuguese copy and consistent spacing are easier to maintain in editable layers. Canva is an application, not one fixed image model. [S22] [S23] |
| A complex illustration or an edit explained in ordinary language | ChatGPT Images 2.5; compare Gemini Nano Banana 2.1 if available | Both support conversational creation and editing. Neither guarantees identity, exact lettering, or identical results across a campaign. [S06] [S08] [S11] |
| Low-cost API image production | Nano Banana 2.1; FLUX 3 Image Klein for a technically capable teammate | Google publishes inexpensive image-output pricing; BFL's Klein has both hosted access and downloadable weights with a revenue-limited commercial license. API setup is optional, not a prerequisite for this campaign. [S10] [S15] |
| A distinctive artistic campaign direction | Midjourney V8.2 | Aesthetic exploration, personalization, and its newer Edit Model are relevant; there is no regular free web/Discord trial. [S12] [S13] |
| Stylized lettering or a text-heavy concept | Ideogram 4.5/4.0, ChatGPT Images, or Nano Banana | Ideogram remains design-oriented; 4.5 emphasizes precise edits. Portuguese proofreading is still required. [S06] [S11] [S16] [S17] |
| Editable vector graphics or logo concepts | Paid Recraft V4.1 Vector, followed by human cleanup | Native SVG is useful. Free Recraft generations currently lack commercial rights; an AI logo is not automatically trademark-safe. [S19] [S20] [S21] |
| A Reel made from a speaker's actual talk | CapCut/manual editing; OpusClip or Descript for candidate selection | These repurpose real footage. A video generation model is unnecessary for most of this work. [S48] [S49] [S50] |
| A synthetic 5–10-second visual insert | Compare Gemini Omni Flash, Runway Gen-4.5, MiniMax H3, or Wan 3.0 using the same shot brief | Cost, reliability, access, and rights matter more than a generic winner. Add the conference's factual copy in the editor. [S31] [S35] [S39] [S41] |
| A 15–30-second fully generated narrative | Seedance 2.5; Kling 4.0 or Wan 3.0 as alternatives | Longer native generation is now documented, but revision costs and continuity failures still need budgeting. Kling 4.0 was only just launched. [S33] [S38] [S41] |
| A speaker invitation in Brazilian Portuguese | Ask the speaker to record it on a phone; use HeyGen translation only with explicit approval if needed | It preserves a real endorsement. HeyGen documents pt-BR translation and consent verification for digital twins. [S44] [S45] |
| A free soundtrack for Meta-only publication | Meta Sound Collection, after checking the track/use terms | Do not assume a CapCut or trending Instagram track is licensed for conference promotion or for WhatsApp distribution. [S53] [S54] |

### Changes that make older guides misleading

- **OpenAI:** the current image family is GPT Image **2.5 Sunburst and Flare**. ChatGPT calls its current experience Images 2.5. DALL·E 2/3 were retired on May 12, 2026; some older GPT Image aliases are scheduled for removal on December 1, 2026. [S05] [S06] [S07]
- **Sora:** the web/app closed on April 26, 2026, and the Videos API/Sora 2 models were removed on September 24, 2026. It is a historical comparison, not a current recommendation. [S07] [S30]
- **Google images:** Nano Banana **2.1** is documented as the newest efficient generation/editing model. Nano Banana 2 is Gemini 3.1 Flash Image; Nano Banana Pro is Gemini 3 Pro Image. The original Gemini 2.5 Flash Image has passed its October 2 shutdown date. **Imagen is shut down in the Gemini API**; this statement does not establish that every Imagen offering on every Google/partner surface has closed. The current deprecation table independently confirms these dates. [S09] [S10] [S11] [S29] [S94]
- **Google video:** Veo 3.1 remains the latest Veo version verified here, but Google's guide now recommends **Gemini Omni Flash 1.1** for default video work. The Veo 3.1 **preview endpoints in the Gemini API** are scheduled to shut down on **October 22, 2026**, one day after this research. Google's guide points to Omni or separately available GA enterprise-platform models. Do not describe this as a shutdown of every Veo product. [S31] [S32]
- **Other verified updates:** Midjourney V8.2; FLUX 3 Image and Image Klein; Ideogram 4.5; Recraft V4.1/Flash; Seedream 5.0 Pro/Flash; Kling 4.0; Seedance 2.5; MiniMax H3; Luma Ray3.2; hosted Wan 3.0. These replace many familiar 2025 recommendations. [S12] [S14] [S15] [S16] [S20] [S25] [S33] [S37] [S38] [S39] [S41] [S76]

## 2. Evidence quality and how to read rankings

This is **desk research, not an original hands-on model benchmark**. Official documentation establishes advertised features, published rates, product status, and contractual permissions. Vendor examples are selected examples. Recommendations below are an editorial synthesis; they do not establish measured Portuguese accuracy or marketing performance. **[UNVERIFIED]** marks a material claim that was not fully confirmed, an inaccessible/currently conflicting source, or an account/region condition needing a real account check.

### Leaderboard snapshot

| Board read on October 21 | Relevant observation | How to use it |
| --- | --- | --- |
| Artificial Analysis image text-to-image, v2.1 | #1 Sunburst max 1222 ±10; #2 Flare max 1207 ±10; #3 GPT Image 2 high 1186 ±11; #4 Nano Banana 2.1 1176 ±12 | A shortlist, not a Portuguese typography test. [S01] |
| Artificial Analysis image editing, v2.1 | Sunburst and Flare lead; Nano Banana 2.1 and MAI-Image-2.6 follow with overlapping intervals | Test editing separately from new-image generation. [S02] |
| Arena, formerly LMArena, text-to-image | The page's own snapshot is October 7, 2026; Sunburst and Flare lead | Retrieval date is not the board's update date. [S03] |
| Artificial Analysis text-to-video with audio, v2.1 | #1 Wan 3.0; #2 Utopai X; #3 HeyGen Video ultraquality; #4 H3 and #5 Seedance 2.5 have equal displayed Elo | Preview/unreleased and derived entries are mixed in; filters matter. Rankings are not a list of free production tools. [S04] |
| Artificial Analysis image-to-video with audio, v1.1 | H3, a derived FLUX 3 Max entry, Seedance 2.5, Omni, and Wan have overlapping rank ranges | Do not overinterpret tiny gaps or compare Elo across boards. [S28] |

These boards measure human preferences on their prompt sets. They do not certify commercial rights, pt-BR accents, a speaker's likeness, factual event details, generation success rate, or business outcomes. New models may not yet appear: a board listing Kling 3.0 does not disprove the October launch of Kling 4.0. Likewise, a provider's launch-time “#1” claim can be obsolete without the model becoming unusable. This is an inference from the board methodologies, date labels, and separate release documentation. [S01] [S03] [S04] [S33]

A TechRadar comparison published October 13 found Nano Banana 2.1 and ChatGPT Images 2.5 close on its example prompts, including remaining instruction-following errors. That is useful corroboration of practical limits, not a standardized language benchmark. A dated October video overview was used to discover candidates; technical claims in this report are anchored to their original documentation wherever available. [S74] [S75]

## 3. Image models: strengths, weaknesses, access, cost, and rights

### 3.1 Model and application comparison

“Best for” means **best candidate to try for this brief**, not a universal ranking. Text and identity reliability should be checked on the actual asset. Pricing and license details follow in the next table.

| Model / current verified family | Strengths and useful conference tasks | Weaknesses / editorial cautions | Access |
| --- | --- | --- | --- |
| **GPT Image 2.5 Sunburst / Flare**; ChatGPT Images 2.5 | Strong general generation and instruction-based edits; references, photorealistic scenes, illustration, transparent assets, poster concepts. Official guidance positions Sunburst for precise editing and Flare for faster everyday generation. | Documentation still acknowledges text-placement, composition, and recurring brand/character consistency failures. Best candidate for a complex brief, not a substitute for proofreading. | ChatGPT web/iOS/Android; Images API and image tool in Responses. ChatGPT availability does not identify the exact API variant used for every request. [S05] [S06] [S08] [S73] |
| **Gemini Nano Banana 2.1**; **Nano Banana 2 / Pro / Lite** | Conversational editing, multi-image combinations, reference consistency, typography and infographics; 2.1 supports 1K/2K/4K and up to 14 references. Good for a coherent illustration series and adapting a background to several crops. | “Up to” reference limits do not ensure perfect likeness. Search grounding does not clear the copyright of retrieved images. Free app access and paid API access have different quotas and data terms. | Gemini app, Flow where offered, AI Studio/developer API, Google cloud offerings. [S09] [S10] [S11] |
| **Imagen** | Historically useful for photorealistic text-to-image; may remain relevant in existing cloud or partner workflows. | Retired in the Gemini API. **[UNVERIFIED]** current cross-platform availability/version and pricing were not established; no new beginner workflow should depend on an old Imagen tutorial. | Check the specific cloud/partner model selector. [S29] |
| **Midjourney V8.2** | Campaign moodboards, expressive illustration, art direction, stylized hero imagery; personalization and the new Edit Model support style development. | Finishing exact names, grids, and logos is better done in a design editor. Older Omni/Character Reference instructions do not describe the new V8.2 editing workflow. No dependable free web tier. | Midjourney web and Discord. Its guidelines explicitly say there is no API except rare expressly granted exceptions and prohibit unauthorized automation/third-party apps. This resolves the earlier API uncertainty. [S12] [S13] [S95] |
| **FLUX 3 Image; FLUX 3 Image Klein; FLUX.2** | FLUX 3 Image advertises bounding-box composition, high resolution, and precise editing. Klein supports generation/editing and up to ten references; useful for repeatable brand assets and technical workflows. FLUX.2 remains relevant in existing integrations. | Model names and licenses differ substantially; “FLUX is free” is inaccurate. Some help articles still describe FLUX.2 as newest because they predate the October image rollout. | BFL playground/API; Klein weights and compatible local tools; licensed deployments for other weights. [S14] [S15] |
| **Ideogram 4.5; 4.0** | Typography, poster/packaging concepts, composition, branding. 4.5's Precise Edit targets accumulated drift across edits; native 2K and optional references are documented. 4.0 offers layout-oriented open weights. | Vendor claims about unchanged pixels/artifact elimination are not independently validated here. Small text and accents need review. Downloadable 4.0 weights have different rights from hosted app/API outputs. | Web, mobile app, API/MCP; 4.0 downloadable weights with the appropriate license. [S16] [S17] [S18] |
| **Recraft V4.1 / Utility / Vector / Flash** | Vector logos and icons, style systems, graphic art; Utility for more predictable briefs, Flash for inexpensive exploration. A particularly relevant choice when editable SVG matters. | Native SVG still needs design and trademark review. Free-plan outputs are public, owned by Recraft, and not licensed for commercial use. Avoid preparing final conference artwork on that tier. | Recraft Studio and API; raster/vector variants are distinct. [S19] [S20] [S21] |
| **Adobe Firefly Image 5**, with older Image 4/Ultra still listed | Generative Fill, expanding/correcting backgrounds, photo compositing, and existing Adobe workflows. Adobe's own Firefly training approach emphasizes licensed/public-domain material. | That training statement is Adobe's claim about **its own models**, not every partner model in Firefly. Adobe's commercial-use position is not a blanket guarantee that every generated logo/face is lawful. | Firefly web/mobile, Photoshop/Express integrations, enterprise services. Model availability depends on the host app. [S24] [S26] [S27] |
| **Meta AI Imagine / Muse Image** | A readily discoverable option for ideas and social-style images; Meta advertises reference composition, precise edits, and free consumer image creation. “Imagine” is an experience/feature name, not a safe assumption about the underlying model. | General Meta AI availability/free access in Brazil is confirmed; **[UNVERIFIED]** the exact Muse/Vibes rollout to a Brazil account, stable quotas, commercial terms for each surface, and any public Muse API price. Do not borrow Llama's license for Meta AI outputs. | Meta AI Brazil integrations began in October 2024 and its standalone Brazil app launched in August 2025. These announcements do not prove every 2026 media feature is available there. [S42] [S112] |
| **Canva AI / Magic Media / Dream Lab** | Best finishing environment for this team: templates, text, crops, speaker cards, consistent page layouts, simple animation, and asset reuse. Generate or import a background and finish inside the design. | These are product surfaces with changing underlying models, not a single foundation model. Quotas and premium functions differ; free layout editing does not imply unlimited free generation. | Canva web/mobile; generated material and template/library elements carry different terms. [S22] [S23] |
| **Seedream 5.0 Pro**, plus **5.0 Flash / Lite** | Pro emphasizes dense infographics, annotated edits, layer separation, realistic lighting, and multilingual copy. Useful for education-themed illustrations and layout exploration. Flash is a cheaper current endpoint. | A model's multilingual support is not a measured pt-BR accuracy result. Dense generated information is particularly prone to factual and legibility problems. Account verification/face rules can affect photo-based workflows. | ByteDance consumer surfaces where offered; BytePlus ModelArk/hosted partners. [S25] [S76] |
| **Qwen-Image-3.0 / Pro** and **Qwen-Image-2.1** | 3.0 emphasizes detailed text and knowledge-rich compositions; 2.1 unifies generation/editing, references, and transparent RGBA. Older Qwen-Image/Edit checkpoints may be useful locally. | Hosted 3.0 and downloadable 2.1 are different releases. Current 2.1 weights use a research/noncommercial license; do not carry over the license of an older checkpoint. Portuguese-specific quality is **[UNVERIFIED]**. | Qwen app/hosted APIs; 2.1 weights on the official Qwen Hugging Face organization. [S77] [S78] [S79] |
| **Stable Diffusion 3.5 / Stable Image Ultra/Core** and the open ecosystem | Local control, LoRA style tuning, masking, structural guidance, and reusable pipelines. Useful if someone already knows ComfyUI or a similar tool and has suitable hardware. | Setup, GPU memory, power, and learning time are real costs. Do not assume modern conversational editing or exact Portuguese lettering matches newer closed models. Check every checkpoint and LoRA's license separately. | Stability API/hosted apps; downloadable supported models. [S80] [S81] |
| **MAI-Image-2.6 / Flash** | Microsoft is among the current benchmark contenders; model pages describe image creation from text/photo prompts. Worth including in an advanced comparison, especially for a team already using Microsoft tooling. | **[UNVERIFIED]** exact Copilot account-to-model routing, free quota, commercial output license on each surface, and definitive per-image rate. An arena's standardized estimate is not a checkout price. | Microsoft Foundry and available Microsoft surfaces; confirm region and deployment access. [S01] [S02] [S82] |
| **Grok Imagine Image 2.0** | Another current high-ranking general-image contender with official generation/editing API access. Useful as an alternative when the main tool misses the desired look. | **[UNVERIFIED]** pt-BR accent performance and consumer free allowance. Grok.com/mobile's official consumer FAQ permits commercial use of outputs, including images, subject to terms; that does not establish every API, X or reseller contract. | Grok consumer products and official API. [S03] [S83] [S119] |
| **Luma UNI-1.1 / UNI family** | Reference-led image work and editing alongside Luma's video workflow; potentially convenient if already paying for Luma. | App model names and documented API IDs are not identical; check the exact endpoint. No reason for this team to subscribe solely to add another image generator. | Luma app/API. [S36] [S37] |

### 3.2 Image prices, free access, and commercial use

These are **observed public offers**, not promises of a specific Brazil account's allowance. A free allocation may be a one-time trial; an annual price is not a one-month purchase. “Commercial permitted” describes vendor permission, subject to terms and third-party rights, rather than a legal copyright guarantee.

| Provider / route | Free access | Representative paid price | Commercial-use position / caveat |
| --- | --- | --- | --- |
| OpenAI | ChatGPT Images is available on all tiers with plan limits; thinking images are on Plus/Pro/Business. No fixed daily free count verified. | GPT Image 2.5 standard API: $30/M image-output tokens; image input $8/M and text input $5/M. Size/quality determines token use. ChatGPT web supports BRL billing and Pix on Go/Plus/Pro; exact account price/tax **[UNVERIFIED]**. | OpenAI assigns output rights to the user to the extent law permits; rights are not necessarily exclusive. API billing is separate from ChatGPT, and ChatGPT's Pix support is not evidence of API Pix billing. [S05] [S06] [S84] [S96] |
| Gemini | Brazil's app page lists R$0 image generation/editing. The current image APIs do **not** list a free generation tier. | Nano Banana 2.1 output: $0.0336 at 1K, $0.0504 at 2K, $0.113 at 4K, plus input/thinking/grounding where applicable. Batch image rates are half. Brazil app plans observed: AI Plus R$24.99/month; Pro R$96.99/month. | API terms say Google does not claim ownership of generated content. Unpaid developer-service data may be used for improvement; consumer app privacy/terms are separate. [S10] [S85] [S86] |
| Midjourney | No current free web/Discord trial; a limited niji mobile trial is documented separately. | Basic $10/month, Standard $30, Pro $60, Mega $120. Annual equivalents are lower but prepaid. | Paid plans carry general commercial terms. Companies over $1M annual gross revenue need Pro/Mega. Images are generally public unless using applicable privacy options; Stealth is Pro/Mega. [S13] [S87] |
| BFL | Public demos may exist; no dependable recurring free hosted quota established. Self-hosted weights still require compute. | FLUX 3 Image 1K list price $0.048; 2K $0.10. The 50% October launch offer expired October 8. Klein starts $0.009/1K image. | BFL developer terms allow personal/commercial output use subject to restrictions. Klein's Kommunity license allows free commercial use below $5M annual revenue; other FLUX weights have different licenses. [S14] [S15] [S88] |
| Ideogram | Eligible accounts receive a variable weekly credit allocation; exact count/current 4.5 access **[UNVERIFIED]**. | Plus $20 month-to-month or $15/month billed annually. 4.5 API: prompt-only low $0.03, medium $0.06, high $0.10; high reference/edit tasks $0.22. $0.008 is for very-low reference/edit tasks, not all generation. | Hosted pricing FAQ allows commercial use. Downloaded 4.0 weights are noncommercial by default; obtain self-serve/enterprise commercial licensing or use a properly licensed hosted API. [S16] [S17] [S18] |
| Recraft | Official generator advertises 30 daily credits; current commercial restriction makes this a prototyping tier. | API Flash $0.007/image; V4.1 raster $0.035, vector $0.08; Pro variants higher. **[UNVERIFIED]** live Studio subscription checkout; an October secondary report lists Basic $12/month. | Free-plan images are not commercially licensed. Paid-plan images made while subscribed retain commercial rights after cancellation. API has its own developer terms. [S19] [S21] [S89] |
| Adobe | Limited free credits; a stable free count was not confirmed. Express has a separate continuing Free plan. | Firefly Standard page shows 2,000 credits; its Brazil checkout remains **[UNVERIFIED]**. Separately, Adobe's Brazil Express homepage advertises **Express Premium R$23/month** and **Firefly Pro R$95/month**, monthly without annual commitment. The comparison page can render USD; actual checkout is authoritative. | Non-beta Firefly outputs can be used commercially; check beta-specific notices. Third-party models/enterprise indemnity have separate conditions. [S24] [S26] [S27] [S102] |
| Canva | Free design plan and limited AI usage. Brazil pricing page describes up to 20 standard/premium AI uses; scope/reset varies by feature. | Brazil Pro R$35/month for one person; Pro+ R$49/person/month as displayed. Pix/Pix Automático are documented; recheck checkout. | AI terms and stock/library licenses are separate. Education Pro content is restricted to educational, noncommercial uses; an organizer's teacher account is not blanket conference-marketing permission. See §10. [S22] [S23] [S97] [S99] |
| Seedream | Consumer/partner trials vary; no universal recurring free quota verified. | BytePlus indexed pricing lists Pro $0.045 at the lower pixel tier and $0.09 at the higher tier; extra reference inputs after the first $0.003 each. Flash $0.018. **[UNVERIFIED]** full current table rendering and exact threshold: indexed versions disagree. | Proprietary hosted service. Exact applicable output/commercial terms and face permissions must be checked for the provider/account; **[UNVERIFIED]** blanket commercial license across all resellers. [S25] [S76] |
| Qwen | App/demo access may be free with changing quotas; local use has hardware and license costs. | Singapore hosted 3.0 $0.03/image, Pro $0.04 at 1K in the pricing table; other regions/resolutions/input charges differ. 2.1 Pro $0.04, Turbo $0.016, with small regional trial quotas. | **2.1 research weights are not a free commercial-production license.** Request a commercial license where required. Hosted service terms are separate. [S78] [S79] |
| Stability | API advertises 25 starter credits, not an unlimited free tier. | 1 credit = $0.01; Core $0.03, SD3.5 Large $0.065, Ultra $0.08/image. | Covered core weights are free for commercial users below $1M total annual revenue under the Community License; larger organizations need the applicable enterprise license. Other checkpoints may differ. [S80] [S81] |
| Microsoft / Grok / Meta | Exact current free allowances **[UNVERIFIED]**. Grok.com/mobile consumer commercial permission is confirmed; Microsoft/Meta route-specific terms remain unresolved. | Grok API Image 2.0: 1K low $0.04, medium $0.06; image input $0.01. Microsoft and Meta final rates not verified here. | Select the actual product contract. A model's leaderboard license label is not a substitute. [S82] [S83] [S119] |

### 3.3 Portuguese text: what is verified, and what is not

**Corrected in pass 2: Portuguese-inclusive tests do exist; a controlled ranking of today's pt-BR accent performance was not found.** Overall leaderboards and vendor multilingual claims do not establish that one model always writes `educação`, `inscrições`, `São Paulo`, or a speaker's name correctly. A supported prompt language does not guarantee correct letters inside pixels.

| Evidence found independently | What it establishes | Limits for this campaign |
| --- | --- | --- |
| **LingT2I**, August 2026 preprint, Tables 7/10 and Appendix C/D | Includes Portuguese text rendering. Portuguese precision: Nano Banana **0.57**, Qwen-Image **0.65**, FLUX.1-Krea **0.58**, EasyText **0.80**; Nano Banana English is 0.69. | Precision averages character/token edit-similarity and exact-sentence accuracy; **0.57 is not a 57% accent success rate**. Portuguese variety/individual `ç`, `ã`, `é` errors are not separately scored. The Nano Banana API snapshot is unspecified; these results cannot rank Nano Banana 2.1 against Images 2.5 or Ideogram 4.5. OCR/judging can also err. [S105] |
| **FaiscaI**, self-reported July 28–August 8, 2026 test | Reports Gemini accent errors in 2/3 Portuguese-poster attempts and Ideogram correct text in 9/12 text attempts. | A small first-person report, without a reproducible output corpus or precise model IDs. These are the author's observations, not independently reproduced accuracy rates. Its quotas/prices are not used here. [S106] |

**Conclusion:** this evidence supports proofreading and editable final text, not “Portuguese is unsupported” or a guaranteed winner. **[UNVERIFIED]** current comparative accuracy specifically for pt-BR diacritics. Test `Educação antirracista`, `Inscrições abertas`, `Participação`, `Consciência Negra`, `História e cultura afro-brasileira`, `5 e 6 de dezembro` and approved names. In particular, inspect `ç`, `ã`, `é`, `ê`, capitalization and line breaks; OCR alone can silently normalize a missing accent.

**Recommended practical order:** try ChatGPT Images or Nano Banana for a complete concept, Ideogram for highly stylized lettering, and Canva for final live text. Use the exact wording in quotation marks, ask for a small amount of large type, then compare every letter against the approved copy. If the same line fails twice, replace that text in the editor. This stopping rule is an editorial time-saving choice, not a model limitation measured at two attempts.

For a small internal bake-off, submit the same five tasks to each candidate, with two or three outputs per task:

1. Render `Educação que transforma`, `Inscrições abertas`, `São João`, `Ação e colaboração`, and `R$ 120,00`.
2. Make a speaker card using an authorized portrait and a long hyphenated name.
3. Recolor a background while preserving all existing copy and facial features.
4. Make four related illustrations from the same style reference.
5. Reframe one approved background to 4:5 and 16:9 without inventing event details.

Score exact spelling, layout, likeness, cultural fit, and usable outputs per minute. An attractive image with the wrong name fails. Record model/version, settings, input references, attempts, and total spend. This is a proposed team evaluation, not a test already performed.

## 4. Match the image workflow to the marketing task

| Deliverable | Recommended workflow | What the human checks |
| --- | --- | --- |
| Event announcement poster | Generate a text-free thematic background; add CONAFROEDU 2026, 5–6 December, **100% online**, CTA, and the real logo in Canva. Keep one clear hierarchy. | Facts, accents, contrast, Even3 link/QR destination, mobile readability. |
| Speaker cards | Start from a consented, current real headshot; crop/remove background with an appropriate tool; reuse one template for everyone. | Exact name, role, institution, approved topic, unchanged identity. |
| Quote cards | Select an actual quote from an approved transcript; use generated decoration only if useful. | Verbatim quote versus clearly labeled paraphrase; attribution and context. |
| Carousels | Draft a 5–7-page outline, create each page separately in the same template, and generate only the supporting illustrations. | One idea per page, consistent numbering, text size, factual claims. A Facebook multi-photo post may not preserve the same experience/order as an Instagram carousel: preview both. |
| Reel thumbnail | Use an expressive authorized video frame or approved portrait, short editable headline, and clear focal point. | How it crops in feed/profile surfaces; no misleading facial emotion. |
| Event/Page cover | Create separate wide layouts; keep essential content central and leave expendable decoration at the edges. Test mobile/desktop crops. | UI overlays, profile-image overlap, clipping, dates and logo legibility. |
| Past-event photo cleanup | Prefer ordinary exposure, white balance, crop, denoise, and redaction; use masked generative fixes for nonfactual background defects only when justified. | Faces, attendance, signs, venue, sponsor logos, and documentary truth. |
| Brand consistency | Build a simple style sheet and reusable layout; use the same approved reference image, palette, and illustration vocabulary. | A series that feels related even when the model changes. |

These are proposed production workflows, informed by the cited editing and design tools rather than claims that the platforms require this sequence. [S06] [S08] [S11] [S19] [S22] [S24]

### Working dimensions and crop caveats

The following sizes are **working/export masters**, with verified platform rules distinguished from team choices. Pass 2 loaded the official Page-cover, Instagram photo/Reel and Event-cover pages in a browser after the web extractor failed. An organic upload rule, a design recommendation, an ad specification and a visible crop are different things. [S55] [S56] [S57] [S116]

| Asset | Working size | Practical treatment |
| --- | --- | --- |
| Portrait feed poster / speaker card | **1080 × 1350, 4:5** | Recommended shared master for Facebook/Instagram, **not Instagram's maximum portrait ratio**. Instagram preserves supported photos 320–1080 px wide between 1.91:1 and **3:4**; at 1080 wide, height 566–1440. A 1080 × 1440 native Instagram photo is also supported. [S116] |
| Square card / carousel page | **1080 × 1080, 1:1** | Useful shared layout across channels; use the same size for all pages in a series. |
| Story / Reel | **1080 × 1920, 9:16** | Full-screen production choice. Instagram Reel help confirms ratios **1.91:1–9:16**, minimum **30 FPS** and minimum **720 pixels** resolution; it does not identify that last number as width or height. Keep text clear of interface overlays and preview the upload. Do not reuse an ad safe-zone diagram as an organic mandate. [S56] |
| Facebook Event cover | **1920 × 1005, about 1.91:1** | Team production default, **not an official required size**. The correct Meta Event-cover help page gives no pixel dimensions; it says the added cover cannot be resized and can be repositioned before saving. Retain a separate 1920 × 1080 presentation version. The prior S57 URL was invalid and is corrected below. [S57] |
| Facebook Page cover | **851 × 315**, or a **1702 × 630** double-resolution working file | Verified: minimum **400 × 150**; fastest-loading advice is **sRGB JPG, 851 × 315, under 100 KB**. Meta describes computer display at **16:9**, mobile **2.4:1**, left-aligned full bleed; mobile profile overlap about **40 px**. These are display descriptions, not a reason to stretch the upload. PNG may improve logos/text. [S55] |
| Landscape video / presentation still | **1920 × 1080, 16:9** | Retain alongside vertical cuts for full-talk/partner reuse. |

Do not upscale a 1K file and call it native 4K detail. Export graphic cards as PNG when text edges benefit; use JPG for photos when size matters. For video, start with a **1080 × 1920, 30 FPS MP4, H.264/AAC**, then test upload. Meta confirms MP4/MOV, H.264/AAC, stereo 44.1 kHz audio and **at or below 30 FPS** for edited Facebook uploads. Instagram Reel help specifies **at least 30 FPS**, so **30 FPS is the shared working target**. Facebook's 2025 announcement removes a separate Reel length/orientation restriction as its unified rollout reaches accounts; avoid the obsolete blanket “Facebook Reels max 90 seconds” rule. File-size, scheduling/API and account upload limits remain separate. The **15–60-second target is editorial**. [S56] [S117] [S120]

Instagram's Reel page recommends a **420 × 654** cover but also describes surface-specific display; retain a high-resolution cover and check feed/profile crops. Stories use the 9:16 working master above; **[UNVERIFIED]** exact current organic Story duration/file-size maximum across both apps. No paid-ads limits are presented as organic limits. [S56]

## 5. Image prompting and editing practices

### 5.1 A reusable brief structure

Use **purpose → subject → composition → style → color/light → output shape → exact constraints → references**. Identify which input is the style reference, which is the person, and which is the layout. Avoid contradictory requests such as both “empty minimalist background” and “many detailed elements everywhere.” Both OpenAI and Google's guides demonstrate explicit reference roles, localized edits, and iteration. [S08] [S11]

For photographic scenes, describe framing and light rather than a list of magic quality words: “waist-up, eye-level, soft window light, realistic skin texture.” For illustration, specify materials and shape language: “flat geometric shapes, subtle paper grain, two accent colors.” Do not require English: try natural pt-BR first; preserve Portuguese copy exactly if a model benefits from English scene instructions.

**Original example: text-free conference background**

```text
Crie uma ilustração editorial para o CONAFROEDU 2026, congresso online sobre
africanidades e educação antirracista no Brasil. Mostre educadoras e educadores
negros brasileiros adultos, com diferentes tons de pele, idades e cabelos
crespos, cacheados e trançados, em funções de pesquisa, docência e liderança.
Cena contemporânea de troca de conhecimento, com livros sem texto legível
e uma reunião online abstrata. Não represente participantes ou palestrantes reais.
Não acrescente símbolos religiosos, estampas ou trajes culturais genéricos.
Estilo: recortes de papel com formas simples,
textura discreta, acolhedor e profissional. Paleta: azul-marinho #17324D,
verde #3F8F79 e creme #F6F2E9. Composição vertical 4:5.
Concentre a cena na metade inferior e deixe a metade superior simples para o título.
Não inclua palavras, números, logotipos ou marcas. É uma ilustração conceitual,
não uma fotografia de um evento real.
```

The typography examples below are test strings. Publish only approved CONAFROEDU facts from the brief/organizers; the online event has no venue or host city to invent. Any sample price in an internal lettering test is not a ticket offer.

**Original example: a Portuguese typography test, not final event copy**

```text
Crie um conceito de cartaz vertical 4:5, com poucos elementos e bastante contraste.
Use somente estes dois textos, exatamente como estão escritos, sem traduzir:
Título: "Educação que transforma"
Chamada: "Inscrições abertas"
Preserve o ç, o ã e todos os acentos. Não invente data, cidade, preço,
patrocinadores, depoimentos ou logotipos. Deixe uma área livre no rodapé.
```

**Original example: controlled photo edit**

```text
A foto 1 é uma fotografia autorizada de uma edição anterior do evento.
Edite somente o espaço vazio da parede marcado na máscara para corrigir
uma mancha de iluminação. Preserve todos os pixels fora da área marcada
sempre que a ferramenta permitir. Não altere pessoas, rostos, roupas,
quantidade de participantes, placas, palco, logotipos ou objetos.
Mantenha o enquadramento e a aparência documental da fotografia.
```

The last instruction is a request, not a guarantee of pixel preservation. Compare the original and edited version at full size. If the tool changes faces or evidence of attendance, revert and use an ordinary retouching tool. OpenAI itself documents residual consistency and composition limitations. [S08]

### 5.2 A repeatable iteration method

1. **Write the facts first.** Maintain an approved text block for CONAFROEDU's title, names, dates, online format, authorized prices/offers, registration URL, and accessibility information.
2. **Generate alternatives cheaply.** Try two or three small concepts before asking for maximum quality or 4K. Keep one successful composition.
3. **Edit one problem at a time.** “Move the abstract shape to the right” is more diagnosable than “make everything better.”
4. **Return to the approved master.** Repeated edits can drift. Keep versions rather than editing an already degraded result indefinitely.
5. **Supply references with distinct roles.** “Image A controls colors; B controls the layout; C is the approved portrait.” References and available counts are model-specific.
6. **Add factual text and the real logo in the editor.** Keep them live until the final export.
7. **Make each aspect ratio deliberately.** Ask for more negative space/outpainting where appropriate; inspect that new edges do not invent documentary details.
8. **Proof at phone size and full size.** Check the smallest type, then inspect lettering, eyes, hands, logos, and the registration destination.

This sequence is an editorial synthesis of documented reference/editing tools. Identical seeds, prompts, or hex colors alone are not a brand system. Use the finished template and original source files as the source of truth. [S06] [S08] [S11] [S14] [S17]

### 5.3 Consistent campaigns without training a model

Create a one-page brand sheet: two main colors, one accent, two font families with Portuguese glyphs, logo files, safe margins, photo treatment, illustration examples, and three approved card templates. Keep the same layout for the full speaker series. Save one approved illustration as a style reference and describe its visual properties, rather than relying only on an artist's name.

**Original continuity prompt:**

```text
Use a imagem A como referência de estilo: mesma paleta, textura de papel,
espessura das formas e iluminação. Crie uma nova cena sobre formação continuada
de professores. Não copie os personagens nem a composição exata.
Mantenha o espaço vazio superior e não inclua texto.
```

For real speakers, consistency means preserving the real person, not generating a “similar-looking” replacement. For a fictional mascot, keep an approved character sheet with several views and reuse it. Fine-tuning/LoRA is an advanced option only if the team has recurring volume, licensed training inputs, technical skills, and an appropriate model license. [S15] [S18] [S80] [S81]

## 6. Video generation: the current landscape

### 6.1 Models, actual limits, and likely use

Native clip length is different from the length of a finished video assembled in an editor. Extensions can drift and cost extra. Native audio, an audio-input reference, lip sync, dubbing, and preservation of an existing soundtrack are different capabilities.

| Model / status on cut-off date | Strengths / best candidate tasks | Length, audio, vertical, and limits |
| --- | --- | --- |
| **Google Gemini Omni Flash 1.1** | Google's current default recommendation for conversational video generation/editing; plausible short inserts and iterative scene changes. | Guide confirms audio, **9:16/16:9**, and **3–10-second continuations**. **4K is explicitly upscaled**. Uploaded audio references and voice editing are unsupported. **[UNVERIFIED]** the earlier draft's 40-second total-extension ceiling; the current guide does not substantiate it. English is evaluated; other dialogue languages, including pt-BR, are not evaluated in the guide. [S31] |
| **Google Veo 3.1 / Fast / Lite** | Cinematic scenes, native dialogue/sound, first/last-frame direction, references and extensions in compatible routes. | Guide documents 8-second clips, landscape/portrait and 720p/1080p/4K options, with feature restrictions by variant. Gemini API preview endpoints close October 22. Current availability on other routes must be checked separately. [S32] |
| **OpenAI Sora 2 / Pro** | Historical model with synchronized audio and video; useful only when explaining older comparisons. | Product and API discontinued. There is no current Sora free tier or new production workflow to recommend. Avoid an unrelated reseller simply using the Sora name. [S07] [S30] |
| **Kling 4.0**; older 3.0/Omni in many integrations | Newly released choice for action, camera motion, references, and longer narrative shots. | Official release: up to 30 seconds native, up to 15 reference assets/10 keyframes, extensions up to two minutes. It says 4K/1080p/21:9 support **will** be supported: do not silently treat the roadmap as fully delivered. Exact current 9:16/audio/language matrix and plan access **[UNVERIFIED]** here. [S33] |
| **Runway Gen-4.5**, plus **Aleph 2.0** editing | Controlled short scenes, explicit camera/timing direction, image-to-video; a mature creative workspace for assembling variations. Aleph is a separate editing route. | Official Gen-4.5 guide: 2–10 seconds, 720p, paid Standard+, 12 credits/second. The aspect-ratio table lists T2V 16:9 and multiple I2V shapes including 9:16. Do not promise native vertical T2V without checking current UI. Native audio for this exact model is **[UNVERIFIED]** from the operational guide; use separate audio unless confirmed. [S34] [S35] |
| **Luma Ray3.2**, with Ray3.14 still listed | Reframe and modify existing footage, performance/scene transformations, multi-keyframe control; especially useful for an experienced editor. | T2V/I2V 5 or 10 seconds; 1080p options and up to 16 keyframes; 9:16 among supported ratios. New T2V/I2V has no native generated audio; Modify/Reframe preserve source audio. V2V up to 20 seconds depends on frame rate. Official page has conflicting Reframe duration details, so maximum needs confirmation. [S36] [S37] |
| **MiniMax H3**, accessed through Hailuo/partners or downloadable weights | Strong contender for image/video-reference control, realistic motion, synchronized audiovisual inserts, and branding experiments. | Current official weights **are released**. Model card confirms 4–15 seconds, 9:16 and stereo audio; base output is 768p and a separate H3-Regenerate stage produces 2K. Custom license and contradictory territorial FAQ require care; see below. Exact pt-BR dialogue/free hosted commercial access **[UNVERIFIED]**. [S39] [S113] [S114] [S115] |
| **Seedance 2.5** | Up to 30-second narrative promos, multimodal reference-driven scenes, timestamp/editing workflows, coherent motion. | Official product: 30 seconds in one pass and two extensions. Release/ModelArk documentation advertises up to 50 reference assets. Real-human inputs have permission/verification restrictions; do not assume any uploaded speaker photo is accepted. Verify 9:16 and exact resolution on the selected route. [S38] [S40] |
| **Wan 3.0 / Prime**, hosted | An important current audiovisual contender, useful for a 15–30-second concept with multimodal inputs. | Alibaba docs: 480p/720p/1080p and up to 30 seconds, multimodal inputs. API is hosted. Current downloadable 3.0 weights and an applicable self-host license **[UNVERIFIED]**; a similarly named repository is insufficient evidence. [S41] |
| **Wan 2.2**, downloadable | Local/open video generation, image-to-video and model-specific animation workflows for an already technical teammate. | Official repository publishes code/checkpoints under Apache 2.0. Different checkpoints provide different functions; do not assume hosted Wan 3.0's audio, 30-second limit, or quality transfers to 2.2. GPU/time costs remain. [S43] |
| **Pika 2.5 / Pikaframes / effects** | Playful image animation, transformations, motion/effect experiments. Current Pika is also a host for many other vendors' models. | Own-model pricing/API pages verify 2.5; an older FAQ still calls 2.2 newest. Exact current own-model length/vertical matrix **[UNVERIFIED]**. Current pricing explicitly excludes a commercial license on Free **and Starter**. [S46] [S47] |
| **Meta Movie Gen / Vibes / Muse Video** | Vibes is an available social creation/remix experience; Muse Video has been announced with native audio. | Movie Gen is a research lineage, Vibes a product, Muse Video a model: they are not interchangeable. July Muse announcement said “coming soon.” **[UNVERIFIED]** current Brazil rollout, guaranteed model selection, clip limits, API, and commercial rights. Treat as optional experimentation. [S42] |
| **FLUX 3 Video** | Current BFL video family, supporting generation, references/keyframes, continuation and synchronized audio. | Official model page: 5–20-second clips, native optional dialogue/effects/ambience, 9:16 in help docs; quality/resolution options vary. FLUX 3 **Video** is distinct from the later FLUX 3 **Image** release. [S14] [S90] |
| **Grok Imagine Video 1.5** | Another officially priced multimodal video option; worth including when already using Grok tooling. | Current capability guide confirms **1–15 seconds, 9:16, native audio/lip-synced speech** and native 1080p T2V/I2V. Reference-to-video is limited to 720p; Lite's 1080p is upscaled. **[UNVERIFIED]** pt-BR dialogue quality, free allowance and API/reseller-specific commercial contract. Grok.com/mobile consumer permission is separately confirmed. [S83] [S118] [S119] |

**Editorial preference for this conference:** generate abstractions, conceptual illustrations, transitions, and text-free inserts. Use real approved recordings for speaker messages and testimonials. CONAFROEDU is online: do not generate a venue, imply physical attendance, or depict a past edition unless organizers provide evidence that it occurred.

**H3 licensing correction:** the official main-branch LICENSE is dated August 2, 2026. It includes Brazil in its worldwide grant while excluding the EU, UK, South Korea and US; its FAQ instead describes the license as limited **to** those four territories. Those statements conflict. The LICENSE also restricts output display outside its territory, adds commercial conditions above $20M annual product/service revenue, and requires prominent machine-generation disclosure in public use. Weight availability is confirmed; **[UNVERIFIED]** reconciliation of territorial/output-distribution rules. Do not recommend unrestricted self-hosted H3 for globally visible campaign posts without clarification. Hosted API terms are separate. [S114] [S115]

### 6.2 Video prices and free tiers

| Provider | Verified price/access information | Practical budget/licensing note |
| --- | --- | --- |
| Google | Omni Flash API output $17.50/M video tokens; pricing page estimates about $0.10/second at 720p, excluding inputs/other usage. No free API tier. Brazil AI Plus includes 200 Flow credits; Pro 1,000. | Flow credits are not API dollars or seconds. Current per-model credit charge and Brazil account access must be checked. Veo preview pricing expires as a useful implementation choice with the endpoint shutdown. [S10] [S31] [S85] |
| Kling | Paid-service terms verify membership benefits and commercial-use permission for members. | Exact current 4.0 subscription/credit cost **[UNVERIFIED]**. Do not publish reseller prices or older $6.99 first-month promotions as official 4.0 renewal prices. Free allowance/commercial permission also unverified. [S33] [S91] |
| Runway | Free: 125 one-time credits. Standard $15/month or $12/month billed yearly, 625 monthly credits. Gen-4.5 consumes 12 credits/sec. API pricing is separate. | 625 credits yield about 52 generated seconds of Gen-4.5 before other uses, not 52 seconds of approved edited content. Free videos are watermarked; Runway's usage-rights page permits commercial use without a noncommercial restriction. [S34] [S35] [S92] |
| Luma | Plus $30 monthly or $25/month billed yearly; commercial use included. Current Ray3.2 API SDR: 720p $0.30/5s or $0.90/10s; 1080p $1.20/5s or $3.60/10s. | Longer clips are not simply a constant per-second price. Native audio is absent in new Ray generation. No dependable recurring free plan verified on the current pricing page. [S36] [S37] |
| MiniMax H3 / Hailuo | Official platform's indexed table lists $0.08/sec at 768p and $0.13/sec at 2K, with extra input-material fees. | **[UNVERIFIED]** current selectable 768p billing/availability: the direct pricing URL redirected and other sources report beta conditions. Budget against the actual quote. Exact Hailuo free/member commercial rights need checking; unrelated MiniMax audio-app terms cannot settle video/API rights. [S39] [S93] |
| Seedance 2.5 | BytePlus indexed price is token-based and differs by resolution and presence of video input; at 1080p without video input, $11.70/M tokens is listed. | Do not convert this to a fixed clip price without the provider calculator. Full table rendering/current consumer free allowance/commercial contract **[UNVERIFIED]**. Luma's hosted route has its own explicit commercial plan and different credit rates. [S36] [S38] [S76] |
| Wan 3.0 | Singapore list rates: $0.05/sec 480p, $0.10 720p, $0.20 1080p. Model Studio lists a 30-second trial quota in Singapore with expiry/eligibility conditions. | Input video plus output video are billable for relevant tasks. An earlier 30%-off launch offer ended September 24; use list price unless console confirms a new offer. Applicable hosted terms still matter. [S41] [S79] |
| Pika | Current page: Free 0 monthly credits, packs only; Starter $10/month, 900 credits; Creator $35/month, 3,150 credits. | Both Free and Starter explicitly lack a commercial license; Creator includes it. This supersedes old “free 80 credits/month with commercial use” comparisons. Credits vary by model; app packs and API billing are separate. [S46] [S47] |
| BFL FLUX 3 | Draft HD $0.06/sec; standard HD $0.17/sec, FHD $0.29/sec; V2V more expensive. Native audio is included without a separate charge. | At standard HD, 5 seconds is $0.85; no subscription is required. Use the appropriate developer terms. [S90] [S88] |
| Grok Imagine Video 1.5 | API output **$0.08/sec at 480p, $0.14 at 720p, $0.25 at 1080p**, plus applicable media-input charges. | A 5-second 720p draft is $0.70 before inputs. Reference-video mode/resolution and consumer subscriptions differ; no verified recurring free allowance. [S83] [S118] |
| Meta / Sora / local models | Meta exact allowance/rights unverified; Sora unavailable; local weights may have no per-generation vendor fee. | Local does not mean zero hardware cost or unrestricted rights. Distinguish an actual checkpoint license from a product name. [S30] [S42] [S43] |

**Example cost discipline, calculated from published rates:** three 5-second FLUX 3 HD shots with three attempts each cost `3 × 5 × 3 × $0.17 = $7.65` in generation charges. Three 10-second Wan 3.0 720p outputs with three attempts each cost `$9.00` at the Singapore list rate, excluding input-video charges. These are arithmetic scenarios, not forecasts of an acceptable-result rate. [S90] [S41]

Use a small attempt budget per shot. Generate drafts, approve one direction, then render final quality. Do not subscribe to several tools to make one teaser; a finished promo can also be a sequence of real photos with editor-based motion and a recorded voiceover.

## 7. Adjacent tools: avatars, dubbing, captions, clipping, and music

### 7.1 Editing and presentation tools

| Tool | Relevant use | Current cost / free limits | Rights, language, or workflow caveat |
| --- | --- | --- | --- |
| **HeyGen** | Approved speaker digital twins, script-to-presenter video, translation/lip sync. | Pricing page: Free 3 watermarked videos/month up to 1 minute; newer help says region-dependent 1–3. Creator $29/month, 600 credits; Pro $49/month, 1,000. New plans use credits rather than a blanket unlimited offer. | Translation explicitly includes Portuguese (Brazil and Portugal). Use pt-BR deliberately. Video-based digital twins require a consent recording from the actual person. Exact free export/commercial terms **[UNVERIFIED]**; paid-feature rates vary. [S44] [S45] [S58] |
| **Synthesia** | Polished scripted explainers, organizer updates, multilingual presentation. | Public page: Basic $0 with a monthly allowance; Starter $29 month-to-month; Pro $89. Page shows inconsistent credits/annual fields, so exact current minute allocation is **[UNVERIFIED]**. | Download/removal of logo are paid-plan features. Stock, synthetic and custom avatars have different permissions; stock-avatar promoted/paid advertising needs express permission. Organic permission does not imply permission for a later boost. [S59] [S60] |
| **Captions** | Caption styling, editing, digital twins/AI actors, and long-video clips. | iOS Max $24.99/month with 500 credits; Frontier $69.99 and higher tiers. | Website explicitly says displayed features/prices reflect iOS. Android/web parity, free export, pt-BR dialect quality, and stock-actor commercial scope **[UNVERIFIED]**. Review eye-contact/lip/identity edits before using a real speaker. [S61] |
| **CapCut** | Accessible timeline editor for vertical cuts, subtitles, reframing, transitions, and photo motion. | Free editing exists, but AI/export features and limits vary. Official April 2026 Brazil help directs users to checkout for current region/platform/tax pricing. | Test a 15-second captioned export before editing a whole talk. Use only licensed templates/fonts/music; a Pro subscription does not erase restrictions on a particular asset. [S48] [S53] |
| **Adobe Express Free** | Alternative browser/mobile editor for announcement cards, photo layouts and short videos. | Official July 2026 free-plan help confirms standard editing, templates, fonts, 5 GB storage and scheduling one account per social network. Free signup needs no credit card; AI allowances are limited. | Use the Free asset filter and test the intended export. This is a continuing free plan, distinct from a timed Premium trial. Its Brazil pricing page can localize inconsistently; exact paid checkout is not inferred from a USD-rendered page. [S101] [S102] |
| **OpusClip** | Suggesting talk highlights, reframing, and captioned short-form candidates. | Free 60 credits/month, watermark, no editing, clips cease to be exportable after 3 days. Starter $15/month, 150 credits; Pro $29/month, 300, or $14.50/month with annual payment. | Virality scores are the vendor's heuristic, not proof a Brazilian education audience will engage. Review framing, sentence boundaries, factual context, and Portuguese transcription. [S49] |
| **Descript** | Transcript-led editing, clip suggestions, audio cleanup, captions, and translation. | Free plan exists. Hobbyist displays $24 monthly/$16 annual equivalent; Creator $35/$24. Media hours and AI credits are different quotas. | Business page lists dubbing/translation with proofreading. Confirm Portuguese support and the specific plan before uploading the full talk. Do not use regenerated speech to put new claims in a speaker's mouth. [S50] |
| **ElevenLabs Dubbing** | Translation/voice workflow when audio matters more than a talking avatar. | Dubbing is available on free and paid plans; free dubbing has a watermark. Exact applicable paid dubbing price **[UNVERIFIED]**. | Official help says Free has no commercial license; paid non-beta services generally include commercial permission, with service-specific terms. That excludes Free for this campaign. Verify Brazilian pronunciation and speaker consent. [S51] [S52] |

**Dubbing is optional.** For an English-language speaker, start with their original audio and accurate pt-BR captions. That is cheaper and avoids making the speaker appear to have personally spoken Portuguese. Use dubbing if it improves access and the speaker approves the translation and synthetic voice/likeness use.

**CapCut status/terms, pass 2:** Brazil-facing help still markets the editor; there is no basis here to call it discontinued in Brazil. International terms dated April 15, 2026 state that users retain their content but grant a broad, perpetual, transferable service license; uploads are considered nonconfidential. That is material when choosing whether to upload an unreleased speaker recording. The January 22, 2026 international Materials Agreement restricts ordinary Sounds to noncommercial entertainment and Commercial Sounds to CapCut/TikTok/TikTok for Business unless separately cleared. “Commercial” is not Facebook/Instagram/WhatsApp music clearance. Use original/independently licensed audio and assets, or a Meta-cleared track only on its permitted surfaces. **[UNVERIFIED]** which exact localized agreement, feature paywall, price and Pix option a Brazil account receives. [S48] [S103] [S104]

### 7.2 A careful pt-BR localization process

1. Produce a transcript in the original language and correct names, institutions, acronyms, and specialist terms.
2. Translate meaning into natural Brazilian Portuguese, preserving qualifications and the speaker's intended tone.
3. Ask a native reviewer to check expressions, dates, numbers, and education terminology; maintain a pronunciation glossary.
4. For dubbing, approve the translated script before synthetic speech, then review the actual rendered audio for stress, pauses, names, and timing.
5. Check mouth synchronization, speaker assignment, and any invented speech in silent/background portions.
6. Keep an original-audio version and editable subtitle file. Label translated/synthetic audio clearly and obtain final approval.

This is a recommended editorial workflow, supported by the existence of translation, dubbing, and proofreading tools rather than a promise of automated accuracy. [S44] [S45] [S50] [S51]

Suggested label: **“Dublagem em português criada com IA e aprovada pelo palestrante.”** For a wholly synthetic presenter: **“Apresentador virtual. Texto revisado pela organização.”** These are team transparency practices; they do not replace Meta's platform disclosure controls.

### 7.3 Music generation and licensing

| Option | What the current evidence supports | Recommendation |
| --- | --- | --- |
| **Suno** | Current pricing lists v6-mini on Free, v6/v6-wild on paid plans. Free has 50 daily credits, **no monthly downloads and no commercial rights**. Pro displays $8/month annual equivalent, 2,500 credits and 20 monthly downloads; Premier $24 annual equivalent and 60 downloads. Current paid-rights help grants commercial use to songs downloaded while subscribed. [S62] [S63] | Optional paid custom instrumental track only if needed. Verify the actual track's rights, download entitlement, and plan at generation/download time. The older no-retroactive-rights help and newer download-based wording should not be treated as an automatic license upgrade for an old Free song. [S64] |
| **Udio** | Official February 2026 transition help says audio/video/stem downloads are disabled; the WMG help still describes transition terms. [S65] | **Do not build an MP4 soundtrack workflow around Udio** without verifying current authorized export and commercial permission. Exact current post-transition pricing/model/export restoration is **[UNVERIFIED]**. A shareable Udio URL is not a downloadable synchronization license. |
| **Meta Sound Collection** | Meta help describes commercial uses for its collection, distinct from the ordinary licensed music library's personal/noncommercial scope. [S54] | Best first check for Meta-only publishing. Confirm track and surface permission; do not assume the same file is licensed for WhatsApp, YouTube, a website, or venue playback. |
| **CapCut commercial music** | The current international agreement, not only the older one, restricts Commercial Sounds to CapCut/TikTok/TikTok for Business without separate clearance. [S104] | **[UNVERIFIED]** exact Brazil account/track agreement. Use original audio or a separately cleared soundtrack for Facebook/Instagram/WhatsApp. |
| **Original/commissioned music** | Rights depend on the agreement, including composition and recording rights. | Good cross-platform choice when the team has explicit permission covering promotional synchronization, edits, channels, and duration. Keep the permission record. |

Commercial-use permission from a generator is not the same as owning enforceable copyright in a fully AI-generated composition, and it does not license someone else's uploaded song or a recognizable copyrighted melody. Avoid prompts naming a famous singer or asking for a close imitation of a known conference jingle. Suno explicitly distinguishes commercial permission from copyright protection. [S63] [S66] [S67]

For an education conference, a clean real voice with a restrained licensed instrumental is usually a better editorial choice than a busy AI song competing with the message. Generated native audio in video also needs listening review; plausible background speech can contain unintended words or claims.

## 8. Concrete video workflows

The timings, quantities, and stopping rules below are proposed production recipes, not measured platform-performance guarantees. The factual inputs always come from approved conference materials.

### 8.1 One long speaker talk → several useful Reels

**Inputs:** permission to reuse the talk, original video/audio, any slide permissions, speaker's approved name/title, and a reliable transcript. A public upload alone is not permission to edit/repost it.

1. **Transcribe and correct the source.** Correct people, cities, education terms, and numbers before asking AI to pick highlights. Keep timestamps tied to the original recording.
2. **Ask for candidates, not fabricated quotations.** Request a teaching tip, a surprising insight, a useful story, an audience question, and an invitation-related excerpt. Each should stand alone.
3. **Verify by watching around each selection.** Include enough lead-in to avoid changing meaning. Reject extracts that omit a necessary caveat or rely on an unseen slide.
4. **Edit three initial clips.** Try a short practical tip, a story, and an opinion with its evidence. There is no need to publish every AI-selected segment.
5. **Reframe deliberately.** Use 9:16 with the face and any necessary slide in view. Switch to a split layout rather than losing essential content in a tight crop.
6. **Caption in pt-BR.** Use short readable lines, high contrast, and a placement clear of the mouth, key slide text, and platform overlays. Correct every proper noun and accent.
7. **Add a short end card.** Use the real logo, approved event details, and one action such as “Veja a programação no evento do Facebook.” Use the relevant real destination.
8. **Review accessibility and consent.** Test sound-off comprehension, inspect cut joins, and seek speaker approval where agreed.
9. **Export/download promptly.** In particular, OpusClip Free's export window is short. Keep a clean master and caption file if the editor supports it. [S49]
10. **Measure useful response.** Record watch behavior available in the account, saves/shares, meaningful comments, event/registration actions, and which question viewers asked. Avoid claiming a causal lift from one small organic post.

**Original clip-selection prompt:**

```text
Você é editor de conteúdo de um congresso de educação no Brasil.
Use SOMENTE a transcrição abaixo. Selecione até cinco trechos que possam virar
vídeos de 20 a 45 segundos para professores. Para cada trecho, informe:
timestamp inicial/final, palavras exatas, ideia central, contexto necessário,
uma sugestão de título curto e por que ele pode ser útil para esse público.
Não invente falas, dados nem timestamps. Não corte ressalvas que mudem o sentido.
Se os timestamps não forem confiáveis, diga isso. Não dê uma pontuação de
viralização como se fosse uma previsão.
[INSERIR TRANSCRIÇÃO AUTORIZADA COM TIMESTAMPS]
```

CapCut/manual editing is the free-first route; OpusClip accelerates candidate discovery and reframing; Descript suits transcript-first editing. Feature paywalls change, so test the smallest representative export before committing the team to a full workflow. [S48] [S49] [S50]

### 8.2 A 15–30-second event teaser without relying on generated footage

**Proposed 24-second storyboard:**

| Time | Visual | Audio / editable text |
| --- | --- | --- |
| 0–3s | Approved real speaker or clearly conceptual illustration | “Como fortalecer a educação antirracista?” |
| 3–9s | Consented images of real educators, or text/shape animation | “Africanidades, participação e formação docente” — editorial campaign wording to approve. |
| 9–16s | Real approved speaker portraits or a phone invitation | Names/topics; no fabricated endorsement or affiliation. |
| 16–20s | Conceptual illustration or a simple date card | “5 e 6 de dezembro de 2026 · 100% online” |
| 20–24s | Still end card | “CONAFROEDU 2026 · Inscreva-se pelo Even3” and the approved destination in the caption. |

Make it with a layout editor's pans, fades, and simple shape motion. Use the organizer's real voice or speaker audio. A text-only end card held long enough to read is useful; every second does not need motion. Export square/portrait card variants from the same approved design.

If generated footage adds value, replace only one illustrative 3–5-second shot with a clearly conceptual visual. Generate the shot separately, add text/music in the editor, and disclose synthetic realistic content as applicable. This reduces the number of facts the generator could invent.

### 8.3 A generated insert, using a shot-first workflow

1. Write one shot with one main action and one camera instruction.
2. Choose the access route based on price, commercial terms, and the required aspect ratio/audio.
3. If visual consistency matters, approve the starting still first and use I2V.
4. Generate a low-cost draft. Evaluate hands, faces, objects, movement, and sound.
5. Change only the failed instruction. After a small agreed attempt budget, use a real clip or simple animation.
6. Add the real logo, event copy, captions, and soundtrack afterward.

**Original prompt for conceptual B-roll:**

```text
Vídeo conceitual vertical 9:16, de 5 segundos, para uma campanha de um congresso
de educação. Uma mesa organizada com cadernos sem texto e formas de papel
colorido que se conectam suavemente, simbolizando colaboração entre professores.
Um único movimento lento de aproximação da câmera. Luz suave, paleta azul-marinho,
verde e creme, estética editorial de papel. Preserve a forma dos objetos.
Sem pessoas identificáveis, texto, números, marcas ou logotipos.
Áudio: apenas um ambiente discreto; sem fala nem música reconhecível.
```

**Original dialogue test, only for a fictional disclosed presenter:**

```text
Uma apresentadora virtual adulta, claramente identificada como personagem de IA,
olha para a câmera em um fundo simples. Plano médio estável, 8 segundos, 9:16.
Ela diz em português brasileiro, com voz natural e ritmo calmo:
"Vamos conversar sobre o futuro da educação?"
Não acrescente outras falas nem gere legendas dentro do vídeo.
```

Native audio does not guarantee Brazilian pronunciation or a correct lip match. Test a short line before buying many generations. Use separate approved voiceover if the tool cannot reliably deliver the message. [S31] [S32] [S39]

### 8.4 Animate an event poster safely

**Preferred approach:** separate the poster into background, decorative shapes, real portrait, logo, and live text; animate those layers in Canva or a video editor. A slow scale on the background, a brief title entrance, and a stable CTA can produce a good teaser without resynthesizing the lettering or a speaker's face.

**If using image-to-video:** export the **text-free background**, animate only that, and put the unchanged final text/logo back on top in the editor. Keep portraits still unless the speaker explicitly authorized synthetic facial animation.

**Original motion prompt:**

```text
Use esta ilustração como primeiro quadro. Anime apenas as pequenas formas de papel:
elas flutuam lentamente e retornam à posição inicial. Câmera fixa.
Mantenha composição, cores, contornos e iluminação. Não crie pessoas, palavras,
logotipos ou objetos novos. Movimento muito discreto, sem cortes bruscos.
```

Do not upload a finished text-heavy poster and assume every frame will retain its exact accents, URL, and sponsor marks. I2V guidance should focus on movement because the source already supplies the scene; the operational Runway guide explicitly makes this distinction. [S35]

### 8.5 A speaker co-marketing package

Prepare one approved portrait card, a vertical Story, an optional 15-second real invitation clip, a short pt-BR caption, and the real event/registration link. Give the speaker an editable text option and a ready-to-post export. Reuse approved material across partners without creating invented testimonials. This package is an editorial recommendation; no special generative subscription is necessary.

### 8.6 Beginner recipes: one usable asset in under 30 minutes

These are **time-boxed editorial recipes**, not timed usability tests. Start with a signed-in free account, stable internet and approved copy/photo already available. Account setup, consent collection and long-video upload/processing are outside the estimate. Button names can vary by device. If a Pro badge/payment screen appears, use the manual fallback rather than starting a trial.

**A. CONAFROEDU announcement card — 20–25 minutes, Canva Free, R$0**

1. **0–3 min:** Open Canva → Create a design → Custom size → **1080 × 1350 px**. Start blank or use a free social-post template.
2. **3–7 min:** Upload the approved logo and one real, consented educator/speaker photo. Keep the photo intact; a simple rectangular crop avoids a paid background-removal dependency. If no photo is approved, use solid color and simple shapes.
3. **7–13 min:** Add editable text: `CONAFROEDU 2026`, `Desenvolvimento, Participação e Educação Antirracista`, `5 e 6 de dezembro de 2026`, `100% online`, `Inscreva-se pelo Even3`. Use two text sizes, strong contrast and generous margins. Do not add a guessed price or deadline.
4. **13–17 min:** Paste the approved Even3 link into the planned post caption. Check it opens the right event. The caption should repeat the key information for accessibility; a QR code need not be the only route from a phone.
5. **17–22 min:** A second volunteer checks `Participação`, `Educação`, names and dates at phone size. Share → Download → PNG. If premium elements block export, replace them with free shapes/your own assets.
6. **22–25 min:** Duplicate the design as the reusable master. If making a Story, create a separate **1080 × 1920** canvas and paste/rearrange the elements manually; one-click Resize need not be free. Preview each platform crop before publication. [S22] [S99]

**B. Real speaker phone invitation — 25 minutes, CapCut basic editing, R$0 if this account exports the selected features**

1. **0–4 min:** Record one 15–20-second vertical invitation in a quiet room, facing window light. Example for the organizer: `O CONAFROEDU 2026 será nos dias 5 e 6 de dezembro, totalmente online. Vamos conversar sobre africanidades e educação antirracista. Confira a programação e inscreva-se pelo Even3.` Only call someone a participating speaker if confirmed.
2. **4–8 min:** CapCut → New project → import the approved clip → select **9:16**. Trim silence at the start/end; keep normal speech and the person's actual appearance.
3. **8–15 min:** Captions → Auto captions → Portuguese if available → proofread every line. If unavailable/paid, add a few short manual subtitle text blocks and align them by listening. Avoid face-retouching, eye-contact and voice-cloning effects.
4. **15–19 min:** Add the speaker's exact approved name and a 3-second end card with `CONAFROEDU 2026 · 5–6/12 · Online`. Use original speech; omit library music to keep this simple.
5. **19–23 min:** Export a short test at **1080p/30 FPS**. If the selected feature requires Pro, remove it; manually caption or use Adobe Express standard editing if the account permits the needed export. Do not promise a watermark-free template export.
6. **23–25 min:** Watch once with sound and once muted; inspect subtitles and crop. Keep the clean file, add the Even3 link in the post caption and use Meta disclosure tools if any qualifying synthetic audio/video was added. [S48] [S101] [S103] [S104]

**C. Three-card animated teaser — 20–25 minutes, Canva Free or Adobe Express Free, R$0**

1. **0–4 min:** Create a **1080 × 1920** video project with three pages/cards: `Educação antirracista em diálogo`; `CONAFROEDU 2026 · 5 e 6 de dezembro · 100% online`; `Programação e inscrições no Even3`.
2. **4–10 min:** Use the approved palette/logo, simple shapes and one approved real photograph or text-free illustration. Give each card 5–6 seconds; keep dates/CTA stationary long enough to read.
3. **10–15 min:** Apply one free fade or simple entrance if available. Keep portraits still. Record an optional original voiceover; otherwise produce a silent version with complete on-screen text.
4. **15–20 min:** Export MP4, check readability and every accent, and preview on a phone. Replace premium assets if export is blocked.
5. **20–25 min:** Save the editable project and a caption with the Even3 link. Reuse this layout for a **20 November** reflection on Consciência Negra with an approved education-focused message; avoid turning the date into a generic “sale” visual. [S22] [S101]

**Optional AI background:** replace the photo-placement step with at most **8 minutes** in ChatGPT/Gemini Free; keep the whole task below 30 minutes. Paste §5.1's text-free prompt, make at most two attempts, review representation, then download/import one image. If quota or quality blocks progress, use a plain background. Final Portuguese remains editable.

## 9. Ethics, Meta policy, consent, privacy, and copyright

### 9.1 Meta's “AI info” disclosure

Meta's 2026 policy communication reiterates an “AI info” label for detected/generated content and says users must use disclosure/label tools for organic posts with photorealistic video or realistic-sounding audio that was digitally created or altered; penalties may apply for failure to disclose. Its broader labeling policy explains industry signals and self-disclosure, with different treatment of generated versus merely edited media. The policy's applicability is broader than the election examples in the 2026 article. [S68] [S69]

For this team:

- Use the platform's available disclosure control for qualifying synthetic realistic video/audio, including an AI dub or a speaker avatar. This is the explicit organic self-disclosure requirement; automated labeling also covers AI images. Do not rewrite it as an unsupported rule that every decorative AI still requires the same manual toggle.
- Add plain-language context when a reasonable viewer might mistake an illustration for a real venue/event/attendee.
- Preserve provenance and attribution where applicable. Canva's current terms specifically prohibit removing provenance/metadata tags from its AI outputs. [S23]
- Do not promise that a label will appear identically on every cross-posted surface. Exact current pt-BR button wording and Page scheduling support are **[UNVERIFIED]**; check the final publish UI.
- Do not tell the team an AI label automatically reduces reach. That causal claim is **[UNVERIFIED]**. Meta's separate originality/spam guidance supports authentic contributions; it does not establish a universal penalty for responsible AI use. [S70]

An AI label does not authorize deception, impersonation, infringement, or nonconsensual likeness use.

### 9.2 Speakers and attendees

Obtain explicit permission for each material use: recording, clipping, promotional distribution, photo editing, translation, synthetic dubbing, voice cloning, and avatar creation. A standard photo/recording release should not be assumed to authorize a digital twin. Treat approval of a translation separately from approval to make a voice/face say it. HeyGen's required identity/consent recording is one product's verification step, not a replacement for the team's release and scope agreement. [S45]

Keep speaker quotes traceable to the talk. Do not generate an audience testimonial, a crowd, a certificate, a sponsor relationship, an institutional endorsement, or a venue image that viewers could interpret as proof. Do not “improve” diversity or attendance by altering documentary photographs. Use conceptual art with an appropriate label when real photos are unavailable.

### 9.3 LGPD and an education audience

Brazil's LGPD defines identifiable-person information as personal data, imposes purpose/necessity/transparency/security principles, and gives special treatment to biometric data when linked to a person. A normal photo is not automatically a biometric identifier in every use, but face/voice-cloning workflows require particular care. Children's/adolescents' data involve a best-interests requirement; ANPD guidance does not reduce every child-data case to one universal consent rule. [S71] [S72]

Recommended operating practice: use approved adult assets, restrict access to raw recordings, keep releases and retention dates, check vendor data use and cross-border processing, and avoid uploading children's faces/voices or private attendee lists into consumer generators. This is a cautious production policy for the team, not a claim that every incidental background photograph has the same legal requirements.

### 9.4 Commercial permission versus copyright

Separate four questions:

1. May this account/service tier be used to promote the conference?
2. Does the exact model/checkpoint/asset license permit that production use?
3. Do we have rights to every input, including photos, slides, logos, music, and voices?
4. Is the output protectable and sufficiently original, and does it avoid third-party rights?

Brazil's copyright statute describes an author as a natural person. The US Copyright Office's AI report also distinguishes human creative contributions from purely generated material, but US policy is not Brazilian law. **[UNVERIFIED]** the precise Brazilian copyright status of any particular AI-only output or trademark registrability cannot be settled by a vendor's “you own it” statement. Retain human-authored layout/copy/source files, use the real approved logo, and seek specific advice if exclusivity or registration becomes important. [S66] [S67]

“Organic,” “free event,” and “no ad budget” do not by themselves establish a noncommercial license exemption. The recommended policy for this project is to use commercially permitted production tools and assets, even when a post is unpaid.

### 9.5 Black people and Afro-Brazilian subjects: evidence and selection

**No current model is verified here as the “best” or bias-free generator of Black Brazilians.** Choose by control, cultural fit and approved outputs, rather than skin-tone realism alone. For CONAFROEDU, the first choice is **real consented photos and work by Black Brazilian photographers/designers**, finished with ordinary crop/exposure/text tools. Canva/Express manual layouts preserve the original portrait without asking a generator to reconstruct it. Nappy supplies free CC0 photos of Black/Brown people for personal/commercial use; it is an international library, so do not label a stock model “Brazilian,” a CONAFROEDU participant or a speaker without evidence. Copyright permission also does not establish endorsement. [S111]

| Model / tool family | Evidence of bias or capability | Practical choice for this event |
| --- | --- | --- |
| **GPT Image / ChatGPT Images** | A February 2026 preprint audited **GPT Image 1.5** and **Gemini 2.5 Flash Image** with 3,200 images/four neutral prompts, reporting strong light-skin defaults and different gender skews. This is version/task-specific, not an audit of Images 2.5. [S107] | Useful candidate for reference-led, localized edits and illustrations. Preserve the approved person's skin tone, facial features and hair; reject beautification/lightening or changed identity. |
| **Gemini / Nano Banana** | The same preprint documents predecessor bias. Google also acknowledged its **2024 Imagen 2** diversity adjustment could distort historical/cultural prompts. That incident is historical evidence, not proof of identical current behavior. [S107] [S110] | Useful editing candidate, with human review of Brazilian context. Request contemporary Afro-Brazilian educators directly; verify the result rather than assuming a neutral prompt produces an appropriate group. |
| **Midjourney / Stability** | A 2026 study of **Midjourney 6.1, Stability AI Core and DALL·E 3** found occupational, cultural and beauty stereotypes; prompt refinement reduced them in that experiment but could weaken contextual alignment. It does not rank current V8.2 or Images 2.5. [S108] | Try for clearly conceptual editorial illustration. Avoid generic “African tribal” styling; human art direction and a local reviewer are essential. |
| **FLUX, SD1.5/SDXL, Gemini, DALL·E** | A 2026 Americas study includes Brazil and finds nationality-based homogenization across these tested families. Automated race/gender/embedding categories are methodological simplifications, not a way to determine anyone's identity. Current model-version coverage is incomplete. [S109] | “Brazilian” alone is insufficient direction. Specify setting, profession, age and appearance respectfully, and check clothing, objects, roles and context. |
| **Firefly** | A March 2024 medical-professions test also found light-skin skew in Firefly 2; its results concern that version and narrow setting. Licensed training material is not a fairness benchmark for Image 5. [S121] | Useful for background work in an existing Adobe workflow. No verified current Afro-Brazilian quality advantage over the other candidates. |
| **Ideogram 4.5, Recraft V4.1, Seedream 5, Meta Muse, Grok Image 2, current video models** | **[UNVERIFIED]** reproducible current comparative tests specifically covering Afro-Brazilian representation were not located. Overall human-preference rankings cannot fill this gap. | Prefer text-free conceptual art or background edits. Do not recommend a model as culturally accurate on vendor samples alone. |

**Review with someone familiar with Afro-Brazilian education and culture:**

- Are Black people shown as teachers, researchers and decision-makers with agency, rather than only students, entertainers or people receiving help?
- Are skin tones, hair textures/styles, ages and body types varied without turning a real person's traits into an editable diversity target? Compare any edited portrait to its original, side by side.
- Is the setting recognizably contemporary and relevant to Brazilian education? Reject poverty/exoticism defaults and generic continent-wide costume or pattern mixtures.
- Do not add Adinkra, Kente, orixás or sacred imagery merely to signal “Africanidade.” Use a specific symbol only when its meaning, origin and suitability have been approved by knowledgeable organizers.
- Does the illustration remain visibly conceptual? Never use a synthetic educator as an actual speaker, an invented interviewee or evidence of community endorsement. Alt text should describe what is visible without inferring a real person's identity.

These are editorial checks tailored to the brief, not a scientific claim that a prompt eliminates bias. Use §5.1's pt-BR example as a starting brief; two attractive outputs are not a model fairness test.

## 10. A realistic zero-cost and low-cost setup

### Zero additional software spend

- **Layout:** Canva Free or Adobe Express Free using eligible free elements and manually maintained templates. Keep text, dates, logos, and portraits separate.
- **Image help:** ChatGPT/Gemini app free allocations for a small number of backgrounds/illustrations; verify the selected account's current limits and terms.
- **Video:** existing phone recordings, past-event clips, simple timeline/photo animation, and an editor the team already has; test caption/export availability first.
- **Audio:** original approved voice or Meta Sound Collection for authorized Meta uses; retain a music-free master for other channels.
- **Generation fallback:** reuse one approved illustration across multiple crops instead of regenerating each post. No synthetic video is required.

This setup follows observed free access, but it does not promise unlimited AI generations or every automatic feature for free. [S06] [S22] [S48] [S54] [S85]

### Brazil availability, BRL and Pix

| Option | What is verified for a Brazil volunteer | What remains account-specific |
| --- | --- | --- |
| **Canva Free / Pro** | R$0 basic design; published Pro **R$35/month**. Pix for one-time prepaid offers and **Pix Automático for recurring subscriptions/trials** are documented. | Actual checkout/plan eligibility and bank support. Pix Automático is a recurring authorization, not a one-time transfer. Do not assume every short-term offer is available. [S22] [S97] |
| **Adobe Express Free** | R$0, no credit card for Free; web/iOS/Android. Brazil homepage advertises Premium **R$23/month**, without annual commitment. | Premium trial/AI paywalls and exact checkout; comparison page can render another currency. No Pix support verified here. [S101] [S102] |
| **ChatGPT Free / paid web** | Free image access has plan limits. Official billing lists **BRL** and **Pix for Go/Plus/Pro**. | Exact Brazil paid price, quotas and tax were not checkout-tested. API charges are separate; no API Pix promise. [S06] [S96] |
| **Gemini app** | Brazil subscriptions page lists free image generation/editing; **AI Plus R$24.99/month**, **Pro R$96.99/month**. | Payment methods, tax and individual model/video quotas; **Pix unverified**. Do not confuse a free consumer app allowance with a free image API tier. [S85] |
| **Meta AI** | Meta confirms Brazil integration and standalone app availability; official Brazil communications describe free assistant access. | Muse/Vibes feature rollout, exact quota and production-use terms; use as optional exploration until the selected route is checked. [S112] |
| **CapCut** | Brazil-facing service/help and basic free editing are documented. | Paid BRL price, Pix, specific captions/export/watermark paywalls. Check a small export before spending editing time. [S48] |

**Budget choice:** begin at R$0 with real photos, editable text and simple motion. If paying, compare the actual localized monthly checkout. A USD API/list price does not prove BRL billing or Pix support. No VPN, unofficial reseller or shared paid login is required for these beginner recipes.

### Could the organizers get Canva Education or Nonprofits?

- **Education:** available free to verified active K–12 teachers and eligible school roles/institutions worldwide. University lecturers/students, adult-education organizations and a conference committee do not qualify merely because they work in education. A qualifying schoolteacher on the team may qualify individually; Canva must verify their credentials. [S98]
- **Usage is a separate question:** Education users may use Pro content only for educational, noncommercial purposes. The content license separately excludes promotional use of items marked **Education Content / Resource**. Use a separate appropriate account and commercially permitted assets for conference promotion when the Education grant does not cover it; do not assume an academic theme or unpaid Facebook post settles the license. [S99]
- **Nonprofits:** Canva advertises free premium/team access for **up to 50 users** for approved charitable nonprofits. Application requires official registration and governing documents, with Goodstack verification. Current criteria exclude universities, government-affiliated bodies, professional societies and certain member-benefit/research organizations. An informal volunteer committee is not automatically eligible; a genuinely eligible charitable host might apply. The brief does **not** establish CONAFROEDU's legal host/status, so qualification is **[UNVERIFIED]**. [S100]

**Practical next step:** organizers can identify the actual legal host and check its documents against Canva's current rules. Continue the six-week campaign with Free while any application is reviewed; neither approval nor extra unlimited AI credits is promised.

### If the team can fund one month of a tool

**Editorial priority:** first pay to remove the actual bottleneck. If layouts/reformats consume hours, evaluate Canva Pro at its Brazil price. If clipping/transcripts consume hours, evaluate OpusClip or Descript. If there is one valuable English-speaker invitation, consider a small HeyGen localization test with consent. Buy generated cinematic footage only after these basics work. Avoid annual commitments just to obtain the lowest displayed monthly equivalent. [S22] [S49] [S50] [S58]

For occasional technical generation, pay-as-you-go can be economical: 30 Nano Banana 2.1 1K outputs cost about **$1.008 in image-output charges**, before prompts/references/thinking/grounding; three attempts for each of 30 accepted assets would make that **$3.024**, before those extras. This calculation is illustrative, not a promise that three attempts suffice. [S10]

Track **cost per approved asset**, including team time, revisions, licenses, and rejected generations. A more expensive first output can be cheaper than ten cheap failures; a real photograph can be more useful than either.

## 11. Publication checklist

This is a proposed checklist for the conference team:

- Event facts match the approved information; no invented dates, discounts, sponsors, endorsements, statistics, or quotes.
- All pt-BR accents, names, credentials, prices, and links have been checked by a person.
- Faces/voices are authorized; there is separate approval for synthetic animation, dubbing, cloning, or avatars where used.
- The selected plan/model and all stock/music/font elements permit the intended promotional channels.
- Qualifying realistic synthetic video/audio is disclosed using Meta's required controls; contextual labels also explain conceptual stills where useful.
- Captions are accurate, text is legible on a phone, contrast is adequate, and the message works without sound.
- Cover/Reel/feed crops have been previewed in the actual publishing surface.
- A clean master, original input, editable design, approved copy, permissions, and source/license record are saved.

## 12. Gaps and items to recheck before turning this into public guides

1. **Portuguese performance:** pass 2 found a Portuguese-inclusive preprint and an anecdotal accent report (§3.3), but no reproducible current pt-BR diacritic comparison or pt-BR lip-sync ranking. No original model test was run. Use the proposed checks before naming a winner. [S105] [S106]
2. **Brazil account reality:** free quotas, available models, actual checkout taxes, watermark/export functions, and release rollouts were not tested in authenticated Brazil accounts.
3. **Fast-moving changes:** verify Veo after October 22 and older OpenAI image aliases before December 1. Update each public guide's date instead of calling this snapshot “current” indefinitely. [S07] [S32]
4. **Commercial terms:** Meta Muse/Vibes, Hailuo/H3 consumer access, Microsoft consumer routes, Grok API/X/resellers, BytePlus/resellers, Captions actors, and certain free avatar exports need exact product/region terms. Grok.com/mobile consumer image commercial permission is resolved. [S119]
5. **Open releases:** H3 weights are confirmed; its LICENSE and FAQ contradict one another on territory. Wan 3.0 downloadable weights remain unverified. Qwen-Image-2.1's research-only default license is confirmed. [S78] [S113] [S114] [S115]
6. **Conflicting pages:** Pika pricing differs from its old FAQ; Synthesia credit fields, Suno rights wording, BytePlus indexed table and H3 territory FAQ need care. Omni's earlier 40-second extension claim is not supported by the current guide. Publish narrow verified facts plus caveats. [S31]
7. **Meta dimensions:** Page-cover, Reel minimums, Instagram 3:4 photo support and Facebook edited-video settings are now verified directly in browser. Event help publishes no pixel size; 1920 × 1005 is a working choice. Exact organic Story duration/file-size caps and route-specific maxima still need account checks. [S55] [S56] [S57] [S116] [S120]
8. **No reach guarantees:** no evidence in this research establishes that generating images/video, adding AI motion, using avatars, or following a vendor's virality score improves this particular conference's registrations.

## SOURCES

**Research date: 2026-10-21.** S01–S93 were assembled in pass 1; the final log identifies pass 2's independent checks and remaining uncertainty. S94–S121 are pass 2 additions. “Living/undated” means a page did not expose a reliable publication date, not historically constant contents. Search-index-only/access-limited evidence is identified. Source IDs link directly to supporting pages. Original prompts, production recipes, arithmetic and recommendations are editorial synthesis, not hands-on test results or copied vendor instructions.

### Leaderboards, OpenAI, and Google images

- **S01 — Artificial Analysis, text-to-image v2.1.** Living board, read 2026-10-21; model scores, intervals, configuration labels, indicative pricing. https://artificialanalysis.ai/image/leaderboard/text-to-image
- **S02 — Artificial Analysis, image editing v2.1.** Living board, read 2026-10-21; separate editing comparison. https://artificialanalysis.ai/image/leaderboard/editing
- **S03 — Arena text-to-image.** Page snapshot dated 2026-10-07, retrieved 2026-10-21; ranks and categories. https://arena.ai/leaderboard/image/text-to-image
- **S04 — Artificial Analysis, text-to-video v2.1.** Living board, read 2026-10-21; with-audio mode, previews, derived models. https://artificialanalysis.ai/video/leaderboard/text-to-video
- **S05 — OpenAI API pricing.** Living, checked 2026-10-21; standard versus batch image-token rates. https://developers.openai.com/api/docs/pricing
- **S06 — OpenAI, Images in ChatGPT.** Page says updated two days before retrieval; checked 2026-10-21; Images 2.5, tiers, editing and apps. https://help.openai.com/en/articles/11084440-images-in-chatgpt
- **S07 — OpenAI API deprecations.** Living timeline; image-model dates and 2026-09-24 Sora/API shutdown. https://developers.openai.com/api/docs/deprecations
- **S08 — OpenAI image generation and prompting.** Living guides, checked 2026-10-21; capabilities, costs and limitations. https://developers.openai.com/api/docs/guides/image-generation and https://developers.openai.com/api/docs/guides/image-prompting
- **S09 — Google, Gemini Nano Banana 2.1 model card.** Latest-update label October 2026; references and resolutions. https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1?hl=en
- **S10 — Google Gemini Developer API pricing.** Living, checked 2026-10-21; image/video rates, absence of relevant free API tiers, retirement warning. https://ai.google.dev/gemini-api/docs/pricing
- **S11 — Google image generation guide.** Living, checked 2026-10-21; model-family mapping, references, text and editing features. https://ai.google.dev/gemini-api/docs/image-generation

### Image providers, prices, and licensing

- **S12 — Midjourney Version.** Living, checked 2026-10-21; V8.2 default released 2026-07-24, Edit Model and personalization. https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version
- **S13 — Midjourney plan comparison.** Living, checked 2026-10-21; monthly/annual rates, privacy and commercial-revenue threshold. https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans
- **S14 — BFL FLUX 3 Image and pricing.** October 2026 rollout; pricing includes an explicitly expired October 1–8 offer. https://bfl.ai/models/flux-3-image and https://bfl.ai/pricing
- **S15 — BFL, FLUX 3 Image Klein.** October 2026 release, checked 2026-10-21; 5.6B, references, API start price and Kommunity license threshold. https://bfl.ai/blog/flux-3-image-klein
- **S16 — Ideogram 4.5.** Undated current model page, checked 2026-10-21; native 2K, Precise Edit, access and tiered prices. Exact release date not established from this page. https://ideogram.ai/models/4.5/
- **S17 — Ideogram pricing.** Living, checked 2026-10-21; subscription rates, variable weekly free credits and hosted commercial-use FAQ. https://ideogram.ai/pricing/
- **S18 — Ideogram licenses and 4.0.** 4.0 announcement dated 2026-06-03; current license page checked 2026-10-21. https://ideogram.ai/licensing/ and https://ideogram.ai/legal/non-commercial-model-agreement/ and https://ideogram.ai/models/4.0/
- **S19 — Recraft pricing/ownership.** Living, checked 2026-10-21; Free versus paid rights, post-cancellation rights, API separation. https://www.recraft.ai/pricing and https://www.recraft.ai/ai-image-generator
- **S20 — Recraft V4.1 family and Flash.** Family press release 2026-05-30; Flash article 2026-09-23. Launch-time benchmark superlatives are not used as current rankings. https://www.recraft.ai/press-releases/recraft-v4-1-utility-pro-becomes-the-highest-ranked-text-to-image-model-outside-google-and-openai and https://www.recraft.ai/blog/meet-recraft-v4-1-flash
- **S21 — Recraft API pricing.** Living, checked 2026-10-21; raster/vector/Flash rates. https://www.recraft.ai/docs/api-reference/pricing
- **S22 — Canva Brazil pricing and image generator.** Living, checked 2026-10-21; BRL offers, limited AI, templates/design workflow. https://www.canva.com/pt_br/precos/ and https://www.canva.com/ai-image-generator/
- **S23 — Canva AI Product Terms.** Effective 2026-06-26; input rights, lawful output use, licensed content, provenance protection. https://www.canva.com/policies/ai-product-terms/
- **S24 — Adobe, Firefly image-generation instructions.** Updated 2026-07-13; current own-model list and aspect-ratio controls. https://helpx.adobe.com/ca/firefly/web/work-with-images/generate-images/generate-images-from-text-descriptions.html
- **S25 — ByteDance, Seedream 5.0 Pro.** July 2026 release; current model page checked 2026-10-21; dense text, annotated edits, layers and realism claims. https://seed.bytedance.com/en/seedream5_0_pro
- **S26 — Adobe Firefly plans.** Living, checked 2026-10-21; localized CHF result, credits, video quotas and partner access. Brazil price not confirmed. https://www.adobe.com/products/firefly/plans.html
- **S27 — Adobe Firefly approach and credits FAQ.** Living pages checked 2026-10-21; own-model training claims, free allocation and non-beta commercial usage. https://www.adobe.com/ai/overview/firefly/gen-ai-approach.html and https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html
- **S28 — Artificial Analysis, image-to-video v1.1.** Living board read 2026-10-21; audio, rank ranges and pending v2.1 note. https://artificialanalysis.ai/video/leaderboard/image-to-video
- **S29 — Google Imagen API retirement page.** Updated 2026-09-17; scope is Gemini API. Its migration example still mentions a subsequently retired older Nano Banana alias. https://ai.google.dev/gemini-api/docs/imagen

### Video models and platform terms

- **S30 — OpenAI, Sora discontinuation.** Current help page checked 2026-10-21; April 26 app/web and September 24 API dates. https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation
- **S31 — Google video, Omni guide and model card.** Living, checked 2026-10-21; recommended default, generation/editing/audio, current API limitations and extensions. https://ai.google.dev/gemini-api/docs/video and https://ai.google.dev/gemini-api/docs/omni and https://ai.google.dev/gemini-api/docs/models/gemini-omni-flash
- **S32 — Google Veo guide.** Living, checked 2026-10-21; 3.1 features and preview shutdown scheduled 2026-10-22. https://ai.google.dev/gemini-api/docs/veo
- **S33 — Kuaishou, Kling 4.0 launch.** Page dated 2026-10-17; body dateline October 16 and launch October 15. Wording includes future resolution support. https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-officially-launches-next-generation-kling-40-raising/
- **S34 — Runway pricing.** Living, checked 2026-10-21; current Free/Standard/Pro/Max, monthly versus annual, credits. https://runway.com/pricing
- **S35 — Runway, Creating with Gen-4.5.** Living operational guide, checked 2026-10-21; input-specific aspect ratios, durations, resolution and motion prompting. https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5
- **S36 — Luma plans and Ray3.2.** Living pages checked 2026-10-21; retrieved as published Markdown through direct HTTP after web extractor rejected content type. App plans, commercial use, modes, audio and limits. https://lumalabs.ai/pricing and https://lumalabs.ai/ray
- **S37 — Luma API pricing and model information.** API page living; model-information page updated 2026-07-13. Naming and API/app differences retained. https://docs.agents.lumalabs.ai/guides/pricing/ and https://lumalabs.ai/llm-info
- **S38 — ByteDance Seedance 2.5.** Release article 2026-07-31; model page checked 2026-10-21; 30 seconds, references and extensions. https://seed.bytedance.com/en/seedance2_5 and https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5
- **S39 — MiniMax H3 launch.** 2026-07-31; 15 seconds, stereo sound, 2K and planned open-weight release. https://www.minimax.io/blog/minimax-h3
- **S40 — BytePlus ModelArk model releases / portrait restrictions.** Living/indexed docs checked 2026-10-21; limited direct rendering, relevant claims flagged where necessary. https://docs.byteplus.com/zh-CN/docs/modelark/model-release-announcement and https://docs.byteplus.com/en/docs/modelark/private-virtual-avatar-library-guide-preview
- **S41 — Alibaba Wan3.0-video.** Model page updated 2026-10-11; pricing page updated 2026-10-21. Singapore rates, duration, multimodality, billing and regional free quota. https://www.alibabacloud.com/help/en/model-studio/wan3-0-video and https://www.alibabacloud.com/help/en/model-studio/model-pricing
- **S42 — Meta media generation, Muse announcement, and Vibes.** Muse announcement 2026-07-07; other pages living; some direct pages timed out/rendered no body, so rollout/rights unverified. https://ai.meta.com/meta-ai/media-generation/ and https://ai.meta.com/blog/introducing-muse-image-muse-video-msl and https://ai.meta.com/meta-ai/vibes/
- **S43 — Official Wan2.2 repository.** Living repository checked 2026-10-21; code/checkpoints/license evidence, not evidence of Wan 3.0 weights. https://github.com/Wan-Video/Wan2.2
- **S44 — HeyGen translation languages.** 2026-08-20; Brazil/Portugal explicitly differentiated. https://help.heygen.com/en/articles/11391941-video-translation-languages-we-support
- **S45 — HeyGen consent recording.** 2026-04-23; digital-twin creator identity and consent requirements. https://help.heygen.com/en/articles/12092609-recording-your-consent-video
- **S46 — Pika current pricing.** Living, checked 2026-10-21; current Free/Starter/Creator commercial-license distinction. https://pika.art/pricing
- **S47 — Pika API catalog/pricing and legacy FAQ.** Living, checked 2026-10-21; own 2.5 model versus older 2.2 FAQ. https://mcp.pika.art/pricing and https://pika.art/faq

### Editing, avatars, audio, and music

- **S48 — CapCut Brazil price help.** 2026-04-08; checkout varies by region, platform and tax. Public feature descriptions checked alongside it. https://www.capcut.com/pt-br/help/price-after-adjustment
- **S49 — OpusClip pricing.** Living, checked 2026-10-21; Free export expiry and paid credit allocations. https://www.opus.pro/pricing
- **S50 — Descript pricing.** Living, checked 2026-10-21; plans, media hours, AI credits, clip/dub tools. https://www.descript.com/pricing
- **S51 — ElevenLabs Dubbing plan access.** Living help, checked 2026-10-21; Free watermark and plan-specific functionality. https://elevenlabs.io/docs/pt/help-center/product/dubbing/on-which-plans-can-i-use-dubbing
- **S52 — ElevenLabs publication/commercial rights.** Living help, checked 2026-10-21; Free exclusion and paid/beta caveats. https://elevenlabs.io/docs/pt/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform
- **S53 — CapCut materials/music agreement.** Generic URL returns US agreement updated 2026-01-22; indexed international version dated 2024-06-17. Brazil/track applicability remains unverified. https://www.capcut.com/clause/material-license-agreement and https://www.capcut.com/clause/material-license-agreement?enter_from=page_header&from_page=landing_page&lang=en&scenario=custom
- **S54 — Meta/Instagram music-library help.** Living indexed official help checked 2026-10-21; ordinary licensed music versus Sound Collection. https://www.facebook.com/help/instagram/402084904469945
- **S55 — Meta Page cover dimensions help.** Pass 2 read directly in collaborative browser on 2026-10-21 after extractor blocks: minimum, JPG recommendation, computer/mobile display and overlap. https://www.facebook.com/help/125379114252045
- **S56 — Meta Instagram Reel size help.** Pass 2 read directly in browser, including expanded technical details: ratio range, minimum resolution/FPS, cover recommendation and highest-quality setting. https://www.facebook.com/help/instagram/1038071743007909
- **S57 — Meta, Add a cover photo to your Facebook event.** Pass 2 browser verified the correct URL on 2026-10-21. Previous `121298354633398` link returns unavailable. Correct article states repositioning/no resizing, **no pixel specification**. https://www.facebook.com/help/1910675759253872
- **S58 — HeyGen pricing and current credit plans.** Living pricing/help checked 2026-10-21; regional Free variation and legacy-plan separation. https://www.heygen.com/pricing and https://help.heygen.com/en/articles/15125761-heygen-credit-based-pricing-plans-subscriptions-explained
- **S59 — Synthesia pricing.** Living, checked 2026-10-21; contradictory credit/annual fields explicitly noted. https://www.synthesia.io/pricing
- **S60 — Synthesia acceptable use / licensing.** Living, checked 2026-10-21; avatar-specific publishing/advertising rules. https://www.synthesia.io/legal/acceptable-use-policy and https://help.synthesia.io/en/articles/6341928-synthesia-video-licensing
- **S61 — Captions pricing.** Living, checked 2026-10-21; explicitly iOS-only displayed feature/price scope. https://captions.ai/pricing
- **S62 — Suno pricing.** Living, checked 2026-10-21; v6 family, credit/download caps, annual equivalents and Free commercial exclusion. https://suno.com/pricing
- **S63 — Suno paid rights.** Edited 2026-09-03; downloaded-while-subscribed wording and copyright distinction. https://help.suno.com/en/articles/9601665
- **S64 — Suno retroactive rights.** Edited 2025-12-17; older generation-time wording, flagged against newer page rather than silently reconciled. https://help.suno.com/en/articles/2425729
- **S65 — Udio transition/export help.** UMG changes article 2026-02-17; WMG article 2025-11-19; checked 2026-10-21. https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership and https://help.udio.com/en/articles/12874375-udio-warner-music-group-wmg-partnership

### Policy, law, independent comparisons, and remaining model details

- **S66 — Brazil Copyright Law 9.610.** 1998 statute, consolidated page checked 2026-10-21; article 11 authorship definition. https://www.planalto.gov.br/ccivil_03/leis/l9610.htm
- **S67 — US Copyright Office, AI copyrightability report announcement.** 2025-01-29; US human-authorship context only. https://www.copyright.gov/newsnet/2025/1060.html
- **S68 — Meta, 2026 election preparation.** February 2026; reiterates general organic AI-media disclosure requirements. https://about.fb.com/news/2026/02/meta-prepares-for-2026-us-midterms/
- **S69 — Meta AI-info/manipulated-media approach.** First published 2024-04-05, updated through 2025-10-23; labeling signals and edited/generated distinction. https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/
- **S70 — Meta, rewarding original Facebook creators.** March 2026; originality/spam guidance, no universal AI-label reach claim. https://about.fb.com/news/2026/03/rewarding-original-creators-on-facebook/
- **S71 — Brazil LGPD, Law 13.709.** Consolidated statute checked 2026-10-21; articles 5, 6, 7, 11, 14 and cross-border considerations. https://planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm
- **S72 — ANPD Enunciado 1/2023.** 2023-05-24; children's/adolescents' best interests and lawful bases. https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-divulga-enunciado-sobre-o-tratamento-de-dados-pessoais-de-criancas-e-adolescentes/Enunciado1ANPD.pdf
- **S73 — OpenAI image-tool guidance.** Living, checked 2026-10-21; Sunburst versus Flare positioning. https://developers.openai.com/api/docs/guides/tools-image-generation
- **S74 — TechRadar, Nano Banana 2.1 versus ChatGPT comparison.** 2026-10-13; qualitative independent examples, not a Portuguese benchmark. https://www.techradar.com/ai-platforms-assistants/i-tested-google-geminis-new-nano-banana-2-1-image-generator-against-chatgpt-and-i-was-surprised-how-close-they-are
- **S75 — LLMs Blog, October video-model overview.** 2026-10-19; discovery/cross-check only, with technical claims verified from primary sources in this report. https://www.llms.blog/posts/best-ai-video-generators-in-october-2026-kling-4-0-seedance-2-5-veo-runway-and-more
- **S76 — BytePlus ModelArk pricing.** Page reports updated 2026-10-19; table available in official search index but incompletely rendered on direct open; exact threshold/route caveats marked above. https://docs.byteplus.com/en/docs/modelark/model-pricing?redirect=1
- **S77 — Qwen 3.0 and 2.1 announcements.** 3.0 dated 2026-07-21; 2.1 dated 2026-09-20. Official indexed text/model card used where SPA body was empty. https://qwen.ai/blog?id=qwen-image-3.0 and https://qwen.ai/blog?id=qwen-image-2.1
- **S78 — Qwen-Image-2.1 official card/license.** License release 2026-09-20; checked main, not a proposed pull-request license. https://huggingface.co/Qwen/Qwen-Image-2.1 and https://huggingface.co/Qwen/Qwen-Image-2.1/blob/main/LICENSE
- **S79 — Alibaba Model Studio pricing.** Updated 2026-10-21; region-specific image/video rates and trial conditions. https://www.alibabacloud.com/help/en/model-studio/model-pricing
- **S80 — Stability pricing and current image models.** Living, checked 2026-10-21; SD3.5, Core/Ultra, starter credits and per-credit price. https://platform.stability.ai/pricing and https://stability.ai/stable-image
- **S81 — Stability license and covered core models.** Core-model list updated 2026-05-20; license checked 2026-10-21. https://stability.ai/license and https://stability.ai/core-models
- **S82 — Microsoft MAI-Image-2.6 and family update.** September 2026 update/current model page; Foundry availability claims, pricing not independently confirmed. https://microsoft.ai/models/mai-image-2-6/ and https://microsoft.ai/news/pushing-the-quality-cost-frontier-with-mai-image-2-6/
- **S83 — xAI/SpaceXAI Imagine model and pricing docs.** Living, checked 2026-10-21; exact resolution/quality rates, image inputs, video 1.5 rates. https://docs.x.ai/developers/models/grok-imagine-image-2.0 and https://docs.x.ai/developers/pricing
- **S84 — OpenAI rest-of-world terms.** Current 2026 page checked 2026-10-21; output/input rights subject to law. https://openai.com/policies/row-terms-of-use/
- **S85 — Gemini Brazil subscriptions.** Living, checked 2026-10-21; BRL prices and Flow credit bundles. https://gemini.google/br/subscriptions/?hl=pt-BR
- **S86 — Gemini API additional terms.** Effective 2026-03-23; ownership, developer purpose, unpaid/paid data treatment. https://ai.google.dev/gemini-api/terms?hl=en
- **S87 — Midjourney free trials.** Living, checked 2026-10-21; no current web/Discord trial. https://docs.midjourney.com/hc/en-us/articles/27870399340173-Free-Trials
- **S88 — BFL developer terms.** Current terms checked 2026-10-21; output permissions subject to restrictions. https://bfl.ai/legal/developer-terms-of-service
- **S89 — Toolist Recraft pricing.** Secondary report updated 2026-10-09; $12 Basic used only as explicitly unverified subscription context, not a primary license source. https://toolist.ai/tools/recraft/pricing
- **S90 — BFL FLUX 3 video model/help.** Current pages checked 2026-10-21; duration, native audio, draft/full rates and modes. https://bfl.ai/models/flux-3 and https://help.bfl.ai/articles/7342522296-what-is-flux-3
- **S91 — Kling paid-service terms.** Released/effective 2026-10-10; membership commercial output permission and dynamic benefits. https://kling.ai/docs/payment-policy
- **S92 — Runway usage rights and Free plan.** Living, checked 2026-10-21; commercial permission and watermark behavior. https://help.runwayml.com/hc/en-us/articles/18927776141715-Usage-rights and https://help.runwayml.com/hc/en-us/articles/50404627334547-Free-plan-details
- **S93 — MiniMax API platform indexed H3 pricing.** Checked 2026-10-21; indexed official table, direct URL redirects; rates/availability labeled unverified. https://platform.minimax.io/subscribe/token-plan?tab=api-enterprise

### Pass 2 additions: independent primary evidence and clearly limited reports

- **S94 — Google Gemini API deprecation table.** Updated 2026-10-20, independently retrieved 2026-10-21; Imagen and Gemini image shutdowns, Veo preview scope/date. https://ai.google.dev/gemini-api/docs/deprecations
- **S95 — Midjourney Community Guidelines.** Living, retrieved 2026-10-21; no general API except rare explicit exceptions; unauthorized automation prohibited. https://docs.midjourney.com/hc/en-us/articles/32013696484109-Community-Guidelines
- **S96 — OpenAI multi-currency billing.** Living, retrieved 2026-10-21; BRL and Pix for ChatGPT Go/Plus/Pro, separate from API billing. https://help.openai.com/en/articles/10421635-multicurrency-billing
- **S97 — Canva, Pay using Pix.** Living help, retrieved 2026-10-21; Brazil prepaid Pix versus Pix Automático subscriptions/trials. https://www.canva.com/pt_br/help/pay-pix/
- **S98 — Canva Education eligibility.** Living, retrieved 2026-10-21; active K–12 roles, verification and higher-education exclusions. https://www.canva.com/education/eligibility-guidelines/
- **S99 — Canva Content License Agreement.** Current agreement retrieved 2026-10-21, §§5C/8; Education Content has no promotional use; Education Pro content restricted to educational/noncommercial use. https://www.canva.com/policies/content-license-agreement/
- **S100 — Canva Nonprofits eligibility and Brazil program page.** Living, retrieved 2026-10-21; charitable registration/documents/Goodstack and exclusions; approved team up to 50. These do not verify the conference host's status. https://www.canva.com/nonprofits/eligibility-guidelines/ and https://www.canva.com/pt_br/ongs/
- **S101 — Adobe Express Free help.** Updated 2026-07-23; retrieved 2026-10-21; continuing free editor, devices, standard features/storage and free-stock filter caveat. https://helpx.adobe.com/br/express/web/adobe-express-subscription/free.html
- **S102 — Adobe Express Brazil homepage and comparison.** Retrieved 2026-10-21; homepage shows R$0 Free, R$23/month Premium and R$95/month Firefly Pro without annual commitment. Comparison rendered USD, so actual checkout remains untested. https://www.adobe.com/br/express/ and https://www.adobe.com/br/express/pricing
- **S103 — CapCut international Terms of Service.** Updated 2026-04-15; retrieved 2026-10-21; user retains ownership, nonconfidential uploads and broad service license; includes Brazil supplemental provisions. English SG-hosted page, not a verified localized Brazil acceptance screen. https://web-sg.capcut.com/clause/terms-of-service?lang=es-LA
- **S104 — CapCut international Materials License Agreement.** Updated 2026-01-22; retrieved 2026-10-21 on SG host; asset/territory restrictions and Commercial Sounds platform limits. Exact Brazil account/track applicability remains unverified. https://web-sg.capcut.com/clause/material-license-agreement?lang=es-LA
- **S105 — Zhang et al., LingT2I.** August 2026 preprint, independently read 2026-10-21; Portuguese text-rendering tables and composite precision definition. API snapshot and pt-BR/diacritic-specific reporting are insufficient to rank current releases. https://arxiv.org/html/2608.11002v1
- **S106 — FaiscaI first-person generator test.** Author reports testing 2026-07-28 to 2026-08-08; retrieved 2026-10-21. Anecdotal Portuguese accent/text observations; no independently reproduced corpus/model IDs. Not used for pricing, quotas or a current winner. https://faiscai.com/pt/gerador-de-imagens-ia-gratis/
- **S107 — Balestri, Neutral Prompts, Non-Neutral People.** February 2026 preprint; retrieved 2026-10-21. Audit of Gemini 2.5 Flash Image/GPT Image 1.5 defaults, not today's successors or a Brazil-specific fairness score. https://arxiv.org/abs/2602.12133
- **S108 — Social stereotypes in AI text-to-image generation.** 2026 primary study; retrieved 2026-10-21. DALL·E 3/Midjourney 6.1/Stability Core stereotypes, prompt-refinement limits; version scope preserved. https://link.springer.com/article/10.1007/s43681-026-01146-8
- **S109 — Bias beyond borders.** 2026 primary study of American-country prompts including Brazil, retrieved 2026-10-21. Aggregate nationality stereotypes; automated demographic labels have methodological limits. https://link.springer.com/article/10.1007/s43681-026-01066-7
- **S110 — Google, What happened with Gemini image generation.** 2024-02-23; retrieved 2026-10-21. Google's historical explanation of Imagen 2 overcorrection, not evidence about current Nano Banana 2.1 performance. https://blog.google/products-and-platforms/products/gemini/gemini-image-generation-issue/
- **S111 — Nappy license.** Living, retrieved 2026-10-21; free Black/Brown stock photos, CC0/commercial permission. Does not establish Brazilian nationality, conference attendance or endorsement. https://nappy.co/license
- **S112 — Meta's Brazil availability announcements.** Integrations October 2024, app August 2025 and free-access communication April 2025; retrieved/index checked 2026-10-21. Historical country access, not confirmation of all current Muse/Vibes features. https://about.fb.com/br/news/2024/10/meta-ai-chega-ao-brasil-assistente-de-inteligencia-artificial-comeca-a-ser-disponibilizado-no-pais/amp/ and https://about.fb.com/br/news/2025/08/apresentando-o-app-meta-ai-uma-nova-forma-de-acessar-seu-assistente-de-inteligencia-artificial/ and https://about.fb.com/br/news/2025/04/meta-lanca-campanha-agiliza-ai-com-meta-ai-estrelada-por-shawn-mendes/
- **S113 — MiniMax-H3 official model card/weights.** Retrieved main on 2026-10-21; model components, 4–15 seconds, 9:16, stereo, 768p base/2K regeneration. https://huggingface.co/MiniMaxAI/MiniMax-H3
- **S114 — MiniMax-H3 main LICENSE.** License date 2026-08-02; read main on 2026-10-21; territorial exclusions, commercial/disclosure conditions and output restrictions. Conflicts with S115's description. https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE
- **S115 — MiniMax-H3 license FAQ.** Read main on 2026-10-21; reverses S114's stated territory scope, while distinguishing global hosted API from weights. Conflict unresolved, not silently reconciled. https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/docs/QA-about-License.md
- **S116 — Meta, Instagram photo resolution.** Read directly in collaborative browser 2026-10-21; 320–1080 width, 1.91:1–3:4 supported photo range, 1080×1440 portrait example. https://www.facebook.com/help/instagram/1631821640426723
- **S117 — Meta, Making it Easier to Create Videos on Facebook.** 2025-06-17; retrieved 2026-10-21; globally phased unified Reels flow without separate length/format restrictions, not an API/file-size guarantee. https://about.fb.com/news/2025/06/making-it-easier-create-videos-facebook/
- **S118 — Grok Imagine Video API overview.** Living, retrieved 2026-10-21; duration, native/upscaled distinctions, resolution/mode limits and per-second rates. https://docs.x.ai/developers/model-capabilities/video/overview
- **S119 — Grok consumer FAQ/terms.** Retrieved 2026-10-21; FAQ explicitly permits commercial use of conversation outputs/images on Grok.com/mobile, subject to terms. Does not resolve API/X/reseller rights. https://x.ai/legal/faq and https://x.ai/legal/terms-of-service
- **S120 — Meta Facebook video format/export help.** Both read directly in collaborative browser 2026-10-21; MP4/MOV, H.264/AAC, recommended FPS/audio settings. These are recommendations, not a universal encoding validator. https://www.facebook.com/help/218673814818907 and https://www.facebook.com/help/1041366099316573/
- **S121 — Gender and Ethnicity Bias…Medical Imaging, Part 1.** Primary study of March 2024 images, retrieved 2026-10-21; Firefly 2 and other exact predecessor versions, narrow medical setting. https://pubmed.ncbi.nlm.nih.gov/39438057/

[S01]: https://artificialanalysis.ai/image/leaderboard/text-to-image
[S02]: https://artificialanalysis.ai/image/leaderboard/editing
[S03]: https://arena.ai/leaderboard/image/text-to-image
[S04]: https://artificialanalysis.ai/video/leaderboard/text-to-video
[S05]: https://developers.openai.com/api/docs/pricing
[S06]: https://help.openai.com/en/articles/11084440-images-in-chatgpt
[S07]: https://developers.openai.com/api/docs/deprecations
[S08]: https://developers.openai.com/api/docs/guides/image-generation
[S09]: https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1?hl=en
[S10]: https://ai.google.dev/gemini-api/docs/pricing
[S11]: https://ai.google.dev/gemini-api/docs/image-generation
[S12]: https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version
[S13]: https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans
[S14]: https://bfl.ai/pricing
[S15]: https://bfl.ai/blog/flux-3-image-klein
[S16]: https://ideogram.ai/models/4.5/
[S17]: https://ideogram.ai/pricing/
[S18]: https://ideogram.ai/licensing/
[S19]: https://www.recraft.ai/pricing
[S20]: https://www.recraft.ai/blog/meet-recraft-v4-1-flash
[S21]: https://www.recraft.ai/docs/api-reference/pricing
[S22]: https://www.canva.com/pt_br/precos/
[S23]: https://www.canva.com/policies/ai-product-terms/
[S24]: https://helpx.adobe.com/ca/firefly/web/work-with-images/generate-images/generate-images-from-text-descriptions.html
[S25]: https://seed.bytedance.com/en/seedream5_0_pro
[S26]: https://www.adobe.com/products/firefly/plans.html
[S27]: https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html
[S28]: https://artificialanalysis.ai/video/leaderboard/image-to-video
[S29]: https://ai.google.dev/gemini-api/docs/imagen
[S30]: https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation
[S31]: https://ai.google.dev/gemini-api/docs/omni
[S32]: https://ai.google.dev/gemini-api/docs/veo
[S33]: https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-officially-launches-next-generation-kling-40-raising/
[S34]: https://runway.com/pricing
[S35]: https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5
[S36]: https://lumalabs.ai/pricing
[S37]: https://docs.agents.lumalabs.ai/guides/pricing/
[S38]: https://seed.bytedance.com/en/seedance2_5
[S39]: https://www.minimax.io/blog/minimax-h3
[S40]: https://docs.byteplus.com/en/docs/modelark/private-virtual-avatar-library-guide-preview
[S41]: https://www.alibabacloud.com/help/en/model-studio/wan3-0-video
[S42]: https://ai.meta.com/meta-ai/media-generation/
[S43]: https://github.com/Wan-Video/Wan2.2
[S44]: https://help.heygen.com/en/articles/11391941-video-translation-languages-we-support
[S45]: https://help.heygen.com/en/articles/12092609-recording-your-consent-video
[S46]: https://pika.art/pricing
[S47]: https://mcp.pika.art/pricing
[S48]: https://www.capcut.com/pt-br/help/price-after-adjustment
[S49]: https://www.opus.pro/pricing
[S50]: https://www.descript.com/pricing
[S51]: https://elevenlabs.io/docs/pt/help-center/product/dubbing/on-which-plans-can-i-use-dubbing
[S52]: https://elevenlabs.io/docs/pt/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform
[S53]: https://www.capcut.com/clause/material-license-agreement
[S54]: https://www.facebook.com/help/instagram/402084904469945
[S55]: https://www.facebook.com/help/125379114252045
[S56]: https://www.facebook.com/help/instagram/1038071743007909
[S57]: https://www.facebook.com/help/1910675759253872
[S58]: https://www.heygen.com/pricing
[S59]: https://www.synthesia.io/pricing
[S60]: https://www.synthesia.io/legal/acceptable-use-policy
[S61]: https://captions.ai/pricing
[S62]: https://suno.com/pricing
[S63]: https://help.suno.com/en/articles/9601665
[S64]: https://help.suno.com/en/articles/2425729
[S65]: https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership
[S66]: https://www.planalto.gov.br/ccivil_03/leis/l9610.htm
[S67]: https://www.copyright.gov/newsnet/2025/1060.html
[S68]: https://about.fb.com/news/2026/02/meta-prepares-for-2026-us-midterms/
[S69]: https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/
[S70]: https://about.fb.com/news/2026/03/rewarding-original-creators-on-facebook/
[S71]: https://planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm
[S72]: https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-divulga-enunciado-sobre-o-tratamento-de-dados-pessoais-de-criancas-e-adolescentes/Enunciado1ANPD.pdf
[S73]: https://developers.openai.com/api/docs/guides/tools-image-generation
[S74]: https://www.techradar.com/ai-platforms-assistants/i-tested-google-geminis-new-nano-banana-2-1-image-generator-against-chatgpt-and-i-was-surprised-how-close-they-are
[S75]: https://www.llms.blog/posts/best-ai-video-generators-in-october-2026-kling-4-0-seedance-2-5-veo-runway-and-more
[S76]: https://docs.byteplus.com/en/docs/modelark/model-pricing?redirect=1
[S77]: https://qwen.ai/blog?id=qwen-image-3.0
[S78]: https://huggingface.co/Qwen/Qwen-Image-2.1/blob/main/LICENSE
[S79]: https://www.alibabacloud.com/help/en/model-studio/model-pricing
[S80]: https://platform.stability.ai/pricing
[S81]: https://stability.ai/license
[S82]: https://microsoft.ai/models/mai-image-2-6/
[S83]: https://docs.x.ai/developers/pricing
[S84]: https://openai.com/policies/row-terms-of-use/
[S85]: https://gemini.google/br/subscriptions/?hl=pt-BR
[S86]: https://ai.google.dev/gemini-api/terms?hl=en
[S87]: https://docs.midjourney.com/hc/en-us/articles/27870399340173-Free-Trials
[S88]: https://bfl.ai/legal/developer-terms-of-service
[S89]: https://toolist.ai/tools/recraft/pricing
[S90]: https://bfl.ai/models/flux-3
[S91]: https://kling.ai/docs/payment-policy
[S92]: https://help.runwayml.com/hc/en-us/articles/18927776141715-Usage-rights
[S93]: https://platform.minimax.io/subscribe/token-plan?tab=api-enterprise
[S94]: https://ai.google.dev/gemini-api/docs/deprecations
[S95]: https://docs.midjourney.com/hc/en-us/articles/32013696484109-Community-Guidelines
[S96]: https://help.openai.com/en/articles/10421635-multicurrency-billing
[S97]: https://www.canva.com/pt_br/help/pay-pix/
[S98]: https://www.canva.com/education/eligibility-guidelines/
[S99]: https://www.canva.com/policies/content-license-agreement/
[S100]: https://www.canva.com/nonprofits/eligibility-guidelines/
[S101]: https://helpx.adobe.com/br/express/web/adobe-express-subscription/free.html
[S102]: https://www.adobe.com/br/express/
[S103]: https://web-sg.capcut.com/clause/terms-of-service?lang=es-LA
[S104]: https://web-sg.capcut.com/clause/material-license-agreement?lang=es-LA
[S105]: https://arxiv.org/html/2608.11002v1
[S106]: https://faiscai.com/pt/gerador-de-imagens-ia-gratis/
[S107]: https://arxiv.org/abs/2602.12133
[S108]: https://link.springer.com/article/10.1007/s43681-026-01146-8
[S109]: https://link.springer.com/article/10.1007/s43681-026-01066-7
[S110]: https://blog.google/products-and-platforms/products/gemini/gemini-image-generation-issue/
[S111]: https://nappy.co/license
[S112]: https://about.fb.com/br/news/2025/08/apresentando-o-app-meta-ai-uma-nova-forma-de-acessar-seu-assistente-de-inteligencia-artificial/
[S113]: https://huggingface.co/MiniMaxAI/MiniMax-H3
[S114]: https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE
[S115]: https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/docs/QA-about-License.md
[S116]: https://www.facebook.com/help/instagram/1631821640426723
[S117]: https://about.fb.com/news/2025/06/making-it-easier-create-videos-facebook/
[S118]: https://docs.x.ai/developers/model-capabilities/video/overview
[S119]: https://x.ai/legal/faq
[S120]: https://www.facebook.com/help/1041366099316573/
[S121]: https://pubmed.ncbi.nlm.nih.gov/39438057/

## Pass 2: verification log

**Date: 2026-10-21.** Independent searches/fetches and direct browser checks, not a generation benchmark, purchase or authenticated Brazil-account test. “Confirmed” means the specified source supports the narrow claim; it does not certify every marketing claim on that page. Prices remain snapshots. New sources are in SOURCES above.

| Claim checked | Verdict | Finding / source |
| --- | --- | --- |
| Conference identity/date/format | **corrected** | Replaced generic/in-person examples with CONAFROEDU 2026, anti-racist/Afro-Brazilian education, 5–6 December, online and Even3. Authority: `docs/BRIEF.md`; no invented venue, price or past edition. |
| Sora discontinued | **confirmed** | Official Help Center: web/app April 26, 2026; API deprecation table: Videos API/Sora 2 removed September 24. It is not a current production option. [S07] [S30] |
| GPT Image 2.5 names/API prices | **confirmed** | Sunburst/Flare; standard image output $30/M tokens, image input $8/M, text input $5/M. Not a universal per-image fee. [S05] [S08] |
| DALL·E and older GPT Image retirement dates | **confirmed** | May 12 retirement versus December 1 scheduled removals are different dates/statuses. [S07] |
| Nano Banana 2.1 and earlier Gemini image shutdowns | **confirmed** | Official current model card and deprecation table support version mapping and October 2 shutdown. [S09] [S94] |
| Nano Banana 2.1 price/free API | **confirmed** | 1K $0.0336, 2K $0.0504, 4K $0.113 output charges; no listed free generation tier, distinct from consumer app access. [S10] |
| Imagen availability | **still unverified** | Gemini API retirement confirmed; broad current availability/pricing on every cloud/partner surface not established. Old model pages do not prove endpoint availability. [S29] [S94] |
| Veo 3.1 preview shutdown | **confirmed** | October 22 applies to specified Gemini API preview endpoints; not proof every Veo product closes. [S32] [S94] |
| Omni Flash 1.1 video features | **corrected** | 9:16 and audio verified; 4K explicitly upscaled; uploaded audio references unsupported. Earlier 40-second total-extension maximum remains unverified; non-English dialogue not evaluated in guide. [S31] |
| Midjourney V8.2/default | **confirmed** | Official Version page gives July 24, 2026 default release and Edit Model. [S12] |
| Midjourney plans/free use/API | **corrected** | $10/$30/$60/$120 monthly and no ordinary web trial retained; official guidelines resolve API question: rare explicit exceptions only, unauthorized automation prohibited. [S13] [S87] [S95] |
| FLUX 3 Image/Klein and license | **confirmed** | Official pricing/launch support Image family and Klein release with sub-$5M commercial threshold; licenses remain checkpoint-specific. [S14] [S15] [S88] |
| Ideogram 4.5, subscriptions/free credits/rights | **confirmed** | Official 4.5 page and pricing distinguish API quality tiers, variable weekly eligible-account credits and hosted commercial use. No fixed free count inferred. [S16] [S17] |
| Recraft V4.1 and Free commercial permission | **confirmed** | V4.1 Flash exists; Free outputs public/not commercially licensed, paid-generation rights survive cancellation. Studio checkout price remains unverified. [S19] [S20] [S21] |
| Seedream 5.0 Pro availability | **confirmed** | Official model page exists. Exact BytePlus pricing thresholds/consumer commercial terms remain unverified rather than copied from resellers. [S25] [S76] |
| Qwen-Image-2.1 weights' default commercial license | **confirmed** | Official main LICENSE expressly restricts use to research/evaluation absent separate commercial permission. [S78] |
| Artificial Analysis image leaderboard | **confirmed** | T2I Sunburst 1222±10, Flare 1207±10, Nano Banana 2.1 1176±12; **GPT Image 2 high is third**, Nano Banana fourth. Editing uses a different board. [S01] [S02] |
| Arena image leaders/date | **confirmed** | October 7 displayed snapshot, Sunburst/Flare first; not an October 21 board-update claim. [S03] |
| Artificial Analysis video leaders | **confirmed** | Audio T2V Wan 3.0 first; I2V H3 first with overlapping top intervals. Board settings/derived entries matter. [S04] [S28] |
| Portuguese rendering evidence | **corrected** | Added Portuguese-inclusive LingT2I and limited first-person accent report. Composite precision is not an accent success rate. [S105] [S106] |
| Current pt-BR `ç/ã/é` model winner | **still unverified** | No controlled current-release, Brazil-variety, diacritic-specific ranking found; retain manual spelling checks. [S105] [S106] |
| “Best model for Black Brazilians” | **still unverified** | Added version-scoped primary bias research, cultural review and real-photo/editor preference; no unsupported fairness winner. [S107] [S108] [S109] [S110] [S121] |
| Nappy as free representation resource | **confirmed** | CC0/commercial photo access; neither nationality nor conference participation may be inferred. [S111] |
| Kling 4.0 launch/features | **confirmed** | October 15 launch, 30-second generation and reference limits verified; 4K/1080p/21:9 roadmap language preserved. [S33] |
| Kling paid commercial rights/current price | **still unverified** | October 10 paid-service terms confirm member output permission; current 4.0 renewal/credit price and free rights remain unresolved. [S91] |
| Runway Gen-4.5 costs/free/rights | **confirmed** | 2–10 seconds, 12 credits/sec, 720p; 125 one-time Free credits, Standard 625/month; official usage-rights page permits commercial use. Free is not free Gen-4.5 access. [S34] [S35] [S92] |
| Luma Ray3.2/Plus | **confirmed** | Published Markdown independently retrieved: Ray3.2, 5/10-second generation, no native T2V/I2V audio, Plus $30 monthly/$25 annual equivalent with commercial use. Reframe maximum remains conflicted. [S36] [S37] |
| Seedance 2.5 and Wan 3.0 | **confirmed** | Official product docs support up-to-30-second capability; not a claim of free Brazil access or unrestricted hosted terms. [S38] [S41] |
| H3 open weights | **corrected** | Official weights/card now confirmed; no longer merely a promised release. Card distinguishes 768p base from 2K regeneration. [S113] |
| H3 open-weight licensing | **still unverified** | LICENSE and FAQ reverse territory scope; no unconditional Brazil/global campaign license inferred. [S114] [S115] |
| Pika Free/Starter commercial use | **confirmed** | Current pricing explicitly excludes both; Creator includes commercial license. Old free-credit/commercial FAQ is unsafe to reuse. [S46] |
| Grok Video 1.5 duration/vertical/audio/prices | **corrected** | 1–15 seconds/9:16/native speech and mode-specific native/upscaled resolution now verified; 480p/720p/1080p $0.08/$0.14/$0.25 per second. [S118] |
| Grok consumer commercial use | **corrected** | Grok.com/mobile FAQ explicitly permits commercial images/outputs; API, X and resellers remain separate. [S119] |
| General Meta AI Brazil access | **corrected** | Historical integration/app/free access confirmed; current Muse/Vibes feature rollout/rights/quotas remain unverified. [S42] [S112] |
| Canva Brazil pricing/Pix | **confirmed** | Published Pro R$35/month, Pro+ R$49/person/month; Pix and Pix Automático documented. Actual account checkout not tested. [S22] [S97] |
| Canva Education eligibility/marketing permission | **corrected** | Added K–12 eligibility, higher-education exclusion, separate noncommercial Pro-content restriction and Education Content promotional exclusion. [S98] [S99] |
| Canva Nonprofits qualification | **still unverified** | Up-to-50 approved-user offer/charitable criteria verified; committee's legal host/status absent from brief. Not an automatic free plan for every education conference. [S100] |
| Adobe Express Free/BRL price | **corrected** | Added continuing no-card Free plan and official features; Brazil homepage advertises Premium R$23/month and Firefly Pro R$95/month. Other page's USD rendering does not establish checkout. [S101] [S102] |
| CapCut status/pricing/terms | **corrected** | Brazil-facing help active; price deferred to checkout. Added current international service/stock/music terms; exact localized account/track and Pix unresolved. [S48] [S103] [S104] |
| CapCut “commercial music” usable on Meta | **corrected** | Current international terms name CapCut/TikTok/TikTok for Business, requiring separate clearance elsewhere. Do not rely on label or Pro purchase alone. [S104] |
| HeyGen/OpusClip/Descript/Captions published prices | **confirmed** | Independently reopened official pages; retained plan, annual/monthly, region and iOS caveats. Free rights/feature availability still require the stated checks. [S49] [S50] [S58] [S61] |
| Synthesia exact current minutes | **still unverified** | Official pricing reopened, but heterogeneous credit/allowance fields do not support a single merged allocation. [S59] |
| Suno Free/commercial/downloads and Udio exports | **confirmed** | Suno pricing excludes Free commercial rights/downloads; current paid help uses downloaded-while-subscribed wording. Udio help still states downloads disabled. Do not infer retroactive rights or restored export. [S62] [S63] [S64] [S65] |
| Meta AI-info rules | **confirmed** | Mandatory organic self-disclosure explicitly covers photorealistic synthetic/altered video or realistic audio; AI stills can also be auto-labeled. Edited/generated treatment differs. No automatic reach penalty established. [S68] [S69] |
| Facebook/Instagram 4:5 feed master | **corrected** | Kept 1080×1350 as shared working choice; verified Instagram supports 3:4 (1080×1440), so 4:5 is not its maximum. [S116] |
| Instagram Reel size/minimums/cover | **confirmed** | Browser read: 1.91:1–9:16, ≥30 FPS, ≥720 pixels, cover recommendation 420×654; 1080×1920 is a working export choice. [S56] |
| Facebook Page cover | **corrected** | Removed unverified flag after browser check: 400×150 minimum, 851×315 sRGB JPG under 100 KB advice; display crops/overlap separate. [S55] |
| Facebook Event cover and source URL | **corrected** | Replaced invalid help link; correct article has no pixel requirement. 1920×1005 remains the team's master, not a Meta mandate. [S57] |
| Stories 1080×1920 and maximums | **still unverified** | 9:16 master is a production choice. Exact current organic duration/file-size caps across both apps not established; no ad specs substituted. |
| Facebook video encoding/length | **corrected** | Browser verified edited-video settings; 30 FPS shared with IG. Meta's unified Reels announcement supersedes a blanket 90-second claim; route-specific limits remain. [S117] [S120] |
| Beginner <30-minute workflows | **corrected** | Added three explicit free-first recipes, times, prerequisites, Portuguese copy and paywall fallbacks. Estimates are editorial, not measured test results. [S22] [S48] [S101] |

**Remaining uncertainty that matters before publishing:** authenticated Brazil quotas/checkout/export behavior; current pt-BR accent and Afro-Brazilian model comparisons; H3's contradictory territory/output terms; exact Muse/Vibes and several reseller/free-avatar rights; Story/route-specific upload maxima; and the organizers' Canva Nonprofits legal eligibility. These are not reasons to delay the R$0 manual-layout/real-recording workflows.
