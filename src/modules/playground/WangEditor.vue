<script setup>
  import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const mode = 'default'; // 或 'simple' // 也可以使用ref 做响应式更改模式
 // 编辑器实例，必须用 shallowRef
 const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}


const emit = defineEmits(['editor-value'])

const handleChange = (editor) => { 
  console.log('change:', editor.children) 
  console.log('change-wang-eidtor:', valueHtml.value) 
  emit('editor-value',valueHtml.value)
}

const setText = (val)=>{
  valueHtml.value = val
}

// 暴露给父组件使用的属性或者方法 ，父组件经常是表单 编辑器可以作为父组件的子组件出现
defineExpose({
  // instance: shallowRef(), // 这个不管用 可能是生命周期问题 👆上面在handleCreated中有实例赋值
  instance: editorRef,
  name:'hi editor',
  valueHtml,
  setText,
})

</script>

<template>
   <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onChange="handleChange"
      />
    </div>
</template>



<style lang="scss" scoped>

</style>