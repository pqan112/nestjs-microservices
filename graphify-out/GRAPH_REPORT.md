# Graph Report - einvoice  (2026-11-20)

## Corpus Check
- 253 files · ~36,147 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 16 file(s) not represented in the graph (top: (none) 14, .graphify-bak 1, .log 1)

## Summary
- 2198 nodes · 2906 edges · 207 communities (144 shown, 63 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bfbe396d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- targets
- targets
- targets
- targets
- prune-lockfile
- ProductRepo
- compilerOptions
- authorizer/src/app/app.module.ts
- Common Issues
- ProductController
- ci-poll-decide.mjs
- user.service.ts
- Next.js
- seed.js
- Monitor CI Command
- Monitor CI Command
- targets
- nx.json
- invoice.service.ts
- authorizer/src/config/env.config.ts
- bff/src/main.ts
- role.repo.ts
- mongo.config.ts
- invoice.repo.ts
- steps
- dependencies
- devDependencies
- Nx Workspace Exploration
- role.schema.ts
- invoice.repo.ts
- user.repo.ts
- Status Handling by Code
- Jest
- Refactor
- Examples
- Examples
- PERMISSION
- mongo.config.ts
- compilerOptions
- package.json
- Nx NestJS API Template
- compilerOptions
- migrate-oxlint/SKILL.md
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- TCP_SERVICES
- Steps
- compilerOptions
- bff-mobile/src/main.ts
- compilerOptions
- compilerOptions
- product/src/main.ts
- compilerOptions
- Development Guidelines
- compilerOptions
- Refinement Principles
- keycloak
- pgadmin
- HTTP_MESSAGE
- mongodb
- Link Workspace Packages
- .oxlintrc.json
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- api/tsconfig.json
- authorizer/tsconfig.json
- bff/tsconfig.json
- product/tsconfig.json
- PRODUCT
- ProductController
- user-access/tsconfig.json
- Commands
- ci-state-update.mjs
- TURBOREPO.md
- Fix Orders
- configuration/project.json
- constants/project.json
- filters/project.json
- interceptors/project.json
- interface/project.json
- middlewares/project.json
- pipes/project.json
- schemas/project.json
- utils/project.json
- allowBuilds
- INVOICE
- services
- postgres
- VITE.md
- Vite
- Vue-Specific
- decorators/project.json
- entities/project.json
- compilerOptions
- TanStack Start (Vite-Based)
- React-Specific
- nx-run-tasks/SKILL.md
- @nx/jest
- scripts
- @nestjs/common
- React Router 7 (Vite-Based)
- pipes
- General Guidelines for working with Nx
- api/.oxlintrc.json
- authorizer/.oxlintrc.json
- bff/.oxlintrc.json
- product/.oxlintrc.json
- environment
- Redundant npm Scripts After Import
- constants
- zod
- GRADLE.md
- nx-plugins/SKILL.md
- configuration/README.md
- decorators/README.md
- entities/README.md
- filters/README.md
- interceptors/README.md
- interface/README.md
- middlewares/README.md
- schemas/README.md
- utils/README.md
- authorizer/src/main.ts
- bff/src/app/modules/invoice/controllers/invoice.controller.ts
- bff-mobile/tsconfig.json
- bff-mobile/.oxlintrc.json
- nestjs-validation.md
- database.md
- bff/src/app/app.module.ts
- Run Tests
- invoice.dto.ts
- USER
- user.service.ts
- invoice.schema.ts
- MongoModule
- lint-staged@^17.6.0
- verify-typecheck.md
- .create
- InvoiceController
- @nestjs/schematics@^12.0.10
- authorizer.dto.ts
- ProductController
- @nx/eslint-plugin@23.3.0
- @swc/helpers@~0.5.23
- ts-node@10.9.2
- @nx/node@23.3.0
- @types/jest@~30.0.0
- lint-staged
- keycloak-http.service.ts
- webpack@^5.112.0
- webpack-cli@^7.2.3
- api/src/app/modules/invoice/controllers/invoice.controller.ts
- .login
- @nestjs/testing@^12.2.0
- @nx/oxlint@23.3.0
- nx@23.3.0
- @nx/web@23.3.0
- @nx/workspace@23.3.0
- typescript@6.0.3
- webpack-dev-server@^6.1.0

## God Nodes (most connected - your core abstractions)
1. `@nestjs/common` - 57 edges
2. `@nestjs/config` - 27 edges
3. `zod` - 24 edges
4. `PERMISSION` - 23 edges
5. `TCP_SERVICES` - 22 edges
6. `HTTP_MESSAGE` - 20 edges
7. `compilerOptions` - 20 edges
8. `@nestjs/microservices` - 19 edges
9. `Common Issues` - 18 edges
10. `ProcessId` - 17 edges

## Surprising Connections (you probably didn't know these)
- `RoleRepo` --references--> `Role`  [EXTRACTED]
  apps/user-access/src/app/modules/role/repos/role.repo.ts → libs/schemas/src/lib/role.schema.ts
- `InvoiceRepo` --references--> `Invoice`  [EXTRACTED]
  apps/api/src/app/modules/invoice/repos/invoice.repo.ts → libs/schemas/src/lib/invoice.schema.ts
- `UserRepo` --references--> `User`  [EXTRACTED]
  apps/user-access/src/app/modules/user/repos/user.repo.ts → libs/schemas/src/lib/user.schema.ts
- `ProcessId` --calls--> `getProcessId()`  [EXTRACTED]
  libs/decorators/src/lib/process-id.decorator.ts → libs/utils/src/lib/string.util.ts
- `Product` --inherits--> `BaseEntity`  [EXTRACTED]
  libs/entities/src/lib/product.entity.ts → libs/entities/src/lib/base.entity.ts

## Import Cycles
- None detected.

## Communities (207 total, 63 thin omitted)

### Community 0 - "targets"
Cohesion: 0.05
Nodes (41): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+33 more)

