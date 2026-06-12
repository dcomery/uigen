# Result: Task: Add Unit Tests for Math Problem Generator

**Task ID:** 0008
**Step:** 8
**Worker:** moonshotai/Kimi-K2.6
**Timestamp:** 2026-06-12T14:24:30.840Z

## Worker Output

 **File to create:** `src/scripts/math-quiz/__tests__/problem-generator.test.ts`

```typescript
import { describe, it, expect } from 'vitest';
import { generateProblem } from '../problem-generator';

describe('generateProblem', () => {
  it('returns an object matching the MathProblem interface shape', () => {
    const problem = generateProblem();

    expect(problem).toBeTypeOf('object');
    expect(problem).not.toBeNull();

    expect(problem).toHaveProperty('operand1');
    expect(problem).toHaveProperty('operand2');
    expect(problem).toHaveProperty('operator');
    expect(problem).toHaveProperty('correctAnswer');
    expect(problem).toHaveProperty('display');

    expect(problem.operand1).toBeTypeOf('number');
    expect(problem.operand2).toBeTypeOf('number');
    expect(problem.operator).toBeTypeOf('string');
    expect(problem.correctAnswer).toBeTypeOf('number');
    expect(problem.display).toBeTypeOf('string');
  });

  it('uses only allowed operators (+, -, ×) across many iterations', () => {
    const allowedOperators = ['+', '-', '×'];

    for (let i = 0; i < 100; i++) {
      const problem = generateProblem();
      expect(allowedOperators).toContain(problem.operator);
    }
  });

  it('has operands that are integers in the range 1–20 across many iterations', () => {
    for (let i = 0; i < 100; i++) {
      const problem = generateProblem();

      expect(Number.isInteger(problem.operand1)).toBe(true);
      expect(Number.isInteger(problem.operand2)).toBe(true);

      expect(problem.operand1).toBeGreaterThanOrEqual(1);
      expect(problem.operand1).toBeLessThanOrEqual(20);
      expect(problem.operand2).toBeGreaterThanOrEqual(1);
      expect(problem.operand2).toBeLessThanOrEqual(20);
    }
  });

  it('computes the correct answer for the given operands and operator', () => {
    for (let i = 0; i < 100; i++) {
      const { operand1, operand2, operator, correctAnswer } = generateProblem();

      let expectedAnswer: number;
      switch (operator) {
        case '+':
          expectedAnswer = operand1 + operand2;
          break;
        case '-':
          expectedAnswer = operand1 - operand2;
          break;
        case '×':
          expectedAnswer = operand1 * operand2;
          break;
        default:
          throw new Error(`Unexpected operator: ${operator}`);
      }

      expect(correctAnswer).toBe(expectedAnswer);
    }
  });

  it('never produces negative answers for subtraction problems', () => {
    for (let i = 0; i < 100; i++) {
      const problem = generateProblem();

      if (problem.operator === '-') {
        expect(problem.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(problem.operand1).toBeGreaterThanOrEqual(problem.operand2);
      }
    }
  });

  it('formats the display string properly', () => {
    for (let i = 0; i < 100; i++) {
      const { operand1, operand2, operator, display } = generateProblem();
      expect(display).toBe(`${operand1} ${operator} ${operand2}`);
    }
  });
});
```