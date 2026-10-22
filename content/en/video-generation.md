---
title: "Video Generation: Models & Workflows"
description: Which AI video models are current in October 2026, what they cost, how to write shot-first prompts, how to animate a poster safely, and when a real phone video beats AI for CONAFROEDU 2026.
order: 130
section: create
icon: 🎬
updated: 2026-10-21
---

**What you'll get from this page:** a plain-language map of the AI video generators that are actually current in October 2026, a comparison of what each does well, what it costs and whether there's a free option, a simple "shot-first" way to write video prompts, two step-by-step workflows (a short conceptual clip and an animated poster), and an honest section on when **not** to use generated video. The running example is **CONAFROEDU 2026** — 5–6 December, 100% online.

> [!IMPORTANT] The most useful sentence on this page
> For an academic congress, **a real person speaking into a phone camera beats any AI video.** Use AI video for small abstract inserts and gentle motion on artwork. Use real, consented recordings for everything that involves people, speakers, testimonials or facts.

## The short version

1. **You probably need less generated video than you think.** Most CONAFROEDU Reels should be real speaker invitations, clips from talks and simple animated cards. See [Reels, clips, captions & dubbing](video-repurposing.md).
2. **When you do generate,** make short 5–10-second, text-free, people-free "B-roll" (background footage): paper shapes connecting, books on a table, light moving across a pattern. Add all words, dates and the logo afterwards in Canva or CapCut.
3. **Write one shot at a time:** one subject, one action, one camera move, one mood. Don't ask for a whole story in one prompt.
4. **Free tiers are thin and change often.** Budget a small number of attempts per shot, then fall back to a still image with simple motion.
5. **Sora is gone.** OpenAI closed the Sora app in April 2026 and removed the API in September 2026. Ignore tutorials that recommend it.
6. **Disclose realistic AI video and audio** using Meta's AI label, and review every clip for stereotypes before posting (see [Representing Black & African cultures respectfully](representation-bias.md)).

## Key terms in plain language

| Term | What it means |
|---|---|
| **Text-to-video (T2V)** | You type a description; the model makes a clip from nothing. |
| **Image-to-video (I2V)** | You upload a still image (for example, your poster background) and the model animates it. More control, fewer surprises. |
| **Native audio** | The model creates sound (ambience, effects, sometimes speech) together with the picture. Not every model does this. |
| **Extension** | Asking the model to continue a clip. Each extension costs more and can "drift" (faces, colors and objects slowly change). |
| **Credits** | The currency many tools use. A credit is not a second of video — each model "spends" credits at its own rate. |
| **9:16** | Vertical full-screen format for Reels and Stories (1080 × 1920 pixels). |
| **B-roll** | Supporting footage that plays under a voice or text — the "pretty filler" between real content. |
| **Upscaled 4K** | A lower-resolution clip enlarged by software. It is not the same as footage generated at 4K. |

## Do you even need generated video? (When NOT to use it)

Before opening any AI video tool, go through this table. For CONAFROEDU, most rows point to real footage.

| What you want to post | Best choice | Why |
|---|---|---|
| A speaker inviting people to the congress | **Ask the speaker to record 15–20 seconds on their phone** | A real endorsement is trustworthy. A synthetic speaker is not, even if labeled. |
| An author talking about their paper | Real recording with permission | Academic audiences value real research and real voices. |
| "Last year's congress" footage | **Nothing** — this is the 1st edition | Never generate or imply a previous CONAFROEDU, a crowd or a venue. The event is 100% online. |
| A teaser with dates and the Even3 link | Animated cards in Canva/CapCut (free) | Exact text, no spelling errors, R$ 0. See [Stop-motion & motion graphics with Claude](motion-graphics-claude.md). |
| A 20 November (Consciência Negra) reflection | A real educator's voice, quotes from speakers, typography | A sensitive date deserves real people, not synthetic ones. |
| A 5-second abstract opener (shapes, light, books) | ✅ AI video can help | No people, no facts — low risk. |
| Gently animating the poster background | ✅ Image-to-video can help | You control the starting picture. |
| Translating an English-speaking guest's video | Captions first; AI dubbing only with approval | See [the repurposing guide](video-repurposing.md#ai-dubbing-and-translation-use-with-care). |

> [!WARNING] Fake evidence is a real risk
> Do not generate audiences, testimonials, classrooms "from the congress", certificates, speakers or institutional partners. Anything that a viewer could read as proof that something happened must be real.

## What changed in 2026 (so old tutorials don't mislead you)

