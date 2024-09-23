import { usePermissionStore, useRouterStore, useTabStore, useUserStore } from '@/store'
import { getStorage } from '@/utils'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null,
  }),
  getter: {
    token() {
      if (!this.accessToken && getStorage('accessToken')) {
        this.setToken({ accessToken: getStorage('accessToken') })
      }
      return this.accessToken
    },
  },
  actions: {
    setToken({ accessToken }) {
      this.accessToken = accessToken
    },
    resetToken() {
      this.$reset()
    },
    toLogin() {
      const { router, route } = useRouterStore()
      router.replace({
        path: '/login',
        query: route.query,
      })
    },
    async switchRole(data) {
      this.resetLoginState()
      await nextTick()
      this.setToken(data)
    },
    resetLoginState() {
      const { resetUser } = useUserStore()
      const { resetRouter } = useRouterStore()
      const { resetPermission, accessRoutes } = usePermissionStore()
      const { resetTabs } = useTabStore()

      resetRouter(accessRoutes)
      resetUser()
      resetPermission()
      resetTabs()
      this.resetToken()
    },
    async logout() {
      this.resetLoginState()
      this.toLogin()
    },
  },
})
