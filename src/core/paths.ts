import type { SwaggerPath } from '../type/SwaggerJson'
import { API } from './API'

export const transformPaths = (paths: SwaggerPath) => {
  const pathsResult: API[] = []
  const effectTypesWithParsePaths: any[] = []
  for (const path in paths) {
    const pathConfig = paths[path]
    Object.keys(pathConfig).forEach((method) => {
      pathsResult.push(
        new API({
          pathConfig: pathConfig[method],
          method,
          path,
        }),
      )
    })
  }

  pathsResult.forEach((pathResult) => {
    if (pathResult.effectTypesWithParseAPI)
      effectTypesWithParsePaths.push(...pathResult.effectTypesWithParseAPI)
  })

  return {
    pathsResult,
    effectTypesWithParsePaths,
  }
}
