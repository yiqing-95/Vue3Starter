
<script setup>
import {ref} from 'vue'

// 简单或者复杂类型都可以 ref内部还是依赖reactive函数 
const state = ref({
    count : 0
})

const handleClick = ()=> {
    state.value.count ++
}

</script>

<template>
    <div>
        <button @click="handleClick"> {{state.count}} </button>
    </div>
</template>



<style lang="scss" scoped>

</style>