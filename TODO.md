# TODO

## Đồng bộ kiểu `createdAt` / `updatedAt` qua gRPC/TCP

**Vấn đề:** type ghi `Date` nhưng giá trị thật qua gRPC/TCP/Redis là chuỗi ISO. Hiện chạy đúng nhờ
`JSON.parse(JSON.stringify(data))` trong `GrpcSuccess` và `z.coerce.date()` ở người nhận, nhưng type nói dối
(ví dụ gọi `.getTime()` trên dữ liệu nhận qua gRPC sẽ lỗi lúc chạy).

**Quy ước cần áp dụng cho mọi service:**

- Trên đường truyền (gRPC, TCP, Redis, JSON): ngày là chuỗi ISO 8601 (`string`).
- Trong code nghiệp vụ: ngày là `Date`.
- Chuyển đổi chỉ ở hai biên: người gửi encode, người nhận parse.

**Hướng làm (zod >= 4.1, cần kiểm tra version đang cài):**

- [ ] Trong `libs/schemas/src/lib/base.schema.ts`, thay `z.coerce.date()` bằng `z.codec`:

  ```ts
  const isoDate = z.codec(z.iso.datetime(), z.date(), {
    decode: (s) => new Date(s),
    encode: (d) => d.toISOString(),
  })
  export const baseSchema = z.object({ createdAt: isoDate, updatedAt: isoDate })
  ```

- [ ] `z.infer` (Date) cho code nghiệp vụ, `z.input` (string) cho type gRPC/TCP.
- [ ] `GrpcResponse<T>` và `TcpResponse<T>` nhận type wire (`z.input`).
- [ ] Người gửi dùng `schema.encode(entity)`, người nhận dùng `schema.parse(wire)`; bỏ `JSON.parse(JSON.stringify(...))` trong `GrpcSuccess`.
- [ ] Rà các chỗ đang dùng gRPC: `apps/authorizer` (`verifyUserToken`), `apps/user-access` (`getByUserId`), `libs/guards/src/lib/user.guard.ts`, `libs/utils/src/lib/request.util.ts`, `libs/guards/src/lib/permission.guard.ts`, `libs/decorators/src/lib/user-data.decorator.ts`.
- [ ] Xóa bản trùng `UserTcpResponse` / `GrpcUserResponse` (cùng định nghĩa ở `libs/interfaces/src/lib/tcp/user` và `libs/interfaces/src/lib/grpc/user-access`).
- [ ] Chạy `tsc` cho `user-access`, `authorizer`, `bff`, `bff-mobile` và test lại luồng `POST /api/v1/invoice`.

**Lưu ý:**

- Proto chỉ có `string` cho ngày; `proto-loader` tự `String(date)` nếu gửi `Date` (mất mili-giây), nên phải encode sang ISO trước.
- Cache Redis của `UserGuard` (key `user-token:*`, TTL 30 phút) có thể còn dữ liệu cũ khi đổi shape.
