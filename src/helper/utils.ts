import { existsSync, mkdirSync } from 'node:fs'

export const replaceDefinitions = (str: string) =>
  str.replace('#/definitions/', '')

export const checkDir = async (path: string) => {
  return await existsSync(path)
}
export const createDir = async (path: string) => {
  return await mkdirSync(path)
}
