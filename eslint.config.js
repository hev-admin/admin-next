import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    ignores: [
      './packages/client/.eslintrc-auto-import.json',
      '.editorconfig',
      '.gitignore',
      '.npmrc',
      'LICENSE',
      '**/.env*',
      '**/*.svg',
    ],
    html: true,
    json: true,
    css: true,
    rules: {
      'no-console': 'off',
    },
  },
  ...compat.config({
    extends: [
      './packages/client/.eslintrc-auto-import.json',
    ],
  }),
  {
    files: ['./packages/client/**/*.{js.vue}', './docs/**/*.{md,js,vue}'],
    unocss: true,
  },
)
