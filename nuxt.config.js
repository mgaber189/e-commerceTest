// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    baseURL: '/', // ensure correct base
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['/personalLogo.png'],
      },
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],
})