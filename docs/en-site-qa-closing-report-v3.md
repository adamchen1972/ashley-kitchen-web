# EN Site QA Closing Report (Batch: Brand + Funnel + Mobile)

Date: 2026-04-19  
Scope: `index.html`, `catalog.html`, `catalog-stone.html`, `contact.html`, `projects.html`, `applications.html`, `about.html`, `flooring.html`

## 1) AshleyKitchen-only pass (visible/meta/alt)
Status: Completed

Applied:
- Removed visible `ORIGIN` wording in active production copy where still exposed in catalog/projects/applications.
- Replaced exposed flooring series codes from `ORG-/ROG-` to `AK-F-` in production-facing catalog/projects content.
- Replaced remaining visible `Plye` wording in alt text (`about.html`) with Ashley Kitchen wording.
- Updated social meta image references in `projects.html` and `contact.html` to neutral Ashley Kitchen stone image URL.

Notes:
- Internal CSS class/id names still contain legacy tokens like `plye` in some files; these are non-user-facing and do not surface in UI copy.

## 2) Contact form funnel simplification
Status: Completed

Implemented in `contact.html`:
- Required fields now reduced to:
  - Full Name
  - Email Address
  - Product Interest
- Added collapsible optional panel: `Add project details (optional)`.
- Moved phone/country/messenger fields into optional panel.
- Removed hard requirement for phone numbers (no more "at least one phone" gate).
- Kept project/support/message fields optional.
- Updated query prefill mapping so `product=flooring` is first-class.

Validation check:
- `required` attributes now exist only on 3 fields (`cf-name`, `cf-email`, `cf-product`).

## 3) CTA hierarchy consistency pass
Status: Completed (production pages in current funnel)

Adjusted:
- Primary actions remain solid/dark in hero and conversion zones.
- Secondary actions remain outline/ghost style.
- Updated exposed flooring naming in project/catalog conversion surfaces to keep brand coherence with CTA language.

## 4) Link integrity pass (Catalog → Stone → Contact + homepage key paths)
Status: Completed

Automated checks run for:
- `index.html`
- `catalog.html`
- `catalog-stone.html`
- `contact.html`
- `projects.html`
- `applications.html`

Result:
- Internal file links: OK
- Hash anchors/fragments: OK
- No broken local target found in scoped pages.

## 5) Mobile readability / touch target pass
Status: Completed

Applied minimum touch-target improvements (`>=44px`) on key interactive controls:
- Language buttons
- Nav CTA / mobile overlay CTA
- Key conversion buttons in catalog/contact/index/cat-stone contexts
- Hero helper and sticky CTA controls remain readable and tappable with updated spacing baseline

## Residual watch list (non-blocking)
- Legacy internal tokens (`plye`) in class names and data filters remain for code compatibility.
- Supplier-branded page filenames (`nalexible-*.html`) are unchanged this batch.
- Optional fields in contact remain available (collapsed), not removed.

## Launch readiness for this batch
Decision: PASS for scoped items.

This batch closes the 5 approved actions without changing IA structure or breaking existing link paths.
