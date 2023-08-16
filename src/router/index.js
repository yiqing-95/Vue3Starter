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
import layoutRoutes from '@/modules/layouts-demo/routes'
import Layout from '@/modules/layouts-demo/Index.vue'
import SlotDemo from '@/modules/slot-demo/Index.vue'

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
 * ## router 可以携带一些自定义数据 用来做一些特殊用途 比如点击子路由时父菜单高亮
 * 如： meta{ activeMenu: 'parentPath' }
 * 然后菜单高亮时：:default-active="$route.meta.activeMenu || $route.path "
 * 
 */
const routes = [{
    // NOTE: 有children的path最好以/结尾 不然出问题哦😯 
    path:"/",
    component:Index,
    meta:{
        title: '首页',
    },
    children:[ 
        {
            path:'', //默认路由 置空即可
            component: Home,
            meta:{
                title: '首页',
            },
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
    path:"/hello/",
    component:Hello,
    children: helloRoutes ,
    meta:{
        title: '你好',
    },
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
},
{
    path:"/layouts",
    component:Layout,
    children: layoutRoutes ,
},
{
    path:"/slots",
    component:SlotDemo,
}
,{ 
    // 早期版本是 path: '/:catchAll(.*) 还是这个正则名称随便写的
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
}]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

/**
 * note: addRoute 方法可以动态添加路由  也就是说 除了使用一个数组初始化路由器 
 * 还可以把路由器作为参数传递给其他方法去`挂接`不同模块的路由 就是渐进式构造路由器
 * 可以在入口main.js 中来做挂接
 * 
 * ## router 的跳转
 * - 使用 router-link
 * - 使用router.push 方法
 * 
 * 一个声明式 一个过程式｜编程式
 * 
 * 这篇文章不错 挺全面的：[一文详解:Vue3中使用Vue Router](https://blog.csdn.net/w137160164/article/details/131152766)
 */

export default router