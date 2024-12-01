import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    vue: true,
    unocss: true,
    rules: {
      'no-console': 'warn',
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: 1,
          multiline: 1,
        },
      ],
    },
  },
  ...compat.config({
    extends: [
      '.eslintrc-auto-import.json',
    ],
  }),
)