### Community 1 - "targets"
Cohesion: 0.05
Nodes (40): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+32 more)

### Community 2 - "targets"
Cohesion: 0.05
Nodes (40): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+32 more)

### Community 3 - "targets"
Cohesion: 0.05
Nodes (40): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+32 more)

### Community 4 - "prune-lockfile"
Cohesion: 0.05
Nodes (38): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+30 more)

### Community 5 - "ProductRepo"
Cohesion: 0.09
Nodes (9): ProductRepo, ProductService, BaseEntity, Product, ProductTcpResponse, typeorm@^1.1.2, uuid@^14.0.3, typeorm (+1 more)

### Community 6 - "compilerOptions"
Cohesion: 0.06
Nodes (33): compileOnSave, compilerOptions, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, ignoreDeprecations, importHelpers (+25 more)

### Community 7 - "authorizer/src/app/app.module.ts"
Cohesion: 0.09
Nodes (9): AppModule, AuthorizerModule, AuthorizerController, AuthorizerService, KeycloakController, KeycloakModule, KeycloakHttpService, allConfigs (+1 more)

### Community 8 - "Common Issues"
Cohesion: 0.07
Nodes (29): Application vs Library Detection, Common Issues, Dependency Version Conflicts, Directory Conventions, ESLint Config Handling, ESLint Version Pinning (Critical), Explicit Executor Path Fixups, Frontend tsconfig Base Settings (Critical) (+21 more)

### Community 10 - "ci-poll-decide.mjs"
Cohesion: 0.10
Nodes (25): args, backoff(), buildOutput(), categorizeTasks(), classify(), envRerunCount, expectedSha, formatMessage() (+17 more)

### Community 12 - "Next.js"
Cohesion: 0.07
Nodes (26): ESLint: Self-Contained `eslint-config-next`, Fix Order — Non-Nx Source (create-next-app), Fix Order — Nx Source (Subdirectory Import), Iteration Log, Mixed Next.js + Vite Coexistence, `next.config.js` Lint Warning, `next-env.d.ts`, Next.js (+18 more)

### Community 13 - "seed.js"
Cohesion: 0.09
Nodes (20): { join }, { NxAppWebpackPlugin }, { join }, { NxAppWebpackPlugin }, { join }, { NxAppWebpackPlugin }, { join }, { NxAppWebpackPlugin } (+12 more)

### Community 14 - "Monitor CI Command"
Cohesion: 0.08
Nodes (25): 2a. Spawn subagent (FETCH_STATUS), 2b. Run decision script, 2c. Process script output, Anti-Patterns, Architecture Overview, Configuration Defaults, Context, Default Behaviors by Status (+17 more)

