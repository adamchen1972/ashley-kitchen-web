# Step 4 Funnel UAT (5 Scenarios) — 2026-04-18

## Goal
Validate the new sample-request funnel end-to-end:
- Contextual CTA routing (`intent`, `product`, `from`)
- Contact form prefill behavior
- Required-field and phone validation
- Mail draft handoff and fallback guidance

## Scenario 1 — Homepage Hero Sample CTA
- Entry URL: `index.html`
- Click: Hero `Request a Sample`
- Expected:
  - Opens `contact.html?intent=sample&product=multiple&from=homepage-hero`
  - Contact form pre-fills message with sample intent
  - Product defaults to `Multiple Products`
- Result: Pass

## Scenario 2 — Catalog Stone Sample CTA
- Entry URL: `catalog-stone.html`
- Click: Header/Footer `Request a Sample`
- Expected:
  - Opens with `intent=sample&product=stone`
  - Product interest defaults to `Stone Systems`
  - Message prefill states physical sample request
- Result: Pass

## Scenario 3 — Flooring Spec CTA
- Entry URL: `plye.html`
- Click: `Ask About Compliance` (spec-focused CTA)
- Expected:
  - Opens with `intent=spec&product=flooring`
  - Product defaults to `Flooring Engineered Flooring`
  - Message prefill requests technical/spec docs
- Result: Pass

## Scenario 4 — Validation Guardrail (No Phone)
- Entry URL: `contact.html`
- Action:
  - Fill required fields but leave both phone fields empty
  - Submit form
- Expected:
  - Form blocked
  - Inline phone error shown
  - Focus moves to phone field
- Result: Pass

## Scenario 5 — Mail Handoff + Fallback Copy
- Entry URL: `contact.html?intent=project&product=multiple&from=homepage-sticky`
- Action: Fill valid form and submit
- Expected:
  - Submit button shows opening state
  - Email draft opens with structured body fields
  - Fallback message appears if mail app does not open
  - Button label restores by language
- Result: Pass

## Edge Cases Fixed During UAT
1. Prefill message now includes selected product when available (for clearer user context).
2. Submit button reset text now respects language (`EN` / `ZH`) after handoff.
3. Added explicit fallback feedback when mail client does not auto-open.

## Automation/Static Checks
- Programmatic CTA param validation across funnel pages:
  - `cta_links_checked=18`
  - `all routing params valid`
- Local href integrity check:
  - No missing local targets in top-level HTML files.
