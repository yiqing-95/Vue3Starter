<script setup>
  import {inject} from 'vue'

    const num = inject('app.num')
    const incNum = inject('app.incNum')
    
</script>

<template>
    <div>
        <h3>A component</h3>
        <p>
            num from root component: {{  num }}
            <button @click="incNum">++ num of root component</button>
        </p>
    </div>
</template>


 
<style lang="scss" scoped>

</style>