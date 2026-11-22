---
paths:
  - 'apps/**/repos/**'
  - 'apps/**/*.repo.ts'
  - 'apps/product/**'
  - 'libs/entities/**'
  - 'libs/schemas/**'
  - 'libs/configuration/**'
---

# Database

- Follow existing TypeORM and MongoDB conventions.
- Handle ObjectId and document operations correctly.
- Consider concurrent updates, data consistency, and database performance.
- Do not assume relational database features are supported by MongoDB.
- Never write raw SQL unless requested
