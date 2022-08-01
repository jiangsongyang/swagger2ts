import { Interface } from './Interface'
import type { SwaggerDefinitions } from '../type/SwaggerJson'
import type { EnumEffect } from '../type/EnumEffect'

export const transformDefinitions = (definitions: SwaggerDefinitions) => {
  const definitionsResult: Interface[] = []
  const effectTypesWithParseInterface: EnumEffect[] = []
  for (const interfaceName in definitions) {
    const interfaceConfig = definitions[interfaceName]
    definitionsResult.push(
      new Interface({
        interfaceName,
        interfaceConfig
      })
    )
  }

  definitionsResult.forEach((interfaceRes) => {
    if (interfaceRes.effectTypesWithParseInterface) {
      effectTypesWithParseInterface.push(...interfaceRes.effectTypesWithParseInterface)
    }
  })

  return {
    definitionsResult,
    effectTypesWithParseInterface
  }
}
