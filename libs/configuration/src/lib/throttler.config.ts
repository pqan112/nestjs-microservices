import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import z from 'zod'
import { REDIS_CONFIG, RedisConfig } from './redis.config'

// Namespace của config đã map, service đăng ký bằng `registerAs(THROTTLER_CONFIG, ...)`.
export const THROTTLER_CONFIG = 'throttler'

// Service gộp vào env schema của mình: `baseEnvSchema.extend(throttlerEnvSchema.shape)`.
export const throttlerEnvSchema = z.object({
  // Cửa sổ đếm request, đơn vị ms (mặc định 1 phút).
  THROTTLER_TTL_MS: z.coerce.number().int().positive().default(60000),
  // Số request tối đa của mỗi client trong một cửa sổ.
  THROTTLER_LIMIT: z.coerce.number().int().positive().default(1000),
})

export type ThrottlerEnv = z.infer<typeof throttlerEnvSchema>

export interface ThrottlerConfig {
  ttl: number
  limit: number
}

// Bộ đếm request lưu trong Redis nên nhiều instance của service dùng chung một giới hạn.
// Service dùng provider này phải đăng ký cả config `THROTTLER_CONFIG` và `REDIS_CONFIG`.
export const ThrottlerProvider = ThrottlerModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const { ttl, limit } = config.getOrThrow<ThrottlerConfig>(THROTTLER_CONFIG)
    const { host, port } = config.getOrThrow<RedisConfig>(REDIS_CONFIG)

    return {
      throttlers: [{ ttl, limit }],
      errorMessage: 'Too many requests, please try again later.',
      storage: new ThrottlerStorageRedisService({ host, port }),
    }
  },
})
