# Apply the reference site's colour palette

I pulled the published CSS from `pixel-perfect-clone-86537.lovable.app`. Good news: it uses the exact same colour token names as this project (`navy-*`, `steel-*`, `safety-*`) — only the hex values differ. So this is a clean values-only swap, no markup changes.

## Key difference

The reference site is entirely blue: its "safety" scale is blue, not orange. This project currently uses orange accents (`safety-500 #f97316`), which is why the pages look off.

| Token | This project (now) | Reference (target) |
| --- | --- | --- |
| navy-500 | #025599 | #006fb7 |
| navy-800 | #012a4f | #143a6b |
| navy-900 | #011a33 | #0b1e45 |
| safety-500 | #f97316 (orange) | #006fb7 (blue) |
| safety-600 | #ea580c (orange) | #1c62a2 (blue) |
| steel-700 | #404862 | #3a3a3a |
| steel-50 | #f6f7f9 | #f7f9fa |

## What changes

1. **Global palette** — replace the `navy`, `steel` and `safety` scale values in `src/styles.css` with the reference values (full 50–950 ramps). Every page picks this up automatically since all pages use these classes.
2. **Residential & Offices page** — this page has its own separate stylesheet with a different palette (frost / fjord / ember teal-and-orange). Remap those variables to the new blues so the page matches the rest of the site:
   - `--fjord` / `--fjord-deep` -> navy blues
   - `--ember` / `--ember-deep` -> the blue accent (replaces orange)
   - `--frost` / `--frost-dim` -> the new steel off-whites
   - `--graphite` / `--slate` -> new steel darks
3. **No layout, copy, font or spacing changes** — colours only, as requested. Banner/hero sections keep their current structure.

## Technical notes

- Files touched: `src/styles.css` (the `@theme` brand block) and `src/styles/youngs.css` (`:root` variables at the top).
- Ramp values missing from the reference (`safety-800/900`, `steel-900`) get derived to stay consistent with the new blue ramp.
- Shadcn base tokens (`--primary`, `--background`, etc.) are left untouched — they match the reference already.
- After the swap I'll spot-check the home page, a services page, and the residential page in the browser to confirm no orange remains and contrast still reads well.
