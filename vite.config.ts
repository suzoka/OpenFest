import { defineConfig } from 'vite'
import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import react from '@vitejs/plugin-react'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: true, entrypoint: 'frontend/app/ssr.jsx' } }),
    react(),
    adonisjs({ entrypoints: ['frontend/app/app.jsx'], reload: ['resources/views/**/*.edge'] })
  ],

  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/frontend/`,
      '@/': `${getDirname(import.meta.url)}/frontend/components/`,
      '#': `${getDirname(import.meta.url)}/frontend/utils/`,
      '#models/': `${getDirname(import.meta.url)}/app/models/`,
      "#controllers/": `${getDirname(import.meta.url)}/app/controllers/`,
      "#validators/": `${getDirname(import.meta.url)}/app/validators/`
    },
  },

  server: {
    host: true,
    allowedHosts: ['openfest.shaikeerr.fr', 'localhost'],
  },
})
