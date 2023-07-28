<script setup>
import { ref, onMounted ,getCurrentInstance} from 'vue'

import Edit from './Edit.vue'

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
    alert(id)
    // 异步调用接口
    items.value = items.value.filter((item) => item.id != id)
    // 调用刷新方法
    // loadItems()
}

const editRef = ref(null)
const handleEdit = async (item) => {
    alert(item.id)

    editRef.value.openDialog(item)
    // 回填数据 || 调用接口

}

// === 分页逻辑

const currentPage = ref(4)
 
const pageSize4 = ref(100)

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

// FIXME: 这个是例子抄来的 暂时用到的
const formInline = reactive({
  user: '',
  region: '',
  date: '',
})
const searchForm = reactive({
  name: '',
  state: '', 
  date: '',
  city: 'Los Angeles',
})

const onSubmit = () => {
  console.log('submit!')
}

</script>

<template>
      <el-row :gutter="10">
        <el-form :inline="true" :model="searchForm" class="demo-form-inline">
       <el-form-item label="name">
         <el-input v-model="searchForm.name" placeholder="用户名" clearable />
       </el-form-item>
       <el-form-item label="city">
         <el-select
           v-model="searchForm.city"
           placeholder="城市"
           clearable
         >
           <el-option label="Zone one" value="shanghai" />
           <el-option label="Zone two" value="beijing" />
         </el-select>
       </el-form-item>
       <el-form-item label="Activity time">
         <el-date-picker
           v-model="searchForm.date"
           type="date"
           placeholder="Pick a date"
           clearable
         />
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="onSubmit">Query</el-button>
       </el-form-item>
     </el-form>
    
    </el-row>

    <el-row :gutter="10">
        <el-col :span="24">

            <el-table :data="items" style="">
                <el-table-column fixed prop="date" label="Date" width="150" />
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column prop="state" label="State" width="120" />
                <el-table-column prop="city" label="City" width="120" />
                <el-table-column prop="address" label="Address" width="120" />
                <el-table-column prop="zip" label="Zip" width="120" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default="{ row }">
                        <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                        <el-button link type="primary" size="small" @click="handleEdit(row)">Edit</el-button>
                        <el-button link type="danger" size="small" @click="handleDelete(row.id)">delete</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </el-col>

        <div class="pagination-block">
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
                :small="small" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
                :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>

    </el-row>

    <div>

    </div>

    <Edit ref="editRef" @on-saved="loadItems()"></Edit>
</template>



<style lang="scss" scoped>
.pagination-block {
  margin-top: 10px;
}


.demo-form-inline .el-input {
  --el-input-width: 220px;
}

</style>