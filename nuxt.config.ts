// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primeuix/themes/aura'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-particles',
    '@nuxt/image'
  ],
devServer: {
  host: '0.0.0.0'
},
css: [ '@/assets/css/main.css'],
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
},
primevue: {
  importTheme: { from: '@/themes/mytheme.js'},
  options: {
    theme: {
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primevue',
          order: 'tailwind-base, primevue, tailwind-utilities'
        }
      }
    },
    
  },
  autoImport: true
},
particles: {},

})
