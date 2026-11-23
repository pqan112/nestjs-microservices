// File này CHỈ dùng cho TypeORM CLI (tạo/chạy migration), app không import file này.
// Chạy bằng: pnpm nx run product:migration-run (xem apps/product/project.json).
import { Product } from '@common/entities/product.entity'
import { existsSync } from 'node:fs'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { getEnv } from './configuration/env.config'

// CLI không có Nest ConfigModule nên tự đọc file .env nếu có (không ghi đè biến đã có sẵn).
// Ở server, biến môi trường do platform cấp nên có thể không có file .env.
if (existsSync('.env')) process.loadEnvFile('.env')
const env = getEnv()

// Giữ giống TypeOrmProvider trong libs/configuration/src/lib/typeorm.config.ts
export default new DataSource({
  type: 'postgres',
  host: env.TYPEORM_HOST,
  port: env.TYPEORM_PORT,
  username: env.TYPEORM_USERNAME,
  password: env.TYPEORM_PASSWORD,
  database: env.TYPEORM_DATABASE,
  entities: [Product],
  migrations: ['apps/product/src/migrations/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
})
