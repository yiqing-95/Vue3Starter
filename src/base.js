
/** 
 * 在 main.js 引入安装即可
 * app.use(...)
 * 
 * 其他组件中使用
 * import {getCurrentInstance} from 'vue'
 * 
 * const {proxy, ctx} = getCurrentInstance()
 * proxy.$xxx ...
 * ctx.$xxx 
 * 
 * FIXME：早期看到有人从ctx中拿全局挂载的东西
 *  
*/

export default {
    install(app){
        /**
         * 可以挂载全局组件 或者事件监听 指令注册等
         * - app.config.globalProperties.$Xxx = Xxx
         */
    }
}