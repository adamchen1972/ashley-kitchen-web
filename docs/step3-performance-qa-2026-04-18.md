# Step 3 QA Pass (Performance + Routing) — 2026-04-18

## Scope
- `index.html`
- `catalog.html`
- `catalog-stone.html`
- `contact.html`

## Changes Verified
- Added `decoding="async"` to lazy-loaded images in the 4 scope pages.
- Set above-the-fold hero media to eager/high-priority where applicable:
  - `index.html` hero first slide: `loading="eager" fetchpriority="high" decoding="async"`
  - `contact.html` hero image: `loading="eager" fetchpriority="high" decoding="async"`

## QA Checks Run
1. Internal link-path check (top-level HTML pages)
- Result: no missing local `href` targets found.

2. Language toggle compatibility check
- Confirmed pages use both id schemes (`btn-en/btn-zh` and `lb-en/lb-zh`).
- `setLang()` in `script.js` supports both schemes and updates `aria-pressed`.

3. Regression scan in modified files
- Confirmed this pass only adjusts image loading/decoding attributes and does not alter routing structure or copy.

## Notes
- This pass is intentionally non-visual and low-risk (markup attribute tuning).
- Manual browser QA (desktop/mobile screenshots) can be done as a follow-up if needed.
