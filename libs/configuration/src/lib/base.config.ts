import z from 'zod'
import fs from 'fs'
import path from 'path'

export const envFile =
  process.env['NODE_ENV'] === 'production'
    ? ['.env.prod', '.env']
    : ['.env.dev', '.env']

// Kiểm tra coi thử có file .env hay chưa
if (!fs.existsSync(path.resolve('.env'))) {
  console.log('Không tìm thấy file .env')
  process.exit(1)
}

// Biến môi trường dùng chung cho mọi service
export const baseEnvSchema = z.object({
  NODE_ENV: z.string().min(1),
  GLOBAL_PREFIX: z.string().min(1),
})

export type BaseEnv = z.infer<typeof baseEnvSchema>

// Mỗi service gọi `defineEnv(baseEnvSchema.extend({...}))` để lấy validateEnv/getEnv của riêng nó.
export function defineEnv<S extends z.ZodType<BaseEnv>>(schema: S) {
  // Field dẫn xuất từ NODE_ENV, không đọc từ .env. Dùng transform ở đây (thay vì trong
  // baseEnvSchema) để baseEnvSchema vẫn là z.object và service còn `.extend()` được.
  const envSchema = schema.transform((env) => ({
    ...env,
    IS_DEV: env.NODE_ENV === 'development',
  }))
  type Env = z.infer<typeof envSchema>

  // Dùng cho `validate` của Nest ConfigModule.
  function validateEnv(config: Record<string, unknown>): Env {
    const result = envSchema.safeParse(config)
    if (!result.success) {
      const issues = result.error.issues
        .map((issue) => `- ${issue.path.join('.')}: ${issue.message}`)
        .join('\n')
      throw new Error(`Invalid env configuration:\n${issues}`)
    }
    return result.data
  }

  // Nest ghi env đã validate ngược vào `process.env` trước khi chạy các `load`
  // factory, nên `registerAs` có thể lấy lại giá trị đã ép kiểu. Memoize để chỉ parse 1 lần.
  let cachedEnv: Env | undefined
  function getEnv(): Env {
    cachedEnv ??= validateEnv(process.env)
    return cachedEnv
  }

  return { validateEnv, getEnv }
}
