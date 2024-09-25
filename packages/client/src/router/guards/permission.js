import { pinia, useAuthStore, usePermissionStore, useUserStore } from '@/store'
import { validateMenuPath } from '@/api'

const WHITE_LIST = ['/login', '/404']

export function createPermissionGuard(router) {
  router.beforeEach(async (to) => {
    const authStore = useAuthStore(pinia)
    console.log('toke')
    const token = authStore.token

    console.log(token)

    console.log(token)

    if (!token) {
      if (WHITE_LIST.includes(to.path)) {
        return true
      }
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }

    if (to.path === '/login') {
      return { path: '/' }
    }

    if (WHITE_LIST.includes(to.path)) {
      return true
    }

    const userStore = useUserStore(pinia)
    const permissionStore = usePermissionStore(pinia)

    if (!userStore.userInfo) {
      const [user, permissions] = await Promise.all([userStore.getUserInfo(), permissionStore.getPermissions()])
      userStore.setUserInfo(user)
      permissionStore.setPermissions(permissions)
      const routeComponents = import.meta.glob('@/views/**/*.vue')
      permissionStore.accessRoutes.forEach((route) => {
        route.component = routeComponents[route.component] || undefined
        !router.hasRoute(route.name) && router.addRoute(route)
      })
      return { ...to, replace: true }
    }

    const routes = router.getRoutes()
    if (routes.find(route => route.name === to.name))
      return true

    // 判断是无权限还是404
    const { data: hasMenu } = await validateMenuPath(to.path)
    return hasMenu
      ? { name: '403', query: { path: to.fullPath }, state: { from: 'permission-guard' } }
      : { name: '404', query: { path: to.fullPath } }
  })
}
