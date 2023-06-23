<script setup>
    // 编译器宏 定义父组件可传递的属性 有点像rust的宏呢 
  const props = defineProps({
    message: String,
  })
  // 如果在script中不再访问属性 可以不必声明它  如👇那样
  console.log( 'props passed from parent: ', props)

  // 下面👇这种形式可以定义默认值 如果父组件并没有传递属性的话
//   defineProps({
//     message:{
//         type: String,
//         default: "default message here"
//     },
//   })

</script>

<template>
   
   {{ message }} passed from parent component
   
</template>



<style lang="scss" scoped>

</style>