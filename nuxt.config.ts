// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxt/content",
  ],
  content: {
    highlight: {
      theme: {
        default: "min-light",
        dark: "min-dark",
      },
    },
  },
  colorMode: {
    classSuffix: "",
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
