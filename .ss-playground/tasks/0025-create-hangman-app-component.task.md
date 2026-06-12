# Task: Create HangmanApp Root Component

## Description
Create the root client component at `src/app/hangman/HangmanApp.tsx` that wires together state management, keyboard input, and all the sub-components.

```tsx
'use client'
```

This component manages:
- `HangmanState` — initialized with a random word from `getRandomWord()`
- A `handleGuess(letter: string)` function that adds the letter to `guessedLetters` (no-op if already guessed or game is over)
- A `handleNewGame()` function that resets state with a new random word
- Physical keyboard support via `useEffect` + `window.addEventListener('keydown', ...)` — map key presses (a–z, A–Z) to `handleGuess`

Render layout (dark background `bg-gray-950 min-h-screen`, centered content):
1. Page title: "Hangman" (h1)
2. The word hint: `<p>Hint: {hint}</p>` — show the hint for the current word
3. Wrong guesses counter: `Wrong guesses: X / 6`
4. `<HangmanDrawing wrongGuessCount={wrongGuesses.length} />`
5. `<HangmanWordDisplay maskedWord={maskedWord} gameStatus={gameStatus} />`
6. Win/loss message when game is over:
   - Won: "You won! 🎉"
   - Lost: "You lost! The word was {word}"
7. `<HangmanKeyboard guessedLetters={state.guessedLetters} onGuess={handleGuess} disabled={gameStatus !== 'playing'} />`
8. A "New Game" button that calls `handleNewGame()`

Import types and utilities from `./types`, word helpers from `./words`, and all three sub-components from their respective files.

## Files to Modify
- `src/app/hangman/HangmanApp.tsx` — **create** new file

## Acceptance Criteria
- [ ] File `src/app/hangman/HangmanApp.tsx` exists
- [ ] `'use client'` directive present
- [ ] Imports and renders `HangmanDrawing`, `HangmanWordDisplay`, and `HangmanKeyboard`
- [ ] Game initializes with a random word from `getRandomWord()`
- [ ] `handleGuess` adds letter to guessedLetters; no-op if already guessed or game over
- [ ] Physical keyboard (a–z) triggers `handleGuess` via `useEffect`
- [ ] Win/loss status message shown when `gameStatus !== 'playing'`
- [ ] "New Game" button resets to a new random word
- [ ] Hint for the current word is displayed
- [ ] No TypeScript errors (`npx tsc --noEmit`)
