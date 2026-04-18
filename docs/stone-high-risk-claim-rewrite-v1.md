# Stone High-Risk Claim Rewrite v1

Date: 2026-04-18
Scope: Stone-related web copy risk reduction (EN-first, with ZH-safe rewrites)
Related: `docs/stone-claim-matrix-v1.md`

## How to use this sheet
- `Risky claim` = wording likely to create legal/commercial dispute risk.
- `Safe rewrite` = publish-ready wording before full per-report numeric citation.
- Keep hard numbers only when a report page + test condition is cited.

## A. Red flags you should avoid

1. Absolute performance
- Examples: `100% no fading`, `will not crack`, `always safe`, `never fails`.

2. Cross-market compliance without scope
- Examples: `compliant worldwide`, `meets all standards`.

3. Certificate-to-performance confusion
- Examples: using patent/certificate as direct proof of fire/chemical/weathering performance.

4. Unbounded comparative claims
- Examples: `better than all competitors`, `stronger than any stone product`.

## B. High-risk rewrite table (stone-focused)

| ID | Risky claim (do not publish) | Why risky | Safe EN rewrite (publish now) | Safe ZH rewrite | Suggested web location |
|---|---|---|---|---|---|
| S01 | 100% natural stone (as full-system claim) | Backing/resin layer may cause ambiguity | Natural-stone surface with engineered backing for flexible installation. | 天然石材表面，搭配工程化背材以支援柔性安裝。 | `catalog.html`, `catalog-stone.html`, `nalexible-stone.html` |
| S02 | Fireproof / completely fire safe | Absolute safety claim | Fire-related performance is supported by third-party test reports available for project review. | 防火相關性能有第三方測試報告，可供專案審閱。 | `nalexible-stone.html` Technical Evidence |
| S03 | Waterproof | Over-broad in all conditions | Water-absorption behavior has been evaluated under defined test conditions. | 吸水行為已在特定測試條件下完成評估。 | `nalexible-stone.html` proof/download |
| S04 | No fading outdoors | Absolute long-term claim | Outdoor exposure and color-difference testing are available; final performance depends on installation context. | 已提供戶外曝曬與色差測試；最終表現仍受安裝條件影響。 | `nalexible-stone.html` exterior |
| S05 | Suitable for any substrate | Too broad for real sites | Suitable substrate selection should follow installation guidance and project condition checks. | 適用基材需依施工指引與專案條件確認。 | `catalog-stone.html` guardrail |
| S06 | Works on all curved surfaces | Radius/format limits exist | Curved-surface use is supported; minimum bend radius should be validated by product and test condition. | 支援曲面應用；最小彎曲半徑需依產品與測試條件確認。 | `catalog-stone.html`, `nalexible-stone.html` |
| S07 | Faster installation than traditional stone (unqualified) | Missing method/team assumptions | Installation efficiency can be improved in relevant scenarios; verify method, labor setup, and substrate condition first. | 在特定情境可提升施工效率；需先確認工法、人力配置與基材條件。 | `nalexible-stone.html` comparison |
| S08 | Safer than traditional stone | Undefined safety dimension | Lower handling burden may improve site operations in some projects; use project-specific safety review. | 較低搬運負擔可在部分專案改善現場作業，仍需專案安全評估。 | `nalexible-stone.html` comparison |
| S09 | Chemical-proof surface | Absolute resistance claim | Chemical resistance has been evaluated in dedicated tests; match cleaner/agent type before use. | 耐化學性已完成專項測試；實際使用前請先對應清潔/藥劑種類。 | `nalexible-stone.html` technical |
| S10 | Slip-proof surface | Absolute safety claim | Slip-related performance is test-documented; final slip safety depends on finish and site condition. | 防滑相關性能有測試依據；最終防滑安全仍取決於表面處理與現場條件。 | `nalexible-stone.html`, `catalog-stone.html` |
| S11 | Thermal-shock proof | Absolute durability claim | Thermal shock behavior has been tested under defined methods and conditions. | 熱衝擊表現已在定義的測試方法與條件下驗證。 | `nalexible-stone.html` technical |
| S12 | Fully compliant in JP/CN/EU | Jurisdiction mismatch risk | Region-specific reports are available; compliance should be confirmed by target market and project spec. | 提供地區性報告；合規需依目標市場與專案規格再確認。 | `contact.html` + technical evidence |
| S13 | Patent-certified performance | Patent != performance test | Patent/certificate documents support technology identity; performance claims rely on test reports. | 專利/證書可支持技術身份；性能主張需以測試報告為準。 | `about.html`, `nalexible-stone.html` |
| S14 | Zero risk for project use | Legal exposure | We provide report-backed guidance to reduce decision risk before final specification. | 我們提供報告支持的選材指引，以降低最終規格前的決策風險。 | `catalog-stone.html` footer note |

## C. Immediate text replacements (recommended)

1. Replace `100% Natural Stone` badge
- EN: `Natural-stone surface system`
- ZH: `天然石材表面系統`

2. Replace broad `flame retardant` one-liner where no citation nearby
- EN: `Fire-related performance supported by test reports`
- ZH: `防火相關性能有測試報告支持`

3. Add one universal technical disclaimer near CTA/downloads
- EN: `Report applicability depends on test method, substrate, and project conditions.`
- ZH: `報告適用性取決於測試方法、基材與專案條件。`

## D. Publish policy (until citation sheet is done)

- Allowed now:
  - "tested for", "supported by reports", "available for project review"
- Hold for later (needs per-file citation sheet):
  - exact numbers, exact grades, unconditional superiority claims

## E. Next step

Create `docs/stone-report-citation-sheet-v1.md` with each report's:
- claim-ready fields (issuer/date/standard/method/condition)
- allowed claim text
- blocked claim text

Only after that should numeric claim copy be deployed on live pages.
