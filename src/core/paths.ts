import { API } from './API'

import type { SwaggerPath } from '../type/SwaggerJson'

export const transformPaths = (paths: SwaggerPath) => {
  const pathsResult: API[] = []
  const effectTypesWithParsePaths: any[] = []
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

  // collection API generating side effects
  pathsResult.forEach((api) => {
    console.log(api)
  })

  return {
    pathsResult,
    effectTypesWithParsePaths
  }
}
