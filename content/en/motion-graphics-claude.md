---
title: Stop-Motion & Motion Graphics with Claude
description: Ask Claude to build animated countdowns, speaker cards and kinetic-typography quotes, export them as MP4 Reels for free, and assemble real stop-motion sequences, all without writing code.
order: 150
section: create
icon: 🎞️
updated: 2026-10-21
---

**Motion graphics** are short animations made of text, shapes and photos: a countdown that ticks into place, a speaker card that slides in, a quote that appears word by word. They suit an academic congress well, because they keep names, dates and Portuguese accents **exactly right**. AI video generators often get those wrong (see [Video generation](video-generation.md)).

Claude can't "film" anything. What it can do is **write a small web page (HTML) that animates**. You open that page in a browser, record it, and get an MP4 for Reels, Stories or WhatsApp Status.

**What you'll get from this page:**

- Two working CONAFROEDU examples (a 9:16 countdown and a quote card) that you can open, reuse and change.
- Copy-paste prompts for countdowns, speaker cards, kinetic typography and a paper-cut "stop-motion" sequence.
- A free, no-code way to turn the animation into an MP4 (OBS → Canva), plus the paid one-click route (Claude Motion) and who has it.
- A real stop-motion workflow: consistent frames from an image model, assembled in CapCut or Canva.
- Fixes for the three classic problems: **too fast**, **text cut off in 9:16**, **broken Portuguese accents**.
- An optional section for the slightly technical: Claude Code + Remotion, or Playwright + ffmpeg (tested for this guide).

> [!NOTE]
> **Cost:** everything in the main tutorial is free: Claude's Free plan, OBS Studio, HandBrake and Canva Free. Claude Free has usage limits that reset over time; there is no fixed "N animations per day". Claude **Motion**, which exports MP4 directly, is a beta for **Team/Enterprise** plans only (Team: US$25/seat/month, or US$20 billed annually). Plans and features checked on [claude.com/pricing](https://claude.com/pricing) on 21 October 2026.

## See the result first

These two animations were built for this guide in exactly the way described below: self-contained HTML files, no internet connection needed, then exported to MP4. Both use an **alternative example** terracotta/ochre palette (not the official identity; use the committee-approved [brand kit](brand-kit.md)) and plain geometric paper shapes, with no cultural or religious symbols used as decoration.

| Countdown "Faltam 7 dias" (12 s) | Kinetic-typography quote (14 s) |
|---|---|
| ![Animated preview: paper shapes drop in, then the text "CONAFROEDU 2026 – Faltam 7 dias – 5 e 6 de dezembro de 2026 – 100% online – Inscreva-se pelo Even3" appears step by step on a cream background](/images/motion-countdown-preview.gif) | ![Animated preview: on a terracotta background, the words of LDB article 26-A appear one by one, with "obrigatório" and "história e cultura afro-brasileira e indígena" highlighted in ochre, followed by the source and the CONAFROEDU dates](/images/motion-quote-preview.gif) |
| [Open the HTML](/examples/countdown.html) · [Download the MP4](/examples/countdown.mp4) (1080×1920, 30 fps) | [Open the HTML](/examples/quote.html) · [Download the MP4](/examples/quote.mp4) (1080×1920, 30 fps) |

