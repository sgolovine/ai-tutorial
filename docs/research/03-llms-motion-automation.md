# Research 03 — AI assistants, Claude motion graphics, and organic campaign automation

**Research cutoff:** 2026-10-21. **Audience:** a small, nontechnical team promoting an education conference in Brazil, with Facebook first and no advertising budget. Read in conjunction with `docs/BRIEF.md`.

This is a dated research snapshot, not a guarantee that every account will show the same features. Product facts and prices have source references; the source register gives URLs and publication/update dates where available. All sources were checked on 2026-10-21. **[UNVERIFIED]** marks a missing confirmation, conflicting documentation, an older figure that must not be published as current, or an account-specific entitlement that could not be tested. Recommendations, sample prompts, proposed schedules, and example workflows are editorial synthesis, not measured product comparisons or executed campaigns.

Prices are normal advertised prices unless a billing condition is stated. USD and BRL figures are independent vendor listings, **not currency conversions**. A dollar price does not establish Brazilian checkout pricing, taxes, card charges, or availability. A subscription to an assistant also does not automatically pay for its API, a messaging provider, rendering infrastructure, music, or third-party software. Limits often depend on model, task complexity, file size, account, and rollout.

## A. LLM / AI assistant landscape as of October 2026

### A1. What this team should actually choose

**Suggested free starting stack:** use Claude for Portuguese copy revisions and code-based graphics; Gemini and Gemini Notebook for research grounded in the event's documents; ChatGPT as an alternative general assistant and for image work; Meta AI for quick brainstorming inside familiar apps. Use Meta Business Suite for the calendar and WhatsApp Business for incoming inquiries. This is a practical recommendation based on the capabilities below, not a claim that every tool is objectively best in its category. Start with two assistants, not eight subscriptions.

If the free limits interrupt work repeatedly, buy **one month of one relevant plan**, evaluate a real campaign week, and reassess. Claude Pro and ChatGPT Plus both have US$20 monthly offers; Google AI Plus has a Brazilian R$24.99 offer and AI Pro R$96.99. A more expensive frontier model is rarely necessary to rewrite a caption. [A37] [A07] [A13]

Before any assistant writes public copy, supply an approved fact sheet: event name, date, city, venue, format, ticket URL, current ticket price, speaker names and permissions, audience, accessibility information, contact channel, and confirmed certificate policy. Unknown details should remain `[CONFIRMAR]`. Never let an assistant invent MEC recognition, a speaker's affiliation, a certificate entitlement, attendance numbers, or a discount deadline.

### A2. Assistants and models are different things

An **assistant** is a product with a chat interface, file handling, search, tools, permissions, and a plan. A **model** is one component inside it. Image and video generation often use separate models. An API model's context window and token price are not the included allowance of the consumer app. Two products offering a similarly named model can have different search, file, execution, and privacy behavior. Current OpenAI documentation explicitly separates models used in ChatGPT Work/Codex from Chat, and Google separates Gemini model access from Flow credits. [A06] [A07] [A08] [A13] [A14]

### A3. Current product and model map

| Assistant | Verified late-2026 position | Suggested marketing use | Important limitation |
|---|---|---|---|
| **Claude / Anthropic** | Current public releases include **Opus 5.5**, **Sonnet 5.5**, **Haiku 5.5**, and **Fable 5.1**. Haiku 5.5 was announced October 7; Fable/Mythos 5.1 September 15. | Iterative writing, campaign briefs, substantial documents, coding graphics, reusable instructions. Use Sonnet first for routine work; reserve heavier models for complicated planning. | Model availability and quotas depend on plan. Mythos is not a routine consumer recommendation. [A02] [A03] [A04] |
| **ChatGPT / OpenAI** | Official catalog lists **GPT-6 Astra**, **GPT-6.1 Sol**, and **GPT-6 Luna**. Sol/Luna availability is explicitly **Work and Codex, not Chat**. | General planning, files/data, research with tools, image editing, coding and animation work. | Do not label GPT-6.1 Sol as the universal default Chat model. Exact Chat picker and Brazilian entitlement are **[UNVERIFIED]** here. [A06] [A08] |
| **Gemini / Google** | **Gemini 4 Argon** began global Pro/Ultra rollout October 13. The live plan distinguishes Flash-Lite, Flash, and Pro access. Gems, Canvas, research, and image features are listed. | Research, Google-oriented work, long document synthesis, reusable Gems, visual experiments through Flow. | Some features use separate credits, models, age restrictions, or country rules. [A13] [A14] [A16] |
| **Meta AI** | Available in Brazil across WhatsApp, Facebook, Instagram, Messenger, plus a standalone app. Meta's 2026 research catalog now includes the **Muse** family; treating all current Meta AI as simply “Llama” is outdated. | Convenient first drafts and brainstorming where the team already communicates. | Consumer Meta AI is distinct from business inbox agents and does not imply authority to post or message as a Page. Exact model per Brazilian surface is **[UNVERIFIED]**. [A20] [A21] |
| **Microsoft Copilot** | A consumer assistant plus Copilot capabilities in Microsoft 365 plans; the Brazilian plan page lists Personal, Family, and Premium. | Teams already working in Word, Excel, PowerPoint, and Outlook; first drafts and spreadsheet explanations. | Consumer, work-account, and Copilot Studio offers are different. A family subscription does not necessarily give each person AI access. [A22] |
| **Grok** | The live developer catalog identifies **Grok 4.7** as flagship; older indexed pages still show 4.6. An October 12 announcement introduced **The X Subscription**, bundling Grok, Cursor, and X. | Web/X-oriented discovery and creative variants; optional image/video experiments. | Consumer model entitlement can differ from the API. Older SuperGrok/Heavy pricing tables are not a reliable description of a new subscriber's offer. [A23] [A24] |
| **Perplexity** | Search-first assistant with sources; current plans also advertise Research, file/app creation, Computer, and Comet. | Finding official event-listing requirements, partner institutions, and source-backed background information. | A citation can be irrelevant or misread. Open it and verify. Advanced models and agent work have additional limits/credits. [A25] [A26] |

### A4. Cost and access table

| Product | Free access | Paid price verified or qualified | Limits and Brazilian buying notes |
|---|---|---|---|
| **Claude** | US$0; current page lists search, code/files, Artifacts, Design, Slides, Docs, Skills; model access is narrower than paid. | Pro **US$20/month**, or **US$200/year** billed upfront; Max from **US$100/month**, with 5×/20× Pro usage choices. Team standard **US$25/seat/month**, or **US$20** with annual billing; listed for teams of 2–150. | Usage is not unlimited. Fable access differs: Pro uses credits; Max has a specified share of weekly allowance. Current page advertises Max API credits, so the blanket older claim “Claude plans never include any API credits” is also outdated. Exact BRL price **[UNVERIFIED]**. [A01] |
| **ChatGPT** | US$0; Learn documents Luna access in the desktop app subject to rollout. | Go **US$8/month**; Plus **US$20/month**; Pro tiers **US$100, US$200, US$500/month**. | Work and Codex share usage. Additional credits may extend use. Exact message/image/agent allowances and BRL checkout prices **[UNVERIFIED]**; do not repeat an old “Pro is always $200” table. [A07] |
| **Gemini / Google AI** | R$0/US$0 with a Google account. | Brazil: Plus **R$24.99/month**; Pro **R$96.99/month**; Ultra **R$779.90** or **R$999.90/month**, depending on allowance. US page: Plus **US$4.99**, Pro **US$19.99**, Ultra **US$99.99/US$199.99 per month**. | Brazil page advertises Plus 2× and Pro 4× free usage; Ultra tiers 5×/20× Pro. Flow credit amounts are separate: Plus 200, Pro 1,000, Ultra 10,000/25,000. Confirm recurring checkout price rather than a trial banner. [A13] [A14] |
| **Meta AI** | Consumer assistant available without a separately verified paid assistant requirement in the documented Brazil launch. | A standalone Brazilian premium Meta AI plan/price is **[UNVERIFIED]**. | Do not confuse Meta Verified/Meta One business subscriptions, paid broadcasts, or business AI access with paying for the consumer assistant. Exact daily generation limits **[UNVERIFIED]**. [A20] [C04] [C06] |
| **Microsoft Copilot** | Free assistant; paid plans expand limits. | Brazil: Microsoft 365 Personal **R$51/month**, Family **R$60/month**, Premium **R$109/month**. Premium annual listing **R$1,089/year**. | Current Family/Premium text says AI benefits are for the subscription owner. Exact USD equivalent, fair-use counts, and particular app entitlements **[UNVERIFIED]**; do not convert BRL into a fabricated US list price. [A22] |
| **Grok / The X Subscription** | Free, limited usage. | New offer: Plus **US$8**, Premium **US$30**, Super **US$100**, Ultra **US$200/month**. | Announcement lists paid usage ratios of base/4×/15×/50×. Existing SuperGrok subscriptions can remain on old plans. BRL and exact per-feature caps **[UNVERIFIED]**. [A23] |
| **Perplexity** | US$0; basic answers with citations, constrained advanced use. | Pro **US$20/month**; Max **US$200/month** on current pricing page. | Computer credits and research/model limits differ. Do not interpret a bonus credit grant as a monthly recurring allowance. Official BRL listing **[UNVERIFIED]**. [A25] [A26] |
| **Mistral Vibe, formerly Le Chat** | Limited chat/search, creation, and coding. | Current page displays Pro **US$14.99/month**, excluding tax, with an education toggle/offer also visible. | Verify the selected offer and eligibility at checkout. Fair-use limits apply; BRL price **[UNVERIFIED]**. It is no longer enough to describe the interface only as “Le Chat.” [A32] [A33] |

**No reliable universal message-count table:** Claude's allowances, Gemini's five-hour/weekly compute budgets, and ChatGPT's model/task-sensitive use cannot honestly be reduced to a stable “N prompts per day” across all accounts. Publish the quota type, the source date, and where the user can inspect their own allowance. Gemini's current help explicitly describes five-hour resets up to a weekly limit. [A01] [A07] [A15]

### A5. Strengths by marketing task, including pt-BR

The following is an **editorial trial order**, not a Portuguese benchmark. No current controlled head-to-head test of Brazilian education-conference copy was established in this research. Claims that any assistant is “the most fluent in pt-BR” remain **[UNVERIFIED]**.

