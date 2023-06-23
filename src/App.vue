<script setup>
import {ref, onMounted, provide, watch} from 'vue'

import HelloWorld from './components/HelloWorld.vue'

import Basics from './modules/playground/Basics.vue'
import RefDemo from './modules/playground/RefDemo.vue'
import ComputedDemo from './modules/playground/ComputedDemo.vue'
import WatchDemo from './modules/playground/WatchDemo.vue'
import LifeCircleDemo from './modules/playground/LifeCircleDemo.vue'
import ChildComponent from './modules/playground/ChildComponent.vue'
import ChildComponent2 from './modules/playground/ChildComponent2.vue'
import RefDom from './modules/playground/RefDom.vue'
import InjectDemo from './modules/playground/InjectDemo.vue'
import UserIndex from './modules/crud-demo/UserIndex.vue'

import Counter from './modules/pinia-demo/MyCounter.vue'
import BaiduSearch from './modules/pinia-demo/BaiduSearch.vue'


// 注意this现在是为定义的哦
console.log(this)

const appName = ref('starter-vue3')
setTimeout(() =>{appName.value = 'here i am changed 😂'}, 4000)
const changeAppName = (name)=>{
  appName.value = '改了新名字了 vue-starter'+ name
}

const handleGetMessage = (event)=>{
  console.log('event obj from child: ', event)
}

const domRef1 = ref(null)
onMounted(()=>{
    console.log('[component ref:]', domRef1.value)
})

// 做跨组件通讯功能
provide('app-state', {
   'version': '0.1'
})

// NOTE 是不是可以用来做store功能 ？ [有了 Vue3 还要啥 Vuex,自定义 hooks给你实现数据共享和状态管理 ](https://juejin.cn/post/7054060160045547550)
const appStore = ref({
  changeAppName // 传递方法给子孙
})
provide('app-store', appStore)
// 监听变化
watch(appStore,(newValue, oldValue)=> {
    console.log('😂',newValue,'--->',oldValue)
     
},{
    deep: true // NOTE: 递归监听的 注意性能问题 
})
provide('app.changeAppName', changeAppName)

</script>

<template>
  <h1>{{ appName }}</h1>
  <div>
    
    <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  
  </el-row>

  </div>
  <HelloWorld msg="Vite + Vue" />
  ---
  <Basics  />
  <RefDemo />
  <ComputedDemo />
  <br>
  watch 测试
  <WatchDemo />

  <br> 
  <LifeCircleDemo></LifeCircleDemo>
  <ChildComponent message="someVal"></ChildComponent>
  <ChildComponent :message="appName"></ChildComponent>
  <ChildComponent2 @get-message="handleGetMessage"></ChildComponent2>
   
  访问dom元素
  <RefDom ref="domRef1"></RefDom>
  <InjectDemo></InjectDemo>

  <div>
    <h3>crud demo</h3>
    <UserIndex></UserIndex>
  </div>

  <div>
    <h3>pinia Demo</h3>
    <Counter></Counter>
    <BaiduSearch></BaiduSearch>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
