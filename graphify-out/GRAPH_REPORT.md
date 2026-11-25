# Graph Report - einvoice  (2026-11-25)

## Corpus Check
- 293 files · ~40,784 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 20 file(s) not represented in the graph (top: (none) 16, .proto 2, .graphify-bak 1)

## Summary
- 2440 nodes · 3632 edges · 177 communities (132 shown, 45 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3e8148d9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- targets
- targets
- targets
- serve
- prune-lockfile
- product/src/app/modules/product/product.module.ts
- compilerOptions
- user.service.ts
- Common Issues
- devDependencies
- ci-poll-decide.mjs
- sendTcpRequest
- Next.js
- seed.js
- Monitor CI Command
- Monitor CI Command
- targets
- nx.json
- package.json
- ProcessId
- authorizer.service.ts
- role.repo.ts
- invoice.dto.ts
- pdf-generator/src/app/app.module.ts
- steps
- dependencies
- filters/tsconfig.json
- Nx Workspace Exploration
- compilerOptions
- authorizer/src/app/modules/authorizer/authorizer.module.ts
- prune-lockfile
- Status Handling by Code
- Jest
- Refactor
- Examples
- Examples
- PERMISSION
- HTTP_MESSAGE
- compilerOptions
- bff/src/app/modules/invoice/controllers/invoice.controller.ts
- Nx NestJS API Template
- bff-mobile/tsconfig.json
- migrate-oxlint/SKILL.md
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- invoice/src/app/modules/invoice/controllers/invoice.controller.ts
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- .createUser
- TCP_SERVICES
- AUTHORIZER
- PRODUCT
- compilerOptions
- lint-staged
- compilerOptions
- .claude/CLAUDE.md
- lint-staged@^17.6.0
- @nestjs/schematics@^12.0.10
- oxlint@^1.89.0
- ProductController
- Steps
- invoice/tsconfig.json
- invoice.repo.ts
- compilerOptions
- bff/tsconfig.json
- @types/ejs@^3.1.5
- product/tsconfig.json
- Development Guidelines
- compilerOptions
- Refinement Principles
- keycloak
- pgadmin
- @types/jest@~30.0.0
- mongodb
- Link Workspace Packages
- .oxlintrc.json
- invoice/src/configuration/env.config.ts
- compilerOptions
- @types/jsonwebtoken@^9.0.10
- typescript@6.0.3
- bff/src/configuration/env.config.ts
- authorizer/tsconfig.json
- user-access/src/app/app.module.ts
- interfaces/project.json
- TcpResponse
- user-access/tsconfig.json
- Commands
- ci-state-update.mjs
- TURBOREPO.md
- Fix Orders
- configuration/project.json
- constants/project.json
- filters/project.json
- interceptors/project.json
- middlewares/project.json
- pipes/project.json
- schemas/project.json
- utils/project.json
- allowBuilds
- zod
- services
- postgres
- VITE.md
- Vite
- Vue-Specific
- decorators/project.json
- entities/project.json
- TanStack Start (Vite-Based)
- React-Specific
- nx-run-tasks/SKILL.md
- @nx/jest
- scripts
- user.service.ts
- React Router 7 (Vite-Based)
- pipes
- General Guidelines for working with Nx
- env
- Redundant npm Scripts After Import
- constants
- .create
- GRADLE.md
- nx-plugins/SKILL.md
- configuration/README.md
- decorators/README.md
- entities/README.md
- filters/README.md
- interceptors/README.md
- compilerOptions
- middlewares/README.md
- schemas/README.md
- utils/README.md
- guards/project.json
- USER
- nestjs-validation.md
- database.md
- targets
- Run Tests
- interfaces/README.md
- AuthorizerController
- guards
- @nestjs/config
- verify-typecheck.md
- authorizer-response.interface.ts
- INVOICE
- redis
- redis-insight
- app.config.ts
- .create
- @nestjs/common
- copy-workspace-modules
- user.guard.ts
- product/project.json
- .login
- prune-lockfile
- ProductController
- @nx/nest@23.3.0
- user.repo.ts
- @nestjs/core
- husky@^9.1.7
- jest-environment-node@~30.5.2
- @nx/node@23.3.0
- @nx/workspace@23.3.0

## God Nodes (most connected - your core abstractions)
1. `@nestjs/common` - 70 edges
2. `TCP_SERVICES` - 32 edges
3. `@nestjs/microservices` - 28 edges
4. `PERMISSION` - 27 edges
5. `zod` - 27 edges
6. `@nestjs/config` - 23 edges
7. `HTTP_MESSAGE` - 21 edges
8. `compilerOptions` - 20 edges
9. `ERROR_CODE` - 19 edges
10. `ProcessId` - 19 edges

## Surprising Connections (you probably didn't know these)
- `bootstrap()` --calls--> `setupSwagger()`  [EXTRACTED]
  apps/bff-mobile/src/main.ts → libs/configuration/src/lib/swagger.config.ts
- `AuthorizerController` --references--> `ThrottleGroup()`  [EXTRACTED]
  apps/bff/src/app/modules/authorizer/controllers/authorizer.controller.ts → libs/configuration/src/lib/throttler.config.ts
- `InvoiceController` --references--> `ThrottleGroup()`  [EXTRACTED]
  apps/bff/src/app/modules/invoice/controllers/invoice.controller.ts → libs/configuration/src/lib/throttler.config.ts
- `ProductController` --references--> `ThrottleGroup()`  [EXTRACTED]
  apps/bff/src/app/modules/product/controllers/product.controller.ts → libs/configuration/src/lib/throttler.config.ts
- `UserController` --references--> `ThrottleGroup()`  [EXTRACTED]
  apps/bff/src/app/modules/user/controllers/user.controller.ts → libs/configuration/src/lib/throttler.config.ts

## Import Cycles
- None detected.

## Communities (177 total, 45 thin omitted)

### Community 0 - "targets"
Cohesion: 0.05
Nodes (41): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+33 more)

