# Core Services Cards: Mobile Layout Tightening

Tighten the **Core Services** card section on `/services/vacuum-truck-services` so that mobile shows two cards per row without losing readability.

## Scope
- Only the **Core Services** grid and its cards are changed (`src/routes/services.vacuum-truck-services.tsx`, around the `#services` section).
- No text content, data arrays, or other sections are touched.

## Changes

### Grid layout
- Change the grid from `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` to `grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3` so mobile defaults to 2 columns.

### Card proportions (mobile-first)
- Padding: `p-4 sm:p-7`
- Border: keep `border` but lighten to `border-steel-100` on mobile, then `sm:border-steel-200`
- Icon box: `h-10 w-10 sm:h-12 sm:w-12`
- Gap between icon and title: `mb-3 sm:mb-5`
- Title size: `text-sm sm:text-lg font-bold text-navy-800`
- Gap between title and description: `mb-1.5 sm:mb-2.5`
- Description size: `text-xs sm:text-sm text-steel-600`
- Keep `rounded-xl`, `bg-white`, `shadow-sm`, and `hover:shadow-lg`.

### Verify
- Check the page at the mobile breakpoint (320px–640px) to confirm 2 cards per row, text remains legible, and no wrapping/orphan issues appear.
- Confirm no changes on tablet/desktop (`sm:` and `lg:` classes stay intact).
