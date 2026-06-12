# Task: Create CrosswordGrid React Component

## Description
Create a React component at `src/scripts/crossword/CrosswordGrid.tsx` that renders the crossword puzzle grid.

The component receives the current grid state and puzzle definition as props and renders a visual grid of cells. It does not manage state itself — it is a pure presentational component.

### Props interface (`CrosswordGridProps`)
- `puzzle: CrosswordPuzzle`
- `grid: GridState`
- `selectedRow: number | null`
- `selectedCol: number | null`
- `selectedDirection: ClueDirection`
- `onCellClick: (row: number, col: number) => void`

### Rendering rules
- Render a CSS grid with `puzzle.rows` rows and `puzzle.cols` columns
- **Black cells**: render as a filled dark square, not interactive
- **Letter cells**: render as a white/light square with:
  - A small clue number label in the top-left corner if `cell.clueNumber !== null`
  - The `cell.letter` centered in the cell (large, readable)
  - A highlighted background when the cell is in the selected row/col for the selected direction (i.e., it belongs to the same clue word as the selected cell)
  - A green tint if `cell.isCorrect === true`
  - A red tint if `cell.isCorrect === false`
  - A blue/distinct tint if `cell.isRevealed === true`
  - A stronger highlight on the exact selected cell (`selectedRow === row && selectedCol === col`)
- Cells are squares; use a fixed cell size (e.g. 48px or use CSS to make them square)
- Use Tailwind CSS for all styling — no inline styles, no CSS modules

Import types from `./types`. Do not import from the engine or sample-puzzle modules.

## Files to Modify
- `src/scripts/crossword/CrosswordGrid.tsx` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/crossword/CrosswordGrid.tsx` exists
- [ ] Exports a default React component `CrosswordGrid`
- [ ] Renders a grid sized to `puzzle.rows × puzzle.cols`
- [ ] Black cells are visually distinct and not interactive
- [ ] Selected cell has a visually distinct highlight
- [ ] Clue numbers are rendered in the correct cells
- [ ] Correct/incorrect/revealed states are visually distinguished
- [ ] `onCellClick` is called with correct row/col when a non-black cell is clicked
- [ ] No TypeScript errors
- [ ] Uses Tailwind CSS only (no inline styles)
- [ ] No external dependencies beyond what the repo already has