### Community 1 - "targets"
Cohesion: 0.05
Nodes (40): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+32 more)

### Community 2 - "targets"
Cohesion: 0.05
Nodes (40): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+32 more)

### Community 3 - "serve"
Cohesion: 0.20
Nodes (10): development, production, buildTarget, buildTarget, configurations, continuous, defaultConfiguration, dependsOn (+2 more)

### Community 4 - "prune-lockfile"
Cohesion: 0.05
Nodes (38): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+30 more)

### Community 5 - "product/src/app/modules/product/product.module.ts"
Cohesion: 0.07
Nodes (11): ProductModule, ProductRepo, ProductService, getEnv, env, CreateProductTable1795442104441, Migrations (TypeORM / PostgreSQL), BaseEntity (+3 more)

### Community 6 - "compilerOptions"
Cohesion: 0.06
Nodes (32): compilerOptions, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, ignoreDeprecations, importHelpers, lib (+24 more)

### Community 7 - "user.service.ts"
Cohesion: 0.33
Nodes (6): KEYCLOAK, CREATE_USER, TCP_REQUEST_MESSAGE, RequestParams, TcpLoggingInterceptor, TcpSuccess()

### Community 8 - "Common Issues"
Cohesion: 0.07
Nodes (29): Application vs Library Detection, Common Issues, Dependency Version Conflicts, Directory Conventions, ESLint Config Handling, ESLint Version Pinning (Critical), Explicit Executor Path Fixups, Frontend tsconfig Base Settings (Critical) (+21 more)

### Community 9 - "devDependencies"
Cohesion: 0.07
Nodes (29): devDependencies, @commitlint/cli@^21.2.4, @commitlint/config-conventional@^21.2.4, @nestjs/config@^12.0.1, @nestjs/swagger@^12.0.2, @nx/eslint-plugin@23.3.0, @nx/js@23.3.0, @nx/oxlint@23.3.0 (+21 more)

### Community 10 - "ci-poll-decide.mjs"
Cohesion: 0.10
Nodes (25): args, backoff(), buildOutput(), categorizeTasks(), classify(), envRerunCount, expectedSha, formatMessage() (+17 more)

### Community 11 - "sendTcpRequest"
Cohesion: 0.15
Nodes (3): InvoiceController, UserData, AuthorizedMetadataDto

### Community 12 - "Next.js"
Cohesion: 0.07
Nodes (26): ESLint: Self-Contained `eslint-config-next`, Fix Order — Non-Nx Source (create-next-app), Fix Order — Nx Source (Subdirectory Import), Iteration Log, Mixed Next.js + Vite Coexistence, `next.config.js` Lint Warning, `next-env.d.ts`, Next.js (+18 more)

