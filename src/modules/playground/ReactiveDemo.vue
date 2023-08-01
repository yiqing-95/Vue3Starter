
<script setup>
// import {reactive} from 'vue' // 测试下自动导入功能 

/**
 * reactive 返回的是Proxy对象 代理类要求目标具有对象特征 所以常用在object ｜｜array类型上
 * 
 * 且访问时不需要.value 这个中间对象
 * 
 * note：最好给个key 防止修改时没有响应式监听了
 */

const state = reactive({
    count : 0
})

const handleClick = ()=> {
    state.count ++
}


const items  = reactive([

]);
const handleAddItem = ()=> {
    items.push(state.count) 
}

</script>

<template>
    <div>
        <h4>reactive demo</h4>
        <button @click="handleClick"> ++递增： {{state.count}} </button>
        <button @click="handleAddItem"> 添加对象: {{ items}} </button>

    </div>
</template>



<style lang="scss" scoped>

</style>