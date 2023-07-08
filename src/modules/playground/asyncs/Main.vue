<script setup>
import { useIntersectionObserver } from '@vueuse/core'

import A from './A.vue'
import B from './B.vue'
// import C from './C.vue'

const C = defineAsyncComponent(() => {
   return import('./C.vue')
})

const target = ref(null)
const targetIsVisible = ref(false)
const { stop } = useIntersectionObserver(target,
  ([{ isIntersecting }]) => {
    console.log(isIntersecting)
    if (isIntersecting) {
       // 被监控的对象可见了 
       targetIsVisible.value = true

      stop()
    }
  })

</script>

<template>
  <div>
    异步组件
    <A></A>
    <div style="height:900px; background-color: blanchedalmond; color: darkolivegreen;">
      <B></B>
    </div>

    <!-- <C></C> -->
    <div ref="target">
      <C v-if="targetIsVisible"></C>
    </div>


  </div>
</template>



<style lang="scss" scoped></style>