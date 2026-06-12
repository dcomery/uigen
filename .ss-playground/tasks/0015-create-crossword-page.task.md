# Task: Create Crossword Puzzle Next.js Page

## Description
Create a Next.js App Router page that serves the crossword puzzle app at the route `/crossword`.

### Files to create

**`src/app/crossword/page.tsx`**
A simple server component (no `'use client'` directive) that renders the page shell and imports `CrosswordApp`:

```tsx
import CrosswordApp from '@/scripts/crossword/CrosswordApp'

export const metadata = {
  title: 'Crossword Puzzle',
  description: 'A simple crossword puzzle clue app',
}

export default function CrosswordPage() {
  return (
    <main className="min-h-screen bg-white p-4 md:p-8">
      <CrosswordApp />
    </main>
  )
}
```

`CrosswordApp` is a client component (it uses `useState`, `useEffect`, keyboard events), so it must have `'use client'` at the top of `CrosswordApp.tsx`. Ensure this directive is present — add it to `CrosswordApp.tsx` if the previous task did not include it.

### Path alias
The repo uses `@/` as a path alias for `src/`. Use `@/scripts/crossword/CrosswordApp` for the import.

## Files to Modify
- `src/app/crossword/page.tsx` — **create** new file
- `src/scripts/crossword/CrosswordApp.tsx` — **ensure** `'use client'` is the first line

## Acceptance Criteria
- [ ] File `src/app/crossword/page.tsx` exists
- [ ] Route `/crossword` is accessible when the dev server is running
- [ ] `CrosswordApp.tsx` has `'use client'` as its first line
- [ ] `page.tsx` is a server component (no `'use client'`)
- [ ] Page renders without errors (`npx next build` succeeds or `npx next dev` loads the route)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No lint errors (`npx next lint`)
