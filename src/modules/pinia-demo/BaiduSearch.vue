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
        hi baidu result: ...
    </div>
</template>


<style lang="scss" scoped>

</style>