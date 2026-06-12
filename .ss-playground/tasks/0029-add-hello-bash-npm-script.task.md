# Task: Add npm Script to Run Bash Hello World

## Description
Add a `hello:bash` npm script to `package.json` that runs the bash hello world script created in task 0028.

The new script entry:
```json
"hello:bash": "bash src/scripts/hello-world.sh"
```

Add it immediately after the existing `"hello"` script so the two are grouped together.

## Files to Modify
- `package.json` — **modify**: add `"hello:bash"` script entry after the existing `"hello"` entry

## Acceptance Criteria
- [ ] `package.json` contains a `"hello:bash"` script
- [ ] The value is `"bash src/scripts/hello-world.sh"`
- [ ] The existing `"hello"` script (`"tsx src/scripts/hello-world.ts"`) is preserved unchanged
- [ ] All other existing scripts are preserved unchanged
- [ ] `package.json` is valid JSON (no syntax errors)
- [ ] Running `npm run hello:bash` executes the script and prints the greeting
