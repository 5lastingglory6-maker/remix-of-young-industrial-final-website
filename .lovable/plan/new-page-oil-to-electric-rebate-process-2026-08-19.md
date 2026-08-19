# New page: Oil-to-Electric rebate process

Build a new page at `/residential-offices/oil-to-electric-rebate` that reproduces the layout of the uploaded mockup section-for-section, with all wording kept exactly as written in that file. Only the fonts and colours change, so the page sits inside the site's existing navy/blue design system.

## Sections (same order as the mockup)

1. Hero — eyebrow "Residential Heating Upgrade", headline, intro paragraph, two buttons ("Check My Home's Eligibility", "See How It Works"), dark navy image overlay in the site's hero style.
2. Trust strip — 4 items with the same icons/labels (35+ Years, Residential, NL, Start → Finish) on navy.
3. Intro — "The Process Made Simple" tag, title and paragraph.
4. Process timeline — numbered step cards (1-6) with their headings, paragraphs and bullet lists, on the light section background.
5. Guidance — two-column section with a photo and the "✓" feature blocks (qualified assessment, document collection, clear communication).
6. What to Expect — navy section with the 4 outline-icon cards.
7. CTA — "Let's Get Started" tag, headline, paragraph, primary button, and the full legal notice paragraph verbatim.

The mockup's own navbar and footer are dropped; the page uses the site's existing header and footer.

## Styling

- Reuse the site's existing tokens and utilities (`navy-*`, `steel-*`, `safety-*`, `section-pad`, `container-8xl`, `eyebrow`, `btn-primary`) instead of the mockup's raw hex values and Manrope/Inter pair, so the page matches the rest of the site. No new fonts, no new colours.
- Icons come from the mockup's inline SVG paths where lucide has no equivalent; otherwise lucide icons in the same visual role.
- Responsive breakpoints mirror the mockup: 4-up trust/expect grids collapse to 2-up then 1-up, two-column guidance stacks, step cards stack their number above the text on small screens.

## Wiring

- The selected "See If I Qualify" button in the rebate section of `/residential-offices` becomes a link to the new page (replacing the `#quote` anchor).
- Add "Oil to Electric Rebate" as a child item under "Offices & Residential Services" in the nav tree, so it appears in the desktop dropdown and mobile accordion.
- The new page's own CTA buttons ("Check My Home's Eligibility") point at the existing quote form on `/residential-offices#quote`; "See How It Works" scrolls to the process section on the page.

## Technical notes

- New route file `src/routes/residential-offices.oil-to-electric-rebate.tsx` with `createFileRoute('/residential-offices/oil-to-electric-rebate')`. Because `residential-offices.tsx` becomes a parent path, it stays a leaf: the child is a sibling flat route, so no layout/`Outlet` change is needed.
- Route gets its own `head()` with title "Oil to Electric | Young's Industrial", a page-specific description, og:title/og:description, og:type and twitter:card.
- Hero and guidance images reuse existing residential assets (`hero-heatpump`, `g-minisplit`/`g-thermal`) via their `.asset.json` pointers — no new image generation unless you want fresh photos.
- Adding a child to the nav item is data-only in `src/data/site.ts`; `Header.tsx` already renders dropdowns for any item with `children`.