- **OpenAI Sora is discontinued.** The web/app closed on 26 April 2026 and the Sora 2 models were removed from the API on 24 September 2026 ([OpenAI help](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)). Beware of unrelated websites that still use the Sora name.
- **Google now recommends Gemini Omni Flash** as its default video model. Veo 3.1 is still the latest Veo version, but its *preview* endpoints in the Gemini developer API were scheduled to shut down on 22 October 2026 ([Google Veo guide](https://ai.google.dev/gemini-api/docs/veo)). That does not mean every Veo product disappears — check what your Gemini app or Flow account shows.
- **New versions arrived in mid/late 2026:** Kling 4.0 (launched 15 October 2026), Seedance 2.5, MiniMax H3 (the model behind Hailuo), Luma Ray3.2, Runway Gen-4.5 and Wan 3.0. Rankings change monthly — don't trust a "best video AI" list from 2025.

## The current models compared (October 2026)

"Best for" below means **worth trying for this brief**, not a universal winner. No hands-on test was run for this guide; this summarizes official documentation.

| Model | What it's good for | Length, audio & vertical | Things to know |
|---|---|---|---|
| **Google Gemini Omni Flash** (Gemini app / Flow / API) | Conversational creation and editing: "now make the light warmer" | 9:16 and 16:9; audio; continues in 3–10-second steps | 4K is upscaled. Google only evaluated dialogue in English — Portuguese speech is untested. [Guide](https://ai.google.dev/gemini-api/docs/omni) |
| **Google Veo 3.1** (Fast / Lite) | Cinematic scenes with sound, first/last-frame control | 8-second clips; portrait or landscape | Developer preview endpoints closing; check your app's model menu. |
| **Kling 4.0** | Camera motion, action, longer narrative shots | Up to 30 s native; extensions up to 2 min | Just launched. Some resolutions are announced as "will be supported". Current plan prices weren't verified. [Launch](https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-officially-launches-next-generation-kling-40-raising/) |
| **Runway Gen-4.5** | Controlled short scenes, clear camera direction, image-to-video | 2–10 s, 720p; 9:16 available for image-to-video | Paid plans for Gen-4.5. Use separate audio unless your screen shows native audio. [Guide](https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5) |
| **Luma Ray3.2** | Reframing and modifying existing footage; keyframe control | 5 or 10 s; 9:16 supported | **No generated audio** for new clips (Modify/Reframe keep the original sound). |
| **MiniMax H3** (via Hailuo) | Realistic motion, reference images, short clips with sound | 4–15 s; 9:16; stereo audio | Downloadable weights have a confusing license; use the hosted app/API and read its terms. |
| **Seedance 2.5** (ByteDance) | Up to 30-second multi-shot promos from references | 30 s in one pass | Uploading real people's photos has permission/verification restrictions. |
| **Wan 3.0** (Alibaba, hosted) | 15–30-second concepts with sound | 480p–1080p, up to 30 s | Tops one human-preference leaderboard for video with audio (Oct 2026). |
| **Grok Imagine Video 1.5** | Short clips with native audio and lip-synced speech | 1–15 s; 9:16 | Portuguese speech quality unverified. |
| **FLUX 3 Video** (Black Forest Labs) | Pay-per-second clips with optional sound | 5–20 s; 9:16 | No subscription needed (pay as you go). |
| **Pika 2.5** | Playful effects and transformations | — | Free **and** Starter plans have **no commercial license**. |
| **Meta Vibes / Muse Video** | Social remix experiments inside Meta AI | — | Rollout in Brazil, limits and rights weren't confirmed. Treat as optional play. |
| ~~OpenAI Sora~~ | — | — | **Discontinued in 2026.** |

> [!NOTE]
> Leaderboards (like Artificial Analysis) measure which clips people preferred on a test set. They don't tell you about Portuguese pronunciation, licensing, cost per usable clip, or how a model portrays Black Brazilians.

## Costs and free tiers

Prices are snapshots from **21 October 2026**, in USD unless stated. Always check the plan page before paying — and prefer monthly over annual billing for a six-week campaign.

| Tool | Free option | Cheapest paid route | Commercial use? |
|---|---|---|---|
| **Gemini app / Flow** | Free video quota not verified — check your account | Google AI Plus **R$ 24,99/month** (200 Flow credits); AI Pro **R$ 96,99/month** (1,000 credits) — [Brazil plans](https://gemini.google/br/subscriptions/?hl=pt-BR) | Check app terms; credits ≠ seconds |
| **Runway** | **125 one-time credits**, watermarked | Standard **US$ 15/month** (625 credits); Gen-4.5 uses 12 credits/second ≈ 52 s of drafts — [pricing](https://runway.com/pricing) | Yes ([usage rights](https://help.runwayml.com/hc/en-us/articles/18927776141715-Usage-rights)) |
| **Luma** | No dependable free plan verified | Plus **US$ 30/month** — [pricing](https://lumalabs.ai/pricing) | Included in Plus |
| **Kling** | Not verified | Current 4.0 price not verified | Paid members: yes ([terms](https://kling.ai/docs/payment-policy)) |
| **Hailuo / MiniMax H3** | Not verified | API about US$ 0.08/s at 768p (beta conditions) | Check current terms |
| **Wan 3.0** | Small regional trial quota (conditions apply) | API from US$ 0.05/s (480p) to US$ 0.20/s (1080p) | Check hosted terms |
| **FLUX 3 Video** | — | From US$ 0.06/s (draft) — 5 s HD ≈ US$ 0.85 — [pricing](https://bfl.ai/pricing) | Yes, under developer terms |
| **Grok Imagine Video** | Not verified | API US$ 0.14/s at 720p | Consumer app outputs: yes; API separate |
| **Pika** | 0 monthly credits | Creator US$ 35/month (first plan with commercial license) — [pricing](https://pika.art/pricing) | **Not** on Free/Starter |

> [!TIP] A realistic budget
> Three 5-second shots × three attempts each at FLUX 3 standard HD = 3 × 5 × 3 × US$ 0.17 = **US$ 7.65**. That's arithmetic, not a promise that three attempts will be enough. Set an attempt limit **before** you start (for example: three tries per shot, then use a still image).

**Zero-budget route:** a free Gemini or Runway allowance (if available on your account) for one or two abstract inserts, plus free Canva/CapCut editing. If nothing free works, a still image with a slow zoom in CapCut is a perfectly good Reel opener.

## Shot-first prompting: how to write a video prompt

Video models work best when you describe **one shot**, like a director talking to a camera operator. Use this order:

1. **Format** — "Vertical 9:16, 5 seconds."
2. **Subject** — what we see (keep it simple; avoid identifiable people).
3. **Action** — **one** main movement.
4. **Camera** — **one** move: slow push-in, static, gentle pan left.
5. **Style & light** — "paper-cut editorial style, soft daylight."
6. **Palette** — your brand colors (see [Build your brand kit](brand-kit.md)).
7. **Audio** — "soft ambient sound only, no speech, no music" (or "no audio").
8. **Exclusions** — "no text, no numbers, no logos, no identifiable people."

**Template:**

```prompt
Vertical 9:16 video, [5] seconds. [SUBJECT — simple, no identifiable people]. [ONE ACTION]. Camera: [ONE MOVE]. Style: [STYLE], [LIGHT]. Colors: [2–3 BRAND COLORS]. Audio: [AMBIENCE ONLY / NO AUDIO], no speech, no recognizable music. No text, numbers, letters, logos or brand marks.
```

**Example — conceptual B-roll for CONAFROEDU:**

```prompt
Vertical 9:16 conceptual video, 5 seconds, for an education congress campaign. A tidy desk with blank notebooks and colorful paper shapes that slowly connect to each other, symbolizing collaboration among teachers. A single slow push-in of the camera. Soft light, navy blue, green and cream palette, editorial paper aesthetic. Keep the objects' shapes stable. No identifiable people, text, numbers, brands or logos. Audio: only a subtle ambience; no speech and no recognizable music.
```

Many models accept Portuguese prompts too. If you prefer, write it in Portuguese — the pt-BR version of this page has the same prompts in Portuguese.

**Iterate one thing at a time.** If the camera shakes, change only the camera line ("camera completely static"). If objects melt, simplify the subject. Don't rewrite the whole prompt each time — you won't know what fixed it.

> [!TIP] Ask your text assistant to help
> Paste your idea into ChatGPT, Claude or Gemini: *"Turn this idea into a single-shot video prompt using this structure: format, subject, one action, one camera move, style, palette, audio, exclusions. Keep it under 80 words. Idea: [your idea]."* See [Prompting basics](prompting-basics.md).

## Workflow 1: a 5-second abstract insert (step by step)

Time: about 30–45 minutes. Cost: R$ 0 if your account's free allowance covers it.

1. **Decide where it goes.** Example: the first 3–5 seconds of a 24-second teaser, before real speaker footage and a date card.
2. **Write one shot** using the template above. No people, no words.
3. **Pick a tool by practical criteria:** does your account have a free allowance? Does it export **9:16**? Is commercial use allowed on that plan? (Runway Free is watermarked; Pika Free/Starter has no commercial license.)
4. **Generate a cheap draft** (lowest quality/shortest length).
5. **Review at full screen on a phone:** melting objects, flickering, accidental letters or symbols, strange hands if anything human appeared, and the audio (generated sound can contain mumbled words).
6. **Fix one instruction** and regenerate. Stop at your attempt limit.
7. **Download** the best version and import it into CapCut or Canva on a 1080 × 1920 project.
8. **Add everything factual in the editor:** "CONAFROEDU 2026", "5 e 6 de dezembro · 100% online", the real logo, captions and the CTA "Inscreva-se pelo Even3".
9. **Export** as MP4, 1080 × 1920, 30 FPS (frames per second).
10. **When publishing,** turn on Meta's AI label if the clip looks photorealistic (see [Disclosure](#disclosure-meta-ai-labels-and-your-own-captions)).

## Workflow 2: animate the poster (image-to-video), safely

The poster has exact Portuguese text, dates and a logo. Video models **re-draw every frame**, so they can quietly break accents ("Educacão"), dates and logos. So:

**Option A — the safe, free way (recommended):** animate *layers* in Canva or CapCut. A slow zoom on the background, the title sliding in, the date card holding still for 3 seconds. Nothing is redrawn, so nothing breaks. See [motion graphics with Claude](motion-graphics-claude.md) for animated countdowns.

**Option B — image-to-video on the background only:**

1. Export the poster **without any text or logo** — just the illustration (see [Image generation](image-generation.md) for making text-free backgrounds).
2. Upload it to an image-to-video tool (Runway Gen-4.5, Gemini/Flow, Kling, Hailuo, Luma…).
3. Use a **motion-only** prompt (the image already defines the scene — describe only how things move):

```prompt
Use this illustration as the first frame. Animate only the small paper shapes: they float slowly and return to their starting position. Static camera. Keep the composition, colors, outlines and lighting. Do not create people, words, logos or new objects. Very subtle movement, no abrupt cuts.
```

4. Check that the colors and shapes stayed the same from first to last frame.
5. In your editor, place the **original text and logo layers on top** of the animated background.
6. Keep **portraits of real speakers still**. Animating someone's face (blinking, smiling, talking) needs their explicit permission — and even then, it rarely helps an academic message.

> [!WARNING]
> Never upload a finished, text-heavy poster and publish what comes out. Check every letter of every frame, or — much easier — don't let the model touch the text at all.

## Audio: native sound, voices and music

- **Native audio is not the same as good audio.** Generated ambience can include mumbled "speech" or odd sounds. Listen with headphones before posting.
- **Portuguese speech is the weak spot.** Google's Omni guide says only English dialogue was evaluated; other vendors don't publish Brazilian Portuguese results. Accent, stress and lip-sync can be wrong. If you must test, try one short line first:

```prompt
A clearly fictional virtual presenter (an AI character), an adult, looks at the camera against a plain background. Steady medium shot, 8 seconds, 9:16. She says in Brazilian Portuguese, with a natural voice and calm pace: "Vamos conversar sobre o futuro da educação?" Do not add any other lines or generate on-screen subtitles.
```

- **Better option:** record a real voiceover by an organizer on a phone and lay it under the B-roll. It's free and sounds like your community.
- **Music:** for Facebook/Instagram, check the **Meta Sound Collection** first. Don't assume CapCut "commercial" sounds or trending tracks are cleared for Facebook promotion. Details in [music licensing](video-repurposing.md#music-what-you-can-legally-use).

## 9:16 Reels: technical settings

| Setting | Use this | Source |
|---|---|---|
| Size | **1080 × 1920** (9:16) | Working master; Instagram accepts 1.91:1 to 9:16 ([Meta help](https://www.facebook.com/help/instagram/1038071743007909)) |
| Frame rate | **30 FPS** | Instagram asks for at least 30 FPS; Facebook recommends 30 FPS or less — 30 satisfies both |
| File | MP4, H.264 video, AAC audio | [Facebook video formats](https://www.facebook.com/help/218673814818907) |
| Length | Editorial target 15–60 s for generated pieces | Facebook no longer applies the old "90-second Reel" rule ([Meta, June 2025](https://about.fb.com/news/2025/06/making-it-easier-create-videos-facebook/)) — check your uploader |
| Text placement | Keep text away from the bottom and right edges | App buttons and captions cover those areas; preview before posting |

## Realistic limitations (what will go wrong)

- **Short clips.** Most models make 5–15 seconds per generation. A 30-second Reel usually means several clips stitched in an editor.
- **Drift.** Faces, skin tone, hair, clothing and colors change between frames and between extensions.
- **Text inside video is unreliable.** Expect wrong accents and garbled letters. Always add text in the editor.
- **Physics and hands.** Objects merge, hands gain fingers, paper bends strangely.
- **Portuguese voices** may sound foreign or caricatured.
- **Cost per *usable* clip** is several times the price of one generation.
- **Account reality differs.** Free quotas, model menus and Brazilian prices vary by account and change without notice. Everything here was checked on 21 October 2026 — re-check before paying.
- **Real people's photos** may be refused by some tools (Seedance has verification rules), and should only be used with consent anyway.

## Representation cautions

AI video can stereotype Black people and African cultures, and video adds new failure modes: **skin tone lightening or shifting between frames, hair texture changing, faces "drifting", or a voice turning into a caricature.** No current model has been verified as the best or bias-free at depicting Black Brazilians.

For CONAFROEDU:

- **Prefer real, consented footage of real educators and speakers**, and work by Black Brazilian photographers and designers.
- If a generated clip includes people, describe them concretely and respectfully (contemporary Black Brazilian educators, varied ages, skin tones and hair — crespo, cacheado, tranças, locs) in roles of expertise — and still review every frame.
- **Don't use Adinkra, Kente, orixás or sacred imagery as decoration.** Use a symbol only when organizers know its meaning and context.
- Reject savannahs, huts, "tribal" costumes or poverty imagery as shorthand for "Africanidades".
- **Watch the whole clip with sound** before approving it.

Full checklist and prompting guidance: [Representing Black & African cultures respectfully with AI](representation-bias.md).

## Disclosure: Meta AI labels and your own captions

Meta requires you to use its **AI disclosure tool** when you post organic content with **photorealistic video or realistic-sounding audio** that was digitally created or altered — and says penalties may apply if you don't ([Meta, 2026](https://about.fb.com/news/2026/02/meta-prepares-for-2026-us-midterms/); [labeling approach](https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/)).

1. When publishing, look for the AI label / "AI info" option in the composer (the exact wording can vary by app and language — check the final screen).
2. Turn it on for realistic synthetic clips, AI dubbing and avatars.
3. For abstract or illustrated inserts, add a short note in the caption when a viewer could be confused, for example: *"Vídeo de abertura criado com IA (ilustração conceitual)."*
4. Don't strip provenance metadata from AI files (Canva's terms forbid removing it).
5. A label doesn't make misleading content acceptable — and there's no evidence that the label by itself reduces reach.

More in [Ethics, policies & LGPD](ethics-legal.md).

## Pre-publication checklist

- [ ] Could a real phone video do this job better? (If yes, use it.)
- [ ] No generated people presented as real speakers, attendees, audiences or a past edition.
- [ ] All text, dates, names and the logo were added in the editor and proofread by a second person (ç, ã, é, ê).
- [ ] The plan/tool used allows commercial/promotional use; no watermark.
- [ ] Watched full screen on a phone, with sound and muted.
- [ ] Representation reviewed with the [checklist](representation-bias.md); no symbols used as decoration.
- [ ] Music is cleared for Facebook/Instagram (or there's none).
- [ ] Exported 1080 × 1920, 30 FPS, MP4; text clear of app buttons.
- [ ] Meta AI label turned on where required; caption explains conceptual AI imagery.
- [ ] Even3 link in the post caption: https://www.even3.com.br/iconafroedu-764690/
- [ ] Project file, prompt, tool/model name and date saved for reuse.

## Next steps

- Turn real talks into Reels: [Reels, clips, captions & dubbing](video-repurposing.md)
- Free animated cards and countdowns: [Stop-motion & motion graphics with Claude](motion-graphics-claude.md)
- Make the text-free backgrounds you'll animate: [Image generation](image-generation.md) and [Image prompt cookbook](image-prompts.md)
- Review people and culture in every asset: [Representing Black & African cultures respectfully](representation-bias.md)
- Where Reels fit in the plan: [Facebook organic playbook](facebook-playbook.md) and [CONAFROEDU 6-week sprint](conafroedu-sprint.md)
- Labels, consent and LGPD: [Ethics, policies & LGPD](ethics-legal.md)
