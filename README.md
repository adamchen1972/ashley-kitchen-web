# Ashley Kitchen — Website Structure & Architecture

> Taiwan exclusive distributor of plyē engineered flooring and Nalexible flexible stone/fiberboard.

---

## Site Overview

A static multi-page website (no framework, no build step). All pages share:
- **`script.js`** — single shared JS file handling EN/ZH bilingual translation via a `T` dictionary and `setLang()` function (1,691 lines)
- **`favicon.svg`** — brand icon
- **Google Fonts** — Poppins, Cormorant Garamond, DM Sans, Noto Serif/Sans TC

Primary cross-page planning document:

- [SITE_PAGE_PLAN.md](/Users/adam/Desktop/web_dev/SITE_PAGE_PLAN.md)
- [SITE_RESTRUCTURE_STRATEGY.md](/Users/adam/Desktop/web_dev/SITE_RESTRUCTURE_STRATEGY.md)
- [WEBSITE_GROWTH_PLAN.md](/Users/adam/Desktop/web_dev/WEBSITE_GROWTH_PLAN.md)

## Collaboration Notes

This workspace may be edited by multiple assistants, including Codex and Claude.ai.

To reduce conflicts and unnecessary rework:

- check `SITE_PAGE_PLAN.md` before making major page-level design changes
- check `SITE_RESTRUCTURE_STRATEGY.md` when making homepage / catalog / applications / projects / about changes
- keep page roles distinct instead of re-solving structure in every file separately
- prefer additive planning notes before large cross-page redesign moves
- update this README or the relevant page plan after meaningful structural decisions

---

## Image Asset Management Principles (established 2026-04-05)

These principles apply to all product image folders across the site. Follow them for every product line.

### 1. Two-Layer Asset Architecture

Every product's image folder should be organised into two layers:

```
images/{product}/
├── master/        ← Official HQ source files (archive — never referenced in HTML)
└── {web files}    ← Web-optimised files (these are what HTML src= points to)
```

- `master/` is the source-of-truth archive. It holds original brand-supplied or highest-quality images.
- Web files are generated from master, optimised for browser delivery.
- HTML always references web-layer files only — never anything inside `master/`.

### 2. Before Any Replacement — Visual Confirmation Required

**Never replace a web file with a new image based on filename or color-code matching alone.**

Before replacing any image:
1. Build a side-by-side visual comparison (or view both images)
2. Confirm the two images show the **same scene / same subject**
3. Only after visual confirmation: overwrite the web file with the higher-quality version
4. The original is only deleted after the replacement is confirmed working

Reason: same product code ≠ same photo. A swatch tile and a lifestyle room shot may share the same color code but are completely different images.

### 3. Web Optimisation Spec

When generating web files from master:

| Use case | Max dimension | JPEG quality | Target size |
|----------|--------------|--------------|-------------|
| Swatch / grid tile | 800px longest side | Q85 | 60–130KB |
| Full-width lifestyle / hero | 1440px longest side | Q85 | 150–300KB |
| Product detail / feature image | 1200px longest side | Q85 | 100–200KB |

Tool: Python Pillow, `Image.LANCZOS` resampling, `optimize=True`.

### 4. Naming Convention

```
{product}-swatch-{code}-{name}.jpg     ← web swatch tile
{product}-lifestyle-{description}.jpg  ← web lifestyle photo
{product}-hero-{description}.jpg       ← web hero image
master/{product}-hq-{code}-{n}.jpg     ← HQ product shot (master)
master/{product}-concept-{code}.jpg    ← HQ lifestyle/concept (master)
```

All filenames use lowercase ASCII only — no Chinese characters, no spaces.

### 5. README Update Rule

After any image addition, replacement, or reorganisation:
- Update the relevant section in this README
- Record: what changed, why, and the date
- This keeps ChatGPT, Claude, and any other collaborator in sync without needing to re-scan the folder

### 6. Deletion Rule

- **Never delete** a file until the replacement is visually confirmed and live
- When in doubt, move to `master/` or a `_deprecated/` subfolder rather than deleting
- Only delete when explicitly confirmed as safe by the project owner

## Mobile-First Working Rule

All future page design work should explicitly consider smartphone readers, not only desktop layouts.

This should be treated as a standing design and collaboration rule.

When designing or polishing pages, check mobile behavior for:

- hero height and first-screen clarity
- navigation simplicity and tap comfort
- card density and vertical rhythm
- text size, line length, and readability
- image cropping and focal points
- CTA visibility and tap targets
- long-page pacing and section compression

Current recommendation:

- optimize the website for mobile users before considering native iOS or Android apps
- treat the website as the primary mobile experience unless future product needs justify app development

## Cross-Page Image Rule

Design principle:

- avoid using the same primary image across multiple pages whenever reasonably possible

Allowed exceptions:

- the image is uniquely strong
- there is no better replacement
- the same image is serving clearly different roles

Default preference:

- homepage gets the strongest available images, especially the hero
- product pages get the second-best images after homepage needs are satisfied
- homepage uses brand-level imagery
- product pages use material-defining imagery
- applications uses typology imagery
- projects uses built proof imagery
- about should later use company / curation / process imagery rather than reusing product heroes

Practical priority order for photo selection:

1. homepage hero
2. homepage supporting lead images
3. product-page hero and core family images
4. applications and projects
5. lower sections and support imagery

### Design tokens (CSS variables, defined per-page)
```css
--red:   #E53935   /* Ashley Kitchen brand red */
--stone: #4A4A4A   /* dark grey text */
--sand:  #D9C5A1   /* warm accent / italic headings */
--dark:  #1A1714   /* near-black background */
--bg:    #F5F5F5   /* light background */
```

---

## Page Inventory

### 🏠 Homepage
| File | Status | Notes |
|------|--------|-------|
| `index.html` | **Active / Primary** | Ashley Kitchen-led homepage focused on brand positioning, DIY / project path split, material-family gateway, applications, projects, and next-step support |

### 📦 Product Pages
| File | Product | Notes |
|------|---------|-------|
| `plye.html` | plyē Engineered Flooring (ORIGIN Series) | Primary plyē product page |
| `plye-b.html` | plyē Engineered Flooring | Alternative/draft version B |
| `plye-c.html` | plyē Engineered Flooring | Alternative/draft version C |
| `nalexible-stone.html` | Nalexible Flexible Stone Veneer | LumiSlate, 5 series, Taiwan exclusive |
| `nalexible-fiberboard.html` | Nalexible Natural Fiber Board | Quiet Door Series, acoustic panels |

Planning workspace:

