import { registerAs } from '@nestjs/config'
import type { BaseEnv } from './base.config'

export const APP_CONFIG = 'app'

export interface AppConfig {
  port: number
  globalPrefix: string
  isDev: boolean
}

// Env của service, gồm các biến dùng chung (GLOBAL_PREFIX, IS_DEV) và biến port riêng.
// `E` là kiểu env của từng service nên `getPort` được gợi ý đúng tên biến.
type AppEnv = BaseEnv & { IS_DEV: boolean }

// Dùng: createAppConfig(getEnv, (env) => env.INVOICE_PORT)
export function createAppConfig<E extends AppEnv>(getEnv: () => E, getPort: (env: E) => number) {
  return registerAs(APP_CONFIG, (): AppConfig => {
    const env = getEnv()
    return {
      port: getPort(env),
      globalPrefix: env.GLOBAL_PREFIX,
      isDev: env.IS_DEV,
    }
  })
}
