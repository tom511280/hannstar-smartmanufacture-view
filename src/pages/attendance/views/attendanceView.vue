<template>
    <div class="attendanceView">
        <div class="attendanceView-chart-area">
            <attendanceChartComp></attendanceChartComp>
        </div>
        <div class="attendanceView-chart-table">
            <attendanceTableComp></attendanceTableComp>
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