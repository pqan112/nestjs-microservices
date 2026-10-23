import { defineConfig } from 'tsdown';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Resolve paths relative to this config file (it is loaded as an ES module,
// so __dirname is unavailable).
const here = dirname(fileURLToPath(import.meta.url));

// Mirrors the `@common/*` paths in tsconfig.base.json (alias name -> libs folder).
const commonLibs = [
  { alias: 'constants', dir: 'constants' },
  { alias: 'configuration', dir: 'configuration' },
  { alias: 'middlewares', dir: 'middlewares' },
  { alias: 'utils', dir: 'utils' },
  { alias: 'interfaces', dir: 'interface' },
  { alias: 'pipes', dir: 'pipes' },
  { alias: 'interceptors', dir: 'interceptors' },
  { alias: 'filters', dir: 'filters' },
];

// Builds the NestJS API with the oxc toolchain (rolldown + the oxc transformer).
// tsdown reads tsconfig.app.json, so experimentalDecorators + emitDecoratorMetadata
// (required for Nest DI and route reflection) are honored by the oxc transform.
export default defineConfig({
  entry: [join(here, 'src/main.ts')],
  // CommonJS output keeps parity with the previous webpack build and Nest's defaults.
  format: ['cjs'],
  platform: 'node',
  target: 'node22',
  outDir: join(here, '../../dist/apps/api'),
  tsconfig: join(here, 'tsconfig.app.json'),
  sourcemap: true,
  clean: true,
  // node_modules deps are externalized by default; nothing to inline for a Nest server.
  dts: false,
  // Resolve the workspace type alias so the shared types lib is consumed during the build.
  alias: Object.fromEntries(
    commonLibs.map(({ alias, dir }) => [
      `@common/${alias}`,
      join(here, `../../libs/${dir}/src/lib`),
    ]),
  ),
});
