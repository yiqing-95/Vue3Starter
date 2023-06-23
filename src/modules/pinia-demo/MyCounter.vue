
<script setup>
    import { storeToRefs } from 'pinia'

    import { useCounterStore , useCounterStore2} from '~/modules/pinia-demo/store/counter.js'

    const counter = useCounterStore()
    counter.count = 1

    setTimeout(()=> {
        counter.count ++

        counter.increment()

        counter.$patch({
            counter: counter.count +3
        })

    }, 5000)

    const counter2 = useCounterStore2()

    // 直接解构count
    // NOTE 坑爹的是 方法如果解构 又可以直接解 不需要toRefs 😂
    const {count} = storeToRefs(counter) // 只针对 state和getters 
    const {increment} = counter

</script>

<template>
    <div>
        <button @click="counter.increment()">+1</button>
        {{ counter.count }}
        {{ counter.doubleCount }}
        // 直接使用解构后的数据
        {{ count }}
        <button @click="increment()">+1</button>
        <br>
        <button @click="counter2.increment()">+1</button>
        {{ counter2.count }}
        {{ counter2.doubleCount }}

    </div>
</template>

<style lang="scss" scoped>

</style>