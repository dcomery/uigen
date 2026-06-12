# Task: Add Unit Tests for Hangman Types and Utilities

## Description
Create a Vitest test file at `src/app/hangman/__tests__/types.test.ts` that thoroughly tests the pure utility functions exported from `../types`.

Test all three utility functions:

### `getWrongGuesses`
- Returns empty array when no letters guessed
- Returns only letters not present in the word
- Does not include correct guesses

### `getMaskedWord`
- Returns all underscores when no letters guessed
- Reveals only the guessed letters that appear in the word
- Returns the full word revealed when all letters are guessed

### `getGameStatus`
- Returns `'playing'` at game start
- Returns `'playing'` with partial correct guesses
- Returns `'won'` when all letters in the word have been guessed
- Returns `'lost'` when wrong guesses equal `maxWrongGuesses`
- Returns `'lost'` when wrong guesses exceed `maxWrongGuesses`
- Returns `'playing'` (not `'lost'`) when wrong count is below max even with many wrong guesses

Use a simple test word like `'CAT'` with `maxWrongGuesses: 6`.

Follow existing test conventions: Vitest, no React Testing Library (pure TS tests — no rendering needed), jsdom environment (already configured in `vitest.config.ts`).

## Files to Modify
- `src/app/hangman/__tests__/types.test.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/app/hangman/__tests__/types.test.ts` exists
- [ ] Tests cover `getWrongGuesses`, `getMaskedWord`, and `getGameStatus`
- [ ] At least 10 test cases total across the three functions
- [ ] All tests pass: `npx vitest run src/app/hangman/__tests__/types.test.ts`
- [ ] No TypeScript errors
- [ ] Uses only `vitest` imports (`describe`, `it`, `expect`) — no React Testing Library
