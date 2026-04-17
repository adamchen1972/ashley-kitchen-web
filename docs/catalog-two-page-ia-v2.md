# Catalog IA v2 — `catalog.html` + `catalog-stone.html`

Date: 2026-04-17  
Owner: Codex

## Objective
Bring users back to the site and help them quickly discover:
1. Ashley Kitchen has 8 stone series.
2. Every series has selectable patterns/SKUs.
3. Sample/inquiry is the next action after shortlist.

## Page Roles
### `catalog.html` (short routing page)
- Purpose: orientation + routing.
- Length target: short and skimmable.
- Core content:
  1. Value proposition header.
  2. 8-series family card map (name, count, one representative image).
  3. 3-step selection guide (family -> pattern code -> sample request).
  4. Primary CTA to `catalog-stone.html`.

### `catalog-stone.html` (deep selector page)
- Purpose: actual pattern discovery and shortlist.
- Core content:
  1. Family tabs for all 8 series.
  2. Per-series pattern grids (SKU-first).
  3. LumiSlate interactive module (22 patterns x 4 light states).
  4. Supporting spec/application blocks below each grid.
  5. End-of-page conversion block to request samples.

## UX Rules
1. `catalog.html` should not duplicate full swatch libraries.
2. `catalog-stone.html` should not hide inventory; all series must be browsable.
3. Keep the path obvious: "See family" -> "Pick code" -> "Request sample".
4. Keep Ashley Kitchen as lead brand voice.
5. Any new string should remain bilingual-ready (EN/ZH).

## Implementation Sequence
1. Convert `catalog.html` into a routing-focused page.
2. Keep `catalog-stone.html` as the deep pattern selector and tighten guidance copy.
3. Verify SKU coverage and count consistency for all 8 series.
4. QA for desktop/mobile readability and anchor navigation.
