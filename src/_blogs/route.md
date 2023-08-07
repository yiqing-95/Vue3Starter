@see http://wed.xjx100.cn/news/286830.html


### 传参数
- const routes= [{path: '/detail/:id',name: 'Detail',component: Detail}]
参数值会被放入route.params对象中

-     通过query参数传递参数：在路由跳转时使用query参数，例如：

// 在组件中跳转
router.push({path: '/detail',query: { id: 123 }
})// 在模板中跳转
<router-link to="/detail?id=123">Detail</router-link>

在路由中使用query参数时，参数值会被放入route.query对象中。我们可以通过route.query获取参数。例如，访问地址为/detail?id=123，则我们可以通过route.query.id获取值为"123"。

    在路由配置中通过props选项传递参数。例如：

const routes= [{path: '/detail/:id',name: 'Detail',component: Detail,props: { id: 123 }}]

在组件中可以直接使用props接收参数

    在路由配置中通过meta选项传递参数。例如：

const routes= [{path: '/detail/:id',name: 'Detail',component: Detail,meta: { id: 123 }}]

在组件中可以通过route.meta获取参数，