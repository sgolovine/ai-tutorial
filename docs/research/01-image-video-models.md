# AI image and video generation for conference marketing

**Research cut-off: 2026-10-21.** Prepared for the small team described in `docs/BRIEF.md`: an education conference in Brazil, organic Facebook first, with Instagram and WhatsApp reuse and no advertising budget. Prices are USD unless explicitly marked BRL. Subscription prices distinguish monthly billing from annual commitments. Taxes, exchange fees, regional offers, account quotas, and failed creative attempts can change the real cost.

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
- **Google images:** Nano Banana **2.1** is documented as the newest efficient generation/editing model. Nano Banana 2 is Gemini 3.1 Flash Image; Nano Banana Pro is Gemini 3 Pro Image. The original Gemini 2.5 Flash Image has passed its October 2 shutdown date. **Imagen is shut down in the Gemini API**; this statement does not establish that every Imagen offering on every Google/partner surface has closed. [S09] [S10] [S11] [S29]
- **Google video:** Veo 3.1 remains the latest Veo version verified here, but Google's guide now recommends **Gemini Omni Flash 1.1** for default video work. The Veo 3.1 **preview endpoints in the Gemini API** are scheduled to shut down on **October 22, 2026**, one day after this research. Google's guide points to Omni or separately available GA enterprise-platform models. Do not describe this as a shutdown of every Veo product. [S31] [S32]
- **Other verified updates:** Midjourney V8.2; FLUX 3 Image and Image Klein; Ideogram 4.5; Recraft V4.1/Flash; Seedream 5.0 Pro/Flash; Kling 4.0; Seedance 2.5; MiniMax H3; Luma Ray3.2; hosted Wan 3.0. These replace many familiar 2025 recommendations. [S12] [S14] [S15] [S16] [S20] [S25] [S33] [S37] [S38] [S39] [S41] [S76]

## 2. Evidence quality and how to read rankings

This is **desk research, not an original hands-on model benchmark**. Official documentation establishes advertised features, published rates, product status, and contractual permissions. Vendor examples are selected examples. Recommendations below are an editorial synthesis; they do not establish measured Portuguese accuracy or marketing performance. **[UNVERIFIED]** marks a material claim that was not fully confirmed, an inaccessible/currently conflicting source, or an account/region condition needing a real account check.

### Leaderboard snapshot

