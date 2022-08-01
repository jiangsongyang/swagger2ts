import { transformType } from '../helper/transformType'
import { replaceDefinitions } from '../helper/utils'

type InterfaceInfo = {
  interfaceName: string
  interfaceConfig: any
}

export type InterfaceEffect = {
  enumName: string
  enumValue: any
}

type InterfaceValue = {
  key: string
  value: string
  description: string
}

export class Interface {
  interfaceName: string
  interfaceValue: InterfaceValue[]
  effectTypesWithParseInterface: InterfaceEffect[]

  constructor(interfaceInfo: InterfaceInfo) {
    this.interfaceName = interfaceInfo.interfaceName
    this.effectTypesWithParseInterface = []

    const { properties } = interfaceInfo.interfaceConfig
    this.interfaceValue = this.parseInterfaceValue(properties)
  }

  parseInterfaceValue(properties: any) {
    const res: InterfaceValue[] = []
    Object.keys(properties).forEach((key) => {
      const { $ref, type, description, items, enum: rowEnum } = properties[key]

      if ($ref) {
        res.push({
          key,
          value: replaceDefinitions($ref),
          description
        })
      }

      if (type) {
        let value = ''
        const isArray = type === 'array'
        if (rowEnum) {
          value = key.toUpperCase() + '_ENUM'

          this.effectTypesWithParseInterface.push({
            enumName: value,
            enumValue: rowEnum
            // TODO need add enum key

            // TODO need add enum description
          })
        } else if (items?.$ref) {
          value = replaceDefinitions(items?.$ref)
        } else if (items?.type) {
          value = transformType(items?.type)
        } else {
          value = transformType(type)
        }
        res.push({
          key,
          value: isArray ? `${value}[]` : value,
          description
        })
      }
    })
    return res
  }
}
