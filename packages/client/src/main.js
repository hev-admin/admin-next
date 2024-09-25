import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupGlobalComponent } from '@/components'
import { setupI18n } from '@/locales'

import '@/style'

async function setupApp() {
  const app = createApp(App)

  setupStore(app)
  setupGlobalComponent(app)
  setupRouter(app)
  setupI18n(app)

  app.mount('#app')
}

setupApp()