| Task | First tools to try | How to judge the output |
|---|---|---|
| Warm, precise pt-BR captions and speaker introductions | Claude; compare ChatGPT and Gemini | Natural phrasing, local register, correct accents, factual fidelity, and a useful call to action. |
| Current web research with links | Perplexity, Gemini research, Claude search, ChatGPT with web tools | Is the source official, dated, actually read, and about Brazil? |
| Long PDFs and event knowledge | Gemini Notebook; Claude Projects; ChatGPT file workflows | Can a reviewer trace each claim to the approved document and version? |
| CSV analysis of organic performance | ChatGPT Work/Codex, Claude code/files, Gemini; Copilot if already using Excel | Recompute rates; check denominators, missing values, time zones, and attribution. |
| Graphics with precise words, layout, and timing | Claude code/Artifacts/Motion; ChatGPT coding + Remotion | Correct Portuguese, readable phone typography, editable timing, successful export. |
| Image creation and editing | ChatGPT image tools; Gemini/Flow; Meta AI as a convenient alternative | Exact names and logos, rights, speaker likeness, visual consistency. |
| Cinematic generated video | Evaluate separate Google Flow/Omni/Veo and OpenAI Sora offers | Available credits, Brazil access, clip length, continuity, watermarking, and export license. |
| Microsoft document production | Copilot in the team's existing Microsoft apps | Does the actual license enable the desired feature for that user? |
| Low-cost developer automation or local experimentation | DeepSeek, Qwen, Mistral, Meta open weights | Setup effort, privacy, license, hardware, tool support, and real total cost. |

These trial choices derive from documented capabilities, not measured superiority. [A01] [A06] [A09] [A13] [A17] [A22] [A25] [A28] [A30] [A32]

**Suggested pt-BR evaluation:** give three assistants the same approved fact sheet, ask for a 70-word Facebook invitation, a 20-word Reel hook, a reply to “Tem certificado?”, and an institutional email. Have two Brazilian readers score accuracy, naturalness, clarity, inclusiveness, and effort required to repair the copy. Remove product names from the drafts before scoring. A small task-specific comparison is more useful than an English coding leaderboard for choosing a caption writer.

Example reusable prompt:

```text
Você é assistente de comunicação de um congresso de educação no Brasil.
Use somente a ficha oficial abaixo. Escreva em português brasileiro natural,
acolhedor e profissional, sem tom de tradução, exageros ou promessas vagas.
Público: [professores/coordenadores/gestores]. Região: [cidade/estado].
Objetivo: [objetivo]. Canal: Facebook, publicação orgânica.

Entregue três versões de até 80 palavras, cada uma com um único convite
para ação. Preserve nomes, data, valores e URL exatamente. Não invente
certificação, palestrante, vagas restantes ou prazo. Use [CONFIRMAR] quando
faltar informação. Ao final, liste fatos que precisam de revisão humana.

FICHA OFICIAL: [colar conteúdo aprovado e data de atualização]
```

### A6. Features worth teaching, and terminology that has changed

**Claude:** Projects hold persistent project context; Skills package repeatable methods; Artifacts provide editable outputs beside a chat. Current official documentation lists Docs, Slides, and Design on all plans, Dashboards beta on paid plans, and **Motion beta on Team/Enterprise**. Claude in Chrome became generally available on paid plans August 26. These are different capabilities: asking for HTML animation is not the same as having Motion's direct MP4 export. See Part B. [A01] [A05] [A34] [B01]

**ChatGPT:** current Learn material describes files, images, plugins, browsing, and recurring scheduled work. Web tasks and local desktop tasks have different access to files; local scheduled tasks require the machine and app to remain running. GPT-6 Sol/Luna naming applies to Work/Codex, not the ordinary Chat picker. **Custom GPTs require a date warning:** OpenAI now documents an Enterprise transition to plugins, which package skills and app capabilities. That does not prove every personal GPT has already disappeared; a universal retirement date is **[UNVERIFIED]**. [A08] [A10] [A11]

OpenAI's current image API documentation lists **GPT Image 2.5 Sunburst/Flare** as well as earlier image models. Sora 2 Pro is documented as a video model with synchronized audio. Neither API listing establishes free Brazilian consumer availability or inclusion in a particular ChatGPT subscription. **Sora app access, consumer price, monthly videos, and watermark/export entitlement in Brazil: [UNVERIFIED].** Keep that warning in the public guide instead of promising “Plus includes unlimited Sora.” [A09] [A12]

**Gemini:** Gems are reusable assistant configurations; Canvas is a creation/work area; **Gemini Notebook** is the current name on Google's official support and plan pages for the product many users know as NotebookLM. Standard currently lists **100 notebooks and 50 sources per notebook**; Pro lists 500 notebooks and 300 sources per notebook. Use it for the approved speaker bios, program, ticket FAQs, and venue information. Source-grounded answers still need checking against the original text. [A13] [A17]

**Google video:** Flow is a separate creative surface. The current subscription page emphasizes **Gemini Omni Flash**; Veo remains relevant in Google's generation ecosystem, including Notebook output documentation. Older “Veo-only” descriptions of what a new Google subscription buys are incomplete. Exact current Veo version and model-specific render cost in this team's Brazilian account are **[UNVERIFIED]**. Use the account's displayed credit estimate before generating. [A13] [A14] [A17]

**Meta AI versus business agents:** Meta AI is the general assistant the team can ask for ideas. Meta Business Agent is a business-facing system for customer conversations and actions, introduced in its current branding June 3, 2026. These must not be conflated with a Page's deterministic instant/away replies or WhatsApp Business quick-reply shortcuts. [A20] [C04] [C05]

### A7. Open models: useful options, with real qualifications

“Open weights,” “open source,” “free web chat,” and “free to operate” are separate statements. A model may permit downloading weights but still impose license conditions; hosting requires hardware or a paid provider. A downloadable model does not automatically provide live web search, an inbox connection, a scheduler, or an image renderer.

| Family | Verified 2026 evidence | Useful role for this project | Cost/access qualification |
|---|---|---|---|
| **Meta Llama / Muse** | Llama remains a familiar ecosystem, but Meta's April–October 2026 releases use Muse naming. **Muse Spark Open** weights were announced October 15. | A technical volunteer could explore local drafting or an internal assistant; generally unnecessary for the nontechnical team. | Do not call all Muse releases open. Distinguish the specific open checkpoint and license from hosted/proprietary models. Hardware/hosting is additional. [A21] [A27] |
| **Qwen** | Qwen3.6-27B was released as open weights April 21. Qwen3.7-Max's May announcement explicitly calls it **proprietary**. | Coding, structured transformations, multilingual experiments, local deployment where appropriate. | “Qwen is open source” is too broad. Latest October default and universal free-chat cap **[UNVERIFIED]**. Alibaba hosted API is separate from downloaded weights. [A28] [A29] |
| **DeepSeek** | Current pricing identifies **DeepSeek-V4.1-Flash-1017** behind `deepseek-flash`, and continues listing V4 Pro. This supersedes September material suggesting all Pro requests would be redirected. | Low-cost API drafting/classification if a technical helper builds and monitors the workflow. | Current Flash cache-miss input/output: **US$0.30/US$1.20 per million tokens at peak**, half off-peak; search/fetch billed separately. This is not a consumer subscription price. Free hosted-chat quotas and Brazilian paid plan **[UNVERIFIED]**. [A30] |
| **Mistral** | **Large 4** public preview announced October 6; changelog says open weights “coming soon.” Small 4 remains an open model. Le Chat is now presented as **Vibe**. | Document and coding experiments; a free alternative assistant; local work with an actually released eligible checkpoint. | Do not say Large 4 weights were already downloadable just because the model is described as open-weight. Latest weight availability **[UNVERIFIED]**. See Vibe prices above. [A31] [A32] [A33] |

For this campaign, local models are a secondary path. They make sense when a capable volunteer has a concrete privacy or automation requirement and can maintain the system. A weak local model on an old laptop may cost more team time than a free hosted assistant.

### A8. Benchmarks and Arena standings: dated evidence, not a purchasing verdict

The official **Text Arena** page retrieved on October 21 displayed an **October 20, 2026** snapshot, 8,900,458 votes and 417 models. Selected entries:

| Displayed rank | Model / setting | Score shown |
|---|---|---|
| 1 | Gemini 4 Argon, High | 1524 ± 9, **preliminary** |
| 2 | Muse Wonder, Max | 1510 ± 9 |
| 3 | Claude Opus 5.5, High | 1509 ± 7 |
| 4 | Claude Fable 5, High | 1504 ± 4 |
| 6 | Claude Fable 5.1, Max | 1503 ± 6 |
| 28 | GPT-6.1 Sol, Max | 1479 ± 8 |
| 30 | Claude Sonnet 5.5, xHigh | 1477 ± 7 |
| 34 | GPT-6 Astra, Max | 1476 ± 6 |

Rank spreads overlap; different settings are different entries. These figures are a snapshot, not permanent rankings. [A35]

Artificial Analysis's current main leaderboard identifies **Opus 5.5 and Sonnet 5.5 at max with fallback** as its highest-intelligence models. Older search-indexed evaluation pages still showed Fable 5.1/Astra leading a different snapshot. Do not merge scores across index revisions, fallback policies, or dates. Exact current numeric index scores are **[UNVERIFIED]** in this memo; the retrieved main page established the ordering, not an independently captured full numeric export. [A36]

The apparent disagreement is useful: Arena measures preference over its tasks; composite benchmarks measure a different mix of abilities. Neither establishes conversion performance, truthfulness about this event, or native pt-BR fluency. Vendor coding scores are relevant to choosing an animation-building assistant, but not sufficient evidence for choosing the team's public voice.

## B. Motion graphics and “stop motion” with Claude

### B1. Three different things that people call “Claude video”

1. **Motion graphics:** Claude writes code that animates text, shapes, photos, or charts. Good examples are a speaker card, a countdown, a moving program timeline, and kinetic typography.
2. **Stop-motion-style animation:** images or objects change in visibly discrete poses, often with paper textures and deliberately stepped timing. This can be built entirely with code or assembled from generated images.
3. **Physical stop motion:** a camera photographs real objects repeatedly after small movements. Claude can plan and assemble it, but code-generated frames are not physical stop-motion footage.

This distinction matters because polished event graphics usually need accurate typography and timing more than photorealistic video. Claude Motion's own documentation says it animates code and does **not** generate realistic footage or people. [B01]

### B2. Choose the easiest route that produces the needed file

