import ejs from 'ejs'
import { resolve } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import type { ResolvedConfig } from './config'

const genAPIs = (pathsResult: any) => {
  console.log('pathsResult: ', pathsResult)
  return null
}

const genTypes = (definitionsResult: any) => {
  console.log('definitionsResult: ', definitionsResult)
  return null
}

export const genCode = async (resolvedConfig: ResolvedConfig) => {
  const { pathsResult, definitionsResult } = resolvedConfig

  const template = readFileSync(resolve(__dirname, '../templates/api.ejs'), 'utf-8')

  const APIsResult = await genAPIs(pathsResult)
  const typesResult = await genTypes(definitionsResult)

  try {
    const buffer = ejs.render(template, {
      APIsResult,
      typesResult
    })
    const { name } = resolvedConfig

    await writeFileSync(`${name}`, buffer)
  } catch (e) {
    console.log(e)
  }
}