### Community 13 - "seed.js"
Cohesion: 0.06
Nodes (25): { join }, { NxAppWebpackPlugin }, { join }, { NxAppWebpackPlugin }, { join }, { NxAppWebpackPlugin }, { join }, { NxAppWebpackPlugin } (+17 more)

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

### Community 18 - "package.json"
Cohesion: 0.10
Nodes (20): jest-util@~30.5.1, @nestjs/testing@^12.2.0, nx@23.3.0, prettier@~3.9.10, @swc/helpers@~0.5.23, @types/express@^5.0.6, @types/node@^26.6.5, unrun@^0.3.1 (+12 more)

### Community 19 - "ProcessId"
Cohesion: 0.17
Nodes (9): MetadataKeys, PROCESS_ID, START_TIME, USER_DATA, AllExceptionFilter, LoggerMiddleware, stringifyForLog(), getProcessId() (+1 more)

### Community 20 - "authorizer.service.ts"
Cohesion: 0.05
Nodes (33): AuthorizerGrpcController, AuthorizerService, KeycloakHttpService, configSchema, Env, getEnv, validateEnv, KEYCLOAK_CONFIG (+25 more)

### Community 21 - "role.repo.ts"
Cohesion: 0.13
Nodes (11): RoleRepo, RoleService, COLLECTIONS, INVOICE, ROLE, USER, ROLE, ACCOUNTANT (+3 more)

### Community 22 - "invoice.dto.ts"
Cohesion: 0.11
Nodes (17): baseEntityResponseSchema, ClientRequestDto, clientRequestSchema, clientResponseSchema, createInvoiceRequestSchema, invoiceResponseSchema, ItemRequestDto, itemRequestSchema (+9 more)

### Community 23 - "pdf-generator/src/app/app.module.ts"
Cohesion: 0.29
Nodes (6): AppModule, allConfigs, configSchema, Env, getEnv, validateEnv

### Community 24 - "steps"
Cohesion: 0.10
Nodes (20): jobs, main, runs-on, steps, name, on, pull_request, push (+12 more)

### Community 25 - "dependencies"
Cohesion: 0.05
Nodes (39): dependencies, axios@^1.20.0, cache-manager@^7.2.9, ejs@^7.0.2, express@^5.3.0, @grpc/grpc-js@^1.14.7, @grpc/proto-loader@^0.8.1, ioredis@^6.0.0 (+31 more)

### Community 26 - "filters/tsconfig.json"
Cohesion: 0.25
Nodes (6): extends, files, include, extends, include, references

### Community 27 - "Nx Workspace Exploration"
Cohesion: 0.10
Nodes (18): Affected Projects, Affected Projects, "Cannot find configuration for task X:target", Common Exploration Patterns, "How do I build/test/lint project X?", Listing Projects, Listing Projects, Nx Workspace Exploration (+10 more)

### Community 28 - "compilerOptions"
Cohesion: 0.05
Nodes (35): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+27 more)

### Community 29 - "authorizer/src/app/modules/authorizer/authorizer.module.ts"
Cohesion: 0.25
Nodes (5): AppModule, AuthorizerModule, KeycloakModule, allConfigs, GrpcProvider()

### Community 30 - "prune-lockfile"
Cohesion: 0.05
Nodes (38): development, production, cache, dependsOn, executor, options, outputs, buildTarget (+30 more)

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

### Community 37 - "HTTP_MESSAGE"
Cohesion: 0.14
Nodes (14): HTTP_MESSAGE, BAD_REQUEST, CREATED, DELETED, FAILED, FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND (+6 more)

### Community 38 - "compilerOptions"
Cohesion: 0.05
Nodes (35): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+27 more)

### Community 39 - "bff/src/app/modules/invoice/controllers/invoice.controller.ts"
Cohesion: 0.25
Nodes (12): ThrottleGroup(), ProcessId, ProductResponseDto, ResponseDto, ResponseSchema, RequestSchema, TCPRequestDto, sendTcpRequest() (+4 more)

### Community 40 - "Nx NestJS API Template"
Cohesion: 0.12
Nodes (16): Affected Commands, Build for production, Code Generation, 💬 Community, Dev server (hot reload), Install Nx Console, 🔗 Learn More, Lint (+8 more)

### Community 41 - "bff-mobile/tsconfig.json"
Cohesion: 0.07
Nodes (24): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+16 more)

