
<script setup>
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

</script>

<template>
    <div>
        <button @click="counter.increment()">+1</button>
        {{ counter.count }}
        {{ counter.doubleCount }}
        <br>
        <button @click="counter2.increment()">+1</button>
        {{ counter2.count }}
        {{ counter2.doubleCount }}

    </div>
</template>

<style lang="scss" scoped>

</style>