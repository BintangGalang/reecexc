// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  modules: ["@nuxt/ui", "nuxt-vuefire"],
  vuefire: {
    config: {
      apiKey: "AIzaSyAbPtOxcC3KRjSgk6bpqWhcJ0hkqHOIIIQ",
      authDomain: "project-ef619.firebaseapp.com",
      projectId: "project-ef619",
      storageBucket: "project-ef619.appspot.com",
      messagingSenderId: "1088765065398",
      appId: "1:1088765065398:web:4a21d06589f9610512ce17",
      measurementId: "G-B0J9L7BGVP"
    },
  },
});
