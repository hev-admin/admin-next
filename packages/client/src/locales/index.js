import zh from './zh/index.json'
import en from './en/index.json'

export const i18n = createI18n({
  locale: 'zh',
  messages: {
    zh: {
      ...zh,
    },
    en: {
      ...en,
    },
  },
})

export function setupI18n(app) {
  app.use(i18n)
}