### Community 15 - "Monitor CI Command"
Cohesion: 0.08
Nodes (25): 2a. Spawn subagent (FETCH_STATUS), 2b. Run decision script, 2c. Process script output, Anti-Patterns, Architecture Overview, Configuration Defaults, Context, Default Behaviors by Status (+17 more)

### Community 16 - "targets"
Cohesion: 0.05
Nodes (40): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+32 more)

### Community 17 - "nx.json"
Cohesion: 0.09
Nodes (24): analytics, cache, executor, inputs, options, namedInputs, default, production (+16 more)

### Community 18 - "invoice.service.ts"
Cohesion: 0.22
Nodes (4): InvoiceModule, invoiceRequestMapping(), UpdateInvoiceRequestDto, UpdateInvoiceTcpRequest

### Community 19 - "authorizer/src/config/env.config.ts"
Cohesion: 0.20
Nodes (14): configSchema, Env, configSchema, Env, configSchema, Env, getEnv, validateEnv (+6 more)

### Community 20 - "bff/src/main.ts"
Cohesion: 0.35
Nodes (6): AppModule, setupSwagger(), APP_CONFIG, AppConfig, bootstrap(), @nestjs/config

### Community 21 - "role.repo.ts"
Cohesion: 0.15
Nodes (8): RoleRepo, RoleModule, RoleService, ROLE, ACCOUNTANT, ADMINISTRATOR, toResponse(), Role

### Community 22 - "mongo.config.ts"
Cohesion: 0.21
Nodes (8): AppModule, APP_CONFIG, AppConfig, allConfigs, configSchema, Env, getEnv, validateEnv

### Community 23 - "invoice.repo.ts"
Cohesion: 0.17
Nodes (5): InvoiceRepo, InvoiceService, CreateInvoice, Invoice, UpdateInvoice

### Community 24 - "steps"
Cohesion: 0.10
Nodes (20): jobs, main, runs-on, steps, name, on, pull_request, push (+12 more)

### Community 25 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, axios@^1.20.0, express@^5.3.0, mongodb@^7.7.0, @nestjs/common@^12.2.0, @nestjs/microservices@^12.2.0, @nestjs/platform-express@^12.2.0, @nestjs/typeorm@^12.0.2 (+9 more)

### Community 26 - "devDependencies"
Cohesion: 0.11
Nodes (19): devDependencies, @commitlint/config-conventional@^21.2.4, husky@^9.1.7, jest-environment-node@~30.5.2, jest-util@~30.5.1, @nestjs/config@^12.0.1, @nestjs/swagger@^12.0.2, @nx/js@23.3.0 (+11 more)

### Community 27 - "Nx Workspace Exploration"
Cohesion: 0.10
Nodes (18): Affected Projects, Affected Projects, "Cannot find configuration for task X:target", Common Exploration Patterns, "How do I build/test/lint project X?", Listing Projects, Listing Projects, Nx Workspace Exploration (+10 more)

### Community 28 - "role.schema.ts"
Cohesion: 0.40
Nodes (3): CreateRole, roleSchema, UpdateRole

### Community 29 - "invoice.repo.ts"
Cohesion: 0.21
Nodes (12): logger, MONGO_CLIENT, MONGO_DB, MongoEnv, COLLECTIONS, INVOICE, ROLE, USER (+4 more)

### Community 30 - "user.repo.ts"
Cohesion: 0.17
Nodes (6): UserRepo, UserTcpResponse, CreateUser, UpdateUser, User, userSchema

### Community 31 - "Status Handling by Code"
Cohesion: 0.11
Nodes (18): Apply Locally + Enhance Flow, Apply via MCP, cipe_no_tasks, Commit Message Format, Detailed Status Handling & Fix Flows, environment_issue, Environment vs Code Failure Recognition, Fix Action Flows (+10 more)

### Community 32 - "Jest"
Cohesion: 0.11
Nodes (18): CI Atomization, Common Post-Import Issues, Core (always needed), Environment-specific, Fix Order, How `@nx/jest` Works, Jest, Jest Preset (+10 more)

### Community 33 - "Refactor"
Cohesion: 0.50
Nodes (3): Refactor, Rules, Workflow

