# Production Todo / Commit Log

## 2026-04-18

- `0f05425` — Homepage IA and catalog-to-stone routing polish.
  - `index.html`
  - `catalog.html`
  - `catalog-stone.html`
  - `script.js`
  - `docs/website-structure-execution-order-v1-2026-04-18.md`

- `1996b9a` — QA pass fixes: anchors and link-path integrity.
  - `plye.html`
  - `nalexible-stone.html`
  - `docs/step3-qa-pass-2026-04-18.md`

- `eeb253b` — Normalize sample CTA copy across EN pages.
  - `about.html`
  - `applications.html`
  - `contact.html`
  - `index.html`
  - `nalexible-fiberboard.html`
  - `nalexible-stone.html`
  - `plye.html`
  - `plye-b.html`
  - `plye-c.html`
  - `projects.html`
  - `script.js`

- `8aa53da` — Step 3 performance pass: async decoding and hero image priority.
  - `index.html`
  - `catalog.html`
  - `catalog-stone.html`
  - `contact.html`
  - `docs/step3-performance-qa-2026-04-18.md`

- `231a0f5` — Homepage B flow polish: trust-strip positioning + softer response copy.
  - `index.html`

- `6936b04` — Step 5 QA pass: A/B checks, conversion CTA polish, and log update.
  - `index.html`
  - `docs/production-todo.md`
  - `docs/step5-ab-qa-pass-2026-04-18.md`

- `d3e3058` — Homepage A/B messaging pass: sharper B value proposition + neutral badge labels.
  - `index.html`
  - `script.js`

- `d2770bb` — Homepage hero copy pass: clear A (brand) vs B (decision path) with bilingual A copy.
  - `index.html`
  - `script.js`

- `4d27ce0` — Apply Hybrid homepage hero messaging across A/B variants (EN/ZH aligned).
  - `index.html`
  - `script.js`

- `de838e8` — Homepage hero polish: full Hybrid headline visibility + clickable decision-flow chips + richer kicker.
  - `index.html`
  - `script.js`

- `f6cf601` — Step 6 conversion micro-pass: hero assurance copy, flow tracking, and AB param propagation on CTA links.
  - `index.html`
  - `script.js`

- `f73c5f6` — Add 5-minute internal A/B evaluation playbook for homepage hero decision.
  - `docs/homepage-ab-5min-eval-2026-04-18.md`

## Pending (Coordination)

- `2026-04-18 17:00 (Asia/Taipei)` — Claude.ai brochure v8 print-fix pass.
  - Target output:
    - `docs/brochure/ashley-kitchen-stone-systems-overview-final-facade-v8-p9-balance-p14-canonical.pdf`
  - Scope:
    - Page 9: rebalance the 3-layer diagram vertical position inside the technical card.
    - Page 14: remove incorrect 7013/7014 base images and place canonical slab images from PPT p16/p17 (not overlay).
  - Source refs:
    - `docs/brochure/sources/lumislate-source-zh.pptx`
    - `docs/brochure/sources/nalexible-product-materials-zh.pptx`

## Pending (Execution Queue)

- Homepage CTA report + conversion copy + mobile readability pass (EN/ZH) is implemented and queued for commit.
  - Files:
    - `ab-report.html` (new)
    - `index.html`
    - `catalog.html`
    - `catalog-stone.html`
    - `contact.html`
    - `script.js`
  - Highlights:
    - Adds readable localStorage-based A/B CTA report page (`ab-report.html`) with variant views/clicks/CTR, top CTA ranking, copy summary, and reset action.
    - Refines Catalog → Stone → Contact conversion copy and keeps bilingual keys in `T`.
    - Adds EN/ZH mobile first-screen readability tuning for homepage/catalog/catalog-stone/contact hero blocks.

- Step A/B rollout (technical evidence + guardrail + contact intents) is implemented and queued for commit.
  - Files:
    - `nalexible-stone.html`
    - `catalog-stone.html`
    - `contact.html`
    - `script.js`
  - Highlights:
    - Adds a new `#technical-evidence` section anchor and a safe-generic technical evidence card set on the stone product page.
    - Adds catalog-stone specification guardrail copy with direct links to evidence and report mapping request.
    - Adds contact-form technical intent routing via `support_type` for sample/report/installation/compliance/project workflows.

- Step 6 round-2 conversion micro-pass is implemented and queued for commit.
  - Files:
    - `index.html`
    - `script.js`
  - Highlights:
    - Improves homepage hero readability and keeps full Hybrid messaging visible across desktop/mobile.
    - Tightens hero CTA hierarchy with sample-first + catalog + technical-evidence helper path.
    - Refactors next-step cards into a clearer conversion funnel (sample → stone library → technical evidence → intent-routed contact).
    - Upgrades sticky CTA into dual-action routing (sample pack + technical support).

- Global clickability hardening pass is implemented and queued for commit.
  - Files:
    - `index.html`
    - `applications.html`
    - `projects.html`
    - `contact.html`
    - `plye-b.html`
    - `plye-c.html`
  - Highlights:
    - Converts mobile nav overlays from always-mounted transparent fullscreen layers to `display:none` by default.
    - Keeps overlays visible only when `.open` is active, reducing cross-browser risk of invisible click interception.
    - Preserves existing burger behavior and close interactions.
