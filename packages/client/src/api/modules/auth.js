import { request } from '@/utils'

export function login(data) {
  return request.post('/auth/login', data, { needToken: false })
}

export function refreshToken() {
  return request.get('/auth/refresh/token')
}

export function logout() {
  return request.post('/auth/logout', {}, { needTip: false })
}

export function switchCurrentRole(role) {
  return request.post(`/auth/current-role/switch/${role}`)
}

export function getRolePermissions() {
  return request.get('/auth/permissions/tree', { needToken: true })
}
