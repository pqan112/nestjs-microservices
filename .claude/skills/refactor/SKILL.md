---
name: refactor
description: Refactor code in this project while preserving behavior. Use when asked to refactor, clean up, restructure, or simplify existing code.
---

# Refactor

## Workflow

1. Read and apply the `code-simplifier` skill first.
2. Understand the existing code, project conventions, dependencies, usages, and change constraints before modifying anything.
3. Make small, focused changes. Do not touch unrelated code.
4. Preserve existing behavior, APIs, business logic, and test contracts.
5. Verify with the project's typecheck, build, lint, and tests when available.

## Rules

- Prioritize readability, simplicity, and maintainability over clever or overly concise code.
- Follow KISS, DRY, and YAGNI; avoid unnecessary abstractions and over-engineering.
- Use clear, meaningful names and keep each function focused on a single responsibility.
- Measure before claiming something is dead, duplicated, unused, or a performance problem; do not infer from appearance alone.
- Check for hidden dependencies and change constraints such as test imports, monkeypatches, source-text checks, public exports, error messages, and module paths.
- Prefer preserving existing seams through aliases, re-exports, or dependency injection rather than breaking consumers.
- Do not edit tests just to make a refactor pass. Test changes are allowed only when explicitly justified by a genuine behavior/structure change.
- Re-check the affected usages after refactoring and verify the actual code path, not only static analysis.
- If a proposed change cannot be proven behavior-preserving, stop and characterize the behavior with a test before refactoring.
- If you discover unrelated defects or cleanup, do not expand the refactor scope unless the current change would be incomplete without it.
