<script setup>
// import {defineProps} from 'vue' // 编译器宏不需要导入

import emitter from '@/plugins/Bus.js'

onBeforeMount(() => {
    emitter.on('crud-create',(e )=>{
        console.log(e) 
    })
})

const props = defineProps({
    model:{
        type: Object,
        default: {}
    },
    msg: {
        type: String,
        default: "",
    }
})
const {msg} = toRefs(props)

console.log(props)
// 解构出模型数据
const {model} = toRefs(props)
setTimeout(()=>{
    // 动态添加属性
    model.value.hobby = 'game' 
}, 2000)

// 定义事件
let emit = defineEmits([
    'modelChanged',
    'update:msg' // 这个用来应对父组件的v-model绑定
])
const handleClick = ()=>{
    model.value.age ++ 
    emit('modelChanged',{
        value: 'some data from view component',
        userAge: model.value.age,
    })
}

const handleChange = (event)=>{
    emit('update:msg',event.target.value)
    console.log(event)
}

</script>

<template>
    <div>
        {{ model }}
        <button @click="handleClick"> click me </button>

        <input type="text" v-on:input="handleChange" :value="msg"/>
    </div>
</template>


<style lang="scss" scoped></style>