# Come By Chance Additional Services Section

Add a new full-width chip-grid section listing all additional services offered at the Come By Chance location, on both the homepage and `/industrial-commercial-services`, placed directly before the Client Testimonials section.

## Content (verbatim, nothing omitted)

Intro line: "In addition to the above at our Come By Chance location we offer the following"

18 items:
1. 8,00 square foot facility
2. Full machine shop cnc machinery
3. Full pipe welding shop with spinners and cutters
4. Full structural steel shop with plasma
5. Full line of mobile welding and machining equipment truck
6. Full line of trailers to supply material to and from sites
7. Full metal braking and rolling capability
8. Full mechanical contractor
9. Boom trucking services
10. Trucking services
11. Excavating/civil
12. Snow clearing/sanding
13. Sandblasting
14. Painting
15. Mechanic & mobile mechanic
16. 5 ton overhead crane
17. 10 ton overhead crane
18. Lay down space rentals
19. Equipment rentals

(19 items total — all listed above will appear.)

## Design

Reuse the look of the Equipment & Systems chip grid on the Refrigeration page: white card, thin steel border, small safety-orange dot, rounded, compact label.

Differences requested:
- Full width (spans the container, no side-by-side image column).
- Text centered inside each chip; the dot sits to the left of the first line of text, like a normal bulleted line.
- Mobile: smaller padding and text so 2-3 chips fit per row.

Responsive grid: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`, gaps `gap-2 sm:gap-3`, chip padding `px-2 py-2.5 sm:px-4 sm:py-3`, label `text-[11px] sm:text-sm`.

## Implementation notes

- New component `src/components/ComeByChanceServices.tsx` holding the item array and the section markup, so both pages stay in sync.
- Render it in `src/routes/index.tsx` immediately before the Testimonials section.
- Render it in `src/routes/industrial-commercial-services.tsx` immediately before its Testimonials section.
- Section styling follows existing conventions (`section-pad`, `container-8xl`, semantic navy/steel/safety tokens); alternate background so it separates from the adjacent sections.
- No text changes, no new images.
