import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
    base: '/Portfolio-app/',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./Portfolio-app/', import.meta.url))
    }
  }
})
