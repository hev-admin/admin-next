import { setupRouterGuards } from './guards'
import { basicRoutes } from './basic'

const BASE = import.meta.env.VITE_BASE || '/'
const ROUTER_MODES = {
  HISTORY: createWebHistory(BASE),
  MEMORY: createMemoryHistory(BASE),
  HASH: createWebHashHistory(BASE),
}
const ROUTER_MODE = import.meta.env.VITE_ROUTER_MODE || 'HISTORY'

export const router = createRouter({
  history: ROUTER_MODES[ROUTER_MODE],
  routes: [
    ...basicRoutes,
  ],
})

export function setupRouter(app) {
  app.use(router)
  setupRouterGuards(router)
}
