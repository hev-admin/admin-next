import { createHash } from 'node:crypto'
import { JWT_SECRET } from '@/settings'

function md5(str) {
  return createHash('md5').update(str).digest('hex')
}

export function genPassword(password) {
  const str = `${password};${JWT_SECRET}`
  return md5(str)
}
