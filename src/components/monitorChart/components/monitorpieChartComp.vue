<template>
  <div class="monitorpieChartComp">
    <!-- 调用v-chart组件:渲染折线图 -->
    <v-chart :options="chartOptions" style="width:100%;height: 100%;"></v-chart>
  </div>
</template>
<script>
import ECharts from 'vue-echarts';
import 'echarts-gl';

export default {
  name: 'monitorpieChartComp',
  components:{
      'v-chart': ECharts
  },
  data(){
      return {
        chartOptions: {
                        tooltip: {show: false},
                        title: {show: false},
                        legend: {
                                  selectedMode: false,
                                  orient: 'vertical',
                                  left: "65%",
                                  top: "50%",
                                  data:[
                                        {name:'nodata',icon:'image://'},
                                        {name:'Normal'},
                                        {name:'Abnormal'},
                                      ],
                                  formatter: name => {
                                                        const data = this.chartOptions.series[0].data
                                                        let singleData = data.filter(function(item){
                                                          return item.name == name
                                                        })
                                                        if(name == 'nodata') return null;
                                                        return  name + '  ' + singleData[0].value;
                                  },
                        },
                        series: [
                                  {
                                    hoverAnimation:false,
                                    avoidLabelOverlap: false,
                                    labelLine: false,
                                    label: {show: false},
                                    emphasis: {label: {show: false,}},
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: ['100%', '60%'],
                                    center: ['30%', '50%'],
                                    // left:'0%',
                                    data: [
                                            {value: 1, name: 'nodata', itemStyle: {color: '#f1f2f3'},},
                                            {value: 0, name: 'Normal', itemStyle: {color: '#ea5455'},},
                                            {value: 0, name: 'Abnormal', itemStyle: {color: '#52b8e5'},}
                                          ]
                                  }
                                ]
                      }
        }
  }  
}
</script>
<style scope>
.monitorpieChartComp {
    width: 100%;
    height: 100%;
} 
</style>