<template>
  <el-table ref="table" :data="tableData" :height="height" :style="{ fontSize: fontSize, fontFamily: fontFamily }"
    :border="border" :stripe="stripe" :header-cell-style="{ 'text-align': headerCellStyle }" :cell-style="cellStyle"
    @selection-change="handleSelectionChange">
    <!-- checkbox列 -->


    <!-- 序号列 -->

    <!-- attributes属性列 -->
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
</template>

<script setup>
// import {defineProps} from 'vue'
import { computed , toRefs } from 'vue'

const props = defineProps({
  model: {
    type: Array,
    default: [],
  },


  attributes: {
    type: Array,
    default: [],
  }
})

const {model, attributes} = toRefs(props) 

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


// const tableData = ref([])
// const tableData = computed({set:(val)=>{...},get:()=>{}})
let row = []
const tableData = computed(() => {
    row = model.value

  let result = []
 
  
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
  alert('end')
  console.log('[detailtable:]', result)
  console.log('[detailtable:]2', row)
  return result 
}

)

const tableRef = ref()

// 暴露给父组件的参数和方法(外部需要什么，都可以从这里暴露出去)
defineExpose({
  element: tableRef,
  // tableData,
})

</script>

<style lang="scss" scoped></style>

