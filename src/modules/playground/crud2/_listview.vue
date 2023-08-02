<script setup>

  import {useAttrs} from 'vue'

  const attrs = useAttrs()


</script>

<template>
    <div>
        list view
        attributes: {{ $attrs }}
        {{ attrs }}
       parent: {{ $parent }}
    </div>
</template>



<style lang="scss" scoped>

</style>