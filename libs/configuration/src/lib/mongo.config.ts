import { Inject, Logger, Module, OnApplicationShutdown } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Db, MongoClient } from 'mongodb'
import z from 'zod'

export const MONGO_CLIENT = 'MONGO_CLIENT'
export const MONGO_DB = 'MONGO_DB'

// Service gộp vào env schema của mình: `baseEnvSchema.extend(mongoEnvSchema.shape)`.
export const mongoEnvSchema = z.object({
  MONGODB_URI: z.string().min(1),
  MONGODB_DB_NAME: z.string().min(1),
  MONGODB_POOL_SIZE: z.coerce.number().int().positive().default(10),
  MONGODB_CONNECT_TIMEOUT_MS: z.coerce.number().int().positive().default(15000),
  MONGODB_SOCKET_TIMEOUT_MS: z.coerce.number().int().positive().default(360000),
})

export type MongoEnv = z.infer<typeof mongoEnvSchema>

const logger = new Logger('MongoDB')

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: MONGO_CLIENT,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const client = new MongoClient(config.getOrThrow<string>('MONGODB_URI'), {
          maxPoolSize: config.getOrThrow<number>('MONGODB_POOL_SIZE'),
          connectTimeoutMS: config.getOrThrow<number>('MONGODB_CONNECT_TIMEOUT_MS'),
          socketTimeoutMS: config.getOrThrow<number>('MONGODB_SOCKET_TIMEOUT_MS'),
        })
        client.on('close', () => logger.log('disconnected'))
        await client.connect()
        logger.log('🚀 MongoDB connected')
        return client
      },
    },
    {
      provide: MONGO_DB,
      inject: [MONGO_CLIENT, ConfigService],
      useFactory: (client: MongoClient, config: ConfigService): Db =>
        client.db(config.getOrThrow<string>('MONGODB_DB_NAME')),
    },
  ],
  exports: [MONGO_CLIENT, MONGO_DB],
})
export class MongoModule implements OnApplicationShutdown {
  constructor(@Inject(MONGO_CLIENT) private readonly client: MongoClient) {}

  async onApplicationShutdown() {
    await this.client.close()
  }
}
