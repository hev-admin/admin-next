import { useDark } from '@vueuse/core'
import { locales } from '@/settings'

export const useAppStore = defineStore('app', {
  state() {
    return {
      isDark: useDark(),
      layout: 'default',
      menuCollapsed: false,
      menuHide: false,
      localeKey: 'zh-CN',
      settingsShow: false,
    }
  },
  getters: {
    locale() {
      return locales.filter(locale => locale.key === this.localeKey)[0]
    },
  },
  actions: {
    toggleDark() {
      this.isDark = !this.isDark
    },
    setLayout(layout) {
      this.layout = layout
    },
    toggleMenuCollapsed() {
      this.menuCollapsed = !this.menuCollapsed
    },
    toggleMenuHide() {
      this.menuHide = !this.menuHide
    },
    toggleSettings() {
      this.settingsShow = !this.settingsShow
    },
    setLocale(localeKey) {
      this.localeKey = localeKey
    },
  },
})
