import { THROTTLER_GROUP } from '@common/constants/enum/throttler-group.enum'
import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ExecutionContext, SetMetadata } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
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

export interface ThrottleLimit {
  ttl: number
  limit: number
}

// `ttl`/`limit` là giá trị mặc định; `groups` ghi đè theo tên nhóm (module) gắn bằng `@ThrottleGroup`.
export interface ThrottlerConfig extends ThrottleLimit {
  groups: Record<THROTTLER_GROUP, ThrottleLimit>
}

const THROTTLER_GROUP_KEY = 'throttlerGroup'
const reflector = new Reflector()

// Gắn controller vào một nhóm throttler; controller không gắn nhóm dùng giá trị mặc định.
export const ThrottleGroup = (name: THROTTLER_GROUP) => SetMetadata(THROTTLER_GROUP_KEY, name)

const groupOf = (context: ExecutionContext): THROTTLER_GROUP | undefined =>
  reflector.get<THROTTLER_GROUP | undefined>(THROTTLER_GROUP_KEY, context.getClass())

// Bộ đếm request lưu trong Redis nên nhiều instance của service dùng chung một giới hạn.
// Service dùng provider này phải đăng ký cả config `THROTTLER_CONFIG` và `REDIS_CONFIG`.
export const ThrottlerProvider = ThrottlerModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const { ttl, limit, groups } = config.getOrThrow<ThrottlerConfig>(THROTTLER_CONFIG)
    const { host, port } = config.getOrThrow<RedisConfig>(REDIS_CONFIG)

    return {
      // Mỗi throttler chỉ áp dụng cho controller thuộc nhóm của nó (skipIf bỏ qua các nhóm khác).
      throttlers: [
        { name: 'default', ttl, limit, skipIf: (context) => groupOf(context) !== undefined },
        ...(Object.entries(groups) as [THROTTLER_GROUP, ThrottleLimit][]).map(([name, group]) => ({
          name,
          ...group,
          skipIf: (context: ExecutionContext) => groupOf(context) !== name,
        })),
      ],
      errorMessage: 'Too many requests, please try again later.',
      storage: new ThrottlerStorageRedisService({ host, port }),
    }
  },
})
