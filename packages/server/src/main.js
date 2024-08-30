import { resolve } from 'node:path'
import process, { cwd } from 'node:process'

import Koa from 'koa'
import responseTime from 'koa-response-time'
import KoaStatic from 'koa-static'
import error from 'koa-json-error'
import bodyParser from 'koa-bodyparser'
import jwt from 'koa-jwt'
import session from 'koa-session'

import { JWT_SECRET, PORT } from './settings'
import { controller } from './controllers'
import { log } from './utils'
import { prismaClientConnect, prismaClientDisconnect } from './lib/prismaClient'

const app = new Koa()

app.keys = [JWT_SECRET || 'hev_admin_secret']

app
  .use(responseTime())
  .use(error())
  .use(KoaStatic(resolve(cwd(), 'static')))
  .use(bodyParser())
  .use(
    jwt({
      secret: JWT_SECRET || 'hev_admin_secret',
      cookie: 'Authorization',
      debug: import.meta.env.DEV,
    })
      .unless({
        path: [
          '/auth/login',
          '/auth/captcha',
        ],
      }),
  )
  .use(session(app))
  .use(prismaClientConnect)
  .use(controller())

if (import.meta.env.PROD) {
  const port = PORT || 5175
  app.listen(port, () => {
    log(`App started, listening on ${port}`)
  })
}

process.on('SIGINT', prismaClientDisconnect)
process.on('SIGTERM', prismaClientDisconnect)

export const viteNodeApp = app
