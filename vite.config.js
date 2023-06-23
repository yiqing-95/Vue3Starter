import {fileURLToPath} from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // '~': fileURLToPath(new URL('./src' ,import.meta.url))
      '~': fileURLToPath(new URL('./src' ,import.meta.url)),
      '@': fileURLToPath(new URL('./src' ,import.meta.url)),
    }
  },
  server: {
    cors: true,
    open: true,
    proxy:{
      '/api': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
