# Task: Add Unit Test for Hello World Page

## Description
Create a Vitest + React Testing Library test for the Hello World page component at `src/app/hello/__tests__/page.test.tsx`.

The test should render the `HelloPage` component (default export from `../page`) and verify:
1. The heading "Hello, World!" is present in the document
2. The subheading "Welcome to UIGen" is present
3. A link with text "← Back to Home" pointing to `/` is present

Use `@testing-library/react` (already installed) for rendering and assertions. The page is a server component that returns plain JSX with no async operations, so it can be rendered synchronously in tests.

Import the default export from `../page` directly.

## Files to Modify
- `src/app/hello/__tests__/page.test.tsx` — **create** new file

## Acceptance Criteria
- [ ] File `src/app/hello/__tests__/page.test.tsx` exists
- [ ] Test renders the page without errors
- [ ] Asserts "Hello, World!" heading is visible
- [ ] Asserts "Welcome to UIGen" subheading is visible
- [ ] Asserts the back-link to `/` is present
- [ ] Running `npx vitest run src/app/hello/__tests__/page.test.tsx` passes with no failures
- [ ] No TypeScript errors
- [ ] Follows existing repo test conventions (vitest, @testing-library/react, jsdom)
