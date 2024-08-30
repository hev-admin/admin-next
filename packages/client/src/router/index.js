import { setupRouterGuards } from './guards'
import { basicRoutes } from './basic'

export const router = createRouter({
  history: import.meta.env.VITE_HASH_ROUTER === 'true'
    ? createWebHashHistory(import.meta.env.VITE_BASE || '/')
    : createWebHistory(import.meta.env.VITE_BASE || '/'),
  routes: [
    ...basicRoutes,
  ],
})

export function setupRouter(app) {
  app.use(router)
  setupRouterGuards(router)
}
