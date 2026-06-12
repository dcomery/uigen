# Result: Task: Create Quiz Runner Module

**Task ID:** 0005
**Step:** 5
**Worker:** moonshotai/Kimi-K2.6
**Timestamp:** 2026-06-12T14:16:18.006Z

## Worker Output

 **File:** `src/scripts/math-quiz/quiz-runner.ts`

```typescript
import * as readline from 'readline';
import { generateProblem } from './problem-generator';

export async function runQuiz(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (query: string): Promise<string> =>
    new Promise((resolve) => rl.question(query, resolve));

  let score = 0;
  const total = 5;

  try {
    for (let i = 1; i <= total; i += 1) {
      const problem = generateProblem();
      const input = await ask(`Problem ${i}: What is ${problem.text}? `);
      const userAnswer = parseFloat(input.trim());

      if (userAnswer === problem.answer) {
        console.log('Correct!');
        score += 1;
      } else {
        console.log(`Wrong! The correct answer was ${problem.answer}.`);
      }
    }

    console.log(`\nYou scored ${score} out of ${total}!`);
  } finally {
    rl.close();
  }
}
```