<script  lang="jsx" setup>
import { reactive, ref, toRefs, nextTick } from 'vue'
import dayjs from 'dayjs'

// @see https://blog.csdn.net/weixin_45291937/article/details/125523244
// @see https://gitee.com/zhfyjeremy/vue3-vite-ts-template/tree/master/src/components

// import {
//   ElButton,
//   ElIcon,
//   ElTag,
//   ElTooltip,
//   TableV2FixedDir,
// } from 'element-plus'
import { Timer } from '@element-plus/icons-vue'
// import { MyTableColumn } from './components/TableColumn.vue'
import DetailTable from './components/DetailTable.vue'



const attributes = ref([
  "id",
  'date',
  'name',
  'state',
  'city',
  'address',
  'zip',
  {
    prop: 'tag',
    label: '就是tag呀😂',
  } ,
  'tag',
  {
    id: 0,
    prop: "date",
    // width: "140",
    align: "left",
    label: "常规名称长字段",
    render: ({ row, index }) => {
      return <ElTag>{row.value}</ElTag>;
    },
  },

  {
    id: 3,
    prop: "name",
    // width: "100",
    align: "left",
    label: "合同编号",
    render1: ({ row, index }) => {
      return <div style="background:red;  ">{row.value}万 {index}</div>;
    },
  },
  {
    id: 3,
    prop: "_not_exist",
    // width: "100",
    align: "left",
    label: "粥",
    render: ({ row, index }) => {
      return <div style="background:red;  "> 州？ {row.state}  {index}</div>;
    },
  },
  {
    id: 4,
    prop: "operation",
    width: "150",
    align: "left",
    label: "操作",
    type: "slot",
    formatter: (row, column, cellValue, index) => {
      //编辑按钮事件
      const handleEdit = (val) => {
        console.log('row', row);
        console.log('column', column);
        console.log('cellValue', cellValue);
        console.log('index', index);
        // console.log('val',val);
        alert(val.contractName);
      };
      //删除按钮事件
      const handleDelete = (val) => {
        console.log('row', row);
        console.log('column', column);
        console.log('cellValue', cellValue);
        console.log('index', index);
        console.log('row', row);
        // console.log('val',val);
        alert(val.contractName);
      };
      return (
        <div>
          <el-button
            type="primary"
            size="small"
            onClick={() => {
              handleEdit(row, column, cellValue, index);
            }}
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            size="small"
            onClick={() => {
              handleDelete(row, column, cellValue, index);
            }}
          >
            删除
          </el-button>
        </div>
      );
    },
  },


]);


// prop is the key
const getAttribute = (prop) => {
  console.log("[getAttribute]:", prop)
  const result = attributes.value.find(item => { return item.prop == prop })
  console.log(result)
  return result
}
const getAttributeByIndex = (idx) => {
  console.log("[getAttributeByIndex]:", idx)
  const result = attributes.value[idx]
  console.log(result)
  return result
}

//表格数据的key键名要和attributes中的prop保持一致
const tableData = ref([
  {
    "id": "1",
    "contractName": "医院设备1",
    "contractDate": "2023-01-30 14:44:19",
    "contractAmout": "50000",
    "contractNum": "1",
  },
  {
    "id": "2",
    "contractName": "医院设备2",
    "contractDate": "2023-01-29 14:44:19",
    "contractAmout": "30000",
    "contractNum": "2",
  },
  {
    "id": "3",
    "contractName": "医院设备3",
    "contractDate": "2023-01-28 15:44:19",
    "contractAmout": "75000",
    "contractNum": "3",
  },
  {
    "id": "4",
    "contractName": "医院设备4",
    "contractDate": "2023-01-27 15:44:19",
    "contractAmout": "80000",
    "contractNum": "4",
  },
  {
    "id": "5",
    "contractName": "医院设备5",
    "contractDate": "2023-01-26 15:44:19",
    "contractAmout": "80000",
    "contractNum": "5",
  },
  {
    "id": "6",
    "contractName": "医院设备6",
    "contractDate": "2023-01-25 15:44:19",
    "contractAmout": "80000",
    "contractNum": "6",
  },
  {
    "id": "7",
    "contractName": "医院设备7",
    "contractDate": "2023-01-24 15:44:19",
    "contractAmout": "80000",
    "contractNum": "7",
  },
  {
    "id": "8",
    "contractName": "医院设备8",
    "contractDate": "2023-01-23 15:44:19",
    "contractAmout": "80000",
    "contractNum": "8",
  },
  {
    "id": "9",
    "contractName": "医院设备9",
    "contractDate": "2023-01-22 15:44:19",
    "contractAmout": "80000",
    "contractNum": "9",
  },
  {
    "id": "10",
    "contractName": "医院设备10",
    "contractDate": "2023-01-21 15:44:19",
    "contractAmout": "80000",
    "contractNum": "10",
  }
]);