### Community 34 - "Examples"
Cohesion: 0.11
Nodes (17): 1. Preserve Functionality, 2. Apply Project Standards, 3. Enhance Clarity, 4. Maintain Balance, 5. Focus Scope, After: Clear Steps, After: Clear Switch Statement, After: Direct Check (+9 more)

### Community 35 - "Examples"
Cohesion: 0.11
Nodes (17): 1. Preserve Functionality, 2. Apply Project Standards, 3. Enhance Clarity, 4. Maintain Balance, 5. Focus Scope, After: Clear Steps, After: Clear Switch Statement, After: Direct Check (+9 more)

### Community 36 - "PERMISSION"
Cohesion: 0.09
Nodes (22): PERMISSION, INVOICE_CREATE, INVOICE_DELETE, INVOICE_GET_ALL, INVOICE_GET_BY_ID, INVOICE_SEND, INVOICE_UPDATE, PRODUCT_CREATE (+14 more)

### Community 37 - "mongo.config.ts"
Cohesion: 0.16
Nodes (10): AppModule, UserModule, APP_CONFIG, AppConfig, allConfigs, configSchema, Env, getEnv (+2 more)

### Community 38 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+8 more)

### Community 39 - "package.json"
Cohesion: 0.12
Nodes (16): @commitlint/cli@^21.2.4, @nx/nest@23.3.0, oxlint@^1.89.0, @types/express@^5.0.6, @types/node@^26.6.5, unrun@^0.3.1, license, name (+8 more)

### Community 40 - "Nx NestJS API Template"
Cohesion: 0.12
Nodes (16): Affected Commands, Build for production, Code Generation, 💬 Community, Dev server (hot reload), Install Nx Console, 🔗 Learn More, Lint (+8 more)

### Community 41 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 42 - "migrate-oxlint/SKILL.md"
Cohesion: 0.12
Nodes (15): Check Unmigrated Rules, Common CLI Options, External ESLint Plugins, Key Options, Local Plugins, Overview, Plugin Mapping, References (+7 more)

### Community 43 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 44 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 45 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 46 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 47 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 48 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 49 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 50 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 51 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 52 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

### Community 53 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 54 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 55 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 56 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 57 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 58 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 59 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 60 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 61 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 62 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 63 - "compilerOptions"
Cohesion: 0.13
Nodes (14): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+6 more)

### Community 64 - "TCP_SERVICES"
Cohesion: 0.16
Nodes (12): ProductModule, AuthorizerModule, InvoiceModule, ProductModule, UserModule, TcpProvider(), TCP_SERVICES, AUTHORIZER_SERVICE (+4 more)

### Community 65 - "Steps"
Cohesion: 0.14
Nodes (13): 1. Discover Available Generators, 2. Match Generator to User Request, 3. Get Generator Options, 4. Read Generator Source Code, 5. Examine Existing Patterns, 6. Dry-Run to Verify File Placement, 7. Run the Generator, 8. Modify Generated Code (If Needed) (+5 more)

### Community 66 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 67 - "bff-mobile/src/main.ts"
Cohesion: 0.31
Nodes (6): AppModule, setupSwagger(), APP_CONFIG, AppConfig, getEnv, bootstrap()

### Community 68 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 69 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 70 - "product/src/main.ts"
Cohesion: 0.12
Nodes (14): AppModule, ProductModule, APP_CONFIG, AppConfig, allConfigs, configSchema, Env, getEnv (+6 more)

### Community 71 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 72 - "Development Guidelines"
Cohesion: 0.18
Nodes (9): 1. Rules, 1. Terminal, 2. Code Quality, 3. Topic rules and skills, Core Features, Development Guidelines, graphify, Project Overview (+1 more)

### Community 73 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+3 more)

### Community 74 - "Refinement Principles"
Cohesion: 0.18
Nodes (10): 1. Preserve Functionality, 2. Apply Project Standards, 3. Enhance Clarity, 4. Maintain Balance, 5. Focus Scope, Code Simplifier, Limitations, Refinement Principles (+2 more)

### Community 75 - "keycloak"
Cohesion: 0.18
Nodes (11): KEYCLOAK_ADMIN, KEYCLOAK_ADMIN_PASSWORD, command, container_name, environment, image, networks, ports (+3 more)

### Community 76 - "pgadmin"
Cohesion: 0.18
Nodes (11): PGADMIN_DEFAULT_EMAIL, PGADMIN_DEFAULT_PASSWORD, container_name, depends_on, environment, image, networks, ports (+3 more)

