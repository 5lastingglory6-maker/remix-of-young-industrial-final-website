# Vacuum Truck Core Services Layout Refinement

Refactor the **Core Services** section on `/services/vacuum-truck-services` so the heading and descriptive text become a standalone image-by-text section, while the existing cards remain as a compact, tightly connected grid below it.

## Scope
- Only change `src/routes/services.vacuum-truck-services.tsx`, in the hero, the current `#services` block, and the `CORE_SERVICES` data/cards.
- No new images will be generated; reuse an existing vacuum truck image asset.

## Changes

### 1. Hero banner text removal
- Remove the two long paragraphs currently under the hero `h1` (lines 366–374).
- Keep the hero title, eyebrow, and CTA buttons (`Request Service` / `Call Now`).

### 2. New standalone text-with-image section
- Insert a new section immediately after the hero/facts strip and before the existing cards.
- Layout: two-column grid on desktop (`lg:grid-cols-2`), image on one side, text on the other.
- Text block includes:
  - Eyebrow: `Comprehensive Core Services`
  - Heading: `We Handle the Mess So You Don't Have To`
  - Description: `Young's Industrial provides vacuum truck and related cleaning services for a wide range of residential, commercial, and industrial needs.`
  - The two paragraphs removed from the hero, placed underneath the description.
- Image: propose reusing the `vac-industrial-truck.jpg` asset (or `vac-hero-truck.jpg` if preferred) with a rounded frame and object-cover.

### 3. Core service cards become a connected grid
- Remove the `SectionHeading` wrapper from above the cards (now lives in the new text-with-image section). Do not add a new heading for the cards themselves; each card keeps its existing `h3` title.
- Tighten the spacing between the new text section and the cards (e.g., `mt-8` or `mt-10`) so they read as one continuous section rather than two separate sections.
- Keep the mobile 2-column responsive card layout already implemented.

### 4. Verify
- Confirm the page still builds and renders correctly.
- Review desktop and mobile breakpoints to ensure the new image-by-text section and the tighter card grid look intentional and connected.
