# Task: Create CrosswordApp Root Component

## Description
Create the root React component at `src/scripts/crossword/CrosswordApp.tsx` that wires together `CrosswordGrid`, `ClueList`, and the game engine into a playable crossword puzzle app.

This component owns all game state and handles keyboard input.

### State managed by `CrosswordApp`
- `grid: GridState` — current grid state, initialized via `buildInitialGridState(SAMPLE_PUZZLE)`
- `selectedRow: number | null`
- `selectedCol: number | null`
- `selectedDirection: ClueDirection` — defaults to `'across'`
- `isSolvedState: boolean` — true when `isSolved(grid, puzzle)` returns true

### Keyboard handling
Attach a `keydown` listener (via `useEffect`) to `window`:
- **Letter keys (A–Z)**: set the letter in the selected cell, then advance the cursor to the next empty cell in the selected direction (skip black cells and already-correct/revealed cells)
- **Backspace/Delete**: clear the letter in the selected cell, move cursor backwards in the selected direction
- **Arrow keys**: move `selectedRow`/`selectedCol` in the arrow direction; if the arrow matches the current direction, move one cell; if it crosses direction, switch `selectedDirection`
- **Tab**: cycle to the next clue in reading order (across first, then down, by clue number)
- **Enter / Space**: toggle direction between `'across'` and `'down'` for the selected cell

### Cell click handling
- Clicking an already-selected cell toggles direction
- Clicking a new cell selects it and keeps current direction

### Control buttons
Render three action buttons:
- **Check** — calls `checkPuzzle` and updates grid; shows incorrect cells in red
- **Reveal Cell** — calls `revealCell` on the selected cell
- **Reveal All** — calls `revealPuzzle` on the entire grid

### Solved state
When `isSolvedState` is true, display a congratulatory message above the grid (e.g. "Puzzle solved! 🎉"). The grid remains visible and editable.

### Layout
- Title at the top: `SAMPLE_PUZZLE.title`
- Grid and clue list side by side (grid left, clues right); stack vertically on narrow screens
- Action buttons below the grid
- Use Tailwind CSS only

Import from `./types`, `./engine`, `./sample-puzzle`, `./CrosswordGrid`, `./ClueList`.

## Files to Modify
- `src/scripts/crossword/CrosswordApp.tsx` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/crossword/CrosswordApp.tsx` exists
- [ ] Exports a default React component `CrosswordApp`
- [ ] Grid initializes from `SAMPLE_PUZZLE` via `buildInitialGridState`
- [ ] Letter keys update the selected cell and advance the cursor
- [ ] Backspace clears the current cell and moves backwards
- [ ] Arrow keys navigate the grid
- [ ] Cell click selects a cell; second click on same cell toggles direction
- [ ] Check button marks correct/incorrect cells
- [ ] Reveal Cell and Reveal All buttons work correctly
- [ ] Solved state message appears when puzzle is complete
- [ ] No TypeScript errors
- [ ] Tailwind CSS only
- [ ] No external dependencies beyond what the repo already has
