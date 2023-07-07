import { 
    createRouter,
    createWebHashHistory
} from 'vue-router'

// import Index from '~/pages/index.vue'
// import Login from '~/pages/login.vue'

import NotFound from '~/pages/404.vue'
import Hello from '~/Hello.vue'
import Index from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'

import helloRoutes from '@/modules/playground/routes'

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
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
}]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router