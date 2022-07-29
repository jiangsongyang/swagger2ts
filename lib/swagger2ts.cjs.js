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

const transformType = (type) => {
  let res = ''
  switch (type) {
    case 'integer':
      res = 'number'
      break
    default:
      res = type
      break
  }
  return res
}

class API {
  method
  pathConfig
  apiDescription
  apiName
  parameters
  responseType
  constructor({ method, pathConfig }) {
    this.method = method
    this.pathConfig = pathConfig
    this.apiDescription = pathConfig.summary
    this.apiName = pathConfig.operationId
    this.parameters = this.parseParameters(pathConfig.parameters)
    this.responseType = this.parseResponseType(pathConfig.responses['200'].schema)
  }
  parseParameters(parseParameters) {
    let res = ''
    parseParameters.forEach((parameter) => {
      const { name, required, type, description } = parameter
      /** xxx:type , */
      res += `${description ? `\n\t/** ${description} */\n` : ''}`
      res += `\t${name}${!required ? '?' : ''}:${transformType(type)} , `
    })
    return res + '\n\t'
  }
  parseResponseType(schema) {
    const { type, $ref } = schema
    if ($ref) {
      return $ref.replace('#/definitions/', '')
    }
    if (type) {
      return transformType(type)
    }
    return ''
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
  return {
    pathsResult,
    effectTypesWithParsePaths
  }
}

class Interface {
  interfaceName
  interfaceValue
  effectTypesWithParseInterface
  constructor(interfaceInfo) {
    this.interfaceName = interfaceInfo.interfaceName
    this.effectTypesWithParseInterface = []
    const { properties } = interfaceInfo.interfaceConfig
    this.interfaceValue = this.parseInterfaceValue(properties)
  }
  parseInterfaceValue(properties) {
    const res = []
    Object.keys(properties).forEach((key) => {
      const { $ref, type, description, items, enum: rowEnum } = properties[key]
      if ($ref) {
        res.push({
          key,
          value: $ref.replace('#/definitions/', ''),
          description
        })
      }
      if (type) {
        let value = ''
        const isArray = type === 'array'
        if (rowEnum) {
          value = key.toUpperCase() + '_ENUM'
          this.effectTypesWithParseInterface.push({
            enumName: value,
            enumValue: rowEnum
            // TODO need add enum key
            // TODO need add enum description
          })
        } else if (items?.$ref) {
          value = items?.$ref.replace('#/definitions/', '')
        } else if (items?.type) {
          value = transformType(items?.type)
        } else {
          value = transformType(type)
        }
        res.push({
          key,
          value: isArray ? `${value}[]` : value,
          description
        })
      }
    })
    return res
  }
}

const transformDefinitions = (definitions) => {
  const definitionsResult = []
  const effectTypesWithParseInterface = []
  for (const interfaceName in definitions) {
    const interfaceConfig = definitions[interfaceName]
    definitionsResult.push(
      new Interface({
        interfaceName,
        interfaceConfig
      })
    )
  }
  definitionsResult.forEach((interfaceRes) => {
    if (interfaceRes.effectTypesWithParseInterface) {
      effectTypesWithParseInterface.push(...interfaceRes.effectTypesWithParseInterface)
    }
  })
  return {
    definitionsResult,
    effectTypesWithParseInterface
  }
}

const parseSwagger = (swaggerJsonStr) => {
  const swaggerJson = JSON.parse(swaggerJsonStr)
  const { swagger, info, paths, definitions } = swaggerJson
  const swaggerInfo = {
    swaggerVersion: swagger,
    info
  }
  const { pathsResult, effectTypesWithParsePaths } = transformPaths(paths)
  const { definitionsResult, effectTypesWithParseInterface } = transformDefinitions(definitions)
  return {
    swaggerInfo,
    // path
    pathsResult,
    effectTypesWithParsePaths,
    // definitions
    definitionsResult,
    effectTypesWithParseInterface
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
  return pathsResult
}
const genTypes = (definitionsResult) => {
  return definitionsResult
}
const genEnum = (enumResult) => {
  const res = []
  const enumNameSet = new Set()
  enumResult.forEach((enumItem) => {
    if (!enumNameSet.has(enumItem.enumName)) {
      res.push(enumItem)
      enumNameSet.add(enumItem.enumName)
    }
  })
  return res
}
const genCode = async (resolvedConfig) => {
  const {
    pathsResult,
    definitionsResult,
    effectTypesWithParsePaths,
    effectTypesWithParseInterface
  } = resolvedConfig
  const template = node_fs.readFileSync(
    node_path.resolve(__dirname, '../templates/api.ejs'),
    'utf-8'
  )
  const APIsResult = await genAPIs(pathsResult)
  const typesResult = await genTypes(definitionsResult)
  const enumsResult = await genEnum([
    ...effectTypesWithParsePaths,
    ...effectTypesWithParseInterface
  ])
  try {
    const buffer = ejs__default['default'].render(template, {
      APIsResult,
      typesResult,
      enumsResult
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
