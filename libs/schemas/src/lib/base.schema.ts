import z from 'zod'

export const baseSchema = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
})

// Thay cho `timestamps: true` của mongoose: driver không tự set, nên gọi khi insert.
export function newDocument<T extends object>(data: T) {
  const now = new Date()
  return { ...data, createdAt: now, updatedAt: now }
}

// Gọi trong `$set` khi update: `{ $set: touch({ ... }) }`.
export const touch = <T extends object>(data: T) => ({ ...data, updatedAt: new Date() })
