
<script setup>
let userObj = reactive({
    name:'qing',
    age: 18
})

let {name, age}  = toRefs(userObj)

const handleClick = ()=>{
    age.value++ 
}

</script>

<template>
    <div>
        <h4>to refs 示例</h4>

        {{ name }}
        {{ age }}
        <button @click="handleClick">++age</button>
    </div>
</template>
 