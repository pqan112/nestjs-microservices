import { createKeyv } from '@keyv/redis'
import { CacheModule } from '@nestjs/cache-manager'
import { ConfigModule, ConfigService } from '@nestjs/config'
import z from 'zod'

// Namespace của config đã map, service đăng ký bằng `registerAs(REDIS_CONFIG, ...)`.
export const REDIS_CONFIG = 'redis'

// Service gộp vào env schema của mình: `baseEnvSchema.extend(redisEnvSchema.shape)`.
export const redisEnvSchema = z.object({
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().int().positive().default(6379),
  // TTL mặc định của cache, đơn vị ms (mặc định 30 phút).
  REDIS_TTL: z.coerce
    .number()
    .int()
    .positive()
    .default(30 * 60000),
})

export type RedisEnv = z.infer<typeof redisEnvSchema>

export interface RedisConfig {
  host: string
  port: number
  ttl: number
}

// Provider không biết tên biến env, chỉ đọc config đã map ở `REDIS_CONFIG`.
export const RedisProvider = CacheModule.registerAsync({
  isGlobal: true,
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const { host, port, ttl } = config.getOrThrow<RedisConfig>(REDIS_CONFIG)
    return {
      stores: [createKeyv(`redis://${host}:${port}`)],
      ttl,
    }
  },
})
