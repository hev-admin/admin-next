import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { readFileSync } from 'node:fs'

export const getPackage = () => JSON.parse(readFileSync(resolve(cwd(), 'package.json'), 'utf-8'))

export function generateEnv(env) {
  return Object.keys(env).reduce((acc, key) => {
    try {
      acc[key] = JSON.parse(env[key])
    }
    catch {
      acc[key] = env[key]
    }
    return acc
  }, {})
}

export function generateProxy(proxy) {
  return Object.keys(proxy).reduce((acc, item) => {
    const target = proxy[item]
    acc[item] = {
      target,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${item}`), ''),
      secure: /^https:\/\//.test(target),
    }
    return acc
  }, {})
}
