# Task: Create Quiz Runner Module

## Description
Create a TypeScript module at `src/scripts/math-quiz/quiz-runner.ts` that runs an interactive math quiz in the terminal. The module should:

- Import `generateProblem` from `./problem-generator`
- Use Node.js `readline` to prompt the user for answers
- Present 5 problems sequentially
- After each answer, tell the user if they were correct or wrong (showing the right answer if wrong)
- Track the score and display a final summary at the end (e.g., "You scored 3 out of 5!")
- Export a `runQuiz()` async function that can be called from an entry point

## Files to Modify
- `src/scripts/math-quiz/quiz-runner.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/math-quiz/quiz-runner.ts` exists
- [ ] Imports and uses `generateProblem` from `./problem-generator`
- [ ] Uses Node.js `readline` (no external deps)
- [ ] Presents 5 math problems interactively
- [ ] Provides correct/incorrect feedback after each answer
- [ ] Displays final score summary
- [ ] Exports `runQuiz` async function
- [ ] No lint errors
