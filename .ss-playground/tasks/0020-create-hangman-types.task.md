# Task: Create Hangman Data Types

## Description
Create the core TypeScript type definitions for the hangman game at `src/app/hangman/types.ts`.

Define the following types:

```ts
// The complete state of a hangman game
export interface HangmanState {
  word: string           // the secret word (uppercase)
  guessedLetters: string[] // letters guessed so far (uppercase)
  maxWrongGuesses: number  // default 6
}

// Derived status — computed from state, not stored
export type GameStatus = 'playing' | 'won' | 'lost'

// A word entry in the word bank
export interface WordEntry {
  word: string
  hint: string
}
```

Also export three pure utility functions derived from `HangmanState`:
- `getWrongGuesses(state: HangmanState): string[]` — letters guessed that are not in the word
- `getMaskedWord(state: HangmanState): string[]` — array of chars; revealed letter if guessed, `'_'` otherwise
- `getGameStatus(state: HangmanState): GameStatus` — `'won'` if all letters guessed, `'lost'` if wrong guesses >= maxWrongGuesses, else `'playing'`

No React, no imports from outside this file. Pure TypeScript only.

## Files to Modify
- `src/app/hangman/types.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/app/hangman/types.ts` exists
- [ ] `HangmanState`, `GameStatus`, and `WordEntry` are exported
- [ ] `getWrongGuesses`, `getMaskedWord`, `getGameStatus` are exported
- [ ] All three utilities are pure functions with no side effects
- [ ] `getMaskedWord` returns `'_'` for unguessed letters and the actual letter for guessed ones
- [ ] `getGameStatus` returns `'won'` only when every non-`_` position is revealed
- [ ] No TypeScript errors (`npx tsc --noEmit`)
