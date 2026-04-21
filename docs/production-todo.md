# Production Todo / Commit Log

## 2026-04-21 (Deferred Follow-up Queue — remind Adam proactively)

- Deferred item 2 (bulk untracked materials cleanup):
  - Scope: sort and deduplicate untracked image/source files under `assets/nalexible/stone/**`, `images/fiberboard/refine/**`, and non-final working outputs in `docs/**`.
  - Rule: do not mix with active webpage commits; run as a dedicated hygiene batch when current web QA cycle is fully stable.
  - Reminder policy: proactively notify Adam before starting this cleanup batch.

- Deferred item 3 (Claude.ai handoff after availability window):
  - Earliest start: after `2026-04-24 09:00` (Asia/Taipei), when Claude.ai is available again.
  - Scope: brochure consolidation/review package and cross-check with latest EN-site state.
  - Reminder policy: proactively notify Adam at/after the window so he can trigger Claude.ai with the final prompt.

## 2026-04-21 (Status Reset)

- Current focus (in progress): `catalog.html` Fiberboard flow refinement (use-case mapping clarity + visual consistency).
  - Files: `catalog.html`, `script.js`
  - Updates:
    - Step 1 CTA copy normalized to a neutral flow action (`Open use-case map →`).
    - Use-case visual tiles aligned to clearer application semantics:
      - Quiet Door → `images/fiberboard/master/brochure-mixed/nalexible-brochure-p008-i029.jpg`
      - Room Divider → `images/fiberboard/fb-commercial-partitions.jpg`
      - Wall / Panel → `images/fiberboard/fb-door-wall-panel-system.jpg`
      - Furniture / Joinery → `images/fiberboard/fb-joinery-builtin.jpg`

- Batch status snapshot:
  - Batch 1–5: completed (see `2026-04-19 Batch Reconciliation` below).
  - Latest completed commit in repo history: `8114c88` (iPad tab-anchor QA log).
  - Outstanding work is now incremental polish only (no unresolved core blocker batch).

- Note:
  - The large `Pending (Execution Queue)` block below contains historical queue items and should be treated as archived context unless explicitly re-opened.

## 2026-04-21 (Clean Batch — catalog-stone + fiberboard + status sync)

- `pending (current commit batch)` — Finalize stone tab-jump behavior + fiberboard engineering finish + todo sync.
  - `catalog-stone.html`
  - `catalog.html`
  - `script.js`
  - `docs/production-todo.md`
  - Highlights:
    - Hardens `catalog-stone` series-tab jump alignment with extended post-jump/post-rotation correction passes (mobile landscape + iPad rotation stability).
    - Finishes `catalog.html` Fiberboard engineering block wording:
      - Step 2 includes explicit thickness range (`17.5 / 25 / 35mm`).
      - Core-combination copy normalized to narrow→thick logic.
      - Decision Block 3 title normalized to `Face Boards + Spec Path`.
      - Use-case map CTA and use-case visual mapping kept consistent.
    - Updates production log to reflect latest real active batch state.

- `5d0725c` — iPhone Safari routing hardening for stone family entry points.
  - `catalog.html`
  - `catalog-stone.html`
  - Highlights:
    - Forces reliable navigation from stone family routing cards (including DIY) on iPhone Safari via explicit `location.assign` handling.
    - Adds additional hash/pageshow alignment passes to stabilize deep-link anchor landing after browser back/forward behavior.
    - Confirms `LumiSlate / Marble / DIY` entry flow lands at readable section headers on iPhone test path.

## 2026-04-20

- `pending (current commit)` — Fix iPad stone-tab anchor occlusion after orientation change + QA closure.
  - `catalog-stone.html`
  - `docs/mobile-qa-pass-2026-04-20-catalog-stone-tabs.md`
  - Highlights:
    - Adds series-level `scroll-margin-top` for anchor safety under sticky header/nav bars.
    - Refines tab jump offset logic for tablet landscape/portrait.
    - Adds post-rotation realignment flow (`orientationchange` + `resize` + `visualViewport.resize`) to keep section titles fully visible.
    - Real-device validation passed on iPhone, Android, and iPad (portrait/landscape/rotation).