### Community 77 - "HTTP_MESSAGE"
Cohesion: 0.14
Nodes (14): HTTP_MESSAGE, BAD_REQUEST, CREATED, DELETED, FAILED, FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND (+6 more)

### Community 78 - "mongodb"
Cohesion: 0.20
Nodes (10): MONGO_INITDB_ROOT_PASSWORD, MONGO_INITDB_ROOT_USERNAME, container_name, environment, image, networks, ports, restart (+2 more)

### Community 79 - "Link Workspace Packages"
Cohesion: 0.20
Nodes (9): bun, Detect Package Manager, Examples, Link Workspace Packages, Notes, npm, pnpm, Workflow (+1 more)

### Community 80 - ".oxlintrc.json"
Cohesion: 0.20
Nodes (9): categories, correctness, env, builtin, ignorePatterns, overrides, plugins, rules (+1 more)

### Community 81 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, module, moduleResolution, outDir, types, extends, include, ./tsconfig.json

### Community 82 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, module, moduleResolution, outDir, types, extends, include, ./tsconfig.json

### Community 83 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, module, moduleResolution, outDir, types, extends, include, ./tsconfig.json

### Community 84 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, module, moduleResolution, outDir, types, extends, include, ./tsconfig.json

### Community 85 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, module, moduleResolution, outDir, types, extends, include, ./tsconfig.json

### Community 86 - "api/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 87 - "authorizer/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 89 - "bff/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 90 - "product/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 91 - "PRODUCT"
Cohesion: 0.67
Nodes (3): PRODUCT, CREATE, GET_LIST

### Community 93 - "user-access/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 94 - "Commands"
Cohesion: 0.25
Nodes (7): CI Monitor Subagent, Commands, FETCH_HEAVY, FETCH_STATUS, FETCH_THROTTLE_INFO, Important, UPDATE_FIX

### Community 95 - "ci-state-update.mjs"
Cohesion: 0.50
Nodes (7): args, cycleCheck(), gate(), getArg(), getFlag(), output(), postAction()

### Community 96 - "TURBOREPO.md"
Cohesion: 0.25
Nodes (7): Check for Root Config Files First, General Cleanup, Key Pitfalls, Merging ESLint Config (Only When Root eslint.config Exists), Merging TypeScript Config (Only When Root tsconfig.base.json Exists), The Config-as-Package Pattern, Turborepo

### Community 97 - "Fix Orders"
Cohesion: 0.25
Nodes (8): Fix Orders, Multiple-Source Imports, Non-Nx Source (additional steps), Non-Nx Source: React Router 7, Non-Nx Source: TanStack Start, Nx Source, Quick Reference: React vs Vue, Quick Reference: Vite-Based React Frameworks

### Community 98 - "configuration/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 99 - "constants/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 100 - "filters/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 101 - "interceptors/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 102 - "interface/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 103 - "middlewares/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 104 - "pipes/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 105 - "schemas/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, // targets, lint

### Community 106 - "utils/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 107 - "allowBuilds"
Cohesion: 0.25
Nodes (7): allowBuilds, @nestjs/core, nx, @parcel/watcher, @scarf/scarf, unrs-resolver, packages

### Community 108 - "INVOICE"
Cohesion: 0.50
Nodes (4): INVOICE, CREATE, GET_LIST, UPDATE

### Community 109 - "services"
Cohesion: 0.29
Nodes (6): driver, name, name, networks, einvoice-nw, services

### Community 110 - "postgres"
Cohesion: 0.29
Nodes (7): container_name, image, networks, ports, restart, volumes, postgres

### Community 111 - "VITE.md"
Cohesion: 0.29
Nodes (6): ESLint — Three-Tier Config, Iteration Log, Mixed React + Vue, Scenario 6: Multiple non-Nx React apps (CRA, Next.js, React Router 7, TanStack Start, Vite) → TS preset (PASS), tsconfig `jsx` — Per-Project Only, Typecheck — Auto-Detects Framework

### Community 112 - "Vite"
Cohesion: 0.29
Nodes (7): Dependency Version Conflicts, Missing TypeScript `types` (Non-Nx Sources), `noEmit` Fix: Vite-Specific Notes, @nx/vite Plugin Install Failure, `@nx/vite/plugin` Typecheck Target, Vite, Vite `resolve.alias` and `__dirname` (Non-Nx Sources)

