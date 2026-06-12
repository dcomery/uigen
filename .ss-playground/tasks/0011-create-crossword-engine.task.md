# Task: Create Crossword Puzzle Engine

## Description
Create a pure TypeScript module at `src/scripts/crossword/engine.ts` that implements the game logic for the crossword puzzle. No DOM, no React, no external dependencies — pure functions operating on `GridState` and `CrosswordPuzzle`.

Import types from `./types`.

Export the following functions:

### `setCellLetter(grid: GridState, row: number, col: number, letter: string): GridState`
Returns a new `GridState` (do not mutate) with the specified cell's `letter` set to the provided value (uppercase, single character, or empty string). If the cell is black, return the grid unchanged.

### `checkPuzzle(grid: GridState, puzzle: CrosswordPuzzle): GridState`
Returns a new `GridState` where every non-black cell has `isCorrect` set to `true` or `false` by comparing `cell.letter` (uppercase) against the expected answer letter from the puzzle. Empty cells are `isCorrect: false`.

### `revealCell(grid: GridState, puzzle: CrosswordPuzzle, row: number, col: number): GridState`
Returns a new `GridState` with the specified cell's `letter` set to the correct answer letter and `isRevealed: true`.

### `revealPuzzle(grid: GridState, puzzle: CrosswordPuzzle): GridState`
Returns a new `GridState` with ALL cells revealed (correct letter, `isRevealed: true`).

### `isSolved(grid: GridState, puzzle: CrosswordPuzzle): boolean`
Returns `true` if every non-black cell has the correct letter (case-insensitive comparison against the puzzle answer).

### `getClueForCell(puzzle: CrosswordPuzzle, row: number, col: number, direction: ClueDirection): Clue | null`
Returns the `Clue` that the given cell belongs to in the given direction, or `null` if none.

### `getAnswerLetterAt(puzzle: CrosswordPuzzle, row: number, col: number): string`
Returns the correct answer letter for the given cell position by scanning all clues. Returns `''` if the cell is not covered by any clue.

## Files to Modify
- `src/scripts/crossword/engine.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/crossword/engine.ts` exists
- [ ] All seven functions are exported
- [ ] `setCellLetter` does not mutate the input grid
- [ ] `checkPuzzle` correctly marks every cell correct or incorrect
- [ ] `isSolved` returns `true` only when all non-black cells are correctly filled
- [ ] `revealPuzzle` fills all cells with correct letters
- [ ] Compiles without TypeScript errors (`npx tsc --noEmit`)
- [ ] No external dependencies
