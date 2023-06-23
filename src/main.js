import './style.css'

// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import { createPinia } from 'pinia'

const pinnia = createPinia()


const app = createApp(App)

app.use(ElementPlus)
app.use(pinnia)
app.mount('#app')
