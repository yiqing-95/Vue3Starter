<template>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in navs" :key="item.path" :to="{path: item.path}">
       {{ item.mata?.title ?? item.path }}
     </el-breadcrumb-item>
       
    </el-breadcrumb>
    <!-- {{ navs }} -->
  </template>
  
  <script  setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  import {computed , getCurrentInstance} from 'vue'

  // setup函数中不再有this 了 所以不能直接访问以前通过this访问的变量 this.$router|this.$route
  import {useRouter, useRoute} from 'vue-router'

  const {proxy} = getCurrentInstance()
  const goHome = ()=>{
    proxy.$router.push('/')
  }

  const router = useRouter()
  const route = useRoute()

  const navs = computed(()=>{
    // console.log(router)
    console.log('[面包]', router.currentRoute)
    console.log('[面包2]', route.matched)

    let routes = route.matched
    // 第一个路由推入一个根路由
    routes[0].path = '/'

    return routes
  })
  </script>
  