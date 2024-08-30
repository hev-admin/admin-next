import { createPageLoadingGuard } from './pageLoading'
import { createTitleGuard } from './title'
import { createPermissionGuard } from './permission'

export function setupRouterGuards(router) {
  createPageLoadingGuard(router)
  createTitleGuard(router)
  createPermissionGuard(router)
}
