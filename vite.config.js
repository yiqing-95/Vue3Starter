import { fileURLToPath } from 'node:url'
import { defineConfig ,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueJsx from '@vitejs/plugin-vue-jsx' // Vue-jsx插件
import AutoImport from 'unplugin-auto-import/vite' // Vue-jsx插件

import path from 'node:path'

console.log(loadEnv) 
export default defineConfig(({command,mode})=>{

  console.log('[in params]:', command, mode)

  // 打印元数据 ; ⚠️ 浏览器端 meta的取值跟node环境下不同的 
  console.log('[meta]:', import.meta)

  const env = loadEnv(mode, process.cwd(),'') // server配置段的参数 可以来自环境变量
  // console.log(env)

  return {
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
      host: '0.0.0.0',
      // port: 3000,
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
  }

})
// https://vitejs.dev/config/
export const oldCondig = defineConfig({
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
}
)
