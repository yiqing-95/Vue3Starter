import './style.css'

// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import {lazyPlugin} from '@/directives'



import App from './App.vue'

import { createPinia } from 'pinia'

const pinnia = createPinia()


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(pinnia)
app.use(lazyPlugin)
app.mount('#app')

