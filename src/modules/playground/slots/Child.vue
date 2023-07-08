<template>
    <div>
        child component
        <header>
            <slot name="header">默认标题</slot>
        </header>

        <div>
            内容区域
            <slot></slot>
        </div>

        <footer>
            <slot name="footer">默认页脚</slot>
        </footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>