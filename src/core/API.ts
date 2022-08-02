import { transformType } from '../helper/transformType'
import { replaceDefinitions } from '../helper/utils'
import type { SwaggerPathItemValue, SwaggerPathParameter, SwaggerSchema } from '../type/SwaggerJson'
import type { EnumEffect } from '../type/EnumEffect'

type CreateAPIOptions = {
  path: string
  method: string
  pathConfig: SwaggerPathItemValue
}

export class API {
  method: string
  rowPath: string
  pathConfig: SwaggerPathItemValue
  apiDescription: string
  apiName: string
  parameters: string
  responseType: string
  effectTypesWithParseAPI: EnumEffect[]
  apiUrl: string
  requestData: string[]

  constructor({ method, pathConfig, path }: CreateAPIOptions) {
    this.method = method
    this.pathConfig = pathConfig
    this.apiDescription = pathConfig.summary
    this.apiName = pathConfig.operationId
    this.effectTypesWithParseAPI = []
    this.rowPath = path

    this.parameters = this.parseParameters(pathConfig.parameters)
    this.responseType = this.parseResponseType(pathConfig.responses['200'].schema)
    this.apiUrl = this.parseUrl(pathConfig.parameters)
    this.requestData = this.genData(pathConfig.parameters)
  }

  parseUrl(parameters: SwaggerPathParameter[]) {
    const { rowPath } = this

    const res = parameters.reduce((prev, item) => {
      const { name, in: parameterPosition } = item
      if (parameterPosition === 'path') prev = prev.replace(`{${name}}`, `\${${name}}`)

      if (parameterPosition === 'query') {
        if (!prev.endsWith('?') && !prev.endsWith('&')) prev += '?'

        prev += `${name}=$\{${name}}&`
      }
      return prev
    }, rowPath)

    return res.endsWith('&') ? res.slice(0, -1) : res
  }

  parseParameters(parseParameters: SwaggerPathParameter[]) {
    let res = ''
    parseParameters
      /** required parameter should in arguments head */
      .sort((preParameter, afterParameter) => +afterParameter.required - +preParameter.required)
      .forEach((parameter) => {
        /** add description */
        res += this.genDescription(parameter)
        /** add parameters type */
        res += this.genParameter(parameter)
      })

    return `${res}\n\t`
  }

  genDescription(parameter: SwaggerPathParameter) {
    const { description } = parameter
    return `${description ? `\n\t/** ${description} */\n` : ''}`
  }

  genParameter(parameter: SwaggerPathParameter) {
    const { name, required, type, schema } = parameter
    if (schema) {
      const { $ref, items } = schema
      if ($ref) return `\t${name}${!required ? '?' : ''}:${replaceDefinitions($ref)}, `

      if (items) {
        const { type: schemaType } = schema
        const { type: itemsType } = items

        if (schemaType === 'array')
          return `\t${name}${!required ? '?' : ''}:${transformType(itemsType!)}[], `
        else return `\t${name}${!required ? '?' : ''}:${transformType(itemsType!)}, `
      }
    }
    if (type) {
      const { items } = parameter
      if (items) {
        const { enum: rowEnum = undefined } = items
        if (rowEnum) {
          const enumName = `${name.toUpperCase()}_ENUM`

          this.effectTypesWithParseAPI.push({
            enumName,
            enumValue: rowEnum,
            // TODO need add enum key

            // TODO need add enum description
          })

          return `\t${name}${!required ? '?' : ''}:${enumName}${type === 'array' ? '[]' : ''}, `
        }
        else {
          const { type: rowType } = items
          return `\t${name}${!required ? '?' : ''}:${transformType(rowType!)}${
            type === 'array' ? '[]' : ''
          }, `
        }
      }
      return `\t${name}${!required ? '?' : ''}:${transformType(type)}, `
    }
  }

  parseResponseType(schema: SwaggerSchema) {
    const { type, $ref } = schema
    if ($ref) return replaceDefinitions($ref)

    if (type) return transformType(type)

    return ''
  }

  genData(parameter: SwaggerPathParameter[]) {
    const res: string[] = []
    parameter.forEach((item) => {
      const { name, in: parameterPosition } = item
      return parameterPosition === 'body' ? res.push(name) : res
    })

    return res
  }
}
