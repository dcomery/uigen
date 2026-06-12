# Task: Create ClueList React Component

## Description
Create a React component at `src/scripts/crossword/ClueList.tsx` that renders the across and down clue lists alongside the grid.

### Props interface (`ClueListProps`)
- `puzzle: CrosswordPuzzle`
- `selectedClueNumber: number | null`
- `selectedDirection: ClueDirection`
- `completedClues: Set<string>` — set of strings in the format `"${number}-${direction}"` (e.g. `"1-across"`, `"2-down"`) representing fully and correctly answered clues
- `onClueClick: (clueNumber: number, direction: ClueDirection) => void`

### Rendering rules
- Render two sections side by side (or stacked on narrow screens): **Across** and **Down**
- Each section header is labeled "Across" and "Down" respectively
- Each clue renders as: `{number}. {text}` on one line
- The currently selected clue (matching `selectedClueNumber` and `selectedDirection`) has a highlighted background
- Completed clues (in `completedClues`) have a visual indication (e.g. strikethrough or muted color)
- Clicking a clue calls `onClueClick` with the clue number and direction
- Use Tailwind CSS only

Import types from `./types`. Sort clues within each section by clue number ascending.

## Files to Modify
- `src/scripts/crossword/ClueList.tsx` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/crossword/ClueList.tsx` exists
- [ ] Exports a default React component `ClueList`
- [ ] Renders separate Across and Down sections
- [ ] Clues are sorted by number within each section
- [ ] Selected clue is visually highlighted
- [ ] Completed clues are visually distinct
- [ ] `onClueClick` fires with correct arguments on clue click
- [ ] No TypeScript errors
- [ ] Tailwind CSS only — no inline styles
- [ ] No external dependencies beyond what the repo already has
