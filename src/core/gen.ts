import ejs from 'ejs'
import { resolve } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import type { ResolvedConfig } from './config'

const genAPIs = (pathsResult: any) => {
  return pathsResult
}

const genTypes = (definitionsResult: any) => {
  return definitionsResult
}

const genEnum = (enumResult: any) => {
  const res: any = []
  const enumNameSet = new Set()

  enumResult.forEach((enumItem: any) => {
    if (!enumNameSet.has(enumItem.enumName)) {
      res.push(enumItem)
      enumNameSet.add(enumItem.enumName)
    }
  })

  return res
}

export const genCode = async (resolvedConfig: ResolvedConfig) => {
  const {
    pathsResult,
    definitionsResult,
    effectTypesWithParsePaths,
    effectTypesWithParseInterface
  } = resolvedConfig

  const template = readFileSync(resolve(__dirname, '../templates/api.ejs'), 'utf-8')

  const APIsResult = await genAPIs(pathsResult)
  const typesResult = await genTypes(definitionsResult)

  const enumsResult = await genEnum([
    ...effectTypesWithParsePaths,
    ...effectTypesWithParseInterface
  ])

  try {
    const buffer = ejs.render(template, {
      APIsResult,
      typesResult,
      enumsResult
    })
    const { name } = resolvedConfig

    await writeFileSync(`${name}`, buffer)
  } catch (e) {
    console.log(e)
  }
}
