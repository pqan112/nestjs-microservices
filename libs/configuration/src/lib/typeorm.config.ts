import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import z from 'zod'
import type { BaseEnv } from './base.config'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

// Service gộp vào env schema của mình: `baseEnvSchema.extend(typeOrmEnvSchema.shape)`.
export const typeOrmEnvSchema = z.object({
  TYPEORM_HOST: z.string().default('localhost'),
  TYPEORM_PORT: z.coerce.number().int().positive().default(5432),
  TYPEORM_USERNAME: z.string().min(1),
  TYPEORM_PASSWORD: z.string().min(1),
  TYPEORM_DATABASE: z.string().min(1),
  TYPEORM_POOL_MAX: z.coerce.number().int().positive().default(10),
  TYPEORM_POOL_MIN: z.coerce.number().int().nonnegative().default(2),
  TYPEORM_POOL_CONNECTION_TIMEOUT_MS: z.coerce.number().int().positive().default(5000),
  TYPEORM_POOL_IDLE_TIMEOUT_MS: z.coerce.number().int().positive().default(30000),
})

export type TypeOrmEnv = z.infer<typeof typeOrmEnvSchema>

export const TypeOrmProvider = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (config: ConfigService<TypeOrmEnv & BaseEnv, true>) => ({
    type: 'postgres',
    host: config.get('TYPEORM_HOST', { infer: true }),
    port: config.get('TYPEORM_PORT', { infer: true }),
    username: config.get('TYPEORM_USERNAME', { infer: true }),
    password: config.get('TYPEORM_PASSWORD', { infer: true }),
    database: config.get('TYPEORM_DATABASE', { infer: true }),
    extra: {
      max: config.get('TYPEORM_POOL_MAX', { infer: true }),
      min: config.get('TYPEORM_POOL_MIN', { infer: true }),
      connectionTimeoutMillis: config.get('TYPEORM_POOL_CONNECTION_TIMEOUT_MS', { infer: true }),
      idleTimeoutMillis: config.get('TYPEORM_POOL_IDLE_TIMEOUT_MS', { infer: true }),
    },
    autoLoadEntities: true,
    // dùng migration thay vì tự động sync schema
    synchronize: false,
    logging:
      config.get('NODE_ENV', { infer: true }) === 'development'
        ? ['error', 'warn', 'query']
        : ['error'],
    retryAttempts: 5,
    retryDelay: 3000,
    namingStrategy: new SnakeNamingStrategy(),
  }),
})
