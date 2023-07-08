<script setup>
  import A from './A.vue'
  import B from './B.vue'

    let num = ref(100)
    provide('app.num', num)
    provide('app.incNum',()=> num.value++)
</script>

<template>
    <div>
        <h2>this is Main page</h2>
        <A></A>
        <hr>
        <B></B>

    </div>
</template>



<style lang="scss" scoped>

</style>