# Add Real Company Projects

Bring the company's real projects into the site alongside the existing ones, with the real projects always shown first.

## What will change

### 1. Project data
- Add the real projects you send into the shared project list, each flagged as a featured/real project.
- Keep all 10 existing projects — nothing is removed.
- Real projects sort first everywhere; existing ones follow in their current order.

### 2. Projects page (`/projects`)
- Below the banner, rebuild the listing using the first HTML layout you send as inspiration, translated into the site's approved palette (navy, steel, safety-orange as accent only) and typography (Archivo headings, Inter body).
- Real projects occupy the top of the grid.

### 3. Individual project page (`/projects/{slug}`)
- Rebuild the detail layout following the second HTML you send, again reskinned to the site's design system.
- Fields rendered adapt to what each project actually has, so no empty sections.

### 4. Every other project surface
- Service pages, industry pages, and any home/section project blocks: real projects first, then existing ones fill remaining slots.

## Content approach
Your supplied text is the source. Where a field needs shortening for a card or summary, it gets condensed from your copy rather than invented — the essence and specifics stay intact.

## Technical notes
- `src/data/site.ts`: extend the `Project` type with a `featured`/`isReal` flag and a shared ordering helper so every consumer sorts identically.
- `src/components/ProjectsSection.tsx`, `src/routes/projects.index.tsx`, `src/routes/projects.$slug.tsx`: consume the ordering helper; layouts updated per the reference HTML.
- Images: any project photos you provide get registered as project assets; otherwise existing stock imagery is reused.
- Each new detail page keeps its own `head()` metadata (title, description, og tags).

## Next step
Send the project content and the two HTML layout files, and I'll implement against them.
