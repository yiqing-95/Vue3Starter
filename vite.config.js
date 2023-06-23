import {fileURLToPath} from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src' ,import.meta.url))
    }
  },
  server: {
    cors: true,
    open: true,
    proxy: {
        '/baidu': {
            // 此处的写法，目的是为了 将 /baidu 替换成 https://www.baidu.com/
            target: 'https://www.baidu.com/',
            // 允许跨域
            changeOrigin: true,
            ws: true,
            // pathRewrite: {
            //     '^/baidu': ''
            // }
            // rewrite: (path)=> path.replace(/^\/baidu/,'')
        }
    }
}
})
