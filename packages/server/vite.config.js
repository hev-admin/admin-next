import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node'
import { PORT } from './src/settings.js'

export default defineConfig({
  root: cwd(),
  server: {
    port: PORT || 5175,
    hmr: true,
  },
  resolve: {
    alias: {
      '@': resolve(cwd(), 'src'),
      '~': resolve(cwd()),
    },
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'koa',
      appPath: './src/main.js',
      exportName: 'viteNodeApp',
      initAppOnBoot: false,
      tsCompiler: 'esbuild',
      swcOptions: {},
    }),
  ],
  optimizeDeps: {},
})
