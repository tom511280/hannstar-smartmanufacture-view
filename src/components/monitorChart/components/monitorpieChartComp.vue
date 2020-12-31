<template>
  <div class="monitorpieChartComp">
    <!-- 调用v-chart组件:渲染折线图 -->
    <v-chart :options="myline" width="100%" height="100%"
    style="
      width:26vw;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding-left: 0px;
      "></v-chart>
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
        myline: {
                  tooltip: {
                    show: false,
                    // trigger: 'item',
                    // formatter: '{a} <br/>{b}: {c} ({d}%)'
                  },
                  title: {
                    left: "0%",
                    bottom: "93%",
                    text:'Sports Monitor',
                    textStyle:{
                      fontFamily:'Roboto',
                      fontSize:18

                    }
                  },
                  legend: {
                    selectedMode: false,
                    orient: 'vertical',
                    left: "50%",
                    top: "45%",
                    data:[
                      {name:'nodata',icon:'image://'},
                      {name:'Normal'},
                      {name:'Abnormal'},
                    ],
                    formatter: name => {
                      const data = this.myline.series[0].data
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
                      name: '访问来源',
                      type: 'pie',
                      radius: ['50%', '30%'],
                      center: ['25%', '35%'],
                      // top:'0%',
                      // bottom:'0%',
                      left:'0%',
                      // right:'0%',
                      // width:'100%',
                      // height:'100%',
                      avoidLabelOverlap: false,
                      label: {
                        // formatter: function(params){
                        //   if (params.value > 0) return params.value;
                        //   else return '';
                        // },
                        show: false
                        // normal: {
                        //   position: 'inner',  // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                        //   // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                        //   // {a}指series.name  {b}指series.data的name
                        //   // {c}指series.data的value  {d}%指这一部分占总数的百分比
                        //   formatter: '{c}'
                        // }
                        // position: 'center'
                      },
                      emphasis: {
                        label: {
                          show: false,
                          fontSize: '30',
                          fontWeight: 'bold'
                        }
                      },
                      labelLine: {
                        show: false
                      },
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
  /* width:26vw; */
  height: 250px;
  /* width:0px; */
  /* margin: 0px; */
}
  
</style>