- [assets/plye](/Users/adam/Desktop/web_dev/assets/plye) — plye brand files, planning docs, and copied source materials
- [assets/nalexible/stone/STONE_SERIES_REVIEW.md](/Users/adam/Desktop/web_dev/assets/nalexible/stone/STONE_SERIES_REVIEW.md) — reviewed 5 key stone-series decks and mapped them into website roles

### 🗂 Catalog Pages
| File | Status | Notes |
|------|--------|-------|
| `catalog.html` | Active | Full product catalog — Stone (5 series) + Fiberboard + plyē ORIGIN swatches. **Not linked in nav bar — needs a nav entry.** |
| `stone-catalog.html` | Legacy / Superseded | Earlier stone-only catalog; replaced by `catalog.html` |

### 🌐 Cross-Product Pages
| File | Purpose |
|------|---------|
| `applications.html` | Product × Application matrix (Residential / Commercial / Hospitality / Outdoor) across plyē, Stone, Fiberboard |
| `projects.html` | Case study cards — plyē, Stone, and Fiberboard installed projects |
| `contact.html` | Contact / sample request form |

---

## Navigation Structure

Homepage now follows a broader brand-gateway nav:

```
[Ashley Kitchen logo]  Products ▾  Catalog  Applications  Projects  About  Contact
                            └─ plyē Flooring
                            └─ Nalexible Stone
                            └─ Nalexible Fiberboard
```

Current planning logic for product-facing pages:

```
[Ashley Kitchen logo]  Catalog  Stone  Fiberboard  Applications  Projects  About  [Contact]
```

Reasoning:

- `Catalog` is the overview gateway
- direct product links should be early on product pages
- `Applications` explains fit before `Projects` supplies proof
- `About` supports trust later in the journey
- `Contact` stays last as the clearest action

**Language bar** (fixed, above nav): `ENGLISH | 繁體中文` — toggles `setLang('en'|'zh')`

> ⚠️ `catalog.html` has its own minimal nav (no dropdown, no "Products") — inconsistent with other pages.
> ⚠️ `catalog.html` is not linked from any nav bar — currently unreachable from the live site.

---

## Asset Structure (Current — flat root)

All assets currently live flat in `/web_dev/`. Planned reorganisation: see **Plan A** below.

### plyē Image Asset Architecture (updated 2026-04-05)

`images/plye/` now uses a two-layer asset system:

```
images/plye/
├── master/                   ← Official HQ brand images (archive — NOT referenced in HTML)
│   ├── plye-hq-{code}-1.jpg        Primary product shot (1200–1500px, 325–996KB)
│   ├── plye-hq-{code}-2.jpg        Secondary product shot
│   ├── plye-hq-{code}-1200.jpg     1200px high-res version (where available)
│   └── plye-concept-{code}.jpg     Official lifestyle / 形象概念圖
│
└── plye-swatch-{code}-{name}.jpg   ← Web-optimised swatch (800×800px, 69–125KB, JPEG Q85)
    plye-lifestyle-*.jpg            ← Web lifestyle photos (HTML-referenced)
    plye-hero-*.jpg                 ← Hero images (HTML-referenced)
    plye_dm_*.jpeg/png              ← DM feature icons (HTML-referenced)
```

**Working rule:**
- HTML always references files directly inside `images/plye/` — never `master/`
- `master/` is the source-of-truth archive; generate web files from here
- To upgrade any web image: re-export from `master/` at target size, overwrite web file, HTML untouched

**Swatch optimization spec (applied 2026-04-05):**
- Source: `master/plye-hq-{code}-1.jpg` (official brand zip, 1200–1500px)
- Output: 800×800px, JPEG quality 85, Pillow LANCZOS
- Result: 69–125KB per swatch (down from 162–384KB — 50–75% smaller, higher quality)

### Images by category

| Prefix / Pattern | Count | Content |
|-----------------|-------|---------|
| `images/plye/plye-swatch-*.jpg` | 12 | Web-optimised colour swatches (800×800px, ~69–125KB each) |
| `images/plye/plye-lifestyle-*.jpg` | 18 | Lifestyle/interior photos used in HTML |
| `images/plye/plye-hero-*.jpg` | 1 | Hero image |
| `images/plye/plye_dm_*` | 9 | DM feature icons/photos |
| `images/plye/master/plye-hq-*` | 28 | HQ master product shots (archive) |
| `images/plye/master/plye-concept-*` | 13 | HQ lifestyle concept images (archive) |
| `nal-hero-*`, `nal-case-*`, `nal-com-*`, `nal-res-*`, `nal-hos-*`, `nal-out-*`, `nal-stone-*`, `nal-gal-*`, `nal-g-*`, `nal-tmp-*` | ~55 | Active stone lifestyle/application images used in HTML |
| `nal-case715-*`, `nal-prod715-*`, `nal-trans715-*` | ~170 | PDF-extracted stone images (from internal 715-page catalog PDF) — mostly unused in HTML |
| `fb-*.jpg` | 15 | Fiberboard door/interior/partition photos |
| `bro_*.jpg`, `tok_*.jpg` | ~70 | Raw PDF extracts (brochure + Tokyo exhibition book) — temporary, not in HTML |
| `app-*.jpg` | 8 | Old application matrix images (superseded, mostly unused) |
| `nal-trans-p5-*.jpeg/png`, `trans-p5-*.png` | 4 | LumiSlate translucency detail renders |

### Stone Image Asset Architecture (established 2026-04-06)

`images/stone/` now uses the same two-layer asset system as plyē:

```
images/stone/
├── master/                        ← HQ archive extracted from official Nalexible PPTXs (NOT referenced in HTML)
│   ├── series-marble/             (78 imgs) — from 大理石系列.pptx
│   ├── series-cement/             (33 imgs) — from 水泥板系列.pptx
│   ├── series-sandstone/          (37 imgs) — from 砂岩系列.pptx
│   ├── series-woven/              (58 imgs) — from 织布系列.pptx
│   ├── series-adhesive/           (41 imgs) — from 背胶快装系列.pptx
│   ├── series-luminous/           (92 imgs) — from 透光系列.pptx
│   └── colors/                    (20 colour subdirectories, 691 imgs total)
│       ├── cloud-dragon/          云龙
│       ├── california-gold/       加州金
│       ├── cumin-green/           孜然绿
│       ├── lava-brown/            岩浆潭棕
│       ├── starry-night/          星幕
│       ├── star-rain/             星雨
│       ├── dawn-red/              朝红
│       ├── ocean-green/           海洋绿
│       ├── mars/                  火星 (MPO format — extracted via PIL)
│       ├── burning-passion/       燃情
│       ├── red-line/              红线
│       ├── pale-autumn/           苍秋
│       ├── british-green/         英绿 (PPTX truncated — recovered via raw zip scan, 29 imgs)
│       ├── ochre/                 赭石
│       ├── gold/                  金
│       ├── gold-over-silver/      金裹银
│       ├── silver-gray/           银灰
│       ├── flash-silver/          闪银
│       ├── rosy-white/            霞白
│       ├── d-black/               靓黑
│       └── dragon-red/            龙头红 (MPO format — extracted via PIL)
│
└── nal-*.jpg / app-*.jpg          ← Web images (HTML-referenced)
```

