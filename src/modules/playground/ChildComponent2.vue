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

// 定义事件
const emit = defineEmits([
  'get-message'
])

const sendMsg = () => {
  emit('get-message', {value: 'Some-Event-Vaule from child'})
}

</script>

<template>
   
   {{ message }} passed from parent component

   <button @click="sendMsg">sendMsg</button>
   
</template>



<style lang="scss" scoped>

</style>