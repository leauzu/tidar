# Requested changes

- Footer logo now uses `assets/Logo TIDAR.png` on every page through the shared Astro footer component.
- `role-olahraga-kreativitas.svg` is redesigned as a clean, simple running stickman.
- Global typography hierarchy, text colors, line-height, navigation text, buttons, cards, and responsive sizes are refined for a more professional presentation.
- `Dokumen Resmi` is the final item in the `Tentang TIDAR` dropdown on desktop and mobile.
- Rebuilt as an Astro static project with shared layout, header, and footer components.
- All internal pages use clean routes without `.html`.
- A deploy-ready static `dist/` directory is included.
## Encoding-safe UI glyph fix — 2026-07-27
- Added explicit UTF-8 declarations to deployed stylesheets.
- Replaced font-based navigation symbols with a CSS-drawn chevron.
- Replaced decorative quote and bullet glyphs with encoding-safe CSS escapes.
- Converted homepage testimonial quotation marks to HTML entities.

