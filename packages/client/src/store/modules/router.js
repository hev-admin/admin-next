export const useRouterStore = defineStore('router', () => {
  const router = useRouter()
  const route = useRoute()

  function resetRouter(accessRoutes) {
    accessRoutes.forEach((route) => {
      router.hasRoute(route.name) && router.removeRoute(route.name)
    })
  }

  return {
    router,
    route,
    resetRouter,
  }
})
