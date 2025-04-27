// @ts-nocheck
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
  formatters: {
    markdown: false,
  },
  vue: true,
  typescript: true,
}, {
  files: ['**/*.vue'],
  rules: {
    'vue/operator-linebreak': ['error', 'before'],
    'style/no-tabs': 'off',
    'style/no-mixed-spaces-and-tabs': 'off',
  },
}))
