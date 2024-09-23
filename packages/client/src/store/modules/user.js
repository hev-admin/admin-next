import { getUser } from '@/api'

export const useUserStore = defineStore('user', {
  state() {
    return {
      info: {},
    }
  },
  actions: {
    async getUserInfo() {
      const res = await getUser()
      const { id, username, profile, roles, currentRole } = res.data || {}
      return {
        id,
        username,
        avatar: profile?.avatar,
        nickName: profile?.nickName,
        gender: profile?.gender,
        address: profile?.address,
        email: profile?.email,
        roles,
        currentRole,
      }
    },
    resetUser() {
      this.info = {}
    },
  },
})
