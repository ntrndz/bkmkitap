import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css'], 
  components: true,
  plugins: [
    "~/plugins/firebase.ts",
    "~/plugins/pinia.ts",
  ],
});