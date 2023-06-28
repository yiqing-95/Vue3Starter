
import {useIntersectionObserver} from '@vueuse/core'

/**
 * 插件一般实现生命周期方法 跟组件生命周期很相似
 * 参考：https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
 * ~~~js
  created(el, binding, vnode, prevVnode) {
     
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
 * 
 * ~~~
 * ------------------------
 * 
 * 注意解构时单词不要拼写错误了 😄 犯过这个错误哦 直接拷贝比较好
 * 
 * 还有使用指令时 好像要带 v- 前缀的
 * 
 */
export  const lazyPlugin = {
    install(app){
        console.log('laze is installed')
        // console.log(useIntersectionObserver)
        // 这里是注册指令的地方 对于注册全局组件是同样方式 app.component('component-name',ComponentDefination)
        app.directive('my-lazy',{
            
            mounted(el,binding) {
                console.log('mouted is called from lazy plugin')
                // console.log(el, binding)
              const {stop} =  useIntersectionObserver(el,
                    ([{ isIntersecting }])=>{
                        console.log(isIntersecting)
                        if(isIntersecting){

                            el.onerror = (err)=>{
                                console.log(err)
                            }

                            el.src = binding.value

                            stop() 
                        }
                    })
            }
        })
    }
}