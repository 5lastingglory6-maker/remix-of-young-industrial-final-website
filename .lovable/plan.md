# Fixed-Ratio Banners Across the Site

## Problem

Two related issues, both caused by banner height being set in fixed pixels (or viewport units) instead of a ratio:

1. The HVAC page banner (`.banner` on `/residential-offices`) uses `height: clamp(240px, 38vw, 460px)`. On a narrow phone the width shrinks but the height stays near the 240px floor, so the banner eats a much larger share of the screen than it does on desktop, and the image gets visibly cropped/squashed.
2. Most page hero banners use fixed pixel heights (e.g. home `h-[600px] md:h-[680px]`, about `h-[360px] md:h-[440px]`, projects `h-[400px]`, contact `h-[280px]`, industries `h-[480px]`, services `h-[400px]`–`h-[420px]`, vacuum truck `h-[360px] md:h-[400px] lg:h-[480px]`). Because the height is fixed while the width is fluid, the visible aspect ratio changes with every screen width and browser zoom level.

## Fix

### 1. HVAC page banner
Replace the pixel-clamp height with a true aspect ratio so the banner keeps the same width:height proportion at every screen size and zoom. Keep the desktop proportion as the reference ratio (roughly 21:9 wide-strip), and let the tag chip and its text scale down on smaller screens rather than the banner growing.

### 2. Site-wide hero banners — one consistent ratio, no pixel heights
Remove every fixed-pixel hero height and replace it with a single shared aspect ratio so all banners look the same shape and proportion on every page and every device:

- All full-width page banners (home, industrial & commercial, about, projects, products, services, industries, contact, vacuum truck, HVAC): `21/9` cinematic ratio on desktop/tablet, widening slightly (`16/9`) on narrow phones so the image still reads.
- A `max-h` guard keeps ultra-wide monitors from producing an oversized hero.
- Inline/section images that already use a ratio (`aspect-[4/3]`, `aspect-[16/10]`) stay as they are; the pixel-height ones (`h-[380px] lg:h-[520px]` on the vacuum-truck and rebate pages) switch to `aspect-[4/3]`.

Each hero keeps `object-cover` on the image plus its existing overlay gradients, opacity, text and CTAs — only the height mechanism changes.


### 3. Keep text readable at the smaller heights
Because a ratio-based banner is shorter on narrow screens, hero headline / eyebrow / CTA type steps down at mobile breakpoints so nothing clips or overflows the shorter frame. No copy changes.

## Technical Notes

- Use `aspect-ratio` (Tailwind `aspect-[21/9]` style utilities, or the CSS property in `youngs.css`) on the banner wrapper instead of `h-[Npx]`, with the image absolutely filling the wrapper.
- Add a `max-h-[...]` guard on the widest banners so very wide desktops don't produce a giant hero.
- Ratios are unitless, so browser zoom no longer changes the banner shape.
- Files touched: `src/styles/youngs.css` (`.banner`, `.banner__tag`), `src/routes/index.tsx`, `industrial-commercial-services.tsx`, `about.tsx`, `projects.index.tsx`, `products.tsx`, `contact.tsx`, `services.*.tsx`, `industries.*.tsx`, and the padding-based heroes in `residential-offices.industrial-vacuum-services.tsx` / `residential-offices.oil-to-electric-rebate.tsx`.

## Acceptance Criteria

- Every banner keeps the same shape on phone, tablet, desktop, and at 50%–200% browser zoom.
- The HVAC banner no longer takes a larger share of the viewport on mobile than on desktop; only text/border sizes shrink.
- No hero text or button is clipped at any width.
- Overlay opacity, imagery, and copy are unchanged.
