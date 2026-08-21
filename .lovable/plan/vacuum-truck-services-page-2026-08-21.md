# Vacuum Truck Services Page

A new page covering vacuum truck services for homes, businesses and industrial sites, placed under **Industrial & Commercial Services**.

Route: `/services/vacuum-truck-services`
Menu: new child item "Vacuum Truck Services" under Industrial & Commercial Services (desktop dropdown + mobile menu).

No new images are generated. The page reuses the existing vacuum photos already in the project (`vac-hero-truck`, `vac-sump-tank`, `vac-catch-basin`, `vac-bulk-hauling`, `vac-septic-pumping`, `vac-emergency-callout`) plus `p-industrial-cooling-compressor-2` / `gen-fab-shop` for the industrial and process blocks.

## Content rule

Every line of the supplied copy is reproduced verbatim — all headings, sub-headings, paragraphs, bullet lists, the 9 FAQ entries, the 4 process steps, the 4 "Why Young Industrial" blocks, and every button label. Nothing is summarised, merged or dropped.

## Section-by-section layout (varied styles to keep it dynamic)

1. **Hero banner** — full-bleed vacuum truck photo, navy overlay (same opacity treatment as the existing vacuum page), H1 plus the two intro paragraphs, buttons `REQUEST SERVICE` (to /contact) and `CALL NOW` (tel: link).
2. **Company facts strip** — under the hero: 3 vacuum trucks in the fleet, 10 years in business, dispatch within 24 hours, service area, certified disposal.
3. **"We Handle the Mess So You Don't Have To"** — 6-item icon card grid (all six services with their descriptions).
4. **"Vacuum Truck Services for Your Home"** — intro paragraphs, then a 3-column card grid of photo-top cards for Septic Tank Pumping & Cleaning, Holding Tank Pumping, Emergency Septic Pumping, Drain & Sewer Cleaning, and Video Pipe Inspection. Each card shows an image, the sub-heading, the body text, and a "Show more" toggle, with no CTA buttons in this section.
5. **"Is Your System Showing Signs It Needs Attention?"** — two-column: warning-signs checklist on one side, the "Prevent Problems Before They Become Emergencies" prose + CTA on the other.
6. **"Keeping Your Business Moving"** — dark navy band with the commercial sub-sections (Commercial Septic, Grease Trap Cleaning + button, Sump & Catch Basin, Car Wash & Wash Bay Pits, Commercial Drain & Sewer) as numbered accordion-style cards.
7. **"Vacuum Truck Solutions for Industrial Operations"** — photo split, prose, the 8-item capability list as chips, and the "TALK TO OUR TEAM ABOUT YOUR PROJECT" button.
8. **"One Service. One Straightforward Process."** — 4-step numbered timeline (01–04) matching the rebate page timeline treatment.
9. **"Why Young Industrial?"** — intro prose + 4 feature cards + REQUEST SERVICE button.
10. **Service area band** — "Serving Homes, Businesses & Industrial Sites Across Atlantic Canada", with the supplied prose (service area rendered as Atlantic Canada / Newfoundland & Labrador, matching the rest of the site) and CONTACT US button.
11. **FAQ** — all 9 questions as expandable accordion items, full answers verbatim.
12. **Closing CTA** — "Have a Tank, Drain, Sump or Waste Problem?" with both buttons.

## Supplied operational details

- Fleet: three vacuum trucks
- Years in business: 10 years of vacuum truck service (within Young's longer industrial history)
- Response: emergency calls dispatched within 24 hours, with same-day response where crews and capacity allow
- Service area: Atlantic Canada — Newfoundland & Labrador, served from the Come By Chance and area offices, wherever our crews and offices operate
- Certifications / compliance shown: ISO 9001:2015 quality system, provincial waste-hauler registration under the NL Environmental Protection Act, Environmental Emergencies (spill response) compliance, Transportation of Dangerous Goods (TDG) certified drivers, WHMIS 2015, confined-space entry and fall-protection training, Class 3 air-brake licensed operators, COR / occupational health & safety program
- Disposal: liquid waste, sludge and grease manifested and tipped only at approved municipal and licensed private treatment facilities, with documentation retained for every load

## Technical notes

- New file `src/routes/services.vacuum-truck-services.tsx` with a route-level `head()` giving a unique title, description, og/twitter tags, and og:image pointing at the hero asset's absolute CDN URL.
- Existing tokens only: navy / steel / safety scales, `container-8xl`, `section-pad`, `eyebrow`, `btn-primary`, `btn-ghost`. No hardcoded colours, no overlay-opacity changes.
- Accordion/expand behaviour done with local `useState`, same pattern as the existing vacuum services page.
- One nav entry added to `NAV_LINKS` in `src/data/site.ts`; header renders it automatically.
