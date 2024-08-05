import antfu from '@antfu/eslint-config'

export default antfu(
  {
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['packages/client/**/*.{js.vue}', './docs/**/*.{md,js,vue}'],
    unocss: true,
  },
)
