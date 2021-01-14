<template>
  <div class="bodyhealthDetailView">
    <div class="bodyhealthDetailView-header">
      <previousStepComp></previousStepComp>
    </div>
    <div class="bodyhealthDetailView-content">
      <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <a @click="heartRateTableSet()" class="nav-link active" data-bs-toggle="tab" href="#heartRate" aria-selected="true"><h4>Heart Rate Monitor</h4></a>
      </li>
      <li class="nav-item" role="presentation">
        <a @click="sleepTableSet()" class="nav-link" data-bs-toggle="tab" href="#sleep"  aria-selected="false"><h4>Sleep Monitor</h4></a>
      </li>
      <li class="nav-item" role="presentation">
        <a @click="sportsTableSet()" class="nav-link" data-bs-toggle="tab" href="#sports" aria-selected="false"><h4>Sports Monitor</h4></a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="heartRate">
        <div class="tab-pane-area">
          <div class="tab-pane-subarea">
            <h4>Abnormal Heart Rate</h4>
            <monitorpieTableComp ref="hrAnTable"></monitorpieTableComp>
          </div>
          <div class="tab-pane-subarea">
            <h4>Normal Heart Rate</h4>
            <monitorpieTableComp ref="hrNTable"></monitorpieTableComp>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="sleep">
        <div class="tab-pane-area">
          <div class="tab-pane-subarea">
            <h4>Abnormal Sleep</h4>
            <monitorpieTableComp ref="sleepANTable"></monitorpieTableComp>
          </div>
          <div class="tab-pane-subarea">
            <h4>Normal Sleep</h4>
            <monitorpieTableComp ref="sleepNTable"></monitorpieTableComp>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="sports">
        <div class="tab-pane-area">
          <div class="tab-pane-subarea">
            <h4>Not Reached Goal</h4>
            <monitorpieTableComp ref="sportsANTable"></monitorpieTableComp>
          </div>
          <div class="tab-pane-subarea">
            <h4>Sports Rank</h4>
            <monitorpieTableComp ref="sportsNTable"></monitorpieTableComp>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import monitorpieTableComp from '@/pages/bodyhealth/components/monitorpieTableComp.vue'
import previousStepComp from '@/components/previousStepComp.vue'
export default {
  created(){
      //初始化時執行
      let parameter = {
        isShowSiderbar:true,
        isShowTopHeader:true,
        isContainerBase:false,
      }
      this.$store.dispatch({type:'commonModule/init',parameter:parameter})

      //查詢心率資料
      this.heartRateTableSet();
  },
  computed: {
        heartRateData(){
            return Object.assign({},this.$store.getters['bodyhealthModule/getState'].heartRate);
        },
        sleepData(){
            return Object.assign({},this.$store.getters['bodyhealthModule/getState'].sleep);
        },
        sportsData(){
            return Object.assign({},this.$store.getters['bodyhealthModule/getState'].sports);
        },
  },
  //detect data change then set table
  watch: {
        immediate: true,
        deep: true,
        heartRateData: function(heartRate) {
            this.$refs.hrAnTable.setTable(
                heartRate.abnormal.datas, 
                heartRate.abnormal.Allfields,
                heartRate.abnormal.Allfieldkeys
            )
            this.$refs.hrNTable.setTable(
                heartRate.normal.datas, 
                heartRate.normal.Allfields,
                heartRate.normal.Allfieldkeys
            )
        },
        sleepData: function(sleep) {
            this.$refs.sleepANTable.setTable(
                sleep.abnormal.datas, 
                sleep.abnormal.Allfields,
                sleep.abnormal.Allfieldkeys
            )
            this.$refs.sleepNTable.setTable(
                sleep.normal.datas, 
                sleep.normal.Allfields,
                sleep.normal.Allfieldkeys
            )
        },
        sportsData: function(sports) {
            this.$refs.sportsANTable.setTable(
                sports.noReached.datas, 
                sports.noReached.Allfields,
                sports.noReached.Allfieldkeys
            )
            this.$refs.sportsNTable.setTable(
                sports.sportsSort.datas, 
                sports.sportsSort.Allfields,
                sports.sportsSort.Allfieldkeys
            )
        },
  },
  components: {
        monitorpieTableComp,
        previousStepComp,
  },
  methods: {
        //查詢心率資料
        heartRateTableSet(){
          this.$store.dispatch({type:'bodyhealthModule/initHeartrate'})
          let bodyHealthModule_parameter = {}
          this.$store.dispatch({type:'bodyhealthModule/loadHeartrate', parameter:bodyHealthModule_parameter})
        },
        //查詢睡眠資料
        sleepTableSet(){
          this.$store.dispatch({type:'bodyhealthModule/initSleep'})
          let bodySleepModule_parameter = {}
          this.$store.dispatch({type:'bodyhealthModule/loadSleep', parameter:bodySleepModule_parameter})
        },
        //查詢運動資料
        sportsTableSet(){
          this.$store.dispatch({type:'bodyhealthModule/initSports'})
          let bodySportsModule_parameter = {}
          this.$store.dispatch({type:'bodyhealthModule/loadSports', parameter:bodySportsModule_parameter})
        },
        goPreviousStep(){
          this.$router.push({ path: '/bodyhealth/bodyhealthView'});
        }
  },
};
</script>
<style lang="scss" scoped>
.nav-link {
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  font-weight: 500;
  height: 4vh;
  // font-size: ;
}
.nav-link > h4 {
  color: #ffffff;
  font-weight: normal;
}
.bodyhealthDetailView {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // align-items: center;
  height: 100%;
  width: 100%;
}
.bodyhealthDetailView > .bodyhealthDetailView-header {
  height: 5%;
  width: 100%;
}
.bodyhealthDetailView > .bodyhealthDetailView-content {
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 1vw;
  padding-right: 1vw;
  height: 95%;
  width: 100%;
}
.tab-content {
  height: 93%;
  width: 100%;
  background-color:white;
}
.tab-content {
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 2%;
}
.tab-pane {
  height: 100%;
  width: 100%;
}
.tab-pane > .tab-pane-area {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
}
.tab-pane > .tab-pane-area > .tab-pane-subarea:first-child {
  height: 100%;
  width: 49%;
  margin-right: 2%;
}
.tab-pane > .tab-pane-area > .tab-pane-subarea {
  height: 100%;
  width: 49%;
}
.tab-pane > .tab-pane-area > .tab-pane-subarea > h4 {
  height: 4vh;
}

.nav-link {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: #707b91;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #bbbfca;
}
.nav-link.active {
  color: #ffffff;
  background-color: #707b91;
}
</style>