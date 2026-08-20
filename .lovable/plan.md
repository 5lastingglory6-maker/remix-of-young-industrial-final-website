# New page: Industrial Vacuum & Environmental Waste Services

Build a new page at `/residential-offices/industrial-vacuum-services` using the same visual language as the `/residential-offices` page (the `youngs` design layer: banner image, ticker, hero with eyebrow/lede/CTA row, card grids, dark contrast action block). All supplied copy is used verbatim; only fonts and colours follow the site's existing navy/blue system.

## Sections (in the blueprint's order)

1. Banner + hero — background image of a vacuum truck job site, heading "Industrial Vacuum & Environmental Waste Services" with the high-capacity liquid extraction subhead, plus CTA buttons (Request a Vac Service Quote, Call (709) 467-9712).
2. Comprehensive Core Services — card grid (3-up desktop, 2-up tablet, 1-up mobile) with the five services and their descriptions: Industrial Sump & Tank Cleaning, Catch Basin & Storm Drain Cleansing, Bulk Liquid Waste Hauling, Septic Tank Pumping, Emergency Sewer Tank Backup Service.
3. Fleet Assets & Technical Capabilities — "Built for Scale. Engineered for Compliance." intro paragraph plus the three capability blocks (High-CFM Vacuum Infrastructure, Large-Capacity Tankers, Full Environmental Tracking).
4. The Young's Legacy — two-column section with a photo and the two legacy paragraphs.
5. Direct Dispatch — high-contrast navy block: "Project-Critical Vacuum Issue?" heading, urgency paragraph, primary "Request a Vac Service Quote" button linking to the corporate quote form, and the three Immediate Field Booking Lines as tappable `tel:` links plus the dispatch email as a `mailto:` link.

Emoji markers from the blueprint are dropped in favour of the site's existing icon/eyebrow treatment; no wording changes.

## Wiring

- Add "Industrial Vacuum Services" as a second child under "Offices & Residential Services" in `src/data/site.ts`, so it appears in the desktop dropdown and the mobile accordion alongside "Oil to Electric Rebate".
- The quote button points at the site's Request a Quote destination (`/contact`).

## Images

Generate one new hero image (vacuum truck on an industrial job site) and one supporting photo for the legacy section, saved as project assets. No existing images are replaced.

## Technical notes

- New route file `src/routes/residential-offices.industrial-vacuum-services.tsx` with `createFileRoute('/residential-offices/industrial-vacuum-services')`, sibling to the existing rebate route.
- Imports `@/styles/youngs.css` and reuses its `banner`, `ticker`, `hero`, `wrap`, `eyebrow`, `lede`, `cta-row`, card and reveal patterns; no new CSS tokens, fonts or colours.
- Own `head()` with a page-specific title, description, og:title/og:description, og:type and twitter:card, plus the same Google Fonts links the residential page uses.
- Scroll-reveal behaviour matches the residential page (IntersectionObserver, respecting reduced motion).
