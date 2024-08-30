import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '新颖、全面、简洁的全栈后台管理模板',

  themeConfig: {
    nav: [],

    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [],
      },
      '/reference/': {
        base: '/reference/',
        items: [],
      },

      'editLink': {
        pattern: 'https://github.com/hev-admin/admin-next/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页',
      },

      'footer': {
        message: '基于 MIT 许可发布',
        copyright: `版权所有 © 2024-present 黄艾伦`,
      },

      'docFooter': {
        prev: '上一页',
        next: '下一页',
      },

      'outline': {
        label: '页面导航',
      },

      'lastUpdated': {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium',
        },
      },

      'langMenuLabel': '多语言',
      'returnToTopLabel': '回到顶部',
      'sidebarMenuLabel': '菜单',
      'darkModeSwitchLabel': '主题',
      'lightModeSwitchTitle': '切换到浅色模式',
      'darkModeSwitchTitle': '切换到深色模式',
    },
  },
})