**Master file naming:** `nalexible-{series/color-slug}-s{slide:02d}-i{img:02d}.jpg`
Example: `nalexible-silver-gray-s07-i11.jpg`, `nalexible-luminous-s24-i62.jpg`

**Total master images:** 1,609 (+ derivative product dirs pending source files)

#### Stone Derivative Products (`images/stone/master/derivative/`)

Products made from or featuring Nalexible stone material — interior design applications:

| Subdir | Product | Notes |
|--------|---------|-------|
**Interior design related** (secondary priority):

| Subdir | Product | Notes |
|--------|---------|-------|
| `geometric-tiles/` | 幾何石材拼貼磚 | Geometric diamond/square pattern tiles, multiple colorways, room shots |
| `wall-art/` | 石材裝飾畫 | Stone-texture framed art prints, 3 series (rectangular + circular frames, B&W) |
| `wall-clock/` | 石材掛鐘 | Natural stone dial + walnut wood frame; 匠美匠心 / 天然薄石材 |

**Tech accessories** (non-primary, archived for future reference):

| Subdir | Product | Notes |
|--------|---------|-------|
| `tech-accessories/phone-case/` | 石材手機殼 | iPhone case with stone veneer, multiple stone colors |
| `tech-accessories/ipad-case/` | 石材 iPad 保護殼 | iPad case with stone surface |
| `tech-accessories/macbook-cover/` | 石材 MacBook 貼膜 | MacBook cover/skin with natural stone |
| `tech-accessories/wireless-charger/` | 石材無線充電器 | Wireless charger with stone face + wood frame, 10W QC |

**Lifestyle accessories** (non-primary, archived for future reference):

| Subdir | Product | Notes |
|--------|---------|-------|
| `lifestyle/bag/` | 石材帆布包 | Messenger bag combining stone veneer + canvas |

⚠️ All `derivative/` directories created 2026-04-06. Currently empty — source files (PDF/PPTX/images) not yet received. Add images here when source files become available.

**Source files:** `/Users/adam/Desktop/Nalexible/NALEXIBLE-分项产品介绍/`

| Subdir | Count | Source file | Notes |
|--------|-------|-------------|-------|
| `series-marble/` | 78 | 大理石系列.pptx | Marble series overview |
| `series-cement/` | 33 | 水泥板系列.pptx | Cement board series |
| `series-sandstone/` | 37 | 砂岩系列.pptx | Sandstone series |
| `series-woven/` | 58 | 织布系列.pptx | Woven/fabric series |
| `series-adhesive/` | 41 | 背胶快装系列.pptx | Adhesive quick-install series |
| `series-luminous/` | 92 | 透光系列.pptx | Luminous/translucent series |
| `colors/` (20 subdirs) | 691 | 21 × individual color PPTXs | Per-color product shots |
| `luminous-pdf/` | 48 | nalexible.天然透光石.pdf + Glow picture.pptx | Translucent stone PDF catalog |
| `installation/` | 11 | nalexible施工手册.pdf | Installation manual diagrams |
| `vs-traditional/` | 14 | nalexible石材VS传统石材.pptx | Stone vs traditional comparison |
| `case-studies/` | 231 | nalexible案例介绍.pptx | Real project case photos |
| `product-materials/` | 192 | 耐博斯通---产品素材.pptx | General product material library |
| `brochure-mixed/` | 62 | nalexible.宣传册 PDF | Mixed stone + fiberboard — needs manual sort |
| `brochure-exterior-wall-jp/` | 14 | nalexible-exterior-wall-panel-brochure-jp.pdf | Exterior wall stone panel — Japanese brochure |
| `brochure-great-wall-en/` | 4 | nalexible-great-wall-board-brochure-en.pdf | Great Wall board — **English brochure** (colors: California Gold, D.Black, Galaxy Black, Indian Autumn, Artic Storm, Burning Forest Copper, Silver Grey, Zebra Black etc.) |
| `brochure-lumislate-jp/` | 3 | nalexible-lumislate-brochure-jp.pdf | LumiSlate light panel — Japanese brochure with size specs |

**Extraction methods:**
- python-pptx (standard PPTX/shape type 13)
- PIL + zipfile raw scan (MPO format: 火星, 龙头红; truncated zip: 英绿)
- PyMuPDF / fitz (PDF image extraction)
- Minimum size filter: 40KB per image (skips logos and decorative elements)
- Deduplication: MD5 hash within each source file

**Note on `brochure-mixed/`:** The 宣传册.ppt file is a legacy .ppt binary with no embedded media. The PDF export version (`nalexible.宣传册 - 兼容性模式.pdf`) contains both stone and fiberboard product images mixed together. All 62 images are stored in both `images/stone/master/brochure-mixed/` and `images/fiberboard/master/brochure-mixed/` pending manual classification.

**Web image upgrades applied (2026-04-06):**

| Web file | Replaced with master source | Dimensions |
|---|---|---|
| `nal-case-hotel-reception.jpg` | `colors/rosy-white/nalexible-rosy-white-s06-i10.jpg` | 1080×690 |
| `nal-com-hotel-stone-lobby.jpg` | `colors/rosy-white/nalexible-rosy-white-s06-i10.jpg` | 1080×690 |
| `nal-case-residential-tv-wall.jpg` | `colors/star-rain/nalexible-star-rain-s05-i06.jpg` | 1746×1080 |
| `nal-hero-stone-living-room.jpg` | `colors/star-rain/nalexible-star-rain-s05-i06.jpg` | 1746×1080 |
| `nal-case-spiral-staircase.jpg` | `colors/california-gold/nalexible-california-gold-s05-i06.jpg` | 2306×1537 |
| `nal-stone-spiral.jpg` | `colors/california-gold/nalexible-california-gold-s05-i06.jpg` | 1150×767 |
| `nal-case-stone-stairway-lights.jpg` | `colors/silver-gray/nalexible-silver-gray-s07-i11.jpg` | 1440×1131 |
| `nal-g-12.jpg` | `series-luminous/nalexible-luminous-s32-i75.jpg` | 675×900 |
| `nal-stone-app-lumislate.jpg` | `series-luminous/nalexible-luminous-s24-i62.jpg` | 1080×1452 |
| `nal-case-living-room-stone-wall.jpg` | `colors/silver-gray/nalexible-silver-gray-s07-i09.jpg` | 1298×858 |

