<template>
    <div class="bodyhealthView">
        <div class="bodyhealthView-monitor-area">
            <div class="bodyhealthView-monitor-area-title">
                <monitorpieSearchHeaderComp></monitorpieSearchHeaderComp>
            </div>
            <div class="bodyhealthView-monitor-area-content">
                <monitorpieSearchComp></monitorpieSearchComp>
                <div class="bodyhealthView-monitor-area-upper-line"></div>
                <monitorpieChartComp></monitorpieChartComp>
                <div class="bodyhealthView-monitor-area-upper-line"></div>
                <h4>Abnormal Heart Rate</h4>
                <monitorpieListComp></monitorpieListComp>
                <div class="bodyhealthView-monitor-area-upper-line"></div>
                <h4>Normal Heart Rate</h4>
                <monitorpieListComp></monitorpieListComp>
            </div>
        </div>
        <div class="bodyhealthView-monitor-area">
            <div class="bodyhealthView-monitor-area-title">
                <monitorpieSearchHeaderComp></monitorpieSearchHeaderComp>
            </div>
            <div class="bodyhealthView-monitor-area-content">
                <monitorpieSearchComp></monitorpieSearchComp>
                <div class="bodyhealthView-monitor-area-upper-line"></div>
                <monitorpieChartComp></monitorpieChartComp>
                <div class="bodyhealthView-monitor-area-upper-line"></div>
                <h4>Abnormal Heart Rate</h4>
                <monitorpieListComp></monitorpieListComp>
                <div class="bodyhealthView-monitor-area-upper-line"></div>
                <h4>Normal Heart Rate</h4>
                <monitorpieListComp></monitorpieListComp>
            </div>
        </div>
        <div class="bodyhealthView-monitor-area">
            <div class="bodyhealthView-monitor-area-title">
                <monitorpieSearchHeaderComp></monitorpieSearchHeaderComp>
            </div>
            <div class="bodyhealthView-monitor-area-content">
                <monitorpieSearchComp></monitorpieSearchComp>
                <div class="bodyhealthView-monitor-area-upper-line"></div>
                <monitorpieChartComp></monitorpieChartComp>
                <div class="bodyhealthView-monitor-area-upper-line"></div>
                <h4>Abnormal Heart Rate</h4>
                <monitorpieListComp></monitorpieListComp>
                <div class="bodyhealthView-monitor-area-upper-line"></div>
                <h4>Normal Heart Rate</h4>
                <monitorpieListComp></monitorpieListComp>
            </div>
        </div>
    </div>
</template>
<script>
import monitorpieChartComp from '@/components/monitorChart/components/monitorpieChartComp.vue'
import monitorpieListComp from '@/components/monitorChart/components/monitorpieListComp.vue'
import monitorpieSearchComp from '@/components/monitorChart/components/monitorpieSearchComp.vue'
import monitorpieSearchHeaderComp from '@/components/monitorChart/components/monitorpieSearchHeaderComp.vue'

export default {
    components: {
        monitorpieChartComp,
        monitorpieListComp,
        monitorpieSearchComp,
        monitorpieSearchHeaderComp
    },
}
</script>
<style scoped>
/* .row {
    --bs-gutter-x: 1.5rem;
} */
.h4-container {
    display: flex;
    flex-direction: row;
}
.bodyhealthView {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    background-color: #f1f2f3;
    min-height: 94.5vh;
    margin-left: 16vw;
    padding-right: 1.5vw;
    overflow-y: auto;
}
.bodyhealthView > .bodyhealthView-monitor-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;    
    margin-left: 1.5vw;
    margin-top: 2.2vh;
    margin-bottom: 2vh;
}

.bodyhealthView > .bodyhealthView-monitor-area >.bodyhealthView-monitor-area-title {
    
    /* margin-right: 1vw; */
    /* margin-top: 2vh; */
    padding-left: 1vw;
    background-color: #ffffff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 26vw;
}
.bodyhealthView > .bodyhealthView-monitor-area >.bodyhealthView-monitor-area-content {
    /* margin-left: 1vw; */
    /* margin-right: 1vw; */
    /* margin-top: 1vh; */
    /* margin-bottom: 2vh; */
    /* padding-top: 1vh; */

    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: 1vh;
    background-color: #ffffff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 26vw;
}

.bodyhealthView-monitor-area-upper-line {
    /* height: 100%;*/
    width: 100%; 
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    /* border: solid 1px #bbbfca;
    border-bottom-style:solid; */
    /* border-bottom-style:solid; */
    border-bottom: 1px solid#bbbfca; 
    /* margin-left: 1.5vw;
    margin-right: 1.5vw; */
  /* height: 1px; */
  /* margin: 16px 20px 14px; */
    
}
</style>