### Community 42 - "migrate-oxlint/SKILL.md"
Cohesion: 0.12
Nodes (15): Check Unmigrated Rules, Common CLI Options, External ESLint Plugins, Key Options, Local Plugins, Overview, Plugin Mapping, References (+7 more)

### Community 43 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+19 more)

### Community 44 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+19 more)

### Community 45 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+19 more)

### Community 46 - "compilerOptions"
Cohesion: 0.17
Nodes (12): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+4 more)

### Community 47 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+19 more)

### Community 48 - "invoice/src/app/modules/invoice/controllers/invoice.controller.ts"
Cohesion: 0.19
Nodes (5): invoiceRequestMapping(), InvoiceService, CreateInvoiceRequestDto, UpdateInvoiceRequestDto, UpdateInvoiceTcpRequest

### Community 49 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+19 more)

### Community 50 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+19 more)

### Community 51 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+19 more)

### Community 52 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+19 more)

### Community 54 - "TCP_SERVICES"
Cohesion: 0.33
Nodes (6): TCP_SERVICES, AUTHORIZER_SERVICE, INVOICE_SERVICE, PDF_GENERATOR_SERVICE, PRODUCT_SERVICE, USER_ACCESS_SERVICE

### Community 55 - "AUTHORIZER"
Cohesion: 0.67
Nodes (3): AUTHORIZER, LOGIN, VERIFY_USER_TOKEN

### Community 56 - "PRODUCT"
Cohesion: 0.67
Nodes (3): PRODUCT, CREATE, GET_LIST

### Community 57 - "compilerOptions"
Cohesion: 0.22
Nodes (9): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+1 more)

### Community 58 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{js,jsx,ts,tsx}, *.{md,json,yml,yaml,html}

### Community 59 - "compilerOptions"
Cohesion: 0.07
Nodes (24): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+16 more)

### Community 65 - "Steps"
Cohesion: 0.14
Nodes (13): 1. Discover Available Generators, 2. Match Generator to User Request, 3. Get Generator Options, 4. Read Generator Source Code, 5. Examine Existing Patterns, 6. Dry-Run to Verify File Placement, 7. Run the Generator, 8. Modify Generated Code (If Needed) (+5 more)

### Community 66 - "invoice/tsconfig.json"
Cohesion: 0.07
Nodes (24): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+16 more)

### Community 67 - "invoice.repo.ts"
Cohesion: 0.13
Nodes (15): InvoiceRepo, INVOICE_STATUS, CREATED, PAID, SENT, newDocument(), touch(), Client (+7 more)

### Community 68 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+3 more)

### Community 69 - "bff/tsconfig.json"
Cohesion: 0.07
Nodes (24): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+16 more)

### Community 71 - "product/tsconfig.json"
Cohesion: 0.07
Nodes (24): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+16 more)

### Community 72 - "Development Guidelines"
Cohesion: 0.18
Nodes (9): 1. Terminal, 2. Code Quality, 3. Topic rules and skills, 4. Limitations, Core Features, Development Guidelines, graphify, Project Overview (+1 more)

### Community 73 - "compilerOptions"
Cohesion: 0.25
Nodes (8): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types

### Community 74 - "Refinement Principles"
Cohesion: 0.18
Nodes (10): 1. Preserve Functionality, 2. Apply Project Standards, 3. Enhance Clarity, 4. Maintain Balance, 5. Focus Scope, Code Simplifier, Limitations, Refinement Principles (+2 more)

### Community 75 - "keycloak"
Cohesion: 0.18
Nodes (11): KEYCLOAK_ADMIN, KEYCLOAK_ADMIN_PASSWORD, command, container_name, environment, image, networks, ports (+3 more)

### Community 76 - "pgadmin"
Cohesion: 0.18
Nodes (11): PGADMIN_DEFAULT_EMAIL, PGADMIN_DEFAULT_PASSWORD, container_name, depends_on, environment, image, networks, ports (+3 more)

### Community 78 - "mongodb"
Cohesion: 0.20
Nodes (10): MONGO_INITDB_ROOT_PASSWORD, MONGO_INITDB_ROOT_USERNAME, container_name, environment, image, networks, ports, restart (+2 more)

### Community 79 - "Link Workspace Packages"
Cohesion: 0.20
Nodes (9): bun, Detect Package Manager, Examples, Link Workspace Packages, Notes, npm, pnpm, Workflow (+1 more)

