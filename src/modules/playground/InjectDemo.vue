<script setup>
  import { inject, ref} from 'vue'

    const rootBus = inject('app-state')

    const appStore = inject('app-store')

    const childStore = ref({

    })
    appStore.value['childStore'] = childStore

    const appMethod = inject('app.changeAppName') ;
</script>

<template>
    <div>
        msg from root {{rootBus}}

        <button @click="childStore.value  = {someKey:'someVaule'} ">改变组件某些属性</button>

        <button @click="appMethod('hi from child - app name')">改变app的名字 试试看</button>
    </div>
</template>



<style lang="scss" scoped>

</style>