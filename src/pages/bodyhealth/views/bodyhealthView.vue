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
                        <monitorpieChartComp></monitorpieChartComp>
                    </div>
                </div>
                <div class="bodyhealthView-monitor-area-content-list first-el">
                    <h4>{{this.heartMsg.tableP1Title}}</h4>
                    <monitorpieListComp
                    :fields="this.heartRateData.normal.fields"
                    :fieldkeys="this.heartRateData.normal.fieldkeys"
                    :datas="this.heartRateData.normal.datas"
                    ></monitorpieListComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-list">
                    <h4>{{this.heartMsg.tableP2Title}}</h4>
                    <monitorpieListComp
                    :fields="this.heartRateData.abnormal.fields"
                    :fieldkeys="this.heartRateData.abnormal.fieldkeys"
                    :datas="this.heartRateData.abnormal.datas"
                    ></monitorpieListComp>
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
                        <monitorpieChartComp></monitorpieChartComp>
                    </div>
                </div>
                <div class="bodyhealthView-monitor-area-content-list first-el">
                    <h4>{{this.sleepMsg.tableP1Title}}</h4>
                    <monitorpieListComp
                    :fields="this.heartRateData.normal.fields"
                    :fieldkeys="this.heartRateData.normal.fieldkeys"
                    :datas="this.heartRateData.normal.datas"
                    ></monitorpieListComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-list">
                    <h4>{{this.sleepMsg.tableP2Title}}</h4>
                    <monitorpieListComp
                    :fields="this.heartRateData.abnormal.fields"
                    :fieldkeys="this.heartRateData.abnormal.fieldkeys"
                    :datas="this.heartRateData.abnormal.datas"
                    ></monitorpieListComp>
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
                        <monitorpieChartComp></monitorpieChartComp>
                    </div>
                </div>
                <div class="bodyhealthView-monitor-area-content-list first-el">
                    <h4>{{this.sportsMsg.tableP1Title}}</h4>
                    <monitorpieListComp
                    :fields="this.heartRateData.normal.fields"
                    :fieldkeys="this.heartRateData.normal.fieldkeys"
                    :datas="this.heartRateData.normal.datas"
                    ></monitorpieListComp>
                </div>
                <div class="bodyhealthView-monitor-area-content-list">
                    <h4>{{this.sportsMsg.tableP2Title}}</h4>
                    <monitorpieListComp
                    :fields="this.heartRateData.abnormal.fields"
                    :fieldkeys="this.heartRateData.abnormal.fieldkeys"
                    :datas="this.heartRateData.abnormal.datas"
                    ></monitorpieListComp>
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
      this.$store.dispatch({type:'bodyhealthModule/init'})

      //查詢心律資料
      let bodyhealthModule_parameter = {}
      this.$store.dispatch({type:'bodyhealthModule/loadHeartrate', parameter:bodyhealthModule_parameter})
    },
    components: {
        monitorpieChartComp,
        monitorpieListComp,
        monitorpieSearchComp,
        monitorpieSearchHeaderComp
    },
    computed: {
        heartRateData(){
            return this.$store.getters['bodyhealthModule/getState'].heartRate;
        },
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
h4 {
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
  font-family: Roboto;
  font-size: 15px;
  color: #ef8059;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
}

/* .bodyhealthView-monitor-area-content-viewmore > .shape {
  content: '\f105';
  font-family: 'Font Awesome 5 Free';
  color:  #ef8059;
} */



/* .bodyhealthView > .bodyhealthView-monitor-area > 
.bodyhealthView-monitor-area-content > .bodyhealthView-monitor-area-content-list
> h4 {
    height: 10%;
    width: 100%;
}
.bodyhealthView > .bodyhealthView-monitor-area > 
.bodyhealthView-monitor-area-content > .bodyhealthView-monitor-area-content-list
> .monitorpieListComp {
    height: 90%;
    width: 100%;
} */
</style>