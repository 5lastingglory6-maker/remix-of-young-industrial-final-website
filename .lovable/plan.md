# Typography Consolidation: Archivo + Inter

Reduce the site from four typefaces to two, sitewide.

## Goal

- Everything currently set in **Oswald** becomes **Archivo**
- Everything currently set in **IBM Plex Mono** becomes **Inter**
- Inter stays as the body font; Archivo becomes the single display/heading face

Result: the main site and the Residential & Offices page share one typographic system (Archivo for headings/display, Inter for everything else).

## What changes visually

- All headings (h1–h5) across every page render in Archivo instead of the condensed Oswald.
- On the Residential & Offices page, the small uppercase monospace labels — eyebrows, ticker text, nameplate rows, stat/brand pills, footer column headings, testimonial attributions — switch to Inter. They keep their existing size, uppercase styling, and letter-spacing so the layout rhythm holds; only the letterforms change.
- Archivo is heavier and wider than Oswald, so heading lines will be slightly wider. Heading tracking is reviewed after the swap so long headlines don't wrap differently on mobile.

## Technical details

1. `src/styles.css` — change `--font-heading` to `Archivo, Inter, system-ui, sans-serif`. `--font-sans` (Inter) stays as-is.
2. `src/styles/youngs.css` — repoint `--font-mono` to the Inter stack. `--font-display` already resolves to Archivo and stays. The many `font-family:var(--font-mono)` rules then inherit the change with no per-rule edits.
3. `src/routes/__root.tsx` — replace Oswald with Archivo in the Google Fonts `<link>`, keeping the weights the headings need (500/700/800/900) plus the existing Inter weights.
4. `src/routes/residential-offices.tsx` — drop `IBM+Plex+Mono` from that route's Google Fonts `<link>`; keep Archivo and Inter. Since Archivo now loads at root, this route's link is simplified to avoid a duplicate request.
5. Sweep for any component using an Oswald or mono utility class directly, and update those to the shared tokens.

## Verification

Render the homepage plus the Residential & Offices page at desktop and mobile widths, confirm no Oswald or IBM Plex Mono remains in computed styles, and check that headings and uppercase labels still fit their containers.
