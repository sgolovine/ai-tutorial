---
title: Learning with AI, Your Personal Tutor
description: Learn the campaign tools one task at a time, using questions, screenshots, study modes and practice. Includes source checks, a short learning plan and prompts for CONAFROEDU volunteers.
order: 35
section: start
icon: 🎓
updated: 2026-10-21
---

You can ask an assistant to teach you how to make a card, understand an unfamiliar term, check a caption or find the next control on a screen. You do not need to become an AI specialist before helping CONAFROEDU.

This guide gives you a practical learning routine, tutor prompts, screenshot help, document-based study and ways to check whether you can do the task yourself. **Start with the free assistant you already use.** If you need an app or account, follow [Tool setup](setup-tools.md#starter-stack).

> [!NOTE]
> Feature documentation checked on **21 October 2026**. Exercises and suggested timings below are teaching proposals, not measured learning guarantees or a second publishing calendar. Use the [campaign calendar](campaign-timeline.md) for actual deadlines and assignments.

<span id="first-session"></span>

## Your first session: one task in 20 minutes

Choose something small enough to finish: “write a clear Facebook invitation” is better than “learn digital marketing.” Keep a public approved fact sheet and one relevant guide open.

1. **Five minutes: explain and diagnose.** Tell the tutor your goal and what you already know. Ask for a short example and one question.
2. **Five minutes: guided attempt.** Try a small task. Ask for a hint if stuck; do not request the complete answer immediately.
3. **Eight minutes: do it again yourself.** Close the example and make a second version with different wording or a different authorized photo.
4. **Two minutes: check and record.** Compare with the original facts. Write what you did, what needed help, and what to practise next.

For your first exercise, draft a Portuguese Facebook caption announcing **I CONAFROEDU, 5–6 December 2026, 100% online**, using the [current approved fact sheet](prompting-basics.md). Keep it as a draft. Another volunteer should be able to identify the event, dates and next action without reading the chat.

<span id="tutor-prompts"></span>

## Ask for a tutor who waits for you

Many assistants give a complete answer at once. To learn, ask for short steps and wait for feedback after your own attempt. This is often called **Socratic tutoring**: questions help you work through the reasoning.

```prompt
Be my patient tutor. I am a Brazilian educator who has used chatgpt.com or claude.ai but has not used advanced tools.

Goal: learn to write a clear organic Facebook invitation for CONAFROEDU using the approved fact sheet I will paste below.
Time available: 20 minutes. Answer in Brazilian Portuguese, using familiar words and explaining technical terms on first use.

First ask what I already know and which part is difficult. Ask one question at a time and wait for my answer. Show a short example, then give me a similar task. Offer a hint before giving the solution. Check facts against the supplied document and flag missing information. At the end, ask me to complete one new example without help.

[PASTE THE CURRENT APPROVED FACT SHEET AND CANONICAL VOICE FROM PROMPTING-BASICS]
```

All social copy should be in pt-BR; the [Portuguese version of this guide](../pt-BR/learning-with-ai.md) provides Portuguese tutor prompts too. The canonical **VOZ DA MARCA** belongs in [Prompting basics](prompting-basics.md); reuse it rather than asking each tutor to invent a new voice.

### Useful follow-up questions

| When you need… | Ask… |
|---|---|
| Simpler language | “Explain that for an educator who uses WhatsApp but has never edited a video. Then tell me the technical term.” |
| A clearer purpose | “What problem does this step solve? Show one example and one case where I would skip it.” |
| A smaller next step | “Give me only the next action. Wait until I tell you the result.” |
| Help without the solution | “Give me a hint, then let me try before you show the answer.” |
| Honest correction | “Check my attempt against this source. Identify the specific error and ask me to correct it.” |
| Transfer to another task | “Give me a new example with different wording so I cannot just copy.” |
| A realistic limit | “What can I do free in my account? Which step depends on a paid plan or a feature you have not verified?” |

Correcting the tutor is part of the work. “That button is not on my screen” is useful evidence; it should lead to a new observation, not more confident repetition.

<span id="study-modes"></span>

## Study modes: choose one, not all of them

| Route | Availability and starting point | Useful exercise |
|---|---|---|
| **ChatGPT Study** | Across plans, including Free; [open Study](setup-tools.md#study-mode) in a **regular chat**, outside Projects/GPTs/Temporary Chats | Ask for one question at a time about an uploaded public checklist |
| **Ordinary Claude chat** | Free with limits; [Claude setup](setup-tools.md#claude) | Paste the tutor prompt; this does not activate a special institutional mode |
| **Claude for Education Learning mode** | Documented institutional education offering; check with your institution | Reason through a concept using guided questions |
| **Gemini Guided Learning / Aprendizado guiado** | Sign in at Gemini; web guidance documented, mobile rollout varies | Explain a concept and practise with examples |
| **NotebookLM / Gemini Notebook** | Free with limits; [notebook setup](setup-tools.md#notebooklm) | Build source-based questions from selected approved documents |

For Gemini on the web: open [Gemini](https://gemini.google.com/) → the add-files/tools control → **More tools → Guided Learning / Aprendizado guiado**, enter the topic and send. If it is missing on mobile, try the website. [Official learning-tool instructions](https://support.google.com/gemini/answer/16448384?hl=pt-BR).

Claude's institutional Learning mode should not be promised as a button in every personal Free/Pro account. Claude Code's **Learning/Explanatory** output styles are separate coding aids; they are not required for learning marketing. If you already use Code, consult its current configuration/help and [setup](setup-tools.md#claude-code). [Claude for Education](https://www.anthropic.com/news/introducing-claude-for-education), [Code learning guidance](https://support.claude.com/en/articles/14554000-claude-code-power-user-tips).

A study mode can still make mistakes or reveal an answer too soon. Say “Wait for my attempt first.” It does not supply extra message/upload allowance beyond your plan. [ChatGPT Study help](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt).

<span id="screenshots"></span>

## “I am on this screen. What do I do next?”

You can get screenshot guidance without installing a browser agent. The assistant sees the image you send; it does not automatically see your live screen or click anything.

1. Open the exact app/page where you are stuck. Note the device, browser and account/plan type.
2. Take a screenshot: Windows **Win + Shift + S**; Mac **Shift + Command + 4**. On phones, use the device's screenshot control.
3. Crop or cover names, emails, phone numbers, QR codes, registrant lists, notifications and unrelated tabs. Keep the relevant buttons and error message legible.
4. Attach the image through the chat's image/file control and describe the intended outcome.
5. Ask for **one visible next step**, do it yourself, then report what happened. Send a new cropped image when the screen changes.

```prompt
This is my current screen in [APP], on [DEVICE/BROWSER]. I want to [GOAL]. I have already tried [ACTION] and got [RESULT].

First describe the controls you can actually read in this screenshot. Give me one reversible next step and wait. If the needed control is not visible, tell me what area to open or what new screenshot you need. Do not invent a button or assume you can see another tab. Explain in Brazilian Portuguese.

For this exercise, stop before any publishing, sending, purchase, account migration or file deletion.
```

**Example:** in Business Suite, the goal might be “find the saved draft, not publish yet.” Verify the Page selected and destination before clicking anything consequential. If the assistant points to a nonexistent control, say so and ask it to compare the screenshot with the [current setup guide](setup-tools.md#meta-business-suite).

> [!WARNING]
> Do not paste a password, login verification code or full diagnostic log into the chat. A screenshot can expose the same information as a spreadsheet. Use a disposable practice document when learning computer actions.

<span id="better-questions"></span>

## Ask better questions and troubleshoot errors

A useful help request has **goal + environment + attempt + observed result**. “The video does not work” is hard to diagnose. “CapCut on Windows exports a file with no sound; the original has sound and this is the audio-track screen” gives the tutor something concrete to inspect.

```prompt
Help me diagnose this without changing several things at once.
Goal: [WHAT SHOULD HAPPEN].
Tool/device/version/plan, if known: [DETAILS].
What I did: [ONE OR TWO STEPS].
What happened: [EXACT ERROR OR OBSERVATION, WITH PRIVATE DATA REMOVED].

Separate what you can observe from possible explanations. Ask one clarifying question if needed. Suggest the smallest reversible check, explain what its result would tell us, and wait for me. Look up current official instructions if you need a feature or menu fact. Do not suggest reinstalling everything as the first step.
```

For code errors, share the relevant message and a small reviewed excerpt; remove credentials and private file paths. Do not run commands you cannot explain merely because the answer contains a code block. Ask what files it changes, what it downloads and how to undo it. [Node setup](setup-tools.md#nodejs) is optional for the rendering volunteer.

<span id="verification"></span>

## Verify answers before learning the wrong thing

An **AI hallucination** is a plausible answer that is false or unsupported. It can be a fake URL, a missing button, the wrong plan or a confident invented conference rule. A fluent Portuguese answer is not evidence of accuracy.

The model's training has a knowledge cutoff; a search tool can add newer material, but it does not make every statement current. There is no single cutoff date for an entire product with multiple models. For prices, plans, installation, interface paths and policies, request current official evidence.

1. **Ask for the source.** Require the exact official page and the claim it supports. If the assistant cannot browse, open the help page yourself and supply the relevant text.
2. **Open it outside the chat.** Check the domain, title, date and applicability to Brazil, your plan and device. A link that opens can still support a different claim.
3. **Check for superseded instructions.** A historical launch article may retain old steps below a current retirement notice. Atlas and the old ChatGPT agent are examples in [Tool setup](setup-tools.md#atlas).
4. **Compare event facts with the master.** Do not use model memory to settle submission deadlines, prices, presenter requirements or certificate eligibility. A partial programme with named speakers is not the same as a final schedule; use only approved details.
5. **Try the instruction on a draft.** If the interface differs, stop and observe it instead of following imaginary steps.
6. **Keep an evidence note.** Record claim, source, date checked, account/device and result. Recheck before publishing a time-sensitive statement.

```prompt
Check this advice before I use it: [PASTE CLAIM].
Find the current official primary source if web search is available. Give its title, URL, date or update notice, and the exact point it establishes. Separate confirmed facts, your inference, and anything not established. Check Brazil, plan and device restrictions and whether a newer notice supersedes these instructions. If you cannot verify it, say so and propose a safe way to check manually.
```

Agreement from a second assistant is useful for finding objections, but **two matching answers are not independent verification**. For Africanidades, historical interpretation and cultural symbols, consult qualified people and relevant sources; the AI should support study, not decide whose experience is authentic. See [Representation and bias](representation-bias.md).

<span id="notebook-study"></span>

## Turn these guides into a small document tutor

Use [NotebookLM / Gemini Notebook setup](setup-tools.md#notebooklm) if you want one place to ask questions about a few documents. Start with three: the approved fact sheet, this guide and the Facebook playbook. Adding every page at once makes it harder to see which source answers your question.

1. Import the public documents, including titles and revision dates; check their imported text.
2. In the **Gemini Notebook interface**, select just the relevant approved sources. Do not treat synced Gemini chats or old AI drafts as official source material.
3. Set **Output language → Português (Brasil)**.
4. In **Studio / Estúdio**, generate flashcards or a quiz. Customize topic/difficulty if useful; answer before revealing explanations.
5. Open citations and compare the explanation with the actual source. If a study-guide/report template is absent, ask for a guide in chat and save it as a note.

The [official flashcard/quiz guide](https://support.google.com/gemininotebook/answer/16958963?hl=es-419) describes creation and review. Source grounding helps you inspect answers; it does not make a mistaken source true. See the [differences between Notebook and ordinary Gemini](https://support.google.com/gemininotebook/answer/17003757?hl=en).

```prompt
Using only the approved sources selected here, teach me the difference between event registration and paper submission. Ask three questions, one at a time, and wait for my attempts. Cite the source for each correction. If a presenter rule conflicts or certificate eligibility is missing, identify the uncertainty and ask me which committee-approved answer applies. Do not invent a resolution.
```

For an audio recap, set the output language and choose **Audio Overview / Resumo em Áudio** in Studio when available. Listen, then explain the topic without replaying it. Check dates, names and pronunciation before sharing; synthetic presenters are not real conference speakers. Audio is optional, uses generation quotas and is not proof of learning. [Output language](https://support.google.com/gemininotebook/answer/16261963?hl=pt), [notebook features/help](https://support.google.com/gemininotebook/?hl=pt-BR).

<span id="practice"></span>

## Practise recall, explanation and transfer

Reading an excellent answer can feel like knowing the task. Check by doing it with less help. Research in high-school mathematics found that unguarded AI assistance could hurt later performance when the tool was removed; this does not establish a universal effect for these volunteers, but it is a reason to practise independently. [Bastani and colleagues, PNAS](https://doi.org/10.1073/pnas.2422633122).

Try this routine:

- **Retrieve:** close the chat and list the three checks before posting a card.
- **Explain back:** tell the tutor why registration and submission are different; request correction against the fact sheet.
- **Transfer:** adapt a teacher invitation for postgraduate students without changing dates or promises.
- **Revisit:** try again tomorrow and about a week later. These are practical sample intervals, not a universal optimum.
- **Keep an error log:** “mixed registration and submission” is a useful entry; “bad at AI” is not.

```prompt
I will explain what I learned in my own words: [MY EXPLANATION].
Compare it with this approved reference: [TEXT]. Tell me what is accurate, identify an important omission or error if there is one, and ask a new question that tests whether I understand it. Do not praise an incorrect answer or silently rewrite it for me.
```

### Three CONAFROEDU practice tasks

| Task | Attempt | A human checks |
|---|---|---|
| Facebook caption | Up to 80 pt-BR words, one invitation, official link | Correct dates; registration/submission distinguished; canonical voice |
| Canva card | Duplicate an approved design and replace the text | Accents, contrast, readable date, authorized imagery, no invented promise |
| Inbox answer | Role-play someone asking whether 40 hours guarantee career progression | No guarantee; institution/committee rules checked; human handover when needed |

Use [Canva setup](setup-tools.md#canva) for the design exercise and [Replies and inbox](replies-inbox.md) for the answer bank. These are practice drafts, not extra publishing obligations. Do not create new quick-reply names for the exercise.

<span id="voice-practice"></span>

## Use voice if speaking is easier

In an assistant that offers voice, open its microphone/voice control and grant microphone access only when needed. Ask for Brazilian Portuguese and practise explaining the congress to a colleague. If speech recognition gets a name, date or amount wrong, correct the transcript or switch to text.

For ChatGPT, use the official app/site and available voice controls; plans and modes have different limits. Voice dictation can also supply a Study question. You do not need screen sharing or an agent for a spoken exercise. [ChatGPT setup](setup-tools.md#chatgpt), [official voice guidance](https://help.openai.com/en/articles/20001274/).

```prompt
Let's role-play in Brazilian Portuguese. You are a teacher who has never heard of CONAFROEDU. Ask one realistic question at a time. Let me answer aloud using only the approved facts. At the end, give feedback on clarity and identify any promise I cannot support. Do not send or publish anything.
```

On a shared computer or in a staff room, use headphones and avoid reading private enquiries aloud. Typed practice is equally acceptable if audio is inconvenient or inaccessible.

<span id="learning-plan"></span>

## A learning plan that fits the campaign

Use **five sessions of about 20 minutes** as a starting estimate, separate from production and support time. Repeat a session if needed. This is not a promise that every novice learns every tool in 100 minutes.

| Session | Learn | Observable result |
|---|---|---|
| 1 | Briefing and fact checking | One caption corrected against the approved sheet |
| 2 | Canva editing | One exported test card and its editable original |
| 3 | Page/draft navigation | Locate a draft in the correct Page, without accidental publication |
| 4 | Human-reviewed replies | Answer three fictitious questions using the canonical bank |
| 5 | Independent repetition | Complete one task without the tutor; explain the checks to a colleague |

For session 3, arrange authorized [Business Suite access](setup-tools.md#meta-business-suite) first. For session 4, no real customer messages are needed.

```prompt
Build a learning plan for me, not a publishing calendar.
Role: [COPY / DESIGN / INBOX / COORDINATION].
Current skills: [WHAT I CAN ALREADY DO].
Device and free tools: [DETAILS].
Time available: 20 minutes per session for five sessions.
Goal: [ONE OBSERVABLE CAMPAIGN TASK].

Ask only for information that materially changes the plan. Give one practice task and a way to test it without AI in each session. Include review of earlier mistakes and official-source verification. Keep paid tools optional. Use the current approved CONAFROEDU documents and do not create extra publication commitments.
```

Across the six-week campaign, choose learning to match the work already due: submission clarity before **4 November**; price-copy checks before **16 November**; contextual, respectful educational content around **20 November**; programme/access checks as final details are approved; recording/support practice before **5–6 December**. Learning these skills does not authorize a deadline extension or new event promises. Follow the [sprint](conafroedu-sprint.md) and committee decisions.

<span id="courses"></span>

## Free learning resources, with Portuguese first

Pick one resource for your present need; you do not need to complete a course before making your first approved post.

| Resource | Language/cost and useful focus |
|---|---|
| [Nova Escola: Inteligência Artificial para professores](https://cursos.novaescola.org.br/curso/12141/inteligencia-artificial-para-professores/resumo) | Portuguese; the official page advertises free access and a certificate, aimed at Ensino Fundamental educators. Follow its own enrolment links. |
| [Google's Brazilian AI educator series](https://edu.google.com.br/intl/ALL_br/learning-center/google-ai-educator-series/) | Portuguese learning route; choose an introductory session relevant to the task you need now. Check each session's access and any credential conditions. |
| [Microsoft Learn: IA para educadores](https://learn.microsoft.com/pt-br/training/paths/ai-education/) | Portuguese beginner self-study; four modules. Distinguish the self-study path from separately offered instructor-led training. |
| [Claude Academy: AI Fluency](https://academy.claude.com/courses/ai-fluency-framework-foundations) | English materials; useful for delegation, evaluation and responsible use. Full official pt-BR availability was not established here; browser translation is not a verified Portuguese edition. |

Before enrolling elsewhere, check whether “free” means the complete course, a first-module preview or time-limited auditing, and whether the certificate is paid. Do not assume every Coursera/edX course is fully free or in Portuguese. Do not confuse any course certificate with CONAFROEDU's advertised 40-hour certificate.

## Check your learning before moving on

- [ ] I can name one task I can now do without the tutor.
- [ ] I tried a new example rather than copying the demonstration.
- [ ] I can explain where the event facts come from and who maintains them.
- [ ] I opened the evidence for a current tool claim.
- [ ] I know when to ask the committee instead of asking the model to guess.
- [ ] Practice screenshots/documents contain no private participant data.
- [ ] I recorded one mistake and a next practice task.

## Next steps

Return to [Tool setup](setup-tools.md) if a capability is missing, use [Prompting basics](prompting-basics.md) for the canonical facts/voice, and apply one skill to the next approved task in the [CONAFROEDU sprint](conafroedu-sprint.md). The [Facebook playbook](facebook-playbook.md) keeps practice focused on the team's main channel.
