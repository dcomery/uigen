# Task: Create Crossword Data Types

## Description
Create a TypeScript module at `src/scripts/crossword/types.ts` that defines the core data types for the crossword puzzle clue app. No external dependencies.

Define and export the following interfaces and types:

- `ClueDirection` — union type: `'across' | 'down'`
- `Clue` — interface with fields:
  - `number: number` — clue number (e.g. 1, 2, 3)
  - `direction: ClueDirection`
  - `text: string` — the clue text (e.g. "Capital of France")
  - `answer: string` — the answer in uppercase, letters only
  - `row: number` — zero-indexed starting row on the grid
  - `col: number` — zero-indexed starting column on the grid
- `CrosswordPuzzle` — interface with fields:
  - `id: string`
  - `title: string`
  - `rows: number`
  - `cols: number`
  - `clues: Clue[]`
- `CellState` — interface with fields:
  - `letter: string` — current user input (single uppercase letter or empty string)
  - `isBlack: boolean` — true if this cell is a black/blocked square
  - `isRevealed: boolean` — true if the answer letter has been revealed
  - `isCorrect: boolean | null` — null until checked, then true/false
  - `clueNumber: number | null` — the clue number label displayed in the cell, or null
- `GridState` — type alias: `CellState[][]` (2D array, indexed [row][col])

## Files to Modify
- `src/scripts/crossword/types.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/crossword/types.ts` exists
- [ ] All five exports (`ClueDirection`, `Clue`, `CrosswordPuzzle`, `CellState`, `GridState`) are present
- [ ] File compiles without TypeScript errors (`npx tsc --noEmit`)
- [ ] No external dependencies introduced
