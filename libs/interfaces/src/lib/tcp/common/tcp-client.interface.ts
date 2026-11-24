import { Observable } from 'rxjs'
import { TCPRequestDto } from './request.dto'
import { TcpResponse } from './tcp-response.interface'

export interface TcpClient {
  send<TResult = any, TInput = any>(
    pattern: any,
    data: TCPRequestDto<TInput>
  ): Observable<TcpResponse<TResult>>
  emit<TResult = any, TInput = any>(
    pattern: any,
    data: TCPRequestDto<TInput>
  ): Observable<TcpResponse<TResult>>
}
