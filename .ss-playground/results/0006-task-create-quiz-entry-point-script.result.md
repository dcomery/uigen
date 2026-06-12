# Result: Task: Create Quiz Entry Point Script

**Task ID:** 0006
**Step:** 6
**Worker:** moonshotai/Kimi-K2.6
**Timestamp:** 2026-06-12T14:18:00.110Z

## Worker Output

 ```typescript
// src/scripts/math-quiz/index.ts
import { runQuiz } from './quiz-runner';

async function main(): Promise<void> {
  console.log('Welcome to the Math Quiz!');

  await runQuiz();

  console.log('Thanks for playing! Goodbye!');
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error: unknown) => {
    console.error('An unexpected error occurred:', error);
    process.exit(1);
  });
```