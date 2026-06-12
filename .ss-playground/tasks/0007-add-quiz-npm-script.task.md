# Task: Add npm Script for Math Quiz

## Description
Add an npm script entry to `package.json` so the math quiz can be launched via `npm run quiz`. The script command should execute `tsx src/scripts/math-quiz/index.ts`. Ensure `tsx` is available in devDependencies (it should already be present from the hello world tasks — verify, and add if missing).

## Files to Modify
- `package.json` — add `"quiz": "tsx src/scripts/math-quiz/index.ts"` to the `scripts` section

## Acceptance Criteria
- [ ] `package.json` contains a `"quiz"` entry in `scripts`
- [ ] Running `npm run quiz` launches the interactive math quiz
- [ ] No other scripts or dependencies are removed or altered
- [ ] `tsx` is available in devDependencies
