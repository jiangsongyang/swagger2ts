import { readFileSync, writeFileSync } from 'node:fs'
import ejs from 'ejs'
import { checkDir, createDir } from '../helper/utils'
import { createLogger } from '../helper/logger'
import type { EnumEffect } from '../type/EnumEffect'
import type { ResolvedConfig } from './config'
import type { API } from './API'
import type { Interface } from './Interface'

const logger = createLogger()

const genAPIs = (pathsResult: API[]) => {
  return pathsResult
}

const genTypes = (definitionsResult: Interface[]) => {
  return definitionsResult
}

const genEnum = (enumResult: EnumEffect[]) => {
  const res: EnumEffect[] = []
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
    output,
    templatePath,
    pathsResult,
    definitionsResult,
    effectTypesWithParsePaths,
    effectTypesWithParseInterface,
  } = resolvedConfig

  const template = readFileSync(templatePath, 'utf-8')

  const APIsResult = await genAPIs(pathsResult)
  const typesResult = await genTypes(definitionsResult)

  const enumsResult = await genEnum([
    ...effectTypesWithParsePaths,
    ...effectTypesWithParseInterface,
  ])

  try {
    const buffer = ejs.render(template, {
      APIsResult,
      typesResult,
      enumsResult,
    })
    const { name } = resolvedConfig

    if (!(await checkDir(output))) await createDir(output)

    await writeFileSync(`${output}/${name}`, buffer)
  }
  catch (e) {
    logger.error(e as string)
  }
}
