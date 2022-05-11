export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tabigat media',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Tabigat media — казахстанское онлайн-издание о природе, её изучении и охране. О природе из первых уст'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Tabigat media, tabigat media, TABIGAT MEDIA, Tabigat Media, Tabigat, tabigat, tabigatmedia, tabigat.media, Tabigatmedia, tabigatMedia, TABIGATMEDIA, Табигат медиа, табигат медиа, ТАБИГАТ МЕДИА, Табигат Медиа, Табигат, табигат, табигатмедиа, табигат.медиа, Табигатмеда, табигатМедиа, ТАБИГАТМЕДИА, онлайн-издание о природе, издание, природа, красная книга'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Tabigat media — казахстанское онлайн-издание о природе, её изучении и охране. О природе из первых уст'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Tabigat media'
      },
      { name: 'csrf-token', content: '{{ csrf_token() }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/plugins/defaultPlugin", mode: "client"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/date-fns', {
      defaultLocale: 'ru'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    "vue2-editor/nuxt",
    [
        '@nuxtjs/yandex-metrika',
      {
        id: '87772762',
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ]
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    baseURL: "http://localhost:3001"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  server: {
    port: 3001
  },

  env: {
    // API: 'https://sabadoryo.com/api/',
    API: 'https://backend.tabigat.media/api/',
    clientId: '8c4b8555bcb2e5169145517fd365a273',
    clientSecret: '7549f3702bb0024b4af1d9fbd7dcc950'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
