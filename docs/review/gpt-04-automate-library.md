# Adversarial review: automation, outreach and library

Reviewed on **2026-10-21** against `docs/REVIEW_GUIDE.md`, `BRIEF.md`, `CONTENT_PLAN.md`, `CONTENT_GUIDE.md` and `REVIEW_NOTES.md`.

Scope: both `content/en/` and `content/pt-BR/` versions of `scheduling-tools`, `replies-inbox`, `computer-use-agents`, `no-code-automation`, `outreach`, `tips-tricks`, `prompt-library`, and `glossary-resources`. Content was not edited. No commit was made.

**18 findings: 2 CRITICAL, 12 MAJOR, 4 MINOR.** Shared English/Portuguese defects count once. The highest priorities are G04-01, G04-02, G04-03, G04-04 and G04-07.

All external evidence below was retrieved on **2026-10-21**. Line numbers refer to the reviewed source files. Recommendations are proposed changes, not claims that the described automations were run in an authenticated account.

## Findings

### G04-01 — CRITICAL — A published WhatsApp number or prior acquaintance is treated as permission for outreach

**Files / location:** `content/en/outreach.md:127`, `content/pt-BR/outreach.md:127`, and T4/M4 at line 209 in both files.

**Problem:** Step 7 permits messaging published institutional numbers or people the team already knows. Neither establishes permission to receive the committee's WhatsApp outreach. The administrator permission-request template can therefore become the unsolicited first marketing contact. The same page later requires opt-in at line 328, leaving volunteers with conflicting operational instructions. Sending individually does not cure this.

**Evidence:** [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/) requires both a supplied number/username and the recipient's opt-in permission. It does not provide an exception for a number found publicly or a person known socially. The policy applies to the Business app as well as the Platform.

**Suggested fix:** Replace step 7's WhatsApp instruction with: “No WhatsApp Business, escreva apenas para quem iniciou o contato ou autorizou previamente receber esse tipo de mensagem da organização. Número publicado, contato salvo ou conhecer a pessoa não substitui essa autorização. Sem autorização, use o e-mail ou formulário institucional para perguntar sobre divulgação.” Add directly above M4/T4: “Use este modelo somente em uma conversa iniciada pela administração do grupo ou depois de obter autorização por outro canal.” Apply the same condition to the follow-up cadence.

### G04-02 — CRITICAL — The opt-in recipe enrolls every form response without checking consent

**Files / location:** `content/{en,pt-BR}/no-code-automation.md:64–100`, especially the diagram at lines 72–78 and steps 1, 4–6 at lines 85–90.

**Problem:** The recipe says to add an initially unchecked consent box, but never makes it required or checks its value. Every new response becomes a “New opt-in” email, and the next instruction adds the person to the appropriate list. A blank consent response follows the same path as consent. This is an executable gap, not just a missing disclaimer.

