---
paths:
  - 'apps/**/*.ts'
  - 'libs/**/*.ts'
---

# NestJS & Validation

- Follow NestJS module-based architecture and dependency injection.
- Use Zod and nestjs-zod for input validation.
- Don't re-declare fields a base schema already provides; extend schemas only with new fields and don't reuse base schemas for dto
- Reuse schemas and infer TypeScript types with `z.infer` where appropriate.
- Use appropriate NestJS exceptions for error handling.
