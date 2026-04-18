# Homepage + Contact Visual QA (Final)
Date: 2026-04-18  
Scope: `index.html`, `contact.html`  
Mode: EN/ZH copy states + desktop/mobile breakpoints + link-path sanity

## Checklist
- Homepage hero spacing and hierarchy reviewed (desktop + mobile).
- Homepage helper link vertical rhythm checked against CTA cluster.
- Contact mobile spacing checked for hero-to-form transition and scroll depth.
- Contact form button stack and form-row rhythm checked on small screens.
- Internal `href` path validation run for homepage/contact (local file existence).

## What Was Patched
1. Homepage helper CTA spacing polish (`index.html`)
- Increased vertical breathing room around `Need technical evidence first →`.
- Slightly increased CTA row bottom gap to avoid compressed visual stack.

2. Contact mobile micro-layout polish (`contact.html`)
- Reduced top padding in page hero and contact main block.
- Tightened form group vertical spacing and submit row rhythm.
- Slightly compacted overview card carousel (card width/padding/gap) to reduce scroll depth.

## Validation Notes
- Internal link-path check result: no missing local paths in `index.html` and `contact.html`.
- External links (social/fonts) intentionally excluded from local file checks.
- No functional JS behavior changed; this pass is visual spacing/alignment only.

## Risk
- Low: CSS-only spacing updates in scoped selectors.
- No i18n key changes, no routing changes, no form logic changes.
