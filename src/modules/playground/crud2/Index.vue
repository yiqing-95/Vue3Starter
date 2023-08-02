<template>
    <div>
        <h3>crud index view</h3>

        <a @click="changeListType('listView')" :class="{active: true}"> list-view</a>
        <a @click="changeListType('gridView')" :class="{active: true}"> grid-view</a>

        <keep-alive>
            <component :is="listType" ></component>
        </keep-alive>

        
    </div>
</template>

<script setup>
import eventBus from './eventBus'

import { shallowRef, ref } from 'vue'
import GridView from './_gridview.vue'
import ListView from './_listview.vue'

// http://ww.qdxiaochuan.com/?id=629
// 这是因为reactive 会进行proxy 代理 而我们组件代理之后毫无用处 节省性能开销 推荐我们使用shallowRef 或者  markRaw 跳过proxy 代理
const listType =shallowRef(GridView)
const changeListType = (tpy) =>{
    if (tpy == 'listView'){
        listType.value = ListView
    }else{
        listType.value = GridView

    }
}

eventBus.$emit('data', {key:'valuex'})

</script>

<style lang="scss" scoped>

</style>