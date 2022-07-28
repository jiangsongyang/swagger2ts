/* eslint no-console: 0 */

import colors from 'picocolors'
import type { RollupError } from 'rollup'

export type LogType = 'error' | 'warn' | 'info'
export type LogLevel = LogType | 'silent'
export interface Logger {
  info(msg: string, options?: LogOptions): void
  warn(msg: string, options?: LogOptions): void
  warnOnce(msg: string, options?: LogOptions): void
  error(msg: string, options?: LogErrorOptions): void
}

export interface LogOptions {
  clear?: boolean
  timestamp?: boolean
}

export interface LogErrorOptions extends LogOptions {
  error?: Error | RollupError | null
}

const output = (type: LogType, msg: string) => {
  const prefix = 'swagger2ts'

  /* eslint no-nested-ternary: 0 */
  const tag =
    type === 'info'
      ? colors.cyan(colors.bold(prefix))
      : type === 'warn'
      ? colors.yellow(colors.bold(prefix))
      : colors.red(colors.bold(prefix))

  console[type](
    `${colors.bgWhite(colors.bold(new Date().toLocaleTimeString()))} : ${tag}  ` + '\n\t' + `${msg}`
  )
}

export function createLogger(): Logger {
  const warnedMessages = new Set<string>()

  const logger: Logger = {
    info(msg) {
      output('info', msg)
    },
    warn(msg) {
      output('warn', msg)
    },
    warnOnce(msg) {
      if (warnedMessages.has(msg)) return
      output('warn', msg)
      warnedMessages.add(msg)
    },
    error(msg) {
      output('error', msg)
    }
  }

  return logger
}
