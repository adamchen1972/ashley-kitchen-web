# HANDOFF — Ashley Kitchen Website (ChatGPT / Codex pickup)

> **Date:** 2026-04-17
> **Author:** Claude (Cowork mode) — prepared for Adam
> **Recipient:** ChatGPT / Codex
> **Repo:** [`adamchen1972/ashley-kitchen-web`](https://github.com/adamchen1972/ashley-kitchen-web) — branch `main`
> **Local mount (new MacBook Pro):** `/Users/adamchen/Desktop/web_dev`
>   (Old path `/Users/adam/Desktop/web_dev/` still appears in `README.md` — update on next commit.)

---

## 0. TL;DR for ChatGPT

Adam has moved to a new MacBook Pro. The full `web_dev` tree and the `Nalexible` asset folder are already on the machine. Nothing is lost. The site is a static multi-page build (no framework, no build step). Claude and ChatGPT will **work in parallel** on two workstreams — see §5 *Work Split* — and must respect the conflict-avoidance rules in §8.

Two objectives in this round:

1. **Catalog polish.** Finish `catalog.html` and `catalog-stone.html` UI/UX. Specifically: verify/fix the LumiSlate "4 color variant" buttons, and make sure all 8 stone series have their pattern imagery embedded on `catalog-stone.html`.
2. **Cosentino-benchmarked restructure.** Raise `index.html`, the nav bar, and overall information architecture toward Cosentino-class clarity — optionally surface a "supplier brands" treatment (see §4 for constraints).

---

## 0.4 Handover: Claude → Codex (2026-04-17, session end)

Claude reached ~90 % of its session limit and is handing off its entire Task 1 workload to ChatGPT / Codex. Codex now owns **both** Task 1 (catalog polish) and Task 2 (homepage + site structure) from this point forward. The file-ownership split in §0.5 / §5 below no longer applies as a two-party rule — Codex is the single owner of all production files.

**What Claude delivered before signing off:**

- This `HANDOFF.md` (required reading).
- `_lumislate-mockup.html` at the repo root — iterated v1 → v5. **v5 is Adam-approved.** It's the reference design for the LumiSlate section inside `catalog-stone.html`. Open it in a browser to see the intended end state.
- Asset audit of `assets/nalexible/stone/lumislate-study/` — each of the 22 pattern folders contains 4 lighting-state scenes (`off/cold/natural/warm_scene.jpg`) + matching swatches. There are no "4 color variants per pattern" images; the 22 patterns ARE the 22 colors. See §9.
- Resolution of the three open questions in §9 (LumiSlate feature-add scope, supplier brands deferred, `resources.html` deferred).

**What Codex inherits:**

See §7 "Definition of done." The approved LumiSlate design (mockup v5) must be integrated into `catalog-stone.html`, replacing the current broken left-chip + empty-right-panel layout. Plus the remaining Task 1 items: 8-series imagery audit (DIY Adhesive first), catalog card/button styling unification, and eventual deletion of `stone-catalog.html`. Plus all of Task 2 as originally scoped.

**Quality gates preserved in the mockup** (must survive integration): `aria-pressed` state, ArrowLeft/Right/Up/Down keyboard navigation, fade transition on pattern swap, graceful `onerror` handler for missing assets. Bilingual (`data-i18n` + `T` dictionary) discipline to be applied at integration time — the mockup uses English placeholders only.

---

## 0.5 Confirmed split & action items (2026-04-17)

*(Superseded by §0.4 — Codex is now single owner. Kept for historical context of the original plan.)*


**Scope confirmation (signed off by Adam, 2026-04-17):**

- **Claude** is in charge of the **catalog pages** — `catalog.html`, `catalog-stone.html`, the LumiSlate JS block (`script.js` ~lines 1500–1623), new stone swatches, and eventual removal of `stone-catalog.html`.
- **ChatGPT / Codex** is in charge of the **homepage and the whole AshleyKitchen website structure** — `index.html`, the shared `<nav>` markup across every page, site-wide information architecture, the supplier-brands treatment, and (optionally) a new `resources.html`.
- **Adam** owns: the baseline commit, the LumiSlate bug clarification (see §9), the supplier-brands policy call, and the final review / push decisions.

### Action items — Adam

1. **Commit the baseline before either assistant starts editing.** The repo currently has 1 commit and many modified + untracked files. Run:
   ```
   cd /Users/adamchen/Desktop/web_dev
   git add -A
   git commit -m "Pre-handoff checkpoint (2026-04-17)"
   git push
   ```
2. **Answer the three open questions in §9** — most importantly the LumiSlate clarification (is it a bug fix on the existing OFF/COOL/NATURAL/WARM chips, or a new 4-color-family switcher?). Claude cannot finalize Task 1.1 without this.
3. **Paste the §8 kickoff prompt into a new ChatGPT / Codex session** on the new MacBook Pro, with the repo opened locally.
4. **Review and approve ChatGPT's nav-change commit before Claude rebases on it.** ChatGPT's first commit is the only hard sync point — after that both assistants work in parallel on separate files.
5. **Fix the stale path in `README.md`** (`/Users/adam/…` → `/Users/adamchen/…`) at any convenient moment, or let ChatGPT include it in the nav-change commit.

### Action items — ChatGPT / Codex (Task 2: homepage + site structure)

1. **Read first, edit later.** In order: `HANDOFF.md` → `README.md` (esp. the Brand Positioning Rule and Image Asset Architecture) → `SITE_PAGE_PLAN.md` → `SITE_RESTRUCTURE_STRATEGY.md` → `docs/ashley-resource-library-plan.md`.
2. **Do not touch Claude's files.** No edits to `catalog-stone.html` body, `catalog.html` body, or `script.js` lines ~1500–1623. You *may* edit the `<nav>` block inside those files — that's explicitly yours.
3. **Land the new nav first, in one isolated commit, before anything else.** Propagate the same `<nav>` markup to every HTML page. This is the only hard sync point; commit and push so Claude can rebase.
4. **Propose the homepage redesign as a short plan note in `docs/` before editing `index.html`.** One page. List the new section order, what's removed, what's added. Get Adam's sign-off, then implement.
5. **Propose the supplier-brands treatment as two mockups** (e.g., logo strip on homepage vs. "Our Partners" block on `about.html`). Adam picks one before you write HTML. Respect the Brand Positioning Rule — Ashley Kitchen leads.
6. **Optional this round:** spin up `resources.html` as the technical-docs hub (pulls from `assets/nalexible/stone/docs/public/` and the performance PDFs). Only if time allows after homepage + nav are done.
7. **Commit cadence:** small, descriptive commits. One commit per logical chunk. Push to `origin/main`. Log each commit SHA in `docs/production-todo.md`.
8. **Bilingual discipline.** Every new string gets both EN (`data-i18n` attribute) and ZH (key in `script.js` `T` dictionary). No hard-coded copy.

### Action items — Claude (Task 1: catalog polish)

1. **Wait for Adam's baseline commit and ChatGPT's nav commit before editing.** Rebase onto the new nav, then start.
2. **Reproduce the LumiSlate bug in the browser before touching JS.** Once Adam clarifies §9 question 1, proceed with either (a) a targeted fix or (b) an additive 4-color-family switcher. Keep `aria-pressed`, keyboard nav, and the fade animation intact.
3. **Audit all 8 series on `catalog-stone.html`.** Wire any missing swatch imagery. Prioritize the DIY Adhesive section (line ~1290, currently sparse).
4. **Unify card / button / hover styling across `catalog.html` and `catalog-stone.html`.** Consistent `View pattern →` affordance. Correct bilingual labels.
5. **Delete `stone-catalog.html` only in a final cleanup commit**, after `catalog.html` + `catalog-stone.html` are stable.
6. **Commit cadence:** same rules as ChatGPT — small, descriptive commits, pushed promptly, SHAs logged in `docs/production-todo.md`.
7. **Stay out of ChatGPT's files.** No edits to `index.html`, `<nav>` markup anywhere, or the `T` dictionary outside of LumiSlate-specific strings.

### Hand-off checkpoints

- **Checkpoint 1 — Baseline committed.** Adam confirms. Both assistants pause until this is done.
- **Checkpoint 2 — Nav landed.** ChatGPT confirms. Claude rebases and starts Task 1.
- **Checkpoint 3 — Mid-round review.** After ChatGPT ships the homepage redesign plan note and Claude fixes the LumiSlate bug: Adam reviews, green-lights or adjusts scope.
- **Checkpoint 4 — Definition of done.** See §7. Close out the round with a joint commit updating `README.md` Collaboration Notes and this `HANDOFF.md` with the outcome.

---

## 1. Required reading before you touch any file

Read these in order. They are the accumulated product/design decisions — do not re-solve them from scratch.

1. [`README.md`](./README.md) — site overview, image-asset principles, **Brand Positioning Rule (2026-04-09)**. Mandatory.
2. [`SITE_PAGE_PLAN.md`](./SITE_PAGE_PLAN.md) — per-page role definitions (home, catalog, product, applications, projects, contact, about).
3. [`SITE_RESTRUCTURE_STRATEGY.md`](./SITE_RESTRUCTURE_STRATEGY.md) — navigation + IA refactor plan.
4. [`WEBSITE_GROWTH_PLAN.md`](./WEBSITE_GROWTH_PLAN.md) — forward roadmap.
5. `docs/lumislate-ui-spec-v2.md` — LumiSlate interaction spec (relevant to Task 1).
6. `docs/stone-family-overview-ashley-plan.md` — canonical 8-series names and grouping.
7. `docs/ashley-kitchen-stone-systems-overview-outline.md` — stone brochure outline (keep web copy consistent with brochure).

The stone brochure PDFs live in `assets/nalexible/stone/docs/public/` (4 public) and `docs/` (design iterations, latest is `…final-enhanced-v3-page14-typefix.pdf`).

---

## 2. Current state — what's already built

**Stack:** 22 top-level HTML pages, one shared `script.js` (1,691 lines, houses the `T` bilingual dictionary, `setLang()`, and the LumiSlate interactive logic), Google Fonts (Poppins / Cormorant Garamond / DM Sans / Noto Serif+Sans TC). No bundler, no framework.

**The 8 stone series** (as declared in `catalog-stone.html`):

| # | Series | Patterns | Imagery status |
|---|--------|----------|----------------|
| 1 | Ordinary | 24 | ✓ swatches in `nalexible/upload/product/` |
| 2 | **LumiSlate** | 22 × 4 light states = 88 | ✓ Full `assets/nalexible/stone/lumislate-study/{pattern}/{off,cold,natural,warm}_scene.jpg` + `off_swatch.jpg` |
| 3 | Cement | 3 | ✓ `assets/nalexible/stone/family-swatches/` |
| 4 | Marble | 19 | ✓ `images/stone/` |
| 5 | Sandstone | 7 | ✓ `images/stone/` |
| 6 | Metal | 10 | ✓ `images/stone/` |
| 7 | Copper / Rust | 4 | ✓ `images/stone/` |
| 8 | DIY Adhesive | — | **Sparse — mostly placeholders** (catalog-stone.html line ~1290 onward) |

**LumiSlate 4-color-variant buttons** — wiring in `catalog-stone.html`:

- Container: `<div class="lumi-pattern-controls" id="lumi-pattern-controls">` — line **1081**
- Four scene `<article>` panels (off / cool / natural / warm): lines **1087–1117**
- `renderLumiPatternControls()`: lines **1503–1540** (builds chips, keyboard nav)
- `swapSceneImage()`: lines **1546–1564** (fade animation, onerror handler)
- `renderLumiPatternModule()`: lines **1566–1623** (swaps 4 scene images; file mapping `{off, cool→'cold', natural, warm}_scene.jpg` — note the `cool → cold` rename at line **1600**)

**Read-through audit (2026-04-17) suggests the JS is wired correctly.** If Adam is seeing a button bug, the most likely causes, in order:

1. A specific pattern folder missing one of the 4 `*_scene.jpg` files → silent `onerror`.
2. The 4 chips are *pattern* selectors, not *color-state* selectors — so if the brief really means "4 buttons to switch OFF / COOL / NATURAL / WARM *for the currently selected pattern*", that UI control may not exist yet and needs to be added.
3. CSS layout collapsing the chips row on narrow viewports (`.lumi-pattern-controls` responsive rules).

**Verify first, fix second.** Reproduce the bug in the browser before editing JS.

**Homepage (`index.html`) current IA:**

Hero → scroll-driven multi-slide carousel (plyē / Stone / Fiberboard / Click-lock) → Products (3 cards) → Applications (4×4 grid) → Projects → About → Technology / Sample CTA → Footer.

**Nav bar (fixed top):**

```
[Ashley Kitchen] | Products ▾ | Catalog | Applications | Projects | About | [Request Samples]
                      ├─ plyē Flooring
                      ├─ Nalexible Stone
                      └─ Nalexible Fiberboard
```

**Known IA weaknesses** (pre-existing): `catalog.html` is not linked in the main nav on every page (only via product-page cross-links); there is no dedicated "Supplier brands" treatment; `stone-catalog.html` and `catalog-stone.html` both exist — treat `catalog-stone.html` as canonical and plan to delete `stone-catalog.html` once nav is stable.

**Git state:** The repo has a single `Initial commit — Ashley Kitchen x Nalexible website` and many modified + untracked files. Adam should stage and commit a checkpoint before either assistant starts making edits, so diffs are reviewable.

---

## 3. Objectives this round

### Task 1 — Catalog UI/UX polish

1.1 **LumiSlate 4-color buttons.** Reproduce the bug, decide whether it's (a) missing scene images, (b) a missing global color-state switcher, or (c) a CSS regression. Fix it. Keep `aria-pressed`, keyboard navigation, and the fade animation intact.

1.2 **Embed all 8 series patterns on `catalog-stone.html`.** Audit each series section. Where a swatch is missing, locate the correct file in `assets/nalexible/stone/` or `nalexible/upload/product/` and wire it. Specifically review the DIY Adhesive section (line ~1290) — currently sparse.

1.3 **General catalog-page UI/UX.** Consistent card sizing, consistent hover states, consistent "View pattern →" affordance across series, correct bilingual labels (`data-i18n` keys resolved in `script.js` `T` object). Fix `catalog.html` to match.

1.4 **Kill duplication.** Do not edit `stone-catalog.html`. Once `catalog.html` + `catalog-stone.html` are clean, remove `stone-catalog.html` in a separate commit.

### Task 2 — Cosentino-benchmarked restructure

Cosentino (Silestone / Dekton / Sensa) is the industry reference for a "brand-curator surfaces" website. The patterns we want to learn from:

- **Product-line-first navigation.** Top-level items are named product lines, not taxonomic categories. For us: `Stone (Nalexible)` / `Fiberboard` / `Flooring (plyē)` remain the spine.
- **Colors / Patterns browser.** Cosentino's `/colors/silestone/` is essentially our `catalog-stone.html` — visual first, filters by look / finish / application.
- **Applications hub.** Kitchen / bath / facade / commercial. We already have `applications.html` — align.
- **Technical documentation section.** Public PDFs, test reports, spec sheets — we have the assets (`assets/nalexible/stone/docs/public/` + performance PDFs) but no clean hub page. Consider adding a `resources.html` (see `docs/ashley-resource-library-plan.md`).
- **Professional / Architect CTA.** Cosentino has an explicit "For Professionals" path. Ours can be "Request Samples / Spec Pack" — keep the existing CTA language.
- **Global / language selector.** We already have EN / ZH via `setLang()` — surface it more prominently in the nav, top-right.
- **Project stories / inspiration.** Cosentino uses editorial project cards. Our `projects.html` is the analogue — promote it in the homepage scroll.

2.1 **Homepage redesign.** Re-sequence `index.html` sections for clearer funneling. Proposed order (open to discussion): hero → 3 product lines (tightened) → Colors/Patterns teaser (links to `catalog.html` / `catalog-stone.html`) → Applications → Projects → Resources / Technical docs → About → Sample CTA. Drop or consolidate the `_duplicates.html` / `_fb_master_browser.html` scratch pages.

2.2 **Nav bar redesign.** Keep the Products dropdown. Add `Catalog` as a first-class nav item on every page (currently missing on several). Consider moving `About` right and `Request Samples` as a distinct CTA button. Keep the bar under ~64 px tall on desktop.

2.3 **Information flow.** Every product page should end with a consistent next-step block: *(a)* view more patterns → catalog, *(b)* see it in context → applications / projects, *(c)* get docs → resources, *(d)* talk to us → contact / sample CTA.

2.4 **Supplier brands treatment (discussable).** Per the **Brand Positioning Rule (README, 2026-04-09)**, Ashley Kitchen leads. Supplier brands (Nalexible, plyē) may be *downplayed* but not *erased*. If we add a supplier strip (homepage or about page), it must read as "Ashley Kitchen curates materials from…" — not as a supplier logo wall. Propose two mockups before committing HTML.

---

## 4. Non-negotiable constraints

From `README.md`:

- **Brand positioning.** Ashley Kitchen leads. Nalexible / plyē remain visible where technical attribution matters (specs, docs, origin) but are not the commercial voice. No language that implies false authorship or denies supplier origin.
- **Image asset architecture.** Two layers: `images/{product}/master/` (archive, never referenced in HTML) and `images/{product}/*.{jpg,webp}` (web-optimised, referenced in `src=`). Never link to `master/`.
- **Bilingual first.** Any new copy must have both `data-i18n` English and the matching ZH key in `script.js` `T`. Don't hard-code text.
- **No framework.** Keep it vanilla HTML + one shared `script.js` + inline CSS (or small `<style>` blocks per page). No React, no build step, no Tailwind.
- **Don't break the shared nav.** The nav HTML is duplicated across every page. Coordinate so both assistants don't edit it simultaneously — see §8.

---

## 5. Work split (parallel)

Adam chose "both work on both, in parallel." To avoid merge conflicts on a single-branch static site, we carve by **file ownership** rather than by task:

### Claude owns (Task 1 core — catalog body & LumiSlate)

- `catalog-stone.html` — **entire file** (body, series sections, LumiSlate markup).
- `catalog.html` — body sections only (not the `<nav>` block).
- `script.js` — **LumiSlate block only** (lines ~1500–1623, the `renderLumi*` / `swapSceneImage` functions and the `LUMI_PATTERNS` array). No edits elsewhere in `script.js`.
- `assets/nalexible/stone/` — new/renamed swatches as needed.
- `stone-catalog.html` — **deletion only**, in a final cleanup commit.

### ChatGPT / Codex owns (Task 2 core — homepage & nav)

- `index.html` — entire file.
- **The shared `<nav>` block across all pages.** ChatGPT is the single editor of nav markup. When nav changes, ChatGPT propagates them to every HTML file (including `catalog-stone.html` and `catalog.html` — Claude will rebase onto that).
- `script.js` — **nav-related code + the `T` dictionary extensions for new nav/homepage strings only**. No edits to the LumiSlate block.
- `about.html`, `applications.html`, `projects.html`, `contact.html` — body edits if IA restructure requires.
- (Optional, if scope allows) new `resources.html` for the technical-docs hub.

### Shared / neither edits unilaterally

- `README.md`, `SITE_PAGE_PLAN.md`, `SITE_RESTRUCTURE_STRATEGY.md`, `WEBSITE_GROWTH_PLAN.md` — edit only after proposing the change in a commit message or a new `docs/*.md` note.

---

## 6. Sequencing to avoid stepping on each other

1. **Adam commits a baseline** (`git add -A && git commit -m "Pre-handoff checkpoint"`) so the starting diff is visible to both assistants.
2. **ChatGPT goes first on nav** — lands the new `<nav>` markup across all pages in one commit. Keep it small and isolated.
3. **Claude rebases** and starts Task 1 on `catalog-stone.html` on top of the new nav.
4. **From then on, both work in parallel** on their owned files. Push often.
5. When either finishes a logical chunk: commit with a descriptive message, push, and note the commit SHA in `docs/production-todo.md`.

---

## 7. Definition of done

Task 1:
- [ ] LumiSlate 4-color buttons verified in browser; no missing scene-image warnings in console; keyboard nav still works; EN + ZH labels correct.
- [ ] All 8 series on `catalog-stone.html` have representative swatch imagery; DIY Adhesive section is no longer placeholder-heavy.
- [ ] `catalog.html` and `catalog-stone.html` use consistent card / button / hover styling.
- [ ] `stone-catalog.html` removed in a final cleanup commit.

Task 2:
- [ ] `index.html` section order reflects the proposed funnel; duplicate scratch pages (`_duplicates.html`, `_fb_master_browser.html`, `_card_test.html`, `_poster_candidates.html`) either deleted or moved into `docs/`.
- [ ] Nav markup updated consistently on every page; `Catalog` reachable from every page; EN/ZH switcher visible top-right.
- [ ] Supplier-brands treatment either shipped (if agreed) or documented as deferred in `docs/`.
- [ ] `README.md` Collaboration Notes updated with the 2026-04-17 handoff outcome.

---

## 8. Kickoff prompt for ChatGPT / Codex

Paste the block below into a new Codex session after opening the repo on the new MacBook Pro:

```
You are taking over the Ashley Kitchen website project alongside Claude.
Repo: github.com/adamchen1972/ashley-kitchen-web (branch main)
Local: /Users/adamchen/Desktop/web_dev

Before editing anything:
1. Read HANDOFF.md (repo root) end-to-end.
2. Read README.md §"Brand Positioning Rule (2026-04-09)" and §"Image Asset Management Principles".
3. Read SITE_PAGE_PLAN.md and SITE_RESTRUCTURE_STRATEGY.md.
4. Run `git status` and `git log --oneline -5` so you know the starting diff.

Your scope is Task 2 in HANDOFF.md §3 — the Cosentino-benchmarked restructure:
- Homepage redesign (index.html)
- Nav bar across all pages (you are the single editor of <nav> markup)
- Information flow between product → catalog → applications → projects → resources → CTA
- Propose the supplier-brands treatment as two mockups before committing HTML

Claude is working on Task 1 in parallel (catalog-stone.html + LumiSlate JS block).
DO NOT edit catalog-stone.html body, catalog.html body, or the LumiSlate JS block
in script.js (lines ~1500–1623). You MAY edit the <nav> markup inside those files.

Sequence: land your nav change first in one small commit; Claude will rebase.
Commit often with descriptive messages. Push to origin/main.
```

---

## 9. Open questions for Adam — resolved 2026-04-17

**Q1. LumiSlate "4 colors" — bug fix or feature add?**
**Adam:** *"Yes, I want a new button group that switches between 4 surface color families for a pattern."*
**Resolution:** Task 1.1 is both a bug fix and a feature add.
- **Bug:** The right-side scene panels are not rendering when a pattern chip is tapped (confirmed by Adam's 2026-04-17 screenshot showing Indian Autumn selected and the right panel empty). Fix the existing OFF/COOL/NATURAL/WARM lighting-state view.
- **Feature add:** Add a new 4-button group that switches between 4 surface color families for the currently selected pattern. Keep both the lighting-state view and the new color-family switcher.
- **Design caveat — pending from Adam:** In a follow-up message Adam indicated he dislikes the *current* LumiSlate section design but his message was truncated before he listed the reasons. Claude is pausing Task 1.1 implementation until Adam supplies (a) the specific design critiques and (b) the preferred replacement layout (e.g., one big image with 4 swatch buttons vs. a persistent 2×2 grid vs. a side-by-side comparator). Also pending: confirmation of where the 4-color-family source images live (repo folder naming convention, or whether they need to come from Nalexible).

**Q2. Supplier-brands treatment — logo strip, "Our Partners" section, or neither?**
**Adam:** *"In the current stage, I want to keep AshleyKitchen-only. I may consider to include suppliers' brand in the future. Let's put it aside in the current stage."*
**Resolution:** Ashley Kitchen only this round. ChatGPT / Codex should **not** add any supplier logo strip or partners section. Revisit in a future round.

**Q3. `resources.html` — in scope this round?**
**Adam:** *"I have no idea what you are talking about regarding 'resources.html'. Where is resources.html? How can I get resources.html?"*
**Clarification:** `resources.html` does not exist. It was a *proposal* in HANDOFF.md §3 Task 2 for a new page that would act as a technical-documentation hub — pulling together the four public stone brochures in `assets/nalexible/stone/docs/public/`, the JIS performance & certification PDFs, and the brochure design iterations in `docs/`. Modeled on Cosentino's *Technical Documentation* section.
**Resolution:** Deferred to a future round. No action this round.

*(Adam mentioned updating `docs/handoff-answers-2026-04-17.md` but that file is not present in the repo as of 2026-04-17. His answers captured above from Cowork chat — including his direct inline edits to this document — are the canonical version.)*

---

*End of handoff.*
