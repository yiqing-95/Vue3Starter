
<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount , onUnmounted } from 'vue';

 const msg = ref('life circle demo')

 console.log('onBeforeCreated| setup')

 // 可以请求接口
 onBeforeMount(() => {
   console.log('onBeforeMount ') 
 })
 onBeforeMount(() => {
   console.log('onBeforeMount 2') 
 })

 // 可以获取dom啦
 onMounted(()=>{
    console.log('onMounted', document.getElementById('msg_container')) 
 })

 onBeforeUpdate(()=>{
    console.log('onBeforeUpdate')
    console.log('old: ', msg.value)
 })

 onUpdated(() => {
    console.log('onUpdated')
    console.log('new: ' , msg.value)
 })

 onBeforeUnmount(() => {
   console.log("onBeforeUnmount") 
 })

 onUnmounted(() => {
    console.log('onUnmounted')
 })

 setTimeout(()=>{
    msg.value = 'update it'
 },3000)

// 为了理解生命周期 可以想象一个当兵的的一生：
// 出生 上战场前 上战场后  重复变化：[负伤前 负伤]+ 下战场前 下战场后
</script>

<template>
    <div>
        <h3>控制台看生命周期变化情况</h3>

        <p id="msg_container">
           {{ msg }}

        </p>
        <router-link to="jsx-demo"> 跳转看生命周期</router-link>
    </div>
</template>


