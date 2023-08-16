<template>
    <div class="child-box">
        <p>我是子组件</p>
        <slot text="我是子组件" :count="1"></slot>
        <slot name="footer"  key="someValue" ></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>