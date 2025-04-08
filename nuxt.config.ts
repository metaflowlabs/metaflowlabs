// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-04-07',
    devtools: {enabled: true},


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

    // Add Twoslash configuration
    twoslash: {
      compilerOptions: {
        lib: ['ES2021', 'DOM'],
        target: 'ES2021',
        strict: true
      },
      injectNuxtTypes: true
    },

})
