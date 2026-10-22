# FINAL-SCS closure check

**2026-10-21 · GPT only · no subagents.** Bounded review of FINAL-SCS-01–04 in the current working tree, in EN and pt-BR, against `final-start-create-setup.md`. **Two resolved; two not fully resolved, with MINOR residuals only. No remaining CRITICAL or MAJOR issue found within this scope.**

## FINAL-SCS-01 — NOT FULLY RESOLVED — residual MINOR

Both `content/en/setup-tools.md:254–265` and `content/pt-BR/setup-tools.md:254–265` now cover the current creation path, 18+/activity requirements, ordinary-chat fallback, account-specific Gem route, transition and testing. The starter tables also link to Skills/Gems. These substantive corrections agree with Google's [current Skills help](https://support.google.com/gemini/answer/17094296?hl=en) and [transition instructions](https://support.google.com/gemini/answer/18560919?hl=en), reopened 2026-10-21.

**Remaining step:** both locales at `:262` move directly from Download to placing `SKILL.md` in a folder. Google says Download produces a **ZIP**, then explicitly instructs opening it and moving out `SKILL.md`. A beginner following the new reference-upload route has not been told how to obtain the required file.

**Fix:** after Download, add EN “Open/extract the downloaded ZIP and copy its `SKILL.md` into a folder named `revisor-conafroedu`, alongside the approved public fact sheet.” PT “Abra/extraia o ZIP baixado e copie o `SKILL.md` para uma pasta chamada `revisor-conafroedu`, junto com a ficha pública aprovada.” Keep the existing Replace skill/folder upload and review steps.

## FINAL-SCS-02 — RESOLVED

Both `conafroedu-sprint.md:255–269` require approved rows with IDs, dates, channels, topics, formats, owners and status, current facts, available person-hours and full/reduced capacity. Missing approval stops calendar invention; existing IDs/dates/topics/channels are preserved; changes and reduced scope require approval. The unconditional three-post quota is gone. Each locale's weekly prompt is **byte-identical** to its `prompt-library.md:109–120` duplicate. No remaining fix.

## FINAL-SCS-03 — RESOLVED

EN `quick-start.md:110–112` and PT `quick-start.md:111–113` explicitly assign both static assets to Content/Design, identify the master and carousel recipe, specify checklist content, require current-fact captions, ordered exports and second-person approval, and reserve **60–90 additional minutes within the weekly budget**. Unfinished assets remain unscheduled pending a reduced-plan decision; the Day 5 Reel dependency remains intact. No direct workflow error introduced by this fix; no remaining fix.

## FINAL-SCS-04 — NOT FULLY RESOLVED — residual MINOR

The targeted sprint rows/checklist, copywriting prompt, image announcement and Canva text, library certificate/participation prompts, and canonical `/certificado` reply now distinguish forecasts from actual release in both languages. Certificate task prompts match their library duplicates exactly. The release/eligibility gate and committee-approved status fallback are explicit.

**Remaining execution wording:**

- `content/pt-BR/prompt-library.md:130` still gives “certificados a partir de 06/12” under “Datas confirmadas”; its source at `content/pt-BR/campaign-timeline.md:250` already says “certificados previstos”. Propagate that forecast wording to the library.
- Both `replies-inbox.md:402` still require switching `/certificado` to download instructions on 6 December alone. Replace with EN “Check actual release and eligibility; add confirmed download steps only if released, otherwise use a committee-approved status update,” and the equivalent PT “Confira liberação real e critérios; inclua passos confirmados só se liberado, senão use atualização de status aprovada pela comissão.”
- PT `prompt-library.md:377` still omits actual release from the **Uso** prerequisite, unlike EN. Add “a liberação real” before “os critérios”.

Only the assigned report was written. No implementation edits, build, preview, commits, pushes, account actions or price re-research; production/build/link checks remain with the parent. Primary fact/voice and downloadable Skill integrity were outside this closure delta and were not re-audited.

## Supervisor follow-through

Applied both minor residual fixes in EN and pt-BR: explicit ZIP extraction before moving `SKILL.md`; both FAQ rollover rows now require actual certificate release and eligibility; Portuguese library forecast and usage prerequisite now match their sources. Exact replacement text was inspected. No new canonical fact or voice changes.
