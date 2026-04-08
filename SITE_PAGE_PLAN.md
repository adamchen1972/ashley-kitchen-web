# Ashley Kitchen Site Page Plan

This document defines the current cross-page planning direction for the Ashley Kitchen website.

It should be used before major redesign work on:

- [index.html](/Users/adam/Desktop/web_dev/index.html)
- [catalog.html](/Users/adam/Desktop/web_dev/catalog.html)
- [applications.html](/Users/adam/Desktop/web_dev/applications.html)
- [projects.html](/Users/adam/Desktop/web_dev/projects.html)
- [contact.html](/Users/adam/Desktop/web_dev/contact.html)
- [nalexible-stone.html](/Users/adam/Desktop/web_dev/nalexible-stone.html)
- [nalexible-fiberboard.html](/Users/adam/Desktop/web_dev/nalexible-fiberboard.html)

Related cross-page strategy file:

- [SITE_RESTRUCTURE_STRATEGY.md](/Users/adam/Desktop/web_dev/SITE_RESTRUCTURE_STRATEGY.md)

Planned future page:

- `about.html` is not currently present in the workspace and should be treated as a planned page, not an existing one.

## Core Principle

Each page should have a clear role.

Do not let every page try to do the same job.

The site should feel like one system, but each page should emphasize different questions:

- homepage: who Ashley Kitchen is and why the brands matter
- catalog: what the range includes
- product pages: why a product family deserves specification
- applications: where the materials work
- projects: what built proof looks like
- contact: how to start a conversation
- about: why the company is credible

## Audience Split Principle

Ashley Kitchen site planning now needs to assume two overlapping audience types:

1. DIY and retail-facing users
2. professional specifiers and project buyers

This matters especially for:

- Nalexible in Taiwan
- plye in export-led DIY markets

Implication:

- pages should not become purely technical
- but they also should not become shallow retail-only landing pages
- installation clarity, support flows, and product proof should coexist

## Language Strategy

Current recommendation:

- complete one English master version first
- use `US English` as the default English baseline
- do not split into separate `US English` and `British English` versions at this stage

Reasoning:

- structure, tone, and design consistency matter more right now than regional spelling variation
- most English differences at this stage are minor wording and spelling differences, not enough to justify a second English content track
- future localization should branch from one approved English master rather than two partially diverging English versions

Future language support can later include:

- Traditional Chinese
- Simplified Chinese
- Japanese
- Korean
- French
- German
- Spanish
- Italian
- Portuguese
- Russian
- Turkish
- Arabic

Special note:

- `Arabic` should be treated as a true localization project, not only a translation task, because right-to-left layout support will affect navigation, spacing, and component behavior

## Image Reuse Principle

Important working rule:

- avoid using the same hero or lead image on multiple pages whenever possible

Reuse is acceptable when:

- the image is uniquely strong
- there is no equally good alternative
- the repeated usage serves a different role

But default behavior should be:

- one page, one primary image identity
- homepage gets first claim on the strongest images
- product pages get second claim after homepage image needs are satisfied
- if a great image must be reused temporarily, keep it on homepage first and replace the secondary page later

### Practical image allocation guidance

- `Homepage`
  Use the strongest and most brand-defining images in the whole site.
  The homepage hero should win first-screen attention before any other page.

- `Catalog`
  Use cleaner product-facing images, swatches, and structured product visuals.
  Avoid using the same dramatic lifestyle image already carrying a product page hero.

- `Product pages`
  Use the second-best material-defining images after homepage needs are satisfied.
  Product pages should get priority for:
  - hero images
  - core family images
  - key proof visuals

- `Applications`
  Use use-case images that explain scenario fit.
  They should feel like typologies, not duplicates of product-page hero art.

- `Projects`
  Use built-environment proof and case-study atmosphere.
  These should feel more documentary and less like material product marketing.

- `About`
  Prefer company, process, workspace, material curation, and relationship images over product hero images.

## Page Roles

## Homepage

Primary job:

- introduce Ashley Kitchen as a premium material curator and distributor

Should answer:

- who are we
- what do we carry
- why do these brands matter together

Recommended structure:

