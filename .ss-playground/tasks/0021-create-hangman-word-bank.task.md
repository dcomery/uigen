# Task: Create Hangman Word Bank

## Description
Create a word bank module at `src/app/hangman/words.ts` containing at least 20 words with hints, and a function to pick a random entry.

The module should export:

```ts
import { WordEntry } from './types'

export const WORD_BANK: WordEntry[] = [
  // at least 20 entries, e.g.:
  { word: 'JAVASCRIPT', hint: 'A popular web programming language' },
  { word: 'TYPESCRIPT', hint: 'JavaScript with static types' },
  // ... 18 more varied entries
]

// Returns a random WordEntry from WORD_BANK
export function getRandomWord(): WordEntry { ... }
```

Words must be all uppercase. Pick a variety of difficulty levels — short words (4–5 letters) and longer ones (8–12 letters). Topics can include: programming, animals, countries, food, science.

## Files to Modify
- `src/app/hangman/words.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/app/hangman/words.ts` exists
- [ ] `WORD_BANK` array exported with at least 20 `WordEntry` items
- [ ] All words are uppercase strings
- [ ] Each entry has a non-empty `hint` string
- [ ] `getRandomWord()` is exported and returns a `WordEntry`
- [ ] `getRandomWord()` returns different results across multiple calls (random, not always index 0)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
