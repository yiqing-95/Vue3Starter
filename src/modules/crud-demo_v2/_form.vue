<script  setup>
import { reactive, ref ,toRefs} from 'vue'

// https://element-plus.org/zh-CN/component/dialog.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9

// props 默认是响应式的 
const props = defineProps({
    title: String,
    isEdit: {
        type: Boolean,
        default: false,
    },
    // form: {
    //     type: Object,
    //     default: {

    //     }
    // }

  })

// const isEdit = ref(false) // 表单模式 是否为编辑模式 false表示创建模式
// const title = toRef(props,'title') toRef是对传入属性的引用 而ref是数据拷贝
const {isEdit} = toRefs(props) // 如果解构会取消其响应式 所以需要重新转化为响应式

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const formRef = ref()

// const form = ref({...})
// const form = reactive({
let form = reactive({
    // id: 2,
    date: '', //'2016-05-02',
    name: '', // 'Tom',
    state: '', // 'California',
    city: '', // 'Los Angeles',
    address: '', //'No. 189, Grove St, Los Angeles',
    zip: '', // 'CA 90036',
    tag: '', // 'Office',
})

const openDialog = () => {

    // api获取数据 或者用传递过来的数据填充表单数据
    // 这里要做数据对考 不然会引起级联反应
    //  [JavaScript对象的拷贝](https://www.jianshu.com/p/a615efed434a)
    // form = data

    dialogFormVisible.value = true

}
// 导出方法
defineExpose({
    openDialog,
    form,
})

const emit = defineEmits([
    'on-saved',
    'onCreated',
])

const handleSave = () => {

    // 接口调用 把用户当下修改后的数据传递到后端去 await api.xxxpost|put form

    // 关闭对话框 
    dialogFormVisible.value = false

    console.log(form)
    // 通知父组件更新完毕
    emit('on-saved', {})
}

const resetForm = (formEl) => {
    if (!formEl) return
    alert('reset begin')
  formEl.resetFields()
  alert('reseted!')
}
</script>

<template>
    <!-- Form -->
    <el-button text @click="dialogFormVisible = true" @close="handelClose">
        open a Form nested Dialog
    </el-button>

    <el-dialog v-model="dialogFormVisible" :title="props.title" @close="handelClose">
        <el-form :model="form" ref="formRef">

            <el-form-item prop="name" label="name" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>

            <el-form-item prop="date" label="date" :label-width="formLabelWidth">
                <!-- <el-col :span="6"> -->
                <el-col>
                    <el-date-picker v-model="form.date" type="date" placeholder="Pick a date" style="width: 100%" />
                </el-col>
            </el-form-item>

            <el-form-item prop="state" label="state" :label-width="formLabelWidth">
                <el-select v-model="form.state" placeholder="please select your state">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>

            <el-form-item prop="city" label="city" :label-width="formLabelWidth">
                <el-select v-model="form.city" placeholder="please select your city">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>

            <el-form-item prop="address" label="address" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off" />
            </el-form-item>

            <el-form-item prop="zip" label="zip" :label-width="formLabelWidth">
                <el-input v-model="form.zip" autocomplete="off" />
            </el-form-item>

            <el-form-item prop="tag" label="tag" :label-width="formLabelWidth">
                <el-input v-model="form.tag" autocomplete="off" />
            </el-form-item>

        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="handleSave()">
                    Confirm
                </el-button>
                <el-button @click="resetForm(formRef)">Reset</el-button>
            </span>
        </template>

    </el-dialog>
</template>
  
 
<style scoped>
.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
  