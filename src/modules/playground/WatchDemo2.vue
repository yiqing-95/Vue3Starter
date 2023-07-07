
<script setup>
import {ref , watch} from 'vue'
import {useRouter} from 'vue-router'

// 简单或者复杂类型都可以 ref内部还是依赖reactive函数 
const msg = ref('')

watchEffect(()=>{
    console.log(msg.value) ;
})

// ## 监听路由
let router = useRouter()
watch(()=>router.currentRoute,(newValue, oldValue)=> {
    console.log('router: 😂')
    console.log(`新值 ${newValue} 老值 ${oldValue} `)
},{
    immediate: true ,
})
</script>

<template>
    <div>

        <h4>测试多源侦听 可以看控制台输出 </h4>
        <input type="text" v-model="msg">
        

    </div>
</template>



<style lang="scss" scoped>

</style>