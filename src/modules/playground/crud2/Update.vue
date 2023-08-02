<script setup>

import emitter from '@/plugins/Bus.js'

const handleSave = ()=>{
    emitter.emit('crud-create',{
        id: 1,
        name: 'qing',
    })
}

</script>
<template>
    <div>
        <h3>Create model</h3>

        <button @click="handleSave">提交</button>
    </div>
</template>


<style lang="scss" scoped></style>