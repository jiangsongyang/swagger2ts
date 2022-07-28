import { createLogger } from '../helper/logger'

export type Swagger2TsOptions = {
  name: string
  httpClientType: 'axios'
  input?: string
  url?: string
  output: string
}

const logger = createLogger()

type ResolvedConfig = any

export const resolveOptions: (options: Swagger2TsOptions) => Promise<ResolvedConfig> = (
  options
) => {
  const { name, output, httpClientType, input, url } = options

  if (!input && !url) {
    logger.warn('You must provide either an input file or a url')
    process.exit(1)
  }

  const resolved: ResolvedConfig = {
    name,
    inputFileContent: '',
    output,
    httpClientType,
    input,
    url
  }

  return Promise.resolve(resolved)
}
