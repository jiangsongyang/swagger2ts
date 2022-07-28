import { readFileSync } from 'node:fs'
import colors from 'picocolors'

const transformPaths = (paths) => {
  const res = []
  for (const path in paths) {
    const pathItem = paths[path]
    Object.keys(pathItem).forEach((method) => {
      const { operationId, produces, parameters, responses } = pathItem[method]
      res.push({
        method,
        apiName: operationId,
        produces,
        parameters,
        responses
      })
    })
  }
  return res
}
const transformDefinitions = (definitions) => {
  console.log('definitions: ', definitions)
  return []
}
const parseSwagger = (swaggerJsonStr) => {
  const swaggerJson = JSON.parse(swaggerJsonStr)
  const { swagger, info, paths, definitions } = swaggerJson
  const swaggerInfo = {
    swaggerVersion: swagger,
    info
  }
  const pathsResult = transformPaths(paths)
  const definitionsResult = transformDefinitions(definitions)
  return {
    swaggerInfo,
    pathsResult,
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
    ...res,
    output,
    httpClientType,
    input,
    url
  }
  return resolved
}

const swagger2ts = async (options) => {
  const resolvedOptions = await resolveOptions(options)
  console.log('resolvedOptions: ', resolvedOptions)
}

export { swagger2ts }
//# sourceMappingURL=swagger2ts.esm.js.map
