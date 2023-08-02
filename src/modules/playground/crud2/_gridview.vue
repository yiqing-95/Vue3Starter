<script setup>
import eventBus from './eventBus'
  
eventBus.$on('data',(data)=>{
    console.log('hii')
})

</script>

<template>
    <div>
        gridview
        attributes: {{ $attrs }}
    </div>
</template>



<style lang="scss" scoped>

</style>