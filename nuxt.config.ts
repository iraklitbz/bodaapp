// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' },
  },
  modules: [
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    'nuxt-module-eslint-config',
  ],
  formkit: {
    autoImport: true,
    configFile: 'formkit.config.ts',
  },
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/scss/main.scss',
  },
})
