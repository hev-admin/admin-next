import Router from '@koa/router'
import { log } from '@/utils'

export function controller() {
  const router = new Router()
  const modules = import.meta.glob('./modules/*.js', { eager: true })
  const methods = ['get', 'post', 'patch', 'delete']
  Object.keys(modules).forEach((key) => {
    const mod = modules[key].default
    if (mod) {
      Object.keys(mod).forEach((key) => {
        const [method, path] = key.split(' ')
        if (methods.includes(method.toLowerCase())) {
          router[method](path, mod[key])
          log(`register URL mapping: ${method.toUpperCase()} ${path}`)
        }
        else {
          log(`invalid URL: ${key}`)
        }
      })
    }
  })
  return router.routes()
}
