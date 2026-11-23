---
paths:
  - 'apps/**/migrations/**'
  - 'apps/**/data-source.ts'
  - 'libs/entities/**'
  - 'libs/configuration/src/lib/typeorm.config.ts'
---

# Migrations (TypeORM / PostgreSQL)

- Never set `synchronize: true`. Every schema change goes through a migration.
- After changing an entity in `libs/entities`, generate a migration: `pnpm nx run product:migration-generate --name=<PascalCaseName>`. Then run it: `pnpm nx run product:migration-run`.
- Name migrations by what they do (`AddProductBarcode`), not by date or ticket.
- Never edit a migration that has already been run. Add a new one instead.
- Always keep `down()` correct so `migration-revert` works.
- Review the generated SQL before committing. Do not hand-write SQL unless it is needed (e.g. a data fix).
- Generate against a database that matches the existing migrations. If the table already exists but is not recorded in `migrations`, mark it as applied; do not drop data.
- Migrations are not run by the app on startup. Run `migration-run` manually in each environment.
- A new service using TypeORM needs its own `data-source.ts`, `migrations/` folder, and the three `migration-*` targets in its `project.json`.
