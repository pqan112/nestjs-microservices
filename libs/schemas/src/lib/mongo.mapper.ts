import { ObjectId } from 'mongodb'

// Dùng chung cho mọi service MongoDB: trả về `id` (string) thay vì `_id` (ObjectId).
export function toResponse<T extends { _id: ObjectId }>({ _id, ...rest }: T) {
  return { id: _id.toString(), ...rest }
}
