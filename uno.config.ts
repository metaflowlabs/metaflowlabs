// Import the transformer
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetIcons, presetTypography, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(), // Replaced presetUno with presetWind3
    presetTypography(),
    presetIcons({
      scale: 1.2,
      collections: {
        heroicons: () => import('@iconify-json/heroicons').then(i => i.icons)
      }
    }),
  ],
  shortcuts: {
    // Shared styling shortcuts
    'template-card': 'rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 flex flex-col',
    'card-header': 'p-6 border-b',
    'card-body': 'p-6 grow',
    'card-footer': 'p-6 pt-0',

    // RFC template shortcuts
    'rfc-header': 'flex flex-col gap-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-6',
    'rfc-title': 'text-3xl font-bold text-gray-900 dark:text-gray-100',
    'rfc-metadata': 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3',
    'rfc-section': 'mb-6 pb-2',
    'rfc-section-title': 'text-xl font-semibold mb-3 pb-2 border-b border-gray-100 dark:border-gray-800',

    // Content proposal shortcuts
    'proposal-header': 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-xl',
    'proposal-title': 'text-2xl sm:text-3xl font-bold',
    'proposal-section': 'p-5 border-b border-gray-100 dark:border-gray-800',
    'proposal-section-title': 'text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3',

    // Analytics proposal shortcuts
    'analytics-header': 'bg-gray-50 dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700',
    'analytics-title': 'text-2xl font-bold text-gray-900 dark:text-gray-100',
    'analytics-section': 'p-5 border-b border-gray-100 dark:border-gray-800',
    'analytics-section-title': 'text-lg font-medium text-gray-800 dark:text-gray-200 mb-3',

    // Code block styling
    'code-block': 'rounded-lg overflow-hidden my-4',

    // --- New Shortcuts from Task 3-6 ---
    // Consistent link styling (e.g., in default layout nav)
    'nav-link': 'hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150',
    // Common section heading style (e.g., in index page)
    'section-heading': 'mb-6 text-3xl text-gray-800 font-bold dark:text-white',
    // Feature item box from index.vue
    'feature-item': 'border border-gray-200 rounded-lg p-6 dark:border-gray-700',
    // Feature icon wrapper from index.vue
    'feature-icon-wrapper': 'mb-4 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50',
    // Base feature icon color/style from index.vue
    'feature-icon': 'text-indigo-600 dark:text-indigo-400',
  },
  // Enable transformerVariantGroup
  transformers: [
    transformerVariantGroup(),
  ]
  // No theme defined currently
})
