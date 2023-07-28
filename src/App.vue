<script setup>
import { ref, onMounted, provide, watch } from 'vue'

// console.log('[import-meta]:',import.meta)
// 打印下可用的环境变量 
console.log('[import-meta]:', import.meta.env)
// 注意this现在是为定义的哦
console.log(this)

const appName = ref('starter-vue3')

const handleGetMessage = (event) => {
  console.log('event obj from child: ', event)
}



// 做跨组件通讯功能
provide('app-state', {
  'version': '0.1'
})

// NOTE 是不是可以用来做store功能 ？ [有了 Vue3 还要啥 Vuex,自定义 hooks给你实现数据共享和状态管理 ](https://juejin.cn/post/7054060160045547550)
const appStore = ref({
})
provide('app-store', appStore)
// 监听变化
watch(appStore, (newValue, oldValue) => {
  console.log('😂', newValue, '--->', oldValue)

}, {
  deep: true // NOTE: 递归监听的 注意性能问题 
})
// provide('app.changeAppName', changeAppName)

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <div class="main-content container">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>



  <el-backtop :right="100" :bottom="100" />
</template>

 

<style scoped lang="scss">
/* @import "bulma/sass/utilities/_all.sass"; */

.main-content {
  overflow: auto;
}

</style>
