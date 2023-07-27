import { 
    createRouter,
    createWebHashHistory
} from 'vue-router'

// import Index from '~/pages/index.vue'
// import Login from '~/pages/login.vue'

import NotFound from '~/pages/404.vue'
import Hello from '~/Hello.vue'
import Index from '@/views/layout/index.vue'
import About from '@/views/about/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'

import helloRoutes from '@/modules/playground/routes'

/**
 * 在组件中使用时 
 * <router-link :to="{name:'Xxx'}" >label</router-link>
 * to 属性也可以接受字符串
 * to="some-path"
 * 接受对象时 可以用name 也可以用path  相对而言name多了一层保护 使用name可以防止以后path变动
 * :to="{name:'category', params:{id: item.id}}"
 * 
 * ## 监听路由变化 
 * 对于有参数params 情况 需要侦听路由变化
 * watch(()=>router.params,
 * (newParams, oldParams) => {
 *    results = await asyncLoadItems(newParams.id)
 *    items.data = results.data 
 *  }
 * )
 * 
 * items = reactive({data: null})
 * items = reactive([])
 * 数组 跟 对象的微妙之处     对象一般通过key修改 会触发响应式
 * 数组通过push 触发 
 * 
 * 对象情况Object.assign(items, result.data) 通过对象合并操作也可以出发响应式
 * 
 * 用ref更好点
 * items = ref([])
 * items.value = result.data // 直接触发响应式
 * 
 */
const routes = [{
    path:"/",
    component:Index,
    children:[ 
        {
            path:'', //默认路由 置空即可
            component: Home,
        },
        {
            path:'category',  
            component: Category,
        },
    ]
}
,{
    path:"/login",
    component:Login
}
,{
    path:"/hello",
    component:Hello,
    children: helloRoutes ,
}
,{
    path:"/about",
    component:About,
    beforeEnter: (to, from, next) => {
        // ...
        console.log('hi to about') ;
        let cond = true ;
        if(cond){
            next()

        }else{
            next('/login') 
        }
    }
}
,{ 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
}]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router