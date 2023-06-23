
<script setup>

import {ref , watch} from 'vue'

// 简单或者复杂类型都可以 ref内部还是依赖reactive函数 
const count = ref(0)

const handleClick = ()=> {
    count.value ++
}


watch(count,(newValue, oldValue)=> {
    console.log('😂')
    console.log(`新值 ${newValue} 老值 ${oldValue} `)
})

// 多源侦听
const msg = ref('hi vue')

watch([msg, count],([newMsg, newCount], [oldMsg, oldCount])=> {
    console.log(` [${newMsg}, ${newCount}] old: [${oldMsg}, ${oldCount}]`)
}
,{
    immediate: true // 这个是未变化前就立即监听的意思 有点 do{}while 的感觉
}
)

// 深度侦听

const state = ref({
    count: 0
})
watch(state,(newValue, oldValue)=> {
    console.log('😂',newValue.count,'--->',oldValue.count)
    console.log(`新值 ${newValue} 老值 ${oldValue} `)
},{
    deep: true // NOTE: 递归监听的 注意性能问题 
})

const handleStateChange = ()=>{
    state.value.count ++ 
}

// 精确侦听某个属性
const info = ref({
    name: 'qing',
    age: 18
})
watch(
    ()=> info.value.age,
    ()=> console.log('又长大了 哎！')

)
setTimeout(()=>{
    info.value.age += 1
}, 3000)

setTimeout(()=>{
    const suffix = Math.round(Math.random()* 10)
    info.value.name = 'some name_'+(suffix.toString())
}, 3000)
</script>

<template>
    <div>
        <button @click="handleClick"> {{count}} </button>

        <h4>测试多源侦听 可以看控制台输出 </h4>
        <input type="text" v-model="msg">

        <h1>深度侦听</h1>
        {{ state }}
        <button @click="handleStateChange">修改状态</button>

        <h3>精确侦听</h3>
        {{ info.name }} => {{ info.age }}
    </div>
</template>



<style lang="scss" scoped>

</style>