| Board read on October 21 | Relevant observation | How to use it |
| --- | --- | --- |
| Artificial Analysis image text-to-image, v2.1 | Sunburst max 1222 ±10; Flare max 1207 ±10; Nano Banana 2.1 1176 ±12 | A shortlist, not a Portuguese typography test. [S01] |
| Artificial Analysis image editing, v2.1 | Sunburst and Flare lead; Nano Banana 2.1 and MAI-Image-2.6 follow with overlapping intervals | Test editing separately from new-image generation. [S02] |
| Arena, formerly LMArena, text-to-image | The page's own snapshot is October 7, 2026; Sunburst and Flare lead | Retrieval date is not the board's update date. [S03] |
| Artificial Analysis text-to-video with audio, v2.1 | Wan 3.0 leads the displayed board; H3 and Seedance 2.5 are among strong contenders | Preview and derived entries are mixed in; filters matter. [S04] |
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
| **Midjourney V8.2** | Campaign moodboards, expressive illustration, art direction, stylized hero imagery; personalization and the new Edit Model support style development. | Finishing exact names, grids, and logos is better done in a design editor. Older Omni/Character Reference instructions do not describe the new V8.2 editing workflow. No dependable free web tier. | Midjourney web and Discord. A current public general-purpose official API was **[UNVERIFIED]**; do not assume third-party “Midjourney APIs” are authorized. [S12] [S13] |
| **FLUX 3 Image; FLUX 3 Image Klein; FLUX.2** | FLUX 3 Image advertises bounding-box composition, high resolution, and precise editing. Klein supports generation/editing and up to ten references; useful for repeatable brand assets and technical workflows. FLUX.2 remains relevant in existing integrations. | Model names and licenses differ substantially; “FLUX is free” is inaccurate. Some help articles still describe FLUX.2 as newest because they predate the October image rollout. | BFL playground/API; Klein weights and compatible local tools; licensed deployments for other weights. [S14] [S15] |
| **Ideogram 4.5; 4.0** | Typography, poster/packaging concepts, composition, branding. 4.5's Precise Edit targets accumulated drift across edits; native 2K and optional references are documented. 4.0 offers layout-oriented open weights. | Vendor claims about unchanged pixels/artifact elimination are not independently validated here. Small text and accents need review. Downloadable 4.0 weights have different rights from hosted app/API outputs. | Web, mobile app, API/MCP; 4.0 downloadable weights with the appropriate license. [S16] [S17] [S18] |
| **Recraft V4.1 / Utility / Vector / Flash** | Vector logos and icons, style systems, graphic art; Utility for more predictable briefs, Flash for inexpensive exploration. A particularly relevant choice when editable SVG matters. | Native SVG still needs design and trademark review. Free-plan outputs are public, owned by Recraft, and not licensed for commercial use. Avoid preparing final conference artwork on that tier. | Recraft Studio and API; raster/vector variants are distinct. [S19] [S20] [S21] |
| **Adobe Firefly Image 5**, with older Image 4/Ultra still listed | Generative Fill, expanding/correcting backgrounds, photo compositing, and existing Adobe workflows. Adobe's own Firefly training approach emphasizes licensed/public-domain material. | That training statement is Adobe's claim about **its own models**, not every partner model in Firefly. Adobe's commercial-use position is not a blanket guarantee that every generated logo/face is lawful. | Firefly web/mobile, Photoshop/Express integrations, enterprise services. Model availability depends on the host app. [S24] [S26] [S27] |
| **Meta AI Imagine / Muse Image** | A readily discoverable option for ideas and social-style images; Meta advertises reference composition, precise edits, and free consumer image creation. “Imagine” is an experience/feature name, not a safe assumption about the underlying model. | **[UNVERIFIED]** exact Brazil account rollout, stable quotas, commercial terms for each surface, and any public Muse API price. Do not borrow Llama's license for Meta AI outputs. | Meta AI web/app and integrations where available. [S42] |
| **Canva AI / Magic Media / Dream Lab** | Best finishing environment for this team: templates, text, crops, speaker cards, consistent page layouts, simple animation, and asset reuse. Generate or import a background and finish inside the design. | These are product surfaces with changing underlying models, not a single foundation model. Quotas and premium functions differ; free layout editing does not imply unlimited free generation. | Canva web/mobile; generated material and template/library elements carry different terms. [S22] [S23] |
| **Seedream 5.0 Pro**, plus **5.0 Flash / Lite** | Pro emphasizes dense infographics, annotated edits, layer separation, realistic lighting, and multilingual copy. Useful for education-themed illustrations and layout exploration. Flash is a cheaper current endpoint. | A model's multilingual support is not a measured pt-BR accuracy result. Dense generated information is particularly prone to factual and legibility problems. Account verification/face rules can affect photo-based workflows. | ByteDance consumer surfaces where offered; BytePlus ModelArk/hosted partners. [S25] [S76] |
| **Qwen-Image-3.0 / Pro** and **Qwen-Image-2.1** | 3.0 emphasizes detailed text and knowledge-rich compositions; 2.1 unifies generation/editing, references, and transparent RGBA. Older Qwen-Image/Edit checkpoints may be useful locally. | Hosted 3.0 and downloadable 2.1 are different releases. Current 2.1 weights use a research/noncommercial license; do not carry over the license of an older checkpoint. Portuguese-specific quality is **[UNVERIFIED]**. | Qwen app/hosted APIs; 2.1 weights on the official Qwen Hugging Face organization. [S77] [S78] [S79] |
| **Stable Diffusion 3.5 / Stable Image Ultra/Core** and the open ecosystem | Local control, LoRA style tuning, masking, structural guidance, and reusable pipelines. Useful if someone already knows ComfyUI or a similar tool and has suitable hardware. | Setup, GPU memory, power, and learning time are real costs. Do not assume modern conversational editing or exact Portuguese lettering matches newer closed models. Check every checkpoint and LoRA's license separately. | Stability API/hosted apps; downloadable supported models. [S80] [S81] |
| **MAI-Image-2.6 / Flash** | Microsoft is among the current benchmark contenders; model pages describe image creation from text/photo prompts. Worth including in an advanced comparison, especially for a team already using Microsoft tooling. | **[UNVERIFIED]** exact Copilot account-to-model routing, free quota, commercial output license on each surface, and definitive per-image rate. An arena's standardized estimate is not a checkout price. | Microsoft Foundry and available Microsoft surfaces; confirm region and deployment access. [S01] [S02] [S82] |
| **Grok Imagine Image 2.0** | Another current high-ranking general-image contender with official generation/editing API access. Useful as an alternative when the main tool misses the desired look. | **[UNVERIFIED]** pt-BR accent performance, consumer free allowance, and applicable commercial rights for the selected route. Do not conflate consumer and developer terms. | Grok consumer products and official API. [S03] [S83] |
| **Luma UNI-1.1 / UNI family** | Reference-led image work and editing alongside Luma's video workflow; potentially convenient if already paying for Luma. | App model names and documented API IDs are not identical; check the exact endpoint. No reason for this team to subscribe solely to add another image generator. | Luma app/API. [S36] [S37] |

