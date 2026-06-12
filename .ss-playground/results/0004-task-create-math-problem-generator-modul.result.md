# Result: Task: Create Math Problem Generator Module

**Task ID:** 0004
**Step:** 4
**Worker:** moonshotai/Kimi-K2.6
**Timestamp:** 2026-06-12T14:12:42.230Z

## Worker Output

 **File:** `src/scripts/math-quiz/problem-generator.ts`

```typescript
export interface MathProblem {
  operand1: number;
  operand2: number;
  operator: string;
  correctAnswer: number;
  display: string;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateProblem(): MathProblem {
  const operators = ['+', '-', '×'] as const;
  const operator = operators[randomInt(0, operators.length - 1)];

  let operand1: number;
  let operand2: number;
  let correctAnswer: number;

  if (operator === '+') {
    operand1 = randomInt(1, 20);
    operand2 = randomInt(1, 20);
    correctAnswer = operand1 + operand2;
  } else if (operator === '-') {
    operand1 = randomInt(1, 20);
    operand2 = randomInt(1, operand1); // ensure non‑negative result
    correctAnswer = operand1 - operand2;
  } else {
    // multiplication
    operand1 = randomInt(1, 20);
    operand2 = randomInt(1, 20);
    correctAnswer = operand1 * operand2;
  }

  return {
    operand1,
    operand2,
    operator,
    correctAnswer,
    display: `${operand1} ${operator} ${operand2} = ?`,
  };
}
```