<template>
    <div class="bodyhealthView">
        <!--Heart Rate Monitor-->
        <div class="bodyhealthView-monitor-area">
            <div class="bodyhealthView-monitor-area-title">
                <monitorpieSearchHeaderComp :title="this.heartMsg.title"></monitorpieSearchHeaderComp>
            </div>
            <div class="bodyhealthView-monitor-area-content">
                <div class="bodyhealthView-monitor-area-content-search">
                    <monitorpieSearchComp 
                    :timeSelects="this.heartMsg.timeSelects"
                    :groupSelects="this.heartMsg.groupSelects"
                    ></monitorpieSearchComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-graph">
                    <h4>{{this.heartMsg.graphTitle}}</h4>
                    <div class="bodyhealthView-monitor-area-content-graph-main">
                        <monitorpieChartComp ref="heartRateChart"></monitorpieChartComp>
                    </div>
                </div>
                <div class="bodyhealthView-monitor-area-content-list first-el">
                    <h5>{{this.heartMsg.tableP1Title}}</h5>
                    <monitorpieListComp ref="heartRateListP1"></monitorpieListComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-list">
                    <h5>{{this.heartMsg.tableP2Title}}</h5>
                    <monitorpieListComp ref="heartRateListP2"></monitorpieListComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-viewmore">
                    <p @click="goBodyhealthDetailView()">View More</p>
                </div>
            </div>
        </div>
        <!--Sleep Monitor-->
        <div class="bodyhealthView-monitor-area">
            <div class="bodyhealthView-monitor-area-title">
                <monitorpieSearchHeaderComp :title="this.sleepMsg.title"></monitorpieSearchHeaderComp>
            </div>
            <div class="bodyhealthView-monitor-area-content">
                <div class="bodyhealthView-monitor-area-content-search">
                    <monitorpieSearchComp 
                    :timeSelects="this.sleepMsg.timeSelects"
                    :groupSelects="this.sleepMsg.groupSelects"
                    ></monitorpieSearchComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-graph">
                    <h4>{{this.sleepMsg.graphTitle}}</h4>
                    <div class="bodyhealthView-monitor-area-content-graph-main">
                        <monitorpieChartComp ref="sleepChart"></monitorpieChartComp>
                    </div>
                </div>
                <div class="bodyhealthView-monitor-area-content-list first-el">
                    <h5>{{this.sleepMsg.tableP1Title}}</h5>
                    <monitorpieListComp ref="sleepListP1"></monitorpieListComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-list">
                    <h5>{{this.sleepMsg.tableP2Title}}</h5>
                    <monitorpieListComp ref="sleepListP2"></monitorpieListComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-viewmore">
                    <p @click="goBodyhealthDetailView()">View More</p>
                </div>
            </div>
        </div>
        <!--Sports Monitor-->
        <div class="bodyhealthView-monitor-area">
            <div class="bodyhealthView-monitor-area-title">
                <monitorpieSearchHeaderComp 
                :title="this.sportsMsg.title"
                ></monitorpieSearchHeaderComp>
            </div>
            <div class="bodyhealthView-monitor-area-content">
                <div class="bodyhealthView-monitor-area-content-search">
                    <monitorpieSearchComp 
                    :timeSelects="this.sportsMsg.timeSelects"
                    :groupSelects="this.sportsMsg.groupSelects"
                    ></monitorpieSearchComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-graph">
                    <h4>{{this.sportsMsg.graphTitle}}</h4>
                    <div class="bodyhealthView-monitor-area-content-graph-main">
                        <monitorpieChartComp ref="sportsChart"></monitorpieChartComp>
                    </div>
                </div>
                <div class="bodyhealthView-monitor-area-content-list first-el">
                    <h5>{{this.sportsMsg.tableP1Title}}</h5>
                    <monitorpieListComp ref="sportsListP1"></monitorpieListComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-list">
                    <h5>{{this.sportsMsg.tableP2Title}}</h5>
                    <monitorpieListComp ref="sportsListP2"></monitorpieListComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-viewmore">
                    <p @click="goBodyhealthDetailView()">View More</p>
                </div>
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
    data() {
        return {
            heartMsg:{
                title:'Heart Rate Monitor',
                graphTitle:'Heart Rate Overview',
                tableP1Title:'Abnormal Heart Rate',
                tableP2Title:'Normal Heart Rate',
                timeSelects:[
                    {value:"1",text:"last 1 hour"},
                    {value:"2",text:"last 24 hour"},
                    {value:"3",text:"last 7 day"},
                    {value:"4",text:"last 30 day"},
                ],
                groupSelects:[
                    {value:"1",text:"hannstar1"},
                    {value:"2",text:"hannstar2"},
                ]
            },
            sleepMsg:{
                title:'Sleep Monitor',
                graphTitle:'Sleep Overview',
                tableP1Title:'Abnormal Sleep',
                tableP2Title:'Normal  Sleep',
                timeSelects:[
                    {value:"1",text:"last 1 hour"},
                    {value:"2",text:"last 24 hour"},
                    {value:"3",text:"last 7 day"},
                    {value:"4",text:"last 30 day"},
                ],
                groupSelects:[
                    {value:"1",text:"hannstar1"},
                    {value:"2",text:"hannstar2"},
                ]
            },
            sportsMsg:{
                title:'Sports Monitor',
                graphTitle:'Sports Overview',
                tableP1Title:'Not Reached Goal',
                tableP2Title:'Sports Rank',
                timeSelects:[
                    {value:"1",text:"last 1 hour"},
                    {value:"2",text:"last 24 hour"},
                    {value:"3",text:"last 7 day"},
                    {value:"4",text:"last 30 day"},
                ],
                groupSelects:[
                    {value:"1",text:"hannstar1"},
                    {value:"2",text:"hannstar2"},
                ]
            }
        }
    },
    created(){
      //初始化時執行
      this.$store.dispatch({type:'commonModule/init'})
      this.$store.dispatch({type:'bodyhealthModule/initHeartrate'})
      this.$store.dispatch({type:'bodyhealthModule/initSleep'})
      this.$store.dispatch({type:'bodyhealthModule/initSports'})

      //查詢心率資料
      let bodyHealthModule_parameter = {}
      this.$store.dispatch({type:'bodyhealthModule/loadHeartrate', parameter:bodyHealthModule_parameter})

      //查詢睡眠資料
      let bodySleepModule_parameter = {}
      this.$store.dispatch({type:'bodyhealthModule/loadSleep', parameter:bodySleepModule_parameter})

      //查詢運動資料
      let bodySportsModule_parameter = {}
      this.$store.dispatch({type:'bodyhealthModule/loadSports', parameter:bodySportsModule_parameter})
    },
    computed: {
        sleepData(){
            return Object.assign({},this.$store.getters['bodyhealthModule/getState'].sleep);
        },
        heartRateData(){
            return Object.assign({},this.$store.getters['bodyhealthModule/getState'].heartRate);
        },
        sportsData(){
            return Object.assign({},this.$store.getters['bodyhealthModule/getState'].sports);
        },
    },
    watch: {
        immediate: true,
        deep: true,
        heartRateData: function(heartRate) {
            this.$refs.heartRateChart.drawChart(
                heartRate.normal.totalNumber, 
                heartRate.abnormal.totalNumber
            )
            this.$refs.heartRateListP1.drawTable(
                heartRate.normal.fields,
                heartRate.normal.fieldkeys,
                heartRate.normal.datas,
            )  
            this.$refs.heartRateListP2.drawTable(
                heartRate.abnormal.fields,
                heartRate.abnormal.fieldkeys,
                heartRate.abnormal.datas,
            ) 
        },
        sleepData: function(sleep) {
            this.$refs.sleepChart.drawChart(
                sleep.normal.totalNumber, 
                sleep.abnormal.totalNumber
            )
            this.$refs.sleepListP1.drawTable(
                sleep.normal.fields,
                sleep.normal.fieldkeys,
                sleep.normal.datas,
            )  
            this.$refs.sleepListP2.drawTable(
                sleep.abnormal.fields,
                sleep.abnormal.fieldkeys,
                sleep.abnormal.datas,
            ) 
        },
        sportsData: function(sports) {
            this.$refs.sportsChart.drawChart(
                sports.reached.totalNumber, 
                sports.noReached.totalNumber
            )
            this.$refs.sportsListP1.drawTable(
                sports.noReached.fields,
                sports.noReached.fieldkeys,
                sports.noReached.datas,
            )  
            this.$refs.sportsListP2.drawTable(
                sports.sportsSort.fields,
                sports.sportsSort.fieldkeys,
                sports.sportsSort.datas,
            ) 
        }
    },
    components: {
        monitorpieChartComp,
        monitorpieListComp,
        monitorpieSearchComp,
        monitorpieSearchHeaderComp
    },
    methods: {
        goBodyhealthDetailView(){
            this.$router.push({ path: '/bodyhealthDetailView'});
        }
    },
}
</script>
<style scoped>
/* .row {
    --bs-gutter-x: 1.5rem;
} */
h4,h5 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0px;
    height: 4vh;
}

