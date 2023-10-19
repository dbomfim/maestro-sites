// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    {
      src: "~/plugins/bootstrap.js",
      mode: "client",
    },
  ],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "/public/assets/css/vegas.min.css",
    "/public/assets/css/animate.min.css",
    "/public/assets/plugins/glightbox/glightbox.min.css",
    "/public/assets/css/fontawesome-all.min.css",
    "/public/assets/css/agrikol_iconl.css",
    "/public/assets/css/style.css",
    "/public/assets/css/responsive.css",
  ],
  modules: [
    "nuxt-swiper",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Amatic+SC": [400, 700],
          Barlow: {
            ital: [300, 400, 500, 600, 700, 800],
            wght: [300, 400, 500, 600],
          },
          Inter: [400, 700],
          Lato: [100, 300],
          Roboto: {
            ital: [300, 400, 500, 600, 700, 800],
            wght: [300, 400, 500, 600],
          },
        },
      },
    ],
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: "Swiper",
    // styleLang: "css",
    // modules: ["navigation", "pagination"],
  },
});
