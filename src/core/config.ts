import { readFileSync } from 'node:fs'
import { parseSwagger } from './parse'
import type { API } from './API'
import type { Interface } from './Interface'
import type { EnumEffect } from '../type/EnumEffect'
import { createLogger } from '../helper/logger'

export type Swagger2TsOptions = {
  name: string
  httpClientType: 'axios'
  input?: string
  url?: string
  output: string
}

const logger = createLogger()

export type ResolvedConfig = {
  name: string
  output: string
  httpClientType: 'axios'
  swaggerInfo: {
    swaggerVersion: string
    info: {
      version: string
      title: string
    }
  }
  pathsResult: API[]
  effectTypesWithParsePaths: any[]
  definitionsResult: Interface[]
  effectTypesWithParseInterface: EnumEffect[]
}

export const resolveOptions: (options: Swagger2TsOptions) => Promise<ResolvedConfig> = async (
  options
) => {
  const { name, output, httpClientType, input, url } = options

  if (!input && !url) {
    logger.error('You must provide either an input file or a url')
    process.exit(1)
  }

  let swaggerJson: string | null = null

  if (input) {
    swaggerJson = readFileSync(input, 'utf8')
    if (!swaggerJson) {
      logger.error(`Could not read file in this path : ${input}`)
      process.exit(1)
    }
  }

  const resolved: ResolvedConfig = {
    name,
    output,
    httpClientType,
    ...(await parseSwagger(swaggerJson!))
  }

  return resolved
}
