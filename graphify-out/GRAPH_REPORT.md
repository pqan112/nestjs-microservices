# Graph Report - einvoice  (2026-11-22)

## Corpus Check
- 268 files · ~37,600 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 16 file(s) not represented in the graph (top: (none) 14, .graphify-bak 1, .log 1)

## Summary
- 2320 nodes · 3118 edges · 229 communities (144 shown, 85 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `41d1f750`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- targets
- targets
- targets
- targets
- prune-lockfile
- product/src/app/modules/product/product.module.ts
- compilerOptions
- api/src/app/modules/invoice/controllers/invoice.controller.ts
- Common Issues
- ProductController
- ci-poll-decide.mjs
- sendTcpRequest
- Next.js
- seed.js
- Monitor CI Command
- Monitor CI Command
- targets
- nx.json
- authorizer.decorator.ts
- zod
- TcpClient
- role.repo.ts
- mongo.config.ts
- invoice.repo.ts
- steps
- dependencies
- package.json
- Nx Workspace Exploration
- compilerOptions
- AppModule
- ProductController
- Status Handling by Code
- Jest
- Refactor
- Examples
- Examples
- PERMISSION
- user-access/src/app/app.module.ts
- compilerOptions
- devDependencies
- Nx NestJS API Template
- compilerOptions
- migrate-oxlint/SKILL.md
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- invoice.dto.ts
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
- InvoiceService
- Steps
- compilerOptions
- compilerOptions
- compilerOptions
- product/src/main.ts
- compilerOptions
- Development Guidelines
- compilerOptions
- Refinement Principles
- keycloak
- pgadmin
- compilerOptions
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
- @nestjs/config
- bff/tsconfig.json
- product/tsconfig.json
- interfaces/project.json
- user-access/tsconfig.json
- Commands
- ci-state-update.mjs
- TURBOREPO.md
- Fix Orders
- configuration/project.json
- constants/project.json
- filters/project.json
- interceptors/project.json
- zod
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
- HTTP_MESSAGE
- GRADLE.md
- nx-plugins/SKILL.md
- configuration/README.md
- decorators/README.md
- entities/README.md
- filters/README.md
- interceptors/README.md
- authorizer-response.interface.ts
- middlewares/README.md
- schemas/README.md
- utils/README.md
- guards/project.json
- @commitlint/config-conventional@^21.2.4
- compilerOptions
- bff-mobile/.oxlintrc.json
- nestjs-validation.md
- database.md
- USER
- Run Tests
- interfaces/README.md
- MetadataKeys
- jest-environment-node@~30.5.2
- guards
- AllExceptionFilter
- ERROR_CODE
- verify-typecheck.md
- AuthorizerService
- authorizer.dto.ts
- @nx/oxlint@23.3.0
- prettier@~3.9.10
- tslib@^2.8.1
- bff/src/main.ts
- @nestjs/testing@^12.2.0
- nx@23.3.0
- ts-node@10.9.2
- webpack-cli@^7.2.3
- @nx/web@23.3.0
- @swc/helpers@~0.5.23
- authorizer/src/app/app.module.ts
- @nestjs/common
- mongo.config.ts
- @types/jest@~30.0.0
- @types/jsonwebtoken@^9.0.10
- typescript@6.0.3
- unrun@^0.3.1
- user.repo.ts
- webpack@^5.112.0
- PRODUCT

## God Nodes (most connected - your core abstractions)
1. `@nestjs/common` - 62 edges
2. `@nestjs/config` - 28 edges
3. `TCP_SERVICES` - 27 edges
4. `PERMISSION` - 27 edges
5. `zod` - 25 edges
6. `@nestjs/microservices` - 22 edges
7. `HTTP_MESSAGE` - 20 edges
8. `compilerOptions` - 20 edges
9. `ERROR_CODE` - 19 edges
10. `ProcessId` - 19 edges

## Surprising Connections (you probably didn't know these)
- `RoleRepo` --references--> `Role`  [EXTRACTED]
  apps/user-access/src/app/modules/role/repos/role.repo.ts → libs/schemas/src/lib/role.schema.ts
- `UserRepo` --references--> `User`  [EXTRACTED]
  apps/user-access/src/app/modules/user/repos/user.repo.ts → libs/schemas/src/lib/user.schema.ts
- `InvoiceRepo` --references--> `Invoice`  [EXTRACTED]
  apps/api/src/app/modules/invoice/repos/invoice.repo.ts → libs/schemas/src/lib/invoice.schema.ts
- `extends` --extends--> `../../.oxlintrc.json`  [EXTRACTED]
  apps/bff-mobile/.oxlintrc.json → libs/guards/.oxlintrc.json
- `ProcessId` --calls--> `getProcessId()`  [EXTRACTED]
  libs/decorators/src/lib/process-id.decorator.ts → libs/utils/src/lib/string.util.ts

## Import Cycles
- None detected.

## Communities (229 total, 85 thin omitted)

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

### Community 5 - "product/src/app/modules/product/product.module.ts"
Cohesion: 0.07
Nodes (9): ProductController, ProductModule, ProductRepo, ProductService, BaseEntity, Product, ProductTcpResponse, @nestjs/typeorm (+1 more)

### Community 6 - "compilerOptions"
Cohesion: 0.06
Nodes (34): compileOnSave, compilerOptions, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, ignoreDeprecations, importHelpers (+26 more)

### Community 7 - "api/src/app/modules/invoice/controllers/invoice.controller.ts"
Cohesion: 0.10
Nodes (6): KeycloakController, KeycloakModule, KeycloakHttpService, RequestParams, PermissionGuard, TcpLoggingInterceptor

### Community 8 - "Common Issues"
Cohesion: 0.07
Nodes (29): Application vs Library Detection, Common Issues, Dependency Version Conflicts, Directory Conventions, ESLint Config Handling, ESLint Version Pinning (Critical), Explicit Executor Path Fixups, Frontend tsconfig Base Settings (Critical) (+21 more)

### Community 10 - "ci-poll-decide.mjs"
Cohesion: 0.10
Nodes (25): args, backoff(), buildOutput(), categorizeTasks(), classify(), envRerunCount, expectedSha, formatMessage() (+17 more)

### Community 11 - "sendTcpRequest"
Cohesion: 0.23
Nodes (3): InvoiceController, UserController, sendTcpRequest()

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

### Community 18 - "authorizer.decorator.ts"
Cohesion: 0.15
Nodes (6): AuthorizerController, AUTH_TYPE_KEY, AuthType, AuthTypeType, Auth(), Public()

### Community 19 - "zod"
Cohesion: 0.12
Nodes (19): configSchema, Env, getEnv, validateEnv, configSchema, Env, getEnv, validateEnv (+11 more)

### Community 21 - "role.repo.ts"
Cohesion: 0.18
Nodes (7): RoleRepo, RoleService, ROLE, ACCOUNTANT, ADMINISTRATOR, toResponse(), Role

### Community 22 - "mongo.config.ts"
Cohesion: 0.16
Nodes (10): AppModule, InvoiceModule, APP_CONFIG, AppConfig, allConfigs, configSchema, Env, getEnv (+2 more)

### Community 23 - "invoice.repo.ts"
Cohesion: 0.10
Nodes (18): InvoiceRepo, INVOICE_STATUS, CREATED, PAID, SENT, COLLECTIONS, INVOICE, ROLE (+10 more)

### Community 24 - "steps"
Cohesion: 0.10
Nodes (20): jobs, main, runs-on, steps, name, on, pull_request, push (+12 more)

### Community 25 - "dependencies"
Cohesion: 0.08
Nodes (25): dependencies, axios@^1.20.0, express@^5.3.0, jsonwebtoken@^9.0.3, jwks-rsa@^4.1.0, mongodb@^7.7.0, @nestjs/common@^12.2.0, @nestjs/core@^12.2.0 (+17 more)

### Community 26 - "package.json"
Cohesion: 0.11
Nodes (17): @nx/nest@23.3.0, @nx/node@23.3.0, @nx/workspace@23.3.0, oxlint@^1.89.0, @types/node@^26.6.5, license, lint-staged, *.{js,jsx,ts,tsx} (+9 more)

### Community 27 - "Nx Workspace Exploration"
Cohesion: 0.10
Nodes (18): Affected Projects, Affected Projects, "Cannot find configuration for task X:target", Common Exploration Patterns, "How do I build/test/lint project X?", Listing Projects, Listing Projects, Nx Workspace Exploration (+10 more)

### Community 28 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+8 more)

### Community 29 - "AppModule"
Cohesion: 0.33
Nodes (3): AuthorizerModule, AppModule, AppModule

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

### Community 37 - "user-access/src/app/app.module.ts"
Cohesion: 0.15
Nodes (10): AppModule, RoleModule, UserModule, APP_CONFIG, AppConfig, allConfigs, configSchema, Env (+2 more)

### Community 38 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+8 more)

### Community 39 - "devDependencies"
Cohesion: 0.09
Nodes (23): devDependencies, @commitlint/cli@^21.2.4, husky@^9.1.7, jest-util@~30.5.1, lint-staged@^17.6.0, @nestjs/config@^12.0.1, @nestjs/schematics@^12.0.10, @nestjs/swagger@^12.0.2 (+15 more)

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

### Community 48 - "invoice.dto.ts"
Cohesion: 0.11
Nodes (13): ClientRequestDto, clientRequestSchema, clientResponseSchema, CreateInvoiceRequestDto, createInvoiceRequestSchema, InvoiceResponseDto, invoiceResponseSchema, ItemRequestDto (+5 more)

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
Cohesion: 0.12
Nodes (15): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+7 more)

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

