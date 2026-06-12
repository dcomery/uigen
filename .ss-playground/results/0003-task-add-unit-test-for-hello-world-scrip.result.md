# Result: Task: Add Unit Test for Hello World Script

**Task ID:** 0003
**Step:** 3
**Worker:** moonshotai/Kimi-K2.6
**Timestamp:** 2026-06-12T04:22:39.525Z

## Worker Output

 **File:** `src/scripts/__tests__/hello-world.test.ts`

```typescript
import { describe, it, expect, vi } from 'vitest';

describe('hello-world script', () => {
  it('should output "Hello, World!"', async () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    // Clear the module cache and re-import to ensure side-effects run within this test
    vi.resetModules();
    await import('../hello-world');

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Hello, World!');

    logSpy.mockRestore();
  });
});
```

**Notes:**
- The test mocks `console.log` before dynamically importing the script so it can capture the output without polluting the test runner’s stdout.
- `vi.resetModules()` ensures a fresh import, which is important if the script runs side effects on load.
- If `src/scripts/hello-world.ts` exports a function (e.g., `main`, `run`) that must be invoked to produce output, replace the dynamic import line with a static import and call that function instead.