### 3.2 Image prices, free access, and commercial use

These are **observed public offers**, not promises of a specific Brazil account's allowance. A free allocation may be a one-time trial; an annual price is not a one-month purchase. “Commercial permitted” describes vendor permission, subject to terms and third-party rights, rather than a legal copyright guarantee.

| Provider / route | Free access | Representative paid price | Commercial-use position / caveat |
| --- | --- | --- | --- |
| OpenAI | ChatGPT Images is available on all tiers with plan limits; thinking images are on Plus/Pro/Business. No fixed daily free count verified. | GPT Image 2.5 standard API: $30/M image-output tokens; image input $8/M and text input $5/M. Size/quality determines token use; use the cost calculator rather than quoting one universal per-image fee. Current Brazil subscription checkout **[UNVERIFIED]**. | OpenAI assigns output rights to the user to the extent law permits; rights are not necessarily exclusive. API billing is separate from ChatGPT. [S05] [S06] [S84] |
| Gemini | Brazil's app page lists R$0 image generation/editing. The current image APIs do **not** list a free generation tier. | Nano Banana 2.1 output: $0.0336 at 1K, $0.0504 at 2K, $0.113 at 4K, plus input/thinking/grounding where applicable. Batch image rates are half. Brazil app plans observed: AI Plus R$24.99/month; Pro R$96.99/month. | API terms say Google does not claim ownership of generated content. Unpaid developer-service data may be used for improvement; consumer app privacy/terms are separate. [S10] [S85] [S86] |
| Midjourney | No current free web/Discord trial; a limited niji mobile trial is documented separately. | Basic $10/month, Standard $30, Pro $60, Mega $120. Annual equivalents are lower but prepaid. | Paid plans carry general commercial terms. Companies over $1M annual gross revenue need Pro/Mega. Images are generally public unless using applicable privacy options; Stealth is Pro/Mega. [S13] [S87] |
| BFL | Public demos may exist; no dependable recurring free hosted quota established. Self-hosted weights still require compute. | FLUX 3 Image 1K list price $0.048; 2K $0.10. The 50% October launch offer expired October 8. Klein starts $0.009/1K image. | BFL developer terms allow personal/commercial output use subject to restrictions. Klein's Kommunity license allows free commercial use below $5M annual revenue; other FLUX weights have different licenses. [S14] [S15] [S88] |
| Ideogram | Eligible accounts receive a variable weekly credit allocation; exact count/current 4.5 access **[UNVERIFIED]**. | Plus $20 month-to-month or $15/month billed annually. 4.5 API: prompt-only low $0.03, medium $0.06, high $0.10; high reference/edit tasks $0.22. $0.008 is for very-low reference/edit tasks, not all generation. | Hosted pricing FAQ allows commercial use. Downloaded 4.0 weights are noncommercial by default; obtain self-serve/enterprise commercial licensing or use a properly licensed hosted API. [S16] [S17] [S18] |
| Recraft | Official generator advertises 30 daily credits; current commercial restriction makes this a prototyping tier. | API Flash $0.007/image; V4.1 raster $0.035, vector $0.08; Pro variants higher. **[UNVERIFIED]** live Studio subscription checkout; an October secondary report lists Basic $12/month. | Free-plan images are not commercially licensed. Paid-plan images made while subscribed retain commercial rights after cancellation. API has its own developer terms. [S19] [S21] [S89] |
| Adobe | Limited free credits; a stable free count was not confirmed. | Plans page shows Standard with 2,000 monthly credits; exact Brazil price **[UNVERIFIED]** because retrieval localized to CHF. Do not translate that price into BRL as if it were a local offer. | Non-beta Firefly outputs can be used commercially; check any beta-specific notice. Third-party models and enterprise indemnity have separate conditions. [S24] [S26] [S27] |
| Canva | Free design plan and limited AI usage. Brazil pricing page describes up to 20 standard/premium AI uses; scope/reset varies by feature. | Brazil Pro R$35/month for one person; Pro+ R$49/person/month as displayed. Recheck billing cadence/checkout before purchase. | AI output can be used lawfully under the AI terms; licensed library content remains separately licensed. No automatic exclusivity or trademark clearance. [S22] [S23] |
| Seedream | Consumer/partner trials vary; no universal recurring free quota verified. | BytePlus indexed pricing lists Pro $0.045 at the lower pixel tier and $0.09 at the higher tier; extra reference inputs after the first $0.003 each. Flash $0.018. **[UNVERIFIED]** full current table rendering and exact threshold: indexed versions disagree. | Proprietary hosted service. Exact applicable output/commercial terms and face permissions must be checked for the provider/account; **[UNVERIFIED]** blanket commercial license across all resellers. [S25] [S76] |
| Qwen | App/demo access may be free with changing quotas; local use has hardware and license costs. | Singapore hosted 3.0 $0.03/image, Pro $0.04 at 1K in the pricing table; other regions/resolutions/input charges differ. 2.1 Pro $0.04, Turbo $0.016, with small regional trial quotas. | **2.1 research weights are not a free commercial-production license.** Request a commercial license where required. Hosted service terms are separate. [S78] [S79] |
| Stability | API advertises 25 starter credits, not an unlimited free tier. | 1 credit = $0.01; Core $0.03, SD3.5 Large $0.065, Ultra $0.08/image. | Covered core weights are free for commercial users below $1M total annual revenue under the Community License; larger organizations need the applicable enterprise license. Other checkpoints may differ. [S80] [S81] |
| Microsoft / Grok / Meta | Exact current free allowances and commercial terms **[UNVERIFIED]** for each consumer route. | Grok API Image 2.0: 1K low $0.04, medium $0.06; image input $0.01. Microsoft and Meta final rates not verified here. | Select the actual product contract. A model's leaderboard license label is not a substitute. [S82] [S83] |

