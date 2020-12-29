<template>
    <div class="bodyhealthView">
        <div class="bodyhealthView-monitor-area">
            <monitorpieChartComp></monitorpieChartComp>
            <div class="bodyhealthView-monitor-area-ypper-line"></div>
            <h4>Abnormal Heart Rate</h4>
            <monitorpieListComp></monitorpieListComp>
            <div class="bodyhealthView-monitor-area-ypper-line"></div>
            <monitorpieListComp></monitorpieListComp>
        </div>
        <div class="bodyhealthView-monitor-area">
            <monitorpieChartComp></monitorpieChartComp>
            <div class="bodyhealthView-monitor-area-ypper-line"></div>
            <monitorpieListComp></monitorpieListComp>
            <monitorpieListComp></monitorpieListComp>
        </div>
        <div class="bodyhealthView-monitor-area">
            <monitorpieChartComp></monitorpieChartComp>
            <div class="bodyhealthView-monitor-area-ypper-line"></div>
            <monitorpieListComp></monitorpieListComp>
            <monitorpieListComp></monitorpieListComp>
        </div>
    </div>
</template>
<script>
import monitorpieChartComp from '@/components/monitorChart/subcomponents/monitorpieChartComp.vue'
import monitorpieListComp from '@/components/monitorChart/subcomponents/monitorpieListComp.vue'
export default {
    components: {
        monitorpieChartComp,
        monitorpieListComp
    },
}
</script>
<style scoped>
.h4-container {
    display: flex;
    flex-direction: row;
}
.bodyhealthView {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #f1f2f3;
    min-height: 94.5vh;
    margin-left: 16vw;
    overflow-y: auto;
}
.bodyhealthView > .bodyhealthView-monitor-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* align-items: center; */
    width: 26vw;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1vh;
    margin-bottom: 2vh;
    padding-left: 1vw;
    padding-right: 1vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    background-color: #ffffff;
    border-radius: 8px;
}
.bodyhealthView-monitor-area-ypper-line {
  width: 467px;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  /* height: 1px; */
  /* margin: 16px 20px 14px; */
  border: solid 1px #bbbfca;
}
</style>