import type { SwaggerJson, SwaggerPath, SwaggerDefinitions } from '../type/SwaggerJson'

const transformPaths = (paths: SwaggerPath) => {
  const res: any[] = []
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

const transformDefinitions = (definitions: SwaggerDefinitions) => {
  console.log('definitions: ', definitions)
  return []
}

export const parseSwagger = (swaggerJsonStr: string) => {
  const swaggerJson: SwaggerJson = JSON.parse(swaggerJsonStr)
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