| Route | Who it suits | Deliverable | Cost and limitation |
|---|---|---|---|
| **Claude Motion beta** | Team/Enterprise account with Motion enabled | Native MP4 export | Verified current option; **not currently listed for Free/Pro/Max**. Counts against usage. [B01] |
| **Custom HTML/SVG/React Artifact + recording** | Beginner with a free or individual Claude account | Screen-recorded video, then trimmed/converted | Code preview is not automatically an MP4 exporter. Capture quality depends on machine and recorder. [A05] [B02] [B03] |
| **Canvas + MediaRecorder** | A curious beginner working with Claude, preferably a technical helper | Browser-produced video; often WebM | Supported MIME/codec combinations differ. Detect support and convert if necessary. [B04] |
| **Claude Code + Remotion** | Someone willing to install software and run a few commands | Reproducible MP4, stills, optional GIF | More setup, but strong control over frames, timing, and batches. License depends on organization size/use. [B07] [B08] [B09] [B10] |
| **HyperFrames** | Agent-assisted HTML video workflow | Project ZIP → preview → MP4 | Official workflow exists. Current hosted quota, export resolution, watermark, and paid price **[UNVERIFIED]**. [B11] |
| **Motion Canvas** | Technical volunteer, especially educational diagrams | Image sequence or FFmpeg video exporter | Code-based tool, not a simple consumer editor. Official FFmpeg exporter installs its dependency. [B12] |
| **Lottie / dotLottie** | Reusable vector motion for websites or a compatible renderer | JSON/dotLottie, then convert to video/GIF | LottieFiles accepts Lottie JSON/dotLottie for its MP4 converter; arbitrary HTML is not that format. [B13] |

### B3. Workflow 1 — native Claude Motion, when the account has it

The documented path is to choose a Motion template from Artifacts, describe the animation, revise through chat/editor, and choose **Export → MP4**. On Team it is on by default; Enterprise owners control availability. This is the cleanest current non-developer export route, provided the team already has the right plan. Do not buy an individual Max plan expecting it to unlock Motion. [B01]

**Proposed conference workflow:** attach an approved speaker photo and fact sheet; request a short vertical speaker announcement; inspect every frame containing text; revise spacing and timing; export; review the file on a phone; add captions/music in the team's editor if necessary; upload a draft in Business Suite. Requested resolution, maximum duration, GIF export, and exact native orientation controls are **[UNVERIFIED]** until tested in the account.

Example prompt:

```text
Crie uma animação com o template Motion para anunciar uma palestra.
Destino: Reel no Facebook; quero formato vertical 9:16, idealmente 1080×1920.
Duração desejada: 12 segundos. Se alguma configuração não estiver disponível,
explique antes de renderizar. Use a foto autorizada anexa, sem alterar o rosto.

0–2 s: pergunta curta sobre [problema real de professores].
2–7 s: [NOME EXATO], [CARGO APROVADO], [TÍTULO EXATO DA PALESTRA].
7–10 s: [DATA] e [CIDADE]. 10–12 s: “Confira a programação”.
Use [CORES] e texto grande. Não invente informações. Sem flashes rápidos.
Mantenha cada frase legível e o rosto longe das áreas de interface do Reel.
Primeiro proponha o roteiro; depois gere a animação aprovada.
```

### B4. Workflow 2 — a free/custom Artifact, then screen recording

Artifacts can be requested conversationally, iterated beside chat, and used as custom interactive outputs. An Artifact link is a preview/share destination; Facebook needs an actual supported media file, not the HTML source or a link masquerading as a video. Claude Academy provides a real eight-minute Artifacts tutorial and discusses exporting work to destination formats. [A05] [B02]

**Proposed beginner steps:**

1. Gather the approved logo, two colors, exact text, and a licensed font or system font.
2. Ask Claude for **one self-contained HTML file** with a vertical stage and no external dependencies.
3. Ask for Play, Pause, Replay, and a clean presentation view. Controls should sit outside the captured stage.
4. Preview and correct names, accents, cropping, and pacing. Start with one 8–12-second graphic.
5. Download/open the HTML locally if the Artifact preview is too small or includes interface clutter.
6. Use a recorder to capture only the stage. OBS's official quick-start covers sources, recording settings, and test recordings. Set a vertical recording canvas if available; do not assume a landscape display will yield a full-resolution vertical video. [B03]
7. Record from a clean reset, with notifications off and the pointer outside the stage. Keep the tab visible.
8. Trim the beginning/end. Convert to MP4 if required, or import a supported recording into Canva.
9. Watch the result on a phone with audio muted before scheduling.

Example prompt for an actual code-generated artifact:

```text
Crie um Artifact HTML autocontido para um vídeo de 10 segundos, 1080×1920.
Use HTML, CSS e SVG; sem React, CDNs, fontes externas ou instalação.
Tema: recortes de papel e caderno escolar. Texto exato: “Faltam 7 dias”,
“[NOME DO EVENTO]”, “[DATA] • [CIDADE]”, “Veja a programação”.

Quero estética de stop motion: movimentos em passos, pequenas rotações
determinísticas e textura discreta. Atualize as poses 8 vezes por segundo,
mas preserve a leitura; nada deve tremer aleatoriamente a cada renderização.
Inclua Replay/Pause fora da área de gravação, frame inicial estável,
animação com tempo total definido e versão estática para revisão.
Use somente formas e os arquivos autorizados que eu anexar.
```

**Practical limits:** a browser can drop frames, a font can load late, and screen capture can expose private tabs or notifications. CSS/SVG animation may not survive import into a design editor. Canva documents video upload formats including MP4, MOV, WebM, and GIF; importing an SVG does not establish that embedded scripts or animation will execute. The robust interchange is a rendered video. [B03] [B05]

For a live countdown, give the exact target timestamp and event time zone. For a rendered Reel, make the countdown a **fixed message** such as “Faltam 7 dias,” assigned to the correct publication date. An exported video will not keep counting down after publication.

### B5. Workflow 3 — canvas recording without screen-capture chrome

Ask Claude to draw everything into a canvas and offer an export button using `captureStream()` and `MediaRecorder`. Request runtime MIME support checks rather than hardcoding MP4 support. MediaRecorder can record a MediaStream, but browser support for a particular container/codec varies. External images also need correct loading and cross-origin handling. An arbitrary DOM/SVG scene is not automatically captured by `canvas.captureStream()`. [B04] [B15]

```text
Transforme a animação em um canvas 1080×1920 e adicione um botão de exportação.
Renderize texto, fotos e formas no próprio canvas. Aguarde imagens e fontes.
Verifique MediaRecorder.isTypeSupported; mostre o formato real produzido.
Não renomeie WebM para MP4. Se só houver WebM, ofereça o arquivo WebM e
instruções simples de conversão. Reinicie a cena antes da gravação e pare
depois de exatamente 12 segundos. Explique limitações de navegador.
```

A helper can convert a recording with FFmpeg. These are **illustrative commands, not commands executed for this research**; adapt filenames and inspect the output. FFmpeg's official manual documents image-sequence input, filtering, encoding, and container options. A build must include the selected encoder. [B06]

```bash
# Convert an already vertical recording. This does not fix a wrong aspect ratio.
ffmpeg -i recording.webm -c:v libx264 -pix_fmt yuv420p \
  -movflags +faststart -an event-reel.mp4

# Assemble same-size, zero-padded PNGs at 8 source poses/second,
# repeating frames into a 24-fps output without smoothing the poses.
ffmpeg -framerate 8 -start_number 0 -i frames/frame-%04d.png \
  -vf "fps=24" -c:v libx264 -pix_fmt yuv420p \
  -movflags +faststart -an paper-animation.mp4

# Optional small GIF preview; keep the MP4 as the social-video deliverable.
ffmpeg -i event-reel.mp4 \
  -vf "fps=10,scale=540:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse" \
  preview.gif
```

Use MP4 as the campaign's rendered video master; use GIF for lightweight previews where needed. GIF has no audio and is a poor substitute for a full-quality Reel. Resolution and frame-rate choices above are production suggestions, not a claim about Facebook's current maximum upload specifications.

### B6. Workflow 4 — Claude Code and Remotion for repeatable speaker cards

Remotion has official AI/coding-agent documentation, a beginner project guide, Studio previews, and render instructions. This is a real supported workflow, not just a social-media demonstration. Its current license is free for individuals and organizations up to **three people**; organizations/collaborations of **four or more** require a license. Creator pricing is listed at US$25/seat/month; automated products have different pricing. Check the actual organization, not only the number of people touching the keyboard. [B07] [B08] [B09] [B10]

**Proposed steps for a willing beginner with help:**

1. Install Node.js and Claude Code using their official setup instructions; confirm the Claude plan/billing before a long session.
2. Ask Claude Code to create a dedicated local Remotion project. Review any proposed installs.
3. Use Remotion's current agent guidance rather than a random downloaded prompt pack.
4. Supply local, approved photos and a small CSV of speaker names/titles; omit attendee data.
5. Ask for one 1080×1920 composition, a fixed frame count, and frame-based animation.
6. Preview in Remotion Studio. Correct the longest speaker name and longest title first.
7. Render a draft MP4; watch start, middle, ending, accents, and photo crop.
8. Render the remaining cards from the same template only after the prototype is approved.

The official current starter example uses the following shape; confirm the live guide before copying commands, since package versions change. [B08]

```bash
npx create-video@latest --yes --blank my-video
cd my-video
npx remotion skills add
npm run dev
```

```text
Neste projeto Remotion, crie uma composição SpeakerCard vertical, 1080×1920,
12 segundos a 30 fps. Use useCurrentFrame/interpolate ou recursos atuais
equivalentes para que cada frame seja determinístico; sem Date.now(),
temporizadores CSS dependentes de tempo real ou aleatoriedade sem seed.

Dados: [CSV aprovado]. Fotos: [pasta]. Não busque imagens de pessoas na web.
Use recortes em papel com poses a 10 fps dentro do vídeo de 30 fps.
Priorize nomes legíveis e mantenha o título visível por tempo suficiente.
Primeiro renderize um exemplo com o nome e título mais longos. Mostre onde
alterar cores, texto, duração e foto. Entregue MP4 e um frame de capa.
```

A real example to study is Fazt Code's **“Claude Code can create videos (using Remotion)”**, published March 20, 2026: project creation, AI-generated animation, revision, and rendering. It demonstrates the approach, but its UI/package details should be checked against current Remotion docs. It is an independent creator's tutorial, not an Anthropic guarantee. [B14]

