# Step 3 QA Pass (2026-04-18)

Scope: Homepage + catalog routing improvements, EN/ZH key integrity, and link-path integrity.

## 1) Desktop/mobile structure sanity
- Verified responsive breakpoints exist for updated homepage and catalog flows:
  - `index.html`: desktop, tablet, mobile breakpoints around `1100px`, `768px`, `560px`.
  - `catalog.html`: routing-grid responsive behavior around `980px`, `760px`, `560px`.
  - `catalog-stone.html`: LumiSlate grid and series grid responsive behavior around `1200px`, `1000px`, `900px`, `700px`.
- Result: PASS (static/CSS structure check).

## 2) EN/ZH toggle key integrity
- Checked `data-i18n` keys used in:
  - `index.html`
  - `catalog.html`
  - `catalog-stone.html`
- Verified all referenced keys exist in `script.js`.
- Added dedicated stone-page header keys to avoid cross-page ID collisions:
  - `cat-stone-bc-home`
  - `cat-stone-bc-parent`
  - `cat-stone-bc-label`
  - `cat-stone-title`
  - `cat-stone-desc`
- Result: PASS.

## 3) Link-path and anchor integrity
- Ran local href checks across root HTML files.
- Fixed production anchor mismatches:
  - `plye.html#diy-installation` now resolves (section id updated).
  - `plye.html#gallery` now resolves (anchor added).
  - `nalexible-stone.html#lumislate` now resolves (section id updated).
- Remaining misses are in legacy variant pages only:
  - `plye-b.html` (`#main`, `#plye-section`)
  - `plye-c.html` (`#main`)
- Result: PASS for production pages; legacy variants carry residual anchor debt.

## 4) Files touched in this QA pass
- `/Users/adamchen/Desktop/web_dev/catalog.html`
- `/Users/adamchen/Desktop/web_dev/catalog-stone.html`
- `/Users/adamchen/Desktop/web_dev/index.html`
- `/Users/adamchen/Desktop/web_dev/script.js`
- `/Users/adamchen/Desktop/web_dev/plye.html`
- `/Users/adamchen/Desktop/web_dev/nalexible-stone.html`
- `/Users/adamchen/Desktop/web_dev/docs/website-structure-execution-order-v1-2026-04-18.md`
