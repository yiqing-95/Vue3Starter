<template>
    <div>
        <h3>crud index</h3>

        <View :model="model" @model-changed="handleModelChanged"></View>
        <View v-model:msg="msg"></View>
        <hr>
        {{ msg }}
        <hr>
        <Create></Create>
    </div>
</template>

<script setup>
import View from './View.vue'
import Create from './Create.vue'

const model = ref({
    name: 'qing',
    age: 18,
    gender: 'male',
})
const msg = ref('from parent')

const handleModelChanged = (eventData)=>{
    console.log('[in index view]:', eventData)
}
</script>

<style lang="scss" scoped>

</style>