### B7. HyperFrames, Motion Canvas, and Lottie: when each makes sense

**HyperFrames:** the official create page gives `npx skills add heygen-com/hyperframes`, `npx hyperframes init my-video`, an agent authoring step, and ZIP import for MP4 rendering. The live page says imported projects remain private until publication. This is promising for HTML-oriented motion, but do not promise a permanently free hosted render service or a particular export resolution without testing the current offer. [B11]

**Motion Canvas:** good for explaining ideas with moving diagrams and educational scenes. Its official exporter can produce video through FFmpeg, while the image-sequence route lets a helper assemble frames separately. It is more technical than the Artifact/recording route. Avoid introducing it in the beginner guide unless a team member actually wants to maintain code. [B12]

**Lottie:** useful when the same vector animation will appear in a website and a compatible player. A helper can ask Claude for a simple compatible animation, validate it, then use a Lottie converter. LottieFiles' MP4 tool explicitly takes JSON/dotLottie, with a displayed 20 MB limit. Conversion does not guarantee every effect will match the original editor. Do not tell a beginner to rename an SVG or HTML file to `.json`. [B13]

### B8. Generated frame sequences versus physical stop motion

**AI-generated stop-motion-style sequence — proposed workflow:**

1. Write a 6–10-second storyboard with a fixed camera, background, light, palette, and character/object reference.
2. Generate one approved master image in an image tool. Use an imaginary paper notebook/mascot rather than an unlicensed speaker likeness.
3. Use image editing/reference features to request successive poses while preserving the composition. Do not assume a seed guarantees consistency across unrelated models or interfaces.
4. Have Claude create a frame manifest: filename, action, hold duration, text overlay, and approved source image.
5. Review for changed fingers, logos, spelling, shadows, and flicker. Put critical pt-BR text in the code/editor overlay rather than regenerating it inside every image.
6. Assemble approved frames in a video editor or with the FFmpeg image-sequence method above.
7. Add a final event-information card with stable typography and a clear viewing time.

At eight distinct poses per second, ten seconds means **80 distinct frames**. Twelve images held for longer create a simpler pose sequence, not eighty unique stop-motion steps. Start with fewer key poses and one scene; generation time, credits, and continuity repairs can exceed the effort of a code-based paper-cut animation. Image generation/editing capabilities are documented by OpenAI and Google; consistency quality in this exact workflow is **[UNVERIFIED]** and must be judged on the actual frames. [A09] [A13]

Example frame-edit prompt:

```text
Use a imagem aprovada como referência. Próximo quadro da mesma cena:
o livro de papel abre 10 graus; todo o restante permanece na mesma posição.
Câmera fixa, iluminação e sombra constantes, mesmo recorte e textura.
Sem texto novo, sem novos objetos, sem mudança de personagem ou cenário.
Objetivo: sequência de animação com aparência de recorte de papel.
```

**Physical alternative:** fix a phone above a desk; lock exposure/focus if the app permits; light the desk consistently; photograph paper letters or classroom objects after small movements; have Claude plan the shot list, naming, assembly, and captions. This is the route that produces actual stop-motion photography. Use original objects and team-created materials; do not include identifiable students without appropriate permission.

### B9. Final export and accessibility review

Recommended team review: check event facts against the current sheet; preserve authorized photos; inspect Portuguese diacritics; leave practical margins for Reel controls; keep a high-contrast title; allow enough time to read; communicate the message with audio muted; avoid flashing effects; obtain rights to music and fonts; inspect the exported file rather than only the preview; and retain a static companion image plus a plain-language caption. These are editorial production safeguards, not an asserted official Meta specification table.

## C. Automation for a Facebook-first education event

### C1. The operating model: automate preparation before public interaction

Recommended order: **approved facts → drafts → review → native scheduling → daily inbox review → simple reporting**. Add automation only when a repetitive task is already understood. The first objective should be fewer missed questions and fewer factual mistakes, not more unsolicited messages.

Use one shared content sheet with: content ID, objective, audience, approved copy, media file, fact-sheet version, intended date/time/time zone, approver, status, publication URL, and measured result. Suggested statuses are `idea → draft → needs review → approved → scheduled → published → checked`. Reuse one content ID through the workflow to prevent accidental duplicate posts.

**Recommended zero-subscription configuration:** Business Suite for Facebook/Instagram scheduling, WhatsApp Business for inquiries, a shared spreadsheet for approvals, and manual use of a free assistant. Buffer Free or Metricool Free are optional if their particular workflow helps. These are alternatives; the team does not need three overlapping schedulers. [C01] [C05] [C08] [C09]

### C2. Meta Business Suite: the first scheduler to teach

Meta's own tutorial demonstrates scheduling Facebook/Instagram feed content and Stories through Business Suite. That tutorial is from 2022 and establishes the native workflow, not the exact October 2026 interface or every current media entitlement. Current public help routes can be login-gated; this research did not authenticate to a live Page. **[UNVERIFIED]:** exact scheduling horizon, per-media limits, and the current names of every button in a Brazilian account. Do not present the often-quoted “29 days” as freshly tested here. [C01] [C02]

**Proposed walkthrough, to confirm in the team's account:**

1. Give each teammate their own authorized Page access; avoid sharing the owner's password.
2. Open Business Suite and confirm the correct Page and connected Instagram account.
3. Create a post/Reel/Story using the format the account currently offers.
4. Paste approved copy and attach the final exported media. Check the link separately.
5. Review each destination's preview; a caption or crop that works in Facebook may need an Instagram version.
6. Choose scheduling, inspect the account's time zone, and set an explicit date/time. Use the event's actual Brazilian time zone; Brazil does not have only one.
7. Confirm it appears in Planner/Content or the account's scheduled view.
8. After the intended time, inspect the actual published item and save its URL. A queued item is not proof of publication.

Schedule Page content through the Page workflow. **Do not assume it also schedules into an Event discussion, an arbitrary Group, a personal profile, and WhatsApp Status.** These are separate surfaces with separate permissions. Buffer's current help explicitly says automatic Facebook Group publishing stopped working after Meta's April 2024 API change. Reminders/manual completion can still be useful, but are not automatic publishing. [C26]

### C3. Inbox automation, AI replies, FAQs, and comments

| Need | Appropriate starting method | Boundary to explain |
|---|---|---|
| Acknowledge a new Page message | Native instant reply, if shown under Inbox/Automations | Meta documents a Page Messenger greeting/instant-reply path. Exact current UI is **[UNVERIFIED]** because public help redirects to login. [C03] |
| Set expectations outside working hours | Away message; list real service hours and time zone | This is a deterministic message, not proof that an AI is monitoring the inbox. WhatsApp's app explicitly supports away messages. [C05] |
| Answer “Quando?”, “Onde?”, “Como me inscrevo?” | FAQ buttons, saved replies, or keyword rules where available | Page-specific FAQ/keyword capabilities and rule limits are **[UNVERIFIED]**; inspect the account rather than promise every automation appears everywhere. |
| Draft a response to a more detailed question | Copy a minimized/anonymized question into an assistant; human approves | Keep refunds, accessibility arrangements, invoices, certificate disputes, and personal cases with a person. |
| Offer the program after a comment | Explicit opt-in comment/DM flow through a supported tool | A person requesting the program is not consenting to an indefinite marketing sequence. ManyChat supports comment-triggered messaging but has strict free-tier limits. [C19] [C20] |
| Reply intelligently at all hours | Evaluate Meta Business Agent or a supported business messaging integration | Availability, free allowance, training sources, handoff, and price need account validation. [C04] |

**Meta's built-in business AI has advanced:** the June 3, 2026 announcement describes **Meta Business Agent** for WhatsApp/Messenger, answering customers and connecting to business systems; it reports over one million businesses already using it. This verifies the product exists, but not that a newly created Brazilian conference account receives it free. Treat its availability, Portuguese behavior, usage allowance, and exact Meta One bundling as **[UNVERIFIED]** until inspected. Do not confuse it with consumer Meta AI or a simple greeting rule. [C04]

For generative reply suggestions, copy variations, and other in-product AI tools, teach **“use it if visible, then check against the fact sheet”**. Current universal rollout and free entitlement for organic Business Suite AI drafting are **[UNVERIFIED]**. Do not imply that an AI ad-creative feature requires or justifies an advertising budget for this campaign.

Example minimal automatic greeting:

```text
Olá! Você falou com a organização do [EVENTO]. Recebemos sua mensagem.
Respondemos de [DIAS], das [HORAS], no horário de [FUSO].
Programação e inscrições: [LINK OFICIAL].
Se sua dúvida for sobre inscrição já realizada, aguarde nossa equipe.
Não envie CPF, dados de pagamento ou documentos por aqui.
```

### C4. WhatsApp Business app: a useful free foundation, not a bulk-send loophole

The app is free to download and includes a business profile, catalog, greeting and away messages, labels, and quick replies. A **quick reply is a shortcut selected by a person**; it is not an autonomous chatbot. Labels organize conversations and are not permission to market to everyone in a category. [C05] [C36]

Suggested conference setup:

- Profile: exact organizer identity, event link, service hours, and contact details.
- Quick replies: `/programacao`, `/local`, `/inscricao`, `/certificado`, `/acessibilidade`, `/humano`; paste only approved facts. If a certificate rule is unknown, say the team will confirm.
- Labels: “Pediu programação,” “Dúvida sobre inscrição,” “Instituição parceira,” “Precisa de resposta humana,” and “Não enviar marketing.”
- Greeting/away messages: state when a real person will return.
- Catalog: potentially use an informational event item if eligible; use the official ticket link rather than implying the app itself completes registration. Catalog item eligibility and payment features for this event are **[UNVERIFIED]**.

**Broadcasts need an explicit 2026 correction.** Meta announced paid **business broadcasts** in April 2025, and current app/help pages describe message packs, scheduling, insights, and eligibility restrictions. Some accounts still expose older broadcast-list behavior; old tutorials quote a 256-recipient limit and saved-number requirements. **[UNVERIFIED]:** applying that legacy rule universally to every Brazilian account in October 2026. Check the app's actual feature, delivery conditions, and displayed price. Never promise unlimited free broadcasts or a workaround using WhatsApp Web extensions. [C05] [C06] [C07]

**The Business app and Business Platform/API are separate products.** API workflows can involve Meta message fees, provider subscriptions, template approval, and technical configuration. Current WhatsApp policy requires permission to contact the person, honors opt-outs, and restricts free-form Platform replies to the 24-hour customer service window; outside it, approved templates are required. Being inside that window does **not** establish that every reply is free. [C22] [C23]

