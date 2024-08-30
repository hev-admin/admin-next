import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './stores'
import { setupGlobalComponent } from '@/components'

// import '@unocss/reset/tailwind.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'nprogress/nprogress.css'
import '@/styles/common.scss'
import 'virtual:uno.css'

async function setupApp() {
  const app = createApp(App)

  setupStore(app)
  setupGlobalComponent(app)
  setupRouter(app)

  app.mount('#app')
}

setupApp()
