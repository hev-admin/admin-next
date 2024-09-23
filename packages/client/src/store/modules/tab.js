export const useTabStore = defineStore('tab', {
  state() {
    return {
      tabs: [],
    }
  },
  actions: {
    resetTabs() {
      this.tabs = []
    },
  },
})
