# Task: Create Quiz Entry Point Script

## Description
Create a TypeScript entry point at `src/scripts/math-quiz/index.ts` that serves as the main executable for the math quiz. The script should:

- Import `runQuiz` from `./quiz-runner`
- Print a welcome message (e.g., "Welcome to the Math Quiz!")
- Call `runQuiz()` and await its completion
- Print a goodbye message when done

This is the script that will be invoked directly via `npx tsx`.

## Files to Modify
- `src/scripts/math-quiz/index.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/math-quiz/index.ts` exists
- [ ] Imports and calls `runQuiz` from `./quiz-runner`
- [ ] Prints a welcome message before the quiz starts
- [ ] Running `npx tsx src/scripts/math-quiz/index.ts` launches the interactive quiz
- [ ] Script exits cleanly with code 0 after quiz completion
- [ ] No lint errors
