import './style.css'
import './styles/style.css'
// import bulma from 'bulma'
// import 'bulma/css/bulma.css'
// require('@/assets/main.scss');
// import('@/assets/main.scss');

// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import {lazyPlugin} from '@/directives'



import App from './App.vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// ⚠️ 各个模块可以修改自己的存储化策略配置 key path之类...
pinia.use(piniaPluginPersistedstate)


const app = createApp(App)
// app.use(bulma)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.use(lazyPlugin)
app.mount('#app')

