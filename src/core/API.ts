import { transformType } from '../helper/transformType'
import { replaceDefinitions } from '../helper/utils'
import type { SwaggerPathItemValue, SwaggerSchema, SwaggerPathParameter } from '../type/SwaggerJson'

type CreateAPIOptions = {
  method: string
  pathConfig: SwaggerPathItemValue
}

export class API {
  method: string
  pathConfig: SwaggerPathItemValue
  apiDescription: string
  apiName: string
  parameters: string
  responseType: string

  constructor({ method, pathConfig }: CreateAPIOptions) {
    this.method = method
    this.pathConfig = pathConfig
    this.apiDescription = pathConfig.summary
    this.apiName = pathConfig.operationId
    this.parameters = this.parseParameters(pathConfig.parameters)
    this.responseType = this.parseResponseType(pathConfig.responses['200'].schema)
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

    return res + '\n\t'
  }

  genDescription(parameter: SwaggerPathParameter) {
    const { description } = parameter
    return `${description ? `\n\t/** ${description} */\n` : ''}`
  }

  genParameter(parameter: SwaggerPathParameter) {
    const { name, required, type, schema } = parameter
    if (schema) {
      const { $ref, items } = schema
      if ($ref) {
        return `\t${name}${!required ? '?' : ''}:${replaceDefinitions($ref)}, `
      }
      if (items) {
        const { type: schemaType } = schema
        const { type: itemsType } = items
        if (schemaType === 'array') {
          return `\t${name}${!required ? '?' : ''}:${transformType(itemsType!)}[], `
        } else {
          return `\t${name}${!required ? '?' : ''}:${transformType(itemsType!)}, `
        }
      }
    }
    if (type) {
      return `\t${name}${!required ? '?' : ''}:${transformType(type)}, `
    }
  }

  parseResponseType(schema: SwaggerSchema) {
    const { type, $ref } = schema
    if ($ref) {
      return replaceDefinitions($ref)
    }
    if (type) {
      return transformType(type)
    }
    return ''
  }
}
