# CLAUDE.md

## Project Overview

**eInvoice** is an electronic invoice management system built with NestJS and Nx monorepo architecture.

### Core Features

1. **Invoice Management:** Create and manage invoices in MongoDB with lifecycle `CREATED → SENT → PAID`.
2. **PDF Generation:** Generate invoice PDFs using EJS and Puppeteer, with Base64 output support.
3. **Cloud Storage:** Upload PDFs to Cloudinary and store the `fileUrl` in MongoDB.
4. **Online Payment:** Create Stripe Checkout Sessions for each invoice.
5. **Async Email:** Use Kafka to send emails containing PDF attachments and payment links.
6. **Payment Webhook:** Verify Stripe webhook signatures, retrieve invoice IDs from metadata, and update invoice status to `PAID`.

## Tech Stack

- **Monorepo:** Nx
- **Package Manager:** pnpm
- **Backend:** NestJS, TypeScript
- **Validation:** Zod, nestjs-zod
- **Database:** MongoDB (native `mongodb` driver) for invoices in `apps/api`; PostgreSQL via TypeORM for products in `apps/product`

## Development Guidelines

### 1. Terminal

- DON'T use `npm` or `npx`. ALWAYS use `pnpm`.
- Use Nx commands to manage and run projects.
- Use `pnpm exec` for locally installed CLI tools.

### 2. Code Quality

- Always read and apply the instructions from the `code-simplifier` skill before writing, updating, or refactoring code.
- Follow existing project structure, coding conventions, and architecture.
- Prefer simple, maintainable solutions over unnecessary abstractions.
- Use TypeScript strict typing; avoid `any` whenever possible.
- Avoid duplicated code and unnecessary dependencies.

### 3. NestJS & Validation

- Follow NestJS module-based architecture and dependency injection.
- Use Zod and nestjs-zod for input validation.
- Don't re-declare fields a base schema already provides; extend schemas only with new fields and don't reuse base schemas for dto
- Reuse schemas and infer TypeScript types with `z.infer` where appropriate.
- Use appropriate NestJS exceptions for error handling.

### 4. Database

- Follow existing TypeORM and MongoDB conventions.
- Handle ObjectId and document operations correctly.
- Consider concurrent updates, data consistency, and database performance.
- Do not assume relational database features are supported by MongoDB.

### 5. Testing

- Run tests and fix detected issues in a maximum of 3 iterations.
- Group errors by category (e.g., TypeScript, build errors and system errors) to identify root causes and fix them efficiently.
- If issues remain after 3 iterations, report unresolved errors and their possible causes.

### 6. Refactoring

- Prioritize readability, simplicity, and maintainability over clever or overly concise code.
- Always read and apply the `code-simplifier` skill before refactoring.
- Understand existing code, project conventions, dependencies, and usages before making changes.
- Preserve existing behavior, APIs, and business logic.
- Follow KISS, DRY, and YAGNI principles; avoid unnecessary abstractions and over-engineering.
- Use clear, meaningful naming and keep functions focused on a single responsibility.
- Keep refactoring changes small and focused; avoid unrelated modifications and ensure no errors.
