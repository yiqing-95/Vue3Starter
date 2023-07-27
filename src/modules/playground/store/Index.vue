        
<script setup>
import { storeToRefs} from 'pinia'
     import {playStore} from './index'

     const store = playStore()
     console.log('[play-store]:', store)

     const {
            count ,
            incCount,
             num ,
             sum,
        }   = storeToRefs(store)
        // pinia中直接修改数据？？😄
        const handleClick = ()=>{
            count.value++

            // 批更
            store.$patch(state=>{
                state.count ++
                state.num ++
            })
        }
        const handleClick2 = ()=>{
            store.updateNum(3) ;
        }

        const handleReset= () =>{
            store.$reset()
        }
</script>
<template>
    <div>
        <h3>sotre index</h3>

        {{  count }}
        <br>
        {{  num }}
        <br>
        计算属性😄
        {{  sum }}|
        {{  sum }}|
        {{  sum }}|
        {{  sum }}|
        <br>
        <button @click="handleClick">count ++</button>
         
        <button @click="handleClick2">count ++</button>
        <button @click="handleReset">reset </button>
    </div>
</template>

<style lang="scss" scoped>

</style>