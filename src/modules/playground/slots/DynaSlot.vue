<template>
    <div>
        <h3>动态插槽</h3>

        <Child>
            <template #[slotName]>
                header from dynamic-slot component
                
            </template>
        </Child>
    </div>
</template>

<script setup>
import Child from './Child.vue'

let slotName = 'header'
</script>

<style lang="scss" scoped>

</style>