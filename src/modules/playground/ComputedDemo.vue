
<script setup>
import {ref , computed} from 'vue'

// 简单或者复杂类型都可以 ref内部还是依赖reactive函数 
const state = ref([
    1,2,3,4,5,6,7,8
])

 const computedState = computed(()=>{
    return state.value.filter(item=> item>2)
 })

 const handleAdd = () => {
    state.value.push(10,100)
 }

 const name = ref('')
 const nameLen = computed(()=>{
    return name.value.length 
 })
 let changeName = computed({
    get(){
        return name.value
    },
    set(val){
        // 计算属性可以修改的情况比较少见 基本都是get型的
        name.value = val
    }
 })

</script>

<template>
    <div>
        <button @click=" handleAdd ">添加</button>
       <h5>原始： {{ state }}</h5>
       <h5>计算: {{ computedState }}</h5>
       
       输入名字看看效果
       <input type="text" name="name" v-model="name">
       <p>
        your name: {{ name }}
        <br>
        length of name: {{ nameLen }}
        <br>
        <input type="text" name="name" v-model="changeName">
       </p>
    </div>
</template>



<style lang="scss" scoped>

</style>