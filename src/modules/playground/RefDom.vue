<script setup>
  import {ref, onMounted } from 'vue'

  // 挂载完后才能用哦
  const domRef = ref(null)
  // jquery 时代 我们往往需要给组件起个id属性 然后用css选择器#Xxx 获取这个element对象！


//   setTimeout(()=>{

//   }, 4000)

onMounted(() => {
    console.log('[RefDom: ]',domRef.value)
    setTimeout(()=>{
        // 区分大小写😄！ 
        // domRef.value.innerHtml = 'look me 👀'
        domRef.value.innerHTML = 'look me 👀'
    }, 5000)
})

const someProtectedValue = ref('hi') ;
// 显式暴露内部属性 或者方法
defineExpose({
    someProtectedValue
})

</script>

<template>
    <div ref="domRef">
        ref dom demo
    </div>
</template>



<style lang="scss" scoped>

</style>