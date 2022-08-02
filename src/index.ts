import { genCode, resolveOptions } from './core'
import type { Swagger2TsOptions } from './core'

export const swagger2ts = async (options: Swagger2TsOptions) => {
  const resolvedOptions = await resolveOptions(options)
  await genCode(resolvedOptions)
}
