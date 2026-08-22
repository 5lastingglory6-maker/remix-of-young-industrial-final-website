# Full-page screenshots of every page

Capture one PNG per page — each image is the entire page top to bottom, never split into parts. Individual project detail pages (`/projects/:slug`) are skipped; the Projects listing page is captured in full.

## Pages (22)

1. `/` — Home
2. `/about`
3. `/contact`
4. `/products`
5. `/projects`
6. `/industrial-commercial-services`
7. `/industries/food-processing`
8. `/industries/ice-making`
9. `/industries/municipal-water-sewer`
10. `/industries/oil-and-gas`
11. `/industries/power-generation`
12. `/industries/pulp-and-paper`
13. `/residential-offices`
14. `/residential-offices/industrial-vacuum-services`
15. `/residential-offices/oil-to-electric-rebate`
16. `/services/custom-skids`
17. `/services/fabrication`
18. `/services/marine-refrigeration`
19. `/services/offshore-oil-gas`
20. `/services/refrigeration`
21. `/services/service-maintenance`
22. `/services/vacuum-truck-services`

## How it works

- Desktop width 1440px, taken against the running preview.
- For each page: load, scroll through it once so every lazy-loaded image and scroll-triggered animation is resolved, scroll back to top, then capture the whole document height in a single tall image.
- Sticky header stays fixed at the top of the shot only once (no repeating bar mid-page).
- Files land in `/mnt/documents/page-screenshots/` named after the route, e.g. `home.png`, `about.png`, `services-vacuum-truck-services.png`.

## Notes

- No code or content changes — this is capture only.
- Very long pages (Vacuum Truck Services, Home) produce tall PNGs; that is expected since each page stays one image.
