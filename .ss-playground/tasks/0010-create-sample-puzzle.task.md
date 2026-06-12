# Task: Create Sample Puzzle Data

## Description
Create a module at `src/scripts/crossword/sample-puzzle.ts` that exports a hardcoded sample `CrosswordPuzzle` for a 5×5 grid. This puzzle is used for development, testing, and the initial app state.

Import types from `./types`.

The puzzle must be a valid, solvable 5×5 crossword. Use the following layout (B = black cell, letters = answer cells):

```
P A R I S
A . O . U
T E N . N
. A . . S
. R . . .
```

Define clues accordingly:

**Across**
- 1 Across: "Capital of France" → PARIS (row 0, col 0)
- 5 Across: "A perfect score on a test" → TEN (row 2, col 0)

**Down**
- 1 Down: "Animal with a pouch" → PAT (too short — use a longer grid)

Instead, use this simpler valid 5×5 with clear word boundaries:

```
Row 0: C A T . .
Row 1: A . A . .
Row 2: R A T . .
Row 3: . . . . .
Row 4: . . . . .
```

Actually, define a clean 5×5 puzzle with at least 4 clues (2 across, 2 down), minimum word length 3. Choose valid English words. Black cells (`isBlack: true`) fill unused positions. Make sure every across word is at least 3 letters, every down word is at least 3 letters, and no answer contains spaces or special characters (uppercase letters only).

Export a single named constant: `SAMPLE_PUZZLE` of type `CrosswordPuzzle`.

Also export a helper function `buildInitialGridState(puzzle: CrosswordPuzzle): GridState` that:
- Creates a 2D array of `CellState` sized `puzzle.rows × puzzle.cols`
- Marks black cells correctly based on which cells are not covered by any clue's answer
- Sets `clueNumber` for cells that are the start of an across or down clue
- Initializes `letter: ''`, `isRevealed: false`, `isCorrect: null` for all non-black cells

## Files to Modify
- `src/scripts/crossword/sample-puzzle.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/crossword/sample-puzzle.ts` exists
- [ ] `SAMPLE_PUZZLE` is exported and matches the `CrosswordPuzzle` interface
- [ ] Puzzle has at least 4 clues (2 across, 2 down)
- [ ] All answer strings are uppercase letters only, length ≥ 3
- [ ] `buildInitialGridState` is exported and returns a correctly sized `GridState`
- [ ] Black cells are correctly identified — no clue answer overlaps a black cell
- [ ] `clueNumber` is set on the correct starting cells
- [ ] Compiles without TypeScript errors
- [ ] No external dependencies