### Community 80 - ".oxlintrc.json"
Cohesion: 0.07
Nodes (21): extends, plugins, extends, plugins, extends, plugins, extends, plugins (+13 more)

### Community 81 - "invoice/src/configuration/env.config.ts"
Cohesion: 0.11
Nodes (13): AppModule, InvoiceModule, allConfigs, configSchema, Env, getEnv, validateEnv, logger (+5 more)

### Community 82 - "compilerOptions"
Cohesion: 0.25
Nodes (7): compilerOptions, module, moduleResolution, outDir, types, extends, include

### Community 86 - "bff/src/configuration/env.config.ts"
Cohesion: 0.11
Nodes (24): configSchema, Env, getEnv, optionalPositiveInt, validateEnv, REDIS_CONFIG, RedisConfig, redisEnvSchema (+16 more)

### Community 87 - "authorizer/tsconfig.json"
Cohesion: 0.20
Nodes (8): compilerOptions, esModuleInterop, extends, files, include, references, compileOnSave, exclude

### Community 88 - "user-access/src/app/app.module.ts"
Cohesion: 0.16
Nodes (8): AppModule, RoleModule, UserModule, allConfigs, configSchema, Env, getEnv, validateEnv

### Community 91 - "interfaces/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 92 - "TcpResponse"
Cohesion: 0.44
Nodes (3): InvoiceController, InvoiceResponseDto, TcpResponse

### Community 93 - "user-access/tsconfig.json"
Cohesion: 0.20
Nodes (8): extends, include, compilerOptions, esModuleInterop, extends, files, include, references

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

### Community 108 - "zod"
Cohesion: 0.12
Nodes (19): configSchema, Env, getEnv, validateEnv, AppModule, allConfigs, configSchema, Env (+11 more)

### Community 109 - "services"
Cohesion: 0.29
Nodes (6): driver, name, name, networks, einvoice-nw, services

### Community 110 - "postgres"
Cohesion: 0.18
Nodes (11): POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, container_name, environment, image, networks, ports (+3 more)

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

### Community 122 - "user.service.ts"
Cohesion: 0.18
Nodes (5): UserController, createUserRequestMapping(), UserService, CreateUserRequestDto, CreateKeycloakUserTcpReq

### Community 123 - "React Router 7 (Vite-Based)"
Cohesion: 0.40
Nodes (5): Build Output, Generated Types Directory, React Router 7 (Vite-Based), Targets, tsconfig Notes

### Community 124 - "pipes"
Cohesion: 0.40
Nodes (4): 5. Integrations & Business Rules, 6. Security, 7. Before Completing Tasks, pipes

### Community 125 - "General Guidelines for working with Nx"
Cohesion: 0.50
Nodes (3): General Guidelines for working with Nx, Scaffolding & Generators, When to use nx_docs

### Community 130 - "env"
Cohesion: 0.22
Nodes (11): TS_NODE_BASEURL, TS_NODE_PROJECT, options, executor, options, executor, options, command (+3 more)

### Community 131 - "Redundant npm Scripts After Import"
Cohesion: 0.50
Nodes (4): React Router 7 — Keep ALL scripts, Redundant npm Scripts After Import, Standalone Vite App (`create-vite`), TanStack Start

### Community 141 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, forceConsistentCasingInFileNames, importHelpers, module, noFallthroughCasesInSwitch, noImplicitOverride, noImplicitReturns, noPropertyAccessFromIndexSignature (+19 more)

### Community 145 - "guards/project.json"
Cohesion: 0.29
Nodes (6): name, projectType, $schema, sourceRoot, tags, // targets

### Community 146 - "USER"
Cohesion: 0.50
Nodes (4): USER, CREATE, GET_ALL, GET_BY_USER_ID

### Community 151 - "targets"
Cohesion: 0.18
Nodes (11): executor, passWithNoTests, dependsOn, executor, targets, lint, migration-generate, prune (+3 more)

### Community 152 - "Run Tests"
Cohesion: 0.50
Nodes (3): Rules, Run Tests, Workflow

### Community 158 - "@nestjs/config"
Cohesion: 0.27
Nodes (14): bootstrap(), bootstrap(), bootstrap(), bootstrap(), bootstrap(), APP_CONFIG, AppConfig, getGrpcOptions() (+6 more)

