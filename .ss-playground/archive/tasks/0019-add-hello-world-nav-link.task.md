# Task: Add Hello World Nav Link to Root Layout

## Description
Update `src/app/layout.tsx` to add a visible navigation link to the `/hello` route so the Hello World page is discoverable from the app.

Add a minimal top navigation bar (or append to any existing nav) that includes:
- A link to `/hello` with the label "Hello World"

The nav should sit at the very top of the page, be fixed or static, and use Tailwind CSS only. Keep the change minimal — do not restructure the existing layout, just add the nav element above `{children}` in the body.

If a `<nav>` element already exists in the layout, add the link there instead of creating a new one.

The link must use Next.js `<Link>` from `'next/link'`.

## Files to Modify
- `src/app/layout.tsx` — **modify** existing file: add nav link to `/hello`

## Acceptance Criteria
- [ ] `src/app/layout.tsx` contains a `<Link href="/hello">` element
- [ ] The link text is "Hello World" (or clearly identifies the route)
- [ ] Link is visible when the app is running (not hidden or zero-opacity)
- [ ] Uses `next/link` `<Link>` component (not a plain `<a>` tag)
- [ ] Tailwind CSS only — no inline styles
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No lint errors (`npx next lint`)
- [ ] Existing layout structure and `{children}` rendering are unchanged
