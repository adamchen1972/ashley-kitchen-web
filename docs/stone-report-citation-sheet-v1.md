# Stone Report Citation Sheet v1

Date: 2026-04-18
Owner: AshleyKitchen website content governance
Scope: Stone-related claims only (EN-first publishing control)
Related docs:
- `docs/stone-claim-matrix-v1.md`
- `docs/stone-high-risk-claim-rewrite-v1.md`

## Purpose
This sheet is the gate before publishing numeric or standard-based claims on the website.
A claim may be upgraded from "safe generic" to "specific numeric" only after the required citation fields are completed.

## Citation rule (must pass all)
1. Report file identified.
2. Issuing lab/organization captured.
3. Standard/method captured (for example JIS / GB / ASTM code).
4. Test condition captured (sample type, environment, setup).
5. Evidence page number captured.
6. Allowed wording reviewed and approved.

If any field is missing, do **not** publish exact numbers or absolute wording.

## Status legend
- `PENDING_EXTRACTION`: file listed, citation fields not yet extracted.
- `SAFE_GENERIC_ONLY`: non-numeric claim allowed.
- `NUMERIC_BLOCKED`: numeric/grade claim blocked until citation is complete.
- `NOT_STONE_SCOPE`: do not use on stone pages.

## Master citation table

| File | Category | Intended claim area | Issuer | Standard / Method | Test condition | Evidence page | Market scope | Citation status | Allowed now (safe generic) | Blocked until verified |
|---|---|---|---|---|---|---|---|---|---|---|
| `EFSN21070683C-C1.pdf` | Performance report bundle | Fire/performance support | TBD | TBD | TBD | TBD | TBD | PENDING_EXTRACTION | Third-party performance report available for review. | Any exact grade/value statement |
| `EFSN21070683C-C2.pdf` | Performance report bundle | Fire/performance support | TBD | TBD | TBD | TBD | TBD | PENDING_EXTRACTION | Third-party performance report available for review. | Any exact grade/value statement |
| `EFSN21070683C-C3.pdf` | Performance report bundle | Fire/performance support | TBD | TBD | TBD | TBD | TBD | PENDING_EXTRACTION | Third-party performance report available for review. | Any exact grade/value statement |
| `EFSN21070683C-C4.pdf` | Performance report bundle | Fire/performance support | TBD | TBD | TBD | TBD | TBD | PENDING_EXTRACTION | Third-party performance report available for review. | Any exact grade/value statement |
| `nalexible-fire-test-report-cn.pdf` | Performance report | Fire-related performance | TBD | TBD | TBD | TBD | CN / project-specific | SAFE_GENERIC_ONLY | Fire-related performance is supported by test reports. | Fire grade/class numbers |
| `nalexible-water-absorption-test-jp.pdf` | Performance report | Water absorption behavior | TBD | TBD | TBD | TBD | JP / project-specific | SAFE_GENERIC_ONLY | Water-absorption behavior has been evaluated by test. | Absorption percentages/thresholds |
| `nalexible-weathering-color-difference-test-jp.pdf` | Performance report | Outdoor color stability | TBD | TBD | TBD | TBD | JP / project-specific | SAFE_GENERIC_ONLY | Weathering and color-difference testing is available. | Delta-E values / long-term guarantees |
| `nalexible-outdoor-exposure-test-jp.pdf` | Performance report | Outdoor exposure | TBD | TBD | TBD | TBD | JP / project-specific | SAFE_GENERIC_ONLY | Outdoor exposure testing is available for review. | Unconditional no-fade claims |
| `nalexible-freeze-thaw-test-jp.pdf` | Performance report | Freeze-thaw durability | TBD | TBD | TBD | TBD | JP / project-specific | SAFE_GENERIC_ONLY | Freeze-thaw behavior has been tested. | Exact cycle/performance numbers |
| `nalexible-heat-resistance-test-jp.pdf` | Performance report | Heat resistance | TBD | TBD | TBD | TBD | JP / project-specific | SAFE_GENERIC_ONLY | Heat resistance has been evaluated by testing. | Temperature limit claims |
| `nalexible-thermal-shock-test-jp.pdf` | Performance report | Thermal shock behavior | TBD | TBD | TBD | TBD | JP / project-specific | SAFE_GENERIC_ONLY | Thermal-shock behavior is test-documented. | Exact thermal shock pass/fail metrics |
| `nalexible-chemical-resistance-test-jp.pdf` | Performance report | Chemical resistance | TBD | TBD | TBD | TBD | JP / project-specific | SAFE_GENERIC_ONLY | Chemical resistance testing is available. | "Chemical-proof" absolute claims |
| `nalexible-surface-abrasion-test-jp.pdf` | Performance report | Surface abrasion | TBD | TBD | TBD | TBD | JP / project-specific | SAFE_GENERIC_ONLY | Surface abrasion performance is test-documented. | Exact abrasion class/rating |
| `nalexible-slip-resistance-test-jp.pdf` | Performance report | Slip behavior | TBD | TBD | TBD | TBD | JP / project-specific | SAFE_GENERIC_ONLY | Slip-related performance has test support. | Slip-proof absolute claims |
| `nalexible-japan-test-report-jp.pdf` | Aggregated report bundle | Regional technical support | TBD | TBD | TBD | TBD | JP | PENDING_EXTRACTION | Region-specific test bundle available. | Any specific numeric claim without page citation |
| `nalexible-japan-paint-association-test-report-jp.pdf` | Association test report | Surface/paint interaction | TBD | TBD | TBD | TBD | JP | PENDING_EXTRACTION | Association report available for project review. | Method/result specifics |
| `nalexible-test-report-bundle-cn.pdf` | Aggregated report bundle | Regional technical support | TBD | TBD | TBD | TBD | CN | PENDING_EXTRACTION | Region-specific report bundle available. | Any specific numeric claim without page citation |
| `nalexible-patent-certificate-jp.pdf` | Patent/certificate | Technology identity | TBD | N/A | N/A | TBD | JP | SAFE_GENERIC_ONLY | Patent/certificate documents support technology identity. | Performance claim derived from patent alone |
| `nalexible-stone-design-certificate-cn.pdf` | Design certificate | Design/IP credential | TBD | N/A | N/A | TBD | CN | SAFE_GENERIC_ONLY | Stone design credential documentation is available. | Performance claim derived from design certificate |
| `nalexible-pse-certificate-jp.pdf` | Compliance certificate | Electrical/compliance context (LumiSlate-adjacent) | TBD | TBD | TBD | TBD | JP | PENDING_EXTRACTION | Compliance documents can be reviewed by project market. | Cross-market compliance claim |
| `nalexible-sdgs-declaration-jp.pdf` | Declaration | Sustainability messaging | TBD | N/A | N/A | TBD | JP | SAFE_GENERIC_ONLY | Sustainability declaration documents are available. | Quantified ESG claims without evidence linkage |
| `nalexible-fiberboard-utility-patent-cn.pdf` | Patent/certificate | Fiberboard-only credential | TBD | N/A | N/A | TBD | CN | NOT_STONE_SCOPE | Use only on fiberboard page. | Any use on stone pages |

## Page mapping (current AshleyKitchen)

### `nalexible-stone.html`
- Keep claims in `SAFE_GENERIC_ONLY` level until citation fields are completed.
- Add a `Technical Evidence` section that groups:
  - Performance reports
  - Certificates & IP
  - Scope note by market

### `catalog-stone.html`
- Add one guardrail note near final CTA:
  - "Report applicability depends on test method, substrate, and project conditions."

### `contact.html`
- Add intent options for technical requests:
  - Technical report request
  - Installation review
  - Compliance package

## Upgrade workflow (to numeric claims)
1. Fill citation fields per file (Issuer / Standard / Condition / Page).
2. Draft numeric claim candidates in a separate section.
3. Legal/content owner review.
4. Deploy numeric claim copy with report-page citation reference in docs.

## Current decision
- Website may publish report-backed generic wording now.
- Numeric values, grade levels, and absolute wording remain blocked.
