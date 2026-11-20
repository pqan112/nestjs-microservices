import { firstValueFrom } from 'rxjs'
import { ResponseDto } from '../../gateway/response.dto'
import { TcpClient } from './tcp-client.interface'

/** Sends one request to a microservice and wraps its reply in the HTTP response envelope. */
export async function sendTcpRequest<TResult, TInput = unknown>(
  client: TcpClient,
  pattern: string,
  processId: string,
  data?: TInput
) {
  const result = await firstValueFrom(client.send<TResult, TInput>(pattern, { data, processId }))
  return ResponseDto.create(result)
}
