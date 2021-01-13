<template>
  <div class="attendanceChartComp">
      <div class="attendanceChartComp-header">
          <h4>Attendance</h4>
          <select class="attendanceChartComp-select" id="timeSelect" name="timeSelect">
              <option>testdata</option>
                <!-- <option v-for="timeItem in timeSelects" :key="timeItem.value" :value="timeItem.value">{{ timeItem.text }}</option> -->
          </select>
          <div class="attendanceChartComp-legend">
              <span class="attendanceChartComp-enter"></span>
              <p>進入</p>
              <span class="attendanceChartComp-leave"></span>
              <p>離開</p>
          </div>
      </div>
      <div class="attendanceChartComp-content">
          <div :id="this.elid" style="width:100%;height: 100%;"></div>
      </div>
  </div>
</template>
<script>
import 'echarts-gl';
export default {
  // name: 'monitorpieChartComp',
  // components:{
  //     'v-chart': ECharts
  // },
  data(){
      return {
        elid:'attendanceChartComp' + Math.random(),
        chartOptions: {
                        color: ['#5793f3', '#d14a61', '#675bba'],
                        tooltip: {
                                    show:true,
                        },
                        grid: {
                                left: '5%',
                                top: '3%',
                                height: '85%',
                                width:'90%'
                        },
                        xAxis: {
                                splitLine:{show: false},//去除網格線
                                type: 'category',
                                data: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6']
                        },
                        yAxis: {
                                splitLine:{show: false},//去除網格線
                                type: 'value',
                                data: [20,40,60,80,100],
                                nameTextStyle: {
                                                color:'red',
                                }
                        },
                        series: [
                                    {
                                        type: 'line',
                                        symbolSize:10,
                                        smooth: true,
                                        data: [50, 90, 55, 70, 88, 55],
                                        itemStyle: {color: '#e43030'}
                                    },
                                    {
                                        type: 'line',
                                        symbolSize:10,
                                        smooth: true,
                                        data: [11, 22, 33, 44, 55, 99],
                                        itemStyle: {color: '#58b368'}
                                    },
                        ]
                    }
                }
    
    },
  mounted() {
      let monitorpieChart = this.$echarts.init(document.getElementById(this.elid));
      monitorpieChart.setOption(this.chartOptions);
  },
  methods: {
    drawChart(dataP1, dataP2) {

      if(dataP1 != 0 && dataP2 != 0) this.chartOptions.series[0].data[0].value = 0;
      else this.chartOptions.series[0].data[0].value = 1;
        
      this.chartOptions.series[0].data[1].value = dataP1;
      this.chartOptions.series[0].data[2].value = dataP2;
      let monitorpieChart = this.$echarts.init(document.getElementById(this.elid));
      monitorpieChart.setOption(this.chartOptions);
    }
  }
}
</script>
<style scope>
.attendanceChartComp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    width: 100%;
    height: 100%;
} 
.attendanceChartComp-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;  
    width: 100%;
    height: 7.5%;
    border-bottom: 1px solid#bbbfca;
}
.attendanceChartComp-header > h4{
    margin-left: 1vw;
    margin-right: 0.5vw;
}
.attendanceChartComp-content {
    width: 100%;
    height: 95%;
}
.attendanceChartComp-select {
    width: 10vw;
}
.attendanceChartComp-legend {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;  
    width: 100%;
    height: 100%;
    margin-right: 2vw;
}
.attendanceChartComp-legend > span {
    height: 1.2vh;
    width: 0.6vw;
    margin-left: 0.25vw;
    margin-right: 0.25vw;
}
.attendanceChartComp-legend > p {
    margin-left: 0.25vw;
    margin-right: 0.25vw;
}

.attendanceChartComp-enter {
  background-color: #e43030;
  border-radius: 8px;
}
.attendanceChartComp-leave {
  background-color: #58b368;
  border-radius: 8px;
}
</style>