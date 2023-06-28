import {onMounted, ref} from 'vue'

export const useBanner = ()=> {
 // 业务逻辑
 const items = ref([
    {name: 'n1'},
    {name: 'n2'},
 ])

 // 这里可以是各种事件监听逻辑
 onMounted(()=>{
    items.value.push({
        name: 'pushed banner value'
    })
 })

 return {
    // 返回 template需要用到的 数据+函数

    items
 }
}