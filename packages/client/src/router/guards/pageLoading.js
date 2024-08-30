import nProgress from 'nprogress'

export function createPageLoadingGuard(router) {
  router.beforeEach(() => {
    nProgress.start()
  })

  router.afterEach(() => {
    nProgress.done()
  })

  router.onError(() => {
    nProgress.remove()
  })
}