### Community 64 - "InvoiceService"
Cohesion: 0.22
Nodes (3): InvoiceController, invoiceRequestMapping(), InvoiceService

### Community 65 - "Steps"
Cohesion: 0.14
Nodes (13): 1. Discover Available Generators, 2. Match Generator to User Request, 3. Get Generator Options, 4. Read Generator Source Code, 5. Examine Existing Patterns, 6. Dry-Run to Verify File Placement, 7. Run the Generator, 8. Modify Generated Code (If Needed) (+5 more)

### Community 66 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 68 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 69 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 70 - "product/src/main.ts"
Cohesion: 0.24
Nodes (6): AppModule, APP_CONFIG, AppConfig, allConfigs, getEnv, validateEnv

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

### Community 77 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, module, moduleResolution, outDir, types, extends, include, ./tsconfig.json

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

### Community 88 - "@nestjs/config"
Cohesion: 0.31
Nodes (7): setupSwagger(), APP_CONFIG, AppConfig, allConfigs, bootstrap(), reflect-metadata@^0.2.2, reflect-metadata

### Community 89 - "bff/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 90 - "product/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 91 - "interfaces/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

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

### Community 102 - "zod"
Cohesion: 0.15
Nodes (11): baseEntityResponseSchema, CreateProductRequestDto, createProductRequestSchema, MobileProductResponseDto, mobileProductResponseSchema, ProductResponseDto, productResponseSchema, CreateUserRequestDto (+3 more)

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
Cohesion: 0.17
Nodes (15): ProductModule, AuthorizerModule, InvoiceModule, ProductModule, UserModule, TcpProvider(), TCP_SERVICES, AUTHORIZER_SERVICE (+7 more)

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

