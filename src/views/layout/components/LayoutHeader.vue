

<template>
    <div aria-label="A complete example of page header">
        <el-page-header @back="onBack">
            <template #breadcrumb>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: './page-header.html' }">
                        homepage
                    </el-breadcrumb-item>
                    <el-breadcrumb-item><a href="./page-header.html">route 1</a></el-breadcrumb-item>
                    <el-breadcrumb-item>route 2</el-breadcrumb-item>
                </el-breadcrumb>
            </template>
            <template #content>
                <div class="flex items-center">
                    <el-avatar class="mr-3" :size="32"
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <span class="text-large font-600 mr-3"> Title </span>
                    <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                        Sub title
                    </span>
                    <el-tag>Default</el-tag>
                </div>
            </template>
            <template #extra>
                <div class="flex items-center">
                    <el-button>Print</el-button>
                    <el-button type="primary" class="ml-2">Edit</el-button>
                </div>
            </template>

           
            
            <p class="mt-4 text-sm">
                Element Plus team uses <b>weekly</b> release strategy under normal
                circumstance, but critical bug fixes would require hotfix so the actual
                release number <b>could be</b> more than 1 per week.
            </p>
        </el-page-header>
    </div>
</template>




<script setup>

import { ElNotification as notify } from 'element-plus'
import {getCategories} from '@/apis/layout'
import { onMounted } from 'vue';

const onBack = () => {
  notify('Back')
}


const getCategory = async () => {
  const res = await   getCategories()
  console.log(res)
}

onMounted(()=>{
    getCategory()
})



</script>

<style lang="scss" scoped></style>