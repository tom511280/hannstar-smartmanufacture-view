<template>
    <div class="attendanceView container-fluid">
        <div class="row">
            <div class="col-6 common-item">
                <div class="common-item-inner">
                    <attendanceChartComp ref="attendanceChart"></attendanceChartComp>
                </div> 
            </div>
            <div class="col-6 common-item">
                <div class="common-item-inner">
                    <attendanceTableComp ref="attendanceTable"></attendanceTableComp>
                </div>
            </div>
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
<style scoped>
.attendanceView {
    height: 100%;
    width: 100%;
}
/* .row > .common-item:nth-child(1) {
    padding-left: 0vw;
    padding-right: 0vw;
} */
</style>