const columns = [
  //   {
  //     key: 'date',
  //     title: 'Date',
  //     dataKey: 'date',
  //     width: 150,
  //     fixed: TableV2FixedDir.LEFT,
  //     cellRenderer: ({ cellData: date }) => (
  //       <ElTooltip content={dayjs(date).format('YYYY/MM/DD')}>
  //         {
  //           <span class="flex items-center">
  //             <ElIcon class="mr-3">
  //               <Timer />
  //             </ElIcon>
  //             {dayjs(date).format('YYYY/MM/DD')}
  //           </span>
  //         }
  //       </ElTooltip>
  //     ),
  //   },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <ElTag>{name}</ElTag>,
  },
  {
    key: 'value',
    title: '值',
    dataKey: 'value',
    meta: {

    },
    cellRenderer: (obj) => {
      console.log('[cellRender]:', obj)
      const { cellData } = obj
      return (<p> {cellData} </p>)

    },
    width: 150,
    align: 'center',
  },
]

const data = ref([])



/** ## helper func ============ */


// https://element-plus.org/zh-CN/component/dialog.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9

// props 默认是响应式的 
const props = defineProps({
  title: String,
})



const dialogVisible = ref(false)
const openDialog = (row) => {

  dialogVisible.value = true

  if (row) {

    nextTick(() => {

      let result = []
      /** 
      Object.entries(row).forEach(item => {
        result.push({
          name: item[0],
          value: item[1],
        })
      })
      */
      result = attributes.value.map((currentAttribute, index, arr) => {
        // 允许只给一个属性
        if (typeof currentAttribute == 'string') {
          currentAttribute = {
            prop: currentAttribute,
          }
        }

        if (currentAttribute.prop && row[currentAttribute.prop]) {
          // 存在prop属性 且row中有值
          return {
            name: currentAttribute.label || currentAttribute.prop,
            value: row[currentAttribute.prop],
          };
        }
        // return currentAttribute ;
        // return row ;
        return {
          name: currentAttribute.label || currentAttribute.prop,
          value: row,
        };
      })

      data.value = result
      console.log('[open::::]', result)
    })
  }

}


// 导出方法
defineExpose({
  openDialog,


})


const handleBeforeClose = (done) => {
  done()
  // ElMessageBox.confirm('Are you sure to close this dialog?')
  //     .then(() => {
  //         done()
  //     })
  //     .catch(() => {
  //         // catch error
  //     })
}
const handleClose = () => {


}
const handleCancel = (formEl) => {
  dialogVisible.value = false // 视图层赋值不需要.value!😺
}

const detailTableRef = ref()

</script>

<template>
  <!-- FIXME: v2版本的表单 如果有滚动条 滚动时就会触发表单数据的加载！ -->
  <el-dialog v-model="dialogVisible" :title="props.title" @close="handleClose" :before-close="handleBeforeClose">
    <!--       
        <el-table-v2
    :columns="columns"
    :data="data"
    :width="300"
    :height="400"
    fixed
  /> 
  <DetailTable
      ref="detailTableRef"
      :attributes="attributes"
      :tableData="tableData"
    >
</DetailTable>
-->

    <el-table :data="data" style="width: 100%">
      <el-table-column prop="name" label="Name" width="180">
        <template #default="{ row, column, $index }">
          <el-text class="mx-1" type="primary" tag="b">
            {{ row.name }}
          </el-text>
          <h2>
            <em>
              {{ row.name }}
            </em>

          </h2>

        </template>
      </el-table-column>
      <el-table-column prop="value" label="Value" width="180">
        <template #default="{ row, $index }">
          <!-- {{ row }} {{ $index }}
          {{ row.name }}
          {{ getAttribute(row.name) }} -->
          <!-- render函数 (START) 使用内置的component组件可以支持h函数渲染和txs语法-->
          <component v-if="getAttribute(row.name)?.render" :is="getAttribute(row.name).render" :row="row"
            :index="$index" />
          <component v-else-if="getAttributeByIndex($index)?.render" :is="getAttributeByIndex($index)?.render" :row="row"
            :index="$index" />
          <!-- render函数 (END) -->
          <!-- 自定义slot (START) -->
          <!-- slog 的名称就是attributes的某个项的slot属性指定的 -->
          <slot v-else-if="getAttribute(row.name)?.slot" :name="getAttribute(row.name).slot" :row="row" :index="$index">
          </slot>
          <!-- 自定义slot (END) -->
          <!-- 默认渲染 (START) -->
          <span v-else>{{ row.value }}</span>


        </template>
      </el-table-column>

    </el-table>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel(formRef)">Cancel</el-button>
      </span>
    </template>
  </el-dialog>
</template>
  
 
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
  