### 3.3 Portuguese text: what is verified, and what is not

There is no verified pt-BR-with-accents ranking in this research. Public overall/text-rendering leaderboards and vendor multilingual claims do not establish that one model always writes `educação`, `inscrições`, `São Paulo`, or a speaker's name correctly. A language listed for **prompts** is also not a guarantee of correct **letters inside pixels**. [S01] [S03] [S11] [S16] [S77]

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
| Event announcement poster | Generate a text-free thematic background; add the official title, date, location, CTA, and real logo in Canva. Keep one clear hierarchy. | Facts, accents, contrast, link/QR destination, mobile readability. |
| Speaker cards | Start from a consented, current real headshot; crop/remove background with an appropriate tool; reuse one template for everyone. | Exact name, role, institution, approved topic, unchanged identity. |
| Quote cards | Select an actual quote from an approved transcript; use generated decoration only if useful. | Verbatim quote versus clearly labeled paraphrase; attribution and context. |
| Carousels | Draft a 5–7-page outline, create each page separately in the same template, and generate only the supporting illustrations. | One idea per page, consistent numbering, text size, factual claims. A Facebook multi-photo post may not preserve the same experience/order as an Instagram carousel: preview both. |
| Reel thumbnail | Use an expressive authorized video frame or approved portrait, short editable headline, and clear focal point. | How it crops in feed/profile surfaces; no misleading facial emotion. |
| Event/Page cover | Create a separate wide layout; treat its central content as expendable-crop-safe and test on mobile/desktop. | UI overlays, profile-image overlap, clipping, dates and logo legibility. |
| Past-event photo cleanup | Prefer ordinary exposure, white balance, crop, denoise, and redaction; use masked generative fixes for nonfactual background defects only when justified. | Faces, attendance, signs, venue, sponsor logos, and documentary truth. |
| Brand consistency | Build a simple style sheet and reusable layout; use the same approved reference image, palette, and illustration vocabulary. | A series that feels related even when the model changes. |

