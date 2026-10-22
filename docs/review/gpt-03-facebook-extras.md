# GPT-03 — Facebook and extras adversarial content review

Review date: **2026-10-21 (America/Denver)**. Scope: both `content/en/` and `content/pt-BR/` versions of `facebook-playbook`, `facebook-events-groups`, `campaign-timeline`, `instagram-whatsapp`, `speaker-partner-kits`, `measuring-results`, and `ethics-legal`. Compared the calendars with `docs/BRIEF.md` and both `conafroedu-sprint.md` files. Read `docs/REVIEW_GUIDE.md`, `CONTENT_GUIDE.md`, `CONTENT_PLAN.md`, `REVIEW_NOTES.md`, and the relevant research context. No content files edited; no commit made.

**Counts: 0 CRITICAL · 10 MAJOR · 7 MINOR = 17 findings.** Repeated occurrences across languages/pages are counted once. An inaccessible help page is not treated as proof that a claim is false. Verification limits appear separately below.

## Findings

### GPT03-001 — MAJOR — Complimentary ambassador registrations need Meta's partnership disclosure workflow

**Files / location:** `content/en/speaker-partner-kits.md:225–244`, “Kit 4”; `content/pt-BR/speaker-partner-kits.md:222–241`, “Kit 4”; related policy coverage in both `ethics-legal.md` files, §5.

**Problem:** The kit proposes a complimentary registration in exchange for promotional posts and tells ambassadors to disclose it in their caption. It omits Meta's **paid partnership label**. Unpaid distribution and noncash compensation do not remove the branded-content requirement. A Collab invitation also does not replace this disclosure. A volunteer following the complete kit can therefore miss a required platform control.

