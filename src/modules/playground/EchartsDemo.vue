<script setup>
  import echarts  from "@/plugins/echarts.js"

 console.log('[echats-demo]:',echarts)

 onMounted(() => {
   
    // 基于准备好的dom，初始化echarts实例
   var myChart = echarts.init(document.getElementById('echarts_dist'));
   // 绘制图表
   myChart.setOption({
     title: {
       text: 'ECharts 入门示例'
     },
     tooltip: {},
     xAxis: {
       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
     },
     yAxis: {},
     series: [
       {
         name: '销量',
         type: 'bar',
         data: [5, 20, 36, 10, 10, 20]
       },
       {
         name: '销售额',
         type: 'line',
         data: [15, 25, 56, 20, 40, 80]
       },
     ]
   });
  
 })
</script>

<template>
    <div id="echarts_dist" style="width: 200px; height:200px;">

    </div>
</template>



<style lang="scss" scoped>

</style>