### Community 133 - "HTTP_MESSAGE"
Cohesion: 0.14
Nodes (14): HTTP_MESSAGE, BAD_REQUEST, CREATED, DELETED, FAILED, FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND (+6 more)

### Community 141 - "authorizer-response.interface.ts"
Cohesion: 0.20
Nodes (9): AuthorizedMetadataDto, authorizedMetadataSchema, AuthorizeResponseDto, authorizeResponseSchema, LoginTcpResponse, CreateRole, roleSchema, UpdateRole (+1 more)

### Community 145 - "guards/project.json"
Cohesion: 0.29
Nodes (6): name, projectType, $schema, sourceRoot, tags, // targets

### Community 147 - "compilerOptions"
Cohesion: 0.06
Nodes (33): compilerOptions, esModuleInterop, extends, files, include, references, compilerOptions, forceConsistentCasingInFileNames (+25 more)

### Community 148 - "bff-mobile/.oxlintrc.json"
Cohesion: 0.29
Nodes (5): extends, plugins, extends, plugins, ../../.oxlintrc.json

### Community 151 - "USER"
Cohesion: 0.50
Nodes (4): USER, CREATE, GET_ALL, GET_BY_USER_ID

### Community 152 - "Run Tests"
Cohesion: 0.50
Nodes (3): Rules, Run Tests, Workflow

