import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Innovative, Comprehensive, and Concise full-stack admin template.',

  themeConfig: {
    nav: [],

    sidebar: {
      '/en/guide/': {
        base: '/en/guide/',
        items: [],
      },
      '/en/reference/': {
        base: '/en/reference/',
        items: [],
      },

      'editLink': {
        pattern: 'https://github.com/hev-admin/admin-next/edit/main/docs/:path',
        text: 'Edit this page on GitHub',
      },

      'footer': {
        message: 'Released under the MIT License.',
        copyright: `Copyright © 2024-present Allen Huang`,
      },
    },
  },
})
