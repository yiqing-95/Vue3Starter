<template>
    <div>
        <Child1 v-slot="slotProps">
            <div>{{ slotProps.text }}---{{ slotProps.count }}</div>
        </Child1>
        <Child1 v-slot="{text,count}">
            <div>{{ text }}---{{  count }}</div>
        </Child1>
        <Child1 #="{text,count}">
            <div>{{ text }}---{{  count }}</div>
        </Child1>
        <Child1 #footer="{key}">
            <div>{{  key }}</div>
        </Child1>
    </div>
</template>

<script setup>
import Child1 from './Child1.vue'

</script>

<style lang="scss" scoped></style>