# Reduce Mobile Hero Banner Height on Vacuum Truck Services Page

## Scope
- Only change the hero section on `src/routes/services.vacuum-truck-services.tsx`.
- Do not change the hero image asset, the overlay opacity/gradient, the banner text, or the CTA buttons.
- Only adjust the section height and vertical layout so the image shows at a better aspect ratio on mobile.

## Current Problem
- The hero uses vertical padding (`py-24 md:py-28`) to create space, so its height is driven by the content (eyebrow, h1, two CTAs) plus large padding.
- On narrow mobile screens the text wraps and the padding stacks, making the banner extremely tall and squashing the background image (which is forced to `object-cover` over a tall frame).
- Other service pages (e.g., Refrigeration, Marine Refrigeration) use a fixed-height hero with `items-end`, which keeps the image ratio more consistent across breakpoints.

## Proposed Changes

### 1. Switch hero from padding-based to fixed-height layout
- Replace the padding-based approach (`py-24 md:py-28`) with a fixed responsive height, e.g. `h-[360px] md:h-[400px] lg:h-[480px]` or similar.
- Use `flex items-end` with bottom padding (`pb-10 md:pb-12`) to anchor the text to the bottom of the banner, matching the tablet view feel.
- Keep the existing image, overlay gradient, and text content exactly as-is.

### 2. Preserve text readability at the smaller height
- Confirm the h1 and CTA buttons still fit within the shorter mobile frame without overflow or clipping.
- If needed, slightly reduce the h1 size on mobile (e.g., `text-3xl md:text-5xl lg:text-6xl`) or button wrapper gap, but keep all existing text copy.
- Keep the eyebrow and CTA labels unchanged.

### 3. Verify responsive behaviour
- Check the page at mobile, tablet, and desktop widths to ensure the banner no longer distorts the image and the content remains readable.
- Ensure the FACTS strip directly below the hero is unaffected.

## Acceptance Criteria
- Mobile hero height is closer to tablet height ratio (not content-driven padding).
- Background image appears more naturally framed and less stretched/squashed on mobile.
- No text or CTAs are clipped or overlapping the overlay.
- Other sections on the page remain unchanged.
