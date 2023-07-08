<template>
    <div>
        <h3>this is list view component</h3>
        <div v-for="item in list" key="item.id">
            <slot :data="item"> </slot>
        </div>
    </div>
</template>

<script setup>
    let list = ref([
        {id:1, name:'qing1', age:18},
        {id:2, name:'qing2', age:28},
        {id:3, name:'qing3', age:38},
        {id:4, name:'qing4', age:48},
    ])
</script>

<style lang="scss" scoped>

</style>