These are proposed production workflows, informed by the cited editing and design tools rather than claims that the platforms require this sequence. [S06] [S08] [S11] [S19] [S22] [S24]

### Working dimensions and crop caveats

The following sizes are **recommended working/export masters**, not a claim that Meta mandates every number. Organic upload specifications, event covers, paid event ads, and visible crops are different things. Meta help pages were partly login-blocked/throttled during this research, so unresolved official-spec claims are labeled accordingly. [S55] [S56] [S57]

| Asset | Working size | Practical treatment |
| --- | --- | --- |
| Portrait feed poster / speaker card | **1080 × 1350, 4:5** | Our recommended reusable portrait master; retain a square variant if needed. |
| Square card / carousel page | **1080 × 1080, 1:1** | Useful shared layout across channels; use the same size for all pages in a series. |
| Story / Reel | **1080 × 1920, 9:16** | Keep crucial text away from top/bottom/right interface overlays; check the actual upload preview. Do not treat one fixed safe-zone pixel diagram as universal. |
| Facebook Event cover | **1920 × 1005, about 1.91:1** | Common event-cover production size, **[UNVERIFIED] as a current official organic requirement**. Also retain a **1920 × 1080** version for 16:9 reuse; recompose/crop rather than stretch. |
| Facebook Page cover | **851 × 315**, or a **1702 × 630** double-resolution working file | The 851 × 315 recommendation is associated with Meta's fastest-loading JPG guidance; **[UNVERIFIED] current full official text/crop behavior**. It is not a universal display rectangle. |
| Landscape video / presentation still | **1920 × 1080, 16:9** | Retain alongside vertical cuts for full-talk/partner reuse. |

Do not upscale a 1K file and call it native 4K detail. Export graphic cards as PNG when text edges benefit; use a high-quality JPG for photos when size matters. For video, a conventional H.264 MP4 with AAC audio is a practical delivery choice, followed by a test upload. The exact current Facebook organic codec/maximum-length rules were **[UNVERIFIED]** in this pass. A 15–60-second editorial target is a team choice, not a claimed platform limit.

## 5. Image prompting and editing practices

### 5.1 A reusable brief structure

Use **purpose → subject → composition → style → color/light → output shape → exact constraints → references**. Identify which input is the style reference, which is the person, and which is the layout. Avoid contradictory requests such as both “empty minimalist background” and “many detailed elements everywhere.” Both OpenAI and Google's guides demonstrate explicit reference roles, localized edits, and iteration. [S08] [S11]

For photographic scenes, describe framing and light rather than a list of magic quality words: “waist-up, eye-level, soft window light, realistic skin texture.” For illustration, specify materials and shape language: “flat geometric shapes, subtle paper grain, two accent colors.” Do not require English: try natural pt-BR first; preserve Portuguese copy exactly if a model benefits from English scene instructions.

**Original example: text-free conference background**

```text
Crie uma ilustração editorial para divulgar um congresso de educação no Brasil.
Público: professores, coordenadores pedagógicos e gestores escolares.
Mostre educadores adultos diversos colaborando ao redor de uma mesa, com cadernos
e materiais de aprendizagem. Estilo: recortes de papel com formas simples,
textura discreta, acolhedor e profissional. Paleta: azul-marinho #17324D,
verde #3F8F79 e creme #F6F2E9. Composição vertical 4:5.
Concentre a cena na metade inferior e deixe a metade superior simples para o título.
Não inclua palavras, números, logotipos ou marcas. É uma ilustração conceitual,
não uma fotografia de um evento real.
```

All event facts in the following prompts are placeholders or illustrative copy, not confirmed conference information.

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

