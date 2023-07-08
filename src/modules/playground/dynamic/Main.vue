<script setup>
import Child from './Child.vue'
import Child2 from './Child2.vue'

// const current = ref({
const current = reactive({
  // component: Child
  component:markRaw( Child)
})

const children = [
markRaw(Child),
markRaw(Child2),
markRaw(Child),
];

const radio = ref(3)
const handleChange = (value)=>{
  console.log(value)
  // current.value.component = children[value]
  current.component = children[value]
}
</script>

<template>
  <div>

    <el-radio-group v-model="radio" @change="handleChange">
      <el-radio :label="0">Option A</el-radio>
      <el-radio :label="1">Option B</el-radio>
      <el-radio :label="2">Option A</el-radio>
    </el-radio-group>

    <component :is="current.component"></component>

  </div>
</template>



<style lang="scss" scoped></style>