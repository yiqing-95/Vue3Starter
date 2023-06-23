<script setup>
 import {onMounted} from 'vue'

 import { useBaiduStore } from '~/modules/pinia-demo/store/baidu_search.js'

 const baiduStore = useBaiduStore()

 onMounted(()=> {
    baiduStore.searchItems('vue')
 })
</script>

<template>
    <div>
        <button @click="baiduStore.searchItems('vue') ">search items</button>
        hi baidu result: ...
        <ul>
            <li v-for="item in baiduStore.items" :key="item.id">
              {{ item.id }} >> {{ item.name }}
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>

</style>