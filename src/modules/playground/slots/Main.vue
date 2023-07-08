<template>
    <div>

        <Child>
            <template v-slot:footer>
                this is footer from main
            </template>
            <template v-slot:header>
                this is header from main
            </template>

            <!-- 默认插槽数据 -->
            data from main
        </Child>
        <Child>
            <template #footer>
                this is footer from main
            </template>
             
            <!-- 默认插槽数据 -->
            data from main
        </Child>

        <ListView>
             <template v-slot="{data}">
                {{ data }}
            </template>
        </ListView>
        <ListView>
             <template #default="{data}">
                {{ data.id }} =>{{ data.name }}
            </template>
        </ListView>

        <DynaSlot></DynaSlot>
    </div>
</template>

<script setup>
import Child from './Child.vue'
import ListView from './ListView.vue'
import DynaSlot from './DynaSlot.vue'

</script>

<style lang="scss" scoped>

</style>