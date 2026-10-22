# Release validation — 21 October 2026

The resumed supervision used GPT models only after the user reported the Claude subscription was spent. Earlier interrupted Opus reviews were recovered as leads, not represented as completed approvals. Initial research, implementation, first reviews, resolution reports and final independent reviews remain in this directory and docs/research.

## Review disposition

- Start/Create and beginner guides: final review identified three major workflow gaps and one minor forecast inconsistency; corrected in both languages. Bounded closure confirmed no remaining critical/major finding and identified two minor omissions, which were then corrected exactly: ZIP extraction and certificate-release gating.
- Facebook/automation/extras: final review identified four major and one minor issue. Resolved polling schedule/budget, duplicated calendar conflicts, attribution wording, external-photo-processing permission/fallback parity and certificate forecast wording. Critical source/library prompt copies match in both languages.
- Technical review: one P2 and four P3 findings corrected. Checklist persistence now invalidates revised tasks; Copy feedback resets after repeated clicks; blocked storage preserves browser-language fallback; homepage hreflang defaults agree; malformed preview paths fail safely. Native mobile navigation and binary-download fixes were also validated.

## Final local release checks

- pnpm typecheck: passed.
- Production build with BASE_PATH=/ai-tutorial/ and SITE_URL=https://sgolovine.github.io: passed,62expectedapplicationpages. Log:/tmp/ai-tutorial-release-build.log.
- Parsed64HTMLfiles including two standalone examples:9,016internal href/src/poster references,zero missing files/anchors,zero duplicateIDs.
- All14publicfiles match their built copies byte-for-byte. Skill ZIP CRC passes with fourtextfiles; local HTTPdownload matches source bytes.
- All30locale pairs have matching heading-level sequences. Fourcritical prompt copies(weeklyplanning,pricechange,speakercard,Motion)match their source guides exactly in each locale. No canonical fact/voice changes were required by the final fixes.
- LocalHTTPchecks:bothhomes,setup/learningguides,ZIPandMP4return200;unknownroute returns404. Malformed escapes return400 without stopping the preview server; encoded sibling traversal returns404.
- Browserchecks:localizedsprintCTA,search,mobilemenu/Escape/focusrestore/desktopcleanup;legacy/revised checklist invalidation and unchanged-task reload persistence; repeatedCopyfeedback timing; desktopPTsetup and phone-sizePTlearning layout without horizontal overflow; stable anchors and correct project-prefixed download URL.
- Media:1080×1920H.264/yuv420p30fps;12-secondcountdown and14-secondquote fully decoded without errors. Quote-source contrast12.84:1 at16.125CSSpx on375pxstage;finalcomposition within safe area;countdown animations finite.

## Practical limits

No organizer-account publishing, Skill upload/invocation, paid export, Brazilian checkout, WhatsApp number migration, physical-device or assistive-technology test was performed. Account-specific menus, rights, pricing and rollouts retain their documented checks. Presentation/video conflicts, final schedule/access, certificate eligibility/release and event-specific attribution remain explicit committee/account questions.

Remote deployment and live smoke-check results are recorded by the supervisor after pushing this release.
