# Import the Young's Industrial site into this project

Bring the uploaded export in as a faithful, pixel-accurate copy: same pages, same layout, same components, same design system, same responsive and interactive behaviour. No redesign, no re-interpretation.

## What gets imported

**20 pages**

- Home, About, Contact, Products, Projects index, Project detail (`/projects/:slug`)
- Offices & Residential Services, Industrial & Commercial Services
- 6 service pages: Fabrication, Refrigeration & HVAC, Marine Refrigeration, Offshore Oil & Gas, Custom Skids & Packages, Service & Maintenance
- 6 industry pages: Pulp & Paper, Power Generation, Municipal Water & Sewer, Food Processing, Ice Making, Oil & Gas

**Shared components**

Header with multi-level dropdown navigation, Footer, hero and split sections, Stats, Trust bar, Gallery, Team, Community, Projects grid, CTA banner, Careers banner, image frame/placeholder helpers, plus the full shadcn/ui set.

**Content**

All company details, navigation tree, trust badges, and project case studies (challenge / solution / result / scope) come across exactly as written in the export's content file.

**Design system**

The navy + safety-orange industrial palette, Archivo / Inter / IBM Plex Mono typography, button and section utilities, and the separately scoped stylesheet used by the Offices & Residential page are all ported as-is.

## Images

The export contains only image pointers, not the image files, and they point at the original project's asset storage. I will first try to pull each of the 17 originals down and re-register them in this project so the site looks identical. For any that can't be retrieved, I'll generate a visually matching replacement (industrial welding hero, plant facility, cold storage, plate freezer, marine vessel, machine room, solar/thermal/panel gallery shots, logos) in the same photographic style so no page ships with a broken or empty image.

## Verification

After the import I'll run the site and walk through every route in a browser at desktop and mobile widths, checking the nav dropdowns, project detail pages, and contact form render and behave correctly, and fix anything that doesn't.

## Technical notes

- Stack matches this project exactly (TanStack Start v1, React 19, Tailwind v4, shadcn/ui), so files copy over directly.
- Copy `src/**`, `public/favicon.png`, `public/robots.txt`, `components.json`; exclude the archive's `.lovable/`, lockfile, and generated `src/routeTree.gen.ts` (the router plugin regenerates it). The archive contains no `.git` metadata.
- `package.json` deps are identical apart from `@lovable.dev/vite-tanstack-config`; keep this project's newer version and install only genuinely missing packages.
- Fonts load via `<link>` in `__root.tsx` (Archivo, Inter, IBM Plex Mono), never a CSS `@import` URL.
- Each route keeps/receives its own `head()` with page-specific title, description, og and twitter tags.
- Asset pointers are re-created with the asset CLI so `src/assets/*.asset.json` resolve under this project's ID.