## 2026-04-19 Coordination Note

- Brochure track is intentionally deferred.
- Resume brochure discussion/revisions only after EN website round is fully completed and QA-closed.

## 2026-04-19 Brochure Action List (deferred until web Round 2 completes)

- Source: Claude.ai brochure comprehensive review feedback (latest).
- Execution rule: hold brochure edits until current web Round 2 closes.

- Priority A (must-fix before print release):
  - Validate page-level logic continuity (problem -> system -> evidence -> sample CTA) with no duplicated claims.
  - Tighten claim guardrails (no over-claim wording; keep test/evidence wording traceable).
  - Re-check high-risk pages for visual/content mismatch and remove any placeholder/mockup-style composition.

- Priority B (quality polish before print handoff):
  - Improve caption precision and tone consistency on technical spreads.
  - Rebalance dense pages for hierarchy/readability while preserving current structure.
  - Final proof pass for EN/TC naming consistency and material code alignment.

- Deliverables when brochure round starts:
  - `docs/brochure-round2-action-plan-v1.md`
  - `docs/brochure-round2-qa-checklist-v1.md`
  - final print-ready file comparison note (changed pages only).

## 2026-04-19 Batch Reconciliation (Gemini follow-through)

- Batch 1: Completed and committed.
  - Commit: `826f83d`
  - Scope: launch blockers + medium cleanup.

- Batch 2: Completed and committed.
  - Commit: `679f3d3`
  - Scope: contact endpoint flow + `flooring.html` route migration.

- Batch 3: Completed and committed.
  - Commit: `4945320`
  - Scope: homepage A/B sunset (single live variant only).

- Batch 4: Completed and committed.
  - Commit: `ae1be8b`
  - Scope: brand-safe copy + contact funnel slimming + mobile tap-target polish.

- Batch 5: Completed and committed.
  - Commit: `e5ad822`
  - Scope: approved pattern swaps + freeze documentation.

- Batch 5 patch (library correctness lock):
  - Status: Completed locally (to be included in next commit).
  - Scope:
    - `7014` locked to approved `B` source in image library.
    - `4112` locked to approved `A` source in image library.
    - `docs/catalog-stone-pattern-freeze-v1.md` updated to final accepted decisions.

- Result:
  - All planned batches are functionally closed.
  - Remaining work is optional post-batch optimization / independent external QA reruns only.

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

## Archived Backlog (Historical — superseded, re-open only if needed)

- `2026-04-18 17:00 (Asia/Taipei)` — Claude.ai brochure v8 print-fix pass.
  - Target output:
    - `docs/brochure/ashley-kitchen-stone-systems-overview-final-facade-v8-p9-balance-p14-canonical.pdf`
  - Scope:
    - Page 9: rebalance the 3-layer diagram vertical position inside the technical card.
    - Page 14: remove incorrect 7013/7014 base images and place canonical slab images from PPT p16/p17 (not overlay).
  - Source refs:
    - `docs/brochure/sources/lumislate-source-zh.pptx`
    - `docs/brochure/sources/nalexible-product-materials-zh.pptx`

## Archived Queue (Historical implementation notes)

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

- Batch 4 (brand-safe copy + contact funnel slimming + mobile tap-target polish) is committed.
  - Commit:
    - `ae1be8bdde3d838575380576579435b86efde6b0`
  - Files:
    - `index.html`
    - `catalog.html`
    - `catalog-stone.html`
    - `contact.html`
    - `projects.html`
    - `applications.html`
    - `about.html`
    - `flooring.html`
    - `docs/en-site-qa-closing-report-v3.md`
  - Highlights:
    - Converts exposed flooring naming from `ORIGIN/ORG` to Ashley Kitchen-safe wording and `AK-F-*` visible codes.
    - Reduces contact required fields to `Name + Email + Product Interest` and moves other fields into a collapsible optional panel.
    - Removes hard phone requirement and keeps AJAX endpoint submit flow with fallback behavior.
    - Applies 44px touch-target minimum to key CTA/lang/nav controls in the active EN funnel pages.
    - Runs link-integrity checks for `index -> catalog -> catalog-stone -> contact` and reports no broken local links in scoped pages.
