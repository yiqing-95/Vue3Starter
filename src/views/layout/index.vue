<script setup>
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue'
import LayoutNav from '@/views/layout/components/LayoutNav.vue'
</script>

<template>
    <el-container>
        <el-header>

            <layoutNav></layoutNav>
            <!-- <el-divider /> -->
            <LayoutHeader></LayoutHeader>

        </el-header>

        <el-main>
            this content area
            <router-view></router-view>
        </el-main>

        <el-footer>Footer</el-footer>
    </el-container>
    <div>


    </div>
</template>



<style lang="scss" scoped>
.el-main{
    margin-top: 5;
}
</style>