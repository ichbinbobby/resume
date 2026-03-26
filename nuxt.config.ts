// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "author", content: "ichbinbobby" },
        { name: "charset", content: "utf-8" },
        {
          name: "description",
          content: "Thanh Binh Nguyen - Frontend Developer - Resume",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "resume, frontend developer, web developer, cv, skills, vue, nuxt, javascript, html, css",
        },
        { name: "robots", content: "index, follow" },
        {
          property: "og:description",
          content: "Thanh Binh Nguyen - Frontend Developer - Resume",
        },
        {
          property: "og:image",
          content: "/social_card_open_graph.jpg",
        },
        {
          property: "og:title",
          content: "Thanh Binh Nguyen - Frontend Developer - Resume",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "http://resume.ichbinbobby.de/" },
        { property: "og:locale", content: "en_US" },
        {
          property: "og:site_name",
          content: "Thanh Binh Nguyen - Frontend Developer - Resume",
        },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:site", content: "@yourTwitterHandle" },
        {
          property: "twitter:title",
          content: "Thanh Binh Nguyen - Frontend Developer - Resume",
        },
        {
          property: "twitter:description",
          content: "Thanh Binh Nguyen - Frontend Developer - Resume",
        },
        {
          property: "twitter:image",
          content: "/social_card_open_graph.jpg",
        },
        { name: "theme-color", content: "#4CAF50" },
        { name: "mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "msapplication-TileColor", content: "#4CAF50" },
        { name: "msapplication-TileImage", content: "/favicon.ico" },
      ],
      title: "Thanh Binh Nguyen - Frontend Developer - Resume",
    },
  },

  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/color-mode"],

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-07-16",
});
