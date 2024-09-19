import { createPinia } from 'pinia'

export const pinia = createPinia()

export * from './modules'

export function setupStore(app) {
  app.use(pinia)
}
