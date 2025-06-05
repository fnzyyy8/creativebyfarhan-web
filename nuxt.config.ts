// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      'nuxt-marquee',
      'nuxt-i18n-micro',
      '@formkit/auto-animate',
      'v-gsap-nuxt',
      '@pinia/nuxt',
      'lenis/nuxt',
      'nuxt-swiper'
    ],
    app: {
        head: {
            link: [
                {
                    rel: 'icon', type: 'image/svg+xml', href: '/icon/Icon-Browser.svg'
                },
            ]
        }
    },
    i18n: {
        defaultLocale: 'en',
        locales: [
            {
                code: 'en', iso: 'en-US', dir: 'ltr'
            },
            {
                code: 'id', iso: 'id-ID', dir: 'ltr'
            }
        ],
        translationDir: 'locales',
        meta: true,
        strategy: 'no_prefix'
    }, vgsap: {
        composable: true,
    }
})