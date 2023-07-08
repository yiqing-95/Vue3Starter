<script setup>
  import Child from './Child.vue'

</script>

<template>
    <!-- 顺序有关么 有人说放后面 -->
    <Child></Child>
    <div>
        
        <h4>teleports</h4>
        <div class="container">
            some content here
        </div>
        <div id="some_id">
            
        </div>
        
    </div>
</template>



<style lang="scss" scoped>

</style>