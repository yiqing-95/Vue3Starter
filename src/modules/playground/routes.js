

import EventDemo from './EventDemo.vue'
import FooForm from './FooForm.vue'
import WangEditor from './WangEditor.vue'

import EchartsDemo from './EchartsDemo.vue'

import Foo from './Foo.vue'
import RefDemo from './RefDemo.vue'
import RefDom from './RefDom.vue'
import Basics from './Basics.vue'
import ComputedDemo from './ComputedDemo.vue'
import InjectDemo from './InjectDemo.vue'
import JsxDemo from './JsxDemo.vue'
import WatchDemo from './WatchDemo.vue'
import WatchDemo2 from './WatchDemo2.vue'
import LifeCircleDemo2 from './LifeCircleDemo2.vue'
import RouterLinkDemo from './RouterLinkDemo.vue'
import CrudIndex from './crud/Index.vue'
import CrudIndex2 from './crud2/Index.vue'
import SlotsIndex from './slots/Main.vue'
import TeleportsIndex from './teleports/Index.vue'

import DynamicIndex from './dynamic/Main.vue'
import AsyncIndex from './asyncs/Main.vue'
import MixinIndex from './mixins/Main.vue'
import ProvideIndex from './provide_inject/Main.vue'
import StoreIndex from './store/Index.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    // { path: '', component: Foo },
    { path: 'ref-demo', component: RefDemo },
    { path: 'ref-dom', component: RefDom },
    { path: 'basics', component: Basics },
    { path: 'computed-demo', component: ComputedDemo },
    { path: 'inject-demo', component: InjectDemo },
    { path: 'jsx-demo', component: JsxDemo },
    { path: 'watch-demo', component: WatchDemo },
    { path: 'watch-demo2', component: WatchDemo2 },
    { path: 'life-circle-demo2', component: LifeCircleDemo2 },
    { path: 'router-link-demo', component: RouterLinkDemo },
    { path: 'crud', component: CrudIndex },
    { path: 'crud2', component: CrudIndex2 },
    { path: 'slots', component: SlotsIndex },
    { path: 'teleports', component: TeleportsIndex },
    { path: 'dynamic', component: DynamicIndex },
    { path: 'asyncs', component: AsyncIndex },
    { path: 'mixins', component: MixinIndex },
    { path: 'provide-inject', component: ProvideIndex },
    { path: 'store', component: StoreIndex },
    { path: 'echarts', component: EchartsDemo },
    // { path: 'wang-editor', component: WangEditor },
    { path: 'wang-editor', component: FooForm },
    { path: 'event-demo', component: EventDemo },
  ]

export default routes 