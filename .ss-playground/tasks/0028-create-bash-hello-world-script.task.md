# Task: Create Bash Hello World Script

## Description
Create a bash script at `src/scripts/hello-world.sh` that prints a "Hello, World!" greeting to stdout.

The script should:
- Start with a proper shebang: `#!/usr/bin/env bash`
- Use `set -euo pipefail` for safe execution
- Print a greeting that is visually distinct from the existing TypeScript version — use a multi-line ASCII banner, for example:

```
==========================================
  Hello, World! (bash edition)
  Running on: <hostname>
  Date: <current date and time>
==========================================
```

Use bash builtins and standard coreutils only — `echo`, `hostname`, `date`. No external dependencies.

Make the script executable: `chmod +x src/scripts/hello-world.sh`.

## Files to Modify
- `src/scripts/hello-world.sh` — **create** new file

## Acceptance Criteria
- [ ] File `src/scripts/hello-world.sh` exists
- [ ] File has executable permission (chmod +x applied)
- [ ] Script starts with `#!/usr/bin/env bash`
- [ ] Script includes `set -euo pipefail`
- [ ] Running `bash src/scripts/hello-world.sh` prints output containing "Hello, World!"
- [ ] Output includes at least the hostname and current date/time
- [ ] Script exits with code 0
