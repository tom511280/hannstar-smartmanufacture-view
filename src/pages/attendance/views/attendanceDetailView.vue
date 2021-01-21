<template>
    <div class="attendanceDetailView container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="common-item">
                    <div class="common-item-inner attendanceDetailView-header">
                        <attendancePersonInfoComp ref="attendancePersonInfo"></attendancePersonInfoComp>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        <attendanceSosComp ref="attendanceSos"></attendanceSosComp>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        <attendanceNotificationComp ref="attendanceNotification"></attendanceNotificationComp>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        <attendanceBaseListComp ref="attendanceBaseList"></attendanceBaseListComp>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <div class="common-item">
                    <div class="common-item-inner">
                        <attendancePositionComp ref="attendancePosition"></attendancePositionComp>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        <attendanceStayDetailsComp ref="attendanceStayDetails"></attendanceStayDetailsComp>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        <attendanceHRAComp ref="attendanceHRA"></attendanceHRAComp>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="common-item">
                    <div class="common-item-inner">
                       <attendanceSportsAnalysisComp ref="attendanceSportsAnalysis"></attendanceSportsAnalysisComp>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import attendancePersonInfoComp from '@/pages/attendance/components/attendancePersonInfoComp.vue'
import attendanceSosComp from '@/pages/attendance/components/attendanceSosComp.vue'
import attendanceNotificationComp from '@/pages/attendance/components/attendanceNotificationComp.vue'
import attendanceSportsAnalysisComp from '@/pages/attendance/components/attendanceSportsAnalysisComp.vue'
import attendancePositionComp from '@/pages/attendance/components/attendancePositionComp.vue'
import attendanceHRAComp from '@/pages/attendance/components/attendanceHRAComp.vue'
import attendanceBaseListComp from '@/pages/attendance/components/attendanceBaseListComp.vue'
import attendanceStayDetailsComp from '@/pages/attendance/components/attendanceStayDetailsComp.vue'

export default {
    components: {
        attendancePersonInfoComp,
        attendanceSosComp,
        attendanceNotificationComp,
        attendanceSportsAnalysisComp,
        attendancePositionComp,
        attendanceHRAComp,
        attendanceBaseListComp,
        attendanceStayDetailsComp
    },
    mounted(){
      //初始化時執行
      this.$store.dispatch({type:'commonModule/init'})
      this.$store.dispatch({type:'attendanceModule/initEmployee'})
      this.$store.dispatch({type:'attendanceModule/initCardMsg'})
      this.$store.dispatch({type:'attendanceModule/initPosition'})
      this.$store.dispatch({type:'attendanceModule/initHra'})
      this.$store.dispatch({type:'attendanceModule/initAttendanceBase'})
      this.$store.dispatch({type:'attendanceModule/initSos'})
      this.$store.dispatch({type:'attendanceModule/initMeeting'})

      

      //查詢員工資料
      let employee_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadEmployee', parameter:employee_parameter})

      //查詢訊息資料
      let cardMsg_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadCardMsg', parameter:cardMsg_parameter})

      //查詢位置資料
      let position_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadPosition', parameter:position_parameter})

      //查詢心率資料
      let hra_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadHra', parameter:hra_parameter})

      //查詢考勤基本資料
      let attendanceBase_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadAttendanceBase', parameter:attendanceBase_parameter})

      //查詢sos資料
      let sos_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadSos', parameter:sos_parameter})

       //查詢Meeting資料
      let meeting_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadMeeting', parameter:meeting_parameter})
    },
    computed: {
        employeeData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].employeeData);
        },
        cardMsgData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].cardMsgData);
        },
        positionData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].positionData);
        },
        hraData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].hraData);
        },
        attendanceBaseData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].attendanceBaseData);
        },
        sosData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].sosData);
        },
        meetingData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].meetingData);
        },
    },
    watch: {
        immediate: true,
        deep: true,
        employeeData: function(employeeData) {
            this.$refs.attendancePersonInfo.setData(employeeData)
        },
        cardMsgData: function(cardMsgData) {
            this.$refs.attendanceNotification.drawTable(
                cardMsgData.fields,
                cardMsgData.fieldkeys,
                cardMsgData.cardMsgList, 
            )
        },
        positionData: function(positionData) {
            this.$refs.attendancePosition.drawTable(
                positionData.fields,
                positionData.fieldkeys,
                positionData.positionList, 
            )
        },
        hraData: function(hraData) {
            this.$refs.attendanceHRA.drawTable(
                hraData.fields,
                hraData.fieldkeys,
                hraData.hraList, 
            )
        },
        attendanceBaseData: function(attendanceBaseData) {
            this.$refs.attendanceBaseList.drawTable(
                attendanceBaseData.fields,
                attendanceBaseData.fieldkeys,
                attendanceBaseData.attendanceBaseList, 
            )
        },
        sosData: function(sosData) {
            this.$refs.attendanceSos.drawTable(
                sosData.fields,
                sosData.fieldkeys,
                sosData.sosList, 
            )
        },
        meetingData: function(meetingData) {
            this.$refs.attendanceStayDetails.setData(
                meetingData.meetingList
            )
        },
    },
};
</script>
<style scoped>
.attendanceDetailView {
    height: 100%;
    width: 100%;
}
.row:nth-child(n+1):nth-child(-n+3){
    margin-bottom: 1%;
}
.row:nth-child(1) {
    height: 10%;
}
.row:nth-child(2) {
    height: 25%;
}
.row:nth-child(3) {
    height: 30%;
}
.row:nth-child(4) {
    height: 28%;
}
</style>