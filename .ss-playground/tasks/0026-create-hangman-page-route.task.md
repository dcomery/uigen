# Task: Create Hangman Next.js Page Route

## Description
Create the Next.js App Router page at `src/app/hangman/page.tsx` that serves the hangman game at `/hangman`.

This is a server component (no `'use client'`) that simply imports and renders `HangmanApp`.

```tsx
import HangmanApp from './HangmanApp'

export const metadata = {
  title: 'Hangman | UIGen',
  description: 'A classic hangman word guessing game',
}

export default function HangmanPage() {
  return <HangmanApp />
}
```

Also update `src/app/layout.tsx` to add a nav link to `/hangman`:
- Add `<Link href="/hangman">Hangman</Link>` alongside the existing "Hello World" link in the `<nav>` element

## Files to Modify
- `src/app/hangman/page.tsx` — **create** new file
- `src/app/layout.tsx` — **modify**: add `<Link href="/hangman">Hangman</Link>` to the existing `<nav>`

## Acceptance Criteria
- [ ] File `src/app/hangman/page.tsx` exists
- [ ] Page exports `metadata` with title and description
- [ ] Page renders `<HangmanApp />` as its only content
- [ ] No `'use client'` on the page (server component)
- [ ] `src/app/layout.tsx` contains `<Link href="/hangman">` with text "Hangman"
- [ ] Existing nav link to `/hello` is preserved unchanged
- [ ] Existing Geist font setup and layout structure are preserved unchanged
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No lint errors (`npx next lint`)
