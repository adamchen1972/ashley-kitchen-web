# Mobile QA Pass — Catalog-Stone Tab Anchors (2026-04-20)

## Scope

- Page: `catalog-stone.html`
- Feature: Stone series tab jumps (`LumiSlate`, `Marble`, `DIY`) and in-page anchor alignment under sticky bars.
- Devices:
  - iPhone (real device)
  - Android (real device)
  - iPad (real device; portrait + landscape + live rotation)

## Issue Found

- On iPad, series titles could be covered by sticky header/nav bars after orientation changes.
- Initial state was often correct, but `portrait -> landscape` or `landscape -> portrait` could shift the anchor to an incorrect visual position.

## Fix Implemented

- Added explicit `scroll-margin-top` to all stone series anchors:
  - `#series-ordinary`
  - `#series-lumislate`
  - `#series-cement`
  - `#series-marble`
  - `#series-sandstone`
  - `#series-metal`
  - `#series-rust`
  - `#series-diy`
- Added responsive `scroll-margin-top` overrides for tablet/mobile breakpoints.
- Updated tab jump logic to use dynamic sticky offset (`getSeriesJumpOffset()`), including landscape tablet padding.
- Added orientation/viewport re-alignment logic:
  - Tracks currently active series (`window.__stoneCurrentSeries`)
  - Re-aligns after rotation/resize with staged retries (`120/320/620/980/1280ms`)
  - Includes `visualViewport.resize` listener for iPad Safari behavior.

## Verification Result

- iPad portrait: `LumiSlate`, `Marble`, `DIY` titles remain visible after tab jump.
- iPad landscape: `LumiSlate`, `Marble`, `DIY` titles remain visible after tab jump.
- Rotation behavior:
  - `portrait -> landscape`: title auto-corrects to proper position.
  - `landscape -> portrait`: title auto-corrects to proper position.
- User-confirmed final status: **PASS**.

## Final Status

- `catalog-stone.html` tab/anchor visibility blocker: **Closed**.
