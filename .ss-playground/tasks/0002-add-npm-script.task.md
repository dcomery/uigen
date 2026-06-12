# Task: Add npm Script for Hello World

## Description
Add an npm script entry to `package.json` so the hello world script can be run via `npm run hello`. The script command should execute `tsx src/scripts/hello-world.ts`. Add `tsx` to `devDependencies` if it is not already present (check first).

## Files to Modify
- `package.json` — add `"hello": "tsx src/scripts/hello-world.ts"` to the `scripts` section

## Acceptance Criteria
- [ ] `package.json` contains a `"hello"` entry in `scripts`
- [ ] Running `npm run hello` prints `Hello, World!` to stdout
- [ ] No other scripts or dependencies are removed or altered
- [ ] `tsx` is available (either already installed or added to devDependencies)