There is a pricing-documentation conflict worth preserving: Make's recent official connector update describes a change effective **October 1, 2026**, with **1,000 free monthly service messages** and billing configuration required afterward. WhatsApp's own FAQ mentions a first-1,000 allowance but also retains conversation-based explanations, while its main pricing page is dynamic. **Exact Brazilian category rates and the applicable current service/utility allowance: [UNVERIFIED].** Obtain the live rate card/billing estimate before enabling a flow. Do not repeat older “all service replies are always free” or “1,000 messages means 1,000 conversations” claims. [C23] [C24] [C37]

### C5. Third-party scheduling: verified free tiers and important caveats

| Tool | Free position as checked | Paid reference / costs | Fit for this team |
|---|---|---|---|
| **Meta Business Suite** | Native organic scheduling is the baseline; no separate scheduler subscription in the normal workflow. Current account options must be checked. | No ad spend is needed merely to use the organic workflow. | First choice for one event's Facebook/Instagram presence. Exact limits **[UNVERIFIED]**. [C01] [C02] |
| **Buffer** | **3 channels, 10 scheduled posts per channel** at a time. This is a queue cap, not 10 posts per month. | Essentials advertised **US$6/channel/month**, or **US$5** with annual billing. | Easy multi-network queue. Confirm which format auto-publishes versus sends a reminder. BRL price **[UNVERIFIED]**. [C08] |
| **Metricool** | **1 brand, 20 scheduled posts/month**, 30 days of analytics, 5 competitor profiles; free excludes LinkedIn and X. | Starter from **US$20/month** in annual view; monthly billing can be higher. | Useful calendar/analytics option. Check how a multi-network post consumes the allowance. Paid approvals/API features are not necessarily on Free. BRL **[UNVERIFIED]**. [C09] |
| **Later** | Official help updated August 12 still describes Free, limited scheduling, one Access Group, and a two-week calendar window; public pricing promotes paid trials. | Pricing retrieval also exposed an older promotional page. **Current new-account price and a universal free-post allowance [UNVERIFIED].** | Do not state confidently either “free is gone” or “everyone gets five free posts.” Treat new-account eligibility as unresolved. [C10] [C11] |
| **Hootsuite** | No permanent free tier was established from the current plan page; trial/paid positioning. | A reliable current price for the team's region was not exposed: **[UNVERIFIED]**. | Poor first choice for a no-budget event unless the team already has access. Avoid old free-three-profile claims. [C12] |
| **mLabs** | Advertises a free trial; no permanent free tier verified. | **R$29.90/month per brand equivalent**, annual subscription paid upfront via Pix. | Brazilian-language support/workflows may be attractive. This is not evidence of R$29.90 month-to-month billing. Trial length/current monthly offer **[UNVERIFIED]**. [C13] |
| **Postiz** | Open-source self-hosted code is available under an AGPL-3.0 license listing; hosted product advertises trials/paid plans rather than a permanent free cloud tier. | Hosted plans advertised from **US$29/month**. Hosting, model/API use, and platform setup can add cost. | Appropriate only with technical help; self-hosting is not a zero-maintenance substitute for Business Suite. Check the deployed version/license obligations. [C14] [C41] |

For every scheduler, confirm **Page versus Group**, image/video/Reel format, direct publication versus notification, number of channels/brands/users, queue cap versus monthly publication cap, approvals, account reconnection, and the actual invoice currency. Never assume a scheduler's “Facebook support” includes automated Group posting. [C26]

### C6. No-code automation: free tiers are measured in different units

| Tool | Verified free/entry position | What the team should understand |
|---|---|---|
| **n8n** | Free self-hosted Community edition under the **Sustainable Use License**; not a permanent free n8n Cloud plan. Cloud Starter **€20/month billed annually**, 2,500 executions. | Source-available does not mean OSI open source. Hosting, updates, backups, credentials, and monitoring are someone's responsibility. Exact USD/BRL checkout **[UNVERIFIED]**. [C15] [C38] |
| **Make** | **1,000 credits/month**, 15-minute minimum interval on Free. Official Academy independently confirms the allowance. | Most module actions cost one credit; some AI steps cost more. Core advertised **US$12/month for 10,000 credits** in a current vendor article. A full workflow can consume several credits per lead. [C16] [C17] [C39] |
| **Zapier** | **100 tasks/month**, two-step Zaps, unlimited Zaps/Tables/Forms in current free plan text. | A simple trigger → one action fits; a multi-step AI → approval → send sequence normally needs a different architecture or paid features. Professional advertised from **US$19.99/month** in the annual view. [C18] |
| **ManyChat** | New Free: **25 Active Contacts/month, 2 channels, 4 active automations, 1 user/Inbox seat**. Free channels include Messenger/Instagram/TikTok/Telegram, **not WhatsApp, email, or SMS**. | The old “1,000 contacts free” claim is stale. New pricing began March 2, 2026; paid migration/availability varies. Current Essential annual listing **US$14/month**, 250 active contacts, overages possible. [C19] [C20] |

A free chat subscription is not a free API key. A Make/n8n/Zapier workflow may still need separately funded model calls and a supported integration. Newer tools sometimes include AI credits, but inspect the exact allowance rather than assuming all use is covered. Polling, retries, and fan-out can use quota even if only a few final messages are sent. [A07] [A30] [C15] [C16] [C18]

### C7. Five concrete proposed flows

These are architecture examples, **not tested integrations**. Availability of Sympla/Even3 webhooks, exports, API access, and any connector's free-plan entitlement is **[UNVERIFIED]**; use the organizer account's official documentation before connecting. A CSV or manual daily review may be the best first version.

**Flow 1 — new confirmed ticket → thank-you draft:** approved purchase notification/webhook → verify “paid/confirmed” status → deduplicate by order ID → prepare factual thank-you with official access information → human reviews initial runs → send through the existing permitted transactional channel → record success. Do not add the buyer to promotional WhatsApp broadcasts merely because they bought a ticket. Let the ticketing platform continue issuing the actual ticket/receipt. A duplicate webhook must not send a second message.

**Flow 2 — request form → WhatsApp follow-up:** form explicitly identifies organizer, purpose, channel, and optional marketing permission → store the permission text/version/time → add a work item for the team → person replies in the Business app, or an approved Platform template is used when applicable → honor “SAIR” and other opt-out requests. A free two-step Zap can create the work item; it does not magically supply a free WhatsApp API or bypass template rules. [C18] [C22]

**Flow 3 — trusted education RSS → post drafts:** poll a small allowlist of institutional feeds → ignore duplicates → fetch/read the original item → draft a short pt-BR explanation relevant to conference themes → attach source URL/date → place in a review sheet → human checks rights and relevance → approved content enters the calendar. If the original cannot be read, leave a research task rather than invent a summary. Avoid republishing entire articles.

**Flow 4 — incoming question → suggested reply:** permitted inbox integration or manual copy → redact personal identifiers → classify the request → retrieve the approved FAQ version → draft only supported information → human approves/sends → record question category. Use deterministic approved replies for stable FAQs first; a model is unnecessary for “Onde será?”. Refunds, threats, accessibility needs, and registration problems go directly to a person.

**Flow 5 — weekly organic report:** export Page/Instagram metrics → aggregate by content ID and objective → calculate clicks/reach or other explicitly defined rates → assistant describes patterns with sample sizes and caveats → team decides next week's tests. Do not attribute every ticket sale to an AI caption or treat “interested” clicks as registrations. Use tagged links and aggregate reporting where available; avoid uploading attendee lists for a simple performance summary.

For production, add an approval boundary, a duplicate-send key, quota alerts, visible error status, a stop switch, and a human owner. Store credentials in the platform's credential system, not in a prompt or public spreadsheet. Test with organizer-owned accounts and a very small batch before real recipients.

### C8. Computer-use and browser agents: realistic capabilities

| Tool category | What is established | Realistic event-marketing use | Availability/cost caveat |
|---|---|---|---|
| **Claude in Chrome** | Generally available on paid Claude plans; can work across browser tabs and take actions. | Research public school/association sites; organize findings; help fill a draft event listing; inspect the team's Page content. | Browser work consumes usage. Provider safety approval is not Meta permission. Local-file/app work can require the desktop app. [A34] |
| **Claude computer/browser-use APIs** | Developer tools exist for visual/browser actions. | A technical helper could build a constrained research or data-entry assistant. | Requires an executor, permissions, model/API budget, and error handling. It is not an automatic free feature of every chat. [C40] |
| **ChatGPT browser / agent workflows** | Current Learn docs describe opening pages, clicking, typing, inspecting, screenshots, and permission controls; sensitive actions can require confirmation. | Compare public institutional sources, draft outreach, fill supported draft forms, verify a page. | “Operator” and “Atlas” appear in older material, but exact current standalone/browser availability and Brazil/device entitlement are **[UNVERIFIED]** here. Current documented browser capabilities are the safer teaching anchor. [A18] |
| **Google Gemini tasks / Spark / Mariner lineage** | Current help now lists tasks for **Pro or Ultra**, personal accounts, 18+, activity/personalization requirements; supported regions exclude several listed areas, not Brazil. | Ongoing research and supported app workflows; draft organizational tasks. | Older “Spark is Ultra-only/US-only” guidance is stale. Inclusion of Brazil is inferred from the support exclusions, not an authenticated rollout test. Specific Facebook actions **[UNVERIFIED]**. [A19] |
| **Perplexity Comet / Computer** | Comet is a browser assistant; current Perplexity plans advertise Computer access and credits. | Source discovery, comparing institutional sites, collecting citations, preparing forms/drafts. | Browser download, agent allowance, and Computer credits are separate questions. Exact free-task count and Brazilian availability **[UNVERIFIED]**. [A25] [C28] |
| **browser-use** | Agent/browser tooling with a current pay-as-you-go cloud offer. | A developer-controlled research/form workflow with explicit allowed domains. | Current page: **US$1 trial credit**, browser **US$0.02/hour**, agents **model cost +20%**, plus traffic/proxy costs where used. Open code does not make hosted operation free. [C27] |

**Practical task boundaries:**

