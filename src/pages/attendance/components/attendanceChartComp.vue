<template>
    <div class="attendanceChartComp">
        <div class="common-header">
            <h4>Attendance</h4>
            <select id="timeSelect" name="timeSelect">
                <option>Attendance 1</option>
                <option>Attendance 2</option>
                <option>Attendance 3</option>
                <option>Attendance 4</option>
            </select>
            <div class="attendanceChartComp-legend">
              <span class="attendanceChartComp-enter"></span>
              <p>進入</p>
              <span class="attendanceChartComp-leave"></span>
              <p>離開</p>
          </div>
        </div>
        <div class="common-content">
          <div :id="this.elid" style="width:100%;height: 100%;"></div>
        </div>
        
        <!-- <div class="common-header">
            <div class="common-item">
                <h4>Attendance</h4>
                <select id="timeSelect" name="timeSelect">
                    <option>testdata</option>
                </select>
            </div>
            <div class="common-item attendanceChartComp-legend">
                <span class="attendanceChartComp-enter"></span>
                <p>進入</p>
                <span class="attendanceChartComp-leave"></span>
                <p>離開</p>
            </div>
        </div> -->
      <!-- <div class="common-item common-container-row">
          <h4>Attendance</h4>
          <select id="timeSelect" name="timeSelect">
              <option>testdata</option>
          </select>
      </div> -->
      <!-- <div class="common-header">
          <h4>Attendance</h4>
          <select id="timeSelect" name="timeSelect">
              <option>testdata</option>
          </select>
          <div class="attendanceChartComp-legend">
              <span class="attendanceChartComp-enter"></span>
              <p>進入</p>
              <span class="attendanceChartComp-leave"></span>
              <p>離開</p>
          </div>
      </div>
      <div class="common-content">
          <div :id="this.elid" style="width:100%;height: 100%;"></div>
      </div> -->
  </div>
</template>
<script>
import 'echarts-gl';
export default {
    data(){
      return {
        elid:'attendanceChartComp' + Math.random(),
        chartOptions: {
                        color: ['#5793f3', '#d14a61', '#675bba'],
                        tooltip: {
                                    show:true,
                        },
                        grid: {
                                left: '6%',
                                top: '7.5%',
                                height: '85%',
                                width:'87%'
                        },
                        xAxis: {
                                // splitLine:{show: false},//去除網格線
                                type: 'category',
                                data: ['1/11', '1/12', '1/13', '1/14', '1/15', '1/16', '1/17'],
                                name:'日期'
                        },
                        yAxis: {
                                // splitLine:{show: false},//去除網格線
                                type: 'value',
                                // data: [20,40,60,80,100],
                                // nameTextStyle: {
                                //                 color:'red',
                                // },
                                name:'人數'
                        },
                        series: [
                                    {
                                        type: 'line',
                                        symbolSize:10,
                                        smooth: true,
                                        // data: [],
                                        itemStyle: {color: '#e43030'}
                                    },
                                    {
                                        type: 'line',
                                        symbolSize:10,
                                        smooth: true,
                                        // data: [],
                                        itemStyle: {color: '#58b368'}
                                    },
                        ]
                    }
                }
    
    },
    methods: {
        drawChart(dataP1, dataP2) {
            this.chartOptions.series[0].data = dataP1;
            this.chartOptions.series[1].data = dataP2;
            let monitorpieChart = this.$echarts.init(document.getElementById(this.elid));
            monitorpieChart.setOption(this.chartOptions);
        }
    }
}
</script>
<style scoped>
/* cus common */
.attendanceChartComp {
    height: 100%;
    width: 100%;
}
.common-header {
    height: 7.5%;
    padding-left: 1vw;
    padding-right: 1vw;
    width: 100%;
}
.common-content {
    height: 92.5%;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
}

/* cus */
.common-header > h4 {
    margin-right: 0.5vw;
}
.common-header > select {
    width: 10vw;
}
.attendanceChartComp-legend {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
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