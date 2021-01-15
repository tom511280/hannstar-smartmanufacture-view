<template>
    <div class="attendanceView">
        <div class="attendanceView-chart-area">
            <attendanceChartComp ref="attendanceChart"></attendanceChartComp>
        </div>
        <div class="attendanceView-chart-table">
            <attendanceTableComp ref="attendanceTable"></attendanceTableComp>
        </div> 
    </div>
</template>
<script>
import attendanceChartComp from '@/pages/attendance/components/attendanceChartComp.vue'
import attendanceTableComp from '@/pages/attendance/components/attendanceTableComp.vue'
export default {
    components: {
        attendanceChartComp,
        attendanceTableComp,
    },
    mounted(){
      //初始化時執行
      this.$store.dispatch({type:'commonModule/init'})
      this.$store.dispatch({type:'attendanceModule/initSts'})
      this.$store.dispatch({type:'attendanceModule/initAttendance'})

      //查詢考勤統計資料
      let sts_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadSts', parameter:sts_parameter})

      //查詢考勤資料
      let attendance_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadAttendance', parameter:attendance_parameter})
    },
    computed: {
        statisticsData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].statisticsData);
        },
        attendanceData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].attendanceData);
        },
    },
    watch: {
        immediate: true,
        deep: true,
        statisticsData: function(statisticsDatas) {
            let statisticsList = statisticsDatas.statisticsList;
            let dataP1 = [];
            let dataP2 = [];
            for (let statistics of statisticsList) {
                dataP1.push(parseInt(statistics.totalBandInCount));
                dataP2.push(parseInt(statistics.totalBandOutCount));
            }
            this.$refs.attendanceChart.drawChart(
                dataP1, 
                dataP2
            )
        },
        attendanceData: function(attendanceData) {
            this.$refs.attendanceTable.setTable(
                attendanceData.attendanceList, 
                attendanceData.fields,
                attendanceData.fieldkeys,
                attendanceData.fieldsWidth
            )
        },
    },
};
</script>
<style scope>
.attendanceView {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.attendanceView-chart-area {
    height: 100%;
    width: 50%;
    border-radius: 8px;
    background-color: #ffffff;
    margin-right: 1.5vw;
}
.attendanceView-chart-table {
    height: 100%;
    width: 50%;
    border-radius: 8px;
    background-color: #ffffff;
}
</style>