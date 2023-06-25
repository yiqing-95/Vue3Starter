<script setup>
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue'
import LayoutNav from '@/views/layout/components/LayoutNav.vue'
</script>

<template>

    <div>
        我是首页 
        <layoutNav></layoutNav>
        <LayoutHeader></LayoutHeader>
        <router-view></router-view>
    </div>
</template>



<style lang="scss" scoped>

</style>