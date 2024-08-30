export { default as SettingsDrawer } from './SettingsDrawer.vue'

const modules = import.meta.glob('./global/**/*.vue', { eager: true })

const globals = Object.keys(modules).map((key) => {
  const keyArr = key.split('/')
  const name = keyArr[keyArr.length - 1].replace(/\.vue$/, '')
  const component = modules[key].default

  return {
    name,
    component,
  }
})

export function setupGlobalComponent(app) {
  globals.forEach(({ component, name }) => {
    app.component(name, component)
  })
}
