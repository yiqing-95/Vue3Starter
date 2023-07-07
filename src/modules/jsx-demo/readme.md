组件只是Js 对象 。

为什么能写 jsx/tsx

主要原因 vue template 或者 jsx/tsx 都会被编译成 vue 运行时需要的 render 函数或者业界称为 h 函数。所以 vite 项目需要一个 @vitejs/plugin-vue-jsx 插件作为支持。

@see：https://juejin.cn/post/7175808636977938490
@see: [ 前端黄大仙](https://juejin.cn/post/7199890888938537017) 
@see: https://juejin.cn/post/6984656399812788238
@see: vant 源码
[长文，Vue3+Vite 中 JSX 的使用方式 ](https://juejin.cn/post/7174438569212116999)
@see https://www.cnblogs.com/zdsdididi/p/17332204.html

~~~js

引入外联样式
// Main.jsx
import './Main.scss';
function MainPage(props, { slots, emit, attrs }) {
    return (
    <div>
    // 普通类名
    <p class="title">child {props.name}</p>;
    // 动态类名
    <div class={class={activeIndex.value ? 'active nav-item' : 'nav-item'}> </div>
    </div>
    )
}

export default MainPage;



~~~