### Community 161 - "authorizer-response.interface.ts"
Cohesion: 0.15
Nodes (11): loginRequestSchema, LoginResponseDto, loginResponseSchema, authorizedMetadataSchema, AuthorizeResponseDto, authorizeResponseSchema, LoginTcpResponse, CreateRole (+3 more)

### Community 167 - "INVOICE"
Cohesion: 0.50
Nodes (4): INVOICE, CREATE, GET_LIST, UPDATE

### Community 168 - "redis"
Cohesion: 0.29
Nodes (7): container_name, image, networks, ports, restart, volumes, redis

### Community 169 - "redis-insight"
Cohesion: 0.29
Nodes (7): container_name, depends_on, image, networks, ports, volumes, redis-insight

### Community 170 - "app.config.ts"
Cohesion: 0.25
Nodes (11): allConfigs, allConfigs, AppEnv, createAppConfig(), createGrpcConfig(), GRPC_CONFIG, GRPC_PROTOS, createTcpConfig() (+3 more)

### Community 172 - ".create"
Cohesion: 0.28
Nodes (3): ProductController, CreateProductRequestDto, ProductTcpResponse

### Community 173 - "@nestjs/common"
Cohesion: 0.11
Nodes (14): AppModule, ProductModule, bootstrap(), AppModule, AuthorizerModule, InvoiceModule, ProductModule, UserModule (+6 more)

### Community 175 - "copy-workspace-modules"
Cohesion: 0.20
Nodes (10): cache, dependsOn, executor, options, outputs, buildTarget, runBuildTargetDependencies, options (+2 more)

### Community 180 - "user.guard.ts"
Cohesion: 0.11
Nodes (13): AUTH_TYPE_KEY, AuthType, AuthTypeType, Auth(), Public(), UserGuard, AuthorizerService, AuthorizeResponseWire (+5 more)

### Community 185 - "product/project.json"
Cohesion: 0.33
Nodes (5): name, projectType, $schema, sourceRoot, tags

### Community 196 - "prune-lockfile"
Cohesion: 0.33
Nodes (6): cache, dependsOn, executor, inputs, outputs, prune-lockfile

### Community 229 - "user.repo.ts"
Cohesion: 0.14
Nodes (7): UserRepo, UserTcpResponse, baseSchema, CreateUser, UpdateUser, User, mongodb

### Community 232 - "@nestjs/core"
Cohesion: 0.31
Nodes (3): Permissions, PermissionGuard, @nestjs/core

## Knowledge Gaps
- **78 isolated node(s):** `PROCESS_ID`, `START_TIME`, `USER_DATA`, `PRODUCT_ALREADY_EXISTS`, `USER_ALREADY_EXISTS` (+73 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1478 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **45 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@nestjs/common` connect `@nestjs/common` to `product/src/app/modules/product/product.module.ts`, `user.service.ts`, `seed.js`, `package.json`, `ProcessId`, `authorizer.service.ts`, `role.repo.ts`, `pdf-generator/src/app/app.module.ts`, `dependencies`, `authorizer/src/app/modules/authorizer/authorizer.module.ts`, `@nestjs/config`, `bff/src/app/modules/invoice/controllers/invoice.controller.ts`, `app.config.ts`, `invoice/src/app/modules/invoice/controllers/invoice.controller.ts`, `user.guard.ts`, `invoice.repo.ts`, `invoice/src/configuration/env.config.ts`, `bff/src/configuration/env.config.ts`, `user-access/src/app/app.module.ts`, `user.repo.ts`, `@nestjs/core`, `zod`, `user.service.ts`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **What connects `PROCESS_ID`, `START_TIME`, `USER_DATA` to the rest of the system?**
  _78 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.04994192799070848 - nodes in this community are weakly interconnected._
- **Why does `@nestjs/microservices` connect `@nestjs/config` to `user.service.ts`, `app.config.ts`, `@nestjs/common`, `package.json`, `authorizer.service.ts`, `user.guard.ts`, `dependencies`, `authorizer/src/app/modules/authorizer/authorizer.module.ts`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._
- **Why does `HTTP_MESSAGE` connect `HTTP_MESSAGE` to `bff/src/app/modules/invoice/controllers/invoice.controller.ts`, `user.service.ts`, `@nestjs/common`, `ProcessId`, `authorizer.service.ts`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._