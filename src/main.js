import './style.css'

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
pinia.use(piniaPluginPersistedstate)


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.use(lazyPlugin)
app.mount('#app')

