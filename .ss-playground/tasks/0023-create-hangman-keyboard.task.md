# Task: Create Hangman Keyboard Component

## Description
Create a React client component at `src/app/hangman/HangmanKeyboard.tsx` that renders an on-screen A–Z keyboard for the hangman game.

Component signature:
```tsx
'use client'

interface HangmanKeyboardProps {
  guessedLetters: string[]   // already-guessed letters (uppercase)
  onGuess: (letter: string) => void
  disabled?: boolean          // true when game is won or lost
}
export default function HangmanKeyboard({ guessedLetters, onGuess, disabled }: HangmanKeyboardProps)
```

Layout: render all 26 letters in a wrapping flex grid (3 rows is fine: QWERTYUIOP / ASDFGHJKL / ZXCVBNM). Each letter is a `<button>`.

Button states (use Tailwind CSS):
- **Default**: dark button, white text, hover highlight
- **Correct** (guessed and in word — caller manages this via `disabled` on the whole board, so the component just needs `guessedLetters` for styling): guessed letters that were correct → green tint
- **Wrong**: guessed letters that were wrong → red/dark muted tint, disabled
- **Any guessed letter**: `disabled` and visually muted

Since the component doesn't know the word, apply one uniform "already guessed" style (muted, disabled) for all letters in `guessedLetters`. The parent component will handle correct/wrong visual differentiation at the app level if desired — keep this component simple.

The entire keyboard is disabled (all buttons `disabled`) when the `disabled` prop is `true`.

## Files to Modify
- `src/app/hangman/HangmanKeyboard.tsx` — **create** new file

## Acceptance Criteria
- [ ] File `src/app/hangman/HangmanKeyboard.tsx` exists
- [ ] `'use client'` directive present
- [ ] Renders all 26 letters A–Z
- [ ] Calls `onGuess(letter)` when a non-guessed letter button is clicked
- [ ] Letters in `guessedLetters` are visually muted and their buttons are `disabled`
- [ ] All buttons are `disabled` when `disabled` prop is `true`
- [ ] No TypeScript errors (`npx tsc --noEmit`)
