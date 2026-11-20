// Keys whose values must never reach the logs. `config` is the axios request config on an
// AxiosError: it carries the raw request body (client_secret, password) and auth headers.
const SENSITIVE_KEY = /password|secret|token|authorization|^config$/i

/** JSON.stringify for log lines: sensitive values are replaced with '[REDACTED]' at any depth. */
export function stringifyForLog(value: unknown): string {
  return JSON.stringify(value, (key, val) => (SENSITIVE_KEY.test(key) ? '[REDACTED]' : val))
}
