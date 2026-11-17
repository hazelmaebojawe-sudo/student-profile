import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      title: 'Student Information',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400;500;600&display=swap',
        },
      ],
    },
  },
})