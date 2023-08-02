<template>
    <div>
        <h3>crud index</h3>

        <a @click="changeListType('listView')" :class="{active: true}"> list-view</a>
        <a @click="changeListType('gridView')" :class="{active: true}"> grid-view</a>

        <keep-alive>
            <component :is="listType" key="123"></component>
        </keep-alive>

        
    </div>
</template>

<script setup>
import GridView from './_gridview.vue'
import ListView from './_listview.vue'

const listType = ref(markRaw(GridView))
const changeListType = (tpy) =>{
    if (tpy == 'listView'){
        listType.value = markRaw(ListView)
    }else{
        listType.value = markRaw(GridView)

    }
}

</script>

<style lang="scss" scoped>

</style>