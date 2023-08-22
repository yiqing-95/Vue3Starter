<script  lang="jsx" setup>
import { reactive, ref, toRefs, nextTick } from 'vue'
import dayjs from 'dayjs'


import { Timer } from '@element-plus/icons-vue'
// import { MyTableColumn } from './components/TableColumn.vue'
import DetailTable from './components/DetailTable.vue'


/**
 * ## 可以参考Yii的DetailView Widget设计方法
 * TODO：formate的支持 ，yii实现中需要系统formatter的引入
 * - "some_field:date" date是系统formatter的一种 表示使用date做格式化处理
 * 
 *        <template v-else-if="col.type === 'date'">
 *               <!---十位数时间戳-->
  *              <span v-if="String(row[col.prop!])?.length <= 10">
   *                 {{ dayjs.unix(row[col.prop!]).format(col.dateFormat ?? 'YYYY-MM-DD') }}
    *            </span>
     *           <!---十三位数时间戳-->
      *          <span v-else>{{ dayjs(row[col.prop!]).format(col.dateFormat ?? 'YYYY-MM-DD') }}</span>
       *     </template>
*
   *   
   * - v-bind 对于`attribute` 样式方面的控制 可以使用v-bind绑定到组件上去      
 */
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
  },
  {
    prop: '___tag',
    label: 'slot 测试🤯',
    slot: 'my_slot',
  },
  'tag',
  {
    prop: "date",
    // width: "140",
    align: "left",
    label: "常规名称长字段",
    render: ({ row, index }) => {
      return <ElTag>{row.value}</ElTag>;
    },
  },
  {
    prop: "date",
    // width: "140",
    align: "left",
    label: "常规名称长字段",
    // TODO: 缺少常见格式化处理
    dateFormat: 'YYYY-MM-DD',
    formate: ({ row, index }) => {
      /**
       * dayjs.unix(row.date).format(this.dateFormat ?? 'YYYY-MM-DD')
       */
      return <ElTag>{row.value}</ElTag>;
    },
  },

  {
    prop: "name",
    // width: "100",
    align: "left",
    label: "合同编号",
    render1: ({ row, index }) => {
      return <div style="background:red;  ">{row.value}万 {index}</div>;
    },
  },
  {
    prop: "_not_exist",
    // width: "100",
    align: "left",
    label: "粥",
    render: ({ row, index }) => {
      return <div style="background:red;  "> 州？ {row.state}  {index}</div>;
    },
  },
  {
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

/** ## helper func ============ */


// https://element-plus.org/zh-CN/component/dialog.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9

// props 默认是响应式的 
const props = defineProps({
  title: String,
})


const dialogVisible = ref(false)
const model = ref()
const openDialog = (row) => {
  dialogVisible.value = true

  if (row) {
    nextTick(() => {

      model.value = row

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
  <el-drawer v-model="dialogVisible" :title="title" size="65%">

    <DetailTable ref="detailTableRef" :attributes="attributes" :model="model">
      <template #my_slot="{ row, index }">

        hiiiiii
        {{ index }}

      </template>
    </DetailTable>

  </el-drawer>
</template>
  
 
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
  