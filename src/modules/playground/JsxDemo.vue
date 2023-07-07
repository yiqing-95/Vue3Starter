<script setup>
  import HiJsx from '@/modules/jsx-demo/hello-jsx' ;
  import FooSlots from '@/modules/jsx-demo/FooSlots' ;
  import FooSlots2 from '@/modules/jsx-demo/FooSlots2' ;
  import FooScopedSlots from '@/modules/jsx-demo/FooScopedSlots' ;
  import MyJsx from '@/modules/jsx-demo/MyJsx.vue' ;

</script>

<template>
    <div>
        Foo Component
        <HiJsx></HiJsx>
        <MyJsx></MyJsx>
        <FooSlots></FooSlots>
        <FooSlots2></FooSlots2>
        <FooScopedSlots></FooScopedSlots>
    </div>
</template>



<style lang="scss" scoped>

</style>