1. **Write the facts first.** Maintain an approved text block for title, names, dates, venue, prices, registration URL, and accessibility information.
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
| **Google Gemini Omni Flash 1.1** | Google's current default recommendation for conversational video generation/editing; plausible short inserts and iterative scene changes. | Model card: native 3–10 seconds, up to 4K options; guide describes audio generation and extension to 40 seconds. Broad multimodality marketing exceeds the current API: uploaded audio references are explicitly unsupported, and video-reference restrictions apply. 9:16 is a useful target; confirm the selected API settings. [S31] |
| **Google Veo 3.1 / Fast / Lite** | Cinematic scenes, native dialogue/sound, first/last-frame direction, references and extensions in compatible routes. | Guide documents 8-second clips, landscape/portrait and 720p/1080p/4K options, with feature restrictions by variant. Gemini API preview endpoints close October 22. Current availability on other routes must be checked separately. [S32] |
| **OpenAI Sora 2 / Pro** | Historical model with synchronized audio and video; useful only when explaining older comparisons. | Product and API discontinued. There is no current Sora free tier or new production workflow to recommend. Avoid an unrelated reseller simply using the Sora name. [S07] [S30] |
| **Kling 4.0**; older 3.0/Omni in many integrations | Newly released choice for action, camera motion, references, and longer narrative shots. | Official release: up to 30 seconds native, up to 15 reference assets/10 keyframes, extensions up to two minutes. It says 4K/1080p/21:9 support **will** be supported: do not silently treat the roadmap as fully delivered. Exact current 9:16/audio/language matrix and plan access **[UNVERIFIED]** here. [S33] |
| **Runway Gen-4.5**, plus **Aleph 2.0** editing | Controlled short scenes, explicit camera/timing direction, image-to-video; a mature creative workspace for assembling variations. Aleph is a separate editing route. | Official Gen-4.5 guide: 2–10 seconds, 720p, paid Standard+, 12 credits/second. The aspect-ratio table lists T2V 16:9 and multiple I2V shapes including 9:16. Do not promise native vertical T2V without checking current UI. Native audio for this exact model is **[UNVERIFIED]** from the operational guide; use separate audio unless confirmed. [S34] [S35] |
| **Luma Ray3.2**, with Ray3.14 still listed | Reframe and modify existing footage, performance/scene transformations, multi-keyframe control; especially useful for an experienced editor. | T2V/I2V 5 or 10 seconds; 1080p options and up to 16 keyframes; 9:16 among supported ratios. New T2V/I2V has no native generated audio; Modify/Reframe preserve source audio. V2V up to 20 seconds depends on frame rate. Official page has conflicting Reframe duration details, so maximum needs confirmation. [S36] [S37] |
| **MiniMax H3**, accessed through Hailuo/partners | Strong contender for image/video-reference control, realistic motion, synchronized audiovisual inserts, and branding experiments. | Official July launch: native stereo sound, up to 15 seconds and 2K; text/image/video/audio context. Launch announced future open weights, which does not establish today's weight/license availability. Exact pt-BR dialogue and free commercial access **[UNVERIFIED]**. [S39] |
| **Seedance 2.5** | Up to 30-second narrative promos, multimodal reference-driven scenes, timestamp/editing workflows, coherent motion. | Official product: 30 seconds in one pass and two extensions. Release/ModelArk documentation advertises up to 50 reference assets. Real-human inputs have permission/verification restrictions; do not assume any uploaded speaker photo is accepted. Verify 9:16 and exact resolution on the selected route. [S38] [S40] |
| **Wan 3.0 / Prime**, hosted | An important current audiovisual contender, useful for a 15–30-second concept with multimodal inputs. | Alibaba docs: 480p/720p/1080p and up to 30 seconds, multimodal inputs. API is hosted. Current downloadable 3.0 weights and an applicable self-host license **[UNVERIFIED]**; a similarly named repository is insufficient evidence. [S41] |
| **Wan 2.2**, downloadable | Local/open video generation, image-to-video and model-specific animation workflows for an already technical teammate. | Official repository publishes code/checkpoints under Apache 2.0. Different checkpoints provide different functions; do not assume hosted Wan 3.0's audio, 30-second limit, or quality transfers to 2.2. GPU/time costs remain. [S43] |
| **Pika 2.5 / Pikaframes / effects** | Playful image animation, transformations, motion/effect experiments. Current Pika is also a host for many other vendors' models. | Own-model pricing/API pages verify 2.5; an older FAQ still calls 2.2 newest. Exact current own-model length/vertical matrix **[UNVERIFIED]**. Current pricing explicitly excludes a commercial license on Free **and Starter**. [S46] [S47] |
| **Meta Movie Gen / Vibes / Muse Video** | Vibes is an available social creation/remix experience; Muse Video has been announced with native audio. | Movie Gen is a research lineage, Vibes a product, Muse Video a model: they are not interchangeable. July Muse announcement said “coming soon.” **[UNVERIFIED]** current Brazil rollout, guaranteed model selection, clip limits, API, and commercial rights. Treat as optional experimentation. [S42] |
| **FLUX 3 Video** | Current BFL video family, supporting generation, references/keyframes, continuation and synchronized audio. | Official model page: 5–20-second clips, native optional dialogue/effects/ambience, 9:16 in help docs; quality/resolution options vary. FLUX 3 **Video** is distinct from the later FLUX 3 **Image** release. [S14] [S90] |
| **Grok Imagine Video 1.5** | Another officially priced multimodal video option; worth including when already using Grok tooling. | Official pricing lists 480p/720p/1080p. **[UNVERIFIED]** current maximum duration, reliable pt-BR dialogue/lip sync, free allowance, and exact commercial terms for each route. [S83] |

