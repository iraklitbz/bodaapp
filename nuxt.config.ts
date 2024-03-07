// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' },
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/aiv0rmf.css' },
      ],
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    'nuxt-module-eslint-config',
    ['@nuxtjs/google-fonts', {
      families: {
        'Grape Nuts': [400],
      },
    }],
  ],
  supabase: {
    redirect: false,
  },
  formkit: {
    autoImport: true,
    configFile: 'formkit.config.ts',
  },
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/scss/main.scss',
  },
})
