# Task: Add Unit Test for Hello World Script

## Description
Create a vitest unit test for the hello world script. The test should verify the script's output by importing or executing it and asserting the expected behavior. Place the test alongside the existing test conventions in the repo (vitest is already configured via `vitest.config.mts`).

## Files to Modify
- `src/scripts/__tests__/hello-world.test.ts` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/__tests__/hello-world.test.ts` exists
- [ ] Test verifies that the hello world script produces the expected `Hello, World!` output
- [ ] Running `npx vitest run src/scripts/__tests__/hello-world.test.ts` passes
- [ ] Test follows existing repo conventions (vitest, TypeScript)
