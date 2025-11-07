import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Entrelinhas-web/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        desabafosFeed: 'src/pages/desabafosFeed.html',
      },
    },
  },
})