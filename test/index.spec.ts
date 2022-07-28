import { resolve } from 'node:path'
import { swagger2ts } from '../src'

describe('happy path', () => {
  it('happy path', () => {
    swagger2ts({
      name: 'MySuperbApi.ts',
      output: resolve(process.cwd(), './__generated__'),
      // input: resolve(process.cwd(), '../src/mock/base.json'),
      httpClientType: 'axios'
    })
  })
})
