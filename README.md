# TIDAR — Homepage Fidelity Pass

This project is the latest TIDAR homepage project updated in place. It keeps the existing Next.js/TypeScript/Tailwind stack and the cinematic hero media from the previous revision, while rebuilding the homepage navigation and editorial sections around the current UNDP layout logic and current TIDAR content.

## What changed

- Shared header rebuilt around the UNDP desktop proportions: two navigation groups around a centered TIDAR logo block.
- Removed utility/search/global controls and language switch.
- Added four interactive desktop mega-menu groups with active submenu states.
- Added image and no-image mega-menu compositions matching the supplied UNDP screenshots.
- Added the complete 38-province Pengurus Daerah link grid.
- Mobile navigation is now a full-screen accordion drawer instead of a compressed desktop mega menu.
- Removed the old Campaign, What We Do, Partnerships, Global Impact and Publications homepage sections.
- Replaced the old mission scene with three stacked sticky leader-quote panels.
- Rebuilt the feature grid as **Program Utama** using the five current TIDAR programmes.
- Rebuilt Recent News into a dense UNDP-style editorial grid using current TIDAR article copy.
- Replaced blue UI accents in the new navigation/editorial experience with TIDAR red, gold, ivory and warm neutral tokens.

## Homepage order

1. UNDP-proportioned TIDAR header + mega menus
2. Existing cinematic video/image hero
3. Program Utama
4. Three sticky leader quotes
5. Recent TIDAR news
6. TIDAR footer

## Stack

- Next.js 16.3.4
- React 19.2.8
- TypeScript 6.0.3
- Tailwind CSS 4.3.3

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Content sources

Organisational copy, programme names, leadership roles and news summaries were adapted from the current public TIDAR website (`https://www.tidar.or.id/`). Layout and interaction proportions were independently reimplemented from the current UNDP website and the user-supplied UNDP screenshots; no UNDP code, logo, or written copy is included.

Photography credits are documented in `IMAGE-CREDITS.md`.

## September 8 interaction refinement

This revision keeps the existing homepage architecture and adds a transparent-on-hero header that becomes white after a small scroll threshold, optical logo centering, a post-news participation CTA, a tidar.or.id-informed footer hierarchy, two-stage touch interaction for Program Utama cards, and mobile sticky/overlapping leader-story panels. Desktop Program Utama hover behavior remains unchanged.


## September 8 hero/program/leader refinement

This revision keeps the existing project structure and adds the requested homepage-only refinement:

- Hero copy now follows the current public TIDAR homepage wording: **MUDA, BERGERAK, BERDAMPAK.**, **Awal Bangsa Yang Kokoh**, and a restrained **Jelajahi** scroll cue.
- The old hero arrow link and organic/wave divider were removed. The hero now uses a scroll-linked angular red/gold **rising diagonal reveal** attached to the incoming white section.
- Program cards retain their existing hover / two-tap touch interaction but no longer show repetitive `PROGRAM 01/02/...` labels. The section marker is now simply **PROGRAM TIDAR**.
- Leadership stories now include Prabowo Subianto, Hashim Djojohadikusumo, Rahayu Saraswati, Sufmi Dasco, and Sugiono. Hashim uses the supplied local image.
- **BERITA TIDAR** is now a single strong editorial title cell without eyebrow/supporting metadata.

The Sufmi Dasco quote is the wording currently published on `tidar.or.id`. The Sugiono quote is attributed to the Ministry of Foreign Affairs of the Republic of Indonesia, 9 July 2026.

## Institutional site expansion — September 2026

This build expands the existing cinematic homepage into permanent institutional routes using current TIDAR content as the information source while preserving the ZIP homepage as the visual/art-direction foundation.

Implemented routes:

- `/tentang-tidar`
- `/profil`
- `/visi-misi`
- `/tugas-fungsi`
- `/makna-lambang`
- `/dokumen-resmi`
- `/profil-pimpinan`
- `/profil-pimpinan/rahayu-saraswati-djojohadikusumo`
- `/struktur-organisasi`
- `/pengurus-pusat`

Intentionally excluded from this build: news index/detail pages and media/gallery archives. The homepage may still link to current official TIDAR news content externally.

New internal pages use only existing local project/TIDAR imagery. No new Pexels photography was added for the institutional expansion.
