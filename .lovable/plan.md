# Trust Bar Mobile Layout Correction

## Goal
Change the trust bar so it keeps the intended compact 2-row layout instead of putting all four badges in one horizontal row.

## What will change
- On mobile and tablet widths, show the four trust badges as a 2×2 grid:

```text
[icon] ISO-9001-2015 Certified        [icon] Canadian Welding Bureau Standards
[icon] 35 Years in Business           [icon] Serving Atlantic Canada
```

- Keep each badge internally as one icon beside one single-line text label.
- Reduce icon size, text size, gaps, and badge spacing enough so labels do not wrap into two lines.
- Keep desktop as the current 4-across row.
- Preserve the existing light and dark visual variants.

## Technical details
- Update `src/components/TrustBar.tsx` only.
- Replace the mobile horizontal-scroll flex layout with a 2-column grid at small sizes.
- Use `whitespace-nowrap`, smaller text, compact gaps, and reduced icon boxes to keep each label on one line.
- Verify at mobile, tablet, and desktop widths that the trust bar appears as 2×2 on smaller screens and 4-across on desktop.
