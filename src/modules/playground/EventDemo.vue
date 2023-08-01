<script setup>
    import Foo from './event-demo/Foo.vue'

  const handleClick = ()=>{
    alert('do something on click event')
  }

 const handleFooEvent = (eventPayload)=>{
    console.log('[handleFooEvent]:', eventPayload)
 }
</script>

<template>
    <div>
        <a @click="$event=> handleClick()">some link</a>
        <foo @my-event="handleFooEvent"></foo>
    </div>
</template>



<style lang="scss" scoped>

</style>