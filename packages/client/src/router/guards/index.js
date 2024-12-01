import { createPageLoadingGuard } from './pageLoading'
import { createTitleGuard } from './title'
import { createPermissionGuard } from './permission'
import { createHistoryGuard } from './history'

export function setupRouterGuards(router) {
  createPageLoadingGuard(router)
  createTitleGuard(router)
  createPermissionGuard(router)
  createHistoryGuard(router)
}