**Editorial preference for this conference:** generate abstractions, conceptual illustrations, transitions, and text-free inserts. Use real recording for the keynote's message, proof of past attendance, venue, and testimonials. A synthetic audience may be visually impressive but provides no evidence that an earlier event was well attended.

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
| **OpusClip** | Suggesting talk highlights, reframing, and captioned short-form candidates. | Free 60 credits/month, watermark, no editing, clips cease to be exportable after 3 days. Starter $15/month, 150 credits; Pro $29/month, 300, or $14.50/month with annual payment. | Virality scores are the vendor's heuristic, not proof a Brazilian education audience will engage. Review framing, sentence boundaries, factual context, and Portuguese transcription. [S49] |
| **Descript** | Transcript-led editing, clip suggestions, audio cleanup, captions, and translation. | Free plan exists. Hobbyist displays $24 monthly/$16 annual equivalent; Creator $35/$24. Media hours and AI credits are different quotas. | Business page lists dubbing/translation with proofreading. Confirm Portuguese support and the specific plan before uploading the full talk. Do not use regenerated speech to put new claims in a speaker's mouth. [S50] |
| **ElevenLabs Dubbing** | Translation/voice workflow when audio matters more than a talking avatar. | Dubbing is available on free and paid plans; free dubbing has a watermark. Exact applicable paid dubbing price **[UNVERIFIED]**. | Official help says Free has no commercial license; paid non-beta services generally include commercial permission, with service-specific terms. That excludes Free for this campaign. Verify Brazilian pronunciation and speaker consent. [S51] [S52] |

**Dubbing is optional.** For an English-language speaker, start with their original audio and accurate pt-BR captions. That is cheaper and avoids making the speaker appear to have personally spoken Portuguese. Use dubbing if it improves access and the speaker approves the translation and synthetic voice/likeness use.

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
| **CapCut commercial music** | Materials/music licenses have their own platform and territorial scope. An older international agreement restricts Commercial Sounds sharing to CapCut/TikTok/TikTok for Business; current generic URL returns a US-specific agreement. [S53] | **[UNVERIFIED]** exact Brazil agreement for a given track. Do not assume “commercial” in CapCut grants Facebook rights. Use original audio or a separately cleared soundtrack. |
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
| 0–3s | Strong real image or short authorized talk moment | A concrete question relevant to teachers, e.g. “Como transformar boas ideias em prática?” |
| 3–9s | Two or three authentic workshop/education images | One clear learning benefit, using approved wording. |
| 9–16s | Real approved speaker portraits or a phone invitation | Names/topics; no fabricated endorsement or affiliation. |
| 16–20s | Real location or a clearly conceptual illustration | Confirmed date/city; keep both readable. |
| 20–24s | Still end card | Approved event title and one registration/event action. |

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

## 9. Ethics, Meta policy, consent, privacy, and copyright

### 9.1 Meta's “AI info” disclosure

