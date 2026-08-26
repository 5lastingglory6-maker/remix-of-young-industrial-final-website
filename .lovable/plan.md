# Mobile Horizontal Card Carousels

Make tight mobile card grids scroll sideways instead of stacking into a tall column, starting with the "What We Do Now" services section on `/residential-offices`.

## Behaviour on mobile (under 600px)

- Cards sit in a single row that scrolls left/right with the finger.
- Each card takes about 78% of the screen width, so the next card peeks in at the edge — a visual cue that there is more to swipe (matching the reference screenshot).
- Scroll snapping so each swipe lands cleanly on one card.
- Cards bleed to the screen edges with matching start/end padding, so the first card lines up with the section text and the last card still has breathing room.
- Native scrollbar hidden; the peeking card is the affordance.
- Tablet (600–900px) keeps 2 columns, desktop keeps 3 columns — unchanged.

## Technical notes

In `src/styles/youngs.css`, replace the `@media (max-width:600px)` rule for `.services-grid` (currently `grid-template-columns:1fr`) with a horizontal scroller:

- `.services-grid`: `display:flex`, `overflow-x:auto`, `scroll-snap-type:x mandatory`, `-webkit-overflow-scrolling:touch`, negative side margins + matching padding for edge bleed, `scrollbar-width:none` and `::-webkit-scrollbar{display:none}`.
- `.services-grid > .service-card`: `flex:0 0 78%`, `scroll-snap-align:start`, slightly reduced padding (`20px`) so text stays comfortable.
- Disable the hover translate inside the scroller on touch widths to avoid jitter during scrolling.

No changes to markup, text, icons or card content in `src/routes/residential-offices.index.tsx`.

## Verify

Check the section at 375px width: one card visible with the next peeking, smooth snapping, no vertical clipping, and no layout change at tablet/desktop widths.

## Follow-up (not in this change)

Once you like the behaviour, the same pattern can be applied to other card sections you point out (e.g. Core Services cards on the Vacuum Truck page, Come By Chance service chips).