### Community 113 - "Vue-Specific"
Cohesion: 0.29
Nodes (7): ESLint Plugin Installation Order (Critical), Vue Dependencies, Vue ESLint Config Pattern, `vue-shims.d.ts`, Vue-Specific, `vue-tsc` Auto-Detection, Vue TypeScript Configuration

### Community 114 - "decorators/project.json"
Cohesion: 0.29
Nodes (6): name, projectType, $schema, sourceRoot, tags, // targets

### Community 115 - "entities/project.json"
Cohesion: 0.29
Nodes (6): name, projectType, $schema, sourceRoot, tags, // targets

### Community 116 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, module, moduleResolution, outDir, types, extends, include, ./tsconfig.json

### Community 117 - "TanStack Start (Vite-Based)"
Cohesion: 0.33
Nodes (6): Generated and Build Directories, `paths` Aliases, TanStack Start (Vite-Based), Targets, tsconfig Notes, Uncommitted Source Repo

### Community 118 - "React-Specific"
Cohesion: 0.33
Nodes (6): React Dependencies, React ESLint Config, React-Specific, React TypeScript Configuration, React Version Conflicts, `@testing-library/jest-dom` with Vitest

### Community 119 - "nx-run-tasks/SKILL.md"
Cohesion: 0.33
Nodes (5): Run a single task, Run multiple tasks, Run tasks for affected projects, Understand which tasks can be run, Useful flags

### Community 120 - "@nx/jest"
Cohesion: 0.33
Nodes (4): jest@~30.5.2, @nx/jest@23.3.0, jest, @nx/jest

### Community 121 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, dev, dev-lite, lint, nx:reset, nx:run-many, prepare

### Community 122 - "@nestjs/common"
Cohesion: 0.25
Nodes (3): TcpLoggingInterceptor, ResponseSchema, @nestjs/common

### Community 123 - "React Router 7 (Vite-Based)"
Cohesion: 0.40
Nodes (5): Build Output, Generated Types Directory, React Router 7 (Vite-Based), Targets, tsconfig Notes

### Community 124 - "pipes"
Cohesion: 0.40
Nodes (4): 5. Integrations & Business Rules, 6. Security, 7. Before Completing Tasks, pipes

### Community 125 - "General Guidelines for working with Nx"
Cohesion: 0.50
Nodes (3): General Guidelines for working with Nx, Scaffolding & Generators, When to use nx_docs

### Community 126 - "api/.oxlintrc.json"
Cohesion: 0.50
Nodes (3): extends, ../../.oxlintrc.json, plugins

### Community 127 - "authorizer/.oxlintrc.json"
Cohesion: 0.50
Nodes (3): extends, ../../.oxlintrc.json, plugins

### Community 128 - "bff/.oxlintrc.json"
Cohesion: 0.50
Nodes (3): extends, ../../.oxlintrc.json, plugins

### Community 129 - "product/.oxlintrc.json"
Cohesion: 0.50
Nodes (3): extends, ../../.oxlintrc.json, plugins

### Community 130 - "environment"
Cohesion: 0.50
Nodes (4): POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, environment

### Community 131 - "Redundant npm Scripts After Import"
Cohesion: 0.50
Nodes (4): React Router 7 — Keep ALL scripts, Redundant npm Scripts After Import, Standalone Vite App (`create-vite`), TanStack Start

### Community 133 - "zod"
Cohesion: 0.16
Nodes (11): baseEntityResponseSchema, CreateProductRequestDto, createProductRequestSchema, MobileProductResponseDto, mobileProductResponseSchema, ProductResponseDto, productResponseSchema, CreateUserRequestDto (+3 more)

### Community 145 - "authorizer/src/main.ts"
Cohesion: 0.24
Nodes (7): APP_CONFIG, AppConfig, getEnv, @nestjs/core@^12.2.0, reflect-metadata@^0.2.2, @nestjs/core, reflect-metadata

### Community 146 - "bff/src/app/modules/invoice/controllers/invoice.controller.ts"
Cohesion: 0.19
Nodes (14): AUTHORIZER, LOGIN, KEYCLOAK, CREATE_USER, TCP_REQUEST_MESSAGE, ResponseDto, ResponseSchema, RequestSchema (+6 more)

