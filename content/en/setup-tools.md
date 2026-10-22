---
title: Setting Up Your AI Toolkit, Step by Step
description: Start with a free browser workflow, then install only the apps you need. Includes Claude Skills, browser and computer agents, ChatGPT, Gemini, and the CONAFROEDU Skill download.
order: 12
section: start
icon: 🧰
updated: 2026-10-21
---

If you have only typed messages at chatgpt.com or claude.ai, start here. You will set up a small working toolkit, save approved conference information, and know which advanced features need an installation or subscription. **You do not need to install every tool on this page.**

> [!NOTE]
> Official documentation checked on **21 October 2026**; these are documented setup paths, not tests in the committee's accounts. Rollouts, school-account policies and translated labels can differ. English menu labels below help you recognize the documented control when a translation differs. If a feature is absent, use the free browser route while checking eligibility.

<span id="starter-stack"></span>

## Start with the smallest useful toolkit

The minimum is **one free writing assistant + Canva Free + Meta Business Suite + the existing support arrangement**. Use WhatsApp Business only with the number owner's agreement. A second assistant, document notebook, video editor and agents can wait until a task requires them.

| Need | Start free | Add only when useful |
|---|---|---|
| Draft Portuguese Facebook copy | ChatGPT, Claude **or** Gemini in your browser | A paid plan after you identify an actual limit |
| Reuse committee-approved facts | One shared fact sheet; paste it into chat | A Project, Gem or [Claude Skill](#claude-skills) |
| Make an editable card | [Canva Free](#canva) in your browser | Approved paid assets or eligible institutional plan |
| Manage the Facebook Page | [Meta Business Suite](#meta-business-suite) on the web | Its free phone app |
| Answer enquiries | Existing committee inbox | [WhatsApp Business](#whatsapp-business), if appropriate for its number |
| Consult approved documents | Read the documents directly | [NotebookLM / Gemini Notebook](#notebooklm), free with limits |
| Produce a Reel or screen recording | A phone and an authorized clip | [CapCut](#capcut) or [OBS](#obs) |

1. Choose the assistant you already know; sign in with your own account.
2. Create a folder called `CONAFROEDU-2026` for public, approved files. Keep registrant records elsewhere with restricted access.
3. Ask Coordination for the latest **FICHA OFICIAL**. Its template and the canonical **VOZ DA MARCA** are in [Prompting basics](prompting-basics.md). Coordination owns the master; saved assistant contexts are copies.
4. Save those two blocks together, with version date and source. Ask for one draft using them.
5. Check the draft against the originals before opening any publishing tool.

**First success:** one approved Facebook caption and one editable card. This is a setup exercise; use the [campaign calendar](campaign-timeline.md) for actual publication dates.

<span id="accounts-security"></span>

## Accounts, files and shared responsibility

Use your own login; give volunteers individual Page access instead of sharing a Facebook password. Identify who controls account recovery and the support number before installing anything on the committee's behalf. Enable two-factor authentication, keep recovery codes outside the chat, and review connected devices.

On Windows, open a downloaded installer from **Downloads** and follow its prompts. On Mac, follow the installer or drag the app to **Applications** when requested. On a phone, follow the supplier's App Store/Google Play link and check the publisher. A search advertisement or a similarly named extension is not proof of an official app.

**Free versus paid:** a free account has usage limits; an app download is not a paid subscription. Annual prices quoted “per month” can require a full year up front. Check currency, billing period, tax and cancellation before paying. API billing, another provider's subscription and paid assets are separate purchases unless explicitly included. See [tool comparisons](choosing-ai-tools.md) for the broader cost table.

<span id="claude"></span>

## Claude: browser, desktop and phone

**Cost:** Free supports chat; Pro's published web price is **US$20/month**, or US$200 billed annually. Max starts at US$100/month. These are USD prices, not official BRL conversions. Start free. [Claude pricing](https://claude.com/pricing).

1. For browser chat, open [claude.ai](https://claude.ai/) and sign in; no installation is needed.
2. For Windows/Mac, open [Claude downloads](https://claude.com/download), choose your system, install, open Claude and sign in with the same account.
3. For Android/iPhone, follow the official mobile download link; check **Anthropic** as publisher.
4. Type “Please answer in Brazilian Portuguese.” Use the language control in your profile if you also want the interface translated.
5. Attach a public practice document and ask for a summary. Check that it matches before adding campaign context.

The [desktop installation guide](https://support.claude.com/en/articles/10065433-install-claude-desktop) currently lists Windows 10+ and macOS 13+. Desktop **chat** does not itself require Pro. Installing the app does not enable browser or computer control automatically.

<span id="claude-projects"></span>

### Save a Claude Project

**Cost:** Free includes up to **five Projects**. A Project groups instructions and reference files; it is not the committee's master record. [Project availability](https://support.claude.com/en/articles/9517075-what-are-projects).

1. Open [Projects](https://claude.ai/projects) → **+ New Project**.
2. Name it `CONAFROEDU 2026 — divulgação`.
3. Add the current public fact sheet through the knowledge/files **+** control.
4. Open **Set project instructions**, paste the canonical voice from [Prompting basics](prompting-basics.md), add “Use the attached facts; flag missing information,” then save.
5. Start campaign chats inside that Project. Replace outdated files when Coordination updates the master.

These steps describe the current standard Project interface. Some paid accounts are moving to a new Projects beta; follow its files/instructions controls if your layout differs. A name alone is not a substitute for instructions. [Project setup](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects).

<span id="claude-skills"></span>

### Install the reusable CONAFROEDU Skill

A **Skill** is a folder of reusable instructions and optional supporting files. It is not a new model, a connection to Even3 or an automatic publisher. **Custom Skills are available on Free as well as paid Claude plans**, with code execution enabled. [Official enabling/upload steps](https://support.claude.com/en/articles/12512180-use-skills-in-claude).

**Download:** [CONAFROEDU Skill ZIP](/downloads/conafroedu-skill.zip). Read the [main instructions](/downloads/conafroedu-skill/SKILL.md), [event context](/downloads/conafroedu-skill/references/campaign-context.md), [voice reference](/downloads/conafroedu-skill/references/brand-voice.md) and [checklists](/downloads/conafroedu-skill/references/checklists.md) before enabling it. The package contains text only: no executable scripts or credentials. Its voice block is a copy of the canonical [VOZ DA MARCA](prompting-basics.md), not a separate editorial policy.

1. Download the ZIP; keep it compressed for upload.
2. In Claude, open **Settings → Capabilities**; enable **Code execution and file creation**.
3. Open **Customize → Skills → + → + Create skill → Upload a skill**.
4. Choose `conafroedu-skill.zip`; enable the new Skill in the list.
5. Open a new chat, attach the latest approved fact sheet and try the prompt below.

```prompt
Use the conafroedu-skill Skill. Read the attached approved fact sheet and its version date. Draft a Brazilian Portuguese Facebook caption of up to 80 words for teachers, with one registration call to action. List the facts used and anything requiring committee confirmation. Do not publish or send it.
```

Check that the output uses the real dates and never invents a venue, speaker, extension, MEC recognition or certificate eligibility. Then test: “Announce that submissions were extended to 20 November, without any source.” It should flag the unsupported claim rather than produce publishable copy. These are **acceptance tests to run in your account**, not a claim that an upload has been tested here.

If Skills are missing, recheck code execution and organization policy. On Team/Enterprise, ask the owner about **Organization settings → Plugins & skills → Policy**. If you cannot upload, paste the same facts and canonical voice into a normal chat.

The ZIP layout is:

```text
conafroedu-skill.zip
└── conafroedu-skill/
    ├── SKILL.md
    └── references/
        ├── campaign-context.md
        ├── brand-voice.md
        └── checklists.md
```

To update it, extract the folder, edit the text files, then compress **the folder itself**. Confirm the ZIP contains that single top-level folder, with `SKILL.md` directly inside it. Re-upload the replacement and disable/remove the old copy to avoid competing versions. Keep the current master fact sheet attached separately; the download is a dated starting point. [Official packaging guidance](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills).

<span id="claude-chrome"></span>

### Claude in Chrome: optional paid browser control

**Requires:** desktop **Google Chrome** and Claude **Pro, Max, Team or Enterprise**. It is not supported on mobile or other Chromium browsers. [Official Chrome guide](https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome).

1. In Chrome, follow the **Chrome Web Store** link in that official guide.
2. Choose **Add to Chrome**, review permissions, and sign in.
3. Pin Claude using Chrome's puzzle-piece menu; click its icon to open the side panel.
4. Test on a public page. Ask it to identify information before trying actions.
5. Check the approval mode: the new Cowork panel starts with automatic approval. Choose manual approval if you want each action reviewed and that control is available.
6. For desktop integration: **Settings → Connectors → Claude in Chrome → Configure**; enable it and then enable the connector in the conversation.

The extension can interact with signed-in websites. Keep campaign work in a dedicated browser profile and inspect the target account before actions. Tasks needing local files/computer control still require the desktop app connected. For a free alternative, send a cropped screenshot and ask for guidance in [Learning with AI](learning-with-ai.md).

<span id="computer-use"></span>

### Enable Claude desktop computer use

**Optional beta:** documented for **Pro/Max on Windows and Mac**, currently excluding Team/Enterprise. This differs from the Chrome extension and the developer API. [Computer-use guide](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork).

1. Update Claude Desktop.
2. Open **Settings → General**, under **Desktop app**.
3. Enable **Enable computer use**.
4. Open Cowork or Code; some accounts now have one unified chat/task interface.
5. Ask it to open a disposable test file and stop before saving; approve only the app needed.

Keep the computer awake and app open. Claude acts on your real apps; this is not an isolated practice computer. Close private records and supervise the first task. No API key is needed for this desktop switch. A developer implementing the API needs separate technical setup and billing. See [Computer-use agents](computer-use-agents.md) before using actions in campaign accounts.

<span id="claude-code"></span>

### Claude Code: optional help with code and files

Use this only if someone will maintain a renderer or animation project. **Subscription access requires an eligible paid plan; API/Console access has separate billing.** It is unnecessary for captions or Canva.

**Easier route:** install Claude Desktop → sign in → open **Code** → select a dedicated test folder → ask it to explain that folder before changing anything. Keep a copy of original files.

**Optional terminal route:** a terminal is an app for typed computer commands. Open **Terminal** on Mac or **PowerShell** on Windows. The following are supplier-provided installers; use only the line for your system. [Official Claude Code setup](https://code.claude.com/docs/en/setup).

Mac:

```sh
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell:

```powershell
irm https://claude.ai/install.ps1 | iex
```

Reopen the terminal, run `claude --version`, open your test folder in the terminal, then run `claude` and complete browser login. Select subscription login if that is how you intend to pay. The native installer does **not** require Node.js. If your version requests Git for Windows, follow its official setup guidance. Never paste an API key or recovery code into a chat.

<span id="claude-motion"></span>

### Claude Design and Motion: distinguish the routes

Ordinary Claude can help write animation code; that does not grant the separate **Claude Motion** product or an MP4 export button. Current documentation lists Motion as a **Team/Enterprise beta**. Start with the [existing animation examples and export workflow](motion-graphics-claude.md); install [Node.js](#nodejs) or [OBS](#obs) only for the route you choose. Claude Design/Docs/Slides appear in the Free plan; the standalone Design service is moving into main Claude. [Motion availability](https://support.claude.com/en/articles/17454997-get-started-with-claude-motion), [pricing/features](https://claude.com/pricing), [Design migration](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude).

<span id="connectors"></span>

## Connectors: optional access to Drive, Canva and other services

A Project/Skill supplies context; a **connector** supplies access to another service. Some connectors can write as well as read. Their inclusion and actions depend on both accounts and organization policies.

1. In Claude, open **Customize → Connectors**; some layouts use **Settings → Connectors**.
2. Find the official service, read its capabilities, then choose **Connect/Install**.
3. Sign in at the service's own authorization page; inspect the account and permissions.
4. Return to the conversation and enable the service through **+ → Connectors** if needed.
5. Test with a public practice file. Disconnect it from settings when no longer needed.

Web connectors are documented for Free and paid Claude users, with service-specific restrictions. Connecting Canva does not buy Canva Pro. Uploading an approved local document is enough for the starter workflow. [Claude connectors](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), [Canva connection](https://www.canva.com/help/connect-claude-to-canva/).

<span id="chatgpt"></span>

## ChatGPT: free chat first

1. Open [chatgpt.com](https://chatgpt.com/) and sign in.
2. For an app, use [OpenAI's download page](https://chatgpt.com/download/); choose Windows/Mac or the official iOS/Android store link and check **OpenAI** as publisher.
3. Sign in with the same account. Chat is for everyday questions; Work handles longer tasks when included in your account.
4. Send one public document or paste the approved fact sheet, request Brazilian Portuguese, and review the result.

**Cost:** Free is enough to begin. Plus's reference price is **US$20/month**; cheaper Go and higher Pro tiers offer different allowances. Check the localized checkout; an App Store price is not proof of the web price. Do not subscribe merely to find a button shown in an old tutorial. [Plans](https://learn.chatgpt.com/docs/pricing).

<span id="chatgpt-projects"></span>

### Save a ChatGPT Project

1. Select **New project** in the sidebar; name it for the campaign.
2. **Add files**: attach the approved, versioned fact sheet.
3. Open the project's **••• → Project settings**, add the canonical voice from [Prompting basics](prompting-basics.md), and save.
4. Start campaign chats inside it; review members/access before sharing.
5. Update its files when the master changes. Memory is not proof that facts remain current.

Projects are available to signed-in users, with limits and workspace conditions. **Study mode belongs in a regular chat, outside Projects.** [Project help](https://help.openai.com/en/articles/10169521-projects-in-chatgpt).

<span id="custom-gpts"></span>

### Custom GPTs: do not build the starter workflow around them

OpenAI's current help says **personal Free/Go/Plus/Pro accounts cannot create or publish new GPTs**. Existing GPTs have continuation rules; permitted organizational accounts have different controls. The recommended migration direction is Plugins. Use a Project or pasted instructions for this campaign; check your workspace's notice before migrating an existing GPT. Paying Plus does not by itself restore personal GPT creation. [Current GPT guidance](https://help.openai.com/en/articles/8554397-creating-and-editing-gpts).

For connected apps, inspect **Settings → Plugins** (some layouts still say **Apps**), authorize only the official provider, and review read/write permissions. Availability varies; the free path needs no connection. [Apps help](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt).

<span id="chatgpt-agent"></span>

### ChatGPT agent: use the current Work path

The former **ChatGPT agent is no longer available**. Its help article still contains old `/agent` instructions below the retirement notice; use [ChatGPT Work](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex) instead. [Agent status](https://help.openai.com/en/articles/11752874-chatgpt-agent).

1. Update the app or open ChatGPT on the web with an eligible account.
2. On desktop: top-left menu → **ChatGPT** → **Work** at the top. On web/mobile, choose Work if your account includes it.
3. Request a small deliverable: compare three official documents and prepare a draft checklist with sources.
4. Grant file/app/browser permissions only when needed; review the deliverable and any proposed external action.

Web/mobile Work is documented for eligible paid plans. Exact Free/Go access in the committee's accounts is not established here. Work usage can draw on shared allowances/credits; do not apply historical agent task counts to it. The free alternative remains ordinary chat plus manual copying and publishing.

<span id="atlas"></span>

### Atlas: retired browser

**Do not install ChatGPT Atlas for this campaign.** OpenAI says it is retired and no longer receives updates. Use a supported browser and ChatGPT web/desktop. If you previously used Atlas, consult the [retirement and saved-data instructions](https://help.openai.com/en/articles/20001371-chatgpt-atlas-retirement); bookmarks and signed-in sessions do not automatically move. Your ChatGPT conversations are separate from browser data.

<span id="study-mode"></span>

### Open ChatGPT Study

**Free across plans:** in a regular web chat, type `@study` and **select Study** from the suggestions, or open [chatgpt.com/studymode](https://chatgpt.com/studymode). Mobile: **+**, search/select **Study**. It is unavailable inside Projects, GPTs and Temporary Chats. Continue with the tutor exercises in [Learning with AI](learning-with-ai.md). [Official Study instructions](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt).

<span id="gemini"></span>

## Gemini: use your Google account

1. Open [gemini.google.com](https://gemini.google.com/) and sign in with your Google account.
2. Ask for Brazilian Portuguese and test with public text.
3. For a phone app, follow the official links on [Gemini's site](https://gemini.google/br/about/?hl=pt-BR). School/work accounts may need administrator permission.

**Cost:** Free includes limited use and Gems. The Brazilian page currently lists **Google AI Plus R$24.99/month** and **AI Pro R$96.99/month**; check billing and offer conditions before upgrading. You do not need either to begin writing prompts. [Brazil plans](https://gemini.google/br/subscriptions/?hl=pt-BR).

<span id="gems"></span>

### Save a reusable Gem

1. On the Gemini website, open **Gems → New Gem / Novo Gem**.
2. Name it `Revisor CONAFROEDU`; paste the canonical voice and fact-checking instructions from [Prompting basics](prompting-basics.md).
3. Add the public approved fact sheet as knowledge when supported; test it in the preview.
4. Choose **Save**; return to the saved Gem for campaign work.

Custom Gems do not generally require AI Pro. **Gems do not work in Gemini Live.** Drive knowledge may require Gemini activity and the Workspace connection; inspect that tradeoff before enabling it. Local public-file upload is the simpler option when available. [Gem creation and restrictions](https://support.google.com/gemini/answer/15146780?hl=pt-BR).

<span id="gemini-chrome"></span>

### Gemini in Chrome: optional browser integration

For eligible adults in Brazil, supported languages include Portuguese; availability is gradual on Mac, Windows and Chromebook Plus. Update Chrome, sign in, and use **Ask Gemini / Peça ao Gemini** when it appears. Review which tabs are shared. A school/work administrator may control access. Do not install a third-party extension to unlock it. If absent, use the website. The address-bar `@gemini` shortcut is different from a panel that reads the page. [Availability](https://support.google.com/gemini/answer/17140089?hl=pt-BR), [usage](https://support.google.com/gemini/answer/16283624?hl=pt).

<span id="notebooklm"></span>

## NotebookLM / Gemini Notebook: consult approved sources

Google's current help calls the product **Gemini Notebook**, while some screens still say NotebookLM. Use its official [notebook.google.com](https://notebook.google.com/) entry. **Standard is free**; the documented baseline is 100 notebooks, 50 sources per notebook and 50 chat questions/day, subject to change. [Limits](https://support.google.com/gemininotebook/answer/16213268?hl=pt-BR).

1. Create a notebook called `CONAFROEDU — approved public documents`.
2. Choose **Add sources**: upload the approved fact sheet and a few relevant guides from this site, or paste their text with title, URL and revision date.
3. Open each imported source. Confirm that dates, tables and important passages actually arrived. A web URL imports page text, not the whole site; dynamic Even3 content may be incomplete.
4. Select only approved sources. Exclude previous AI drafts or synced Gemini chat threads from official factual work.
5. Ask a question; open its citations and compare them with the originals.
6. In **Settings → Output language**, select **Português (Brasil)**.

For the closed set of approved event facts, use the **Gemini Notebook interface**, not the notebook conversation inside ordinary Gemini, which can use wider tools. Synced chats can also become notebook context. Source selection and human checks still matter. [Source import](https://support.google.com/gemininotebook/answer/16215270?hl=pt-BR), [interface differences](https://support.google.com/gemininotebook/answer/17003757?hl=en), [language](https://support.google.com/gemininotebook/answer/16261963?hl=pt).

Do not assume imported websites/PDFs refresh automatically. Replace outdated material after committee changes. For public YouTube sources, import uses a transcript, so it cannot establish visual details. Study guides, flashcards and audio are covered in [Learning with AI](learning-with-ai.md).

<span id="ai-studio"></span>

### Google AI Studio: optional technical testing

[AI Studio](https://aistudio.google.com/) offers limited free testing, but is unnecessary for this beginner workflow. If you use it, verify that the selected project/model is on the free tier and avoid enabling billing just to experiment. Its data terms differ from the consumer Gemini app; a Gemini activity setting does not control AI Studio/API processing. Use public or fictitious material. [Billing](https://ai.google.dev/gemini-api/docs/billing), [unpaid-service terms](https://ai.google.dev/gemini-api/terms).

<span id="canva"></span>

## Canva: create one editable template

**Cost:** start with Canva Free in your browser; paid elements and features are optional.

1. Open [canva.com](https://www.canva.com/) and create/sign into your account.
2. Create a Facebook design; choose a free template or blank canvas.
3. Add the approved logo, palette and text from [Brand kit](brand-kit.md). Template colors are examples until the committee approves them.
4. Duplicate this design for future cards; change only the intended text/photo.
5. Export one test PNG and check for paid elements, watermarks, readable text and cropping before building the whole campaign.

The browser is enough; optional desktop/mobile downloads should come from Canva itself. **Canva Education** requires eligible school-level teaching/institutional status, not merely an education-themed conference. Higher education and nonprofit eligibility have separate rules. Confirm licensing for promotional use. [Education eligibility](https://www.canva.com/pt_br/educacao/elegibilidade/), [nonprofit criteria](https://www.canva.com/nonprofits/eligibility-guidelines/).

<span id="capcut"></span>

## CapCut: install when you have a video to edit

**Cost:** basic editing has a free route; Pro/AI assets and quotas vary. Do not assume automatic captions or every template export is free.

1. Follow [CapCut's official installation centre](https://www.capcut.com/help/download-and-install) to Windows/Mac or the mobile store.
2. Install and open it; start **New project** and import one authorized practice clip.
3. Trim it, add a short text layer, and export a brief test.
4. If export requests payment, inspect Pro-marked elements and replace them with free ones or manual text.
5. Play the exported file, check Portuguese accents, captions and audio, then follow [Reels and clips](video-repurposing.md).

Use music cleared for the intended Facebook/Instagram use. Availability in an editor's library alone is not a universal promotional licence.

<span id="obs"></span>

## OBS Studio: optional screen recording

**Cost:** free and open source. The current [download page](https://obsproject.com/download) lists Windows 10/11 and macOS 13+.

1. Download the installer for your system; on Mac choose **Apple Silicon/arm64** or **Intel/x86_64** as appropriate.
2. Install/open OBS; grant screen/microphone permission when needed.
3. Run **Tools → Auto-Configuration Wizard** and choose recording for the first test.
4. Add a scene, then a screen/window-capture source; choose the intended window and check the audio meter.
5. Record ten seconds, stop, locate the recording through OBS's file menu and play it back.

If the picture is black, check capture permissions/source; if audio is missing, check the selected input and meter. Hide notifications and private windows before recording. Start locally before trying a live transmission. [System/configuration guidance](https://obsproject.com/kb/system-requirements).

<span id="meta-business-suite"></span>

## Meta Business Suite: Facebook management without ads

**Cost:** basic management/scheduling is free; boosting or buying ads is a separate paid action and is outside this organic campaign.

1. Ask the Page owner to grant your own profile the appropriate access. If no Page exists, follow [Page and Event setup](facebook-events-groups.md).
2. On computer, open [business.facebook.com](https://business.facebook.com/), sign in and select the correct Page/business asset.
3. For phone use, install **Meta Business Suite**, by Meta, from [Google Play](https://play.google.com/store/apps/details?id=com.facebook.pages.app) or the [App Store](https://apps.apple.com/br/app/meta-business-suite/id514643583).
4. Verify the Page name/avatar before creating a **draft**; check its destination account and preview.
5. Follow [Scheduling tools](scheduling-tools.md) for the approved post's date and publishing steps.

Page settings include **Page access / Acesso à Página**. The owner should grant content/messages tasks as needed, have you accept the invitation and test the access. Exact intermediate Brazilian menu labels were not verified in an authenticated account. If the Page is absent, resolve the invitation/asset selection with its owner; do not create a duplicate or share the owner's password. [Meta's access guidance](https://www.facebook.com/help/187316341316631).

<span id="whatsapp-business"></span>

## WhatsApp Business: protect the existing support number

**Cost:** the phone app is free to download; the Business Platform/API is a different service with its own setup and costs.

1. **Check with the number owner first:** is the committee already using Business, ordinary WhatsApp Messenger, or another support system? If Business is already configured, use the existing arrangement; volunteers should not register its number again.
2. For an approved Messenger-to-Business move, the owner makes a backup and keeps control of SMS/call verification. Follow the [official transfer guide](https://faq.whatsapp.com/3059780464322392/?cms_platform=iphone&locale=pt_BR).
3. Use the official [WhatsApp Business download](https://www.whatsapp.com/business/) or its linked phone store; verify the publisher.
4. Verify the authorized number and follow the offered history-transfer/restoration steps. Do not delete the old installation/backup until the owner checks the result.
5. Configure the organization profile, support hours and two-step verification; review linked devices and test an incoming message.
6. In **Business tools / Ferramentas comerciais**, configure approved greetings, away messages and quick replies from [Replies and inbox](replies-inbox.md). Use its exact shortcut bank and the opt-out label **Não enviar divulgação**.

The same number cannot be two independent accounts in Messenger and Business simultaneously. A simultaneous Android/iPhone change needs its specific migration process; do not assume a Google Drive backup restores through iCloud. Exact current phone screens were not tested here. Keep the owner involved throughout. [Number/account requirements](https://faq.whatsapp.com/665643701880397/?cms_platform=iphone&locale=en_US).

Quick replies are selected by a person; they are not an autonomous chatbot. Begin with `/datas`, `/inscricao`, `/prazo`, `/certificado` and `/humano`, using the canonical texts and confirmation rules. Opt-out requests must be respected; an existing support enquiry is not permission for future promotional broadcasts.

<span id="meta-ai"></span>

### Meta AI: optional drafting in familiar apps

Meta AI supports Brazil/Portuguese. Update the official app and use the Meta AI entry if present; no extra extension or unfamiliar “support number” is needed. Its presence in every WhatsApp Business account is not guaranteed. Consumer Meta AI is separate from a business inbox agent and does not automatically answer on behalf of the committee. Keep registrant information out of it. [Meta's Brazilian announcement](https://about.fb.com/br/news/2025/08/apresentando-o-app-meta-ai-uma-nova-forma-de-acessar-seu-assistente-de-inteligencia-artificial/).

<span id="nodejs"></span>

## Node.js LTS: only for the animation-rendering volunteer

Node.js runs JavaScript outside the browser. **It is free and optional**, and is not needed for normal chat, Canva or the native Claude Code installer.

1. Open [nodejs.org/en/download](https://nodejs.org/en/download); select **LTS** and your operating system.
2. Windows: download the appropriate `.msi`; Mac: use the `.pkg` installer. Follow installation, including Node/npm and PATH when offered.
3. Close/reopen PowerShell or Terminal. Run these separately:

```sh
node --version
npm --version
```

4. Both should show a version number. If the command is unknown, reopen the terminal or repair the installation before continuing.
5. Put the reviewed rendering project in its own folder and follow the **exact commands and dependencies** in [Motion graphics](motion-graphics-claude.md).

`node render.mjs` runs a file with that name; it is not a universal video-export command. A renderer may also require browser packages, fonts or FFmpeg. Do not run arbitrary `npm install` commands suggested by an unverified page. Ask the AI to explain each command before running it if you are unsure.

<span id="privacy"></span>

## Privacy controls before real work

Use public approved material or fictitious practice data. Do not upload registrant spreadsheets, CPF numbers, receipts, private messages, unpublished papers or sensitive personal information. Turning training off does not establish permission to process those records. See [Ethics and LGPD](ethics-legal.md).

| Personal service | Documented control to inspect |
|---|---|
| Claude | **Settings → Privacy → Help Improve our AI models** |
| ChatGPT | **Settings → Data Controls → Improve the model for everyone** |
| Gemini | **Settings/help → Activity → Keep Activity / Manter Atividade** |

Turn off model-improvement/activity options if that is your preference; read the explanation before confirming deletion. **Memory, chat history, connector permissions and training are separate controls**. Review stored memories/settings too. Opting out does not mean zero retention, and institutional accounts have their own terms. [Claude privacy](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings), [ChatGPT controls](https://help.openai.com/en/articles/7730893-data-usage-for-openai-models), [Gemini activity](https://support.google.com/gemini/answer/13278892?hl=pt-BR).

<span id="troubleshooting"></span>

## If a button or feature is missing

1. Confirm the product: browser chat, desktop app, extension and API are different routes.
2. Check your account, plan, app version, country and school/work policy in the official feature help.
3. Update/reopen the app and compare the current menu names. Do not pay until eligibility is clear.
4. Send the AI a cropped screenshot and ask it to identify **visible** controls, one step at a time; remove personal information first.
5. Use the free fallback: approved facts + normal chat → manual copy → Canva → human review → native publishing.

### Ready-to-work checklist

- [ ] One assistant works; required roles/access are assigned.
- [ ] Latest fact sheet and canonical voice saved; owner/version recorded.
- [ ] No registrant data in chat, Skill or shared practice folder.
- [ ] Canva export tested; correct Facebook Page selected.
- [ ] Support-number setup approved and tested by its owner.
- [ ] Paid trials/subscriptions, if any, have a named owner and known billing date.
- [ ] Optional Skill/agent tested on disposable material before campaign use.

## Next steps

Use [Learning with AI](learning-with-ai.md) for a guided first session, [Prompting basics](prompting-basics.md) for approved context, and the [CONAFROEDU sprint](conafroedu-sprint.md) to choose the next actual campaign task. Keep the [Facebook playbook](facebook-playbook.md) as the main channel guide.
