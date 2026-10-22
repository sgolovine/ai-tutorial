# Asset and technical review resolutions

Validated 2026-10-21 by the supervisor using GPT-6.1 Sol. Content edits and translation review are recorded separately.

- **GPT02 C03 / GPT05 M14:** Renderer defaults to 30 fps. Regenerated `countdown.mp4` (1080×1920, H.264, yuv420p, 12 seconds / 360 frames) and `quote.mp4` (same format, 14 seconds / 420 frames). Regenerated both 270-pixel-wide, 8 fps preview GIFs. Fully decoded both MP4s with FFmpeg: no errors. The content worker independently verified the primary Instagram specification at https://www.facebook.com/help/instagram/1038071743007909.
- **GPT02 M06:** Quote source now uses opaque cream `#f5e9d7` with dark brown `#3a1d12`: calculated contrast **12.84:1**, measured font **16.125 CSS px** at 375-pixel stage width. Adjusted quote size and spacing to keep the complete final composition inside its safe area. At 375×667, content extends from 94.91 to 518.75 px; safe area extends from 93.50 to 520.17 px. Inspected the actual final frame in the collaborative browser. This is a display-size check, not a test on physical phone hardware.
- **GPT02 N01:** Decorative countdown motion now has 32 iterations of 0.375 seconds (12 seconds), a delay matching `pausa`, and final fill. Browser inspection confirmed all 15 animations have finite iterations, and decorative pose is identical at 20 and 21 seconds with a three-second delay.
- **GPT02 N02:** Both HTML files describe `pausa` as a background delay, not a readable cover. The content worker owns corresponding tutorial wording.
- **TECH01:** Mobile navigation previously used a non-native dialog without focus containment. Replaced its outer container with a native modal `dialog`, using `showModal`, cancellation handling, explicit close/focus restoration, and closure at the desktop breakpoint. Browser checks confirmed background controls are excluded from sequential focus, Escape closes and restores Menu-button focus, and desktop resize clears both the modal and body scroll lock. Typecheck passes.

- **TECH02:** TanStack's link crawler fetched the Skill ZIP and wrote it using text decoding, corrupting the built download (8,105 source bytes became 14,201 bytes). Disabled link crawling because every Markdown route is already explicitly enumerated. Added a postbuild byte-equality guard for every public asset. Production build passed all 62 expected pages, every public asset matched, the built ZIP CRC passed and the local HTTP download matched the source exactly. Injecting a damaged built ZIP caused the guard to fail as intended; restored original bytes and postbuild passed again.
- **GPT05 M19:** Both localized primary home-page buttons now explicitly lead to `conafroedu-sprint`, with “What to do now” wording. Browser checked English and Portuguese destinations/text; typecheck passed.

Baseline before integrating new content: production build and typecheck passed; HTMLParser-based inspection of 60 generated HTML files checked 7,284 internal links without missing files or anchors. Repeat the build and link inspection after all content workers finish.

No authenticated publishing, account setup, or purchase was performed during these checks.