### Community 147 - "bff-mobile/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, references, ../../tsconfig.base.json

### Community 148 - "bff-mobile/.oxlintrc.json"
Cohesion: 0.50
Nodes (3): extends, plugins, ../../.oxlintrc.json

### Community 151 - "bff/src/app/app.module.ts"
Cohesion: 0.12
Nodes (12): allConfigs, validateEnv, allConfigs, MetadataKeys, PROCESS_ID, START_TIME, AllExceptionFilter, ExceptionInterceptor (+4 more)

### Community 152 - "Run Tests"
Cohesion: 0.50
Nodes (3): Rules, Run Tests, Workflow

### Community 153 - "invoice.dto.ts"
Cohesion: 0.17
Nodes (11): ClientRequestDto, clientRequestSchema, clientResponseSchema, CreateInvoiceRequestDto, createInvoiceRequestSchema, InvoiceResponseDto, invoiceResponseSchema, ItemRequestDto (+3 more)

### Community 154 - "USER"
Cohesion: 0.67
Nodes (3): USER, CREATE, GET_ALL

### Community 155 - "user.service.ts"
Cohesion: 0.21
Nodes (5): createUserRequestMapping(), ERROR_CODE, PRODUCT_ALREADY_EXISTS, USER_ALREADY_EXISTS, CreateKeycloakUserTcpReq

### Community 157 - "invoice.schema.ts"
Cohesion: 0.20
Nodes (9): INVOICE_STATUS, CREATED, PAID, SENT, Client, clientSchema, invoiceSchema, Item (+1 more)

### Community 168 - "InvoiceController"
Cohesion: 0.16
Nodes (3): InvoiceController, ProcessId, getProcessId()

### Community 170 - "authorizer.dto.ts"
Cohesion: 0.40
Nodes (4): LoginRequestDto, loginRequestSchema, LoginResponseDto, loginResponseSchema

### Community 180 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{js,jsx,ts,tsx}, *.{md,json,yml,yaml,html}

### Community 181 - "keycloak-http.service.ts"
Cohesion: 0.20
Nodes (5): KEYCLOAK_CONFIG, KeycloakConfig, CreateKeyCloakUserRequest, ExchangeClientTokenResponse, ExchangeUserTokenResponse

### Community 191 - "api/src/app/modules/invoice/controllers/invoice.controller.ts"
Cohesion: 0.19
Nodes (3): InvoiceController, RequestParams, TCPResponseDto

## Knowledge Gaps
- **104 isolated node(s):** `CREATE`, `GET_LIST`, `UPDATE`, `./tsconfig.json`, `PRODUCT_ALREADY_EXISTS` (+99 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1407 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **63 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@nestjs/common` connect `@nestjs/common` to `ProductRepo`, `authorizer/src/app/app.module.ts`, `authorizer/src/main.ts`, `invoice.service.ts`, `bff/src/app/modules/invoice/controllers/invoice.controller.ts`, `bff/src/main.ts`, `role.repo.ts`, `mongo.config.ts`, `bff/src/app/app.module.ts`, `dependencies`, `user.service.ts`, `invoice.repo.ts`, `mongo.config.ts`, `package.json`, `InvoiceController`, `keycloak-http.service.ts`, `TCP_SERVICES`, `bff-mobile/src/main.ts`, `product/src/main.ts`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **What connects `CREATE`, `GET_LIST`, `UPDATE` to the rest of the system?**
  _104 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.04994192799070848 - nodes in this community are weakly interconnected._
- **Why does `zod` connect `authorizer/src/config/env.config.ts` to `mongo.config.ts`, `product/src/main.ts`, `zod`, `package.json`, `authorizer.dto.ts`, `bff/src/app/modules/invoice/controllers/invoice.controller.ts`, `dependencies`, `mongo.config.ts`, `bff/src/app/app.module.ts`, `invoice.schema.ts`, `invoice.dto.ts`, `@nestjs/common`, `role.schema.ts`, `invoice.repo.ts`, `user.repo.ts`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._
- **Why does `nestjs-zod` connect `bff/src/app/modules/invoice/controllers/invoice.controller.ts` to `zod`, `package.json`, `authorizer.dto.ts`, `bff/src/app/app.module.ts`, `invoice.dto.ts`, `@nestjs/common`, `dependencies`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._