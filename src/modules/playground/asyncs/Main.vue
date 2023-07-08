<script setup>
import { useIntersectionObserver } from '@vueuse/core'

import A from './A.vue'
import B from './B.vue'
// import C from './C.vue'

// 异步组件会被单独打包的📦
const C = defineAsyncComponent(() => {
  // 如果异步组件涉及网络请求 可能会考虑使用Suspense组件 
  return import('./C.vue')
})

const target = ref(null)
const targetIsVisible = ref(false)
const { stop } = useIntersectionObserver(target,
  ([{ isIntersecting }]) => {
    console.log(isIntersecting)
    if (isIntersecting) {
      // 被监控的对象可见了 

      // 
      setTimeout(() => {
        loading.value = false  // 

        targetIsVisible.value = true
      }, 2000)

      stop()
    }
  })

const loading = ref(true)

</script>

<template>
  <div>
    异步组件
    <A></A>
    <div style="height:900px; background-color: blanchedalmond; color: darkolivegreen;">
      <B></B>
    </div>

    <!-- <C></C> -->
    <div v-loading="loading" element-loading-text="Loading..." ref="target">
      <C v-if="targetIsVisible"></C>
    </div>


  </div>
</template>



<style lang="scss" scoped></style>