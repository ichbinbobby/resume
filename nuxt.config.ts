// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/color-mode'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16'
})