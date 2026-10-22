# Final technical review — 2026-10-21

GPT-only, no delegated agents. Reviewed `src/`, `plugins/content.ts`, Vite configuration, scripts, workflows and example renderer source at HEAD `b3df89e`, including the concurrent content edits present during review. Only this report was written. No rebuild, browser session, implementation change, commit or push was performed.

No P0/P1 issue found. One P2 data-integrity issue and four P3 issues remain.

**Actionable findings**

1. **P2 — Saved checklist completion survives changes to the task itself.** `src/components/Prose.tsx:38` restores positional booleans whenever the checkbox count matches; `:56` saves no task identity or revision. This integration has a concrete affected case: `content/en/computer-use-agents.md:202` replaces “Separate browser profile for agent work” with a broader local/cloud-session and connected-app-permission review while retaining eight checkboxes. An existing saved first tick therefore marks the expanded review complete without the reader performing it. The Portuguese equivalent and several other edited checklists have the same problem. Executing the existing restoration statement with the old eight-element saved array confirms the changed first task becomes checked. **Fix:** include a fingerprint of the ordered task labels in the stored record and invalidate mismatched records, or persist completion by task-content identity. Treat legacy boolean arrays as unverified after migration.

2. **P3 — Homepage hreflang sets disagree about the default page and omit return links to the chooser.** `src/lib/seo.ts:58` always selects English as `x-default`; `plugins/content.ts:399` does the same for localized home pages. In contrast, `src/routes/index.tsx:26` and `plugins/content.ts:388` select the language chooser. The built `/ai-tutorial/` declares EN, PT and itself as `x-default`, whereas both localized homes declare EN, PT and English as `x-default`. Thus the chooser links to both localized homes without either linking back to it in the alternate group. This was verified in both generated HTML and the 61-entry sitemap. **Fix:** use `/ai-tutorial/` as the common homepage `x-default` in all three homepage declarations and their sitemap entries; retain English defaults for guide pairs.

3. **P3 — Blocked storage prevents browser-language detection.** `src/routes/index.tsx:8` puts the storage read, browser-language fallback and redirect inside one `try`. If `localStorage.getItem` throws, the fallback never runs. Running the exact built detector in a Node VM with `navigator.languages = ['pt-BR']` redirects to `/ai-tutorial/pt-BR/` normally but produces no redirect when the storage read throws. The bilingual chooser remains usable, so this is a degraded enhancement rather than a blocked site. **Fix:** catch only the storage read, then perform language validation, browser detection and the redirect outside that catch.

4. **P3 — Two Copy clicks can leave the button permanently labelled “Copied!”.** `src/components/Prose.tsx:68` captures the current label for each copy operation, including the temporary success label. Click Copy twice within two seconds: the second callback captures “Copied!”, and its later timeout restores that text after the first timeout restored “Copy”. Executing the exact success callback twice with controlled timers reproduces the final label “Copied!” with no copied state. **Fix:** retain an immutable normal label per button and cancel/restart its existing reset timer on subsequent successful copies.

5. **P3 — Malformed URL escapes crash the local preview process.** `scripts/preview.mjs:38` calls `decodeURIComponent` without error handling inside the HTTP request listener. Invoking the actual handler with `/ai-tutorial/%` or `/ai-tutorial/%E0%A4%A` throws an uncaught `URIError`. This affects the local preview script, not GitHub Pages hosting. **Fix:** catch decoding errors and return HTTP 400 before filesystem lookup. Verified with a mocked HTTP adapter; no server or browser was started.

**Checks passed**

- Existing production output contains all **62 application pages**, plus the two standalone example HTML files. `/tmp/ai-tutorial-download-fix-build.log` ends with `postbuild: 62 pages OK in dist/client`.
- HTMLParser inspection of those **64 HTML files** checked **9,005 internal references**: no missing files/fragments, links escaping the project base, or duplicate IDs. Canonical URLs, `og:url` and document language match all 60 localized application pages.
- All **14 public files** match their built counterparts byte-for-byte. Source and built Skill ZIPs are each **8,105 bytes**, contain four entries and pass CRC validation. `404.html` retains only the marked theme script; application scripts are removed.
- Each compiled search index contains **730 unique entries across all 30 localized documents**. MiniSearch construction and the actual `runSearch` function pass representative English/Portuguese queries, unaccented `educacao`/`inscricao`, and punctuation-only input. No duplicate search IDs found.
- Source inspection confirms project-base handling in the router, compiled Markdown links/images, SEO URLs and explicit prerender paths. The binary-corrupting crawler is disabled. Workflow wiring uses frozen installation, typecheck, production build, configured Pages base/origin and the complete client artifact. No additional concrete defect found in these paths.
- Mobile-menu source uses a native modal dialog, Escape handling, focus restoration and desktop-breakpoint cleanup. Storage parsing/writes in theme and checklists catch unavailable or invalid storage. Browser behavior reported by the parent was not re-tested here.

**Limits**

The parent is still editing content. Artifact checks apply to the existing `dist/client` snapshot, not a new build of the eventual final working tree; repeat the integration build and link audit after content settles. No browser, physical-device, assistive-technology, authenticated publishing or remote GitHub Actions run was performed. Renderer source and existing asset integrity were inspected; video regeneration and decoding were not repeated. Parent-reported HTTP ZIP equality and injected-drift rejection were not independently rerun.

## Supervisor resolutions

All five findings were addressed after this review:

- P2: store ordered full task labels with completion flags; ignore legacy arrays and mismatched task text. Browser tested legacy invalidation, unchanged-task restoration after reload, and revised-task invalidation after hydration.
- P3 hreflang: chooser and both localized homes use the chooser as x-default in HTML and sitemap; guide pairs retain English defaults. Parsed rebuilt HTML to check all three homes and a guide.
- P3 detection: catch only the storage read. Executed the actual rebuilt detection script with blocked storage and a pt-BR browser: correctly redirects to `/ai-tutorial/pt-BR/`.
- P3 Copy: keep the original label and restart a per-button reset timer. Browser test with a controlled successful clipboard implementation returned Copied!/Copied!/Copy after two rapid clicks; state clears. This verifies feedback timing, not clipboard permissions.
- P3 preview: malformed escapes return400 and the process continues serving ordinary200 responses. Also tightened the path boundary so an encoded sibling-file traversal returns404; a temporary sibling probe confirmed it cannot be read.

Typecheck and production build passed all62expectedpages after these changes. Final content and deployment checks remain separate.
