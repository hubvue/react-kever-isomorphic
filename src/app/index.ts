import { createApplication, OptionsType } from '@kever/core'

const config: OptionsType = {
  port: 9000,
  env: process.env.NODE_ENV,
}

createApplication(config)
