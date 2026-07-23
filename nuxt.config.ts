// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@vueuse/nuxt'],
  nitro: {
    // Cloudflare Pages sets CF_PAGES=1 during CI builds; Nuxt auto-detects this too.
    preset: process.env.CF_PAGES ? 'cloudflare-pages' : undefined,
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  fonts: {
    families: [
      // only resolve this font with the `google` provider
      { name: 'Libre Franklin', provider: 'google' },
      { name: 'PT Sans', provider: 'google' },
    ]
  },
  css: ['@/assets/styles/main.css'],
  routeRules: {
    // Hide unfinished donate page until it's ready
    '/donate': { redirect: '/' },
  },
})