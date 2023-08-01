## Vue3中通过ref获取dom对象

https://zhuanlan.zhihu.com/p/591543552?utm_id=0

~~~js

<template>
<!--注意这里没有冒号-->
<div ref="monacoEditor"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { editor } from 'monaco-editor'
// 请务必写ref
const monacoEditor = ref()
// 注意这里只有onMounted事件后才可以获取
onMounted(() => {
editor.create(monacoEditor.value, {
        value: 'hello world'
    })
})
</script>


~~~