<script  setup>
import { reactive, ref } from 'vue'

import DialogForm from './_form.vue'

const dialogFormRef = ref()


const openDialog = () => {
     
    dialogFormRef.value.openDialog()
    

}
// 导出方法
defineExpose({
    openDialog
})

const emit = defineEmits([
    'on-saved'
])

const handleSave = ()=>{

    // 通知父组件更新完毕
    emit('on-saved', {})
}
</script>

<template>
    <!-- Form -->
   <DialogForm ref="dialogFormRef" :isEdit="false" title="创建用户"></DialogForm>
    
</template>
  
 
<style scoped>

</style>
  