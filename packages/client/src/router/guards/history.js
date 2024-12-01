import { useRouterStore } from '@/store'

export function createHistoryGuard(router) {
  const routerStore = useRouterStore()

  router.afterEach(() => {
    routerStore.pushHistory()
  })
}
