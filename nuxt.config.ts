// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-07', // Updated compatibility date
  devtools: { enabled: true },

  // Enable Nuxt 4 compatibility mode
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    'nuxt-content-twoslash',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],

  // Add or verify the content section with highlight configuration
  content: {
    build: {
      markdown: {
        highlight: {
          preload: ['python'],
          theme: {
            dark: 'vitesse-dark',
            light: 'vitesse-light',
            default: 'one-dark-pro',
          },
        },
      },
    },
  },

  twoslash: {},

})
