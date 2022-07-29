import { transformType } from '../helper/transformType'

import type { SwaggerJson, SwaggerPath, SwaggerDefinitions } from '../type/SwaggerJson'

const transformParameters = (rowParameters: any[]) => {
  let res = ''
  rowParameters.forEach((parameter) => {
    const { name, description, required, type: rowType, schema } = parameter

    const type = rowType
      ? {}
      : {
          is$ref: true,
          type: schema?.$ref?.replace('#/definitions/', '')
        }

    const isArray = type === 'array'

    res += `\n${description ? '/** ' + description + ' */' : ''}\n${name}${
      required ? '' : '?'
    }: ${transformType(type)}${isArray ? '[]' : ''}, \n`
  })

  return res
}

const transformResponses = (responses: any) => {
  const succResponses = responses['200']
  const { $ref, type } = succResponses.schema
  if ($ref) {
    return $ref.replace('#/definitions/', '')
  } else {
    return transformType(type)
  }
}

const transformPaths = (paths: SwaggerPath) => {
  const res: any[] = []
  for (const path in paths) {
    const pathItem = paths[path]

    Object.keys(pathItem).forEach((method) => {
      const { operationId, produces, parameters: rowParameters, responses } = pathItem[method]

      const parameters = transformParameters(rowParameters)
      const response = transformResponses(responses)

      res.push({
        method,
        apiName: operationId,
        produces,
        parameters,
        response
      })
    })
  }
  return res
}

const transformDefinitions = (definitions: SwaggerDefinitions) => {
  const res: any[] = []
  console.log('definitions: ', definitions)
  return res
}

export const parseSwagger = (swaggerJsonStr: string) => {
  const swaggerJson: SwaggerJson = JSON.parse(swaggerJsonStr)
  const { swagger, info, paths, definitions } = swaggerJson
  const swaggerInfo = {
    swaggerVersion: swagger,
    info
  }

  const pathsResult = transformPaths(paths)
  const interfaces = transformDefinitions(definitions)

  return {
    swaggerInfo,
    pathsResult,
    interfaces
  }
}
