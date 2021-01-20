import Vue from 'vue'
import {
  INIT_STS,
  INIT_ATTENDANCE,
  INIT_EMPLOYEE,
  INIT_CARDMSG,
  LOAD_STS,
  LOAD_ATTENDANCE,
  LOAD_EMPLOYEE,
  LOAD_CARDMSG
} from './mutationTypes';

const actions = {
  /**
   * 初始化
   */
  initSts({commit},payload) {
    commit(INIT_STS,payload);
  },
  initAttendance({commit},payload) {
    commit(INIT_ATTENDANCE,payload);
  },
  initEmployee({commit},payload) {
    commit(INIT_EMPLOYEE,payload);
  },
  initCardMsg({commit},payload) {
    commit(INIT_CARDMSG,payload);
  },

  /**
   * 載入考勤統計資料
   */
  loadSts({commit},payload) {

    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/attendance/statisticsData.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data.data;
      let statisticsList = []
      for (let data of respData) {
        statisticsList.push(data);
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        statisticsData:{
          errorCodeList:[],
        }
      }
      payload.result.statisticsData.statisticsList = statisticsList;
      payload.result.statisticsData.errorCodeList.push(0);
      commit(LOAD_STS, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.statisticsData.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_STS, payload);
    });
   
  },

  /**
   * 載入考勤資料
   */
  loadAttendance({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/attendance/attendanceData.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data.data.list;
      let attendanceList = []
      for (let data of respData) {
        attendanceList.push(data);
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        attendanceData:{
          errorCodeList:[],
        },
      }
      payload.result.attendanceData.attendanceList = attendanceList;
      payload.result.attendanceData.errorCodeList.push(0);
      commit(LOAD_ATTENDANCE, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.attendanceData.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_ATTENDANCE, payload);
    });
  },
  /**
   * 載入員工資料
   */
  loadEmployee({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/attendance/employeeData.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data.data;
      let employeeData = {};
      employeeData.employeeName = "立夫學長";
      employeeData.gender = 1;
      employeeData.groupName = "SG004";
      employeeData.location = "瀚廚";
      employeeData.deviceType = "wristband";
      employeeData.serialNo = respData[0].serialNo;
      employeeData.errorCodeList = [];
      employeeData.errorCodeList.push(0);

      //TODO 後續補上errorcode判斷
      payload.result = {
        employeeData:{},
      }
      payload.result.employeeData = employeeData;
      commit(LOAD_EMPLOYEE, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      let employeeData = {};
      employeeData.errorCodeList = [];
      employeeData.errorCodeList.push(1);
      payload.result.employeeData = employeeData;
      commit(LOAD_EMPLOYEE, payload);
    });
  },
  /**
   * 訊息資料
   */
  loadCardMsg({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/attendance/cardMsgs.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data.data.list;
      let cardMsgList = []
      for (let data of respData) {
        cardMsgList.push(data);
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        cardMsgData:{
          cardMsgList:[],
          errorCodeList:[],
        },
      }
      payload.result.cardMsgData.cardMsgList = cardMsgList;
      payload.result.cardMsgData.errorCodeList.push(0);
      commit(LOAD_CARDMSG, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.cardMsgData.cardMsgList.push(1);
      window.alert(error)
      commit(LOAD_CARDMSG, payload);
    });
  },
};

export default actions;
