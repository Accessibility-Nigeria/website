// https://nuxt.com/docs/api/configuration/nuxt-config
// SEO: site-wide Nuxt SEO stack for a11yng.org (sitemap, robots, schema, OG, canonicals)
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@vueuse/nuxt', '@nuxtjs/seo'],
  nitro: {
    // Cloudflare Pages sets CF_PAGES=1 during CI builds; Nuxt auto-detects this too.
    preset: process.env.CF_PAGES ? 'cloudflare-pages' : undefined,
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/', '/about', '/contact', '/partner', '/sitemap.xml', '/robots.txt'],
    },
  },
  site: {
    url: 'https://a11yng.org',
    name: 'Accessibility Nigeria',
    description:
      'Accessibility Nigeria is a nonprofit community advocating for digital and environmental accessibility across Nigeria—bridging the gap between people with disabilities, supporters, and society.',
    defaultLocale: 'en',
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Accessibility Nigeria',
      url: 'https://a11yng.org',
      logo: '/logo.svg',
      sameAs: [
        'https://github.com/Accessibility-Nigeria',
        'https://x.com/A11yNGN',
        'https://www.linkedin.com/in/accessibility-nigeria-939681297/',
      ],
    },
  },
  sitemap: {
    exclude: ['/donate'],
    zeroRuntime: true,
  },
  robots: {
    disallow: [],
  },
  // Dynamic OG images via Takumi (Cloudflare-compatible with @takumi-rs/wasm)
  ogImage: {
    defaults: {
      component: 'A11yDefault',
      title: 'Accessibility Nigeria',
      description:
        'Breaking barriers and building access — advocating for inclusion across Nigeria\'s digital and physical environments.',
      width: 1200,
      height: 630,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },
  fonts: {
    families: [
      // only resolve this font with the `google` provider
      { name: 'Libre Franklin', provider: 'google' },
      { name: 'PT Sans', provider: 'google' },
    ],
  },
  css: ['@/assets/styles/main.css'],
  routeRules: {
    // Hide unfinished donate page until it's ready
    '/donate': { redirect: '/', robots: false },
  },
})
