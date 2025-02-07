import { defineConfig } from 'vite'
import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import react from '@vitejs/plugin-react'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [inertia({ ssr: { enabled: true, entrypoint: 'frontend/app/ssr.jsx' } }), react(), adonisjs({ entrypoints: ['frontend/app/app.jsx'], reload: ['resources/views/**/*.edge'] })],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/frontend/`,
      '@/': `${getDirname(import.meta.url)}/frontend/components/`
    },
  },
})
