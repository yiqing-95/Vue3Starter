<script setup>
import { onMounted } from 'vue';
import {useRoute} from 'vue-router'

// 这里演示 导入｜解构 重命名方法
import {useBanner as useBannerFn} from './composables/banner'
const {items : bannerItems} = useBannerFn()
// 结构给默认值写法，函数形参给默认值写法
// const { queryParams={ pageNum:1, pageSize: 10} } = state

// 组合另一个功能块
import {useCategories} from './composables/categories'
const {items : categoryItems} = useCategories()


const route = useRoute()

onMounted(()=>{
    console.log(route.params)
})

</script>
<template>
    <div class="product-category">
        我是商品分类 页面
    </div>
    <ul>
        <li v-for="(item, index) in bannerItems" :key="index">
            {{ item.name }}
        </li>
    </ul>
    <ul>
        <li v-for="(item, index) in categoryItems" :key="index">
            {{ item.name }}
        </li>
    </ul>
</template>


<style lang="scss" scoped>
.product-category{
    min-height: 200px;
}
</style>