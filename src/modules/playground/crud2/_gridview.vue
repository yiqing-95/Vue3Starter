<script setup>
    import {inject} from 'vue'

    let dataProvider = inject('dataProvider')

    console.log('[gridview]:', dataProvider)

</script>

<template>
    <div>
        gridview
        attributes: {{ $attrs }}
    </div>
</template>



<style lang="scss" scoped>

</style>