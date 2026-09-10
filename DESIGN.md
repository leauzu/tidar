# DESIGN.md

## Direction

The homepage intentionally translates the current UNDP editorial system into TIDAR's identity instead of creating a generic institutional landing page. The supplied UNDP screenshots are the geometry reference for the header and mega menus; the live UNDP homepage is the reference for the Featured/Recent News density and interaction language.

## TIDAR colour tokens

| Role | Value |
| --- | --- |
| Deep red | `#A9232A` |
| Bright red | `#D62B32` |
| Gold | `#F2B233` |
| Muted gold | `#B88424` |
| Warm ivory | `#F5F1EA` |
| Dark text | `#2B211D` |
| Warm white | `#FFF8F4` |
| Divider | `#DDD5CD` |

Blue is intentionally absent from the new header, programme cards, leader quote panels, recent-news grid and footer.

## Header

- 116px desktop height, close to the supplied UNDP reference.
- Center logo block is geometrically independent from the left/right menu label lengths.
- Two primary items left and two right.
- Desktop mega menu uses a 1210px reference width, left submenu rail, editorial copy column, and optional full-height image.
- Active submenu uses TIDAR red instead of UNDP blue.
- No-image menu states expand the editorial column rather than leaving a blank image slot.
- Pengurus Daerah uses a compact multi-column region index.
- Mobile switches at 820px to a full-screen accordion drawer.

## Program Utama

The programme grid uses the same editorial logic as UNDP Featured content:

- one title cell;
- one dominant 3-column lead card;
- four supporting cards;
- 4px grid gutters;
- desaturated/light default image treatment;
- dark photographic overlay on hover/focus;
- category, title, short description, and line-arrow CTA.

No rounded cards, shadows, glass surfaces, or SaaS-style icon blocks are used.

## Leader quote panels

Three full-screen panels replace the previous single mission scene. On desktop every panel is `position: sticky` beneath the shared header, so later panels naturally rise over and cover earlier ones.

Layout alternates:

1. image left / quote right — deep red
2. quote left / image right — warm ivory
3. image left / quote right — muted gold

Images gently settle from approximately 1.075 scale to 1.01 while entering. Quote copy moves only a few pixels and fades in; the effect uses transform/opacity for smooth compositing.

On mobile, each story keeps an image-above-copy composition inside the previously implemented sticky/overlapping card stack, with a compact 35–42svh portrait region depending on viewport height.

## Recent News

The news section uses a 3-column editorial grid with the section title occupying the first cell, followed by eight news cards. Hover/focus behavior mirrors the programme cards while preserving TIDAR red arrow accents.

## Responsive checkpoints

- 1440px: full UNDP-style header and mega menu.
- 1024px: compact desktop header/menu with the same structure.
- 768px: mobile drawer, 2-column programme/news grids, sticky overlapping leader panels.
- 430px / 390px: single-column editorial cards and single-column province list.

## Motion

- Mega menu: 240ms soft translate/opacity entrance.
- Submenu content/image: 260–350ms restrained entrance.
- Editorial hover: 300–550ms depending on image vs copy.
- Leader images: scroll-linked transform only; no spring/bounce.
- `prefers-reduced-motion` disables scroll-linked transforms and collapses motion timing.

## Header, CTA, footer, and touch refinements

- The site header is fixed over the hero in its initial transparent state and transitions to white after a 24px scroll threshold or whenever navigation is open.
- The supplied logo's visible mass is right-weighted; the rendered mark is optically shifted left inside a viewport-centered wrapper while keeping the wrapper itself geometrically centered.
- The new participation CTA is a flat, editorial red field with a narrow gold rail and asymmetric text/action grid; it intentionally avoids rounded-card or SaaS composition.
- Footer information architecture follows the current tidar.or.id hierarchy: organisational statement, Tentang TIDAR, Organisasi, Hubungi Kami, and a restrained discover/social area.
- Touch Program Utama cards use first tap to reveal the desktop hover state and second deliberate tap to follow the link.
- On mobile, leader stories use CSS sticky stacking with increasing z-index so each following story progressively covers the prior story while retaining the existing image-over-copy identity.


## Homepage refinement — angular hero + editorial markers

- The hero keeps the existing sticky video/mobile-image media system but now uses the current TIDAR homepage's public copy hierarchy: `MUDA, BERGERAK, BERDAMPAK.`, `Awal Bangsa Yang Kokoh`, and `Jelajahi`.
- The previous organic wave has been replaced by a single rising diagonal white reveal with thin TIDAR red/gold vector accents. The reveal is driven by the existing hero scroll progress, so it remains physically attached to the incoming light section.
- Program and news title cells are intentionally reduced to large editorial markers: `PROGRAM TIDAR` and `BERITA TIDAR`. Repetitive per-card program numbering is no longer rendered.
- Five leadership panels now form the storytelling sequence. Desktop alternates image/text direction; mobile keeps the existing sticky overlapping stack.

## Internal-page system

The institutional expansion uses three related hero modes:

1. **Cinematic** — dark, image-led, high-impact landing/leadership pages.
2. **Editorial split** — text/image compositions for profile, identity and vision pages.
3. **Structured** — quieter large-type hero for documents and organizational directories.

All internal routes reuse the homepage red/gold/ivory system, sharp editorial geometry, asymmetric layouts, thin rules, subtle reveal motion and strong whitespace. Motion is intentionally limited to opacity/transform and respects `prefers-reduced-motion`.
