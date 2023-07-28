<template>
    
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <RouterLink to="/" >首页 logo</RouterLink>
        </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">
        <RouterLink to="/layouts" >布局测试</RouterLink>
      </el-menu-item>
      <el-menu-item index="2">
        <RouterLink to="/category" >商品分类</RouterLink>
      </el-menu-item>
      <el-sub-menu index="3">
        <template #title>Workspace</template>
        <el-menu-item index="3-1">
            <RouterLink to="/hello/" >hello</RouterLink>
        </el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-sub-menu index="3-4">
          <template #title>item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
          <el-menu-item index="3-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script   setup>

  import { ref } from 'vue'
  
  // 使用store数据
  import { useMenuStore } from '@/stores/menuStore'
  const store = useMenuStore()
  console.log('[menu-store]:', store)

  const activeIndex = ref('1')
  const handleSelect = (key , keyPath ) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  