### Community 154 - "MetadataKeys"
Cohesion: 0.15
Nodes (14): MetadataKeys, PROCESS_ID, START_TIME, USER_DATA, Permissions, LoggerMiddleware, stringifyForLog(), getAccessToken() (+6 more)

### Community 159 - "ERROR_CODE"
Cohesion: 0.09
Nodes (18): getEnv, KEYCLOAK_CONFIG, KeycloakConfig, ERROR_CODE, AUTH_INVALID_CREDENTIALS, AUTH_INVALID_TOKEN, AUTH_INVALID_TOKEN_STRUCTURE, AUTH_PERMISSION_DENIED (+10 more)

### Community 167 - "AuthorizerService"
Cohesion: 0.12
Nodes (6): AuthorizerController, AuthorizerService, UserController, UserService, TCPRequestDto, TCPResponseDto

### Community 168 - "authorizer.dto.ts"
Cohesion: 0.40
Nodes (4): LoginRequestDto, loginRequestSchema, LoginResponseDto, loginResponseSchema

### Community 174 - "bff/src/main.ts"
Cohesion: 0.40
Nodes (6): setupSwagger(), APP_CONFIG, AppConfig, allConfigs, bootstrap(), @nestjs/config

### Community 206 - "authorizer/src/app/app.module.ts"
Cohesion: 0.20
Nodes (7): AppModule, APP_CONFIG, AppConfig, allConfigs, configSchema, Env, validateEnv

### Community 209 - "@nestjs/common"
Cohesion: 0.10
Nodes (15): AUTHORIZER, LOGIN, VERIFY_USER_TOKEN, KEYCLOAK, CREATE_USER, TCP_REQUEST_MESSAGE, ProcessId, UserData (+7 more)

### Community 210 - "mongo.config.ts"
Cohesion: 0.20
Nodes (5): logger, MONGO_CLIENT, MONGO_DB, MongoEnv, MongoModule

### Community 224 - "user.repo.ts"
Cohesion: 0.18
Nodes (10): createUserRequestMapping(), UserRepo, UserTcpResponse, baseSchema, newDocument(), CreateUser, UpdateUser, User (+2 more)

### Community 227 - "PRODUCT"
Cohesion: 0.67
Nodes (3): PRODUCT, CREATE, GET_LIST

## Knowledge Gaps
- **115 isolated node(s):** `CREATE`, `GET_LIST`, `UPDATE`, `./tsconfig.json`, `AUTHORIZER_SERVICE` (+110 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1470 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **85 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@nestjs/common` connect `@nestjs/common` to `product/src/app/modules/product/product.module.ts`, `api/src/app/modules/invoice/controllers/invoice.controller.ts`, `authorizer.decorator.ts`, `role.repo.ts`, `mongo.config.ts`, `invoice.repo.ts`, `dependencies`, `package.json`, `MetadataKeys`, `ERROR_CODE`, `user-access/src/app/app.module.ts`, `bff/src/main.ts`, `invoice.dto.ts`, `product/src/main.ts`, `authorizer/src/app/app.module.ts`, `@nestjs/common`, `mongo.config.ts`, `@nestjs/config`, `user.repo.ts`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **What connects `CREATE`, `GET_LIST`, `UPDATE` to the rest of the system?**
  _115 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.04994192799070848 - nodes in this community are weakly interconnected._
- **Why does `zod` connect `user.repo.ts` to `package.json`, `user-access/src/app/app.module.ts`, `zod`, `authorizer.dto.ts`, `authorizer-response.interface.ts`, `authorizer/src/app/app.module.ts`, `invoice.dto.ts`, `@nestjs/common`, `mongo.config.ts`, `zod`, `mongo.config.ts`, `invoice.repo.ts`, `dependencies`, `@nestjs/common`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._
- **Why does `@nestjs/config` connect `bff/src/main.ts` to `package.json`, `user-access/src/app/app.module.ts`, `product/src/main.ts`, `devDependencies`, `authorizer/src/app/app.module.ts`, `@nestjs/common`, `mongo.config.ts`, `zod`, `mongo.config.ts`, `@nestjs/config`, `@nestjs/common`, `ERROR_CODE`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._