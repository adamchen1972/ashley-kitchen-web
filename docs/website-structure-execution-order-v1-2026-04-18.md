# Website Structure Improvement - Execution Order (v1)

Date: 2026-04-18  
Owner: Codex + Adam

## Objective
Improve Ashley Kitchen's EN-site structure and homepage flow using Cosentino as a benchmark style (clarity + decision flow), while keeping Ashley Kitchen as the only lead brand.

## Step 1 - Global navigation and naming consistency
Status: Completed

- Standardize main nav labels across key pages: `Catalog / Flooring / Stone / Fiberboard / Applications / Projects / About / Contact`.
- Keep EN/ZH switcher in the top-right on key pages.
- Remove supplier-first wording from nav/footer where it causes brand confusion.

## Step 2 - Catalog split reinforcement
Status: In progress

- Keep `catalog.html` as cross-system overview and routing hub.
- Keep `catalog-stone.html` as deep 8-series stone library.
- Ensure routing CTAs are explicit (`Open Stone Library`, `Browse Patterns`, `Request Sample`).

## Step 3 - Homepage IA pass (A/B enabled)
Status: In progress

- Keep top-right `A | B` toggle for side-by-side behavior testing.
- Variant B order target:
  1. Hero
  2. Applications
  3. Material families
  4. Projects
  5. Proof / trust strip
  6. Audience support
  7. Next-step conversion cards
- Keep Ashley-only positioning (no supplier brand strip).

## Step 4 - Conversion path clarity
Status: Pending

- Ensure each homepage block has one clear next action:
  - Discover by space -> `applications.html`
  - Discover by system -> `catalog.html`
  - Deep stone compare -> `catalog-stone.html`
  - Conversion -> `contact.html`

## Step 5 - QA and release checklist
Status: Pending

- Desktop + mobile visual sanity check.
- No broken links from homepage CTAs.
- A/B toggle behavior verified with `?ab=a` and `?ab=b`.
- No supplier-brand emphasis regression.

## Near-term dependency (stone)
Series 3-8 pattern library completion depends on Nalexible delivering missing pattern swatches and mapping confirmation.
