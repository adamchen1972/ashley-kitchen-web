# Ashley Kitchen Site Restructure Strategy

This document translates the current business direction into page-level strategy for:

- [index.html](/Users/adam/Desktop/web_dev/index.html)
- [catalog.html](/Users/adam/Desktop/web_dev/catalog.html)
- [applications.html](/Users/adam/Desktop/web_dev/applications.html)
- [projects.html](/Users/adam/Desktop/web_dev/projects.html)
- planned `about.html`

It should be used before the next round of site-wide redesign work.

## Current Strategic Context

Ashley Kitchen now needs to speak to two overlapping audiences:

1. DIY and retail-facing buyers
2. architects, designers, developers, contractors, dealers, and other professional specifiers

This affects the whole site, not only individual product pages.

Current product and market direction:

- `plye`
  - English-first
  - export-led
  - DIY-friendly
  - Ashley Kitchen should be the stronger commercial-facing brand
- `Nalexible`
  - Taiwan-exclusive for six years
  - early focus includes both DIY channels and professional specification
  - trade shows and B2B credibility still matter

## Main Site-Level Problem

The site already has many strong pages, but they do not yet divide labor cleanly enough.

Right now, several pages are trying to do similar work:

- product explanation
- use-case explanation
- project atmosphere
- company trust
- contact conversion

The next site-wide pass should make each page easier to understand in one glance.

## Recommended Page Roles

## 1. Homepage

Primary role:

- brand gateway

The homepage should not try to summarize every product deeply.

It should answer:

- who Ashley Kitchen is
- what the main material systems are
- which path the visitor should take next

Recommended structure:

1. Hero with Ashley Kitchen-led positioning
2. Two-path entry:
   - DIY / easier-start materials
   - architect / designer / project path
3. Product-family gateway
4. Why Ashley Kitchen
5. Applications preview
6. Projects preview
7. Contact / sample CTA

What to reduce:

- repeated product-detail storytelling
- too many mixed visual languages
- product-page-level proof blocks

Homepage image strategy:

- use cross-category, brand-defining images
- do not consume the strongest product-page or project-page images

## 2. About

Primary role:

- explain why Ashley Kitchen is credible and why its curation matters

This page should not feel like a generic corporate timeline.

It should answer:

- why these material systems were selected
- how Ashley Kitchen supports different buyer types
- why the company can bridge retail, distribution, and specification

Recommended structure:

1. Company introduction
2. Curation philosophy
3. Product system overview
4. Support modes:
   - samples
   - specification support
   - distributor / channel conversations
   - project coordination
5. Trust signals
6. CTA

Best image types:

- company / process / curation / studio / team / sample-handling visuals
- avoid using product hero images as About hero images

## 3. Catalog

Primary role:

- range reference

Catalog should help people quickly understand:

- what product systems exist
- how they are grouped
- what the first key distinctions are

Catalog should become:

- cleaner
- more comparative
- more browseable
- less like a long stitched brochure

Recommended structure:

1. Intro
2. Product family summary cards
3. Family sections with:
   - short description
   - representative image
   - concise spec highlights
   - curated finish or swatch view
4. CTA into product pages

Catalog should support both:

- DIY readers trying to identify the right product type
- professionals trying to compare systems quickly

## 4. Applications

Primary role:

- use-case decision tool

Applications should not feel like a project gallery.

It should answer:

- where each material system fits best
- what kind of buyer or project each material suits

Recommended structure:

1. Intro
2. Use-case matrix by scenario:
   - residential
   - hospitality
   - commercial
   - exterior / façade
   - DIY upgrade / renovation
3. Product recommendations within each scenario
4. CTA to product pages or contact

What to emphasize:

- decision logic
- scenario fit
- mixed audience usefulness

What to avoid:

- duplicating the emotional image-led role of Projects

## 5. Projects

Primary role:

- built proof and editorial credibility

Projects should answer:

- what these materials look like in real environments
- how Ashley Kitchen contributes to spatial quality

Projects should feel:

- more editorial
- more documentary
- more image-led
- less matrix-like than Applications

Recommended structure:

1. Hero
2. Featured projects
3. Filter by product family or sector
4. Project archive
5. CTA

What to reduce:

- product-comparison logic
- too much application-style recommendation language

## Cross-Page Content Allocation

To reduce repetition:

- `Homepage`
  - broad positioning
  - path selection
- `Catalog`
  - reference and product grouping
- `Product Pages`
  - persuasive depth
- `Applications`
  - scenario fit
- `Projects`
  - real-world proof
- `About`
  - company trust and curation logic

## Image Allocation Guidance

Use this to avoid repetition and improve perceived quality.

- `Homepage`
  - broad, brand-defining, cross-category images
- `Catalog`
  - clean system images, swatches, structured product images
- `Applications`
  - typology images that clearly signal use case
- `Projects`
  - documentary and built-environment images
- `About`
  - company and curation images

Do not let the same image serve as:

- homepage hero
- product-page hero
- applications lead image
- and projects showcase

unless it is uniquely strong and there is no better alternative.

## Navigation Implication

The main nav should keep supporting a clear commercial sequence:

- `Catalog`
- product families
- `Applications`
- `Projects`
- `About`
- `Contact`

Reasoning:

- users usually need to understand the range before they understand fit
- they usually need fit before built proof
- they usually need trust before contact
- `Contact` should remain the clearest final action

## Recommended Build Order

The most effective next implementation order is:

1. `about.html`
   - because it does not exist yet and the site needs a proper trust page
2. `index.html`
   - because homepage pathing should reflect the now-clearer site roles
3. `applications.html`
   - to separate use-case logic from project atmosphere
4. `projects.html`
   - to become more editorial and less comparative
5. `catalog.html`
   - to become the cleaner cross-family reference page

## Working Rule

Before redesigning any of the above pages:

- check this strategy file
- check [SITE_PAGE_PLAN.md](/Users/adam/Desktop/web_dev/SITE_PAGE_PLAN.md)
- confirm the page is doing its own job, not another page’s job