.bodyhealthView {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* background-color: #f1f2f3; */
    height: 100%;
    /* margin-left: 16vw; */
    /* padding-right:1.5%; */
    /* overflow-y: auto; */
}
.bodyhealthView > .bodyhealthView-monitor-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;    
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    /* margin-top: 2.2vh;
    margin-bottom: 2vh; */
    height:100%;
    width: 26vw;
}

.bodyhealthView > .bodyhealthView-monitor-area >.bodyhealthView-monitor-area-title {
    padding-left: 1vw;
    background-color: #ffffff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 7%;
    width: 100%;
}
.bodyhealthView > .bodyhealthView-monitor-area >.bodyhealthView-monitor-area-content {
    padding-left: 1vw;
    padding-right: 1vw;
    padding-bottom: 1vh;
    background-color: #ffffff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 93%;
    width: 100%;
}

.bodyhealthView > .bodyhealthView-monitor-area > 
.bodyhealthView-monitor-area-content > .bodyhealthView-monitor-area-content-search {
    height: 8%;
    width: 100%;
    border-bottom: 1px solid#bbbfca; 
}
.bodyhealthView > .bodyhealthView-monitor-area > 
.bodyhealthView-monitor-area-content > .bodyhealthView-monitor-area-content-graph {
    height: 33%;
    width: 100%;
    border-bottom: 1px solid#bbbfca; 
    padding-bottom: 5%;
}
.bodyhealthView > .bodyhealthView-monitor-area > 
.bodyhealthView-monitor-area-content > .bodyhealthView-monitor-area-content-graph 
.bodyhealthView-monitor-area-content-graph-main {
    height: 85%;
}


.bodyhealthView > .bodyhealthView-monitor-area > 
.bodyhealthView-monitor-area-content > .bodyhealthView-monitor-area-content-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;    
    height: 26%;
    width: 100%;
}
.bodyhealthView > .bodyhealthView-monitor-area > 
.bodyhealthView-monitor-area-content > .bodyhealthView-monitor-area-content-list 
> .monitorpieListComp{
    overflow-y: auto;
    /* overflow-x: hidden; */
    /* padding-left: 0.5vw; */
}
.bodyhealthView > .bodyhealthView-monitor-area > 
.bodyhealthView-monitor-area-content > .bodyhealthView-monitor-area-content-list.first-el {
    border-bottom: 1px solid#bbbfca; 
}

.bodyhealthView-monitor-area-content-viewmore {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center; 
  height: 6%;
  width: 100%;
}
.bodyhealthView-monitor-area-content-viewmore > p {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center; 
  font-size: 15px;
  color: #ef8059;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
}
</style>