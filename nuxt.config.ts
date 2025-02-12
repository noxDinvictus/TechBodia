// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['@/assets/global.scss'],
  imports: {
    dirs: ['stores'],
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: 'https://techbodiaapi.onrender.com',
    },
  },
  app: {
    baseURL: '/TechBodia/',
    buildAssetsDir: '/assets/',
  },
  router: {
    options: {
      hashMode: true,
    },
  },
});
