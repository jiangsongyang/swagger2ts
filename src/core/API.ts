import type { SwaggerPathItemValue } from '../type/SwaggerJson'

type CreateAPIOptions = {
  method: string
  pathConfig: SwaggerPathItemValue
}

export class API {
  method: string
  pathConfig: SwaggerPathItemValue
  apiDescription: string
  apiName: string

  constructor({ method, pathConfig }: CreateAPIOptions) {
    this.method = method
    this.pathConfig = pathConfig
    this.apiDescription = pathConfig.summary
    this.apiName = pathConfig.operationId
  }
}
