# Graph Report - einvoice  (2026-11-17)

## Corpus Check
- 231 files · ~34,435 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: (none) 13, .graphify-bak 1, .log 1)

## Summary
- 2035 nodes · 2652 edges · 185 communities (131 shown, 54 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 29 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d7b06d75`
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
- @nestjs/common
- Common Issues
- TcpClient
- ci-poll-decide.mjs
- user.service.ts
- Next.js
- seed.js
- Monitor CI Command
- Monitor CI Command
- HTTP_MESSAGE
- nx.json
- invoice-request.dto.ts
- product/src/configuration/env.config.ts
- bff/src/app/modules/product/controllers/product.controller.ts
- PERMISSION
- mongo.config.ts
- invoice.repo.ts
- steps
- zod
- devDependencies
- Nx Workspace Exploration
- authorizer/src/main.ts
- invoice.service.ts
- UserRepo
- Status Handling by Code
- Jest
- dependencies
- Examples
- Examples
- product/src/app/modules/product/controllers/product.controller.ts
- user-access/src/app/app.module.ts
- compilerOptions
- package.json
- Nx NestJS API Template
- product.service.ts
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
- keycloak-http.service.ts
- compilerOptions
- compilerOptions
- product/src/main.ts
- compilerOptions
- Development Guidelines
- compilerOptions
- Refinement Principles
- keycloak
- pgadmin
- role.repo.ts
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
- BaseEntity
- @nx/js@23.3.0
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
- mongo.config.ts
- TanStack Start (Vite-Based)
- React-Specific
- nx-run-tasks/SKILL.md
- @nx/jest
- scripts
- AllExceptionFilter
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
- lint-staged
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
- bff/src/app/modules/invoice/controllers/invoice.controller.ts
- jest-environment-node@~30.5.2
- product/src/app/modules/product/product.module.ts
- jest-util@~30.5.1
- ProductService
- @nx/web@23.3.0
- @nx/eslint-plugin@23.3.0
- prettier@~3.9.10
- @nx/workspace@23.3.0
- ts-node@10.9.2
- @commitlint/config-conventional@^21.2.4
- @types/node@^26.6.5
- typescript@6.0.3
- @nestjs/testing@^12.2.0
- webpack-dev-server@^6.1.0
- verify-typecheck.md
- nx@23.3.0
- @nx/oxlint@23.3.0
- oxlint@^1.89.0
- @swc/helpers@~0.5.23
- tslib@^2.8.1
- @types/express@^5.0.6
- unrun@^0.3.1

## God Nodes (most connected - your core abstractions)
1. `@nestjs/common` - 47 edges
2. `zod` - 25 edges
3. `@nestjs/config` - 23 edges
4. `PERMISSION` - 23 edges
5. `HTTP_MESSAGE` - 20 edges
6. `compilerOptions` - 20 edges
7. `TCP_SERVICES` - 18 edges
8. `Common Issues` - 18 edges
9. `@nestjs/microservices` - 16 edges
10. `nestjs-zod` - 16 edges

## Surprising Connections (you probably didn't know these)
- `InvoiceRepo` --references--> `Invoice`  [EXTRACTED]
  apps/api/src/app/modules/invoice/repos/invoice.repo.ts → libs/schemas/src/lib/invoice.schema.ts
- `UserRepo` --references--> `User`  [EXTRACTED]
  apps/user-access/src/app/modules/user/repos/user.repo.ts → libs/schemas/src/lib/user.schema.ts
- `RoleRepo` --references--> `Role`  [EXTRACTED]
  apps/user-access/src/app/modules/role/repos/role.repo.ts → libs/schemas/src/lib/role.schema.ts
- `Product` --inherits--> `BaseEntity`  [EXTRACTED]
  libs/entities/src/lib/product.entity.ts → libs/entities/src/lib/base.entity.ts
- `ProcessId` --calls--> `getProcessId()`  [EXTRACTED]
  libs/decorators/src/lib/processId.decorator.ts → libs/utils/src/lib/string.util.ts

## Import Cycles
- None detected.

## Communities (185 total, 54 thin omitted)

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

### Community 6 - "compilerOptions"
Cohesion: 0.06
Nodes (33): compileOnSave, compilerOptions, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, ignoreDeprecations, importHelpers (+25 more)

### Community 7 - "@nestjs/common"
Cohesion: 0.17
Nodes (12): allConfigs, MetadataKeys, PROCESS_ID, START_TIME, ExceptionInterceptor, ResponseDto, ResponseSchema, LoggerMiddleware (+4 more)

### Community 8 - "Common Issues"
Cohesion: 0.07
Nodes (29): Application vs Library Detection, Common Issues, Dependency Version Conflicts, Directory Conventions, ESLint Config Handling, ESLint Version Pinning (Critical), Explicit Executor Path Fixups, Frontend tsconfig Base Settings (Critical) (+21 more)

### Community 9 - "TcpClient"
Cohesion: 0.11
Nodes (3): InvoiceController, ProductController, ProcessId

### Community 10 - "ci-poll-decide.mjs"
Cohesion: 0.10
Nodes (25): args, backoff(), buildOutput(), categorizeTasks(), classify(), envRerunCount, expectedSha, formatMessage() (+17 more)

### Community 11 - "user.service.ts"
Cohesion: 0.11
Nodes (13): UserController, createUserRequestMapping(), UserService, KEYCLOAK, CREATE_USER, PRODUCT, CREATE, GET_LIST (+5 more)

### Community 12 - "Next.js"
Cohesion: 0.07
Nodes (26): ESLint: Self-Contained `eslint-config-next`, Fix Order — Non-Nx Source (create-next-app), Fix Order — Nx Source (Subdirectory Import), Iteration Log, Mixed Next.js + Vite Coexistence, `next.config.js` Lint Warning, `next-env.d.ts`, Next.js (+18 more)

### Community 13 - "seed.js"
Cohesion: 0.10
Nodes (18): { join }, { NxAppWebpackPlugin }, { join }, { NxAppWebpackPlugin }, { join }, { NxAppWebpackPlugin }, { join }, { NxAppWebpackPlugin } (+10 more)

### Community 14 - "Monitor CI Command"
Cohesion: 0.08
Nodes (25): 2a. Spawn subagent (FETCH_STATUS), 2b. Run decision script, 2c. Process script output, Anti-Patterns, Architecture Overview, Configuration Defaults, Context, Default Behaviors by Status (+17 more)

### Community 15 - "Monitor CI Command"
Cohesion: 0.08
Nodes (25): 2a. Spawn subagent (FETCH_STATUS), 2b. Run decision script, 2c. Process script output, Anti-Patterns, Architecture Overview, Configuration Defaults, Context, Default Behaviors by Status (+17 more)

### Community 16 - "HTTP_MESSAGE"
Cohesion: 0.14
Nodes (14): HTTP_MESSAGE, BAD_REQUEST, CREATED, DELETED, FAILED, FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND (+6 more)

### Community 17 - "nx.json"
Cohesion: 0.09
Nodes (24): analytics, cache, executor, inputs, options, namedInputs, default, production (+16 more)

### Community 18 - "invoice-request.dto.ts"
Cohesion: 0.18
Nodes (10): ClientRequest, ClientRequestDto, clientRequestSchema, CreateInvoiceRequest, createInvoiceRequestSchema, ItemRequest, ItemRequestDto, itemRequestSchema (+2 more)

### Community 19 - "product/src/configuration/env.config.ts"
Cohesion: 0.14
Nodes (15): KeycloakModule, allConfigs, configSchema, Env, validateEnv, configSchema, Env, getEnv (+7 more)

### Community 20 - "bff/src/app/modules/product/controllers/product.controller.ts"
Cohesion: 0.09
Nodes (14): UserController, CreateProductRequest, CreateProductRequestDto, createProductRequestSchema, CreateUserRequest, CreateUserRequestDto, createUserRequestSchema, RequestSchema (+6 more)

### Community 21 - "PERMISSION"
Cohesion: 0.09
Nodes (22): PERMISSION, INVOICE_CREATE, INVOICE_DELETE, INVOICE_GET_ALL, INVOICE_GET_BY_ID, INVOICE_SEND, INVOICE_UPDATE, PRODUCT_CREATE (+14 more)

### Community 22 - "mongo.config.ts"
Cohesion: 0.16
Nodes (10): AppModule, InvoiceModule, APP_CONFIG, AppConfig, allConfigs, configSchema, Env, getEnv (+2 more)

### Community 23 - "invoice.repo.ts"
Cohesion: 0.11
Nodes (19): InvoiceRepo, INVOICE_STATUS, CREATED, PAID, SENT, baseSchema, newDocument(), touch() (+11 more)

### Community 24 - "steps"
Cohesion: 0.10
Nodes (20): jobs, main, runs-on, steps, name, on, pull_request, push (+12 more)

### Community 25 - "zod"
Cohesion: 0.12
Nodes (15): baseEntityResponseSchema, clientResponseSchema, InvoiceResponse, InvoiceResponseDto, invoiceResponseSchema, itemResponseSchema, ProductResponse, ProductResponseDto (+7 more)

### Community 26 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, lint-staged@^17.6.0, @nestjs/config@^12.0.1, @nestjs/swagger@^12.0.2, @nx/nest@23.3.0, @nx/node@23.3.0, ts-jest@^29.4.15, webpack@^5.112.0 (+7 more)

### Community 27 - "Nx Workspace Exploration"
Cohesion: 0.10
Nodes (18): Affected Projects, Affected Projects, "Cannot find configuration for task X:target", Common Exploration Patterns, "How do I build/test/lint project X?", Listing Projects, Listing Projects, Nx Workspace Exploration (+10 more)

### Community 28 - "authorizer/src/main.ts"
Cohesion: 0.20
Nodes (8): AppModule, APP_CONFIG, AppConfig, getEnv, @nestjs/core@^12.2.0, reflect-metadata@^0.2.2, @nestjs/core, reflect-metadata

### Community 29 - "invoice.service.ts"
Cohesion: 0.19
Nodes (7): invoiceRequestMapping(), InvoiceService, CreateInvoiceRequestDto, UpdateInvoiceRequestDto, CreateInvoiceTcpRequest, UpdateInvoiceTcpRequest, toResponse()

### Community 30 - "UserRepo"
Cohesion: 0.12
Nodes (12): UserRepo, COLLECTIONS, INVOICE, ROLE, USER, UserTcpResponse, CreateUser, UpdateUser (+4 more)

### Community 31 - "Status Handling by Code"
Cohesion: 0.11
Nodes (18): Apply Locally + Enhance Flow, Apply via MCP, cipe_no_tasks, Commit Message Format, Detailed Status Handling & Fix Flows, environment_issue, Environment vs Code Failure Recognition, Fix Action Flows (+10 more)

### Community 32 - "Jest"
Cohesion: 0.11
Nodes (18): CI Atomization, Common Post-Import Issues, Core (always needed), Environment-specific, Fix Order, How `@nx/jest` Works, Jest, Jest Preset (+10 more)

### Community 33 - "dependencies"
Cohesion: 0.15
Nodes (13): dependencies, express@^5.3.0, @nestjs/common@^12.2.0, @nestjs/microservices@^12.2.0, @nestjs/platform-express@^12.2.0, nestjs-zod@^5.5.0, pg@^8.23.1, rxjs@^7.8.2 (+5 more)

### Community 34 - "Examples"
Cohesion: 0.11
Nodes (17): 1. Preserve Functionality, 2. Apply Project Standards, 3. Enhance Clarity, 4. Maintain Balance, 5. Focus Scope, After: Clear Steps, After: Clear Switch Statement, After: Direct Check (+9 more)

### Community 35 - "Examples"
Cohesion: 0.11
Nodes (17): 1. Preserve Functionality, 2. Apply Project Standards, 3. Enhance Clarity, 4. Maintain Balance, 5. Focus Scope, After: Clear Steps, After: Clear Switch Statement, After: Direct Check (+9 more)

### Community 36 - "product/src/app/modules/product/controllers/product.controller.ts"
Cohesion: 0.15
Nodes (6): InvoiceController, KeycloakController, RequestParams, ResponseSchema, TCPResponseDto, ProductTcpResponse

### Community 37 - "user-access/src/app/app.module.ts"
Cohesion: 0.15
Nodes (10): AppModule, RoleModule, UserModule, APP_CONFIG, AppConfig, allConfigs, configSchema, Env (+2 more)

### Community 38 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+8 more)

### Community 39 - "package.json"
Cohesion: 0.15
Nodes (12): @commitlint/cli@^21.2.4, husky@^9.1.7, @nestjs/schematics@^12.0.10, @types/jest@~30.0.0, license, name, private, version (+4 more)

### Community 40 - "Nx NestJS API Template"
Cohesion: 0.12
Nodes (16): Affected Commands, Build for production, Code Generation, 💬 Community, Dev server (hot reload), Install Nx Console, 🔗 Learn More, Lint (+8 more)

### Community 41 - "product.service.ts"
Cohesion: 0.50
Nodes (3): ERROR_CODE, PRODUCT_ALREADY_EXISTS, USER_ALREADY_EXISTS

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
Cohesion: 0.20
Nodes (10): InvoiceModule, ProductModule, UserModule, TcpProvider(), TCP_SERVICES, AUTHORIZER_SERVICE, INVOICE_SERVICE, PRODUCT_SERVICE (+2 more)

### Community 65 - "Steps"
Cohesion: 0.14
Nodes (13): 1. Discover Available Generators, 2. Match Generator to User Request, 3. Get Generator Options, 4. Read Generator Source Code, 5. Examine Existing Patterns, 6. Dry-Run to Verify File Placement, 7. Run the Generator, 8. Modify Generated Code (If Needed) (+5 more)

### Community 66 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 67 - "keycloak-http.service.ts"
Cohesion: 0.20
Nodes (7): KeycloakHttpService, KEYCLOAK_CONFIG, KeycloakConfig, CreateKeyCloakUserRequest, ExchangeClientTokenResponse, axios@^1.20.0, axios

### Community 68 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 69 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 70 - "product/src/main.ts"
Cohesion: 0.16
Nodes (10): AppModule, ProductModule, APP_CONFIG, AppConfig, allConfigs, configSchema, Env, getEnv (+2 more)

### Community 71 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 72 - "Development Guidelines"
Cohesion: 0.15
Nodes (11): 1. Terminal, 2. Code Quality, 3. NestJS & Validation, 4. Database, 5. Testing, 6. Refactoring, Core Features, Development Guidelines (+3 more)

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

### Community 77 - "role.repo.ts"
Cohesion: 0.18
Nodes (6): RoleRepo, RoleService, ROLE, ACCOUNTANT, ADMINISTRATOR, Role

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
Cohesion: 0.35
Nodes (6): AppModule, setupSwagger(), APP_CONFIG, AppConfig, bootstrap(), @nestjs/config

### Community 89 - "bff/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 90 - "product/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 91 - "BaseEntity"
Cohesion: 0.16
Nodes (5): BaseEntity, typeorm@^1.1.2, uuid@^14.0.3, typeorm, uuid

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

### Community 116 - "mongo.config.ts"
Cohesion: 0.20
Nodes (5): logger, MONGO_CLIENT, MONGO_DB, MongoEnv, MongoModule

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

### Community 133 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{js,jsx,ts,tsx}, *.{md,json,yml,yaml,html}

### Community 147 - "product/src/app/modules/product/product.module.ts"
Cohesion: 0.36
Nodes (4): TypeOrmEnv, TypeOrmProvider, @nestjs/typeorm@^12.0.2, @nestjs/typeorm

## Knowledge Gaps
- **99 isolated node(s):** `INVOICE_SERVICE`, `PRODUCT_SERVICE`, `USER_ACCESS_SERVICE`, `AUTHORIZER_SERVICE`, `CREATE` (+94 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1301 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **54 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@nestjs/common` connect `@nestjs/common` to `user.service.ts`, `bff/src/app/modules/invoice/controllers/invoice.controller.ts`, `product/src/configuration/env.config.ts`, `bff/src/app/modules/product/controllers/product.controller.ts`, `product/src/app/modules/product/product.module.ts`, `mongo.config.ts`, `invoice.repo.ts`, `zod`, `authorizer/src/main.ts`, `invoice.service.ts`, `UserRepo`, `dependencies`, `product/src/app/modules/product/controllers/product.controller.ts`, `user-access/src/app/app.module.ts`, `package.json`, `product.service.ts`, `TCP_SERVICES`, `keycloak-http.service.ts`, `product/src/main.ts`, `role.repo.ts`, `@nestjs/config`, `mongo.config.ts`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **What connects `INVOICE_SERVICE`, `PRODUCT_SERVICE`, `USER_ACCESS_SERVICE` to the rest of the system?**
  _99 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.04994192799070848 - nodes in this community are weakly interconnected._
- **Why does `zod` connect `zod` to `dependencies`, `product/src/app/modules/product/controllers/product.controller.ts`, `user-access/src/app/app.module.ts`, `product/src/main.ts`, `@nestjs/common`, `package.json`, `invoice-request.dto.ts`, `product/src/configuration/env.config.ts`, `mongo.config.ts`, `product/src/app/modules/product/product.module.ts`, `mongo.config.ts`, `bff/src/app/modules/product/controllers/product.controller.ts`, `invoice.repo.ts`, `UserRepo`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `devDependencies` to `seed.js`, `jest-environment-node@~30.5.2`, `jest-util@~30.5.1`, `@nx/web@23.3.0`, `@nx/eslint-plugin@23.3.0`, `prettier@~3.9.10`, `@nx/workspace@23.3.0`, `ts-node@10.9.2`, `@commitlint/config-conventional@^21.2.4`, `@types/node@^26.6.5`, `typescript@6.0.3`, `@nestjs/testing@^12.2.0`, `webpack-dev-server@^6.1.0`, `package.json`, `nx@23.3.0`, `@nx/oxlint@23.3.0`, `oxlint@^1.89.0`, `@swc/helpers@~0.5.23`, `tslib@^2.8.1`, `@types/express@^5.0.6`, `unrun@^0.3.1`, `@nx/js@23.3.0`, `@nx/jest`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._