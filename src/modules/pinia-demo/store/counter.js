
import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

// export default  useCounterStore = defineStore('counter',{
export const  useCounterStore = defineStore('counter',{
    state:()=>{
        return {
            count: 1
        }
    },
    getters: {
        // FIXME: 这里怎么不起作用？😄 知道了箭头函数 不需要return 普通函数需要return下
        doubleCount(){
           return  this.count * 2
        }
    },
    actions: {
        increment(){
            this.count ++
        }
    }
})

export const useCounterStore2 = defineStore('counter2',()=>{
    const count = ref(1)
    // 定义action
    function increment(){
        count.value ++
    }

    // 定义getter函数
    const doubleCount = computed(()=> count.value * 2)

    return {
        count , increment, doubleCount
    }
},{
    persist: true
})

