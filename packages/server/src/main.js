import { resolve } from 'node:path'
import process, { cwd } from 'node:process'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import error from 'koa-json-error'
import responseTime from 'koa-response-time'
import Static from 'koa-static'
import { genJWT, genSession, log, logger } from '@/utils'
import setupRouters, { whiteList } from '@/controller'
import { prisma } from '~/prisma/client'

const app = new Koa()

app
  .use(responseTime())
  .use(logger())
  .use(error())
  .use(Static(resolve(cwd(), 'www')))
  .use(bodyParser())
  .use(genJWT(whiteList))
  .use(genSession(app))

setupRouters(app)

if (import.meta.env.PROD) {
  app.listen(
    import.meta.env.VITE_PORT || 3000,
    () => {
      log('Server is running, listen on 3000')
    },
  )
}

export const viteNodeApp = app

process.on('SIGINT', () => {
  console.log('Prisma disconnected')
  prisma && prisma.$disconnect()
})
