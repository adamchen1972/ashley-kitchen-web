# Step 5 A/B QA Pass (Desktop/Mobile + EN/ZH + CTA Paths)

Date: 2026-04-18
Owner: Codex
Scope: `index.html` conversion polish + A/B behavior consistency checks

## 1) QA Checklist

- A/B toggle behavior
  - `?ab=a` and `?ab=b` both load correctly.
  - Toggle button now writes normalized URL params (`ab=a` / `ab=b`) while preserving internal variant state (`old` / `new`).
- Link-path integrity
  - Scanned all local `href` targets across `*.html`.
  - Result: no broken local links found.
- EN/ZH toggle safety
  - Scanned all `data-i18n` keys in HTML against `script.js` dictionary.
  - Result: no missing keys.
- CTA path checks (homepage)
  - Hero CTA, Next-step CTA group, Sticky CTA all route to valid targets.
  - Added explicit `data-ab-track` markers for Next-step links.
- Mobile readiness (code-level pass)
  - Existing responsive breakpoints and CTA min-height rules confirmed.
  - No regression detected in nav/CTA class structure.

## 2) Fixes Applied in This Pass

- Conversion hierarchy polish (hero)
  - Primary CTA switched to `Request a Sample`.
  - Secondary CTA switched to `Explore Catalog`.
- Next-step conversion copy polish
  - Tightened wording for sample request intent.
  - Added analytics tags to all next-step links.
- Sticky CTA polish
  - Copy now emphasizes shortlist + sample support.
  - Button now routes to sample-first contact flow.
- A/B URL consistency bug fix
  - Toggle now writes `?ab=a` and `?ab=b` instead of `old/new`.

## 3) Changed File(s)

- `index.html`
