<script  setup>
import { reactive, ref , nextTick} from 'vue'
import DialogForm from './_form.vue'


const dialogFormRef = ref()


const openDialog = (data) => {
    console.log(data)

    // api获取数据 或者用传递过来的数据填充表单数据
    // 这里要做数据对考 不然会引起级联反应
    //  [JavaScript对象的拷贝](https://www.jianshu.com/p/a615efed434a)
    // form = data

    dialogFormRef.value.openDialog()

    nextTick(()=>{
        // Object.assign(dialogFormRef.value.form.value, data)
        Object.assign(dialogFormRef.value.form, data)
        alert('why')
    })

}
// 导出方法
defineExpose({
    openDialog
})

const emit = defineEmits([
    'on-saved'
])

const handleSave = () => {

    // 通知父组件更新完毕
    emit('on-saved', {})
}
</script>

<template>
    <!-- Form -->
    <DialogForm ref="dialogFormRef" :isEdit="true" title="修改用户"></DialogForm>
</template>
  
 
<style scoped></style>
  