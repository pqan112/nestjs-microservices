import { ObjectId } from 'mongodb'
import z from 'zod'

// Field có trong mọi document. `id` không lưu DB, được suy ra từ `_id` ở `toResponse`.
export const baseSchema = z.object({
  _id: z.instanceof(ObjectId),
  createdAt: z.date(),
  updatedAt: z.date(),
})

// Dùng cho schema input (DTO): `invoiceSchema.omit(omitBase)` bỏ các field server tự sinh.
export const omitBase = { _id: true, createdAt: true, updatedAt: true } as const

// Thay cho `timestamps: true` của mongoose: driver không tự set, nên gọi khi insert.
export function newDocument<T extends object>(data: T) {
  const now = new Date()
  return { _id: new ObjectId(), ...data, createdAt: now, updatedAt: now }
}

// Gọi trong `$set` khi update: `{ $set: touch({ ... }) }`.
export const touch = <T extends object>(data: T) => ({ ...data, updatedAt: new Date() })

// Thay cho virtual `id` + toJSON: `_id` -> `id` dạng string.
export function toResponse<T extends { _id: ObjectId }>({ _id, ...rest }: T) {
  return { id: _id.toString(), ...rest }
}
