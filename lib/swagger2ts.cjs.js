'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var node_fs = require('node:fs')
var colors = require('picocolors')
var ejs = require('ejs')
var node_path = require('node:path')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e }
}

var colors__default = /*#__PURE__*/ _interopDefaultLegacy(colors)
var ejs__default = /*#__PURE__*/ _interopDefaultLegacy(ejs)

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
  const template = node_fs.readFileSync(
    node_path.resolve(__dirname, '../templates/api.ejs'),
    'utf-8'
  )
  const APIsResult = await genAPIs(pathsResult)
  const typesResult = await genTypes(definitionsResult)
  try {
    const buffer = ejs__default['default'].render(template, {
      APIsResult,
      typesResult
    })
    const { name } = resolvedConfig
    await node_fs.writeFileSync(`${name}`, buffer)
  } catch (e) {
    console.log(e)
  }
}

const swagger2ts = async (options) => {
  const resolvedOptions = await resolveOptions(options)
  await genCode(resolvedOptions)
}

exports.swagger2ts = swagger2ts
//# sourceMappingURL=swagger2ts.cjs.js.map
