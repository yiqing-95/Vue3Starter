<script setup>
import { ref, onMounted, getCurrentInstance ,toRaw} from 'vue'
// NOTE: 如果是按需引入的组件 需要引入对应的css才能显示样式哦
import { ElMessage, ElMessageBox } from 'element-plus'

import dayjs from 'dayjs'

// 引入图标
import {
    Check,
    Delete,
    //   Edit,
    Message,
    Search,
    Star,
    Plus
} from '@element-plus/icons-vue'


import FormDialog from './FormDialog.vue'

// TODO: 这里缺少搜索🔍表单的实现


const mockTableData = [
    {
        id: 1,
        date: '2016-05-03',
        name: 'Tom1',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        id: 2,
        date: '2016-05-02',
        name: 'Tom2',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        id: 3,
        date: '2016-05-04',
        name: 'Tom3',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },


];

const items = ref(
    [
        {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Home',
        },
    ])
const loadItems = async () => {
    // 1.调用接口 
    // 2. 改状态 真实场景 用api的返回值给这里重新赋值即可 最好是对原对象进行push 不然改变了其响应式特点 ｜⚠️存疑！ 可以都试试 有人就直接改原值
    // items.value.push({
    //     date: '2016-05-02',
    //     name: 'Tom',
    //     state: 'California',
    //     city: 'Los Angeles',
    //     address: 'No. 189, Grove St, Los Angeles',
    //     zip: 'CA 90036',
    //     tag: 'Office',
    // })
    items.value = mockTableData
}

const app = getCurrentInstance()
// console.log('[user-index]:', app) // 可以看下当前vue实例对象
onMounted(() => {
    loadItems()
    // TODO: api引入 可以使用局部 也可以使用全局挂载方式 还可以用依赖注入的方式 provide/inject 
    // 全局需要先注册到 app.config.globalProperties 对象上 属性名称一般可以为api 用到的时候 需要从vue包中引入 getCurrentInstance
})

const handleDelete = async (id) => {
    ElMessageBox.confirm(
        '确定删除该项数据?',
        'Warning',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
        }
    )
        .then(() => {
            // TODO: 这里调用后台api接口做真删除
            // alert(id)
            // 异步调用接口
            items.value = items.value.filter((item) => item.id != id)
            // 调用刷新方法 刷新是要刷当前页 当前搜索条件下的数据 并非只是跳到第一页哦😯 所以搜索条件也要传递过去
            // 后端一般会处理删除页码范围问题 比如当前页最后一条数据删除后重新加载数据实际上会是前一页数据 或者第一页数据
            // loadItems()

            ElMessage({
                type: 'success',
                message: 'Delete completed',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled',
            })
        })

}


const dialogRef = ref(null)
const isEdit = ref(false)
const dialogTitle = ref('创建')
/**  ## 创建功能 */
const handleCreate = async () => {
    // alert('creating')
    isEdit.value = false
    dialogTitle.value = '创建'

    dialogRef.value.openDialog()
    // 回填数据 || 调用接口
    
}

const handleEdit = async (item) => {
    // alert(item.id)
    isEdit.value = true
    dialogTitle.value = '修改'


    dialogRef.value.openDialog(item)
    // 回填数据 || 调用接口

    // dialogRef.value.setForm  Model(item)
}

const handleSave = async ({isEidt, form})=>{
    console.log('[handle-save]:',isEdit)
    console.log('[handle-save]2:',form)
    console.log('[handle-save]2:',toRaw(form))
    // let form = toRaw

    if(isEdit.value){
        // 更新对象

        // 1. 获取当前索引
        let index = items.value.findIndex(item=>{
            // console.log('---',item.id, form.id)
           return item.id === form.id
        })
        console.log('[handle-save][edit]:',index)
        // items.value[index] = {...toRaw(form)}
        items.value[index] = {...form}

    }else{
        console.log('[handel-save]')
        // 新建对象
        let maxId = 0
        items.value.forEach(element => {
            if(element.id> maxId){
                maxId = element.id
            }
        })
        console.log('[max-id]:', maxId)
        form.id = maxId+1

        let rawForm = toRaw(form)
        rawForm.date = dayjs(rawForm.date).format('YYYY-MM-DD')
        console.log('[new-data]:',rawForm)
        // items.value.push(rawForm)
        items.value.push({...rawForm})
        console.log('[table-data:]',items.value)
        
    }

}


// === 分页逻辑

const currentPage = ref(4)

const pageSize = ref(100)

const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}

// # === 搜索逻辑 ===

// FIXME: 这个是例子抄来的 暂时用不到了
const formInline = reactive({
    user: '',
    region: '',
    date: '',
})
const searchForm = ref({
    name: '',
    state: '',
    date: '',
    city: 'Los Angeles',
})

