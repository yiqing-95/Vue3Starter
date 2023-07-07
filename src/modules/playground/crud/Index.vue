<template>
    <div>
        <h3>crud index</h3>

        <View :model="model" @model-changed="handleModelChanged"></View>
    </div>
</template>

<script setup>
import View from './View.vue'

const model = ref({
    name: 'qing',
    age: 18,
    gender: 'male',
})

const handleModelChanged = (eventData)=>{
    console.log('[in index view]:', eventData)
}
</script>

<style lang="scss" scoped>

</style>