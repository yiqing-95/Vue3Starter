import './style.css'
import './styles/style.css'
// import bulma from 'bulma'
// import 'bulma/css/bulma.css'
// require('@/assets/main.scss');
// import('@/assets/main.scss');

// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// TODO 引入locale :
// 还可以使用ElConfigProvider 需要包裹整个router-view
import locale from 'element-plus/lib/locale/lang/zh-cn'
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
app.use(ElementPlus,{
    locale,
})
app.use(pinia)
app.use(lazyPlugin)
// TODO: 这里可以注入
// app.provide('$api',userApi) // 分别可以把各个模块的api根对象注入进去

app.mount('#app')

