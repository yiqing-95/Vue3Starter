<template>
    <div>
        <h4>{{ title }}</h4>
        <h6>{{ subTitle }}</h6>
        <div>
            内容
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps(
    {
        title:{
            type: String,
            default: '标题'
        },
        subTitle:{
            type: String
            ,default: '副标题'
        }
    }
)
</script>

<style lang="scss" scoped>

</style>