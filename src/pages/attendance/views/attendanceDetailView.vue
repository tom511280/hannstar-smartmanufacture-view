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
                        <attendanceSosComp></attendanceSosComp>
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
                        我是內容
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
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

export default {
    components: {
        attendancePersonInfoComp,
        attendanceSosComp,
        attendanceNotificationComp
    },
    mounted(){
      //初始化時執行
      this.$store.dispatch({type:'commonModule/init'})
      this.$store.dispatch({type:'attendanceModule/initEmployee'})
      this.$store.dispatch({type:'attendanceModule/initCardMsg'})

      //查詢員工資料
      let employee_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadEmployee', parameter:employee_parameter})

      //查詢訊息資料
      let cardMsg_parameter = {}
      this.$store.dispatch({type:'attendanceModule/loadCardMsg', parameter:cardMsg_parameter})
    },
    computed: {
        employeeData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].employeeData);
        },
        cardMsgData(){
            return Object.assign({},this.$store.getters['attendanceModule/getState'].cardMsgData);
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
    },
};
</script>
<style scoped>
.attendanceDetailView {
    height: 100%;
    width: 100%;
}
.row:nth-child(n+1):nth-child(-n+3){
    margin-bottom: 1.5%;
}
.row:nth-child(1) {
    height: 10%;
}
.row:nth-child(2) {
    height: 32%;
}
.row:nth-child(3) {
    height: 25%;
}
.row:nth-child(4) {
    height: 25%;
}
</style>