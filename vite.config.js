import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueJsx from '@vitejs/plugin-vue-jsx' // Vue-jsx插件
import AutoImport from 'unplugin-auto-import/vite' // Vue-jsx插件

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置Vue-jsx插件
    vueJsx({
      // "include": ["src/**/*.vue", "src/**/*.tsx", "src/**/*.jsx", "src/**/*.ts", "src/**/*.js"]
      // ,"exclude":["node_modules/**/*.*"],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ]
    })

  ],
  resolve: {
    alias: {
      // '~': fileURLToPath(new URL('./src' ,import.meta.url))
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  server: {

    hmr: {
      overlay: false
    },
    cors: true,
    open: true,
    proxy: {
      '/api': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/x_api': {
        target: 'http://localhost:7086/index.php',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/x_api/, '')
      }
    }
  }
})
