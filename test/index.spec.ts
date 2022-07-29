import { resolve } from 'node:path'
import { swagger2ts } from '../src'

describe('happy path', () => {
  it('happy path', () => {
    swagger2ts({
      name: 'genAPI.ts',
      output: resolve(__dirname, '../__generated__'),
      input: resolve(__dirname, '../mock/base.json'),
      httpClientType: 'axios'
    })
  })
})
