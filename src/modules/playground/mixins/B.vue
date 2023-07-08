        
<script setup>
    import mixin from './mixin'

        console.log(mixin())

        let {fav, favBtn, num} = mixin()
</script>
<template>
    <div>
        <h3>B 组件</h3>
        {{ num }}
        <button @click="favBtn">{{ 
            fav ? '收藏中...' : '收藏'
        }}</button>
    </div>
</template>

<style lang="scss" scoped>

</style>