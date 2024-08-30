import { request } from '@/utils'

export function getUser() {
  return request.get('/user/info', { needToken: true })
}
