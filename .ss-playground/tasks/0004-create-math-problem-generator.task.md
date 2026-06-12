# Task: Create Math Problem Generator Module

## Description
Create a TypeScript module at `src/scripts/math-quiz/problem-generator.ts` that generates random simple math problems. The module should export:

- A `MathProblem` interface with fields: `operand1: number`, `operand2: number`, `operator: string`, `correctAnswer: number`, `display: string`
- A `generateProblem()` function that randomly creates addition (+), subtraction (-), or multiplication (×) problems
- Operands should be integers between 1 and 20
- Subtraction problems should never produce negative answers (ensure operand1 >= operand2)
- The `display` field should be a human-readable string like "12 + 5 = ?"

## Files to Modify
- `src/scripts/math-quiz/problem-generator.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/math-quiz/problem-generator.ts` exists
- [ ] Exports `MathProblem` interface and `generateProblem` function
- [ ] `generateProblem()` returns a valid `MathProblem` with correct answer computed
- [ ] Supports +, -, × operators
- [ ] Operands are integers in range 1–20
- [ ] Subtraction never yields a negative answer
- [ ] No external dependencies beyond Node.js built-ins
- [ ] No lint errors
