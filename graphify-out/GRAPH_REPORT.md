# Graph Report - einvoice  (2026-11-25)

## Corpus Check
- 278 files · ~39,981 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: (none) 15, .proto 2, .graphify-bak 1)

## Summary
- 2423 nodes · 3439 edges · 248 communities (153 shown, 95 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 33 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f0a6aaa6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- targets
- targets
- targets
- serve
- prune-lockfile
- Product
- compilerOptions
- package.json
- Common Issues
- HTTP_MESSAGE
- ci-poll-decide.mjs
- sendTcpRequest
- Next.js
- seed.js
- Monitor CI Command
- Monitor CI Command
- targets
- nx.json
- devDependencies
- user.repo.ts
- ProductController
- role.repo.ts
- invoice.dto.ts
- mongo.config.ts
- steps
- dependencies
- authorizer.dto.ts
- Nx Workspace Exploration
- compilerOptions
- bff/src/configuration/env.config.ts
- product/src/configuration/env.config.ts
- Status Handling by Code
- Jest
- Refactor
- Examples
- Examples
- PERMISSION
- CreateProductTable1795442104441
- compilerOptions
- bff/src/app/modules/invoice/controllers/invoice.controller.ts
- Nx NestJS API Template
- compilerOptions
- migrate-oxlint/SKILL.md
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- bff-mobile/src/app/app.module.ts
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
- ThrottleGroup
- Steps
- compilerOptions
- invoice/src/app/modules/invoice/controllers/invoice.controller.ts
- compilerOptions
- compilerOptions
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
- all-exceptions.filter.ts
- compilerOptions
- compilerOptions
- compilerOptions
- compilerOptions
- lib/throttler.config.ts
- authorizer/tsconfig.json
- UserService
- bff/tsconfig.json
- product/tsconfig.json
- interfaces/project.json
- MetadataKeys
- user-access/tsconfig.json
- Commands
- ci-state-update.mjs
- TURBOREPO.md
- Fix Orders
- configuration/project.json
- constants/project.json
- filters/project.json
- interceptors/project.json
- @nestjs/common
- middlewares/project.json
- pipes/project.json
- schemas/project.json
- utils/project.json
- allowBuilds
- base.config.ts
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
- invoice.service.ts
- React Router 7 (Vite-Based)
- pipes
- General Guidelines for working with Nx
- compilerOptions
- authorizer/.oxlintrc.json
- bff/.oxlintrc.json
- product/.oxlintrc.json
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
- KeycloakHttpService
- middlewares/README.md
- schemas/README.md
- utils/README.md
- guards/project.json
- USER
- compilerOptions
- bff-mobile/.oxlintrc.json
- nestjs-validation.md
- database.md
- targets
- Run Tests
- interfaces/README.md
- user.guard.ts
- user.service.ts
- guards
- @nestjs/config
- product/src/app/modules/product/product.module.ts
- verify-typecheck.md
- ERROR_CODE
- INVOICE
- redis
- redis-insight
- keycloak.interface.ts
- authorizer-response.interface.ts
- authorizer/src/app/modules/authorizer/authorizer.module.ts
- authorizer.service.ts
- copy-workspace-modules
- PRODUCT
- user-grpc.controller.ts
- invoice/src/configuration/env.config.ts
- ProductService
- product.entity.ts
- authorizer-grpc.controller.ts
- product/project.json
- AuthorizerService
- UserGuard
- prune-lockfile
- ProductController
- BaseEntity
- AllExceptionFilter
- AppModule
- AppModule
- AUTHORIZER
- @commitlint/cli@^21.2.4
- @commitlint/config-conventional@^21.2.4
- husky@^9.1.7
- jest-environment-node@~30.5.2
- jest-util@~30.5.1
- lint-staged@^17.6.0
- @nx/nest@23.3.0
- @nx/web@23.3.0
- oxlint@^1.89.0
- @swc/helpers@~0.5.23
- ts-jest@^29.4.15
- tslib@^2.8.1
- @types/jsonwebtoken@^9.0.10
- unrun@^0.3.1
- webpack@^5.112.0
- webpack-dev-server@^6.1.0

## God Nodes (most connected - your core abstractions)
1. `@nestjs/common` - 65 edges
2. `TCP_SERVICES` - 29 edges
3. `PERMISSION` - 27 edges
4. `@nestjs/microservices` - 27 edges
5. `zod` - 26 edges
6. `@nestjs/config` - 22 edges
7. `HTTP_MESSAGE` - 21 edges
8. `compilerOptions` - 20 edges
9. `ERROR_CODE` - 19 edges
10. `ProcessId` - 19 edges

## Surprising Connections (you probably didn't know these)
- `AuthorizerController` --references--> `ThrottleGroup()`  [EXTRACTED]
  apps/bff/src/app/modules/authorizer/controllers/authorizer.controller.ts → libs/configuration/src/lib/throttler.config.ts
- `InvoiceController` --references--> `ThrottleGroup()`  [EXTRACTED]
  apps/bff/src/app/modules/invoice/controllers/invoice.controller.ts → libs/configuration/src/lib/throttler.config.ts
- `ProductController` --references--> `ThrottleGroup()`  [EXTRACTED]
  apps/bff/src/app/modules/product/controllers/product.controller.ts → libs/configuration/src/lib/throttler.config.ts
- `UserController` --references--> `ThrottleGroup()`  [EXTRACTED]
  apps/bff/src/app/modules/user/controllers/user.controller.ts → libs/configuration/src/lib/throttler.config.ts
- `bootstrap()` --calls--> `setupSwagger()`  [EXTRACTED]
  apps/bff-mobile/src/main.ts → libs/configuration/src/lib/swagger.config.ts

## Import Cycles
- None detected.

## Communities (248 total, 95 thin omitted)

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

### Community 6 - "compilerOptions"
Cohesion: 0.06
Nodes (34): compileOnSave, compilerOptions, declaration, emitDecoratorMetadata, esModuleInterop, experimentalDecorators, ignoreDeprecations, importHelpers (+26 more)

### Community 7 - "package.json"
Cohesion: 0.11
Nodes (17): @nestjs/testing@^12.2.0, @nx/js@23.3.0, @nx/workspace@23.3.0, @types/jest@~30.0.0, webpack-cli@^7.2.3, license, lint-staged, *.{js,jsx,ts,tsx} (+9 more)

### Community 8 - "Common Issues"
Cohesion: 0.07
Nodes (29): Application vs Library Detection, Common Issues, Dependency Version Conflicts, Directory Conventions, ESLint Config Handling, ESLint Version Pinning (Critical), Explicit Executor Path Fixups, Frontend tsconfig Base Settings (Critical) (+21 more)

### Community 9 - "HTTP_MESSAGE"
Cohesion: 0.14
Nodes (14): HTTP_MESSAGE, BAD_REQUEST, CREATED, DELETED, FAILED, FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND (+6 more)

### Community 10 - "ci-poll-decide.mjs"
Cohesion: 0.10
Nodes (25): args, backoff(), buildOutput(), categorizeTasks(), classify(), envRerunCount, expectedSha, formatMessage() (+17 more)

### Community 11 - "sendTcpRequest"
Cohesion: 0.16
Nodes (3): InvoiceController, UserData, sendTcpRequest()

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

### Community 18 - "devDependencies"
Cohesion: 0.08
Nodes (25): devDependencies, @nestjs/config@^12.0.1, @nestjs/schematics@^12.0.10, @nestjs/swagger@^12.0.2, nx@23.3.0, @nx/eslint-plugin@23.3.0, @nx/node@23.3.0, @nx/oxlint@23.3.0 (+17 more)

### Community 19 - "user.repo.ts"
Cohesion: 0.19
Nodes (9): createUserRequestMapping(), UserRepo, UserTcpResponse, baseSchema, newDocument(), CreateUser, UpdateUser, User (+1 more)

### Community 21 - "role.repo.ts"
Cohesion: 0.17
Nodes (7): RoleRepo, RoleService, ROLE, ACCOUNTANT, ADMINISTRATOR, toResponse(), Role

### Community 22 - "invoice.dto.ts"
Cohesion: 0.09
Nodes (23): baseEntityResponseSchema, ClientRequestDto, clientRequestSchema, clientResponseSchema, CreateInvoiceRequestDto, createInvoiceRequestSchema, InvoiceResponseDto, invoiceResponseSchema (+15 more)

### Community 23 - "mongo.config.ts"
Cohesion: 0.15
Nodes (9): RoleModule, logger, MONGO_CLIENT, MONGO_DB, MongoModule, COLLECTIONS, INVOICE, ROLE (+1 more)

### Community 24 - "steps"
Cohesion: 0.10
Nodes (20): jobs, main, runs-on, steps, name, on, pull_request, push (+12 more)

### Community 25 - "dependencies"
Cohesion: 0.06
Nodes (31): dependencies, axios@^1.20.0, cache-manager@^7.2.9, @grpc/grpc-js@^1.14.7, @grpc/proto-loader@^0.8.1, ioredis@^6.0.0, jsonwebtoken@^9.0.3, jwks-rsa@^4.1.0 (+23 more)

### Community 26 - "authorizer.dto.ts"
Cohesion: 0.33
Nodes (4): LoginRequestDto, loginRequestSchema, LoginResponseDto, loginResponseSchema

### Community 27 - "Nx Workspace Exploration"
Cohesion: 0.10
Nodes (18): Affected Projects, Affected Projects, "Cannot find configuration for task X:target", Common Exploration Patterns, "How do I build/test/lint project X?", Listing Projects, Listing Projects, Nx Workspace Exploration (+10 more)

### Community 28 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+8 more)

### Community 29 - "bff/src/configuration/env.config.ts"
Cohesion: 0.15
Nodes (14): configSchema, Env, getEnv, optionalPositiveInt, validateEnv, REDIS_CONFIG, RedisConfig, redisEnvSchema (+6 more)

### Community 30 - "product/src/configuration/env.config.ts"
Cohesion: 0.33
Nodes (4): getEnv, env, typeorm-naming-strategies@^4.1.0, typeorm-naming-strategies

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

### Community 38 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, declaration, emitDecoratorMetadata, experimentalDecorators, forceConsistentCasingInFileNames, noFallthroughCasesInSwitch, noImplicitAny, outDir (+8 more)

### Community 39 - "bff/src/app/modules/invoice/controllers/invoice.controller.ts"
Cohesion: 0.18
Nodes (10): ThrottleGroup(), ProcessId, ResponseDto, ResponseSchema, RequestSchema, TCPRequestDto, TcpClient, @nestjs/swagger (+2 more)

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

### Community 48 - "bff-mobile/src/app/app.module.ts"
Cohesion: 0.23
Nodes (12): ProductModule, allConfigs, allConfigs, createAppConfig(), createGrpcConfig(), GRPC_CONFIG, GRPC_PROTOS, GrpcProvider() (+4 more)

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

### Community 65 - "Steps"
Cohesion: 0.14
Nodes (13): 1. Discover Available Generators, 2. Match Generator to User Request, 3. Get Generator Options, 4. Read Generator Source Code, 5. Examine Existing Patterns, 6. Dry-Run to Verify File Placement, 7. Run the Generator, 8. Modify Generated Code (If Needed) (+5 more)

### Community 66 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 67 - "invoice/src/app/modules/invoice/controllers/invoice.controller.ts"
Cohesion: 0.22
Nodes (4): InvoiceModule, invoiceRequestMapping(), UpdateInvoiceRequestDto, UpdateInvoiceTcpRequest

### Community 68 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 69 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 71 - "compilerOptions"
Cohesion: 0.15
Nodes (12): compilerOptions, emitDecoratorMetadata, experimentalDecorators, module, moduleResolution, outDir, target, types (+4 more)

### Community 72 - "Development Guidelines"
Cohesion: 0.17
Nodes (10): 1. Rules, 1. Terminal, 2. Code Quality, 3. Topic rules and skills, 4. Limitations, Core Features, Development Guidelines, graphify (+2 more)

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

### Community 81 - "all-exceptions.filter.ts"
Cohesion: 0.19
Nodes (6): PermissionGuard, LoggerMiddleware, stringifyForLog(), getProcessId(), express@^5.3.0, express

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

### Community 86 - "lib/throttler.config.ts"
Cohesion: 0.23
Nodes (11): groupOf(), reflector, ThrottleLimit, THROTTLER_CONFIG, ThrottlerConfig, ThrottlerProvider, THROTTLER_GROUP, AUTHORIZER (+3 more)

### Community 87 - "authorizer/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 88 - "UserService"
Cohesion: 0.18
Nodes (3): InvoiceController, UserController, UserService

### Community 89 - "bff/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 90 - "product/tsconfig.json"
Cohesion: 0.25
Nodes (7): compilerOptions, esModuleInterop, extends, files, include, ../../tsconfig.base.json, references

### Community 91 - "interfaces/project.json"
Cohesion: 0.25
Nodes (7): name, projectType, $schema, sourceRoot, tags, targets, lint

### Community 92 - "MetadataKeys"
Cohesion: 0.21
Nodes (6): MetadataKeys, PROCESS_ID, START_TIME, USER_DATA, Permissions, CreateKeycloakUserTcpReq

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

### Community 102 - "@nestjs/common"
Cohesion: 0.16
Nodes (16): AuthorizerModule, InvoiceModule, ProductModule, UserModule, TCP_CONFIG, TcpConfig, TcpProvider(), TCP_SERVICES (+8 more)

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

### Community 108 - "base.config.ts"
Cohesion: 0.07
Nodes (28): configSchema, Env, getEnv, validateEnv, configSchema, Env, getEnv, validateEnv (+20 more)

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

### Community 122 - "invoice.service.ts"
Cohesion: 0.11
Nodes (15): InvoiceRepo, InvoiceService, INVOICE_STATUS, CREATED, PAID, SENT, touch(), Client (+7 more)

### Community 123 - "React Router 7 (Vite-Based)"
Cohesion: 0.40
Nodes (5): Build Output, Generated Types Directory, React Router 7 (Vite-Based), Targets, tsconfig Notes

### Community 124 - "pipes"
Cohesion: 0.40
Nodes (4): 5. Integrations & Business Rules, 6. Security, 7. Before Completing Tasks, pipes

### Community 125 - "General Guidelines for working with Nx"
Cohesion: 0.50
Nodes (3): General Guidelines for working with Nx, Scaffolding & Generators, When to use nx_docs

### Community 126 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, module, moduleResolution, outDir, types, extends, include, ./tsconfig.json

### Community 127 - "authorizer/.oxlintrc.json"
Cohesion: 0.50
Nodes (3): extends, ../../.oxlintrc.json, plugins

### Community 128 - "bff/.oxlintrc.json"
Cohesion: 0.50
Nodes (3): extends, ../../.oxlintrc.json, plugins

### Community 129 - "product/.oxlintrc.json"
Cohesion: 0.50
Nodes (3): extends, ../../.oxlintrc.json, plugins

### Community 130 - "env"
Cohesion: 0.22
Nodes (11): TS_NODE_BASEURL, TS_NODE_PROJECT, options, executor, options, executor, options, command (+3 more)

### Community 131 - "Redundant npm Scripts After Import"
Cohesion: 0.50
Nodes (4): React Router 7 — Keep ALL scripts, Redundant npm Scripts After Import, Standalone Vite App (`create-vite`), TanStack Start

### Community 145 - "guards/project.json"
Cohesion: 0.29
Nodes (6): name, projectType, $schema, sourceRoot, tags, // targets

### Community 146 - "USER"
Cohesion: 0.50
Nodes (4): USER, CREATE, GET_ALL, GET_BY_USER_ID

### Community 147 - "compilerOptions"
Cohesion: 0.05
Nodes (39): compilerOptions, esModuleInterop, extends, files, include, references, compilerOptions, esModuleInterop (+31 more)

### Community 148 - "bff-mobile/.oxlintrc.json"
Cohesion: 0.20
Nodes (7): extends, plugins, extends, plugins, extends, plugins, ../../.oxlintrc.json

### Community 151 - "targets"
Cohesion: 0.18
Nodes (11): executor, passWithNoTests, dependsOn, executor, targets, lint, migration-generate, prune (+3 more)

### Community 152 - "Run Tests"
Cohesion: 0.50
Nodes (3): Rules, Run Tests, Workflow

### Community 154 - "user.guard.ts"
Cohesion: 0.27
Nodes (8): AUTH_TYPE_KEY, AuthType, AuthTypeType, Auth(), Public(), getAccessToken(), setUserData(), parseToken()

### Community 155 - "user.service.ts"
Cohesion: 0.15
Nodes (8): AuthorizerController, KEYCLOAK, CREATE_USER, TCP_REQUEST_MESSAGE, RequestParams, TcpLoggingInterceptor, TcpResponse, TcpSuccess()

### Community 158 - "@nestjs/config"
Cohesion: 0.27
Nodes (15): bootstrap(), bootstrap(), bootstrap(), bootstrap(), bootstrap(), bootstrap(), APP_CONFIG, AppConfig (+7 more)

### Community 159 - "product/src/app/modules/product/product.module.ts"
Cohesion: 0.23
Nodes (6): ProductModule, TypeOrmEnv, typeOrmEnvSchema, TypeOrmProvider, @nestjs/typeorm@^12.0.2, @nestjs/typeorm

### Community 161 - "ERROR_CODE"
Cohesion: 0.17
Nodes (12): ERROR_CODE, AUTH_INVALID_CREDENTIALS, AUTH_INVALID_TOKEN, AUTH_INVALID_TOKEN_STRUCTURE, AUTH_PERMISSION_DENIED, AUTH_TOKEN_INVALID_FORMAT, AUTH_TOKEN_REQUIRED, INVOICE_NOT_FOUND (+4 more)

### Community 167 - "INVOICE"
Cohesion: 0.50
Nodes (4): INVOICE, CREATE, GET_LIST, UPDATE

### Community 168 - "redis"
Cohesion: 0.29
Nodes (7): container_name, image, networks, ports, restart, volumes, redis

### Community 169 - "redis-insight"
Cohesion: 0.29
Nodes (7): container_name, depends_on, image, networks, ports, volumes, redis-insight

### Community 170 - "keycloak.interface.ts"
Cohesion: 0.40
Nodes (3): CreateKeycloakUserRequest, ExchangeClientTokenResponse, ExchangeUserTokenResponse

### Community 171 - "authorizer-response.interface.ts"
Cohesion: 0.18
Nodes (9): AuthorizedMetadataDto, authorizedMetadataSchema, AuthorizeResponseDto, authorizeResponseSchema, LoginTcpResponse, CreateRole, roleSchema, UpdateRole (+1 more)

### Community 172 - "authorizer/src/app/modules/authorizer/authorizer.module.ts"
Cohesion: 0.29
Nodes (4): AppModule, AuthorizerModule, KeycloakModule, allConfigs

### Community 175 - "copy-workspace-modules"
Cohesion: 0.20
Nodes (10): cache, dependsOn, executor, options, outputs, buildTarget, runBuildTargetDependencies, options (+2 more)

### Community 177 - "PRODUCT"
Cohesion: 0.67
Nodes (3): PRODUCT, CREATE, GET_LIST

### Community 178 - "user-grpc.controller.ts"
Cohesion: 0.29
Nodes (6): UserGrpcController, Serialized, GrpcResponse, GrpcSuccess(), GrpcUserResponse, UserById

### Community 180 - "invoice/src/configuration/env.config.ts"
Cohesion: 0.29
Nodes (6): AppModule, allConfigs, configSchema, Env, getEnv, validateEnv

### Community 183 - "product.entity.ts"
Cohesion: 0.25
Nodes (5): ProductTcpResponse, typeorm@^1.1.2, uuid@^14.0.3, typeorm, uuid

### Community 184 - "authorizer-grpc.controller.ts"
Cohesion: 0.39
Nodes (4): AuthorizerGrpcController, VerifyUserTokenRequest, VerifyUserTokenResponse, AuthorizeResponseWire

### Community 185 - "product/project.json"
Cohesion: 0.33
Nodes (5): name, projectType, $schema, sourceRoot, tags

### Community 196 - "prune-lockfile"
Cohesion: 0.33
Nodes (6): cache, dependsOn, executor, inputs, outputs, prune-lockfile

### Community 228 - "AUTHORIZER"
Cohesion: 0.67
Nodes (3): AUTHORIZER, LOGIN, VERIFY_USER_TOKEN

## Knowledge Gaps
- **119 isolated node(s):** `AUTHORIZER_SERVICE`, `INVOICE_SERVICE`, `PRODUCT_SERVICE`, `USER_ACCESS_SERVICE`, `./tsconfig.json` (+114 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1506 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **95 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@nestjs/common` connect `@nestjs/common` to `package.json`, `user.repo.ts`, `role.repo.ts`, `mongo.config.ts`, `dependencies`, `user.guard.ts`, `user.service.ts`, `@nestjs/config`, `product/src/app/modules/product/product.module.ts`, `bff/src/app/modules/invoice/controllers/invoice.controller.ts`, `authorizer/src/app/modules/authorizer/authorizer.module.ts`, `authorizer.service.ts`, `bff-mobile/src/app/app.module.ts`, `user-grpc.controller.ts`, `invoice/src/configuration/env.config.ts`, `authorizer-grpc.controller.ts`, `invoice/src/app/modules/invoice/controllers/invoice.controller.ts`, `all-exceptions.filter.ts`, `lib/throttler.config.ts`, `MetadataKeys`, `base.config.ts`, `invoice.service.ts`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **What connects `AUTHORIZER_SERVICE`, `INVOICE_SERVICE`, `PRODUCT_SERVICE` to the rest of the system?**
  _119 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.04994192799070848 - nodes in this community are weakly interconnected._
- **Why does `zod` connect `invoice.dto.ts` to `@nestjs/common`, `bff/src/app/modules/invoice/controllers/invoice.controller.ts`, `invoice.service.ts`, `package.json`, `authorizer-response.interface.ts`, `base.config.ts`, `user.repo.ts`, `invoice/src/configuration/env.config.ts`, `lib/throttler.config.ts`, `mongo.config.ts`, `dependencies`, `authorizer.dto.ts`, `bff/src/configuration/env.config.ts`, `product/src/app/modules/product/product.module.ts`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._
- **Why does `PERMISSION` connect `PERMISSION` to `authorizer-response.interface.ts`, `MetadataKeys`, `bff/src/app/modules/invoice/controllers/invoice.controller.ts`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Should `targets` be split into smaller, more focused modules?**
  _Cohesion score 0.05121951219512195 - nodes in this community are weakly interconnected._