---
name: run-tests
description: Run tests for this Nx project and fix failures with a bounded fix loop. Use when asked to run, verify, or fix tests, or after code changes that need test proof.
---

# Run Tests

## Workflow

1. Run tests with Nx and pnpm, scoped to the affected project, for example `pnpm nx test <project>` or `pnpm nx affected -t test`.
2. If tests fail, group the errors by category (TypeScript, build, system/runtime) and identify the root cause of each group before editing.
3. Fix the root causes, then re-run the tests.
4. Repeat at most 3 iterations of fix and re-run.
5. If failures remain after 3 iterations, stop and report the unresolved errors and their possible causes. Do not keep trying.

## Rules

- Fix the cause, not the symptom. Do not delete or weaken tests to make them pass.
- Do not change unrelated code while fixing failures.
