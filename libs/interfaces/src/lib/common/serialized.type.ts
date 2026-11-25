import { ObjectId } from 'mongodb'

// Kiểu thật của dữ liệu sau JSON (gRPC/TCP/Redis): Date và ObjectId đều thành string.
export type Serialized<T> = T extends Date | ObjectId
  ? string
  : T extends (infer U)[]
    ? Serialized<U>[]
    : T extends object
      ? { [K in keyof T]: Serialized<T[K]> }
      : T
