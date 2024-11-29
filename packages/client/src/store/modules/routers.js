export const useRouterStore = defineStore('router', () => {
  const router = useRouter()
  const route = useRoute()

  function resetRouter(accessRoutes) {
    accessRoutes.forEach((route) => {
      router.hasRoute(route.name) && router.removeRoute(route.name)
    })
  }

  const history = ref([])

  function pushHistory() {
    const { name, path } = route
    const { length } = history.value
    if (length > 0 && history.value[length - 1].path === path)
      return
    history.value.push({ name, path })
  }

  return {
    router,
    route,
    resetRouter,
    history,
    pushHistory,
  }
})
