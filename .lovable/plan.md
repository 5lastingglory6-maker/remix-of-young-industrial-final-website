# Real Company Projects + New Projects Layouts

Add Young's 15 real client projects (from PROJECT_BUILD.docx), rank them above the existing 10 everywhere, and rebuild the projects grid and project detail page following the two uploaded HTML templates — reskinned into the site's approved navy/steel/safety palette and Archivo + Inter typography.

## The real projects (15)

**Public Infrastructure & Recreation**
1. Town of Paradise Twin Arena — Paradise Double Ice Complex, 2014, $22M, 83,400 sq ft, LEED Silver, R-717 plant + waste-heat recovery *(full case study)*

**Energy & Heavy Industry**
2. Kiewit Kvaerner — Bull Arm Site Service (Hebron GBS, 2011–2017)
3. Kiewit Kvaerner — Bull Arm Batch Plant, concrete thermal control *(full case study)*
4. Labrador Ready Mix — Muskrat Falls mass-concrete cooling, 2014–2017 *(full case study)*
5. Neal — Bull Arm camp cold storage & marine-grade framing, 2012–2016 *(full case study)*
6. North Atlantic Refinery / Braya, Come By Chance — turnaround piping, 2015–2024 *(full case study)*
7. Asphalt Products Inc., Come By Chance — jacketed hot-oil piping, 2016–2019 *(full case study)*
8. Vytrell Engineering — Vale Voisey's Bay, low-temp spooling, 2015–2018 *(full case study)*

**Marine & Seafood**
9. Quinlan Brothers, Bay de Verde — post-fire rebuild, 2017 *(full case study)*
10. True North Salmon / Cooke Aquaculture, St. George's NB — slurry ice + 316L, 2015–2016 *(full case study)*
11. Fogo Island Co-op — multi-plant overhauls, ongoing *(full case study)*
12. Ocean Choice International, St. John's — vessel welding, ammonia cargo chilling
13. Torngat Fish Producers Co-op, Goose Bay — ice augers, sub-arctic fabrication *(full case study)*

**Institutional & Healthcare**
14. Eastern Health — Burin Peninsula Health Care Centre
15. Eastern Health — Dr. G.B. Cross Memorial Hospital, Clarenville
*(14 and 15 share one full case study on central chiller plants and CWB equipment foundations)*

## Projects grid (per template 1)

- Centered eyebrow rule + heading + intro paragraph.
- Sector filter pills: All Sectors, Public Infrastructure, Energy & Heavy Industry, Marine & Seafood, Institutional & Healthcare — plus the legacy categories so the existing 10 stay filterable.
- 3-column card grid (2 at tablet, 1 at mobile), 4:3 image area, uppercase sector tag, title, condensed description, "Learn More" arrow that nudges right on hover, card lifts on hover.
- Real projects fill the top of the grid. Existing 10 follow.
- Cards with no photo use the template's tinted gradient panel with a placeholder icon, so the grid stays clean until real photos arrive.
- The same card component is reused in `ProjectsSection`, so service and industry pages get the identical look.

## Project detail page (per template 2)

Order: breadcrumb → dark gradient banner (sector eyebrow, H1, meta row: Location / Completed / Scope / Client, wide banner image) → white stat strip (up to 4 figures) → sticky side image beside About the project / The engineering challenge / What we delivered checklist / "Why it mattered" callout → reversed image+text "The outcome" row → Related Work (3 cards from the same sector) → dark CTA with Request a Quote + View All Projects.

Sections render only when the project has that content, so shorter entries (Ocean Choice, Eastern Health) never show empty blocks or a stat strip.

## Everywhere else

Service pages, industry pages, and any home project block: real projects first, then existing ones fill remaining slots, mapped by sector — e.g. Fabrication pulls the refinery, asphalt terminal, and Voisey's Bay work; Refrigeration pulls the arena, Quinlan, and Neal.

## Design translation

The templates' custom palette maps onto existing tokens rather than introducing new hex values: frost → steel-50, graphite → navy-900/950, fjord → navy-600/700, ember → safety-500/600, slate → steel-600. Mono eyebrows become uppercase tracked Inter, matching the sitewide font decision that replaced IBM Plex Mono.

## Content approach

Long-form case-study text is condensed for cards, intros, and bullets while keeping the technical specifics (ASME B31.3/B31.5, CWB, Charpy, 316L, R-717, tonnages, dates, dollar values). No invented clients, figures, or outcomes.

## Technical notes

- `src/data/site.ts`: add `featured`, `sector`, `year`, optional `stats[]`, `about`, `delivered[]`, `callout`, `outcome`; keep existing fields for the legacy 10; add a shared ordering helper used by every consumer.
- New `ProjectCard` component shared by `projects.index.tsx` and `ProjectsSection.tsx`.
- `projects.$slug.tsx` rebuilt to the case-study structure with conditional sections and route `head()` metadata per project.
- Imagery: no client photos supplied yet, so real projects use gradient placeholders with descriptive labels; swapping in photos later is a data-only change.
