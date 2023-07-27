import {ref, computed} from 'vue'
import { defineStore } from 'pinia'

/**
 * 有些注意点
 * - 组件中使用store数据 需要判断数据是否被api加载过 一般用xxx.leghth ==0
 *   没有数据 需要调用loadXxx方法 做一次数据初始加载 当然对items做增删改后往往还需要load一次
 */
export const useMenuStore = defineStore('menu',()=> {

    const items = ref([])

    // 计算属性
    const cumputedItems = computed(()=>{
       return JSON.parse(sessionStore.getItem('MenuItems')) || items
    })

    // 异步调用接口
    const apiLoadItems = async function(){
      //  await api....
      /**
       * const result = await requestApi()
       * items.value = result.data
       * 
       * sessionStore.setItems('MenuItems', JSON.stringify(result.data)) // 这种是手动做缓存 现在直接开启持久化策略 缓存就不用管了 缓存key用的路径 防止命名冲突
       * 
       * 
       */
    }

    return {

      items,  
      apiLoadItems,
      cumputedItems, // 名字感觉不太好
    }
})