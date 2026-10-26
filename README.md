# Nx NestJS API Template

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A production-ready NestJS REST API starter powered by Nx - built for teams who want a solid monorepo foundation with shared types, module boundaries, and Docker support from day one.

### Dev server (hot reload)

```sh
npx nx run api:serve
```

### Build for production

```sh
npx nx run api:build
```

### Run all builds

```sh
npx nx run-many -t build
```

### Run tests

```sh
npx nx run-many -t test
```

### Lint

```sh
npx nx run-many -t lint
```

### Visualize the project graph

```sh
npx nx graph
```

### Smart Computation Caching

Every build, test, and lint result is cached locally (and remotely via Nx Cloud). Re-running unchanged tasks is instant.

```sh
npx nx run api:build   # second run: < 100 ms from cache
```

### Affected Commands

Only run what actually changed since your last commit or PR base:

```sh
npx nx affected -t build,test,lint
```

### Code Generation

Scaffold new resources without boilerplate:

```sh
# New NestJS app
npx nx g @nx/nest:app my-service

# New shared library
npx nx g @nx/js:lib packages/my-lib --bundler=tsc

# NestJS resource (CRUD module, controller, service, DTOs)
npx nx g @nx/nest:resource --project=api --name=users
```

### Module Boundaries

Enforce architectural rules at lint time. A `scope:api` library can never accidentally import from another app - only from `scope:shared` libs. Configure the rules in `.oxlintrc.json`.

---

## Nx Cloud

[Nx Cloud](https://nx.dev/nx-cloud) makes distributed CI simple:

- **Remote cache** - Shares the computation cache across all machines - one build warms the cache for everyone else.
- **Distributed task execution (DTE)** - Splits tasks across N CI agents automatically - no manual job matrix required.
- **Flaky task detection** - Tracks pass/fail history per task, reruns flaky tasks so one bad agent doesn't fail the PR.
- **PR insights** - Shows exactly which tasks ran, which were cache hits, and what slowed down your pipeline.

Docs -> https://nx.dev/nx-cloud

---

## Replacing the In-Memory Store

`TodosService` uses a plain array. Drop in any persistence layer:

- **TypeORM** - `npx nx add @nx/typeorm` (or install manually + `TypeOrmModule.forRoot(...)`)
- **Prisma** - add `prisma` + `@prisma/client`, generate, inject `PrismaService`
- **MikroORM**, **Mongoose**, **Drizzle** - follow the same pattern

---

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/docs/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## 🔗 Learn More

- [Nx Documentation](https://nx.dev/docs)
- [Crafting Your Workspace Tutorial](https://nx.dev/docs/getting-started/tutorials/crafting-your-workspace)
- [Module Boundaries](https://nx.dev/docs/features/enforce-module-boundaries)
- [NestJS Documentation](https://docs.nestjs.com)
- [Docker Integration](https://nx.dev/docs/guides/nx-release/release-docker-images)
- [Nx Cloud](https://nx.dev/nx-cloud)

## 💬 Community

Join the Nx community:

- [Discord](https://go.nx.dev/community)
- [X (Twitter)](https://twitter.com/nxdevtools)
- [LinkedIn](https://www.linkedin.com/company/nrwl)
- [YouTube](https://www.youtube.com/@nxdevtools)
- [Blog](https://nx.dev/blog)
