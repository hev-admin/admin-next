import { request } from '@/utils'

export function validateMenuPath(path) {
  return request.get(`/permission/menu/validate?path=${path}`, { needToken: true })
}
