# Task: Create Hangman Word Display Component

## Description
Create a pure presentational React component at `src/app/hangman/HangmanWordDisplay.tsx` that renders the masked word — showing guessed letters and underscores for unguessed ones.

Component signature:
```tsx
interface HangmanWordDisplayProps {
  maskedWord: string[]   // from getMaskedWord() — each element is a letter or '_'
  gameStatus: GameStatus
}
export default function HangmanWordDisplay({ maskedWord, gameStatus }: HangmanWordDisplayProps)
```

Import `GameStatus` from `./types`.

Rendering:
- Render each element of `maskedWord` as a separate `<span>` inside a flex row
- Each span shows the letter (if revealed) or a blank with an underline (if `'_'`)
- When `gameStatus === 'lost'`, reveal all letters (show the full word in a red/error color to indicate the player lost)
- When `gameStatus === 'won'`, letters are shown in a green/success color
- Letters should be large (text-3xl or text-4xl), monospace, uppercase

No `'use client'` needed — pure presentational.

## Files to Modify
- `src/app/hangman/HangmanWordDisplay.tsx` — **create** new file

## Acceptance Criteria
- [ ] File `src/app/hangman/HangmanWordDisplay.tsx` exists
- [ ] Accepts `maskedWord: string[]` and `gameStatus: GameStatus` props
- [ ] Renders each character as its own element with an underline/border for blanks
- [ ] When `gameStatus === 'lost'`, all letters are revealed (regardless of `maskedWord` contents — the parent passes the full unmasked word on loss, or this component handles `'_'` differently on loss)
- [ ] When `gameStatus === 'won'`, letters render in a success color
- [ ] No `'use client'` directive
- [ ] No TypeScript errors (`npx tsc --noEmit`)
