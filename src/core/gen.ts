import ejs from 'ejs'
import { resolve } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import type { ResolvedConfig } from './config'

export const genCode = async (resolvedConfig: ResolvedConfig) => {
  const { pathsResult } = resolvedConfig

  const template = readFileSync(resolve(__dirname, '../templates/api.ejs'), 'utf-8')
  try {
    const buffer = ejs.render(template, {
      pathsResult,
      interfaces: []
    })
    const { name } = resolvedConfig

    await writeFileSync(`${name}`, buffer)
  } catch (e) {
    console.log(e)
  }
}
