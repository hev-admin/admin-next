import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'Hev Admin',

  rewrites: {
    'zh/:rest*': ':rest*',
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  sitemap: {
    hostname: 'https://hev-admin.github.io',
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],

  themeConfig: {
    logo: { src: '/favicon.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hev-admin/admin-next' },
    ],
  },
})