Try the countdown with other numbers by adding `?dias=` to the address: [15 days](/examples/countdown.html?dias=15), [1 day](/examples/countdown.html?dias=1). Add `&guias=1` to see the safe-area guides (more on that under [Troubleshooting](#troubleshooting)). Press <kbd>F5</kbd> to replay.

> [!TIP]
> The quote card quotes **the law itself**: article 26-A of the LDB, as worded by Lei nº 11.645/2008, checked against the [official text on Planalto](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11645.htm). Never animate a quotation you haven't checked at the source. If it's a person's words, get their approval first. AI tools happily invent "quotes" from famous Black thinkers.

## Three different things people call "Claude video"

| What | What it really is | Good for CONAFROEDU |
|---|---|---|
| **Motion graphics** | Claude writes code that moves text, shapes and approved photos | Countdowns, speaker cards, program highlights, quote cards |
| **Stop-motion-style animation** | Movement in visible "jumps" (poses), often with a paper-cut look. It can be made fully in code, or from a series of generated images | A playful, handmade feel for teasers and Novembro Negro content |
| **Physical stop motion** | A phone photographs real objects, moving them a little between shots | Classroom-style videos with paper letters, books, cut-outs |

Claude's own Motion documentation says it animates code and does **not** generate realistic footage or people ([Claude Help](https://support.claude.com/en/articles/17454997-get-started-with-claude-motion)). For realistic video, see [Video generation](video-generation.md).

## Choose your route

| Route | Who it suits | What you end up with | Cost |
|---|---|---|---|
| **1. Claude (Free) Artifact/Design → OBS recording → Canva** | Anyone; no code | MP4 ready for Reels | Free |
| **2. Claude Motion → Export → MP4** | Teams already on Claude **Team/Enterprise** with Motion enabled | MP4 directly from Claude | Team plan; Motion is not listed for Free/Pro/Max |
| **3. Image model frames → CapCut/Canva** | A patient person who likes a handmade look | Stop-motion MP4 | Free tiers, but image allowances vary |
| **4. Claude Code + Remotion, or Playwright + ffmpeg** | A volunteer comfortable installing software | Repeatable, frame-exact MP4s in batches | Free tools (Remotion is free for organizations of up to 3 people) |

**Start with Route 1.** Don't buy an individual Claude Max plan expecting it to unlock Motion: Motion is a Team/Enterprise beta.

## Before you start: five rules that save hours

1. **Give the exact text.** Paste every word that should appear on screen, with accents. Tell Claude not to add anything. Take the facts from the [CONAFROEDU context block](prompting-basics.md#the-conafroedu-context-block).
2. **Ask for 9:16, 1080×1920**, scaled to fit any window without stretching. That's the vertical format for Reels and Stories.
3. **Ask for a self-contained HTML file**: no internet, no CDN (an online code library), no external fonts. Files that load things from the internet often show a blank page later.
4. **Play once, then hold the last frame.** No loop. This makes recording and trimming easy.
5. **No generic "African" decoration.** Use typography, colors and simple geometric shapes. Adinkra symbols, Kente patterns and orixás have real meanings and need knowledgeable review. Read [Representing Black & African cultures respectfully](representation-bias.md) before adding any cultural imagery or AI-generated people.

## Step by step: your first animated countdown (Claude Free)

**Result:** a silent 12-second vertical card saying "Faltam 7 dias", to post on **Saturday 28 November 2026**, 7 days before the congress opens.

**Time:** about 45–90 minutes the first time and 15–30 minutes for the next ones (a planning estimate).

### 1. Turn on file creation in Claude

1. Open [claude.ai](https://claude.ai) and sign in (Free plan is fine).
2. Go to **Settings → Capabilities** and turn on **Cloud code execution and file creation**. Claude's help page lists this as a prerequisite for current Artifacts ([What are artifacts?](https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them)).
3. Start a **new chat**. If the chat offers a **Design** output option, choose it. Design can export standalone HTML. If you don't see it, just paste the prompt in a normal chat.

> [!NOTE]
> Claude changed its Artifacts system in September 2026. Artifacts created before 16 September still work, but new ones use the newer system. Old tutorials that tell you to click a "download code" button may not match your screen. Look for **Export → standalone HTML**, or ask Claude "how do I download this as an HTML file?".

### 2. Paste the prompt

The on-screen text stays in Portuguese because that's what you'll post. (The Portuguese version of this prompt is on the [pt-BR page](../pt-BR/motion-graphics-claude.md).)

```prompt
Create a Design/Artifact and give me a single self-contained HTML file named conafroedu-faltam-7-dias.html, exportable as standalone HTML.
I am not a programmer: don't ask me to install libraries or edit code.

Format: vertical 9:16, 1080×1920, scaled to fit any browser window without distortion. Opaque background. Use system fonts only. No internet, CDN, audio, React or external dependencies. Save with <meta charset="utf-8"> so Portuguese accents display correctly.

Style: paper-cut animation, warm palette (terracotta #b4532a, ochre #d99a2b, cream #f5e9d7, dark brown #3a1d12). Only simple geometric shapes, with no cultural or religious symbols and no generic "African" patterns.

Exact on-screen text in Brazilian Portuguese (do not add, translate or change anything):
"CONAFROEDU 2026"
"Faltam"
"7"
"dias"
"Desenvolvimento, Participação e Educação Antirracista"
"5 e 6 de dezembro de 2026"
"100% online"
"Inscreva-se pelo Even3"
"link na legenda"

Timing: one 12-second animation, then hold the last frame (no loop). 0–2 s shapes and title enter; 2–5 s "Faltam 7 dias"; 5–8 s theme, date and "100% online"; 8–12 s the invitation. Movement in stepped poses at 8 poses per second, like stop motion. No flashing.
Keep all text inside a safe area: top 14%, bottom 22% and 12% on each side, so the Reels buttons and caption don't cover it. Reloading the page restarts the animation.
After building it, tell me how to download and open the HTML file.
```

### 3. Review and correct in plain language

Watch the preview from start to end. Then ask for changes in plain language:

- "The date is breaking onto two lines. Keep '5 e 6 de dezembro de 2026' on one line."
- "Hold the final card longer: the invitation should appear at 8 s and stay still until the end."
- "Make the number bigger and the theme text a little smaller."

Check **every word against the fact sheet**: CONAFROEDU spelling, the date, "100% online", and accents (ç, ã, é).

### 4. Download and open the file

1. Choose **Export → standalone HTML**, or the download option Claude points you to. Save it in a folder you can find, such as `Documentos/CONAFROEDU/animacoes`.
2. **Double-click** the `.html` file. It opens in Chrome, Edge or Firefox.
3. Watch one full playback. Press <kbd>F5</kbd> to replay.

> [!WARNING]
> Never rename a file to `.mp4` to "convert" it. An HTML file is a web page, not a video. The next section shows how to make a real MP4.

### Which number to post on which day

The countdown never updates itself after you post it. Make one MP4 per date. Everything below counts to the opening day, **Saturday 5 December**:

| Post on | Text | Note |
|---|---|---|
| Thu 5 Nov | Faltam 30 dias | Submissions closed on 4 Nov, so this is an **attendance** message |
| Sat 21 Nov | Faltam 14 dias | The day after Consciência Negra; keep 20 Nov for substantive content |
| Wed 25 Nov | Faltam 10 dias | Program release target: pair with "programação disponível" only if it's published |
| Sat 28 Nov | Faltam 7 dias | The example above |
| Wed 2 Dec | Faltam 3 dias | Add "como acessar" information in the caption |
| Fri 4 Dec | Falta 1 dia | Singular! "Falta 1 dia", not "Faltam 1 dias" |

With our example file you just change the address: `countdown.html?dias=14`. If Claude builds yours, ask: "Make the number of days a setting I can change at the top of the file, and use 'Falta 1 dia' when it is 1."

## More prompts: speaker card, quote, paper-cut sequence

### Animated speaker or author card

Use only **confirmed** speakers, with their **approved** name, title and photo. Copy the **session date and time together** from the final approved program (5 or 6 December); confirm any overlaps in the partial Even3 listing. Obtain separate permission before uploading a real portrait to an external AI service. Never let AI "improve" a face or skin tone. Never use a photo without permission.

```prompt
Create a self-contained HTML animation, 9:16 (1080×1920), no internet or external libraries, <meta charset="utf-8">, system fonts.
Only use a speaker photo approved separately for this external AI processing, with the documented privacy conditions; otherwise leave a local placeholder for a person to insert later. I am attaching such an approved photo. Embed it in the HTML file itself and do not alter, retouch, lighten or crop the face.

Exact text (Brazilian Portuguese, do not change):
"CONAFROEDU 2026 · Palestra"
"[EXACT NAME AS APPROVED]"
"[APPROVED ROLE / INSTITUTION]"
"[EXACT TALK TITLE]"
"[CONFIRMAR] — data da sessão · [CONFIRMAR] — horário (horário de Brasília)"
"Inscrições: Even3 · link na legenda"

12 seconds, play once, hold the last frame. The photo slides in during 0–2 s; the name appears at 2 s and stays visible for at least 6 seconds; the title appears at 5 s; the date and invitation appear at 8 s.
Warm terracotta/ochre/cream palette, paper-cut shapes, stepped movement at 8 poses per second, no flashing. Keep text inside the safe area (top 14%, bottom 22%, 12% each side). Test with the longest name and title so nothing is cut off.
```

> [!TIP]
> Build the card **once** with the longest name and longest talk title in your program. If that fits, everyone fits. Then ask Claude to "move all the speaker data into a list at the top of the file" so you only edit text.

### Kinetic typography for a quote

**Kinetic typography** means words that move or appear in rhythm. It works well for a short, verified sentence: a law, an approved quote from a speaker, or the congress theme.

```prompt
Create a self-contained HTML kinetic-typography animation, 9:16 (1080×1920), no internet or libraries, <meta charset="utf-8">, system fonts.
Background terracotta #b4532a, text cream #f5e9d7, highlights ochre #d99a2b.

Small label at the top: "O QUE DIZ A LEI"
Quote (exact text, do not change a single word or accent):
"Nos estabelecimentos de ensino fundamental e de ensino médio, públicos e privados, torna-se obrigatório o estudo da história e cultura afro-brasileira e indígena."
Highlight "obrigatório" and "história e cultura afro-brasileira e indígena".
Source line: dark-brown text on an opaque cream panel, with at least 4.5:1 contrast at its displayed phone size; keep this panel and the final box inside the safe area. Text: "LDB (Lei nº 9.394/1996), art. 26-A, com redação dada pela Lei nº 11.645/2008"
Final box: "CONAFROEDU 2026 — 5 e 6 de dezembro de 2026 — 100% online"

Words appear one at a time, about 4 per second, and stay on screen. Then the source appears, then the final box. Total about 14 s, play once, hold the last frame. Put the quote text and the speed in clearly labeled settings at the top of the file so I can change them without knowing code. Keep everything inside the safe area.
```

### A "stop-motion" paper sequence made entirely in code

This is the easiest way to get a handmade stop-motion look, with no image generator involved.

```prompt
Create a self-contained HTML animation, 9:16 (1080×1920), no internet or libraries, <meta charset="utf-8">.
Style: paper cut-outs on a cream paper background with a subtle paper texture drawn in CSS/SVG. Every movement happens in visible poses at 8 poses per second (use stepped timing, not smooth easing), and the cut-outs tremble slightly between 3 poses like real stop motion.
Scene: a paper notebook opens over 2 seconds; a paper sun rises above it; then a card holds for 5 seconds with this exact text:
"CONAFROEDU 2026"
"5 e 6 de dezembro de 2026 · 100% online"
"Inscrições no Even3"
No people, no cultural or religious symbols, no flashing. Play once and hold the last frame. Total 10 seconds.
```

## Turn the animation into an MP4 for Reels

You now have an `.html` file. To post it, you need a **video file (MP4)**.

### Option A (recommended, free): OBS Studio's Browser Source

[OBS Studio](https://obsproject.com/kb/quick-start-guide) is free recording software for Windows, macOS and Linux. Its **Browser** source plays your HTML file *inside OBS* at full 1080×1920 size, even on a horizontal laptop screen. No browser bars and no other windows get recorded.

1. Follow [OBS setup](setup-tools.md#obs), then **install OBS** from the official site and run the auto-configuration wizard.
2. **Settings → Video:** set **Base** and **Output resolution** to `1080x1920`, FPS `30`.
3. **Settings → Output:** pick a recording folder, format **MKV**, and an **H.264** encoder. Mute the microphone and desktop audio (the card is silent).
4. In **Sources**, click **+ → Browser**. Tick **Local file** and choose your HTML. Set Width `1080`, Height `1920`, and custom frame rate `30` ([OBS Browser Source guide](https://obsproject.com/kb/browser-source)).
5. Click **Start Recording**. Then open the source's **Properties** and click **Refresh cache of current page**. The animation restarts from the beginning.
6. Wait until the final card has held for 2–3 seconds, then click **Stop Recording**.
7. **File → Remux Recordings**, choose the MKV and click **Remux**. You get an MP4 with the same quality, because only the "container" changes ([OBS recording guide](https://obsproject.com/kb/standard-recording-output-guide)).

> [!TIP]
> Want time to click Start before the animation begins? Our example files accept `?pausa=3`, which waits on the background for 3 seconds before the entrances; **trim that lead-in** in the editor. Ask Claude for the same feature: "Add a setting that waits N seconds before the animation starts."

If the **Browser** source is missing on Linux, install the official OBS package, which includes it. As a fallback you can use **Window Capture** of a normal browser window, but then crop away the browser bars, and the sharpness depends on how big the window is on your screen.

### Trim in Canva Free

1. In [Canva](https://www.canva.com), create a **Mobile Video** or **Instagram Reel** (9:16) design.
2. **Uploads → Upload files** → choose the MP4, then drag it to the timeline.
3. Trim the start and end so the video begins at the first movement ([Canva: trim videos](https://www.canva.com/help/trim-videos/)).
4. Optional: add a cover frame or royalty-free music from your own or free assets. Premium elements (marked with a crown) can trigger a payment.
5. **Share → Download → MP4 Video.**

> [!WARNING]
> Uploading the **HTML or an SVG** to Canva does **not** keep the animation. Canva imports images and videos ([Canva upload formats](https://www.canva.com/help/upload-formats-requirements/)). Always record to MP4 first.

**Got a WebM or MOV file instead?** Use [HandBrake](https://handbrake.fr/docs/en/latest/introduction/quick-start.html) (free, open source): **Open Source** → choose the file → an H.264 preset → format **MP4** → **Start Encode**. Check that the dimensions stay vertical (1080×1920), because some presets crop. Canva also accepts WebM and downloads MP4.

### Option B: Claude Motion (Team/Enterprise only)

To buy Team from scratch, the [signup rules](https://support.claude.com/en/articles/9267247-get-started-with-the-team-plan) require **at least two members** and a **business/institutional email for the creator** (Gmail cannot create the organization). Two standard seats cost **US$50/month**, or **US$480 upfront annually**, before tax. Keep the free recording route if the committee does not already have Team.

If your committee already uses Claude **Team** or **Enterprise**, check for **Motion**. It's on by default for Team, and Enterprise owners control it. The documented flow is: choose a **Motion** template in Artifacts → describe the animation → revise in chat/editor → **Export → MP4** ([Get started with Claude Motion](https://support.claude.com/en/articles/17454997-get-started-with-claude-motion)). It counts against your usage. Resolution, maximum duration and orientation controls weren't verified for this guide, so ask Claude to tell you about any missing setting **before** it renders.

```prompt
Use the Motion template to announce a talk. Destination: Facebook Reel, vertical 9:16, ideally 1080×1920, 12 seconds. If any setting is not available, tell me before rendering.
Use the attached photo only with separate permission for this external AI processing and documented privacy conditions; otherwise leave a placeholder for local insertion. Do not alter the face.
0–2 s: a short question about [a real challenge teachers face].
2–7 s: [EXACT NAME], [APPROVED ROLE], [EXACT TALK TITLE].
7–10 s: "5 e 6 de dezembro de 2026 • 100% online".
10–12 s: "Inscreva-se pelo Even3 • link na legenda".
Large text, no invented information, no fast flashes. First propose the script; render only after I approve.
```

### Finish the post

- Watch the MP4 **on a phone**, with sound off.
- Repeat the essential information in the **caption**, since not everyone can see the video: CONAFROEDU, 5–6 December, 100% online, and the real link `https://www.even3.com.br/iconafroedu-764690/`. On Instagram, caption links aren't clickable, so point people to the link in your profile or Story.
- Schedule it in Meta Business Suite for the right date and time ([Scheduling tools](scheduling-tools.md)).

## A real stop-motion workflow with image frames

Here an **image model** draws the frames, such as Gemini's image editing or ChatGPT's image tool. **Claude plans them** and you assemble them. (Claude, including Motion, does not generate images.)

**The math:** at **8 poses per second**, 24 images give **3 seconds** of movement. Add a 5-second final card and you have an 8-second Reel. Playing at a higher frame rate repeats poses; it doesn't create new ones.

**Budget:** 1–3 hours plus waiting for free image allowances to reset (an estimate). **Always test 8 frames first.**

1. **Ask Claude for a continuity sheet.** Frame numbers `0000`–`0023`, one small change per frame, and fixed camera, light, paper texture and shadow direction.

   ```prompt
   Plan a 24-frame stop-motion sequence (frames 0000–0023) for a vertical 9:16 image. Scene, seen from above: a paper notebook on a wooden desk opens gradually, then a paper sun rises above it. No people, no words, no logos, no cultural or religious symbols. Fixed camera, same lighting, same paper texture and shadow direction in every frame. For each frame give: file name, the ONE small change from the previous frame, and what must stay identical. Then write the image prompt for the master frame (frame 0000).
   ```

2. **Generate one master image** in the image tool with Claude's master prompt. Approve it and save it separately.
3. **Edit, don't regenerate.** In the **same** image-editing conversation, attach the master and the latest approved frame and ask for the next pose:

   ```prompt
   Use the approved image as reference. Next frame of the same scene: the paper notebook opens 10 more degrees; everything else stays exactly in the same position. Fixed camera, constant lighting and shadow, same crop and texture. No new text, no new objects, no change of scenery.
   ```

   If a frame "drifts" (the desk changes, shadows jump), restart that frame **from the master** instead of building on the error. Reference images help but **don't guarantee** consistency.
4. **Check and name.** Save `frame-0000.png` … `frame-0023.png` in one folder with no gaps. Delete frames that flicker. Don't put text inside the generated images. Add the event text as a separate final card or as an overlay in the editor.
5. **Assemble.** Choose one of the editors below.

**CapCut (desktop): precise timing.** Follow [editor setup](setup-tools.md#capcut) first. Create a new project → **Import** the PNGs in order → **Menu → Settings → Edit →** set the image duration to **0.125 s** (8 poses/s) before placing them on the timeline. If CapCut rounds it, use **0.25 s** (4 poses/s, slower and choppier) ([CapCut stop-motion guide](https://www.capcut.com/resource/what-is-a-stop-animation)). Add a 5-second final card with the approved text and export **MP4, 1080×1920**. Watch for paid effects and export prompts.

**Canva: simpler, slower.** Create a vertical video. Add each PNG as **its own scene**, in order, set each scene's duration with the clock control, and add the final card for 5 seconds. Then **Download → MP4**. Canva doesn't promise 0.125-second scenes, so expect a slower "pose sequence" and use fewer frames.

> [!TIP]
> **If AI continuity keeps failing**, generate only the background. Then move the **same** paper cut-outs between frames in Canva, or photograph real paper objects with a phone on a fixed stand. That's genuine stop motion, and often faster. Don't photograph identifiable students without proper permission.

AI-generated frames are synthetic images: follow the disclosure guidance in [Ethics, policies & LGPD](ethics-legal.md) and review them with the [representation checklist](representation-bias.md).

## Troubleshooting

### "The animation is too fast"

- Rule of thumb: every phrase should stay still long enough for someone to **read it aloud twice**. A speaker's name needs at least 6 seconds on screen.
- Ask Claude: "Slow everything down by 50% and hold the final card for at least 4 seconds. Put the speed in a setting at the top of the file."
- In our quote example, change `POR_PALAVRA` (time between words) from `0.25` to `0.4`.
- Prefer a **longer hold** over slower movement. People need still text to read.

### "Text is cut off in 9:16" (or covered by the Reels buttons)

- Ask for a stage that **keeps the 9:16 proportion and scales everything relative to its width**, not to the window: "Use aspect-ratio 9/16 and size all text in container units so it scales with the stage."
- Keep text inside a **safe area**, roughly 14% from the top, 22% from the bottom and 12% on each side. The Reels caption, profile name and buttons cover the edges. These margins are a practical habit, not an official Meta specification. Our files show the guides with `?guias=1`.
- Test with the **longest** real text, and check the final MP4 on a phone.
- If a date or name breaks badly, ask: "Keep '5 e 6 de dezembro de 2026' on one line and reduce its size if needed."

### "Portuguese accents are broken" (Ã§ instead of ç, � symbols)

- The file must declare **UTF-8**. Ask Claude: "Make sure the HTML has `<meta charset="utf-8">` as the first line inside `<head>` and is saved as UTF-8."
- Don't copy the code through Word or an e-mail body. Download the file directly.
- If one letter shows as an empty box, the font lacks that character. Ask for "system fonts with full Portuguese support (e.g., Segoe UI, Roboto, Noto Sans, Arial)".
- Check the **exported MP4** as well. Proofread names and accents frame by frame before posting.

### Other common problems

| Problem | Fix |
|---|---|
| Blank page when opening the file | It probably loads something from the internet. Ask for "a genuinely standalone file with no CDN, external fonts or images". |
| It loops forever | "Play once and hold the last frame." |
| The recording starts in the middle | Click Start Recording **before** refreshing the page in OBS, or use a start delay (`?pausa=3`). |
| Recording stutters | Simplify the effects or use 720×1280 **in both** Claude and OBS. Upscaling afterwards won't restore lost detail. |
| Canva asks for payment on export | Remove premium (crown) elements, or keep your OBS MP4. |
| Works in Chrome, not in OBS | Ask Claude to remove unusual effects and external dependencies, or use Window Capture. |

## Review before you post

- [ ] Every name, date, price and link matches the current fact sheet.
- [ ] Accents are correct in the **final MP4** (ç, ã, õ, é, ê, í, ó, ú).
- [ ] All text stays clear of the Reels interface when viewed on a phone; small source/credit lines meet the 4.5:1 contrast reference.
- [ ] The final MP4 is 30 fps, the shared target; [Instagram documents a minimum of 30 FPS](https://www.facebook.com/help/instagram/1038071743007909). This does not establish a universal Facebook upload minimum.
- [ ] Each phrase stays on screen long enough to read; no flashing effects.
- [ ] The message works **with sound off**, and the caption repeats the essentials.
- [ ] Photos are authorized and unaltered; fonts and music are licensed for this use.
- [ ] No decorative cultural or religious symbols without knowledgeable review.
- [ ] A still image version (the final frame) is saved for Feed posts and for people with motion sensitivity.
- [ ] The countdown number matches the posting date.

## For the slightly technical: exact, repeatable exports

Use these when you need **many** cards (one per speaker, one per countdown day) or frame-exact timing without screen recording.

### Playwright + ffmpeg: what we used for this guide (tested)

This method opens the HTML in an invisible browser, **pauses all CSS animations and steps the clock frame by frame**, takes a screenshot of each frame, then joins them into an H.264 MP4. No frames are dropped, even on a slow computer.

**Tested on 21 October 2026** on Linux with Node.js 24, Playwright 1.64.1 and ffmpeg-static 5.3.0. No system ffmpeg was needed: the `ffmpeg-static` npm package brings its own. Rendering took roughly 1–2½ minutes per 12-second card at 1080×1920. The linked assets use **30 fps**; file size depends on the card and export settings.

1. Follow [Node.js and terminal setup](setup-tools.md#nodejs), then install a current LTS version of [Node.js](https://nodejs.org) (we used version 24).
2. Put your HTML file and our script [render-frames.mjs](/examples/render-frames.mjs) in an empty folder, open a terminal there and run:

```bash
npm init -y
npm install playwright ffmpeg-static
npx playwright install chromium

# file, seconds, output name, fps
node render-frames.mjs countdown.html 12 countdown 30
node render-frames.mjs "countdown.html?dias=14" 12 faltam-14 30
node render-frames.mjs quote.html 14 quote 30
```

You get `countdown.mp4` (1080×1920, 30 fps, H.264, yuv420p) and a small `countdown-preview.gif`. The core of the script is this loop:

```js
for (let i = 0; i < total; i++) {
  await page.evaluate((t) => {
    for (const a of document.getAnimations()) { a.pause(); a.currentTime = t; }
  }, (i * 1000) / fps);
  await page.screenshot({ path: `frames/frame-${String(i).padStart(4, '0')}.png` });
}
// then: ffmpeg -framerate 30 -i frames/frame-%04d.png -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an out.mp4
```

> [!NOTE]
> This only works for animations made with **CSS animations/transitions or the Web Animations API**, which is what Claude produces by default for this kind of card. Animations driven by JavaScript timers or `<canvas>` won't be paused by `document.getAnimations()`. In that case, ask Claude to rewrite them in CSS, or use OBS. Also: `npx playwright install` downloads a browser of about 100+ MB and may delete older Playwright browser versions it considers unused. Recent npm versions may print a warning about install scripts. If `ffmpeg-static` ends up without its binary, follow npm's own suggestion (`npm install-scripts approve ffmpeg-static`) and reinstall.

We also tested two related commands from our research with the same `ffmpeg-static` binary:

```bash
# Stop-motion assembly: 24 numbered PNG poses at 8 poses/s, 30 fps output,
# holding the last pose for 5 more seconds (result: exactly 8.0 s)
ffmpeg -framerate 8 -start_number 0 -i poses/frame-%04d.png \
  -vf "fps=30,tpad=stop_mode=clone:stop_duration=5" \
  -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an paper-animation.mp4

# Convert a WebM screen recording to MP4
ffmpeg -i recording.webm -vf fps=30 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an event-reel.mp4
```

(Inside a Node project, the binary is at `node_modules/ffmpeg-static/ffmpeg`.) Playwright's built-in real-time recording (`recordVideo`) also worked, but it records the page loading and depends on machine speed. The frame-by-frame method gives cleaner results.

### Claude Code + Remotion: batches of speaker cards

[Remotion](https://www.remotion.dev/docs/ai) is a framework for making videos with code, and it has official guidance for AI coding agents such as Claude Code. Rendering is frame-based, so every card comes out identical in timing. **License:** free for individuals and organizations of up to **3 people**; 4 or more need a paid license ([Remotion pricing](https://www.remotion.dev/docs/license/pricing)). Check what counts as your "organization" before using it. We did **not** run this route for this guide; follow the [current Remotion docs](https://www.remotion.dev/docs), since commands change.

1. Follow [Node.js and Claude Code setup](setup-tools.md#claude-code), use their official installation instructions and check your Claude plan/billing. This optional route needs a technical volunteer.
2. Create the project (current starter shape from the Remotion docs):

```bash
npx create-video@latest --yes --blank my-video
cd my-video
npx remotion skills add
npm run dev
```

3. Ask Claude Code, inside that folder:

```prompt
In this Remotion project, create a vertical SpeakerCard composition, 1080×1920, 12 seconds at 30 fps. Use useCurrentFrame/interpolate so every frame is deterministic: no Date.now(), real-time CSS timers or unseeded randomness. Data: the attached CSV of approved speakers (name, role, talk title). Photos: the local folder I specify; do not fetch images of people from the web. Paper-cut look with poses at 8 per second. Keep the name visible for at least 6 seconds. First render one example with the longest name and title. Show me where to change colors, text, duration and photo. Deliver an MP4 and a cover still.
```

4. Preview in Remotion Studio, fix the longest name first, render a draft MP4, check it on a phone, and only then render the rest.

## Next steps

- Write the captions that go with each animation: [Copywriting with AI](copywriting.md).
- Make still versions and posters: [Image prompt cookbook](image-prompts.md).
- Turn talk recordings into clips with captions: [Reels, clips, captions & dubbing](video-repurposing.md).
- Plan which countdown goes out on which day: [Campaign timeline](campaign-timeline.md) and the [6-week sprint](conafroedu-sprint.md).
- Check representation in any image or video: [Representing Black & African cultures respectfully](representation-bias.md).
- Schedule the finished MP4s: [Scheduling & publishing tools](scheduling-tools.md).