1. Brand-level hero
2. Product family gateway
3. Why Ashley Kitchen
4. Applications preview
5. Projects preview
6. Contact / sample CTA

Homepage should increasingly support two paths:

- `DIY / easier-start path`
- `architect / designer / project path`

Important:

- homepage should not become a compressed version of every product page
- it should route users clearly into the right product family

## Catalog

Primary job:

- show the full range without turning into a sales-heavy landing page

Should answer:

- what products exist
- how are they grouped
- how broad is the selection

Recommended role:

- reference-first
- selection-oriented
- lighter on storytelling than product pages

Catalog should prioritize:

- swatches
- product groups
- quick specs
- family-level navigation

Catalog should also become easier for mixed audiences:

- DIY users should quickly understand what kind of product they are looking at
- professionals should still be able to compare families efficiently

## Applications

Primary job:

- explain where each material makes sense

Should answer:

- which product family fits which project condition
- how Ashley Kitchen thinks across residential, hospitality, commercial, and exterior

Applications page should feel:

- matrix-like
- comparative
- less emotional than the homepage
- less technical than product pages

Applications should eventually help explain both:

- DIY / home-improvement use cases
- professional project typologies

## Projects

Primary job:

- provide built proof and atmosphere

Should answer:

- what does this look like in real use
- what kind of spatial quality does Ashley Kitchen deliver

Projects page should feel:

- more editorial
- more real-world
- more image-led than the applications page

Avoid:

- using the same image as a product page hero when that image is doing better work elsewhere

## Contact

Primary job:

- convert interest into action

Should answer:

- how to contact Ashley Kitchen
- how samples and technical requests work
- what the next step looks like

Contact page should feel:

- clear
- lower-pressure
- trustworthy

Contact paths should later support multiple intents:

- sample request
- specification / compliance request
- distributor / channel inquiry
- project inquiry

## Recommended Next Site-Wide Sequence

When moving from product-page work back to whole-site work, recommended order is:

1. `about.html`
2. `index.html`
3. `applications.html`
4. `projects.html`
5. `catalog.html`

Reasoning:

- the site needs a proper trust page before `About` can hold its place in navigation
- the homepage should then be updated to route users more clearly
- `Applications` and `Projects` should be separated more clearly in role before a larger catalog cleanup

## About

Primary job:

- explain Ashley Kitchen as a company, not just a product holder

Should answer:

- what Ashley Kitchen believes in
- why these materials were selected
- what the company brings to architects, designers, and clients in Taiwan

Recommended structure:

1. Company introduction
2. Brand curation logic
3. Material categories and positioning
4. Project support / services
5. Trust signals
6. Contact CTA

Important:

- avoid making About into a generic corporate timeline only
- it should connect company identity with material judgement

## Cross-Page Design Relationship

- `Homepage` should feel broadest and most brand-level
- `Catalog` should feel most systematic
- `Product pages` should feel deepest and most persuasive
- `Applications` should feel most comparative

## Navigation Logic

Recommended global sequencing for product-facing pages:

- `Catalog`
- `Stone / Fiberboard / other product-family links`
- `Applications`
- `Projects`
- `About`
- `Contact`

Reasoning:

- `Catalog` works as the fastest overview of range and acts like the top-level gateway.
- direct product-family links should appear early on product pages because the user is already in product-evaluation mode
- `Applications` should come before `Projects` because "where it fits" is usually understood before "show me built proof"
- `About` should stay near the end because it supports trust, but is rarely the first navigation choice during product discovery
- `Contact` should remain last and visually distinct as the conversion action

Important:

- on the homepage, a `Products` dropdown can still be valid because the homepage is broader and more brand-level
- on individual product pages, direct product links are clearer than hiding sibling product families inside a dropdown
- `Projects` should feel most atmospheric
- `Contact` should feel most direct
- `About` should feel most editorial and trust-building

## Current Recommended Sequencing

1. Polish `nalexible-stone.html`
2. Keep `nalexible-fiberboard.html` as the reference quality bar
3. Create page plans for homepage and about before major rebuild
4. Revisit `catalog.html`, `applications.html`, and `projects.html` with image allocation in mind
5. Build `about.html` only after its role is clearly separated from homepage and contact
