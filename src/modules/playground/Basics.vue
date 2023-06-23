
<script setup>
import {reactive} from 'vue'

// reactive 常用在对象类型上
const state = reactive({
    count : 0
})

</script>

<template>
    <div>
        <button @click="state.count++"> {{state.count}} </button>
    </div>
</template>



<style lang="scss" scoped>

</style>