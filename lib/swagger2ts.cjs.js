'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var node_fs = require('node:fs')
var colors = require('picocolors')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e }
}

var colors__default = /*#__PURE__*/ _interopDefaultLegacy(colors)

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
      ? colors__default['default'].cyan(colors__default['default'].bold(prefix))
      : type === 'warn'
      ? colors__default['default'].yellow(colors__default['default'].bold(prefix))
      : colors__default['default'].red(colors__default['default'].bold(prefix))
  console[type](
    `${colors__default['default'].bgWhite(
      colors__default['default'].bold(new Date().toLocaleTimeString())
    )} : ${tag}  ` +
      '\n\t' +
      `${msg}`
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
    swaggerJson = node_fs.readFileSync(input, 'utf8')
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

exports.swagger2ts = swagger2ts
//# sourceMappingURL=swagger2ts.cjs.js.map
