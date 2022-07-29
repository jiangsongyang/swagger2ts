import { transformPaths } from './paths'
import { transformDefinitions } from './definitions'

import type { SwaggerJson } from '../type/SwaggerJson'

export const parseSwagger = (swaggerJsonStr: string) => {
  const swaggerJson: SwaggerJson = JSON.parse(swaggerJsonStr)
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
