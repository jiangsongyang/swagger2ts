import { readFileSync, writeFileSync } from 'node:fs'
import colors from 'picocolors'
import ejs from 'ejs'
import { resolve } from 'node:path'

class API {
  method
  pathConfig
  apiDescription
  apiName
  constructor({ method, pathConfig }) {
    this.method = method
    this.pathConfig = pathConfig
    this.apiDescription = pathConfig.summary
    this.apiName = pathConfig.operationId
  }
}

const transformPaths = (paths) => {
  const pathsResult = []
  const effectTypesWithParsePaths = []
  for (const path in paths) {
    const pathConfig = paths[path]
    Object.keys(pathConfig).forEach((method) => {
      pathsResult.push(
        new API({
          pathConfig: pathConfig[method],
          method
        })
      )
    })
  }
  // collection API generating side effects
  pathsResult.forEach((api) => {
    console.log(api)
  })
  return {
    pathsResult,
    effectTypesWithParsePaths
  }
}

const transformDefinitions = (definitions) => {
  console.log('definitions: ', definitions)
  const res = []
  return res
}

const parseSwagger = (swaggerJsonStr) => {
  const swaggerJson = JSON.parse(swaggerJsonStr)
  const { swagger, info, paths, definitions } = swaggerJson
  const swaggerInfo = {
    swaggerVersion: swagger,
    info
  }
  const { pathsResult, effectTypesWithParsePaths } = transformPaths(paths)
  const definitionsResult = transformDefinitions(definitions)
  return {
    swaggerInfo,
    // path
    pathsResult,
    effectTypesWithParsePaths,
    // definitions
    definitionsResult
  }
}

/* eslint no-console: 0 */
const output = (type, msg) => {
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
function createLogger() {
  const warnedMessages = new Set()
  const logger = {
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

const logger = createLogger()
const resolveOptions = async (options) => {
  const { name, output, httpClientType, input, url } = options
  if (!input && !url) {
    logger.error('You must provide either an input file or a url')
    process.exit(1)
  }
  let swaggerJson = null
  if (input) {
    swaggerJson = readFileSync(input, 'utf8')
    if (!swaggerJson) {
      logger.error(`Could not read file in this path : ${input}`)
      process.exit(1)
    }
  }
  const res = await parseSwagger(swaggerJson)
  const resolved = {
    name,
    output,
    httpClientType,
    input,
    url,
    ...res
  }
  return resolved
}

const genAPIs = (pathsResult) => {
  console.log('pathsResult: ', pathsResult)
  return null
}
const genTypes = (definitionsResult) => {
  console.log('definitionsResult: ', definitionsResult)
  return null
}
const genCode = async (resolvedConfig) => {
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

const swagger2ts = async (options) => {
  const resolvedOptions = await resolveOptions(options)
  await genCode(resolvedOptions)
}

export { swagger2ts }
//# sourceMappingURL=swagger2ts.esm.js.map
