<script setup>
  
  const emit = defineEmits([
    'my-event',
  ])

  const handleClick = ($event) => {
    console.log('[event-demo]:handleClick', $event)

    emit(
        'my-event',
        {'someKey':'some-value'}
    )
  }


</script>

<template>
    <div>
        Foo Component

        <el-button @click="handleClick">click me</el-button>
    </div>
</template>



<style lang="scss" scoped>

</style>