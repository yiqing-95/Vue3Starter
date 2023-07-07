
import Foo from './Foo.vue'
import RefDemo from './RefDemo.vue'
import Basics from './Basics.vue'
import ComputedDemo from './ComputedDemo.vue'
import InjectDemo from './InjectDemo.vue'
import JsxDemo from './JsxDemo.vue'
import WatchDemo from './WatchDemo.vue'
import WatchDemo2 from './WatchDemo2.vue'
import LifeCircleDemo2 from './LifeCircleDemo2.vue'
import RouterLinkDemo from './RouterLinkDemo.vue'
import CrudIndex from './crud/Index.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    // { path: '', component: Foo },
    { path: 'ref-demo', component: RefDemo },
    { path: 'basics', component: Basics },
    { path: 'computed-demo', component: ComputedDemo },
    { path: 'inject-demo', component: InjectDemo },
    { path: 'jsx-demo', component: JsxDemo },
    { path: 'watch-demo', component: WatchDemo },
    { path: 'watch-demo2', component: WatchDemo2 },
    { path: 'life-circle-demo2', component: LifeCircleDemo2 },
    { path: 'router-link-demo', component: RouterLinkDemo },
    { path: 'crud', component: CrudIndex },
  ]

export default routes 