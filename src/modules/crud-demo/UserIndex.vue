<script setup>
import { ref, onMounted } from 'vue'

import Edit from './Edit.vue'

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
    // 2. 改状态 真实场景 用api的返回值给这里重新赋值即可
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

onMounted(() => {
    loadItems()
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

</script>

<template>
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
</style>