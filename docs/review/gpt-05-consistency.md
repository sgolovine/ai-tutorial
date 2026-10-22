# Cross-site consistency and completeness review

## Canonical decisions

Review date: **21 October 2026**. Apply these decisions to **both languages**, including examples, prompt copies, checklists and frontmatter. “Verified” below means independently checked in this review; an editorial convention is identified as such. Account-specific availability remains conditional.

| Topic / REVIEW_NOTES item | Facts verified and evidence | Exact canonical decision / wording |
|---|---|---|
| Sora status | OpenAI's [discontinuation FAQ](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation) gives 26 Apr 2026 for web/app closure. The [API deprecation notice](https://developers.openai.com/api/docs/deprecations) and [surviving model page](https://developers.openai.com/api/docs/models/sora-2-pro) explicitly say shutdown occurred on 24 Sep 2026. A model documentation page is not evidence of availability. | EN: **“Sora is discontinued: its web/app closed on 26 April 2026 and its models and Videos API shut down on 24 September 2026. It is not an option for this campaign.”** PT: **“O Sora foi descontinuado: o site e o aplicativo fecharam em 26 de abril de 2026, e os modelos e a API de vídeos foram encerrados em 24 de setembro de 2026. Ele não é uma opção para esta campanha.”** Historical bias-study references may remain explicitly historical. Current content mostly already gets this right; remove the weaker “our research found” qualification in choosing-ai-tools. |
| Committee-confirmation markers | The convention exists in prompting-basics, but prompt-library owns a second explanation; replies-inbox uses bare “⚠️ CONFIRMAR” in prose and variants inside brackets. | **Body:** `> [!IMPORTANT]` followed by **“Confirm with the committee” / “Confirme com a comissão”**, or inline **“(confirm with the committee)” / “(confirmar com a comissão)”**. **Prompt/fact-sheet blanks:** use the literal `[CONFIRMAR]`, followed by a description outside that token. Explain this once in prompting-basics; other pages link there. Never publish an unresolved bracket of any kind. |
| Fact-sheet ownership | The complete context block and its prompt-library copy match. Facebook-playbook has a shorter alternative; several setup instructions send readers to different supposed masters. | **“The master fact sheet is the shared FICHA OFICIAL maintained by Coordination, using prompting-basics as its template. Other guides and saved assistant contexts are copies.”** Add version, verifier, source and next required update. |
| Event prices and publication fee | The [live event page](https://www.even3.com.br/iconafroedu-764690/) embeds ticket `valor` fields 55/55/60/70, then 60/60/65/75, with validity changing 15→16 Nov; packages 99/150 end 5 Nov. Its publication section and FAQ explicitly say **R$ 16,98 per work**. Net metadata such as 49.50 is not the advertised ticket price. No purchase was made. | **“Valores exibidos em 21/10/2026: até 15/11, ouvinte R$ 55,00; graduação + 1 submissão R$ 55,00; pós + 1 R$ 60,00; professor/profissional + 1 R$ 70,00. A partir de 16/11: R$ 60,00 / R$ 60,00 / R$ 65,00 / R$ 75,00. Publicação: R$ 16,98 por trabalho, à parte da inscrição. Confira o valor final no checkout da Even3.”** Do not keep asking whether that published fee is per author. Package availability does not extend submission eligibility. |
| Event dates, targets and unknowns | Both languages agree on the approved BRIEF dates. Live HTML independently confirms event dates, ticket validity, five-business-day review wording and the publication fee. The calendar graphic could not be refetched (403); do not claim this review independently reread its text. | Retain **4 Nov submissions/video; 15→16 Nov price change; 20 Nov observance; program by 25 Nov; congress 5–6 Dec; certificates from 6 Dec; proceedings by 15 Dec**. Say **“programação prevista até 25/11”**, **“certificados previstos a partir de 6/12, conforme critérios confirmados”**, **“anais previstos até 15/12”**. Exact submission cutoff, conflicting presentation requirement, resumo simples, certificate eligibility and access route stay committee questions. |
| Facebook Live eligibility | [StreamYard's own integration documentation](https://support.streamyard.com/hc/en-us/articles/360043291412-Connect-a-Facebook-Page) confirms **Facebook account age ≥60 days**, **Page/professional-profile followers ≥100**, and content access. Direct Meta Help attempts returned login/block/throttling pages, so direct Meta re-verification remains incomplete. | **“StreamYard documents a Facebook account at least 60 days old, a Page/professional profile with at least 100 followers, and permission to create content. Test the actual destination in Live Producer before announcing. The age condition refers to the account; a new Page is not automatically ruled out by its creation date.”** PT warning heading: **“Uma conta pessoal nova não atinge 60 dias a tempo.”** Keep the YouTube fallback. |
| Instagram hashtags | Searches corroborated a December 2025 five-tag announcement; the primary @creators announcement was not retrievable. This review cannot certify universal enforcement in every composer. Site instructions already stay at five or fewer. | Editorial operating rule: **“Use up to five relevant hashtags on Instagram; respect any lower limit shown by your composer. Do not plan around the old 30-tag allowance.”** PT: **“Use até cinco hashtags pertinentes no Instagram e respeite um limite menor, se aparecer no seu criador de publicações.”** Facebook **0–3 is the team's convention**, not a platform maximum; WhatsApp none. Avoid alternating “reportedly,” a universal hard limit, and a recommendation as if equivalent. |
| Meta pt-BR labels | Meta's [Portuguese announcement](https://about.fb.com/br/news/2024/04/nossa-abordagem-para-rotular-conteudos-criados-com-ia-e-midias-manipuladas/amp/) explicitly uses **Informações de IA**. Meta's [Brazilian creator announcement](https://about.fb.com/br/news/2023/05/mais-ferramentas-suporte-e-recursos-para-criadores-de-conteudo-no-facebook/) confirms **Painel Profissional**. Live 2026 menu paths, Planejador, event co-host wording and the precise WhatsApp create button were not independently confirmed. | Use **Informações de IA (AI info)** and **Painel profissional (Professional Dashboard)**. For navigation use **“procure Planejador (Planner) ou Conteúdo (Content); os nomes podem variar”**. For co-hosts use **“página parceira como coanfitriã (co-host; procure a opção equivalente nas configurações do evento)”**, not a claim this is a verified button. WhatsApp: **“Atualizações → opção de criar um canal (o nome e a posição variam)”**; link to [official channel help](https://faq.whatsapp.com/794229125227200/?cms_platform=web&locale=pt_BR), whose body did not render in this review. |
| Instagram professional account / Business Suite | The site consistently recommends a professional account, but “usually lets” in instagram-whatsapp and a connection-only requirement in scheduling-tools are different levels of certainty. Logged-in Meta setup was not tested. | Operational prerequisite: **“Use an Instagram professional account (Business or Creator), connect it to the correct Facebook Page, and confirm that both destinations appear in Business Suite. If unavailable, publish manually.”** Do not imply connection alone guarantees every format or feature. |
| Even3 custom questions | Even3's [registration page](https://www.even3.com.br/plataforma/como-funciona/inscricao/) and [data-collection guide](https://blog.even3.com.br/como-coletar-dados-na-even3/amp/) confirm customizable forms/questions. | **“Even3 supports custom questions. In the organizer panel, test an optional ‘Como você ficou sabendo do CONAFROEDU?’ question and check its export before relying on it.”** Feature existence is verified; exact menu, optionality and this account's configuration need a test. Use separate, unchecked marketing choices per channel. |
| Even3 affiliate/referral links | The [official marketing page](https://plataforma.even3.com.br/solucoes/divulgacao-de-eventos/) explicitly advertises **Links de afiliados** to track partner campaigns. It also advertises form questions, coupons and scheduling; it says support enables scheduling if absent. Account-level referral setup and commissions were not tested. | **“Even3 advertises partner tracking links. Confirm availability and attribution in this event's panel or with support; use the shared UTM scheme as the fallback. Tracking does not imply a commission or a discount.”** Existing kits wording is appropriately cautious; do not promote it to a guaranteed affiliate-sales workflow. |
| LGPD art. 5 II | The [official statute](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm), art. 5 II, includes racial/ethnic origin, religious belief and health among sensitive data. Current legal guidance is correct. | **“A LGPD classifica dados sobre origem racial ou étnica, convicção religiosa e saúde como dados pessoais sensíveis (art. 5º, II). Não os solicite em formulários de divulgação nem os infira de nomes ou imagens.”** Treat this as a non-exhaustive list. Handle individual accessibility requests privately. |
| 2 November / Finados | [Lei 10.607/2002](https://www.planalto.gov.br/ccivil_03/leis/2002/l10607.htm) expressly lists 2 November as a national holiday. Calendar arithmetic confirms Monday in 2026. | **“Segunda-feira, 2 de novembro de 2026, é feriado nacional de Finados. Agende o conteúdo e publique apenas os horários de atendimento realmente cobertos.”** |
| Contrast 4.5:1 | [WCAG 2.2 SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) specifies **4.5:1 for ordinary text**, **3:1 for large text**, with exceptions. Site's normal-text claim is correct. | **“Como referência WCAG AA, use contraste mínimo de 4,5:1 para texto comum e 3:1 para texto grande. Confira também a leitura no celular.”** Link the checker/standard from brand-kit as well as ethics; do not call 4.5:1 a universal requirement for every graphic element. |
| Accented anchors | Parsed all 56 documents through the installed remark/GFM→rehype→rehype-slug stack; checked every local Markdown destination and fragment, including cross-language links. **Zero missing files/anchors**. Linked `/examples` and `/images` files also exist. | **Keep accented pt-BR fragments.** They are valid here; do not strip accents or change heading slugs speculatively. Recheck references whenever a heading is actually renamed. This is a source/pipeline audit, not a claim that every external URL loaded. |
| Sprint / calendar ownership, roles and cadence | Four core roles match across languages: Coordination/Coordenação; Content/Design/Conteúdo/Design; Social/Community/Redes/Comunidade; Partnerships/Parcerias. Dates agree, but task timing and topic schedules differ. | **Sprint owns who/when; campaign-timeline owns one dated publishing calendar; quick-start is a setup checklist.** Use **three main Facebook posts weekly, optional fourth, deadline/service exceptions stated explicitly**. Canonical first-call target **23 Oct**; shared 26/28/30 Oct topics must match. Monday: team review/batch; Friday: FAQ maintenance. Confirm a realistic staffing budget, distinguishing elapsed session time from person-hours. |
| Canonical brand voice | prompting-basics and library contain an identical Portuguese VOZ DA MARCA block. copywriting has a different VOICE block; the library incorrectly treats them as interchangeable. | **The verbatim `VOZ DA MARCA — CONAFROEDU` block in prompting-basics is canonical in both languages.** Copywriting links to it or reproduces it exactly. Remove the alternative block and the “paste either” note. Longer brand-kit guidance can explain it without redefining it. |
| WhatsApp shortcuts | replies-inbox defines 18 shortcuts. Other guides introduce `/submissao`, `/programacao`, `/anais`, which that bank does not define. | Canonical set: **`/datas`, `/inscricao`, `/valores`, `/ouvinte`, `/prazo`, `/modalidades`, `/comosubmeter`, `/publicacao`, `/certificado`, `/apresentacao`, `/video`, `/prorrogacao`, `/horas`, `/acesso`, `/acessibilidade`, `/pagamento`, `/humano`, `/contato`**. Migrate `/submissao` to `/prazo` + `/comosubmeter`; `/anais` to `/publicacao`; program information to `/datas`. A starter subset is fine if explicitly labelled as such. |
| WhatsApp labels / outreach consent | The [Business Messaging Policy](https://whatsappbusiness.com/policy/) applies to App and Platform and requires recipient permission; a public number is not opt-in. Three guides use different suppression labels; quick-start lacks one. | Use exactly **Dúvida sobre inscrição; Dúvida sobre submissão; Instituição parceira; Precisa de resposta humana; Não enviar divulgação**. **“Só inicie divulgação no WhatsApp com permissão registrada para receber mensagens da organização. Número público ou contato conhecido não basta. SAIR ou qualquer pedido claro interrompe os envios.”** |
| Palette | Navy/green/cream is explicitly an example in brand-kit/image-prompts. Motion demos use terracotta/ochre/cream; these are not explicitly identified there as an alternative example palette. | **Keep both as EXAMPLES.** Add in brand-kit: **“As paletas deste guia e das demonstrações de animação são exemplos, não a identidade oficial. Qualquer paleta aprovada pode ser usada, desde que tenha contraste adequado. Em peças da mesma campanha, use a paleta aprovada no kit de marca.”** Label the motion palette an alternative example. No palette-only MP4 rerender is needed. |
| pt-BR spelling / labels | `online` remains in frontmatter, video text and motion prompts, while other prose uses `on-line`; brand-kit leaves the decision open. | **Use `on-line` and `100% on-line` in pt-BR authored prose, frontmatter and new on-screen text.** Keep URLs, handles, product labels, hashtags (`#CongressoOnline`), proper quotations and already-rendered example media unchanged. Use **Inscrição** for the fixed FAQ/Highlight label, **Inscrições** for the public CTA, and **submissão de trabalhos** for the scientific process; grammatical singular/plural variation is not an error. |
| Images / video / motion / approval defaults | Core tool recommendations mostly agree. Concrete export and free-plan conflicts remain below. | **Images:** real approved photo or shapes + Canva Free; ChatGPT Images or Gemini for optional conceptual backgrounds. **Video:** real phone footage + CapCut/Canva first; generated inserts optional and licence-checked. **Motion:** Claude writes the animation; export the shared social master as **1080×1920, MP4/H.264, 30 fps**, even if poses update at 8/s. **Automation:** fixed approved greetings/native scheduling allowed; generative AI drafts; humans approve external actions. |
| Length and duplication | Whitespace count confirms **229,272 words total**: 109,848 EN and 119,424 pt-BR, including metadata/Markdown. Each library has **90 prompt blocks** and about 12k words. | Keep deep reference material; give novices a **one-screen “Do this today” block** and a single minimum path. Library becomes an index/shortlist with source links or generated copies, rather than another independently maintained master. Consolidate repeated policy explanations into one rule plus task-specific warnings. |

## Scope, result and limitations

Reviewed the 28 page pairs in `content/en` and `content/pt-BR`, against REVIEW_GUIDE, REVIEW_NOTES, BRIEF, CONTENT_GUIDE and CONTENT_PLAN. Findings below count **distinct problems**, not every occurrence or every affected language: **2 CRITICAL, 21 MAJOR, 9 MINOR — 32 total**. Both copies need the same substantive fixes.

The source audit includes frontmatter, headings, table dimensions/rows, callouts, prompt fences, local destinations/fragments, repeated fact/voice blocks and static example links. All source retrievals below were made on **21 October 2026**. No content or application files were edited. This review did not log into organizer accounts, buy tickets, test every vendor plan, or independently validate every advertised model benchmark. Blocked primary Meta pages are explicitly distinguished from verified facts; the home page currently overstates that distinction.

## Findings

### C01 — CRITICAL — The outreach procedure permits WhatsApp contact without opt-in

**Files:** `content/en/outreach.md:127`, `content/pt-BR/outreach.md:127`; compare their platform rules at line 328, plus both ethics-legal and instagram-whatsapp guides.

**Problem:** Step 7 permits WhatsApp messages to published institutional numbers **or people the team already knows**. Its permission condition concerns sending material to a group, not permission from the recipient to receive the initial business message. The later policy section correctly requires opt-in. A volunteer following the numbered procedure can violate the rule before reaching the warning.

**Evidence:** The [WhatsApp policy](https://whatsappbusiness.com/policy/), “Create a Quality Experience,” requires that recipients provide their number/username and grant permission; it covers both Business App and Platform.

**Fix:** Replace the step with the canonical consent sentence above. First institutional contact can use the institution's appropriate email/form; invite that recipient to initiate WhatsApp or expressly permit it there. Apply the condition to T4/T6 and all permission-request examples, rather than treating a permission-request message itself as an exemption.

### C02 — CRITICAL — The deadline rollover leaves live FAQ answers offering closed submissions

**Files:** both `replies-inbox.md:74` (`/inscricao`), `:81` (`/valores`), `:108` (`/modalidades`), `:376` (“When to update”); both `prompting-basics.md:137` and prompt-library fact-sheet update instructions.

**Problem:** The 5 Nov update table changes only `/prazo` and `/comosubmeter`. `/inscricao` still tells people to choose a ticket **with a submission** while advertising registration through 6 Dec; `/valores` still contains expired submission packages, and several answers remain invitations to submit. This conflicts with the sprint's instruction to switch every surface. It can direct someone toward a paid category they misunderstand after the scientific deadline.

**Evidence:** Local answers/update table versus sprint Week 2; the [event page](https://www.even3.com.br/iconafroedu-764690/) also shows package validity ending 5 Nov, independently of the brief's 4 Nov submission deadline.

**Fix:** At the confirmed submission cutoff audit **every FAQ, greeting, saved context and scheduled answer**, not two shortcuts. After closure, `/inscricao` defaults to attendance and directs existing-author issues to a human; no new-submission purchase advice without a confirmed exception. Remove expired packages from public/current-price replies when their sale ends. Add the missing 5 Nov package rollover and an explicit post-close test question to the checklist.

### M01 — MAJOR — The Live warning confuses the age of an account with the age of a Page

**Files:** both `video-repurposing.md:97`; compare both `facebook-playbook.md:197` and `campaign-timeline.md:86`.

**Problem:** “A brand-new Page can't go live in time” is stronger than its supporting paragraph. The paragraph and playbook correctly discuss the organizer's **account** age and the Page's follower count. A new Page managed by an established eligible account is not excluded by that age statement alone.

**Evidence:** [StreamYard](https://support.streamyard.com/hc/en-us/articles/360043291412-Connect-a-Facebook-Page) distinguishes account age from Page/professional-profile followers. Direct [Meta Live Help](https://www.facebook.com/business/help/216491699144904) was blocked, not verified.

**Fix:** Use the canonical warning heading and qualification. Do not borrow another person's account or promise eligibility solely from follower count; test the actual destination.

### M02 — MAJOR — WhatsApp quick-reply names do not point to one usable answer bank

**Files:** both `quick-start.md:149`, `conafroedu-sprint.md:97`, `tips-tricks.md:51`, `replies-inbox.md:43`; `instagram-whatsapp.md:139` EN / PT same table; prompt-library §7.1 and §3.6.

**Problem:** The setup pages tell volunteers to create `/submissao`; the canonical bank instead divides this into `/prazo`, `/modalidades`, `/comosubmeter`. Instagram/library also request `/programacao` and `/anais`, absent from that bank. Following a link cannot supply the advertised reply.

**Fix:** Use the 18-name canonical set and mapping in the table. Quick-start's minimum subset should be `/prazo`, `/comosubmeter`, `/valores`, `/certificado`, `/acesso`, `/humano`; explicitly defer the rest. Update the library's 5 Nov replacement prompt too.

### M03 — MAJOR — Opt-out labels differ, and the beginner setup omits the opt-out label

**Files:** both `quick-start.md:150`, `instagram-whatsapp.md:150` and `:226`, `replies-inbox.md:266` and `:393`.

**Problem:** “Não enviar novidades” and “Não enviar divulgação” are different manually created labels. Quick-start lists neither and also uses “Dúvida de…” instead of the bank's “Dúvida sobre…”. Separate volunteers can create separate suppression categories and miss a stop request.

**Fix:** Reuse the five exact canonical labels everywhere; make “Não enviar divulgação” part of the initial setup and every send checklist. A label is organizational, not technical enforcement: the human sender must check it.

### M04 — MAJOR — Three versions of the first campaign week cannot all be the publishing plan

**Files:** both `conafroedu-sprint.md:32` and `:77`; `quick-start.md:32` and `:108`; `scheduling-tools.md:178`; `campaign-timeline.md:121`.

**Problem:** The sprint's key-date row says publish on 21 Oct, its Week 0 goal says by Friday 23 Oct, scheduling says by 25 Oct, and quick-start permits Monday 26 Oct. For 26/28/30 Oct the sprint/quick-start prescribe how-to-submit / seven-days-left / author Reel; the calendar prescribes announcement / speaker Reel / submission checklist, plus a separate seven-day reminder. These are competing commitments, not just suggestions in different formats.

**Fix:** Adopt the first-call target 23 Oct, with 21 Oct a stretch goal if facts/access are ready. Make campaign-timeline the dated post list and reuse those exact three Week 1 rows in the sprint and quick-start. State whether the 28 Oct reminder replaces that day's piece; do not silently add it.

### M05 — MAJOR — The staffing/time estimates describe different-sized teams

**Files:** both `quick-start.md:14`, `:30`, Day 1–7 headings; `facebook-playbook.md:19`, `:235`; `conafroedu-sprint.md:55`; `replies-inbox.md:364`; `scheduling-tools.md:110`.

**Problem:** Quick-start promises 5–7 total team hours, but its seven stated day durations total about **8.5–8.75 hours** before daily support/extra work. The sprint's role allocations total **10–15 hours plus daily time**. The playbook budgets a single 15-minute daily check; replies requires two. A 90-minute session with two people is up to three person-hours, not 90 minutes of total labour.

**Fix:** Publish one minimum and one full-capacity plan with person-hours, a shared inbox rota and explicit deadline coverage. Reduce posts/tools if only 5–7 person-hours exist. Keep the same daily support assumption in every budget; label estimates as estimates.

### M06 — MAJOR — A program guide is scheduled before the confirmed program is available

**Files:** both `campaign-timeline.md:125` (Week 5 Monday); compare both `copywriting.md:200`, `image-prompts.md:147` and `scheduling-tools.md:186`.

**Problem:** Monday 23 Nov says “program guide by audience”; the official program is targeted for 25 Nov and the other guides correctly require the actual confirmed program before writing itineraries. No earlier availability is established.

**Fix:** Replace Monday with a confirmed-facts FAQ. Publish audience itineraries only **after** the program is released, moving them to 26–27 Nov or later. If the program is delayed, use the existing honest delay/status template.

### M07 — MAJOR — 20 November advice alternates between a separate invitation and a sales CTA in the educational post

**Files:** both `conafroedu-sprint.md:172`, `campaign-timeline.md:152`, `copywriting.md:190`, `image-prompts.md:202` EN / `:199` PT, `video-repurposing.md:53`, `scheduling-tools.md:184` EN / `:181` PT.

**Problem:** The sprint/calendar say put any attendance invitation in a **separate** post. The image recipe explicitly appends an invitation to the educational caption; the repurposing table combines a reflection Reel with registration CTA. The copywriting sample also ends the same reflection with an event invitation. These do not implement the same editorial decision.

**Fix:** Canonical 20 Nov educational piece: credited substance, sources and a genuine educational question. A separate optional attendance post may contain the congress invitation, with no discount/pressure framing. Remove the appended promotional lines from recipes and update their library copies.

### M08 — MAJOR — Outreach uses a different UTM vocabulary from the official scheme

**Files:** both `outreach.md:98` and `:338`; both `measuring-results.md:60`, `speaker-partner-kits.md:264`; also instagram-whatsapp's bio/content-code examples.

**Problem:** Outreach uses `utm_source=neab_x` / `neab_ufscar` and `utm_medium=parceria`. The shared scheme uses `parceiro_neabi_01` and `referral`. The same partner's results will split across labels. Bio and Channel sample content IDs also differ (`bio_registration`/`bio_link`, `channel_programme_01`/`canal_programacao_01`), undermining “take every link from one register”.

**Fix:** Replace outreach's worked link with the exact partner example from measuring-results, including `utm_content=release`. Reuse canonical bio/Channel links rather than hand-building another sample. New IDs are allowed only as explicitly different placements registered in Links.

### M09 — MAJOR — The marker convention is too inconsistent for the proposed preflight search

**Files:** both `prompting-basics.md:75`, `prompt-library.md:33`, `replies-inbox.md:33` and `:100`; `copywriting.md:228`; `instagram-whatsapp.md:144`.

**Problem:** A search for literal `[CONFIRMAR]` misses `[HORÁRIO – CONFIRMAR]`, `[CONFIRMAR: …]`, `[CONFIRMAR com a comissão]`, ordinary `[HORÁRIO]` and alternate “CONFIRMAR” body badges. Some prompts put missing facts inside publishable text; others require them outside it. A novice can interpret “remove the marker” as permission to retain the unsupported claim.

**Fix:** Apply the canonical marker and body-callout rules, explain them in prompting-basics, and state: **“Check all unresolved brackets and missing facts, not only the exact token. Replace with a verified fact or remove the entire unsupported claim.”** Draft outputs should separate publishable copy from questions for the committee.

### M10 — MAJOR — There are two brand voices, despite a claim that either block is equivalent

**Files:** both `prompting-basics.md:148`, `copywriting.md:51`, `prompt-library.md:129` and `:265`.

**Problem:** VOZ DA MARCA specifies você, short concrete sentences, no “moreno(a)” euphemism and one CTA. VOICE instead adds no ALL CAPS, different examples and other style rules, while dropping some of those specifics. The library's “They say the same thing; paste either” is false as an operational specification.

**Fix:** Keep the Portuguese canonical block from prompting-basics verbatim in both locales; remove the alternative and interchangeability note. Any new house rule belongs in that one block first.

### M11 — MAJOR — The portrait-edit prompt contradicts the “ordinary tools only” rule

**Files:** both `representation-bias.md:140`, `prompt-library.md:608`, `brand-kit.md:124`, `image-generation.md:217`, `speaker-partner-kits.md:164`, `tips-tricks.md:64`.

**Problem:** A ready prompt asks an AI service to adjust the framing/exposure of a real portrait. Other pages restrict speaker portraits to normal crop/exposure tools and forbid AI enhancement; image-generation confines generative photo fixes to non-factual background defects. A “preserve identity” instruction is not a guarantee, as the image guide itself explains. The library also globally forbids personal data, then asks for approved bios/portraits without clearly stating the permission exception.

**Fix:** Replace that prompt with a non-generative editing checklist. Keep AI biography drafting only from approved public/provided source material, and explain the narrow approved-material exception to the privacy rule. External-AI upload permission is separate from publication permission. Do not use the model to reconstruct a speaker's face.

### M12 — MAJOR — A brand example asserts an access route that the fact sheet says is unknown

**Files:** both `brand-kit.md:55` (tone-table event-days row); compare both `prompting-basics.md:89`, `replies-inbox.md:191` and sprint's committee decisions.

**Problem:** “O link de acesso está no e-mail da inscrição” is written as a ready example without a confirmation placeholder. Elsewhere email versus participant area versus platform is expressly undecided. An example reused during the event can send participants to the wrong place.

**Fix:** Use **“Começamos às [CONFIRMAR], horário de Brasília. Acesse por [CONFIRMAR].”** Outside the prompt, explain that the route and hours must be confirmed before use. After adopting the normalized marker convention, keep explanatory details outside the literal token.

### M13 — MAJOR — The authorization template assumes a non-profit-use condition that the site never establishes

**Files:** both `ethics-legal.md:75`; compare their promotional-use warning and both `image-generation.md:101`.

**Problem:** The form says “sem fins lucrativos diretos e sem remuneração”. The site's licensing guidance correctly treats the campaign as promotion of a paid event. The organizer's legal/profit status is unknown. Charging fees does not itself prove profit, but the template should not assume or narrow the permitted purpose this way.

**Fix:** Describe the actual purpose: **“para divulgação e comunicação do I CONAFROEDU 2026, evento com inscrições pagas, exclusivamente nos usos e canais assinalados abaixo”**. State remuneration terms separately, as actually agreed. Preserve separate AI-use choices and qualified review; do not claim this wording resolves every legal requirement.

### M14 — MAJOR — The supplied motion videos are 24 fps; the shared Reels master is 30 fps

**Files:** both `motion-graphics-claude.md:361` EN / `:359` PT and ffmpeg examples; compare both quick-start, video-generation and video-repurposing export instructions. Read-only supporting file: `public/examples/render-frames.mjs:26`.

**Problem:** OBS/Remotion and the other guides use 30 fps, but the frame-render script defaults to 24. Independently inspecting MP4 track timing confirms **countdown: 288 frames / 12 seconds = 24 fps; quote: 336 / 14 = 24 fps**. These are the actual files advertised for reuse, not just a typo in prose.

**Fix:** Canonical social master: 30 fps. The existing script already accepts an fps argument: document `node render-frames.mjs countdown.html 12 countdown 30` and the equivalent quote command. Update ffmpeg output conversion to 30 fps and replace downloadable MP4s when implementation is authorized. Eight stop-motion poses/s is a separate artistic choice. No palette redesign is necessary.

### M15 — MAJOR — The zero-budget generated-video route is not the same route as the recommended model workflow

**Files:** both `video-generation.md:64`, `:91`, `:104`, `:143`, `:161`, `:239`; both `glossary-resources.md:234`.

**Problem:** The page says Runway Gen-4.5 is paid, offers Runway's free allowance as the zero-budget route, then uses Gen-4.5 as an image-to-video example without naming the free model/fallback. It also acknowledges free watermarked exports but requires “no watermark” at final review. A novice cannot know which described R$0 workflow can actually reach publication.

**Fix:** Separate **free draft/testing** from **publishable export** and list the model actually available in a verified free account, if tested. Never advise removing a required watermark. If no suitable free commercial export is confirmed, state that directly and take the already-described still-image/Canva-motion fallback. Keep paid Gen-4.5 clearly optional.

### M16 — MAJOR — The image recipe promises a Canva template-sharing action that the kit guide treats as conditional

**Files:** `image-prompts.md:126` EN / `:123` PT; both `speaker-partner-kits.md:85`; both `tips-tricks.md:66`.

**Problem:** Cookbook and tips present a template link as a free, zero-extra-work route. The more careful kit guide says to use that option **if the plan offers it**, otherwise use a blank PNG. A novice may otherwise share edit access to the master design while looking for a missing template control.

**Fix:** Reuse the kit's plan-conditional instruction and fallback everywhere. Explicitly say **“Não compartilhe acesso de edição ao arquivo mestre. Se não houver Link de modelo na sua conta, envie a imagem com campos em branco.”** This finding does not assert a newly verified Canva entitlement; it removes an unconditional promise the site itself cannot substantiate.

### M17 — MAJOR — The home page claims a stronger verification standard than the underlying guides achieved

**Files:** both `index.md:87`; compare scheduling-tools' admission at line 80, computer-use-agents' unconfirmed account/plan cells and facebook-playbook's StreamYard-based eligibility section.

**Problem:** Home says tool names, prices and features were checked against official sources on the review date. Several guides explicitly say current menus were not tested, access/quotas were not confirmed, and some claims rely on third parties. Repeating a date on every page does not verify an account-specific feature or a blocked source.

**Fix:** **“Researched on 21 October 2026. Verified facts link to their sources; account-specific features, blocked sources and untested workflows are identified where relevant. Recheck the official plan and your account before relying on them.”** Update labels to “documented”, “tested here”, “not confirmed” where appropriate. Keep Sora's verified status definite; do not hedge every fact equally.

### M18 — MAJOR — The “two assistants” starter advice becomes an eight-tool onboarding requirement

**Files:** both `choosing-ai-tools.md:117`, `:180`, `:195`; both `quick-start.md:42`, `index.md:55`.

**Problem:** The tools page says start with two assistants, then labels a stack containing Claude, Gemini + Notebook, ChatGPT, Meta AI and Perplexity as the recommended starter, plus production tools. Its setup checklist adds multiple account/context tasks. Quick-start instead asks for one main assistant and an optional comparison. This creates avoidable setup work during a two-week submission push.

**Fix:** Mark a minimum required stack: **one writer, Canva Free, Meta Business Suite, WhatsApp Business if approved for the support number**. Add a document researcher only when needed; put second opinions, Meta AI, Perplexity and advanced models under “optional alternatives”. Same minimum on home, quick-start and choosing-ai-tools.

### M19 — MAJOR — The prominent reading path does not match the urgent campaign path

**Files:** both `index.md:25`, `quick-start.md:20`, `campaign-timeline.md:59`, page order frontmatter; supporting read-only UI source `src/routes/$lang/index.tsx:30` and `:46`.

**Problem:** Home's body usefully directs readers to the sprint, but its most prominent Start Reading button opens the first ordered guide, quick-start, whose first posts can wait until Day 4. The linear navigation then spends seven creation guides before the Facebook playbook. The current campaign's dated calendar also comes after a long reusable future-edition timeline.

**Fix:** For this edition, make the primary entry **“What to do now: the 6-week sprint”**, followed by the minimum setup checklist and one publication task. Put the current dated calendar before the reusable timeline, retaining the latter as reference. Keep role paths; label deep creation/model reference reading optional. This report requests the change; it does not modify code.

### M20 — MAJOR — Outreach retention can erase the very suppression record it promises to respect

**Files:** both `outreach.md:132`, `:321`–`:324`; compare both `ethics-legal.md:193`–`:199`.

**Problem:** Outreach says respect do-not-contact requests permanently, but its retention instruction says delete personal fields after the event unless future-edition opt-in exists. A person who opted **out** normally has no such opt-in. Deleting their identifier from the suppression record makes later re-import/re-contact possible. Ethics correctly says retain the minimum needed not to contact them again.

**Fix:** Distinguish marketing/contact-history deletion from a restricted suppression record: **“Apague os dados de prospecção que não forem mais necessários; mantenha somente o identificador mínimo necessário para respeitar pedidos de não contato, com acesso restrito e prazo/base de retenção definidos pelo responsável.”** Do not retain the entire conversation indefinitely.

### M21 — MAJOR — The universal agent prohibition is incompatible with the authorized scheduling recipe

**Files:** both `computer-use-agents.md:40`, Task D at `:139` EN / `:138` PT, checklist at `:197` EN / `:196` PT; both `scheduling-tools.md:219`.

**Problem:** Golden rules/checklist say every agent prompt must prohibit posting/submitting and that a human performs public actions. Task D then instructs the agent to create **scheduled** posts and confirm them after human OK. Scheduling is a future public commitment, even when “do not publish now” is obeyed. The exception is not described in the supposed universal rules.

**Fix:** Define read-only and external-action modes explicitly. Prefer drafts only for novices. If allowing agent-assisted scheduling, state that it is a narrow exception requiring a named human to approve **Page, final content, media, date/time and the individual scheduling action**, followed by queue verification. Human approval of a caption alone is insufficient. Native fixed replies/scheduling remain distinct from autonomous generative replies.

### N01 — MINOR — The motion palette looks like a second default rather than an alternative example

**Files:** both `brand-kit.md:110`, `image-prompts.md:38`, `motion-graphics-claude.md:28`, `:94` EN / `:92` PT and library §6.

**Problem/fix:** Keep both palettes with the explicit example/approval language in the decisions table. All production prompts should say “replace with the approved brand palette”. Existing video examples can remain in their demonstration palette.

### N02 — MINOR — pt-BR “online” / “on-line” and public Event title vary

**Files:** `content/pt-BR/index.md:9`, `brand-kit.md:75`, motion/video prompt text throughout; both `copywriting.md:239`, `facebook-events-groups.md:49`, sprint Week 0.

**Problem/fix:** The brand guide still asks the team to pick a spelling instead of making the requested house decision. Apply `on-line` to authored Portuguese and the canonical public Event title; retain genuine UI/product labels and URLs/handles. In English prose, `online` is appropriate. Singular “inscrição” versus plural “inscrições” is grammatical; standardize fixed labels, not every sentence.

### N03 — MINOR — A verified publication-fee unit is reopened as an organizer decision

**Files:** both `conafroedu-sprint.md:219`; compare both `replies-inbox.md:138`, prompting-basics fact sheet and all price recipes.

**Problem/fix:** The committee table asks whether R$ 16,98 is per work or per author, while the [official publication section and FAQ](https://www.even3.com.br/iconafroedu-764690/) say per work. Replace that question with **“Confirmar responsável pela publicação, instruções de pagamento e entrega do DOI; a página anuncia R$ 16,98 por trabalho.”** Keep checkout confirmation; do not make the already-published unit sound unknown.

### N04 — MINOR — Targets become exact promises in compact summaries

**Files:** both `index.md:38`, `conafroedu-sprint.md:42`, `campaign-timeline.md:44`, copywriting certificate/proceedings examples.

**Problem/fix:** “25 Nov — official program published” differs from **by** 25 Nov; certificates “available from” can sound guaranteed despite unresolved eligibility. Use the target/from wording in the canonical table and require real availability before publishing a resource announcement. A scheduled reminder to check availability is not a preapproved announcement that it exists.

### N05 — MINOR — The no-code page contradicts its own free-scenario count and review day

**Files:** both `no-code-automation.md:201`, `:205`; compare sprint Monday review and scheduling Monday batch.

**Problem/fix:** It says Flow 4 uses the **second** of two Make Free scenarios, then tells readers to choose between Flow 2 and Flow 4. Under the page's own numbers those two fit together. Say **“Flows 2 and 4 use one scenario each; together they fill the two-scenario allowance”**, subject to actual account limits. Change “Friday review” to Monday team review; Friday remains FAQ maintenance.

### N06 — MINOR — “One deliverable per request” is repeatedly contradicted by the supplied prompts

**Files:** both `prompting-basics.md:270` and exercise, `prompt-library.md:27`, quick-start's first post prompt, campaign-timeline's adaptation prompt and library §3.14.

**Problem/fix:** The rule says quality suffers when requesting post + Reel + email + WhatsApp together, while exercises and templates request exactly those bundles. Prefer **“Start with one core message; after approval, ask for its channel adaptations. The bundle prompts are optional batch shortcuts and each output still needs separate review.”** Split beginner examples or label them accordingly.

### N07 — MINOR — The glossary has real EN↔pt-BR omissions, not merely a five-row layout difference

**Files:** `content/en/glossary-resources.md:126`–`:155`; `content/pt-BR/glossary-resources.md:119`–`:152`.

**Problem/fix:** PT omits the standalone definitions for **educação básica**, **graduação/licenciatura/pós-graduação**, **ANPEd GT21** and **ABNT**; the Pix definition is removed from the combined Pix/IOF row. Separate hours/progression rows are merged, and the English quilombola explanation is replaced by a more general identity-distinction row. Keep the useful localization but restore those definitions (especially ANPEd/ABNT), preserve the quilombola explanation and add the PT identity-distinction advice to EN. Merged equivalent rows do not require artificial separation.

### N08 — MINOR — “Never automate group posting” obscures the site's own permitted native scheduling exception

**Files:** both `ethics-legal.md:218`, `tips-tricks.md:105`, `computer-use-agents.md:58`; compare both `scheduling-tools.md:67` and `facebook-events-groups.md:235`.

**Problem/fix:** The ban is appropriate for external tools/browser-agent mass posting, but native scheduled posts by admins in groups they manage are expressly documented elsewhere. Use **“Não use ferramentas externas nem agentes para disparar em grupos. Administradores podem usar o agendamento nativo no próprio grupo, quando adequado às regras; nos grupos de terceiros, faça a publicação autorizada manualmente.”** Keep this distinction in the glossary too.

### N09 — MINOR — “Pay or credit” contradicts the site's rule that visibility is not payment

**Files:** both `video-repurposing.md:254`; compare brand-kit, representation-bias and outreach's commissioning guidance.

**Problem/fix:** “Pay or credit fairly” permits credit to substitute for payment for commissioned music. Replace with **“Agree the fee and usage rights in writing, pay as agreed, and give the agreed credit. If there is no commission budget, use properly licensed existing music or no music.”** Voluntarily donated work is a separate explicit agreement, not implied by a credit line.

## Coverage against the original request

**No requested core subject is wholly absent.** The site is unusually comprehensive; the main gaps concern choosing and completing a small real workflow, rather than adding another general overview. The following additions should replace duplicated explanations or live beside the existing source guide, not become more parallel masters.

| Requested capability | Existing coverage | Thin area / concrete addition |
|---|---|---|
| Image generation and best models | image-generation compares major model families, costs, rights, editing, Portuguese lettering and sizes; image-prompts supplies 11 recipes; representation-bias gives detailed safeguards. The default ChatGPT/Gemini + Canva recommendation is consistent. | Add one **same-brief comparison card** for two free tools: exact prompt, two attempts, approved palette, downloadable result, observed failures, editing minutes and date/account used. Score text exclusion, cropping space, repeatability and representation review; distinguish observations from vendor features. Do not claim a universal bias-free winner. |
| Video generation and best models | Broad current-model table, audio/length/ratio distinctions, two workflows, attempt budgeting, licensing caveats, dubbing/avatars and fallback editing. Sora is already excluded. | Resolve M15 with one **verified publishable route** and a clear R$0 fallback. For the same five-second people-free shot, show draft attempts, export limitations, actual cost per usable clip and rights. The current feature table cannot establish Portuguese speech quality or a best-value winner; it honestly says no hands-on comparison was done. |
| Stop-motion / motion graphics with Claude | Strongest practical section: two downloadable HTML/MP4 examples, paper-cut motion, physical-versus-code distinctions, OBS, HandBrake, image-frame continuity, technical export script and Remotion. | Fix M14, add the approved-brand substitution note, and put a **five-step “reuse this countdown” route first**. Link the technical appendix as optional. A small frame-contact-sheet example would help show drift and correct numbering without implying 24 generated frames are a fast first-week task. |
| Differences between models and which is better at what | choosing-ai-tools distinguishes assistants/models, provides a task table, costs, a free stack and a useful blind pt-BR writer test. Media guides correctly avoid universal ranking claims. | Keep the landscape, but put **“Choose by today's job”** ahead of exhaustive names: writer, source-grounded FAQ, illustration, real-video edit, motion. Mark the free model actually accessible in an account separately from a vendor's flagship name. Consolidate the optional stack (M18). Add image/video test examples rather than more leaderboard prose. |
| Facebook-first organic | Detailed Page/Event setup, Groups etiquette, formats, cadence, timing hypotheses, Live fallback, partner distribution and measurement. Instagram/WhatsApp supplement rather than displace it. | Make the urgent publishing path navigable (M04/M19). Add one compact **complete first-post package** linking approved caption, image, alt text, Even3 URL, owner/reviewer, publishing slot and follow-up metric, assembled from existing materials. That bridges otherwise excellent but separate guides. |
| Automating posting | Native Business Suite walkthrough, scheduler comparison, shared sheet, approval states, queue audit, time zones, event-day manual updates; agents have a supervised scheduling recipe. | Clarify the agent action boundary (M21), professional-account prerequisites and “draft versus scheduled versus published”. Add one screenshot or account-verified checklist only when an actual account can be tested; currently the guide explicitly has not tested the UI. No automated third-party Group posting is needed. |
| Outreach automation | Strong research/verification, institutional target routes, individualized templates, one follow-up, tracking, opt-outs and legal-basis discussion. | Correct C01 and M08/M20. A small **dummy-data tracker with one completed example row** would make this much easier to execute. Automate reminders/drafts, not unsolicited sends or extraction of personal contacts. |
| Replies and community automation | Eighteen FAQ shortcuts, holding responses for conflicts, fixed greetings/away messages, native tools, AI drafting, bot costs/policies, moderation and human escalation. | Correct C02 and M02/M03. Add a dated **deployment acceptance checklist**: five test questions, a missing fact, a payment case, an accessibility case, an opt-out, and post-deadline phrasing. This is more valuable than another chatbot comparison. |
| No-code / other tools | Five flows, free-tier units, human review, failure/duplicate/credential rules, Zapier/Make instructions and a sensible caution about n8n maintenance. | n8n is compared but has no worked implementation. A short optional **equivalent-node map** for one existing flow would complete that tool's coverage if a technical volunteer actually needs it. The beginner route should remain Forms/manual work; do not add an untested large workflow merely for symmetry. |
| Extra tips/tricks | Fifty tips, speaker/author/partner/ambassador kits, UGC, legal/privacy, accessibility, representation, analytics and glossary are all substantive. | Turn the top five tips into the actual initial path. Preserve references while removing repeated full fact sheets/voice/policy paragraphs. Make “one deliverable” and commissioning/payment advice match the examples (N06/N09). |

## Navigation, length and duplication

The home body is a good entry point: it names the actual event, explains the urgent scientific deadline, separates role-based paths and offers a 30-minute option. The problems are the rendered primary button/linear ordering (M19), the verification claim (M17), and the expectation that a beginner can identify which repeated setup instructions are authoritative.

Recommended reading sequence for this campaign:

1. **Sprint: this week's objective and the decisions blocking publication.** Keep the current dated plan first; label the long reusable campaign timeline “future editions”.
2. **Minimum setup:** one writer, fact sheet, one approved voice block, one feed template, Page/Event ownership and the support rota. Quick-start should be a checklist that links to these exact sections.
3. **One real Facebook post and its approved adaptations**, then scheduling and the inbox. Link representation/permission checks immediately before any image upload, rather than making them the seventh item in a posting reading path.
4. **Weekly refinement:** partner kits, measurement, next week's calendar, optional image/video/motion production. Computer-use/no-code are optional efficiency tools after the manual process works.
5. **Reference:** model landscape, deep legal/representation explanations, recipe book, prompt index and glossary.

The roughly **110k–119k source words per language** are reference-book scale, not a short onboarding course. At an indicative 200 words/minute the prompt library alone is about **59 minutes EN / 63 minutes PT**, before replacing placeholders or checking results. Normal guides range from roughly 2.2k to 5.7k EN words; copywriting, motion and the glossary are substantially longer than the 1.5k–3.5k EN target. This is not a reason to remove substantive guidance. It is a reason to give each long page a short task-first route, clearly mark optional material, and reuse one canonical object per topic.

Consolidation priorities:

- **Fact sheet:** prompting-basics → one maintained shared document; shorten the Facebook-playbook alternative to a link/checklist. Version copied facts in the library.
- **Voice:** one canonical block; brand-kit explains it; copywriting uses it. Remove “either voice is equivalent”.
- **FAQ:** replies-inbox owns answer text, shortcut names and dates; Instagram/quick-start/sprint use explicitly labelled subsets and links.
- **Calendar:** one dated publishing list with stable IDs; sprint maps those IDs to owners. Keep generic future-edition planning separate.
- **Safety rules:** ethics-legal owns the general rule, representation-bias owns the image-review process; each workflow retains its specific warning at the action where it matters. Do not remove those action-level warnings in the name of deduplication.
- **Prompts:** 84 of the 90 EN library blocks exactly match a standalone source code block; another three are explicitly new, two come from nested stop-motion code blocks and one from an inline video-prompt example. The repetition is deliberate and mostly faithful. Generate/reuse copies or keep a short indexed library; do not maintain two editable fact/voice/prompt masters.

## EN ↔ pt-BR structural audit, page by page

Both locales contain exactly the same **28 slugs**. Every pair has the same heading-level sequence and number of prompt blocks. Table dimensions also match except the intentional English gist column in copywriting and the glossary differences described in N07. **No substantive safety alert was found missing solely from one language.** English-only tips/notes that explain why outputs should be Portuguese are localization aids, not missing Portuguese warnings.

Notation below: **H / P / T / A** = body headings / fenced `prompt` blocks / tables / recognized alert blocks. Ordinary quoted example outputs do not count as alerts. Word counts are whitespace counts of source files, including metadata and Markdown; they are not the application's exact reading-time calculation.

| Page pair | Words EN / PT | H / P / T / A — EN → PT | Structural / semantic difference |
|---|---:|---|---|
| `brand-kit.md` | 3,335 / 3,619 | 23 / 5 / 7 / 4 → 23 / 5 / 7 / 4 | Same structure; EN has an extra link to PT snippets and English date gloss. Localized wording is appropriate. |
| `campaign-timeline.md` | 4,302 / 4,738 | 20 / 5 / 7 / 4 → 20 / 5 / 7 / 3 | EN-only note explains pt-BR output; all seven tables retain their rows. Same campaign conflicts in both (M04/M06/M07). |
| `choosing-ai-tools.md` | 2,877 / 3,135 | 20 / 1 / 3 / 5 → 20 / 1 / 3 / 4 | EN-only tip links to the Portuguese comparison prompt; PT adds a local Notebook help link. Same products/cost rows. |
| `computer-use-agents.md` | 2,969 / 3,311 | 15 / 3 / 4 / 3 → 15 / 3 / 4 / 3 | Same six tasks, cost table, restrictions and prompts; same Task D boundary issue (M21). |
| `conafroedu-sprint.md` | 3,621 / 3,868 | 17 / 1 / 3 / 3 → 17 / 1 / 3 / 3 | Same milestones, four roles, weekly actions and 14 committee decisions. Same fee-unit question (N03). |
| `copywriting.md` | 4,878 / 5,210 | 27 / 16 / 6 / 6 → 27 / 16 / 6 / 6 | EN hook table has a third English-gist column; PT retains all seven hooks. One extra ordinary quote block in PT is layout, not a missing warning. |
| `ethics-legal.md` | 3,955 / 4,420 | 31 / 1 / 5 / 2 → 31 / 1 / 5 / 2 | Same numbered sections, permission choices, sensitive-data warning, licences and accessibility checklist. |
| `facebook-events-groups.md` | 3,368 / 3,610 | 21 / 3 / 3 / 6 → 21 / 3 / 3 / 6 | Same setup/description, co-hosts, group process and three prompts; EN-only sentence points to PT prompts. |
| `facebook-playbook.md` | 4,093 / 4,506 | 24 / 2 / 7 / 8 → 24 / 2 / 7 / 7 | EN-only note explains Portuguese output; same setup, Live caveats, timing slots and metric advice. |
| `glossary-resources.md` | 5,722 / 6,203 | 22 / 0 / 19 / 1 → 22 / 0 / 19 / 1 | Fourth table has 38/33 rows including header (37/32 data rows). Missing/merged/replaced definitions detailed in N07; resource sections otherwise match. |
| `image-generation.md` | 4,239 / 4,656 | 20 / 5 / 6 / 10 → 20 / 5 / 6 / 10 | Same model/cost/licence/size rows, workflows and warnings. The default image-tool advice matches other guides. |
| `image-prompts.md` | 3,938 / 4,048 | 18 / 24 / 1 / 9 → 18 / 24 / 1 / 8 | EN-only language note and English glosses; all 11 recipes, 24 prompt blocks and safety alerts remain. |
| `index.md` | 1,006 / 1,122 | 10 / 0 / 1 / 2 → 10 / 0 / 1 / 2 | Same role paths, milestone table and principles. EN has an extra sentence explaining social-copy output language. |
| `instagram-whatsapp.md` | 3,497 / 3,803 | 23 / 4 / 6 / 3 → 23 / 4 / 6 / 2 | EN-only note explains Portuguese outputs; same channel table, shortcuts, opt-in rules and four prompts. |
| `measuring-results.md` | 3,144 / 3,395 | 29 / 3 / 9 / 6 → 29 / 3 / 9 / 6 | Same funnel, UTM, scorecard and review tables, formulas and privacy warnings. |
| `motion-graphics-claude.md` | 5,131 / 5,549 | 30 / 6 / 5 / 9 → 30 / 6 / 5 / 9 | Same routes, examples, export commands, frame workflow and technical appendix; EN-only prompt-language sentence. Both inherit 24 fps conflict. |
| `no-code-automation.md` | 2,736 / 3,061 | 12 / 2 / 4 / 4 → 12 / 2 / 4 / 4 | Same five flows, free limits, AI billing caveat, safety list and conditional Even3 integration advice. |
| `outreach.md` | 3,946 / 4,289 | 29 / 2 / 5 / 6 → 29 / 2 / 5 / 6 | Same target categories, process, eleven message templates, follow-up/tool tables and policy caveats. C01/M08/M20 occur in both. |
| `prompt-library.md` | 11,779 / 12,695 | 90 / 90 / 1 / 10 → 90 / 90 / 1 / 10 | 90 prompt blocks in both; same 11 groups and three explicitly new lifecycle prompts. Same conflicting shortcut/voice guidance. |
| `prompting-basics.md` | 3,291 / 3,400 | 14 / 11 / 5 / 6 → 14 / 11 / 5 / 6 | Same fact sheet, brand voice and safeguards. Tip near line 65 is localized: EN says request pt-BR output; PT says ask one thing at a time. PT adds a local help link. |
| `quick-start.md` | 2,188 / 2,400 | 12 / 2 / 0 / 3 → 12 / 2 / 0 / 3 | Same seven days, four prompt blocks and setup/actions; no lost checklist. Dates, capacity and shortcuts need the same fixes. |
| `replies-inbox.md` | 4,325 / 4,571 | 25 / 1 / 4 / 8 → 25 / 1 / 4 / 8 | Same 18 shortcuts, answers/holding replies, four automation layers and human-only cases. Same incomplete deadline rollover. |
| `representation-bias.md` | 3,938 / 4,330 | 14 / 5 / 5 / 6 → 14 / 5 / 5 / 6 | Same studies, failure modes, image sources, prompt patterns and representation/religion checks. Sora reference is historical research. |
| `scheduling-tools.md` | 3,203 / 3,574 | 19 / 2 / 5 / 7 → 19 / 2 / 5 / 6 | EN-only language tip; same scheduler capabilities, cost rows, queue checks and event-day manual rule. |
| `speaker-partner-kits.md` | 4,327 / 4,648 | 31 / 5 / 5 / 6 → 31 / 5 / 5 / 5 | EN-only note explains Portuguese output; same four kits, conditional template fallback, permission and Even3 feature rows. |
| `tips-tricks.md` | 2,715 / 2,992 | 12 / 0 / 0 / 2 → 12 / 0 / 0 / 2 | Same fifty tips and top-five shortlist; same links/checklist intent. Both repeat absent shortcut /submissao. |
| `video-generation.md` | 3,665 / 4,135 | 16 / 4 / 5 / 6 → 16 / 4 / 5 / 6 | Same 13 model rows including retired Sora, cost rows, two workflows, audio and disclosure warnings. |
| `video-repurposing.md` | 3,660 / 4,136 | 26 / 5 / 6 / 6 → 26 / 5 / 6 / 6 | Same phase/tool/music rows, consent, clipping, dubbing and avatars. PT end-card wording is localized; no substantive step is lost. |

Other parity observations: fixed Portuguese official facts in EN prompts are intentional, as are EN glosses for Brazilian terminology. The repeated FICHA OFICIAL and VOZ DA MARCA text match their own source blocks. No English-only newly advertised tool, cost row, deadline or consent checkbox was found missing from the paired Portuguese guide. Equivalent structure does not itself establish factual correctness; the problems above generally exist in both languages.

## Verified OK / do not reopen without new evidence

- **Sora is unavailable**, including its API; the surviving documentation explicitly says so. The site's historical Sora bias-study citation is not a recommendation to use it.
- **Published price tiers and fee unit agree across the site.** The extra publication charge is per work; checkout amounts should still be confirmed. The erroneous question in the sprint is the exception, not evidence that all fee statements need weakening.
- **Main event/campaign dates and four team role names agree across languages.** The divergent first-week tasks and programme sequencing are operational contradictions, not wholesale calendar/date mistranslation.
- **The primary LGPD sensitive-data claim is correct**, as are Finados being a national holiday and WCAG's 4.5:1 normal-text reference; sources and exact scope are in the decisions table.
- **Meta's Portuguese AI-label wording is confirmed.** Do not leave “Informações de IA” as a guessed translation. Full 2026 click paths and the event co-host/button wording remain untested.
- **Even3 advertises custom questions and affiliate tracking links.** Availability/setup for this event, optional-field behaviour and attribution need account verification; commissions are not established.
- **Image-tool recommendations largely agree:** real approved photos/shapes + Canva; optional ChatGPT/Gemini backgrounds; Midjourney/other models are paid or specialist alternatives. Different purpose-specific tools are not inherently contradictory.
- **Video recommendations largely agree:** real footage first; short conceptual generated inserts second; exact words added in an editor; dubbing/avatar permission separate; no manufactured past edition or crowd.
- **The 90-prompt count is accurate in each language.** Most library copying is faithful, not independently rewritten drift. Fix canonical shortcuts/voice at their sources and propagate.
- **Zero broken local Markdown targets/fragments** in the source audit, including accented fragments and cross-language paths. All linked static example/image files exist. This does not certify blocked external links or account-dependent controls.
- **No content files were changed or committed.** Only this assigned review report was written.

## Evidence that remains unavailable

Direct Meta Help attempts for Live/setup returned login/block/throttling pages. WhatsApp's official channel-creation page returned no readable body. Searches did not yield a retrievable primary Instagram five-hashtag announcement. The Even3 calendar graphic returned 403. These failures are limitations, not evidence that the documented features or event dates are false.

The concrete publishing decisions above deliberately avoid dependence on those unresolved points: use at most five Instagram tags, follow actual UI controls, test Live eligibility, confirm organizer-only facts, and preserve the BRIEF's approved dates while requesting committee/source confirmation where necessary. Do not mark these account tests “verified” until someone performs them.
