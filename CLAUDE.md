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
- **Database:** MongoDB (native `mongodb` driver) for invoices in `apps/invoice`; PostgreSQL via TypeORM for products in `apps/product`

## Development Guidelines

### 1. Terminal

- pakage manager: pnpm.
- Use Nx commands to manage and run projects.

### 2. Code Quality

- Always read and apply the instructions from the `code-simplifier` skill before writing, updating, or refactoring code.
- Follow existing project structure, coding conventions, and architecture.
- Prefer simple, maintainable solutions over unnecessary abstractions.
- Use TypeScript strict typing; avoid `any` whenever possible.
- Avoid duplicated code and unnecessary dependencies.
- Prioritize readability, simplicity, and maintainability over clever or overly concise code.

### 3. Topic rules and skills

- Rules in `.claude/rules/` load when matching files are touched: `nestjs-validation.md`, `database.md`, `migrations.md`.
- Use the `run-tests` skill to run or fix tests, and the `refactor` skill to refactor code.

### 4. Limitations

- If you lack knowledge about the question or anything related to it, ask me for more information instead of guessing

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:

- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. When the answer is under a Markdown heading, `graphify section "<heading>"` prints that section's text, so the .md need not be opened. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.
