import { transformType } from '../helper/transformType'
import type { SwaggerPathItemValue, SwaggerPathResponsesSchema } from '../type/SwaggerJson'

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

  parseParameters(parseParameters: any[]) {
    let res = ''
    parseParameters.forEach((parameter) => {
      const { name, required, type, description } = parameter
      /** xxx:type , */
      res += `${description ? `\n\t/** ${description} */\n` : ''}`
      res += `\t${name}${!required ? '?' : ''}:${transformType(type)} , `
    })

    return res + '\n\t'
  }

  parseResponseType(schema: SwaggerPathResponsesSchema) {
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
