<script setup>
// import {defineProps} from 'vue' // 编译器宏不需要导入

const props = defineProps({
    model:{
        type: Object,
        default: {}
    }
})

console.log(props)
// 解构出模型数据
const {model} = toRefs(props)
setTimeout(()=>{
    // 动态添加属性
    model.value.hobby = 'game' 
}, 2000)

// 定义事件
let emit = defineEmits([
    'modelChanged'
])
const handleClick = ()=>{
    model.value.age ++ 
    emit('modelChanged',{
        value: 'some data from view component',
        userAge: model.value.age,
    })
}

</script>

<template>
    <div>
        {{ model }}
        <button @click="handleClick"> click me </button>
    </div>
</template>


<style lang="scss" scoped></style>