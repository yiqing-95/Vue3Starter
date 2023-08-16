<template>

  <el-table
      ref="table"
      :data="tableData"
      :height="height"
      :style="{ fontSize: fontSize, fontFamily: fontFamily }"
      :border="border"
      :stripe="stripe"
     
      :header-cell-style="{ 'text-align': headerCellStyle }"
      :cell-style="cellStyle"
      @selection-change="handleSelectionChange"
    >
      <!-- checkbox列 -->
      
      
      <!-- 序号列 -->
      
      <!-- attributes属性列 -->
      <template v-for="(item,idx) in attributes" :key="idx">
        <el-table-column
          v-if="item.type === 'link'"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
          :align="item.align"
          :fixed="item.fixed"
          :sortable="item.sort"
          :formatter="item.formatter"
        >
          <template #default="scope">
            <slot :name="item.prop" v-bind="scope"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'tag'"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
          :align="item.align"
          :fixed="item.fixed"
          :sortable="item.sort"
          :filters="item.filters"
          :filter-method="filterTag"
          :formatter="item.formatter"
        >
          <template #default="scope">
            <slot :name="item.prop" v-bind="scope"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
          :align="item.align"
          :fixed="item.fixed"
          :sortable="item.sort"
          :formatter="item.formatter"
        >
        </el-table-column>
      </template>
    </el-table>
  
  
</template>

<script setup>
// import {defineProps} from 'vue'
 const props =       defineProps({
            tableData:{
                type:Array,
                default: [],
            },
            attributes:{
                type:Array,
                default: [],
            }
        })


        const tableRef = ref()

// 暴露给父组件的参数和方法(外部需要什么，都可以从这里暴露出去)
defineExpose({
  element: tableRef,
  // tableData,
})
        
</script>

<style lang="scss" scoped>

</style>

