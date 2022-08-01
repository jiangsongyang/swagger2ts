export type SwaggerSchema = {
  $ref?: string
  type?: string
  items?: {
    type?: string
    enum?: any
    $ref?: string
    [k: string]: any
  }
}

export type SwaggerPathResponses = {
  [Code: string]: {
    description: string
    schema: SwaggerSchema
  }
}

export type SwaggerPathItemValue = {
  tags: string[]
  summary: string
  operationId: string
  consumes: []
  produces: string[]
  parameters: any[]
  responses: SwaggerPathResponses
}

export type SwaggerPathItem = {
  [Method: string]: SwaggerPathItemValue
}

export type SwaggerPath = {
  [Path: string]: SwaggerPathItem
}

export type SwaggerDefinitions = {
  [Name: string]: {
    type: string
    properties: any
  }
}

export type SwaggerJson = {
  swagger: string
  info: {
    version: string
    title: string
  }
  paths: SwaggerPath
  definitions: SwaggerDefinitions
}

export type SwaggerPathParameter = {
  name: string
  in: string
  description: string
  required: boolean
  type: string
  format: string
  schema: SwaggerSchema
}
