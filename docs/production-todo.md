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

- `6943827` — Fix catalog-stone Series 3–8 pattern mappings and grid layout.
  - `catalog-stone.html`
  - `assets/nalexible/stone/cement-patterns/*`
  - `assets/nalexible/stone/marble-patterns/*`
  - `assets/nalexible/stone/sandstone-patterns/*`
  - `assets/nalexible/stone/metal-patterns/*`
  - `assets/nalexible/stone/rust-patterns/*`
  - `assets/nalexible/stone/diy-patterns/*`
  - `docs/catalog-stone-series3-8-mapping-audit-v2.md`

- `ef21d9b` — Polish framing for problematic sample-shot pattern tiles.
  - `catalog-stone.html`
  - Highlights:
    - Adds per-SKU image framing tweaks for `4001`, `2011`, `4112` to reduce side-floor/edge noise in tile view.
    - Keeps original source images intact while improving card readability.

- Brochure logic review pass completed (content-level, no layout rewrite).
  - `docs/brochure-logic-review-v1-2026-04-18.md`
  - Highlights:
    - Recommends a constrained v9 micro-revision (claim guardrail, final approval note, technical evidence pointer).
    - Identifies duplicate narrative lines to reduce without changing page architecture.

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

- Conversion routing polish pass is implemented and queued for commit.
  - Files:
    - `index.html`
    - `applications.html`
    - `projects.html`
    - `about.html`
    - `plye.html`
    - `nalexible-stone.html`
    - `nalexible-fiberboard.html`
  - Highlights:
    - Replaces generic `contact.html` CTA links with intent-aware deep links for sample/spec/technical/project support.
    - Adds `from=` source tags across nav, hero, sticky, section, and footer CTAs for clearer funnel attribution.
    - Keeps messaging unchanged while improving prefilled contact context and conversion handoff quality.

- Contact form UX friction pass is implemented and queued for commit.
  - Files:
    - `contact.html`
    - `script.js`
  - Highlights:
    - Adds required-field guidance plus support/message helper copy for clearer first-time completion.
    - Adds live message character counter (`0 / 1200`) to set response expectations.
    - Improves submit validation by focusing the first invalid field and showing specific, localized inline feedback.

- Homepage hero spacing + contact mobile micro-layout polish is implemented and queued for commit.
  - Files:
    - `index.html`
    - `contact.html`
  - Highlights:
    - Adds extra vertical breathing room around the hero helper link (`Need technical evidence first →`).
    - Applies mobile-first spacing polish on contact page (tighter section spacing and cleaner form stack).
    - Reduces mobile scroll depth by turning contact overview into horizontal swipe cards and hiding redundant process block on small screens.

- Homepage hero visual hierarchy pass is implemented and queued for commit.
  - Files:
    - `index.html`
  - Highlights:
    - Rebalances hero copy panel width, title rhythm, and CTA spacing for cleaner first-screen scan.
    - Improves CTA button sizing and line rhythm on desktop while preserving existing conversion order.
    - Refines mobile first-screen hierarchy with stacked CTA buttons and tighter copy sizing.

- Final homepage + contact visual QA pass is implemented and queued for commit.
  - Files:
    - `index.html`
    - `contact.html`
    - `docs/homepage-contact-visual-qa-final-2026-04-18.md`
  - Highlights:
    - Adds extra top/bottom breathing room around homepage hero helper link and CTA cluster.
    - Applies final mobile-first spacing compression on contact page to reduce scroll depth.
    - Verifies homepage/contact internal link paths with a local existence check (no missing local href targets).

- Commit Batch 1 (blockers + medium cleanup) is implemented and queued for commit.
  - Files:
    - `index.html`
    - `about.html`
    - `plye.html`
    - `catalog.html`
    - `catalog-stone.html`
    - `contact.html`
    - `applications.html`
    - `projects.html`
    - `script.js`
    - `sitemap.xml`
    - `robots.txt`
  - Highlights:
    - Removes public homepage debug report exposure, keeps A/B toggle internal behavior intact.
    - Fixes dead language buttons on about/flooring pages and eliminates dead `#` nav links on production pages.
    - Adds missing canonical tags, adds `<main>` landmarks on catalog pages, fixes duplicate `id="residential"`, updates contact Twitter SLA wording, and replaces placeholder merchant links with valid support paths.

- Batch 2 (contact endpoint + no-downtime flooring rename) is implemented and queued for commit.
  - Files:
    - `contact.html`
    - `flooring.html` (new primary flooring route)
    - `plye.html` (compatibility redirect)
    - `index.html`
    - `catalog.html`
    - `catalog-stone.html`
    - `applications.html`
    - `projects.html`
    - `about.html`
    - `nalexible-stone.html`
    - `nalexible-fiberboard.html`
    - `sitemap.xml`
  - Highlights:
    - Replaces mail-client-only submission flow with direct endpoint submission (`formsubmit` AJAX) and keeps mailto fallback.
    - Keeps backward compatibility by preserving `plye.html` as redirect to `flooring.html`.
    - Migrates production links and sitemap from `plye.html` to `flooring.html`.

- Pending (after current internal QA sign-off): Gemini independent QA pass.
  - Deliverables requested:
    - independent findings list (blocker/high/medium)
    - conversion-path verification (`Homepage -> Catalog -> Stone -> Contact`)
    - cross-device/cross-language spot-check notes
    - release recommendation (`GO` / `Conditional GO` / `NO-GO`)

- Batch 3 (homepage A/B test sunset) is implemented and queued for commit.
  - Files:
    - `index.html`
  - Highlights:
    - Removes top-right A/B switcher from production homepage.
    - Removes A/B variant class toggling/query handling and locks homepage to single live version.
    - Keeps conversion tracking in single-version mode.

- Gemini comprehensive review and QA testing is deferred until internal QA wrap-up is complete.