- **Partner-school research:** useful when the agent records official public pages, the correct campus/city, and a source date. It must not infer private staff details from social posts.
- **Outreach email:** useful for preparation and a personalized draft. A person verifies the contact, offer, facts, and whether sending is appropriate.
- **Sympla/Even3 listing:** useful for translating approved text and populating supported fields. Save a draft, inspect dates, city, ticket types, capacity, visibility, and fees, then have the organizer publish. Actual support for these sites was not tested.
- **Facebook Groups:** use the assistant to adapt a draft to the group's rules; a human member/admin should decide and post through the permitted workflow. Autonomous posting into many groups is not a recommended campaign tactic.
- **Community moderation:** useful for flagging unanswered questions and proposing replies. Keep deletion, blocking, disputes, and sensitive cases with a real moderator.

Example browser-agent prompt:

```text
Pesquise até 12 instituições de formação de professores em [CIDADE/REGIÃO].
Use somente sites oficiais acessíveis publicamente. Para cada instituição,
registre nome, cidade, curso/atividade relevante, URL da evidência, contato
institucional publicado e por que o congresso pode ser pertinente.
Não colete contatos de alunos, não entre em grupos, não envie mensagens,
não preencha formulários e não contorne login ou bloqueios. Marque lacunas.
Depois escreva rascunhos de convite, de até 120 palavras, para revisão humana.
```

### C9. Platform, spam, account, and privacy risks

**Facebook authorization:** Meta's official anti-scraping explanation says automated collection without permission violates its terms. Current Facebook legal/help pages sometimes redirected to login or rate limiting during this research, so the exact October 2026 legal wording is **[UNVERIFIED]**. Use authorized native/API workflows; do not infer permission from the fact that a browser agent can click or that an account is logged in. [C25] [C02]

**Groups:** the Groups API deprecation is a documented historical change, and Buffer's current help independently confirms automatic Group publication is unavailable through its former integration. Group rules can also forbid event promotion, require admin permission, or limit frequency. No universal safe “posts per day” or “DMs per hour” was verified; do not publish one. Repeated identical posts, unsolicited tagging, scraping, fake accounts, evasion, and mass DMs are poor foundations for this campaign. Restrictions/checkpoints can disrupt the account even when the team considers the content useful. [C26]

**WhatsApp:** the policy updated September 23, 2026 requires opt-in, respect for opt-outs, and applicable template/window rules. Avoid purchased numbers, scraped member lists, unofficial bulk senders, and browser extensions promising unlimited delivery. Keep a suppression list and stop future marketing promptly when someone opts out; purchase history is not permission for every future campaign. WhatsApp can restrict or remove access for violations. [C22]

**Messenger/Instagram:** ManyChat's current guidance describes the standard 24-hour window and restrictions on automated messaging beyond it. Another help page warns Messenger Message Tags were deprecated February 9, 2026 while retaining older explanatory material. Do not teach old tags or a human-agent exception as a way to run promotional blasts. Exact current exception/subscription eligibility should be checked in Meta and the connected account. [C21] [C35]

**Browser-agent mistakes and prompt injection:** pages, documents, or messages can contain malicious instructions; an agent can also click the wrong control or misunderstand a form. Provider documentation describes permission/security boundaries, but these do not eliminate mistakes. Use narrow domain access, keep sign-in secrets out of chat, review drafts, and stop at public submission or message sending in these proposed workflows. Do not bypass captchas, checkpoints, or group-admin review. [A18] [A19] [A34] [C40]

**LGPD — operational implications, not a complete legal assessment:**

- Identify a lawful basis and a specific purpose for handling personal data. Consent is one basis; legitimate interest is not blanket permission for unlimited outreach.
- ANPD's legitimate-interest guidance calls for contextual assessment and balancing. A public staff email can still be personal data; publication is not unrestricted reuse permission.
- Collect the minimum needed. Keep newsletter permission separate from ticket fulfillment and explain who receives the information.
- Do not paste CPFs, payment details, student lists, medical/accessibility details, or private conversation histories into consumer assistants for routine copywriting.
- Set retention/access rules, provide a contact for data-rights requests, and honor withdrawal/objection as applicable. Review processor terms and international transfer arrangements before putting a contact database in an overseas automation/AI service.
- Take particular care with children, student images, and sensitive personal data; an education event does not remove those obligations.

These recommendations are grounded in LGPD's purpose/necessity, lawful-basis, rights, children, and transfer provisions and ANPD's guidance. The appropriate basis for a specific outreach list depends on its actual facts. [C30] [C31]

### C10. AI-assisted outreach that can build useful partnerships

Prioritize a short, relevant list of schools, university education departments, teacher associations, local education networks, confirmed speakers' institutions, community media, and potential sponsors whose actual interests match the conference. Ask for a useful action: share the program, distribute an approved invitation, suggest a relevant session, or discuss an explicitly defined partnership. Do not have AI invent an institutional connection or sponsorship commitment.

**Suggested repeatable process:** define geography/audience → find official evidence → verify the institutional contact → record why the event is relevant → draft a small tailored message → human sends via an appropriate channel → record reply and opt-out → make at most a modest, relevant follow-up if appropriate. A suggested single follow-up after roughly a week is editorial judgment, not a legal or platform safe-harbor rule.

| Free/cheap tool | Verified free allowance | Appropriate use / caveat |
|---|---|---|
| **Brevo** | **300 email sends/day**, no rollover; current plan text lists 1 user and other feature limits. | Permission-based updates and transactional email where properly configured. A free quota is not permission to upload a purchased/cold list. [C32] |
| **MailerLite** | After **June 16, 2026** update: **250 active subscribers, 2,500 emails/month, 2 seats**. | Opt-in event newsletter and forms. The older 500/1,000-subscriber and 12,000-email figures are stale for the current standard free plan. [C33] |
| **Hunter** | **50 shared credits/month**, one mailbox connection; current free help lists 500 recipients/sequence. | Find/verify a limited number of relevant institutional addresses. That sequence capacity is not a recommendation to send 500 unsolicited messages. [C34] |
| **Existing institutional mailbox + spreadsheet** | Uses the team's existing account, subject to its own provider limits. | Often sufficient for 10–20 carefully selected partnership drafts. Current provider quotas **[UNVERIFIED]**; avoid assuming a Gmail/Outlook cap. |

Brevo/MailerLite are best treated here as opt-in newsletter tools. Check each provider's acceptable-use and anti-spam rules before importing a list; compliance with LGPD and a provider's permission requirements are separate questions. No email, DM, or WhatsApp message was sent in this research.

Example partnership-draft prompt:

```text
Escreva um rascunho de email em pt-BR para [INSTITUIÇÃO], até 120 palavras.
Contexto verificado: [ATIVIDADE], fonte [URL], consultada em [DATA].
Proposta real: [COMPARTILHAR PROGRAMAÇÃO / CONVERSAR SOBRE PARCERIA].
Fatos aprovados do congresso: [FICHA].

Faça uma conexão específica e honesta entre a atividade da instituição e
o evento. Não invente relacionamento anterior, apoio, desconto, patrocínio
ou interesse da pessoa. Use contato institucional. Termine com uma pergunta
simples e ofereça não receber novos contatos. Não envie; entregue para revisão.
```

### C11. Suggested implementation sequence and unresolved checks

**Week 1:** establish the fact sheet, Page access, quick replies, content sheet, and review owner. **Week 2:** build one speaker-card animation, record or render it, and schedule a small approved batch. **Week 3:** add an opt-in newsletter/form if needed and test one draft-only automation. **Week 4:** assess response times, registration questions, useful partner replies, and content performance before adding tools. This is a proposed rollout, not evidence that those tasks require four weeks.

Before turning this research into firm public instructions, resolve:

1. **[UNVERIFIED]** Local checkout BRL prices for Claude, ChatGPT, Grok, Perplexity, and Mistral; exact Microsoft USD offer if a comparison needs it.
2. **[UNVERIFIED]** Consumer ChatGPT Chat model picker, Sora access/export price in Brazil, Atlas device/region entitlement, and personal custom-GPT transition timetable.
3. **[UNVERIFIED]** Motion beta's account-specific output dimensions/duration; direct hands-on success with an exported conference example.
4. **[UNVERIFIED]** Later's new-account free availability and allowance; current Hootsuite regional price; exact mLabs monthly/trial offer.
5. **[UNVERIFIED]** Business Suite's live scheduling horizon, event/group surface support, comment/keyword rules, and AI suggestions on the team's Page.
6. **[UNVERIFIED]** Meta Business Agent/Meta One access and allowance for this Brazilian business; current broadcast-pack prices; applicable WhatsApp Platform rates after October's change.
7. **[UNVERIFIED]** Sympla/Even3 official connector/API/webhook availability on the organizer's actual plan.
8. **[UNVERIFIED]** Portuguese quality rankings. Run the small blinded test described in A5 rather than turning an English benchmark into a pt-BR claim.

## SOURCES

All entries below were checked on **2026-10-21**. “Live/undated” means the retrieved page did not expose a dependable publication date; it does not mean the offer is guaranteed for every account. Search-index dates are identified as such. Older foundational sources are labeled, and blocked pages are not treated as verified current UI or pricing. Reference IDs in the text resolve directly to these source URLs.

### Assistant landscape and prices

