# Task: Create Hangman SVG Drawing Component

## Description
Create a React component at `src/app/hangman/HangmanDrawing.tsx` that renders an SVG hangman figure based on the number of wrong guesses (0–6).

The component signature:
```tsx
interface HangmanDrawingProps {
  wrongGuessCount: number  // 0–6
}
export default function HangmanDrawing({ wrongGuessCount }: HangmanDrawingProps)
```

The SVG should draw the hangman incrementally — each wrong guess reveals one more body part in this order:
1. Head (circle)
2. Body (vertical line)
3. Left arm
4. Right arm
5. Left leg
6. Right leg

Always render the gallows structure (base, pole, beam, rope) regardless of wrong guess count.

Use inline SVG. Tailwind CSS for the container div only; SVG elements use `stroke`, `strokeWidth`, and `fill` props directly. Use `stroke="white"` or `stroke="#e5e7eb"` for a dark-background theme. SVG viewBox `"0 0 200 250"`, width `200`, height `250`.

This is a pure presentational component — no state, no `'use client'` needed.

## Files to Modify
- `src/app/hangman/HangmanDrawing.tsx` — **create** new file

## Acceptance Criteria
- [ ] File `src/app/hangman/HangmanDrawing.tsx` exists
- [ ] Component accepts `wrongGuessCount: number` prop
- [ ] Gallows (base, pole, beam, rope) always visible
- [ ] Exactly 6 body parts added incrementally (head at 1, body at 2, arms at 3–4, legs at 5–6)
- [ ] No body parts shown when `wrongGuessCount` is 0
- [ ] All 6 body parts shown when `wrongGuessCount` is 6
- [ ] No `'use client'` directive (server component / pure presentational)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
