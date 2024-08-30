import { createHash } from 'node:crypto'
import { JWT_SECRET } from '../src/settings.js'

function md5(str) {
  return createHash('md5').update(str).digest('hex')
}

function genPassword(password) {
  const str = `${password};${JWT_SECRET}`
  return md5(str)
}

console.log(genPassword('123456'))