Meta's 2026 policy communication reiterates an “AI info” label for detected/generated content and says users must use disclosure/label tools for organic posts with photorealistic video or realistic-sounding audio that was digitally created or altered; penalties may apply for failure to disclose. Its broader labeling policy explains industry signals and self-disclosure, with different treatment of generated versus merely edited media. The policy's applicability is broader than the election examples in the 2026 article. [S68] [S69]

For this team:

- Use the platform's available disclosure control for qualifying synthetic realistic video/audio, including an AI dub or a speaker avatar.
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

## 10. A realistic zero-cost and low-cost setup

### Zero additional software spend

- **Layout:** Canva Free using eligible free elements and manually maintained templates. Keep text, dates, logos, and portraits separate.
- **Image help:** ChatGPT/Gemini app free allocations for a small number of backgrounds/illustrations; verify the selected account's current limits and terms.
- **Video:** existing phone recordings, past-event clips, simple timeline/photo animation, and an editor the team already has; test caption/export availability first.
- **Audio:** original approved voice or Meta Sound Collection for authorized Meta uses; retain a music-free master for other channels.
- **Generation fallback:** reuse one approved illustration across multiple crops instead of regenerating each post. No synthetic video is required.

This setup follows observed free access, but it does not promise unlimited AI generations or every automatic feature for free. [S06] [S22] [S48] [S54] [S85]

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
- Generated realistic content is disclosed using Meta's required controls; contextual labels are added when useful.
- Captions are accurate, text is legible on a phone, contrast is adequate, and the message works without sound.
- Cover/Reel/feed crops have been previewed in the actual publishing surface.
- A clean master, original input, editable design, approved copy, permissions, and source/license record are saved.

## 12. Gaps and items to recheck before turning this into public guides

1. **Portuguese performance:** no original test or rigorous pt-BR accent/lip-sync benchmark was completed. Run the proposed five-task image comparison and short audio tests before claiming a language winner.
2. **Brazil account reality:** free quotas, available models, actual checkout taxes, watermark/export functions, and release rollouts were not tested in authenticated Brazil accounts.
3. **Fast-moving changes:** verify Veo after October 22 and older OpenAI image aliases before December 1. Update each public guide's date instead of calling this snapshot “current” indefinitely. [S07] [S32]
4. **Commercial terms:** Meta Muse/Vibes, Hailuo/H3 consumer access, Microsoft/Grok consumer routes, BytePlus/resellers, Captions actors, and certain free avatar exports need exact product/region terms before final recommendations.
5. **Open releases:** Wan 3.0 and MiniMax H3 weight availability/licenses were not established. Qwen-Image-2.1's restricted license was verified; it is not interchangeable with older Qwen releases. [S39] [S43] [S78]
6. **Conflicting pages:** Pika current pricing differs sharply from old FAQs; Synthesia mixes inconsistent credit fields; Suno older/newer rights wording differs; BytePlus indexed prices and table rendering differ. Publish the verified narrow facts plus their caveats, not a fabricated merged offer.
7. **Facebook dimensions:** organic event/Page cover help and Reel minimum/maximum specifications need an authenticated current check. Working sizes above are useful production defaults, with uncertain official claims marked.
8. **No reach guarantees:** no evidence in this research establishes that generating images/video, adding AI motion, using avatars, or following a vendor's virality score improves this particular conference's registrations.

## SOURCES

**All sources below were checked/retrieved on 2026-10-21.** “Living/undated” means a page did not expose a reliable publication date, not that its contents were historically constant. Search-index-only or access-limited evidence is identified. Source IDs link directly to the supporting page; model names, prices, and policy statements above cite these IDs. Original prompts, proposed workflows, arithmetic examples, and recommendations are editorial synthesis, not copied vendor instructions.

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
- **S55 — Meta Page cover dimensions help.** Attempted 2026-10-21; login/temporary-block response. Current full specification not verified. https://www.facebook.com/help/125379114252045
- **S56 — Meta Instagram Reel size help.** Attempted 2026-10-21; login/temporary-block response. Current full specification not verified. https://www.facebook.com/help/instagram/1038071743007909
- **S57 — Meta Event cover help.** Attempted 2026-10-21; throttled. Common 1920×1005 working size is not asserted as a verified official mandate. https://www.facebook.com/help/121298354633398
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
[S57]: https://www.facebook.com/help/121298354633398
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
