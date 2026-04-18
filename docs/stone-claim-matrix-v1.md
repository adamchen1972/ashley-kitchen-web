# Stone Claim Matrix v1

Date: 2026-04-18
Owner: AshleyKitchen web content + conversion workstream
Scope: Nalexible stone claims to be used on AshleyKitchen EN website (EN-first)

## Inputs reviewed
- Local report bundle folder: `/Users/adamchen/Desktop/Nalexible/NALEXIBLE-检测报告/`
- Prior source docs: FAQ/data whitepapers and stone comparison/product-source PPTs
- External benchmark pass: nalexible.com (products/about/contact/lumislate category)

## Recommendation summary
- Keep AshleyKitchen-first narrative, but add a stronger technical-evidence layer.
- Split proof into two groups on site:
  - `Performance Reports` (test evidence)
  - `Certificates & IP` (patent/certificate/declaration)
- Do not publish hard numeric claims without report-page verification.
- Use conditional language (`tested for`, `supported by reports`) until per-report values are extracted and checked.

## Claim matrix (EN web publish guidance)

| ID | Proposed claim (EN) | Evidence files | Publish status | Risk | Suggested placement | Safe wording to publish now |
|---|---|---|---|---|---|---|
| C01 | Fire performance is tested for thin-stone applications | `nalexible-fire-test-report-cn.pdf`, `EFSN21070683C-C1.pdf`~`C4.pdf` | Conditional | Medium | `nalexible-stone.html` Technical Evidence | "Fire performance is supported by third-party test reports available on request." |
| C02 | Water absorption behavior is tested | `nalexible-water-absorption-test-jp.pdf` | Ready (non-numeric) | Low | `nalexible-stone.html` Proof card + Downloads | "Water absorption behavior has been evaluated in dedicated test reports." |
| C03 | Weathering/color stability has test basis | `nalexible-weathering-color-difference-test-jp.pdf`, `nalexible-outdoor-exposure-test-jp.pdf` | Ready (non-numeric) | Low | `nalexible-stone.html` Exterior section + Downloads | "Outdoor exposure and color-difference testing are available for review." |
| C04 | Freeze-thaw durability has test basis | `nalexible-freeze-thaw-test-jp.pdf` | Ready (non-numeric) | Low | `nalexible-stone.html` Exterior section + Downloads | "Freeze-thaw resistance has been tested for relevant use scenarios." |
| C05 | Heat and thermal-shock behavior is tested | `nalexible-heat-resistance-test-jp.pdf`, `nalexible-thermal-shock-test-jp.pdf` | Ready (non-numeric) | Low | `nalexible-stone.html` Technical Evidence | "Heat resistance and thermal shock behavior are documented in test reports." |
| C06 | Chemical resistance is tested | `nalexible-chemical-resistance-test-jp.pdf` | Ready (non-numeric) | Low | `nalexible-stone.html` Technical Evidence | "Chemical resistance testing is available in the technical dossier." |
| C07 | Surface abrasion and slip resistance are tested | `nalexible-surface-abrasion-test-jp.pdf`, `nalexible-slip-resistance-test-jp.pdf` | Ready (non-numeric) | Low | `catalog-stone.html` guardrail note + `nalexible-stone.html` downloads | "Surface abrasion and slip-related performance have dedicated test reports." |
| C08 | Product platform is backed by broader JP/CN test bundles | `nalexible-japan-test-report-jp.pdf`, `nalexible-japan-paint-association-test-report-jp.pdf`, `nalexible-test-report-bundle-cn.pdf` | Conditional | Medium | `nalexible-stone.html` Technical Evidence intro | "Additional region-specific report bundles (JP/CN) are available for project review." |
| C09 | Patent-backed technology positioning | `nalexible-patent-certificate-jp.pdf`, `nalexible-stone-design-certificate-cn.pdf` | Ready | Low | `about.html` and `nalexible-stone.html` credentials | "Core stone-system methods are supported by patent/certificate documentation." |
| C10 | Sustainability declaration exists | `nalexible-sdgs-declaration-jp.pdf` | Conditional | Medium | `about.html` sustainability section | "Sustainability declarations are available; project teams can request source documents." |
| C11 | Electrical compliance mention (LumiSlate system context) | `nalexible-pse-certificate-jp.pdf` | Conditional | High | `nalexible-stone.html` LumiSlate technical note only | "LumiSlate-related electrical components may require market-specific compliance review." |
| C12 | Fiberboard utility patent (not stone) | `nalexible-fiberboard-utility-patent-cn.pdf` | Not for stone page | Low | `nalexible-fiberboard.html` only | "Fiberboard patent evidence belongs to the fiberboard system page." |

## Claims to avoid until verified line-by-line
- Absolute statements: `100% no fading`, `no radiation risk`, `always safe`, `all standards passed`.
- Region-agnostic compliance claims without market scope.
- Exact numeric performance values unless the report page, method, and condition are cited.

## Site merge plan (what to add)

### 1) `nalexible-stone.html`
Add a new section: `Technical Evidence` with 3 blocks:
- Performance Reports
- Certificates & IP
- Test Scope Notes (conditions, standards, market applicability)

Also expand current resource actions from 2 links to the full curated report set (stone-only).

### 2) `catalog-stone.html`
Add `Specification Guardrails` above final CTA:
- "Pattern choice first; final application claim requires report-matched condition review."
- Link to `nalexible-stone.html#technical-evidence` and `contact.html?intent=spec`.

### 3) `contact.html`
Add intent options:
- `Technical report request`
- `Installation review`
- `Compliance package`

## nalexible.com comparison: what to absorb vs what to avoid

Absorb:
- Clear product-family hierarchy (Flexible Stone / UV / LumiSlate / EasyStone / 3D).
- Direct path from product story to report evidence.

Avoid copying:
- Repetitive blocks and duplicated marketing paragraphs.
- Broad claims without context or test-condition notes.

AshleyKitchen should stay more curated: less noise, higher proof clarity.

## Next deliverable (recommended)
Create `docs/stone-report-citation-sheet-v1.md` with per-file citations:
- report title
- issuing body
- date
- standard/method
- tested condition
- claim allowed on web
- claim forbidden on web

This citation sheet is required before publishing numeric values.
