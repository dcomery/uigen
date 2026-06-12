# Task: Add Unit Tests for Crossword Engine

## Description
Create a vitest unit test file at `src/scripts/crossword/__tests__/engine.test.ts` that tests the crossword engine module.

Import from `../engine`, `../sample-puzzle`, and `../types`.

Test the following:

### `buildInitialGridState`
- Returns a 2D array with the correct number of rows and columns matching the puzzle
- All non-black cells start with `letter: ''`, `isRevealed: false`, `isCorrect: null`
- Black cells have `isBlack: true`
- Cells at the start of a clue have the correct `clueNumber`

### `setCellLetter`
- Returns a new grid (does not mutate the original)
- Sets the correct cell's letter to the provided uppercase value
- Black cells are unaffected
- Accepts an empty string to clear a cell

### `checkPuzzle`
- Returns `isCorrect: false` for cells with wrong letters or empty letters
- Returns `isCorrect: true` for cells with the correct letter
- Does not mutate the input grid

### `isSolved`
- Returns `false` on the initial empty grid
- Returns `true` when all non-black cells are filled with correct letters (build this state manually using `setCellLetter`)
- Returns `false` when at least one cell is wrong

### `revealCell`
- Sets the correct letter and `isRevealed: true` for the target cell
- Does not affect other cells

### `revealPuzzle`
- All non-black cells have `isRevealed: true` and the correct letter after calling this

### `getAnswerLetterAt`
- Returns the correct letter for a known answer cell position
- Returns `''` for a black cell position

## Files to Modify
- `src/scripts/crossword/__tests__/engine.test.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/crossword/__tests__/engine.test.ts` exists
- [ ] All seven tested functions have at least one passing test
- [ ] `isSolved` is tested with both a solved and unsolved grid
- [ ] `setCellLetter` immutability is verified (original grid unchanged)
- [ ] Running `npx vitest run src/scripts/crossword/__tests__/engine.test.ts` passes with no failures
- [ ] No TypeScript errors
- [ ] Test follows existing repo conventions (vitest, TypeScript, no external test utilities beyond what's already installed)