| Ref | Source | Publication/update evidence | What it supports / limits |
|---|---|---|---|
| [A01] | Claude pricing | Live, undated; checked 2026-10-21 | Plans, model access, feature matrix, Team pricing, Max/API-credit qualifications. |
| [A02] | Anthropic model announcements | Dated entries through 2026-10-07; checked 2026-10-21 | Opus/Sonnet/Haiku 5.5 and Fable 5.1 release chronology. |
| [A03] | Introducing Claude Haiku 5.5 | 2026-10-07; checked 2026-10-21 | Current small-model release; not a measured pt-BR marketing comparison. |
| [A04] | Introducing Claude Fable 5.1 and Claude Mythos 5.1 | 2026-09-15; checked 2026-10-21 | Release and model positioning; does not imply unrestricted consumer Mythos access. |
| [A05] | What are artifacts and how do I use them? | Relative update displayed: over two weeks ago; checked 2026-10-21 | Current artifact/template availability; includes Enterprise October 15 rollout note. |
| [A06] | OpenAI model catalog | Live, undated; checked 2026-10-21 | GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna and API capabilities. |
| [A07] | ChatGPT Learn pricing | Live; includes October 2026 migration notices; checked 2026-10-21 | Subscription prices, shared Work/Codex use, additional credits; not Brazilian checkout confirmation. |
| [A08] | ChatGPT Learn models | Live; retirement milestone 2026-10-14; checked 2026-10-21 | Work/Codex versus Chat model distinction. HTML and official Markdown representation read. |
| [A09] | OpenAI image generation guide | Live, undated; checked 2026-10-21 | Separate image generation/editing models; API access does not establish consumer plan entitlement. |
| [A10] | Scheduled tasks — ChatGPT Learn | Live; includes 2026-10-14 model notice; checked 2026-10-21 | Scheduled work, web/local differences, app requirements. Official Markdown representation also read. |
| [A11] | Moving custom GPT workflows to plugins | Live, undated; checked 2026-10-21 | Enterprise-oriented migration guidance; not proof of universal personal GPT retirement. |
| [A12] | Sora 2 Pro model documentation | Live, undated; checked 2026-10-21 | Synchronized-audio generation capability; Brazilian consumer access unresolved. |
| [A13] | Google AI plans — Brazil | Live; references current Argon rollout; checked 2026-10-21 | Brazilian prices, feature/model distinctions, Flow credits. |
| [A14] | Google AI plans — United States | Live; references current Argon rollout; checked 2026-10-21 | Independent US list prices; Plus is US$4.99 in the retrieved page, not the older US$7.99. |
| [A15] | Gemini Apps limits and feature availability | Live, undated; checked 2026-10-21 | Five-hour and weekly compute-based budgets. |
| [A16] | Gemini release notes | Argon entry 2026-10-13; checked 2026-10-21 | Global Pro/Ultra rollout announcement. |
| [A17] | Gemini Notebook plans | Live, undated; checked 2026-10-21 | Current product branding, notebooks/source limits, generated-media watermark references. |
| [A18] | Browser — ChatGPT Learn | Live, undated; checked 2026-10-21 | Browser actions and permissions. Does not establish every Atlas/Operator entitlement. |
| [A19] | Manage tasks and workflows in Gemini Apps | Live, undated; checked 2026-10-21 | Current Pro/Ultra task requirements and excluded regions. Brazil inclusion is an inference from the list. |
| [A20] | Meta AI app launch in Brazil | 2025-08-11; older launch evidence; checked 2026-10-21 | Brazil/app/integrated-surface context. Exact 2026 model and quota by surface remain unverified. |
| [A21] | Meta AI research catalog | Current catalog includes September 2026 entries; checked 2026-10-21 | Muse naming and current research family; not exact consumer routing. |
| [A22] | Microsoft Copilot individual plans — Brazil | Live, undated; checked 2026-10-21 | Monthly/annual BRL offers and owner-only family AI qualification. |
| [A23] | Introducing The X Subscription | 2026-10-12; checked 2026-10-21 | New Grok/Cursor/X bundle prices, usage ratios, retention of existing plans. |
| [A24] | Grok models catalog | Page footer 2026-09-21; live catalog fetched; checked 2026-10-21 | Grok 4.7 flagship. Current body supersedes stale search snippets naming 4.6. |
| [A25] | Perplexity pricing | Live, undated; checked 2026-10-21 | Free/Pro/Max, Computer and credit distinctions. |
| [A26] | Which Perplexity subscription plan is right for you? | 2026-09-02 update shown in search; checked 2026-10-21 | Plan and feature qualifications; limits not guaranteed across account offers. |
| [A27] | Muse Spark Open announcement | 2026-10-15; checked 2026-10-21 | Specific open-weight release; not a blanket license claim about every Meta model. |
| [A28] | Qwen3.6-27B announcement | 2026-04-21; checked 2026-10-21 | Open-weight checkpoint, capabilities, access routes; not asserted to be October's newest model. |
| [A29] | Qwen3.7: The Agent Frontier | 2026-05-20; checked 2026-10-21 | Qwen3.7-Max explicitly described as proprietary. |
| [A30] | DeepSeek models and pricing | Live; model snapshot V4.1-Flash-1017; checked 2026-10-21 | Current peak/off-peak API rates, search/fetch charges and continued Pro listing. |
| [A31] | Mistral changelog | Large 4 entry 2026-10-06; checked 2026-10-21 | Public preview, weights-coming-soon distinction, current model chronology. |
| [A32] | Mistral pricing | Live, undated; checked 2026-10-21 | Free/Pro display and education/eligibility/fair-use qualifications. |
| [A33] | Mistral Vibe, formerly Le Chat | Live, undated; checked 2026-10-21 | Current consumer/work/code product branding. |
| [A34] | Claude in Chrome is generally available | 2026-08-26; checked 2026-10-21 | Paid-plan general availability, browser work and security qualifications. |
| [A35] | Official Text Arena leaderboard | Displayed snapshot 2026-10-20; checked 2026-10-21 | Selected ranks/scores copied from live official table, including preliminary/confidence qualifications. |
| [A36] | Artificial Analysis model leaderboard | Live snapshot retrieved 2026-10-21; checked 2026-10-21 | Ordering in main summary. Current numeric export not independently captured. |
| [A37] | What is the Claude Pro plan? | Relative update: over a week ago; checked 2026-10-21 | US$20 monthly, localized pricing qualifications, and Pro API billing separation. |

### Motion graphics, exports, and tutorials

| Ref | Source | Publication/update evidence | What it supports / limits |
|---|---|---|---|
| [B01] | Get started with Claude Motion | Relative update: over two weeks ago; checked 2026-10-21 | Team/Enterprise beta, code-based animation, editor, MP4 export, usage. |
| [B02] | Claude Academy: collaborate in Artifacts | Live, undated; eight-minute tutorial; checked 2026-10-21 | Conversational artifact creation, iteration and destination-format exports. |
| [B03] | OBS quick-start guide | 2021-08-25; older foundational documentation; checked 2026-10-21 | Recording sources and settings. Not a current Meta upload specification. |
| [B04] | MDN MediaRecorder | Live documentation; page date not captured; checked 2026-10-21 | Recording MediaStreams and codec support checks. |
| [B05] | Canva file upload formats and requirements | Live, undated; checked 2026-10-21 | Video/image interchange; no assertion that imported SVG runs arbitrary scripts. |
| [B06] | FFmpeg official manual | Live documentation; checked 2026-10-21 | Input/image sequence/encoding command syntax. Sample commands are illustrative and were not executed. |
| [B07] | Remotion: building with AI | Live documentation; checked 2026-10-21 | Official coding-agent, skills and AI workflow overview. |
| [B08] | Remotion: creating a project | Live documentation; checked 2026-10-21 | Current starter commands and agent setup; installation not performed. |
| [B09] | Remotion: render your video | Live documentation; checked 2026-10-21 | Rendering route, Studio and output guidance. |
| [B10] | Remotion license and pricing | Page updated 2026-10-21; checked 2026-10-21 | Three-person free eligibility; company/creator/automation pricing. |
| [B11] | HyperFrames create workflow | Live, undated; checked 2026-10-21 | Skill, initialization, agent authoring, ZIP preview/render; quotas/pricing not established. |
| [B12] | Motion Canvas FFmpeg video exporter | Live documentation; checked 2026-10-21 | Exporter setup and automatic FFmpeg dependency. |
| [B13] | LottieFiles Lottie-to-MP4 tool | Live, undated; checked 2026-10-21 | JSON/dotLottie input and displayed 20 MB upload limit; effect fidelity not guaranteed. |
| [B14] | Fazt Code: Claude Code can create videos using Remotion | 2026-03-20; checked 2026-10-21 | Real independent creator tutorial; no claim its setup remains unchanged. |
| [B15] | MDN canvas captureStream | Last modified 2025-06-23; current page checked; checked 2026-10-21 | Canvas-only capture, frame-rate behavior and origin-clean security restriction. |

### Automation, messaging, outreach, and policy

