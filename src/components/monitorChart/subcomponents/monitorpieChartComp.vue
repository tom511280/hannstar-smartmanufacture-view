<template>
  <div class="monitorpieChartComp">
    <!-- 调用v-chart组件:渲染折线图 -->
    <v-chart :options="myline" 
    style="width:26vw;display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;text-align: right;"></v-chart>
  </div>
</template>
<script>
import ECharts from 'vue-echarts';
// echarts-gl包含大部分图表所需要的依赖模块
import 'echarts-gl';

// 按需引入不同的图表需要的依赖
// import 'echarts/lib/chart/line';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/chart/gauge';

export default {
  name: 'HelloWorld',
  components:{
      'v-chart': ECharts
  },
  data(){
      return {
        //堆叠折线图所需参数对象   
        myline: {
                  tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                  },
                  title: {
                    left: "0%",
                    bottom: "93%",
                    text:'Sports Monitor'
                  },
    legend: {
      backgroundColor: '#eee',
      orient: 'vertical',
      left: "70%",
      top: "65%",
      // center: ['70%', '40%'],
      data: ['Normal', 'Abnormal'],
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['40%', '45%'],
            avoidLabelOverlap: false,
            label: {
                // show: false,
                normal: {
                  position: 'inner',  // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                  // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                  // {a}指series.name  {b}指series.data的name
                  // {c}指series.data的value  {d}%指这一部分占总数的百分比
                  formatter: '{c}'
                }
                // position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 5, name: 'Normal', itemStyle: {color: '#ea5455'},},
                {value: 25, name: 'Abnormal', itemStyle: {color: '#52b8e5'},}
            ]
        }
    ]
        }
      }
  }  
}
</script>
<style scope>
.piechart {
  /* margin-left: 5vw; */
  height: 100%;
  width: 100%;
}
  
</style>