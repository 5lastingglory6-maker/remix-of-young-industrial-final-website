# Add Real Company Projects

Replace the fictional portfolio's top billing with Young's 15 real client projects, sourced from PROJECT_BUILD.docx. Existing 10 projects stay, but always rank below the real ones.

## The real projects (15)

**Public Infrastructure & Recreation**
1. Town of Paradise Twin Arena — Paradise Double Ice Complex, 2014, $22M, 83,400 sq ft, LEED Silver, ammonia R-717 plant + waste-heat recovery (full case study)

**Oil, Gas & Heavy Energy**
2. Kiewit-Kvaerner Contractors — Bull Arm Site Service (2011–2017, Hebron GBS)
3. Kiewit-Kvaerner Contractors — Bull Arm Batch Plant (concrete thermal control) (full case study, shared with #2)
4. Labrador Ready Mix — Muskrat Falls mass-concrete cooling, 2014–2017 (full case study)
5. Neal — Bull Arm camp cold storage & marine-grade framing, 2012–2016 (full case study)
6. North Atlantic Refinery / Braya, Come By Chance — turnaround piping, 2015–2024 (full case study)
7. Asphalt Products Inc., Come By Chance — jacketed hot-oil piping, 2016–2019 (full case study)
8. Vytrell Engineering — Vale Voisey's Bay, low-temp spooling, 2015–2018 (full case study)

**Marine & Commercial Seafood**
9. Quinlan Brothers, Bay de Verde — post-fire rebuild, 2017 (full case study)
10. True North Salmon / Cooke Aquaculture, St. George's NB — slurry ice + 316L sanitary, 2015–2016 (full case study)
11. Fogo Island Co-op — multi-plant overhauls, ongoing (full case study)
12. Ocean Choice International, St. John's — vessel welding, ammonia cargo chilling
13. Torngat Fish Producers Co-op, Goose Bay — ice augers, sub-arctic fabrication (full case study)

**Institutional HVAC & Healthcare**
14. Eastern Health — Burin Peninsula Health Care Centre
15. Eastern Health — Dr. G.B. Cross Memorial Hospital, Clarenville
(14 and 15 share one full case study on central chiller plants and CWB equipment foundations)

## What will change

### Project data
- Add all 15 as real projects with `featured: true`, condensed summaries for cards, and full detail fields (profile, challenge, scope, outcome) drawn from the long-form case studies.
- Extend the category set so Energy/Infrastructure, Mining, Institutional/Healthcare, and Seafood Processing are filterable alongside the existing Fabrication / Refrigeration / Marine / Offshore.
- Keep all 10 existing projects; they sort after the real ones everywhere.

### Projects page (`/projects`)
- Below the hero banner, rebuild the listing per your first HTML template, reskinned into the site palette (navy/steel, orange as accent only) and typography (Archivo headings, Inter body).
- Real projects fill the top of the grid; filters updated for the new sectors.

### Project detail page (`/projects/{slug}`)
- Rebuild per your second HTML template, again reskinned. Section structure follows the case-study shape: Project Profile (asset name, years, scale, stakeholders), The Engineering Challenge, Engineering & Technical Scope, The Outcome & Validation.
- Sections render only when the project has that content, so the shorter entries (OCI, Eastern Health individually) never show empty blocks.

### Every other project surface
- Service and industry pages, plus any home/section project blocks: real projects first, existing ones fill remaining slots. Sector-to-service mapping so e.g. Fabrication pulls the refinery, asphalt, and Voisey's Bay work.

## Content approach
Long-form case-study text is condensed for cards and intros without losing the technical specifics (ASME B31.3/B31.5, CWB, 316L, R-717, tonnages, dates, dollar values). No invented clients, figures, or outcomes.

## Technical notes
- `src/data/site.ts`: add `featured`, optional `year`, `scale`, `stakeholders`, and structured `challenge`/`scope`/`outcome` blocks; add a shared ordering helper used by every consumer.
- `src/components/ProjectsSection.tsx`, `src/routes/projects.index.tsx`, `src/routes/projects.$slug.tsx` updated to the new layouts and ordering.
- Imagery: no client photos supplied, so each real project reuses the closest existing industrial asset until you provide real photos.
- Each detail page keeps route-level `head()` metadata.

## Next step
Send the two HTML templates and I'll build the layouts against them.