**Evidence:** [Google Forms: edit your form](https://support.google.com/docs/answer/2839737?hl=en) identifies the **Required** setting as the way to prevent unanswered questions. [LGPD, arts. 5 XII and 8](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) requires demonstrable consent and assigns proof to the controller. The WhatsApp policy cited in G04-01 independently requires permission.

**Suggested fix:** For a form whose sole purpose is subscribing, use one unchecked affirmative option and explicitly enable **Obrigatória/Required**. Record its exact text/version and answer. If non-subscribers can also submit the form, add an explicit consent check before enrollment; do not describe that implementation as the same two-step Zap without verifying plan support. Include consent status in the team alert and require the human to verify it. Test both affirmative consent and missing/refused consent; only the former may enter the list.

### G04-03 — MAJOR — The suggested Make schedule exhausts the free plan before the campaign is over

**Files / location:** `content/{en,pt-BR}/no-code-automation.md:121–130`, particularly step 7, line 129.

**Problem:** The recipe recommends polling every 15 minutes on Make Free. This means **96 checks/day; 2,880 checks in 30 days**, before any AI calls or sheet updates. The page's own allowance is 1,000 credits/month. At continuous operation the checks alone consume that allowance in about 10.4 days. “Fewer runs use fewer credits” does not explain that the first proposed setting cannot fit the advertised free plan.

**Evidence:** [Make operations](https://help.make.com/operations) specifies one operation for each Google Sheets **Watch New Rows** check, regardless of returned bundles. [Make Academy: operations and credits](https://academy-content.make.com/courses/make-foundation-operations-credits/01-introduction-to-operations-and-credits/) says the first module counts as one credit, confirms the free allowance, and explains that scenarios pause after exhaustion. The arithmetic above is an inference from those documented rules.

**Suggested fix:** Default this small-event flow to two or four runs per day, aligned to inbox duty. Explain the budget, for example: “Quatro consultas por dia gastam cerca de 120 créditos em 30 dias, antes das etapas por pergunta. Some os créditos do módulo de IA e da atualização da planilha; confira o histórico.” Remove the 15-minute example from the free recipe, or label its minimum polling cost and the need for another plan.

### G04-04 — MAJOR — The multi-feed RSS recipe cannot be built with Watch triggers behind a router

**Files / location:** `content/{en,pt-BR}/no-code-automation.md:190–201`, especially step 2, line 193.

**Problem:** The instructions start with 3–5 feeds and propose **RSS → Watch RSS feed items**, “one per feed, or use a router.” A router cannot combine multiple Watch triggers into one scenario. Separate scenarios per feed can also exceed the two-active-scenario free limit, particularly if Flow 2 is already running. The recipe does not supply a valid, budget-compatible topology.

**Evidence:** [Make: types of modules](https://help.make.com/types-of-modules) says a trigger can appear only once, as the first module. [Make: router](https://help.make.com/router) describes branching an existing incoming flow, not combining independent triggers. The Academy source in G04-03 confirms two active scenarios on Free.

**Suggested fix:** Give a working **one-feed** beginner version: one Watch trigger, an explicit duplicate check, optional summary, then Add Row. Say that each additional independent Watch feed needs another scenario and competes with Flow 2 for the two slots. Alternatively, provide and verify a single scheduled scenario that iterates an approved feed list using an RSS retrieval action. For the duplicate check, also spell out how the no-match path continues; “Search Rows → continue if not found” alone omits the empty-result handling a novice needs to configure. Test a new URL, an existing URL and an empty feed before calling the flow ready to build.

### G04-05 — MAJOR — “AI automation costs are not zero” incorrectly rules out Gemini's API free tier

**Files / location:** `content/{en,pt-BR}/no-code-automation.md:35–36` and line 126.

**Problem:** Separating a chat subscription from an API account is correct. The warning then says AI automations need their own billing, normally a card, and small volumes “are not zero.” Flow 2 repeats that billing must be active even when Google Gemini is selected. This wrongly presents paid billing as universal and removes a relevant zero-budget option.

**Evidence:** [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing) states that new accounts begin on a Free tier providing selected models under free limits; linking billing moves an account to paid tiers. [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) distinguishes model-specific free and paid availability. Free-tier data handling also differs from paid service.

**Suggested fix:** “Uma assinatura de chat não inclui automaticamente API. OpenAI e Anthropic normalmente exigem cobrança separada. A API do Gemini tem uma cota gratuita para modelos elegíveis; confira limites e tratamento de dados antes de usar. No Make, você também gasta créditos do cenário.” In step 4, require an API key for the chosen provider and billing **where required**. Keep sensitive messages out of every version of this flow.

### G04-06 — MAJOR — The quota warning falsely says Zapier polling and errors consume tasks

**Files / location:** `content/{en,pt-BR}/no-code-automation.md:36`.

**Problem:** The unqualified statement that polling, retries and errors use quota reads as applying to all three compared products. It is false for Zapier polling and failed actions. This matters on a page intended to teach the difference between tasks, credits and executions.

**Evidence:** [Zapier: how task usage is measured](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier) says triggers and polling checks never use tasks; action steps that error or halt do not count. Previously successful actions replayed in a full run can count again. Make's check-based accounting is different, as documented in G04-03.

**Suggested fix:** Replace the blanket sentence with a small product-specific note: “No Make, consultas do gatilho consomem créditos mesmo sem novas linhas. No Zapier, consultas do gatilho e ações com erro não gastam tarefas; ações bem-sucedidas e ações bem-sucedidas repetidas numa reexecução podem gastar. No n8n, confira a regra de execuções do plano.”

### G04-07 — MAJOR — ChatGPT's product/plan description is unresolved despite available official answers, and Task D omits the upload limitation

**Files / location:** `content/{en,pt-BR}/computer-use-agents.md:30`, task table line 78, Task D lines 135–145, and setup note EN line 184 / pt-BR line 183; related resource at EN `glossary-resources.md:298`, pt-BR line 295.

**Problem:** The row combines “browser / agent,” a separate local profile, web and desktop, the Go price, and an unresolved Atlas question. These are not one interchangeable setup. It then recommends ChatGPT for loading media posts into Business Suite without specifying the browser or a human media-upload handoff. The linked documentation already supplies a clearer current name, a plan boundary for signed-in cloud tasks, and an explicit limitation for the desktop built-in browser.

**Evidence:** [OpenAI Browser documentation](https://learn.chatgpt.com/docs/browser) distinguishes the desktop built-in browser from **ChatGPT Work's cloud browser**. It identifies Plus/Pro, subject to rollout, for Work's authenticated web/mobile navigation and states that uploads cannot be automated in the desktop built-in browser. [OpenAI browser extension documentation](https://learn.chatgpt.com/docs/chrome-extension) describes another route using existing supported browser tabs. These official pages do not establish an Atlas-in-Brazil entitlement or a numerical agent allowance; those points remain unverified.

**Suggested fix:** Separate cloud Work and desktop browser/extension paths. State the verified Plus/Pro boundary, retain account-rollout caveats, and remove Go's price from the agent eligibility cell unless its access is established. For Task D say: “No navegador integrado do aplicativo ChatGPT, a pessoa faz o upload da mídia; o agente pode ajudar com a conferência e o preenchimento.” Provide an actual entry point/setup for the selected path. Keep Atlas explicitly unverified or omit it; do not guess that it is available or discontinued.

### G04-08 — MAJOR — Gemini tasks omits two mandatory settings and their privacy implications

**Files / location:** `content/{en,pt-BR}/computer-use-agents.md:31`; related resource at EN `glossary-resources.md:298`, pt-BR line 295.

**Problem:** The eligibility cell lists Pro/Ultra, a personal account and age 18+, but omits **Keep Activity** and **Personal Intelligence**. A reader satisfying the listed conditions can still be unable to start tasks. Enabling these settings is also a material decision for volunteers whose Google accounts may contain student or participant information. The generic separate-browser-profile advice does not isolate connected account data.

**Evidence:** [Google's current tasks help, in Portuguese](https://support.google.com/gemini/answer/17094507?hl=pt-BR) lists both settings as requirements. Its browser/data sections explain that tasks can use connected apps and Personal Intelligence and can share information with websites. Brazil is not in its stated excluded-region list.

**Suggested fix:** Add both prerequisites to the row, link the Portuguese help, and explain: “Confira os apps conectados e o que a Inteligência Personalizada pode acessar antes de ativar; use uma conta apropriada da organização, sem dados de alunos ou inscritos. Se isso não for aceitável, faça a pesquisa manual com fontes públicas.” Identify local Chrome versus remote browser behavior rather than treating every agent as an extension in an isolated profile.

### G04-09 — MAJOR — The comment-to-private-reply instruction omits its time limit and the requirement for a reply before continuing

**Files / location:** `content/{en,pt-BR}/replies-inbox.md:333–344`; `content/{en,pt-BR}/computer-use-agents.md:57`; `content/{en,pt-BR}/glossary-resources.md:112`.

**Problem:** “A comment allows one private reply” is repeatedly stated without the **seven-day** limit. The community-management action at line 344 tells volunteers to send that reply regardless of comment age. It also does not explain that the private reply itself is not permission for a continued automated sequence. The 24-hour organic window is otherwise correctly distinguished from the manual Human Agent route.

**Evidence:** [Meta Messenger Platform policy](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy), retrieved successfully through HTTP even though some web-tool attempts returned 429, explicitly limits Page private replies to seven days after the comment/visitor post. It defines the standard messaging window by eligible user interaction. [Manychat's messaging-window guidance](https://help.manychat.com/hc/en-us/articles/14281199732892-How-to-send-messages-outside-the-24-hour-and-7-day-windows-in-Messenger-and-Instagram) describes Human Agent as support for unresolved issues, not general re-engagement permission.

**Suggested fix:** “Uma Página pode enviar uma única resposta privada a um comentário em até 7 dias. Isso não abre, por si só, uma sequência de mensagens: espere a pessoa responder e respeite a janela aplicável. Se o comentário for antigo, responda publicamente convidando a pessoa a iniciar contato.” Clarify that Human Agent is for a human continuing the person's support request; do not use it for a sales follow-up. Do not add paid-ad-window exceptions to this organic-only recipe unless clearly separated.

### G04-10 — MAJOR — Competing WhatsApp shortcuts and opt-out labels can leave stale answers or missed suppression

**Files / location:** `content/{en,pt-BR}/tips-tricks.md:51`; `content/{en,pt-BR}/prompt-library.md:346,855–864`; `content/{en,pt-BR}/replies-inbox.md:43–62,266,381–393`. Cross-page evidence: `instagram-whatsapp.md:142–150,226` in both languages, plus `quick-start.md:149` and `conafroedu-sprint.md:97`.

**Problem:** The canonical answer bank uses `/prazo`, `/comosubmeter` and `/publicacao`. The library's 5 November prompt replaces `/submissao`; prompt 7.1 creates `/submissao` and `/anais`; the tips tell volunteers to create `/submissao`. The bank's actual update checklist consequently misses aliases created by the other instructions. Opt-out labeling also differs: **Não enviar divulgação** versus **Não enviar novidades**. Separate volunteers can follow different suppression labels or leave an old deadline reply available.

**Evidence:** These exact differences are present in the linked local files, read 2026-10-21; `docs/REVIEW_NOTES.md` already requires unifying them around `replies-inbox`. The [WhatsApp policy](https://whatsappbusiness.com/policy/) makes honoring opt-out a real requirement, not a naming preference.

**Suggested fix:** Make the replies-inbox table authoritative and reuse its exact shortcut names in every prompt/checklist. For 5 November, update **both `/prazo` and `/comosubmeter`**; use `/publicacao` for proceedings. Pick **Não enviar divulgação** everywhere. If aliases are deliberately supported, list them in the same master table and in every update/suppression check instead of leaving volunteers to infer the mapping.

### G04-11 — MAJOR — The batch-caption prompt asks for accurate alt text without receiving the image

**Files / location:** `content/{en,pt-BR}/scheduling-tools.md:132–141`; `content/{en,pt-BR}/prompt-library.md:476–485` (prompt 3.19).

**Problem:** Inputs consist of calendar rows (ID, date, objective, audience, format, key message) and the fact sheet. The prompt nevertheless requires alt text describing only what is in the image. No image or verified visual description is provided. An assistant can only invent a plausible composition or omit relevant visual content. This conflicts with the library's otherwise better accessibility prompt 11.1, which explicitly requests a visual description and transcription.

**Evidence:** The source and library prompt bodies match; both omit this input. [W3C's alt-text decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) bases the alternative on the actual image's meaning, function and text.

**Suggested fix:** Add “IMAGEM FINAL: [anexe a imagem ou cole uma descrição factual e todo o texto visível]”. Change the deliverable to: “Se a imagem ou sua descrição não foi fornecida, escreva AGUARDAR IMAGEM; não imagine pessoas, objetos ou texto.” Add the same condition to automated calendar-to-copy variants elsewhere.

### G04-12 — MAJOR — A reusable speaker-card prompt hardcodes the first congress day

**Files / location:** `content/{en,pt-BR}/prompt-library.md:773–790`, especially line 786. The same text originates in `motion-graphics-claude.md` under “Animated speaker or author card” / “Card animado de palestrante ou autor(a)”.

**Problem:** The prompt makes the time a committee-approved placeholder but makes **5 December** mandatory exact on-screen text. A volunteer reusing it for a session on the second day gets an authoritative-looking wrong-date card. This is a defect inherited from the source, not wording drift introduced by the library.

**Evidence:** The [official event page](https://www.even3.com.br/iconafroedu-764690/) spans **5–6 December**. The reusable prompt does not restrict itself to a particular confirmed 5 December session.

**Suggested fix:** Replace the exact date line with `"[DIA E DATA DA SESSÃO, CONFORME A PROGRAMAÇÃO] · [HORÁRIO CONFIRMADO] (horário de Brasília)"`. Require the approved session date and time as inputs; stop and return `[CONFIRMAR]` if either is absent. Update both source and library together.

### G04-13 — MAJOR — The Portuguese glossary turns “not interchangeable identities” into a prohibition on depicting them together

**Files / location:** `content/pt-BR/glossary-resources.md:146`; compare the English “Quilombola” entry, `content/en/glossary-resources.md:149`.

**Problem:** The Portuguese row says not to mix Black, African, Afro-Brazilian, Indigenous and quilombola identities “numa mesma imagem nem num mesmo texto.” Read literally, this discourages showing different communities together and obscures overlapping identities. The English row instead warns against treating labels as synonyms. Its historical shorthand also omits the contemporary self-identification/territorial dimension of quilombola identity.

**Evidence:** [Decreto 4.887/2003, art. 2](https://www.planalto.gov.br/ccivil_03/decreto/2003/d4887.htm) describes quilombola communities through self-attribution, their own historical trajectory and specific territorial relations, with Black ancestry linked to resistance to historical oppression. It does not make these labels mutually exclusive or prohibit joint representation.

**Suggested fix:** Portuguese: “São identidades específicas, que podem se sobrepor. Não use os termos como sinônimos nem atribua uma identidade pela aparência. Respeite a autodeclaração e o contexto de cada pessoa ou comunidade; diferentes grupos podem aparecer juntos quando isso corresponde à situação.” Add a distinct quilombola definition reflecting the decree and align English. Avoid reducing living communities to a single foundation story.

### G04-14 — MAJOR — The license glossary can be read as clearing image use after credit alone, or with no conditions at all

**Files / location:** `content/en/glossary-resources.md:171`; `content/pt-BR/glossary-resources.md:168`.

**Problem:** The grouped row defines CC BY as reuse “with credit” and CC0 as reuse “with no conditions.” In this site's promotional-photo context, those summaries omit requirements and surviving rights that determine whether a volunteer may use an image. The detailed representation guide is better; the dictionary should not undo its safeguards.

**Evidence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) requires attribution, a license link and indication of modifications, and warns that other rights may limit use. [CC0](https://creativecommons.org/publicdomain/zero/1.0/) removes copyright restrictions to the extent possible but does not clear third-party publicity/privacy rights or implied endorsement. [Nappy's own license page](https://nappy.co/license), which the resources list recommends, also states restrictions on degrading subjects, unmodified resale and stock-site reposting.

**Suggested fix:** Split the row. “CC BY: reúso permitido conforme a versão da licença, com atribuição adequada, link da licença e indicação de alterações quando exigidos.” “CC0: renúncia a direitos autorais na medida permitida; não elimina direitos de imagem, privacidade, marcas nem autoriza sugerir apoio.” Keep “editorial-only” separate and tell readers to check the asset's actual terms before making a promotional card.

### G04-15 — MINOR — The file-organizing agent prompt changes every extension to `.jpg` and lacks a no-overwrite rule

**Files / location:** `content/en/computer-use-agents.md:167–172`; `content/pt-BR/computer-use-agents.md:166–171`.

**Problem:** Task F renames all approved speaker photos to a `.jpg` pattern while forbidding image editing. A PNG/WebP/HEIC file does not become JPEG when renamed. The prompt also allows two photos of the same person to target the same name; the text warns about overwriting but does not tell the agent to prevent it. Working on a copy reduces the impact but does not make the resulting folder reliable.

**Evidence:** [Python's file-renaming documentation](https://docs.python.org/3/library/os.html#os.rename) describes a path rename, not image conversion, and documents replacement behavior for existing files on Unix. The proposed prompt neither restricts input formats nor requires unique destinations.

**Suggested fix:** Use `palestrante-sobrenome-nome-01.[extensão-original]`. Add “Preserve o formato e a extensão originais. Nunca sobrescreva; em conflito, pule e relate. Mostre primeiro a tabela de nomes propostos.” Retain the original-folder copy and human verification.

### G04-16 — MINOR — ANPD's expanded name is outdated

**Files / location:** `content/en/glossary-resources.md:164`; `content/pt-BR/glossary-resources.md:161`.

**Problem:** The glossary expands ANPD as **Autoridade Nacional de Proteção de Dados** while claiming verification in October 2026. The current institutional name is **Agência Nacional de Proteção de Dados**.

**Evidence:** [ANPD's institutional page](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional), modified 5 October 2026, uses Agência. [Lei 15.352/2026](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm) changes the LGPD accordingly. Older guides retain the former institutional name and should not be silently retitled as documents.

**Suggested fix:** Replace the current-name definition with “Agência Nacional de Proteção de Dados (ANPD), anteriormente Autoridade Nacional de Proteção de Dados”. Keep the acronym and official guide links.

### G04-17 — MINOR — The ISBN/DOI dictionary entry confuses the event's promised allocation with the general definition

**Files / location:** `content/en/glossary-resources.md:141`; `content/pt-BR/glossary-resources.md:136`.

**Problem:** “A DOI is a permanent identifier for each paper” describes this event's advertised scheme, rather than what a DOI is. DOIs can identify proceedings volumes, datasets and other objects; a paper does not automatically receive one by existing in a volume with ISBN. The entry also never expands either acronym. Its warning against equating identifiers with quality is correct.

**Evidence:** [DOI Foundation](https://www.doi.org/the-identifier/what-is-a-doi/) defines persistent identifiers for objects of many kinds. [International ISBN Agency](https://www.isbn-international.org/index.php/content/what-isbn/10) explains the book identifier and its association with a specific title, edition and format. The event's separate individual-DOI promise is correctly attributed in `/publicacao`.

**Suggested fix:** “ISBN (International Standard Book Number) identifica uma publicação monográfica em edição/formato específicos, como um volume de anais. DOI (Digital Object Identifier) identifica de forma persistente um objeto, como um artigo ou os próprios anais. No CONAFROEDU, a organização anuncia DOI individual por trabalho. Nenhum deles é classificação de qualidade.”

### G04-18 — MINOR — “Delete the bracketed notes” is too broad for mixed confirmed/unconfirmed FAQ answers

**Files / location:** `content/{en,pt-BR}/replies-inbox.md:64–66`; examples `/modalidades`, `/certificado` and `/acesso` at lines 107–116, 147–151 and 191–194.

**Problem:** Earlier instructions correctly require committee review, but the final preparation step simply tells the volunteer to delete bracketed warning notes before saving. Several answers mix confirmed statements with open decisions. Deleting a warning does not resolve the decision and can turn a qualified draft into an apparently approved answer. This is an ambiguity in instructions; the FAQ does not independently claim that all open questions have been settled.

**Evidence:** The local answer-bank rules at lines 29–35 require committee review. The local `prompt-library.md:35–41` convention says an unresolved marker must be answered or its sentence removed, rather than silently erased. [The public event rules](https://www.even3.com.br/iconafroedu-764690/) still contain the presentation contradiction the answer bank correctly identifies.

**Suggested fix:** “Só remova uma observação `[CONFIRMAR]` depois de registrar a decisão da comissão e atualizar a resposta. Sem decisão, não salve a afirmação correspondente: use a resposta provisória ‘a comissão vai confirmar’. Apague apenas as notas editoriais de respostas já aprovadas.” Give mixed answers an explicit not-yet-approved status at answer level.

## Verified OK and evidence boundaries

### Event facts and FAQ

- The live [Even3 page](https://www.even3.com.br/iconafroedu-764690/) and its [timeline graphic](https://static.even3.com/pagina-evento/1001001426.093a8a526e0446bea557.png) support the event dates, online format, 4 November submission/video deadline, review turnaround, programme target, registration end and certificate/proceedings dates used in the assigned pages. The timeline was visually inspected, not inferred from an image URL.
- Ticket display matches the FAQ's category-specific tier amounts, changeover and multi-submission packages. The separate R$16.98 publication fee, individual DOI claim, formatting/page limits, six-author maximum, same-email instruction and support contacts also match. Checkout totals were not tested.
- The FAQ correctly flags optional-versus-mandatory presentation wording, missing resumo simples in the public FAQ, package/submission date mismatch, and the late-submission/video timing issue. The working submission modalities and formatting rules do include resumo simples. No extension or certificate-credit guarantee should be inferred.
- “Anais” as proceedings, and the refusal to promise MEC recognition, Qualis or institutionally accepted hours, are appropriate. The [ISBN Agency](https://www.isbn-international.org/index.php/content/what-isbn/10), [DOI Foundation](https://www.doi.org/the-identifier/what-is-a-doi/) and [CAPES announcement](https://www.gov.br/capes/pt-br/assuntos/noticias/avaliacao-da-producao-intelectual-e-ampliada) support the distinction between identifiers and evaluation. CAPES' page was available through indexed official text but returned 401 on direct retrieval; its link is not certified as accessible in a normal browser by this review.

### Scheduling and messaging products

| Checked claim | Result and primary source |
|---|---|
| Business Suite free for organic Facebook/connected Instagram work | Supported by [Meta's product page](https://www.facebook.com/business/tools/meta-business-suite). Logged-in Brazilian menu paths, current scheduling horizon and a particular account's eligible formats were not tested; the guide discloses this. |
| Buffer: 3 channels; 10 queued posts/channel, rather than 10/month | Confirmed in [pricing](https://buffer.com/pricing). [Group help](https://support.buffer.com/articles/connecting-and-publishing-to-your-facebook-group-with-buffer-VevqG0mHZG) describes reminder publishing. |
| Metricool: 1 brand; 20 posts/month; 30-day analytics; LinkedIn/X excluded from Free | Confirmed in [pricing](https://metricool.com/pricing/), including the USD20 annual-view starting price. |
| mLabs: R$29.90 equivalent/month, annual upfront Pix commitment | Confirmed in the [Brazilian site](https://www.mlabs.com.br/) footnote; R$358.80 is the correct annual arithmetic. |
| Later's free offer needs care | Its [official plan guide](https://help.later.com/hc/en-us/articles/360059362253-Choose-a-Later-Social-Plan), updated 12 August 2026, includes a limited Free plan and a two-week calendar view. The content correctly avoids promising an unverified new-account allowance. |
| Hootsuite and hosted Postiz | [Hootsuite](https://www.hootsuite.com/plans/standard) promotes trial/paid access; [Postiz](https://postiz.com/pricing) confirms a seven-day trial and USD29/month Standard entry. The guide does not mislabel either as a permanent free hosted plan. |
| Manychat Free | [Current help](https://help.manychat.com/hc/en-us/articles/25800197498652-Free-plan) confirms 25 active contacts/month, 2 channels, 4 live automations, 1 inbox seat and no WhatsApp. The old 1,000-contact assertion is correctly rejected. “Runs out on the first day” is an unmeasured prediction, not a verified campaign result. |
| Meta business AI in Brazil | [June announcement](https://about.fb.com/br/news/2026/06/conversations-2026-apresentamos-o-meta-business-agent/) supports the current Meta Business Agent name, Brazil rollout, initial free offer and handoff. [September Meta One announcement](https://about.fb.com/br/news/2026/09/apresentando-o-meta-one-um-servico-de-assinatura-com-mais-recursos-e-ia-para-criar-se-conectar-e-se-destacar/) supports Essencial from R$59/month. Individual-account access/free reply count remains unverified, as the content says. The app/bundle offer must not be confused with separately metered developer-platform agent usage. |
| Messenger organic standard window versus Human Agent | The basic 24-hour/manual-seven-day distinction is supported by [Meta policy](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy). The missing private-reply constraints are G04-09. |
| WhatsApp Platform allowance and Brazilian rates | Meta's [pricing documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/) confirms 1,000 free **service messages per business number per month** effective 1 October 2026. The **BRL list rates** download linked in its [rate-card section](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/#rate-cards-and-volume-tiers) was independently downloaded and parsed: its header specifies 1 October 2026; the Brazil row gives marketing **R$0.3217**, utility/authentication/service **R$0.0350** at base rates. The monetary claims in replies-inbox are therefore correct. Provider charges remain separate. Do not substitute older unlimited-free-service guidance. |

### Automation, agents and outreach

- [Zapier Free](https://help.zapier.com/hc/en-us/articles/32337438839565-What-s-included-in-Zapier-s-Free-plan): 100 monthly tasks, unlimited Zaps and two-step workflows are correct. [Make Academy](https://academy-content.make.com/courses/make-foundation-operations-credits/01-introduction-to-operations-and-credits/) confirms 1,000 credits, two active scenarios and the cited small file/data limits. [n8n pricing](https://n8n.io/pricing/) confirms Starter EUR20/month billed annually and 2.5K executions; its [license FAQ](https://support.n8n.io/article/can-i-use-your-license-for-my-use-case) supports free self-hosted Community use for internal workflows. Self-hosting work and separate service costs are appropriately disclosed.
- [Claude in Chrome's announcement](https://claude.com/blog/claude-in-chrome-generally-available) confirms general availability on paid plans on 26 August 2026. [Desktop computer-use help](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork) confirms Pro/Max beta on macOS/Windows. The article also notes the ongoing Cowork/chat unification; Cowork is still usable as an explanatory surface label, but screenshots/setup should follow the new experience where present.
- [Gemini's current tasks documentation](https://support.google.com/gemini/answer/17094507?hl=en) supports the current “tasks” name, Pro/Ultra, personal-account and age requirements, with Brazil not excluded. G04-08 covers the missing prerequisites. [Comet](https://www.perplexity.ai/comet) is a current browser on Mac/Windows/iOS/Android; its free-browser claim is supported, while exact per-account agent allowances are not established by that landing page. [Browser Use pricing](https://browser-use.com/pricing) confirms USD1 signup credit for eligible signups and usage-based charges; the trial is not a recurring free plan.
- [ABPN/CONNEABS](https://abpn.org.br/conneabs-2/) is a real research starting point; [ABPN's institutional page](https://abpn.org.br/institucional/) publishes the quoted contact. [ANPEd GT21](https://anais.anped.org.br/grupos-de-trabalho/gt21-educa%C3%A7%C3%A3o-e-rela%C3%A7%C3%B5es-%C3%A9tnico-raciais), CEERT, Ação Educativa, Geledés and CNTE links lead to the described organizations/topics. The content properly avoids implying partnerships and asking for student lists.
- [Hunter](https://help.hunter.io/en/articles/11060999-what-s-included-in-hunter-s-free-plan) confirms 50 credits and one mailbox; [MailerLite](https://www.mailerlite.com/help/free-plan-update-faq) confirms 250 subscribers and 2,500 monthly emails, effective 16 June 2026. [Brevo's help](https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan), accessible through the web tool after the initial direct-request block, confirms 300 sends/day with no unused-send rollover.
- The tips/library's warning against current Sora tutorials is correct: [OpenAI's discontinuation help](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation), retrieved through the web tool after the direct-request block, gives 26 April 2026 for the web/app shutdown and 24 September 2026 for the API shutdown. Its API sentence still uses future tense although that date has passed; the stated shutdown dates support removing Sora from the current campaign stack.
- [LGPD art. 5 II](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) supports treating racial/ethnic origin, religion and health as sensitive data. Public availability does not erase protection for identifiable individuals. A generic institutional mailbox is not automatically personal data merely because it is an email address; preserve the natural-person qualification when polishing the outreach wording.
- No agent benchmark timings were represented as measurements. Read-only institutional research, public-page comparison and drafting are realistic bounded uses. Tasks A–C/E have useful manual fallbacks. Task F needs G04-15. A logged-in Page publishing test and independent platform permission for general-purpose agent operation were **not established**; the guide's Task D must not be read as proof that Meta authorizes every browser automation technique.

### Prompt consistency, anchors and language parity

- Each library contains **90 `prompt` blocks**. After whitespace normalization, **87/90** in each language occur verbatim in another guide, including the three initially suspicious prompts embedded in indented source examples. The other three are at lines 342, 423 and 450 and are explicitly marked new. The source/library wording-match claim is therefore accurate; inherited defects such as G04-11/G04-12 need simultaneous fixes.
- The English library consistently requests pt-BR social output. Portuguese prompt versions, main event facts, phase changes, privacy restrictions and human-approval boundaries are substantially aligned. The glossary identity wording in G04-13 is a material exception. The exact-quote animation text matches art. 26-A as amended by Lei 11.645/2008; the example motion palette is explicitly labeled rather than represented as official branding.
- Parsed every assigned page's local Markdown heading links with the repository's actual `remark`/`rehype-slug` dependencies, including accented Portuguese IDs and duplicate-heading handling: **zero broken heading anchors found**. This is a content link check, not a full browser/render/build certification.

## Glossary URL audit

Both glossary locales contain the **same 182 distinct external URLs**. Every one received a direct GET attempt. Initial results: **145 HTTP200; 32 HTTP403; 2 HTTP406; 1 HTTP401; 2 request failures**. A 200 alone was not counted as proof of correct content: titles and page text were inspected, and important claims were checked against the retrieved body. Some help pages return only a title or a JavaScript shell.

Semantic spot checks included the official event/timeline/Instagram link, all seven scheduler entries, Manychat, all no-code tools, all named agent sources, ABPN and ANPEd, Hunter/MailerLite, Gemini Notebook plans/help, OpenAI migration/browser/pricing, Node/OBS/HandBrake/Remotion, Nappy/Brasil com S/PretUX, Google's video/image docs, Kling's payment policy, W3C, Planalto laws, ANPD and PNEERQ. They point to the described subject. In particular, PretUX's `/quero-ajudar/` page does include hiring through its designer catalogue despite its general “support the initiative” title; it is not a wrong-destination finding. Kling's payment-policy URL contains the paid-service terms. Claude's Chrome announcement redirects to the corresponding official `/resources/articles/` page, not unrelated content.

No confirmed external 404 or unrelated destination was found among the glossary's URLs. Do **not** convert the following access limitations into “broken link” claims:

| Initial limitation | Affected resources / follow-up |
|---|---|
| Cloudflare/403 on help systems | Eight Even3 help/integration URLs; four StreamYard help URLs; Brevo, Later, Manychat, Runway and Midjourney help. Brevo, Later and Manychat bodies were subsequently retrieved by the web tool; the remainder need normal-browser or help-center validation where their detailed claims matter. |
| Canva access challenge | Pricing, Pix, AI terms, stock-content license, Education eligibility, Nonprofits eligibility, trimming and upload-format help. Their policy-specific claims were not re-certified through the blocked responses. |
| OpenAI help/policy access challenge | Image help, BRL billing help, Sora discontinuation help and terms initially blocked direct requests; official Learn browser/pricing/migration docs were accessible. The Sora help body was subsequently retrieved through the web tool and its shutdown dates verified above. |
| Other 403 | Claude app landing page and Pexels license. These responses do not establish that the services are unavailable to users. |
| HTTP406 | CONAQ education collective and Rede JP anti-racist manual. URLs require human-browser validation; do not claim the organizations or documents do not exist. |
| HTTP401 | CAPES evaluation article; official indexed text was available, as noted above. |
| Request failures | Microsoft Copilot Brazil pricing timed out; Ghana Ministry of Culture Adinkra URL failed TLS certificate validation. Recheck before promising these as accessible resources; do not advise bypassing certificate warnings. |
| Thin HTTP200 shells | Facebook/Instagram help pages, WhatsApp broadcast help, UNESCO Kente and the ANPD children's-data PDF landing returned limited extractable text. Matching titles were checked, but this does not verify every rule inside them. |

The link inventory and mechanical checks were kept in temporary review files, not added as extra repository deliverables. Only this assigned findings report was written.
