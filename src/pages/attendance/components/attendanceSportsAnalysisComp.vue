<template>
    <div class="attendanceSportsAnalysisComp">
        <div class="common-header">
            <h4>Sports Analysis</h4>
            <!-- <select id="timeSelect" name="timeSelect">
                <option>Attend</option>
                <option>Attend</option>
                <option>Attend</option>
                <option>Attend</option>
            </select> -->
            <div class="attendanceChartComp-legend">
              <span class="attendanceChartComp-enter"></span>
              <p>步數</p>
              <span class="attendanceChartComp-leave"></span>
              <p>距離</p>
            </div>
            <div class="viewmore">
                <p>View Detail</p>
                <img src="@/assets/img/bodyhealth/ic-arrow-orange-right.svg" alt="">
            </div>
        </div>
        <div class="common-content">
          <div :id="this.elid" style="width:100%;height: 100%;"></div>
        </div>
  </div>
</template>
<script>
import 'echarts-gl';
export default {
    data(){
      return {
        elid:'attendanceSportsAnalysisComp' + Math.random(),
        chartOptions: {
                        color: ['#5793f3', '#d14a61', '#675bba'],
                        tooltip: {
                            show:true,
                            trigger: 'item',
                            formatter: function (params) {
                                return '距離: ' + params.data + '<br>' + "卡路里: 1000";
                            }
                            
                            // formatter: '{a} <br/>{b} : {c}'
                        },
                        grid: {
                                left: '6%',
                                top: '23%',
                                height: '63%',
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
                                name:'距離/m'
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
    mounted() {
        this.drawChart();
    },
    methods: {
        drawChart() {
            this.chartOptions.series[0].data = [200,500,600,700,800,900,200];
            this.chartOptions.series[1].data = [150,450,550,650,750,850,150];
            let monitorpieChart = this.$echarts.init(document.getElementById(this.elid));
            monitorpieChart.setOption(this.chartOptions);
        }
    }
}
</script>
<style scoped>
/* cus common */
.attendanceSportsAnalysisComp {
    height: 100%;
    width: 100%;
}
.common-header {
    height: 10%;
    /* padding-right: 1vw; */
    width: 100%;
    border-bottom:none;
    margin-bottom: 1.5vh;
}
.common-content {
    height: 80%;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
}

/* cus */
.common-header > h4 {
    /* width: 80%; */
    margin-right: 0.5vw;
}
.common-header > select {
    /* width: 20%; */
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