Note: `nal-com-corporate-lobby.jpg` and `nal-com-lounge-stone-wall.jpg` were confirmed identical (MD5 match) to their master equivalents — no replacement needed.

Originals backed up to `/tmp/stone_web_backup/` (temporary — session only).

### Fiberboard Image Asset Architecture (established 2026-04-06)

`images/fiberboard/master/` is the HQ archive for all Nalexible Fiberboard product imagery.

```
images/fiberboard/
├── master/
│   ├── brochure-mixed/    (62 imgs) — nalexible.宣传册 PDF (mixed stone+fiberboard, needs manual sort)
│   ├── product-detail/    (41 imgs) — 自然纤维板详情页（改）.pdf (285MB, 8 pages, dense product shots)
│   └── tokyo-catalog/     (12 imgs) — 东京展画册(修改0317）(2).pdf (Tokyo exhibition catalog)
└── (web files TBD — currently fb-*.jpg in root, see Plan A)
```

**Total fiberboard master images: 115**

| Subdir | Count | Source | Notes |
|--------|-------|--------|-------|
| `brochure-mixed/` | 62 | nalexible.宣传册 PDF | Mixed stone + fiberboard — needs manual classification |
| `product-detail/` | 41 | 自然纤维板详情页（改）.pdf | Fiberboard-only product detail images (285MB source) |
| `tokyo-catalog/` | 12 | 东京展画册(修改0317）(2).pdf | Tokyo exhibition catalog |

**Source files:** `/Users/adam/Desktop/Nalexible/NALEXIBLE-印刷资料/`

**Naming convention:** `nalexible-fb-{slug}-p{page:03d}-i{img:03d}.jpg`

**Web image upgrade applied (2026-04-06):**

| Web file | Replaced with | Before | After |
|---|---|---|---|
| `images/fiberboard/fb-topology-macro.jpg` | `master/brochure-mixed/nalexible-brochure-p009-i034.jpg` | 1200×900, 261KB | 1200×900, 235KB (from 1251×938 source) |

Other 4 matched pairs not replaced: `fb-door-barn` and `fb-door-wall-panel-system` (web already larger/better), `fb-door-elegant` (false positive — different photo), `app-fb-hospitality` (identical dimensions, no gain).

**Note:** `nalexible.宣传册.ppt` is a legacy .ppt file — confirmed empty shell (no embedded media). All brochure imagery is in the PDF export version already extracted above.

Fiberboard web images currently live in root as `fb-*.jpg` (15 files). See Plan A for future reorganization into `images/fiberboard/`.

---

### plyē ORIGIN — 12 Colour Reference (`images/plye/master/`)

All 12 colour shades. Web swatches live at `images/plye/plye-swatch-{code}-*.jpg`. Master archive at `images/plye/master/`.

| Code | Chinese | English | Web Swatch | Master Files |
|------|---------|---------|------------|-------------|
| ORG-8811 | 晨曦白橡 | Dawn White Oak | `plye-swatch-org8811-dawn-white.jpg` | hq-1, hq-1200, hq-1200-2, concept, concept-2 |
| ORG-8812 | 微光沙橡 | Misty Sand Oak | `plye-swatch-org8812-misty-sand.jpg` | hq-1, hq-1200, hq-1200-2, concept |
| ORG-8813 | 煦日金橡 | Sunrise Gold Oak | `plye-swatch-org8813-sunrise-gold.jpg` | hq-1, hq-2, concept |
| ORG-8821 | 霧感橡木 | Misty Oak | `plye-swatch-org8821-misty-oak.jpg` | hq-1, hq-2, concept |
| ORG-8822 | 暖杏橡木 | Warm Apricot Oak | `plye-swatch-org8822-warm-honey.jpg` | hq-1, hq-2, concept |
| ORG-8823 | 柔沙橡木 | Soft Sand Oak | `plye-swatch-org8823-soft-sand.jpg` | hq-1, hq-2, concept |
| ORG-8825 | 柔光灰橡 | Soft Gray Oak | `plye-swatch-org8825-soft-gray.jpg` | hq-1, hq-2, hq-3, concept |
| ORG-8831 | 溫潤棕橡 | Warm Brown Oak | `plye-swatch-org8831-warm-brown.jpg` | hq-1, hq-2, concept |
| ROG-8814 | 薄霧褐橡 | Misty Taupe Oak | `plye-swatch-rog8814-misty-taupe.jpg` | hq-1, hq-2, concept |
| ROG-8815 | 沉靜灰橡 | Deep Gray Oak | `plye-swatch-rog8815-quiet-gray.jpg` | hq-1, hq-2, concept |
| ROG-8824 | 經典原橡 | Classic Natural Oak | `plye-swatch-rog8824-natural-oak.jpg` | hq-1, hq-2, concept |
| ROG-8832 | 深邃黑橡 | Deep Black Oak | `plye-swatch-rog8832-deep-black.jpg` | hq (base), hq-1200, hq-1200-2, concept |

---

### Videos — Asset Architecture (updated 2026-04-06)

#### Web-serving videos (`nalexible/video/`)
These are the compressed, web-ready files referenced in HTML:

| File | Size | Duration | Resolution | Source (HQ master) |
|------|------|----------|------------|---------------------|
| `stone_1.mp4` | 22MB | 3m01s | 960×540 | `master/brand/nalexible-brand-en.mp4` (EN brand video) |
| `stone_2.mp4` | 23MB | 3m09s | 960×540 | `master/lumislate/nalexible-lumislate-install-jp.mp4` |
| `fiberboard_1.mp4` | 6MB | 0m51s | 960×540 | `master/fiberboard/nalexible-fb-magnetic-door.mp4` |
| `fiberboard_2.mp4` | 4MB | 0m38s | 960×540 | `master/fiberboard/nalexible-fb-compression-test.mp4` |
| `fiberboard_3.mp4` | 4MB | 0m35s | 960×540 | unknown source |

⚠️ Note: `stone_1.mp4` and `stone_2.mp4` are misnamed — they contain EN brand overview and LumiSlate installation content, not stone-specific footage.

#### HQ Master Archive (`nalexible/video/master/`)
Organised by product. Large files (>50MB) are symlinks to original Desktop location; smaller files are copies.

**brand/** — Full company/brand videos (1920×1080)

| New name | Original | Size | Duration | Lang |
|---|---|---|---|---|
| `nalexible-brand-en.mp4` | `nalexible-brand-en.mp4` | 217MB | 3m01s | EN |
| `nalexible-brand-zh.mp4` | `nalexible-brand-zh.mp4` | 216MB | 3m00s | ZH |
| `nalexible-brand-intro-jp.mp4` | `nalexible-brand-intro-jp.mp4` | 240MB | 3m19s | JP |

**stone/** — Stone product videos

| New name | Original | Size | Duration | Notes |
|---|---|---|---|---|
| `nalexible-stone-install.mp4` | `nalexible-stone-install.mp4` | 12MB | 3m59s | Installation process, 480×368 (older) |
| `nalexible-stone-paint-demo.mp4` | `nalexible-stone-paint-comparison.mp4` | 29MB | 0m09s | Before/after paint, 1080×1920 portrait |

**lumislate/** — LumiSlate translucent stone

| New name | Original | Size | Duration | Notes |
|---|---|---|---|---|
| `nalexible-lumislate-glow-demo.mp4` | `nalexible-lumislate-glow-demo.mp4` | 10MB | 1m07s | Backlit glow demo, 544×960 portrait |
| `nalexible-lumislate-install-jp.mp4` | `nalexible-lumislate-install-jp.mp4` | 181MB | 3m09s | Installation steps, JP narration, 1920×1080 |

**fiberboard/** — Fiberboard product videos (all Japanese market, sourced from `nalexible视频/`)

| New name | Original | Size | Duration | Resolution | Notes |
|---|---|---|---|---|---|
| `nalexible-fb-compression-test.mp4` | `nalexible-fb-compression-test-jp.mp4` | 36MB | 0m38s | 3840×2160 (4K) | Compression durability test, JP |
| `nalexible-fb-impact-test.mp4` | `nalexible-fb-impact-test-jp.mp4` | 771MB | 1m13s | 2160×3840 (4K portrait) | Impact resistance test, JP |
| `nalexible-fb-exterior-install.mp4` | `nalexible-fb-exterior-install-jp.mp4` | 49MB | 1m29s | 1080×1920 portrait | Exterior wall panel install, JP |
| `nalexible-fb-edge-band.mp4` | `nalexible-fb-edge-band-jp.mp4` | 47MB | 0m32s | 1080×1920 portrait | Furniture edge banding, JP |
| `nalexible-fb-hardware-install.mp4` | `nalexible-fb-hardware-install-jp.mp4` | 76MB | 1m00s | 1080×1920 portrait | Furniture hardware fitting, JP |
| `nalexible-fb-magnetic-door.mp4` | `nalexible-fb-magnetic-door-jp.mp4` | 28MB | 0m51s | 1920×1080 | Magnetic door structure, JP |
| `nalexible-fb-partition-install.mp4` | `nalexible-fb-partition-install-jp.mp4` | 35MB | 0m58s | 1920×1080 | Partition wall installation, JP |

**Naming convention:** `nalexible-{product}-{description}[-{lang}].mp4`
- `-jp` suffix = Japanese narration/market version
- `-zh` suffix = Chinese narration
- `-en` suffix = English narration
- No suffix = no narration or language-neutral

**Source file locations (after rename 2026-04-06):**
- `/Users/adam/Desktop/Nalexible/NALEXIBLE-视频资料/` — brand + stone + lumislate originals
- `/Users/adam/Desktop/Nalexible/nalexible视频/` — fiberboard JP originals

All non-ASCII filenames (Japanese + Chinese) have been renamed to ASCII-only English names on the original Desktop source folders.

Symlinks (→ Desktop source): brand/ all 3, stone/paint-demo, lumislate/install-jp, fiberboard/impact-test, exterior-install, edge-band, hardware-install

### Certification & Test Reports — Asset Architecture (organised 2026-04-06)

#### Stone — `assets/nalexible/stone/docs/`

**performance/** — 10 JIS/Japanese test reports (all JP-market, single-test PDFs)

| Filename | Original source name | Language | Test type |
|---|---|---|---|
| `chemical-resistance-test.pdf` | `nalexible-chemical-resistance-test-jp.pdf` | JP | 耐薬品性試験 |
| `fire-test-report.pdf` | `nalexible-fire-test-report-cn.pdf` | CN | 防火检测报告 |
| `freeze-thaw-test.pdf` | `nalexible-freeze-thaw-test-jp.pdf` | JP | 耐凍害性試験 |
| `heat-resistance-test.pdf` | `nalexible-heat-resistance-test-jp.pdf` | JP | 耐熱性試験報告書 |
| `outdoor-exposure-test.pdf` | `nalexible-outdoor-exposure-test-jp.pdf` | JP | 試験結果報告書（屋外暴露試験） |
| `slip-resistance-test.pdf` | `nalexible-slip-resistance-test-jp.pdf` | JP | 耐滑り性試験（CSR値） |
| `surface-abrasion-test.pdf` | `nalexible-surface-abrasion-test-jp.pdf` | JP | 耐素地摩耗性試験 |
| `thermal-shock-test.pdf` | `nalexible-thermal-shock-test-jp.pdf` | JP | 耐熱衝撃性試験 |
| `water-absorption-test.pdf` | `nalexible-water-absorption-test-jp.pdf` | JP | 吸水率測定 |
| `weathering-color-difference-test.pdf` | `nalexible-weathering-color-difference-test-jp.pdf` | JP | 促進耐候性試験色差測定 |

**certifications/** — 3 official certificates

| Filename | Original source name | Language | Type |
|---|---|---|---|
| `patent-certificate.pdf` | `nalexible-patent-certificate-jp.pdf` | JP | 特許証 PIZ-0012 |
| `pse-certificate.pdf` | `nalexible-pse-certificate-jp.pdf` | JP | PSE電気用品安全 |
| `stone-design-certificate.pdf` | `nalexible-stone-design-certificate-cn.pdf` | CN | 外观设计证书（耐博斯通） |

**technical-reports/** — 7 multi-test or institutional reports

| Filename | Original source name | Language | Notes |
|---|---|---|---|
| `EFSN21070683C-C1.pdf` | `EFSN21070683C-C1.pdf` | EN | EFSN testing series vol.1 |
| `EFSN21070683C-C2.pdf` | `EFSN21070683C-C2.pdf` | EN | EFSN testing series vol.2 |
| `EFSN21070683C-C3.pdf` | `EFSN21070683C-C3.pdf` | EN | EFSN testing series vol.3 |
| `EFSN21070683C-C4.pdf` | `EFSN21070683C-C4.pdf` | EN | EFSN testing series vol.4 |
| `japan-paint-association-test-report.pdf` | `nalexible-japan-paint-association-test-report-jp.pdf` | JP | 試験結果報告書（日本塗料協会） |
| `nalexible-japan-test-report.pdf` | `nalexible-japan-test-report-jp.pdf` | JP | 日本検測報告（comprehensive） |
| `nalexible-test-report-bundle.pdf` | `nalexible-test-report-bundle-cn.pdf` | CN | 131-page full bundle |

**archive/** — miscellaneous reference files

| Filename | Original source name | Notes |
|---|---|---|
| `report-reference-image.jpg` | `nalexible-report-reference-image.jpg` | MD5-named scan |
| `sdgs-declaration.pdf` | `nalexible-sdgs-declaration-jp.pdf` | SDGs宣言（ユータック） |

HTML references (nalexible-stone.html):
- `assets/nalexible/stone/docs/performance/fire-test-report.pdf` (×2 locations)
- `assets/nalexible/stone/docs/performance/water-absorption-test.pdf` (×2 locations)

#### Fiberboard — `assets/nalexible/fiberboard/docs/`

**certifications/**

| Filename | Original source name | Language | Type |
|---|---|---|---|
| `fiberboard-utility-patent.pdf` | `nalexible-fiberboard-utility-patent-cn.pdf` | CN | 一种内置蛋壳结构的自然纤维板实新证书 |

**Source files (after rename 2026-04-06):** `/Users/adam/Desktop/Nalexible/NALEXIBLE-检测报告/`
All 21 source files have been renamed to ASCII-only English names (`nalexible-{description}-{lang}.pdf`).

---

### Documents (root)
- `Ashley_Kitchen_SiteMap_Diagram.pdf`
- `Ashley_Kitchen_Website_Map.pdf`
- `PLYE電子DM.pdf`
- `nalexible-brochure.ppt`

`downloads/` subfolder:
- `product-specifications.pdf`, `project-showcase.pdf`

### `nalexible/` Subdirectory (do not move)
Pre-organised asset store mirroring nalexible.com's upload structure:
```
nalexible/
├── upload/
│   ├── product/   (45 stone swatch tiles — used by catalog.html and stone-catalog.html)
│   ├── image/     (lifestyle/application shots, organised by upload date)
│   │   ├── 20250219/
│   │   ├── 20250220/
│   │   ├── 20250220_new/
│   │   └── 20250224/
│   ├── banner/
│   └── uploadfile/
├── video/         (5 product demo mp4s)
└── images/
```

---

## Product Catalogue Reference

### Nalexible Stone — 5 Series
Per nalexible.com:
1. **Flexible Stone** — standard ultra-thin (1–3 mm), bendable stone veneer; colours: Silver Grey, Indian Autumn, Terra Red, Artic Storm, Indian Autumn Rustic, Sanjayani White (+more)
2. **Flexible Stone UV** — UV-coating variant; colours: Black, D.Black, Indian Autumn, Terra Red, Indian Autumn Rustic
3. **LumiSlate** — translucent backlit stone (light transmitting); warm + cold tone
4. **EasyStone** — simplified installation system
5. **3D Stone Brick** — textured 3D wall panel variant

### Nalexible Fiberboard — 3 Product Lines
Per nalexible.com:
1. **Molded Panel Doors** — styles: 1 Panel Modern, 2 Panel Roman, 2 Panel Square, 3 Panel Lavie, 3 Panel Modern
2. **Acoustic Molded Door** — with acoustic core
3. **Quiet Door** — flush/minimalist quiet door system

### plyē Public Positioning — export-facing website
Per plye.com.tw/collections/origin (NT$4,500 each):
1. Origin 微光沙橡 (Micro-light Sand Oak)
2. Origin 晨曦白橡 (Dawn White Oak)
3. Origin 暖杏橡木 (Warm Apricot Oak)
4. Origin 柔光灰橡 (Soft Gray Oak)
5. Origin 柔沙橡木 (Soft Sand Oak)
6. Origin 沈靜灰橡 (Deep Gray Oak)
7. Origin 溫潤棕橡 (Warm Brown Oak)
8. Origin 深邃黑橡 (Deep Black Oak)
9. Origin 煦日金橡 (Golden Oak)
10. Origin 經典原橡 (Classic Oak)

Current English-site positioning should favor:

- FSC-sourced birch plywood core messaging
- EU E1 low-formaldehyde compliance as the first public-facing compliance story
- patent four-direction click-lock installation
- quieter residential living and DIY-ready installation

Legacy source materials may still mention eucalyptus or SGS F1, but those should not drive the current English-facing public page without updated factory support.

---

## Translation System

`script.js` exports a `T` dictionary keyed by element `id`:
```js
const T = {
  'element-id': { en: 'English text', zh: '中文文字' },
  ...
}
```
`setLang(lang)` iterates all keys and sets `innerHTML` on matching DOM elements.
Each HTML page has element IDs matching T keys for its translatable content.

---

## Known Issues / Tech Debt

| Issue | Location | Priority |
|-------|----------|----------|
| `catalog.html` not linked in nav | All pages | High — Plan B item 1 |
| Fiberboard section in catalog uses wrong images | `catalog.html` line 464 | High — Plan B item 2 |
| plyē swatch count is 12; should be 10 per plye.com.tw | `catalog.html` | Medium — Plan B item 4 |
| `plye-b.html`, `plye-c.html` are unused drafts | — | Low |
| `stone-catalog.html` superseded by `catalog.html` | — | Low |
| All assets flat in root (~550 files) | `/web_dev/` | Medium — Plan A addresses this |

---

## UI Fixes

| Date | Page | Fix |
|------|------|-----|
| 2026-04-07 | `applications.html` | Application grid captions (`.mc-overlay`) changed from always-visible (`opacity:1`) to hidden at rest, revealed on hover (`opacity:0` → hover `opacity:1` with upward slide). Photos now fully visible by default. |
| 2026-04-07 | `nalexible-fiberboard.html` | `.proof-main-copy h3` had `max-width:11ch` causing the proof section title to wrap after every 1–2 words, making the page excessively long. Removed the max-width constraint; kept `line-height:1.14` for tighter heading rhythm. |
| 2026-04-07 | `nalexible-fiberboard.html` | All `<video>` elements now default to 50% volume on page load via `document.querySelectorAll("video").forEach(v => v.volume = 0.5)` added at end of script. |
| 2026-04-07 | `nalexible-fiberboard.html` | **Bug fix:** Duplicate `serve(el));</script></body></html>` fragment (lines 1171–1174) — leftover from a previous edit — removed. File now has a single valid closing sequence. |
| 2026-04-07 | `nalexible-stone.html` | All `<video>` elements now default to 50% volume on page load (same pattern as fiberboard). |
| 2026-04-07 | `plye.html` | Added `anti-mold` badge tag to Surface Protection card product-meta (same pill style as existing wear layer / easy maintenance / home-ready tags). |
| 2026-04-08 | `index.html` | Added `padding-bottom:80px` to `#technology` (Next Steps) section to create breathing room above the footer. |
| 2026-04-08 | `index.html` | Added `padding-bottom:64px` to `#products` section to create visible gap between product cards and Applications section. |
| 2026-04-08 | `plye.html` | Reduced `.section` padding desktop 116px→68px→**46px**, mobile 82px→52px→**34px**; hero bottom 54px→**32px**; `footer margin-top` 92px→48px. |
| 2026-04-08 | `nalexible-stone.html` | Reduced `.section` padding desktop 118px→68px→**46px**, mobile 82px→52px→**34px**; hero bottom 56px→**32px**; `footer margin-top` 92px→48px. |
| 2026-04-08 | `nalexible-fiberboard.html` | Reduced `.section` padding desktop 118px→68px→**46px**, mobile 82px→52px→**34px**; hero bottom 54px→**32px**; `footer margin-top` 92px→48px. |
| 2026-04-08 | `about.html` | Reduced `.section` padding desktop 112px→68px→**46px**, mobile 82px→52px→**34px**; hero bottom 56px→**32px**; `footer margin-top` 92px→48px. |
| 2026-04-08 | `catalog.html` | Reduced `.page-header` top padding 160px→96px; `.catalog-section` bottom padding 64px→44px. |

---

## Content Fixes

### nalexible-stone.html — Finish Highlights captions (2026-04-07)

Visual audit of the four Finish Highlights cards revealed that two cards had captions inconsistent with the actual image displayed. Images were correct and kept; only captions and i18n text were updated.

| Card | Image file | Before | After | Reason |
|------|-----------|--------|-------|--------|
| 1 | `nalexible/upload/product/1740453884.jpg` | Cement Series · **Silver Grey** | Cement Series · **Rose Pink** | Image is a warm pink/rose cement stone — not grey |
| 2 | `nalexible/upload/product/1740452475.jpg` | **Marble Series** · **White Crystal** | **Slate Series** · **Silver Grey** | Image is a cool-toned silver-grey slate with diagonal grain — not white, not marble |
| 3 | `nalexible/upload/product/1740452700.jpg` | Warm Vein · Golden Brown | unchanged | Image matches description |
| 4 | `nalexible/upload/product/nal-uv-black.jpg` | UV Series · Black | unchanged | Acceptable (UV Series is the product series name) |

Both EN and ZH i18n dictionary entries updated to match.

### catalog.html — Stone swatches (2026-04-07)

Full visual audit of all stone swatches across Flexible Stone, LumiSlate, EasyStone, UV Series, and 3D Wall Panel sections. All images match their product names (official Nalexible names: Arctic Storm, Indian Autumn, Zebra Black, Silver Gray, etc.). **No changes required.**

---

## Image Duplicate Audit (2026-04-06)

Full audit of all 140 HTML-referenced images. Reference: `_duplicates.html`

| # | Type | Description | Status |
|---|------|-------------|--------|
| A | EXACT | `nal-res-door-white-panel.jpg` — same file at two paths (projects.html + catalog.html) | ✅ Fixed 2026-04-06 — catalog.html updated to `images/fiberboard/nal-res-door-white-panel.jpg` |
| B | EXACT | `nal-easy-indian-autumn-rustic.jpg` = `nal-uv-indian-autumn-rustic.jpg` — Easy/UV variants share identical photo | ⏳ Intentional pattern (same stone, different product line) — no change until a proper UV-specific swatch photo is available |
| C | d=0 | `fb-commercial-partitions.jpg` (841px, index.html) vs `fb-partition-commercial.jpg` (1200px, catalog.html) | ⏳ Fiberboard — deferred pending high-quality replacement image |
| D | d=0 | `fb-door-cutaway.jpg` (34KB) vs `fb-res-sliding-door.jpg` (70KB) — same image, two names | ⏳ Fiberboard — on-page duplicate partially resolved (fiberboard page app4 → `fb-joinery-builtin.jpg`). Remaining cross-page use deferred pending high-quality replacement image |
| E | d=0 | `fb-door-minimalist.jpg` / `fb-door-residential.jpg` / `fb-interior-wall-natural.jpg` — 3 names, 1 image | ⏳ Fiberboard — `fb-interior-wall-natural.jpg` resolved (replaced with brochure-p008-i031). `fb-door-residential.jpg` still duplicates `fb-door-minimalist.jpg` — deferred pending high-quality replacement image |
| F | d=0 | `nal-hero-stone-curved-staircase.jpg` = `nal-stone-app-lobby.jpg` on nalexible-stone.html | ✅ Fixed 2026-04-07 — Applications hospitality tile replaced with `nal-marble-bathroom-gold.jpg` (718×814px, luxury marble bathroom with gold fittings from 大理石系列.pptx). Caption updated to "Luxury bathrooms that feel like a statement". |
| F2 | same-page | `3d-wall-panel-stair.jpg` used twice on nalexible-stone.html — line 886 (image panel) and line 913 (video poster) | ✅ Fixed 2026-04-07 — video poster replaced with `nal-bg-3d-living-room.jpg` (790×625px, 3D geometric living room from 背胶快装系列.pptx). |
| G | d=0 | Stone swatch 1740453884 = 1740458448 — same swatch across stone page and catalogs | ✅ Intentional — same product swatch used consistently across pages. No action. |
| H | d=5 | Stone swatches 1740397457 ≈ 1740452475 — similar tones | ✅ Intentional pattern (same as B/G) — similar swatches represent different products. No action. |
| I | d=6 | `plye-lifestyle-living-room-soft-gray.jpg` ≈ `plye-product-display-planks.jpg` | ✅ Fixed 2026-04-07 — `plye-product-display-planks.jpg` on about.html replaced with `plye-lifestyle-dark-modern-tv-wall.jpg` (1706×960px, dark modern living room with TV wall). |
| J | d=6 | `nal-lumislate-cold.jpg` / `nal-lumislate-warm.jpg` — intentional cold/warm pair | ✅ Intentional — shows clients the on/off lighting contrast of LumiSlate. No action. |
| K | d=7 | `plye_dm_hdf_photo.jpeg` ≈ `plye_dm_plywood_photo.jpeg` — similar material closeups | ✅ Intentional — shows clients the quality difference between HDF and plywood cores. No action. |
| L | FALSE+ | `fb-door-elegant.jpg` vs `app-fb-hospitality.jpg` — hash collision, different images | ⏳ Fiberboard — confirmed false positive but flagged for review alongside C/D/E when better images are sourced |

---

## Planned Refactor — Plan A (Folder Reorganisation)

```
web_dev/
├── [HTML files — root, unchanged]
├── script.js, favicon.svg, fsc-logo.svg, robots.txt, sitemap.xml
├── images/
│   ├── plye/          ← plye-*.jpg, plye_dm_*
│   ├── stone/         ← active nal-*.jpg lifestyle/app images
│   ├── fiberboard/    ← fb-*.jpg + nal-res-door-white-panel.jpg
│   └── _archive/      ← bro_*, tok_*, nal-case715-*, nal-prod715-*, nal-trans715-* (PDF extracts)
├── videos/            ← nal-video-*.mp4
├── docs/              ← *.pdf, *.ppt
└── nalexible/         ← unchanged (already organised)
```

After Plan A, all `src="filename.jpg"` references in HTML will be updated to `src="images/plye/filename.jpg"` etc.

---

## Folder Cleanup — Archive to Master (2026-04-07)

Moved all non-deploy assets out of `web_dev/` into `~/Documents/AshleyKitchen_Master/`. Result: **5.1 GB → 2.3 GB**.

### Duplicate video removed
`assets/nalexible/fiberboard/impact-test.mp4` (771 MB) confirmed identical to `videos/nal-video-impact.mp4`. Kept one copy in Master, deleted the duplicate.

### Moved to `~/Documents/AshleyKitchen_Master/`

| Item | Destination | Size |
|------|-------------|------|
| `videos/nal-video-brand-en.mp4` | `brand-videos/` | 217 MB |
| `videos/nal-video-brand-zh.mp4` | `brand-videos/` | 216 MB |
| `videos/nal-video-compression.mp4` | `brand-videos/` | 36 MB |
| `videos/nal-video-impact.mp4` | `brand-videos/` | 771 MB |
| `videos/nal-video-lumislate-demo.mp4` | `brand-videos/` | 9.9 MB |
| `assets/nalexible/fiberboard/compression-test.mp4` | `nalexible-fiberboard/videos/` | 36 MB |
| `assets/nalexible/fiberboard/edge-band.mp4` | `nalexible-fiberboard/videos/` | 47 MB |
| `assets/nalexible/fiberboard/magnetic-door.mp4` | `nalexible-fiberboard/videos/` | 28 MB |
| `assets/nalexible/fiberboard/partition-install.mp4` | `nalexible-fiberboard/videos/` | 35 MB |
| `assets/nalexible/fiberboard/docs/` | `nalexible-fiberboard/docs/` | 305 MB |
| `assets/nalexible/fiberboard/explainers/` | `nalexible-fiberboard/explainers/` | 10 MB |
| `assets/nalexible/fiberboard/` — unreferenced images | `nalexible-fiberboard/images/` | ~8 MB |
| `assets/nalexible/stone/tmp_3d/` | `nalexible-stone/tmp/` | 10 MB |
| `assets/nalexible/stone/tmp_cases/` | `nalexible-stone/tmp/` | 164 MB |
| `assets/nalexible/stone/tmp_lumi/` | `nalexible-stone/tmp/` | 36 MB |
| `assets/nalexible/stone/review/` | `nalexible-stone/review/` | 11 MB |
| `assets/nalexible/stone/docs/archive/` | `nalexible-stone/docs/` | 0.5 MB |
| `assets/nalexible/stone/docs/certifications/` | `nalexible-stone/docs/` | 3.6 MB |
| `assets/nalexible/stone/docs/technical-reports/` | `nalexible-stone/docs/` | 15 MB |
| `assets/nalexible/stone/images/` — 3 unreferenced material-roll variants | `nalexible-stone/images/` | ~5 MB |
| `assets/nalexible/review/` | `nalexible-stone/review/` | 10 MB |
| `images/_archive/` | `_archive/` | 86 MB |
| All `*.md` dev notes from `assets/` | Master root / product folders | < 1 MB |

### What remains in `videos/` (deploy-only)
- `nal-video-exterior.mp4` — referenced in HTML ✓
- `nal-video-lumislate.mp4` — referenced in HTML ✓

### Master folder structure
```
~/Documents/AshleyKitchen_Master/
├── nalexible-fiberboard/
│   ├── videos/       ← source test videos
│   ├── docs/         ← PDFs, brochures
│   ├── explainers/
│   └── images/       ← unreferenced HQ images
├── nalexible-stone/
│   ├── docs/         ← certifications, technical-reports, archive
│   ├── images/
│   │   ├── master/   ← 905MB HQ stone master images
│   │   └── unused/   ← 65 unreferenced web images
│   ├── tmp/          ← tmp_3d, tmp_cases, tmp_lumi
│   └── review/
├── plye/
│   └── images/       ← 13 unreferenced plye images + DM icon PNGs
├── brand-videos/     ← nalexible brand/demo videos + symlinks
└── _archive/         ← old site images
```

### Second pass — additional 1.05 GB removed (2026-04-07)

| Item | Size | Action |
|------|------|--------|
| `images/stone/master/` | 905 MB | Moved → `nalexible-stone/images/master/` |
| `nalexible/video/master/fiberboard/` | 99 MB | Moved → `nalexible-fiberboard/videos/master/` |
| `nalexible/video/master/stone/` | 12 MB | Moved → `nalexible-stone/` |
| `nalexible/video/master/lumislate/` | 10 MB | Moved → `nalexible-stone/` |
| `nalexible/video/master/brand/` | 0 MB (symlinks) | Moved → `brand-videos/` |
| 65 unreferenced `images/stone/*.jpg` | ~15 MB | Moved → `nalexible-stone/images/unused/` |
| 13 unreferenced `images/plye/` files | ~11 MB | Moved → `plye/images/` (incl. DM icon PNGs) |
| `nalexible-pdfs/` | 225 MB | Moved → `nalexible-stone/pdfs/` |
| `nal-pdf-extracted/` | 85 MB | Moved → `nalexible-stone/pdf-extracted/` |
| `pptx-extracted/` | 163 MB | Moved → `plye/pptx-extracted/` |
| `tmp/` | 36 MB | Moved → `_working-docs/tmp/` |
| `docs/` (site maps + nalexible brochure PPT) | 42 MB | Moved → `_working-docs/docs/` |

### Final result

| Location | Size | Purpose |
|----------|------|---------|
| `/Users/adam/Desktop/web_dev/` | **788 MB** | Deploy-only — everything referenced in HTML |
| `~/Documents/AshleyKitchen_Master/` | **3.4 GB** | All masters, source files, PDFs, unused assets |

`web_dev/` breakdown (deploy):
- `assets/` 269 MB — stone videos (229MB) + fiberboard posters + stone images + plye brand
- `videos/` 230 MB — nal-video-exterior + nal-video-lumislate (both referenced)
- `images/` 216 MB — plye (57MB) + stone (27MB) + fiberboard with master (158MB)
- `nalexible/` 72 MB — upload product swatches + fiberboard videos + stone videos