**Evidence (retrieved 2026-10-21):** [Meta's branded-content help](https://www.facebook.com/help/instagram/616901995832907?locale=en_GB), available through indexed official text, requires the paid partnership label for branded content, including posts involving gifted products or services. [Meta's own policy explanation](https://about.fb.com/fr/news/2023/02/comment-meta-accompagne-les-createurs-de-contenus-et-les-acteurs-de-linfluence-en-ligne/) explicitly includes money, gifts, and free services on Facebook and Instagram. This applies to the proposed benefit-for-post arrangement; it does not mean every independent speaker invitation is sponsored content.

**Suggested fix:** Add to the ambassador steps, brief prompt, and ethics checklist: “Se a divulgação fizer parte de uma troca por inscrição cortesia, pagamento ou outro benefício, trate a publicação como conteúdo de marca: confira a elegibilidade e use o rótulo de parceria paga da Meta, além de explicar a contrapartida na legenda. Collab não substitui esse rótulo. Se o recurso não estiver disponível, resolva isso antes de combinar a ação.” Include the corresponding English instruction. Do not advise buying ads.

### GPT03-002 — MAJOR — The authorization template assumes an unverified purpose and leaves the recipient of permission unidentified

**Files / location:** both `ethics-legal.md:68–90`, authorization template; compare `:118–119` and `:169–174`.

**Problem:** The ready-to-sign form authorizes “a organização” without identifying the legal organizer and asserts “sem fins lucrativos diretos.” Neither the brief nor the public listing establishes that characterization. The same page correctly explains that this is promotion of a paid congress. The AI checkboxes also authorize unspecified external tools and unspecified avatar/voice-cloning uses, without identifying the tools, processing conditions, or bounded outputs. The legal-review warning is useful, but the starting template should expose these decisions instead of silently supplying them.

**Evidence (retrieved 2026-10-21):** [LGPD, arts. 8–9](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) requires determined consent purposes and clear controller, duration, and processing information. [Civil Code, art. 20](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm) addresses authorization for commercial image uses. The [public event page](https://www.even3.com.br/iconafroedu-764690/) identifies its organizer as “Secretaria do Evento”; it does not establish the legal entity or nonprofit status. Charging admission alone does not prove that the organizer is for-profit, either.

**Suggested fix:** Replace the opening with: “Autorizo [nome/razão social do organizador e contato] a utilizar meu nome, imagem e voz exclusivamente para [finalidades específicas, incluindo divulgação das inscrições pagas do CONAFROEDU 2026], nas opções, canais e prazo abaixo, [condição de remuneração acordada].” Remove the assumed profit characterization. Add controller/privacy-notice fields and a separate, optional AI annex naming the service, exact transformation, approval process, storage/deletion period, and any sharing/transfer information applicable to that service. Retain qualified legal review.

### GPT03-003 — MAJOR — UTM traffic reporting is repeatedly promoted into unverified registration attribution

**Files / location:** `content/en/facebook-playbook.md:186`; corresponding pt-BR `:186`; both `instagram-whatsapp.md:60`; both `measuring-results.md:39–54,101–106,145–148,184–186,254–257`; `content/en/speaker-partner-kits.md:256–274` and pt-BR `:253–271`.

**Problem:** The guides promise that tagged links show which **posts brought registrations** and make partner registrations and source conversion rates routine metrics. The cited Even3 guide confirms UTM **traffic origins**, alongside separate registration/payment totals. It does not establish a join from `utm_content` to a completed registration or paper submission. Checking that a URL opens and retains its query string does not test that reporting. The measurement page has some “if available” qualifications, but the upstream promises and prescribed scorecard remain stronger than the evidence.

**Evidence (retrieved 2026-10-21):** [Even3 Analytics guide](https://blog.even3.com.br/como-usar-o-even3-analytics/), especially “Crie um link rastreável,” documents visitors by tagged origin and compares campaign timing with sales peaks. [Even3 sales-export help](https://ajuda.even3.com.br/hc/pt-br/articles/32877235816219-Exportar-relat%C3%B3rio-de-vendas-do-meu-evento) lists purchase time, date, email, and amounts; it does not document UTM conversion fields. [Google's UTM help](https://support.google.com/analytics/answer/10917952) explains that parameters are read by an analytics implementation; appending labels alone does not create conversion measurement. This is an **unsupported guarantee**, not a finding that Even3 cannot ever support attribution.

**Suggested fix:** Replace the promise with “Use UTMs para distinguir a origem das visitas. Só atribua inscrições a uma origem ou peça se o painel do evento mostrar essa ligação e vocês a tiverem validado.” Add a prelaunch check with distinct test links: confirm which source/campaign/content dimensions appear, then establish whether a completed test/approved real registration is connected to them. Until then report tagged visits, total registrations, coupon use, and self-reported discovery separately; remove unavailable conversion columns rather than infer them.

### GPT03-004 — MAJOR — The Canva kit still tells authors to share an editable master

**Files / location:** both `speaker-partner-kits.md:83–102`, “How to deliver / Como entregar” and Canva step 8.

**Problem:** Option A opens by recommending an editable link for all authors. It later distinguishes a template link that creates copies and offers a blank PNG fallback, but step 8 again says to share the editable link. An ordinary “anyone with the link can edit” link lets recipients alter the **same design**, including other authors' names and the event facts. The protective condition is lost at the actual delivery step.

**Evidence (retrieved 2026-10-21):** [Canva sharing help](https://www.canva.com/help/share-via-link-or-email/) explains that giving edit access to anyone with the design link lets guest users change the design. It is not a per-recipient copy mechanism.

**Suggested fix:** Use consistently: “Não distribua o link de edição do arquivo-mestre. Se o plano oferecer um link de modelo que crie uma cópia para cada pessoa, teste-o com outra conta antes de divulgar. Sem esse recurso, envie o PNG em branco da opção B.” Change step 8 to “share the tested copy-generating template link, or the blank PNG”; remove “editable link” as an interchangeable term.

### GPT03-005 — MAJOR — The dated calendar uses the official program before the planned release

**Files / location:** both `campaign-timeline.md:125`, week 5; compare `:43,156` and both `conafroedu-sprint.md:176–185`.

**Problem:** Week 5 schedules an audience-specific program guide on **Monday 23 November**, followed by publication of the official program on **Wednesday 25 November**. The key-day instructions correctly say to publish the confirmed program **then** make itinerary posts. The sprint also starts this work with the 25 November release. The Monday task has no “only if already confirmed” condition and invites volunteers to use provisional sessions that the speaker-kit page warns against treating as final.

**Evidence (retrieved 2026-10-21):** The organizer's [calendar graphic](https://static.even3.com/pagina-evento/1001001426.093a8a526e0446bea557.png), downloaded from the [event page](https://www.even3.com.br/iconafroedu-764690/) and visually inspected, says the official program and presentation schedule are due **by 25 November**. `docs/BRIEF.md`, “Verified key dates,” says the same. “By” permits an earlier release, but does not establish one.

**Suggested fix:** Monday: “FAQ sobre participação on-line, somente com informações já confirmadas.” Wednesday: publish the program or a delay notice. Friday: audience itinerary **only after** the official program is available. Move/combine the access FAQ so the week still fits its post limit. Mirror this sequence in both calendars and prompts.

### GPT03-006 — MAJOR — The claimed 5–7-hour campaign budget is less than half the companion plan's upper estimate

**Files / location:** both `facebook-playbook.md:19,204–215`; both `campaign-timeline.md:104`; both `conafroedu-sprint.md:55–61,69–73`.

**Problem:** The playbook assigns its multi-channel workload to **5–7 combined team hours/week**. The companion sprint assigns Coordination 2–3 h, Content 3–5 h, Social 3–4 h **plus 15 minutes daily**, and Partnerships 2–3 h: **11.75–16.75 combined hours/week**, before any additional all-hands review time. These are not per-person alternatives: the playbook explicitly says combined hours. A small team cannot use these as one consistent staffing plan.

**Evidence (checked 2026-10-21):** Arithmetic from the cited local role table. `docs/BRIEF.md`, “Who it's for,” requires a realistic small-volunteer workflow; the sprint is explicitly linked as the action-plan companion. For event context, the [official calendar](https://static.even3.com/pagina-evento/1001001426.093a8a526e0446bea557.png) leaves 45 days from 21 October to opening, so the extra capacity cannot simply be deferred. No external benchmark is claimed here.

**Suggested fix:** Choose one staffing assumption and propagate it. For example, label the full sprint “approximately 12–17 combined hours/week,” and provide a genuinely reduced 5–7-hour option with one video, fewer adaptations, limited new-channel setup, protected daily support, and explicit tasks to drop. Include review and partner outreach in that budget.

### GPT03-007 — MAJOR — The two operational calendars assign incompatible posts and reminders to the same dates

**Files / location:** both `campaign-timeline.md:121–124,133–145,249–252` (pt-BR prompt `:246–249`); both `conafroedu-sprint.md:117–120,156–160`.

**Problem:** This is more than different levels of detail. For 26–30 October, the sprint specifies Monday's submission how-to carousel, Wednesday's seven-day checklist, and Friday's classroom Reel. The timeline specifies Monday's announcement, Wednesday's ERER Reel, Friday's rules checklist, **and** a Wednesday one-week reminder in its author column. Following both can create duplicates and exceed the four-post cap. The price reminders also differ: sprint **9/10 and 13/14 November**, timeline **12 and 15 November**. Neither identifies these as alternative schedules.

**Evidence (checked 2026-10-21):** Direct comparison of the local rows above. The [organizer calendar](https://static.even3.com/pagina-evento/1001001426.093a8a526e0446bea557.png) confirms the underlying 4 November deadline; the discrepancy is the guides' execution plan, not an incorrect organizer date. `docs/REVIEW_NOTES.md` explicitly calls for sprint/timeline consistency.

**Suggested fix:** Make one calendar authoritative, with one content ID per main publication. Use the same dated rows in the sprint and timeline, and explicitly mark any optional replacement. If Wednesday's Reel doubles as the seven-day reminder, say so and align the sprint's checklist format; otherwise replace a post. Pick one pair of price reminders and reuse it in the week table, key-day playbook, and checklist.

### GPT03-008 — MAJOR — “No automated Group posting” incorrectly includes Facebook's native scheduling

**Files / location:** both `ethics-legal.md:196`; compare `content/en/facebook-events-groups.md:235` and pt-BR `:235`, own-Group guidance.

**Problem:** The ethics page presents all automated Group posting as disallowed and implies this follows from removal of the Groups API. The Events & Groups guide explicitly permits admins to schedule in groups they manage. The API change concerns external publishing access; it does not establish a blanket ban on Facebook's own scheduled or recurring posts. This is a misleading platform-policy rule and an internal contradiction.

**Evidence (retrieved 2026-10-21):** Meta's [native help article](https://www.facebook.com/help/124331564818285/) is titled “Schedule a post or set up recurring posts in a Facebook group you manage” (title independently retrieved; full help body is gated). The distinction is also stated in the reviewed Events & Groups content. [Meta's API v19 announcement](https://developers.facebook.com/blog/post/2024/01/23/introducing-facebook-graph-and-marketing-api-v19/) concerns the external API; its full current body could not be retrieved during this review.

**Suggested fix:** “Não use robôs ou integrações não autorizadas para publicar em grupos. A remoção da API de Grupos encerrou a integração usual dos agendadores externos. A administração pode usar o agendamento nativo do Facebook nos grupos que gerencia, respeitando as regras do grupo.” Keep the manual, moderator-approved workflow for other people's groups.

### GPT03-009 — MAJOR — The bio-writing workflow contradicts the blanket prohibition on putting personal data into AI

**Files / location:** `content/en/speaker-partner-kits.md:163,173–177`; pt-BR `:160,170–174`; both `ethics-legal.md:21,158,176,284`.

**Problem:** The speaker kit instructs volunteers to paste a real person's CV excerpt/bio and full name into an AI assistant. The ethics page defines names as personal data and repeatedly bans putting personal data in AI tools, without an exception for approved public speaker bios. A speaker approving a public-facing bio is not the same decision as approving processing by a chosen external AI service. The separate AI permissions discussed elsewhere specifically address photo/voice, not this workflow.

**Evidence (retrieved 2026-10-21):** [LGPD, arts. 5 I, 6 and 7](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) distinguishes identifiable data and requires a purpose and applicable legal basis. Public availability is not a universal exemption. The direct contradiction is established by the local instructions; this finding does **not** claim that every AI-assisted public bio is necessarily unlawful.

**Suggested fix:** Under the current strict rule, have a person write the identifiable bio, or supply a minimally necessary, nonidentifying outline and insert identifying details manually. If the committee intentionally permits a limited public-bio AI workflow, document that exception, its approved services/privacy conditions, notice and legal basis, and the speaker's agreement; explicitly exclude full CVs, contacts, sensitive information, and unrelated details. Update both the kit prompt and ethics rule together.

### GPT03-010 — MAJOR — The accessibility checklist does not cover essential visual information in video

**Files / location:** both `ethics-legal.md:225–255`; related Reel checklist in both `facebook-playbook.md:150–159` and speaker-video steps in the kit guide.

**Problem:** The checklist covers image alt text and captions for speech/sounds, but never asks whether a blind viewer can understand essential video visuals: a demonstrated submission step, a slide, or a text-only animation. Captioning speech does not describe visual-only information. An “alt-text-style description” generated in the Instagram prompt is not itself a published, accessible video alternative. The opening promise that every post works for everyone is therefore stronger than the checklist.

**Evidence (retrieved 2026-10-21):** [W3C WAI audiovisual guidance](https://www.w3.org/WAI/media/av/av-content/), “Plan for description of visual information,” recommends integrating the necessary visual description into the main audio, or planning an appropriate description alternative. Its examples include instructional video and information displayed in a chart.

**Suggested fix:** Add: “A informação visual indispensável do vídeo também está narrada? Diga em voz alta o que aparece em telas, demonstrações e animações. Para peças sem fala, publique uma descrição/transcrição equivalente e, quando necessário, uma versão com descrição em áudio. Teste se a peça faz sentido sem olhar a tela.” Include this in script prompts before recording, alongside the existing caption checks.

### GPT03-011 — MINOR — Collab instructions put creative adaptation after acceptance and omit an explicit publication step

**Files / location:** both `instagram-whatsapp.md:70–79`, Collab steps 3–6.

**Problem:** After adding a collaborator, the list says the speaker accepts, then adapts the opening for their own community, then checks “after publishing.” It never explicitly says when the originating account publishes. It also suggests different profile-specific openings for what is one shared post. This makes an otherwise sensible beginner workflow unnecessarily ambiguous.

**Evidence (retrieved 2026-10-21):** [Meta's Collabs announcement](https://about.fb.com/news/2023/08/music-and-collabs-on-instagram/) describes co-authoring a single feed post/carousel/Reel that appears on participating profiles after acceptance. The separate-openings implication is an inference from the local step order, not a verified account-specific capability. Current detailed [Instagram creation help](https://help.instagram.com/5861247717337470/) was throttled.

**Suggested fix:** Agree on the shared script/caption and adapt the opening **before** recording/publishing; add the collaborator in the composer; explicitly publish/share from the originating account; have the speaker open and accept the resulting invitation; verify both profiles. If separate wording is wanted, use a separate Story or independent kit post.

### GPT03-012 — MINOR — Suno permission is tied to creation time, not download time

**Files / location:** both `ethics-legal.md:135`, music table.

**Problem:** “Downloaded while subscribed” / “baixada durante a assinatura” is the wrong condition to emphasize. It can obscure the material distinction between a track created on a paid plan and one created on the free plan. The recommendation otherwise correctly requires commercial rights.

**Evidence (retrieved 2026-10-21):** [Suno's ownership/licensing help](https://help.suno.com/en/articles/2416769) ties commercial rights to being subscribed to Pro/Premier **when the song was created**, and says those rights survive cancellation. [Free-plan help](https://help.suno.com/en/articles/9601601) restricts free-created songs to personal, noncommercial use.

**Suggested fix:** “Somente músicas criadas enquanto a conta tinha um plano que concedia uso comercial; guarde a data de criação e o comprovante da assinatura. Baixar durante uma assinatura não é o critério de licença.” Mirror in English; do not imply subscription must remain active forever.

### GPT03-013 — MINOR — The 140-character Status prompt cannot include the supplied tracking URL

**Files / location:** `content/en/instagram-whatsapp.md:265–268`; pt-BR `:262–265`; ambassador URL in `content/en/speaker-partner-kits.md:269` / pt-BR `:266`.

**Problem:** The prompt asks for at most 140 characters, event dates, online format, and “link: [tracked link].” The actual supplied ambassador URL alone is **157 characters**; the shortest kit UTM URL is **148**. An assistant can satisfy the instruction only by counting the placeholder instead of the final URL, dropping facts, or ignoring the limit.

**Evidence (checked 2026-10-21):** Literal character counts of the supplied URLs; no WhatsApp platform limit is asserted. The [Google UTM documentation](https://support.google.com/analytics/answer/10917952) confirms that these parameter values form part of the destination URL.

**Suggested fix:** “Escreva até 140 caracteres de texto, sem contar o link fornecido. Depois acrescente o link sem alterá-lo e informe a contagem total.” Alternatively give the prompt an already tested short URL. Do not have the model invent a shortener URL.

### GPT03-014 — MINOR — The copy-paste Event description drops the tracking that its checklist requires

**Files / location:** both `facebook-events-groups.md:56–62,98,114`.

**Problem:** Setup and checklist require the tagged URL in both the ticket field and description, because the ticket field may not display on all devices. The actual description template contains the untagged canonical URL. Copying the supplied text produces a listing that fails its own checklist and loses the described placement label.

**Evidence (checked 2026-10-21):** Direct comparison of the local template and checklist. [Google's UTM explanation](https://support.google.com/analytics/answer/10917952) describes tracking values attached to the clicked URL; a different, untagged description URL does not acquire them from the ticket field.

**Suggested fix:** Put `[LINK RASTREÁVEL DA EVEN3]` in the template with an explicit fill instruction, or use the same tested tagged link as the ticket field (separate `utm_content` only if the team intentionally measures the placements separately).

### GPT03-015 — MINOR — WhatsApp shortcut and opt-out labels are inconsistent with the answer-bank guide

**Files / location:** both `instagram-whatsapp.md:139–150,225–226,250` (pt-BR prompt `:247`); compare both `replies-inbox.md:45–49,100,265–266,381–383,393` and both `conafroedu-sprint.md:97`.

**Problem:** Instagram/WhatsApp creates `/submissao`, `/programacao`, and “Não enviar novidades.” The linked answer-bank workflow updates `/prazo` and `/comosubmeter` after closure, uses `/datas` for program information, and suppresses “Não enviar divulgação.” The sprint adds `/valores`, omitted from the Instagram/WhatsApp list. People following different setup pages can create duplicate banks and apply deadline/opt-out changes to different names.

**Evidence (checked/retrieved 2026-10-21):** The local instructions and `docs/REVIEW_NOTES.md` identify the incompatible names. [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/), updated 23 September 2026, requires honoring stop requests. This is a naming/workflow inconsistency; it is not evidence of an actual unlawful send.

**Suggested fix:** Make `replies-inbox.md` the named canonical bank and use its exact shortcut and suppression-label names throughout. Provide an explicit mapping for any existing aliases and update all aliases on 5/11. Keep one opt-out label, “Não enviar divulgação,” across both languages and checklists.

### GPT03-016 — MINOR — ANPD's expanded name is outdated in Portuguese

**Files / location:** `content/pt-BR/ethics-legal.md:104`; English counterpart `:104`.

**Problem:** The Portuguese introduction expands ANPD as “Autoridade Nacional de Proteção de Dados.” By the stated October 2026 review date its legal name is **Agência Nacional de Proteção de Dados**. The old title of the 2023 document itself should remain unchanged.

**Evidence (retrieved 2026-10-21):** [Lei 15.352/2026, art. 1](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm), dated 25 February 2026, changes the LGPD's institutional provisions and establishes the Agência Nacional de Proteção de Dados.

**Suggested fix:** “ANPD (Agência Nacional de Proteção de Dados)” in current explanatory prose; English can use “Brazil's national data-protection regulator (ANPD).” Preserve historical source titles.

### GPT03-017 — MINOR — A DOI can exist before publication

**Files / location:** both `speaker-partner-kits.md:78`, accepted-author wording table.

**Problem:** The table correctly rejects claiming an accepted paper is already published, but justifies it by saying a DOI does not exist until publication. That is not a general rule. Acceptance, DOI registration, and publication are separate states. There is also no verified evidence of when this specific event's publisher assigns its DOIs.

**Evidence (retrieved 2026-10-21):** [Crossref's pending-publication documentation](https://www.crossref.org/documentation/research-nexus/pending-publications/) explicitly permits registering a DOI after acceptance and before online publication, including conference proceedings. This does not establish that CONAFROEDU uses that workflow.

**Suggested fix:** Replace the reason with “A aprovação ainda não comprova publicação. Só anuncie ‘publicado nos anais’ quando a publicação ocorrer; só divulgue DOI confirmado pelo responsável editorial.” Retain the safe “trabalho aprovado” example.

## Important claims verified OK

All sources below were retrieved on **2026-10-21**. These confirmations do not resolve the organizer decisions already flagged in the content.

- **Actual event and calendar:** [Even3 listing](https://www.even3.com.br/iconafroedu-764690/) confirms the first edition, online 5–6 December 2026, responsible-author registration requirement, up to six authors, the extra R$16.98 per work, and the linked Instagram handle. The [calendar graphic](https://static.even3.com/pagina-evento/1001001426.093a8a526e0446bea557.png) was downloaded with the event-page referrer and visually read: submission/video 4/11; review target five business days; program by 25/11; certificates from 6/12; proceedings by 15/12. The registered offers independently encode the 15/16 November tier boundary and 5 November package end. Lower structured net-like prices were **not** mistaken for checkout totals. All supplied weekdays checked against the 2026 calendar; 21/10→5/12 is 45 days and 21/10→4/11 is 14 days.
- **Meta originality, Reels and retention:** [March 2026 originality guidance](https://about.fb.com/news/2026/03/rewarding-original-creators-on-facebook/) favors directly produced content and meaningful transformation over minor reuploads. The [June 2025 announcement](https://about.fb.com/news/2025/06/making-it-easier-create-videos-facebook/) removes the universal old 90-second split as the unified flow rolls out. [Facebook Live storage](https://about.fb.com/news/2025/02/updating-our-facebook-live-video-storage-policy/) is 30 days for new broadcasts. The guides correctly recommend testing the uploader and keeping recordings elsewhere.
- **Live eligibility, appropriately attributed:** [StreamYard's current first-party connection instructions](https://support.streamyard.com/hc/en-us/articles/360043291412-Connect-a-Facebook-Page) state a 60-day Facebook account, 100 Page followers, and appropriate access. The playbook attributes the requirements to that integration and tells the team to test its Page. Direct Meta eligibility verification remained incomplete; see limits below.
- **Meta AI disclosure:** [Meta's February 2026 statement](https://about.fb.com/news/2026/02/meta-prepares-for-2026-us-midterms/) expressly requires the disclosure tool for organic photorealistic synthetic/altered video and realistic audio and uses “AI info.” The guide correctly distinguishes drafting text from those media categories. [Canva AI terms](https://www.canva.com/policies/ai-product-terms/) prohibit removing provenance/metadata tags.
- **Meta subscriptions and Brazilian pricing:** [Meta's Brazilian September announcement](https://about.fb.com/br/news/2026/09/apresentando-o-meta-one-um-servico-de-assinatura-com-mais-recursos-e-ia-para-criar-se-conectar-e-se-destacar/) confirms the core free experience, Essential from R$59/month, and Advanced from R$199/month, with availability caveats. Advanced includes organic-post/Reel link features. The [June Business Agent announcement](https://about.fb.com/br/news/2026/06/conversations-2026-apresentamos-o-meta-business-agent/) describes the initial free offer and later subscription access. This is not proof that every feature is enabled on this committee's accounts.
- **WhatsApp API prices and current service allowance:** Although web extraction of the [official developer pricing page](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/) returned 429 errors, an independent HTTP retrieval succeeded. Its current text confirms **1,000 free service messages/month per business phone number**, charges from the 1,001st, and monthly reset without rollover. Its linked BRL rate-card file identifies itself as effective **1 October 2026** and has Brazil marketing **0.3217**, utility/authentication/service **0.0350 BRL**. Thus the guide's R$32.17 example for 100 marketing messages is correct as a Meta base-fee example. The separate WhatsApp marketing pricing page still displayed an older unlimited-free-service explanation; it was not used to “correct” the newer developer document.
- **WhatsApp app, privacy and anti-spam:** [Official app features](https://whatsappbusiness.com/products/business-app-features/) confirm business profiles, greeting/away replies, quick replies, labels, and newer business broadcasts; the latter can reach recipients who have not saved the sender's number. [Current business policy](https://whatsappbusiness.com/policy/) confirms permission and opt-out requirements and applies to both app and Platform. The Instagram/WhatsApp page correctly distinguishes ordinary lists, paid broadcasts, Channels, and the API instead of applying API rates to ordinary support chats.
- **Even3 capabilities:** [Coupon help](https://ajuda.even3.com.br/hc/pt-br/articles/212182786-Criar-cupons-de-desconto) confirms fixed/percentage discounts, usage quantity, expiry, categories and usage checks. [Marketing features](https://plataforma.even3.com.br/solucoes/divulgacao-de-eventos/) explicitly advertises affiliate links and custom form questions, states no extra marketing-tool charge, and a general 10% paid-registration fee. [Report help](https://ajuda.even3.com.br/hc/pt-br/articles/360016649591-Acessar-relat%C3%B3rios-com-informa%C3%A7%C3%B5es-sobre-o-meu-evento) confirms People/Sales/Program/Submissions/Certificates exports. [Submission settings](https://ajuda.even3.com.br/hc/pt-br/articles/115003706743-Configurar-as-submiss%C3%B5es-do-meu-evento) confirms acceptance letters and email templates; [scheduled-notification help](https://ajuda.even3.com.br/hc/pt-br/articles/14288648505499-Agendar-o-envio-de-notifica%C3%A7%C3%A3o-no-evento) confirms support must enable scheduling. Affiliate-link setup for this specific event remains untested, as the guide says.
- **Brazilian law and accessibility basics:** On Planalto, [LGPD art. 5 II](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) confirms the listed sensitive-data categories; arts. 7/11 distinguish ordinary and sensitive legal bases; arts. 8/9/14 support the consent/transparency/children cautions. [Copyright law art. 11](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm) defines authorship around natural persons. [Lei 10.639](https://www.planalto.gov.br/ccivil_03/leis/2003/l10.639.htm) is 9 January 2003; [Lei 11.645](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11645.htm) is 10 March 2008 and includes Indigenous history/culture. [Lei 14.759](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14759.htm) establishes 20 November as a national holiday. [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) confirms 4.5:1 for ordinary text; large text has the separate 3:1 exception. The guide does not falsely advertise unconfirmed Libras provision.
- **Licensing and audience context:** [ElevenLabs](https://elevenlabs.io/docs/pt/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform) confirms no commercial license on Free. [Nappy](https://nappy.co/license) and [Pexels](https://www.pexels.com/license/) permit the described promotional uses with restrictions; [Brasil com S](https://www.brasilcoms.com.br/termosdeuso) excludes promotional use and editing. [Cetic.br K5](https://cetic.br/pt/tics/educacao/2024/professores/K5/expandido/) confirms Facebook 12%, Instagram 29%, WhatsApp/YouTube 57% for the narrowly described teaching/student-interaction question. [DataReportal](https://datareportal.com/reports/digital-2026-brazil) confirms the late-2025 figures; they are not current occupational conversion rates.
- **Language parity and local links:** Reviewed all 14 assigned files, including their prompts. No missing major translated section was found. A check using the repository's actual `remark-parse` → `remark-rehype` → `rehype-slug` chain found **no missing local targets or broken heading fragments** in the assigned files. The external URL sets match between languages. Recommendations about trial timing/cadence are generally labelled as hypotheses rather than algorithm rules.

## Verification limits / items not certified as current account behavior

These are **not additional counted findings** and should not be rewritten as false claims just because automated retrieval failed.

- **Facebook Page/Event creation menus, co-host settings, and exact pt-BR labels:** Direct Meta help often redirected to login or returned only page titles. Official indexed [Page access help](https://www.facebook.com/help/289207354498410/r.php/) supports the distinction between Facebook and task access. Indexed [Event privacy help](https://www.facebook.com/help/208747122499067/) supports Page events being public. The precise current online/external-link/co-host workflow was not tested in a signed-in organizer account. The guides already caveat changing labels; a real Page rehearsal remains necessary.
- **Posting as a Page in Groups:** Official indexed [join-a-group help](https://www.facebook.com/help/ipad-app/401492893195007) confirms that admins can disallow Pages, Pages request membership, and membership/participation approval can differ. Direct full help was gated. This supports the conditional advice, not a guarantee of admission to any named group.
- **Facebook collaboration:** [Publer's first-party integration documentation](https://publer.com/help/en/article/how-to-tag-collaborators-in-facebook-videos-kr2b44/) documents accepted Page-to-Page collaboration on video/Reels, with one collaborator in that integration. The assigned guides teach Instagram Collabs but do not provide a Facebook collaboration workflow. Native Facebook limits, eligibility, and parity across post types were not independently confirmed; do not transplant Publer's API limit into a universal Facebook rule.
- **Instagram's five hashtags:** The content accurately describes a reported gradual December 2025 announcement. The [report linking the official @creators Threads post](https://www.socialmediatoday.com/news/instagram-implements-new-limits-on-hashtag-use/808309/) was read and its primary link followed, but Threads and [current hashtag help](https://help.instagram.com/351460621611097/) were inaccessible. This review does **not** certify identical October 2026 enforcement across every app/API/desktop composer. Up to five relevant tags remains a conservative recommendation; do not call a failed help fetch a disproval.
- **Live eligibility and dashboard fields:** The complete current direct-Meta Live conditions and account-specific Professional Dashboard/Business Suite fields were not accessible. The [Business Suite overview help](https://www.facebook.com/business/help/4185855074991336) returned its expected title, but its full current body was not available. Do not certify the exact 28-day/default-field presentation solely from that title. The integration's 60-day/100-follower check and a real rehearsal are separate from a guarantee of eligibility.
- **WhatsApp ordinary-list limits and Brazilian paid broadcast packs:** The cited [broadcast-list FAQ](https://faq.whatsapp.com/861663048350950/?cms_platform=iphone&locale=en_US) returned only its title through HTTP and failed full web extraction. The 256-contact, saved-number, desktop and country-quota details could not all be independently certified from current first-party help. [Current paid-business-broadcast features](https://whatsappbusiness.com/products/business-app-features/) explicitly differ from ordinary lists. Brazilian in-app pack prices remain unverified, correctly marked as such in the content.
- **Event prices/checkout, coupons, account ownership and delivery:** The stated public price ranges match the brief and the current structured tier relationships, but this review did not complete a payment or inspect the organizer panel. No assertion that CONAFROEDU has no coupon, no existing Facebook following, a particular certificate rule, confirmed accessibility service, or a chosen transmission platform can be established from the public-page search alone. Keep these as organizer confirmations. The “no coupon exists today” sentence in the kit should be understood as an unconfirmed organizer-state claim, not a verified platform limitation.
- **98% WhatsApp installation and secondary posting benchmarks:** The [Mobile Time/Opinion Box landing page](https://pesquisas.mobiletime.com.br/super-panorama-junho-2026/) confirms the 4,138-person sample and March fieldwork, but the numerical installation result is behind the report access form. No form was submitted. Buffer/Sprout/Hootsuite timing and engagement figures were not independently reproduced from their datasets; the guide appropriately treats them as limited benchmarks/hypotheses. Do not upgrade these to teacher-specific evidence.

## Top five to address first

1. **GPT03-001:** Add Meta paid-partnership labeling for benefit-for-post ambassador arrangements.
2. **GPT03-002:** Correct and identify the authorization template's organizer, purpose, and AI scope.
3. **GPT03-003:** Separate documented UTM visits from unverified registration/conversion attribution.
4. **GPT03-004:** Remove the instruction to distribute a shared Canva master with edit access.
5. **GPT03-005:** Move program-derived posts after the confirmed program release.