const onSubmit = () => {
    console.log('[search]:', searchForm.value)
    const searchData = searchForm.value 

    if(searchData.name.length > 0){
        
        // 在当前数据集合中过滤
        items.value = items.value.filter(item=>{
            return item.name.match(searchData.name)
        })
    }else{
        loadItems()
    }
}

// [vue3+element-plus 弹框表单重置(resetFields)失效、无效解决](https://blog.csdn.net/qq_42071369/article/details/127297117)
// [Vue3 | Element Plus resetFields不生效](https://blog.csdn.net/yimtcode/article/details/131034203)
// [Vue Element Form表单 resetFields重置无效](https://blog.csdn.net/hdhsZero/article/details/124893542)
const formRef = ref(null)
const resetForm = (formEl) => {
    alert('hi reset form')
    if (!formEl) return

    //   alert('ok!?')
    // 在编辑时 重置表单的问题： 先打开dailog 再延迟传值（ 延迟是指在nextTick中做就好） 所谓的重置是设置为第一次的绑定值 
    // 子组件也可以在关闭时做
    formEl.resetFields()
}



/** ##  多选功能 */
// const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleTableRef = ref()
// const multipleSelection = ref<User[]>([])
const multipleSelection = ref([])
const toggleSelection = (rows) => {
    if (rows) {
        rows.forEach((row) => {
            multipleTableRef.value.toggleRowSelection(row, undefined)
        })
    } else {
        multipleTableRef.value.clearSelection()
    }
}
const handleSelectionChange = (val) => {
    // multipleSelection.value = val
    // console.log('[handleSelectionChange]:' ,val)
    let ids = []
    val.forEach((item,idx)=>{
        ids.push(item.id)
    })
    multipleSelection.value = ids
    // console.log('[handleSelectionChange]:' , multipleSelection.value )
}

const handleDeleteSelection = ()=>{
    ElMessageBox.confirm(
        '确定删除所选数据?',
        'Warning',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
        }
    )
        .then(() => {
            // TODO: 这里调用后台api接口做真删除
            // alert(id)
            // 异步调用接口

            /** ## 遍历删除 */
            multipleSelection.value.forEach(id => {
                items.value = items.value.filter((item) => item.id != id)
            })
            multipleSelection.value = [] // 清空当前多选
           
            // 调用刷新方法 刷新是要刷当前页 当前搜索条件下的数据 并非只是跳到第一页哦😯 所以搜索条件也要传递过去
            // 后端一般会处理删除页码范围问题 比如当前页最后一条数据删除后重新加载数据实际上会是前一页数据 或者第一页数据
            // loadItems()

            ElMessage({
                type: 'success',
                message: 'Delete completed',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled',
            })
        })
}

</script>

<template>
    <el-row :gutter="10">
        <el-form :inline="true" :model="searchForm" class="demo-form-inline" ref="formRef">
            <el-form-item label="name" prop="name">
                <el-input v-model="searchForm.name" placeholder="用户名" clearable />
            </el-form-item>
            <el-form-item label="city" prop="city">
                <el-select v-model="searchForm.city" placeholder="城市" clearable>
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time" prop="date">
                <el-date-picker v-model="searchForm.date" type="date" placeholder="Pick a date" clearable />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
                <el-button @click="resetForm(formRef)">Reset</el-button>
            </el-form-item>
        </el-form>

    </el-row>

    <el-row :gutter="5">
        <el-col :span="16">
            <!-- 可以选择使用router-link 或者事件方式 -->
            <el-button type="primary" :icon="Plus" @click="handleCreate"> 添加</el-button>
            <el-button type="danger" :icon="Delete" @click="handleDeleteSelection" v-if="multipleSelection.length > 0 ">删除多选</el-button>
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </el-col>
    </el-row>
    <el-row :gutter="10">
        <el-col :span="24">

            <el-table ref="multipleTableRef" :data="items" style="" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" />
                <el-table-column fixed prop="date" label="Date" width="150" />
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column prop="state" label="State" width="120" />
                <el-table-column prop="city" label="City" width="120" />
                <el-table-column prop="address" label="Address" width="120" />
                <el-table-column prop="zip" label="Zip" width="120" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default="{ row }">
                        <el-button link type="primary" size="small" @click="()=>{}">Detail</el-button>
                        <el-button link type="primary" size="small" @click="handleEdit(row)">Edit</el-button>
                        <el-button link type="danger" size="small" @click="handleDelete(row.id)">delete</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </el-col>

        <div class="pagination-block">
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
                layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>

    </el-row>

    <div>

    </div>

    <FormDialog ref="dialogRef" :isEdit="isEdit" :title="dialogTitle" @on-saved="handleSave"></FormDialog>
</template>



<style lang="scss" scoped>
.pagination-block {
    margin-top: 10px;
}


.demo-form-inline .el-input {
    --el-input-width: 220px;
}
</style>