import { resolve } from 'node:path'

import { resolveOptions } from './core'
import type { Swagger2TsOptions } from './core'

export const swagger2ts = async (options: Swagger2TsOptions) => {
  const resolvedOptions = await resolveOptions(options)
  console.log('resolvedOptions: ', resolvedOptions)
}

swagger2ts({
  name: 'MySuperbApi.ts',
  output: resolve(process.cwd(), './__generated__'),
  // input: resolve(process.cwd(), '../src/mock/base.json'),
  httpClientType: 'axios'
})
