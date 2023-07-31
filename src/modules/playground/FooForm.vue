<script setup>
  import { nextTick, onMounted } from 'vue';
import WangEditor from  './WangEditor.vue'  

  // let editor = ref(null)
  const editor = ref(null)


  onMounted(()=>{
    nextTick(()=>{
      console.log('[foo-form]',editor.name)
    })
    setTimeout(()=>{
      console.log('[foo-form] 5s:',editor.value.name)
      console.log('[foo-form2] 5s:',editor.value.instance)

     editor.value.instance.insertText('lalallalla')
     editor.value.valueHtml = 'lalalla2'
     editor.value.setText('lalalla22222')
    }, 5000)
  })

</script>

<template>
  this is a fack form
  <WangEditor ref="editor"></WangEditor>
</template>



<style lang="scss" scoped>

</style>