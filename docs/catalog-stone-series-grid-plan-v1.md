# Catalog Stone Series Grid Plan v1

Date: 2026-04-17  
Owner: Codex (single owner, post-handover)

## Scope
This plan answers the 5 open questions for adding “all patterns” grids to the six remaining stone series:
- Cement (4001-4003)
- Marble (1011-1030)
- Sandstone (2011-2018)
- Metal (4101-4110)
- Copper/Rust (4111-4114)
- DIY (12 named patterns)

Constraint locked by Adam: **card labels are SKU code only**.

## 1) Structural treatment when per-pattern imagery is missing
Decision:
- **Cement:** use true per-pattern imagery (3 real assets mapped 1:1 to 4001/4002/4003).
- **Marble / Sandstone / Metal / Copper-Rust / DIY:** use **SKU-first placeholder tiles** (no fake generated textures, no misleading repeated “different” photos).
- Each tile shows:
  - SKU code label only
  - neutral catalog placeholder visual (consistent style)
  - fallback `onerror` handling
- Each series keeps one representative/application media strip below for persuasion.

Reason:
- Avoids misleading users with duplicated imagery pretending to be pattern-specific.
- Keeps structure shippable now while preserving a clean upgrade path when true per-SKU images arrive.

## 2) Placement and sizing
Decision:
- Insert each new series grid **above** the existing `family-media-grid` in that series section.
- Tile sizing: keep Ordinary consistency with a square system:
  - `grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))`
  - 1:1 tile visual block

Reason:
- Supports IA rule: first browse SKUs, then read representative applications/spec context.

## 3) DIY naming vs SKU-only rule
Decision:
- Apply SKU-only rule literally by introducing temporary catalog codes:
  - `DIY-01` … `DIY-12`
- Keep internal mapping to source names in data only (not rendered in tile labels).

Reason:
- Respects Adam’s SKU-only requirement now.
- Keeps deterministic labels and avoids mixing naming conventions inside one page.

## 4) Page-length control
Decision:
- Use per-series progressive disclosure:
  - show first 8 tiles by default
  - add `Show all patterns →` / `收合` toggle per series
- Do not force one long full-scroll by default.

Reason:
- Catalog remains skimmable while still providing complete inventory on demand.

## 5) Sanity check against strategy docs
Result:
- This plan is aligned with:
  - `docs/stone-web-ia-v1.md` (family-first browse, then deeper reading)
  - `docs/catalog-split-plan-v1.md` (stone page as deep library)
  - `docs/stone-systems-overview-production-checklist.md` (separation of overview proof vs full library)
- No conflict with current brand/IA direction.

## Implementation notes (for execution)
- Add bilingual keys for new controls in `T` dictionary (expand/collapse labels, placeholder notes).
- Keep accessibility:
  - keyboard focus states on tiles/toggles
  - `aria-expanded` on show-all toggles
  - `aria-pressed` only where true toggle semantics apply
- Keep resilient image handling (`onerror`) and avoid broken-image icons.

## Ready-to-build status
Approved implementation path: **ready** once Adam confirms this v1 plan.
