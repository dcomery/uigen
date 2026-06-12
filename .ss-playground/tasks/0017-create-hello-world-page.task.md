# Task: Create Hello World Page Component

## Description
Create a standalone Next.js App Router page at `src/app/hello/page.tsx` that renders a "Hello, World!" UI. This is a server component (no `'use client'`) with no authentication, no database, and no external dependencies.

The page should render:
- A full-screen centered layout (use Tailwind CSS)
- A large heading: "Hello, World!"
- A short subheading: "Welcome to UIGen"
- A link back to `/` labeled "← Back to Home"

Use only Tailwind CSS for styling. Match the visual tone of the existing app (dark background with light text is fine, or light — just keep it clean).

Export page metadata:
```ts
export const metadata = {
  title: 'Hello World | UIGen',
  description: 'A simple Hello World page',
}
```

## Files to Modify
- `src/app/hello/page.tsx` — **create** new file

## Acceptance Criteria
- [ ] File `src/app/hello/page.tsx` exists
- [ ] Route `/hello` is accessible and renders without errors
- [ ] Page displays "Hello, World!" heading
- [ ] Page displays "Welcome to UIGen" subheading
- [ ] Page includes a `<Link href="/">` back to home
- [ ] No `'use client'` directive (server component)
- [ ] No authentication, DB, or external API calls
- [ ] Tailwind CSS only — no inline styles, no CSS modules
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No lint errors (`npx next lint`)
