<script setup>

import { useAttrs } from 'vue'
import { inject } from 'vue'

let dataProvider = inject('dataProvider')

console.log('[listview]:', dataProvider)

const attrs = useAttrs()


</script>

<template>
    <div>
        list view
        attributes: {{ $attrs }}
        {{ attrs }}
        parent: {{ $parent }}
    </div>
</template>



<style lang="scss" scoped></style>