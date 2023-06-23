
<script setup>
import {ref , computed} from 'vue'

// 简单或者复杂类型都可以 ref内部还是依赖reactive函数 
const state = ref([
    1,2,3,4,5,6,7,8
])

 const computedState = computed(()=>{
    return state.value.filter(item=> item>2)
 })

 const handleAdd = () => {
    state.value.push(10,100)
 }

</script>

<template>
    <div>
        <button @click=" handleAdd ">添加</button>
       <h5>原始： {{ state }}</h5>
       <h5>计算: {{ computedState }}</h5>
        
    </div>
</template>



<style lang="scss" scoped>

</style>