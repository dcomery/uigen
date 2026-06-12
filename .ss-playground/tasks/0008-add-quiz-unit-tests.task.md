# Task: Add Unit Tests for Math Problem Generator

## Description
Create vitest unit tests for the math problem generator module. The tests should cover the core logic that can be tested deterministically (the problem generator, not the interactive readline quiz runner). Test file should be at `src/scripts/math-quiz/__tests__/problem-generator.test.ts`.

Tests should verify:
- `generateProblem()` returns an object matching the `MathProblem` interface
- The operator is one of `+`, `-`, `×`
- Operands are integers in range 1–20
- The `correctAnswer` is mathematically correct for the given operands and operator
- Subtraction problems never produce negative answers
- The `display` string is properly formatted

Run the generator many times (e.g., 100 iterations) to exercise randomness coverage.

## Files to Modify
- `src/scripts/math-quiz/__tests__/problem-generator.test.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/math-quiz/__tests__/problem-generator.test.ts` exists
- [ ] Tests cover all three operator types (+, -, ×)
- [ ] Tests verify operand ranges (1–20)
- [ ] Tests verify correct answer computation
- [ ] Tests verify subtraction never yields negative results
- [ ] Running `npx vitest run src/scripts/math-quiz/__tests__/problem-generator.test.ts` passes
- [ ] Test follows existing repo conventions (vitest, TypeScript)