| Ref | Source | Publication/update evidence | What it supports / limits |
|---|---|---|---|
| [C01] | Meta for Business: schedule posts with Business Suite | 2022-09-09; historical official tutorial; checked 2026-10-21 | Native Facebook/Instagram scheduling. Exact 2026 UI and horizons not verified. |
| [C02] | Meta Business Suite product page | Checked 2026-10-21; login/block response; checked 2026-10-21 | Primary URL recorded; page unavailable to unauthenticated research. Not treated as fresh proof of a numeric limit. |
| [C03] | Meta Page Messenger greeting / instant reply help | Indexed help; live fetch login-gated; checked 2026-10-21 | Historical/indexed workflow, with current UI explicitly unverified. |
| [C04] | Conversations 2026: Meta Business Agent | 2026-06-03; checked 2026-10-21 | Business Agent announcement, WhatsApp/Messenger use and systems integration; not account entitlement. |
| [C05] | WhatsApp Business app features | Live, undated; checked 2026-10-21 | Profile, catalog, labels, quick replies, greetings/away, newer broadcasts and eligibility. |
| [C06] | Ways to manage business chats on WhatsApp | 2025-04-03; historical product change; checked 2026-10-21 | Announcement that newer business broadcasts would be paid. |
| [C07] | WhatsApp business-broadcast message packs | Live, undated; checked 2026-10-21 | Prepaid message-pack mechanism; no Brazilian pack price established. |
| [C08] | Buffer pricing | Live, undated; checked 2026-10-21 | Three channels, ten queued posts/channel, annual/monthly pricing distinction. |
| [C09] | Metricool pricing | Live, undated; checked 2026-10-21 | One-brand/20-post free cap, analytics/history restrictions, paid entry tier. |
| [C10] | Later pricing | Retrieval exposed older promotional content; checked 2026-10-21 | Public paid-trial positioning; current new-account free/price claims left unresolved. |
| [C11] | Choose a Later Social plan | Updated 2026-08-12; checked 2026-10-21 | Still documents Free with limited scheduling/two-week calendar; account variations acknowledged. |
| [C12] | Hootsuite Standard plan | Live, undated; checked 2026-10-21 | Current paid/trial positioning; reliable regional price not extracted. |
| [C13] | mLabs home/pricing offer | Live, undated; checked 2026-10-21 | R$29.90 equivalent under annual upfront Pix conditions; trial advertised. |
| [C14] | Postiz pricing | Live, undated; checked 2026-10-21 | Hosted Standard US$29/month and seven-day trial; no permanent free cloud tier established. |
| [C15] | n8n pricing | Live, undated; checked 2026-10-21 | Cloud Starter €20 annual-billing equivalent; 2,500 workflow executions. |
| [C16] | Make pricing | Live/indexed versions differ in rendered pricing content; checked 2026-10-21 | Free 1,000 credits and minimum interval; cross-checked with vendor Academy. |
| [C17] | Make Academy: operations and credits | Live, undated; checked 2026-10-21 | 1,000 free credits, operation/credit distinction, variable AI charges. |
| [C18] | Zapier pricing | Live, undated; checked 2026-10-21 | Free 100 tasks/two-step Zaps; Professional starting annual-billing price. |
| [C19] | ManyChat pricing | Live, undated; checked 2026-10-21 | 25 active contacts, automation/channel limits, Essential annual price and contact overages. |
| [C20] | ManyChat Free plan | Updated 2026-08-27; checked 2026-10-21 | March 2 pricing change, active-contact allowance, exclusions and seats. |
| [C21] | ManyChat messaging windows | Updated 2026-08-27; checked 2026-10-21 | Messaging-window rules and restrictions; confirm platform-specific exceptions separately. |
| [C22] | WhatsApp Business Messaging Policy | Last updated 2026-09-23; checked 2026-10-21 | Opt-in, opt-out, templates, 24-hour window and enforcement. |
| [C23] | WhatsApp Business Platform pricing | Live, dynamic page; checked 2026-10-21 | Market/category billing; exact current Brazil rates/allowance unresolved. |
| [C24] | Make: Gemini video and WhatsApp connector updates | 2026 update; references 2026-10-01 pricing effective date; checked 2026-10-21 | Connector describes 1,000 monthly free service messages and billing requirement; conflicts noted. |
| [C25] | Meta: how we combat scraping | 2021-04; historical policy explanation; checked 2026-10-21 | Unauthorized automated collection restriction; exact 2026 terms page was unavailable. |
| [C26] | Buffer: publishing to a Facebook Group | Live current help; references April 2024 change; checked 2026-10-21 | Explicitly notification-based, not automatic Group publication. |
| [C27] | Browser Use pricing | Live, undated; checked 2026-10-21 | US$1 credit; browser/hour, model markup and traffic costs. |
| [C28] | Perplexity Comet | Live, undated; checked 2026-10-21 | Browser/assistant positioning; collapsed FAQ did not establish exact free-agent allowance. |
| [C30] | Brazil LGPD — compiled legal text | Law 2018-08-14, with amendments in compiled text; checked 2026-10-21 | Purpose/necessity, legal bases, rights, children/sensitive data, international transfers. |
| [C31] | ANPD legitimate-interest guide landing page | Published 2024-11-22; modified 2025-01-23; checked 2026-10-21 | Official guide location; downstream PDF fetch timed out. General legal interpretation also anchored to C30. |
| [C32] | Brevo free-plan limits | Live, undated; checked 2026-10-21 | 300 daily sends, no rollover, campaign/delivery constraints. |
| [C33] | MailerLite free-plan update | Change effective 2026-06-16; checked 2026-10-21 | 250 active subscribers, 2,500 monthly emails, two users. |
| [C34] | Hunter free-plan help | Relative update displayed: today; checked 2026-10-21 | 50 monthly shared credits, one mailbox, sequence capacity; not permission to spam. |
| [C35] | ManyChat broadcasting guidance | Current page references 2026-02-09 deprecation; checked 2026-10-21 | Message Tags warning alongside legacy text; do not copy old exception workflows uncritically. |
| [C36] | WhatsApp Business app introductory tutorial | Live, undated; checked 2026-10-21 | Explicit free-to-download app and foundational business tools. Page title is storefront tutorial despite URL wording. |
| [C37] | WhatsApp Business FAQ | Live, undated; mixed-era pricing explanations; checked 2026-10-21 | First-1,000 allowance plus retained conversation wording; source of explicitly unresolved pricing inconsistency. |
| [C38] | n8n: which license is needed? | Recent live help; exact publication date not displayed; checked 2026-10-21 | Community SUL/internal use and separation from Cloud terms. |
| [C39] | Make: marketing automation tools in 2026 | Published June 2026 per search index; checked 2026-10-21 | Vendor's own Free/Core pricing reference; not relied on for ranking competitors. |
| [C40] | Claude browser-use tool documentation | Live; browser toolset version 20260801; checked 2026-10-21 | Developer execution model, URL restrictions, untrusted-page and file-upload boundaries. |
| [C41] | Postiz source repository | Live repository; checked 2026-10-21 | Self-hosted code and AGPL-3.0 license listing; deployment not performed. |

### Reference links

[A01]: https://claude.com/pricing
[A02]: https://www.anthropic.com/news/models
[A03]: https://www.anthropic.com/claude-haiku-5-5
[A04]: https://www.anthropic.com/claude-fable-and-mythos-5-1
[A05]: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them
[A06]: https://developers.openai.com/api/docs/models
[A07]: https://learn.chatgpt.com/docs/pricing
[A08]: https://learn.chatgpt.com/docs/models
[A09]: https://developers.openai.com/api/docs/guides/image-generation
[A10]: https://learn.chatgpt.com/docs/automations
[A11]: https://learn.chatgpt.com/docs/migrate-custom-gpts
[A12]: https://developers.openai.com/api/docs/models/sora-2-pro
[A13]: https://gemini.google/br/subscriptions/?hl=pt-BR
[A14]: https://gemini.google/subscriptions/
[A15]: https://support.google.com/gemini/answer/16275805?hl=en
[A16]: https://gemini.google/us/release-notes/
[A17]: https://support.google.com/gemininotebook/answer/16213268?hl=en
[A18]: https://learn.chatgpt.com/docs/browser
[A19]: https://support.google.com/gemini/answer/17094507?hl=en
[A20]: https://about.fb.com/br/news/2025/08/apresentando-o-app-meta-ai-uma-nova-forma-de-acessar-seu-assistente-de-inteligencia-artificial/
[A21]: https://ai.meta.com/research/
[A22]: https://www.microsoft.com/pt-br/copilot/pricing/individuals
[A23]: https://x.ai/news/x-subscription
[A24]: https://docs.x.ai/developers/models
[A25]: https://www.perplexity.ai/pt/hub/pricing
[A26]: https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you
[A27]: https://research.meta.ai/blog/muse-spark-open
[A28]: https://qwen.ai/blog?id=qwen3.6-27b&lang=zh-CN
[A29]: https://qwen.ai/blog?id=qwen3.7&locale=en
[A30]: https://api-docs.deepseek.com/quick_start/pricing/
[A31]: https://docs.mistral.ai/resources/changelogs
[A32]: https://mistral.ai/pricing/
[A33]: https://mistral.ai/products/vibe/
[A34]: https://claude.com/blog/claude-in-chrome-generally-available
[A35]: https://arena.ai/leaderboard/chat/text
[A36]: https://artificialanalysis.ai/leaderboards/models
[A37]: https://support.claude.com/en/articles/8325606-what-is-the-pro-plan
[B01]: https://support.claude.com/en/articles/17454997-get-started-with-claude-motion
[B02]: https://academy.claude.com/tutorials/intro-to-artifacts
[B03]: https://obsproject.com/kb/quick-start-guide
[B04]: https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
[B05]: https://www.canva.com/help/upload-formats-requirements/
[B06]: https://ffmpeg.org/ffmpeg.html
[B07]: https://www.remotion.dev/docs/ai
[B08]: https://www.remotion.dev/docs
[B09]: https://www.remotion.dev/docs/render
[B10]: https://www.remotion.dev/docs/license/pricing
[B11]: https://www.hyperframes.dev/create
[B12]: https://motion-canvas.io/docs/rendering/video/
[B13]: https://lottiefiles.com/tools/lottie-to-mp4
[B14]: https://www.youtube.com/watch?v=FWMtuy7IeRM
[B15]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream
[C01]: https://www.youtube.com/watch?v=PQjvbXyMhkM
[C02]: https://www.facebook.com/business/tools/meta-business-suite
[C03]: https://www.facebook.com/help/1698046970464236/
[C04]: https://about.fb.com/br/news/2026/06/conversations-2026-apresentamos-o-meta-business-agent/
[C05]: https://whatsappbusiness.com/products/business-app-features/
[C06]: https://about.fb.com/news/2025/04/ways-to-manage-your-businesses-chats-on-whatsapp/
[C07]: https://faq.whatsapp.com/1929088107774985
[C08]: https://buffer.com/pricing
[C09]: https://metricool.com/pricing/
[C10]: https://later.com/pricing
[C11]: https://help.later.com/hc/en-us/articles/360059362253-Choose-a-Later-Social-Plan
[C12]: https://www.hootsuite.com/plans/standard
[C13]: https://www.mlabs.com.br/
[C14]: https://postiz.com/pricing
[C15]: https://n8n.io/pricing/
[C16]: https://www.make.com/en/pricing
[C17]: https://academy-content.make.com/courses/make-foundation-operations-credits/01-introduction-to-operations-and-credits/
[C18]: https://zapier.com/pricing
[C19]: https://manychat.com/pricing
[C20]: https://help.manychat.com/hc/en-us/articles/25800197498652-Free-plan
[C21]: https://help.manychat.com/hc/en-us/articles/23358636027932-Understanding-messaging-windows
[C22]: https://whatsappbusiness.com/policy/
[C23]: https://whatsappbusiness.com/products/platform-pricing/
[C24]: https://help.make.com/google-gemini-ai-video-module-update-typesafe-and-more-app-updates
[C25]: https://about.fb.com/news/2021/04/how-we-combat-scraping/
[C26]: https://support.buffer.com/articles/connecting-and-publishing-to-your-facebook-group-with-buffer-VevqG0mHZG
[C27]: https://browser-use.com/pricing
[C28]: https://www.perplexity.ai/comet
[C30]: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
[C31]: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_hipoteses_legais_tratamento_de_dados_pessoais_legitimo_interesse
[C32]: https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan
[C33]: https://www.mailerlite.com/help/free-plan-update-faq
[C34]: https://help.hunter.io/en/articles/11060999-what-s-included-in-hunter-s-free-plan
[C35]: https://help.manychat.com/hc/en-us/articles/14281228205212-Broadcasting-in-Manychat-Connecting-with-your-audience-at-scale
[C36]: https://whatsappbusiness.com/resources/resource-library/how-to-create-an-ad-whatsapp-business-app/
[C37]: https://whatsappbusiness.com/resources/faq/
[C38]: https://support.n8n.io/article/can-i-use-your-license-for-my-use-case
[C39]: https://www.make.com/blog/best-marketing-automation-tools
[C40]: https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-tool
[C41]: https://github.com/gitroomhq/postiz-app
