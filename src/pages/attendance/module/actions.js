import Vue from 'vue'
import {
  INIT_STS,
  INIT_ATTENDANCE,
  INIT_EMPLOYEE,
  INIT_CARDMSG,
  INIT_POSITION,
  INIT_HRA,
  INIT_ATTENDANCEBASE,
  INIT_SOS,
  INIT_MEETING,
  LOAD_STS,
  LOAD_ATTENDANCE,
  LOAD_EMPLOYEE,
  LOAD_CARDMSG,
  LOAD_POSITION,
  LOAD_HRA,
  LOAD_ATTENDANCEBASE,
  LOAD_SOS,
  LOAD_MEETING
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
  initPosition({commit},payload) {
    commit(INIT_POSITION,payload);
  },
  initHra({commit},payload) {
    commit(INIT_HRA,payload);
  },
  initAttendanceBase({commit},payload) {
    commit(INIT_ATTENDANCEBASE,payload);
  },
  initSos({commit},payload) {
    commit(INIT_SOS,payload);
  },
  initMeeting({commit},payload) {
    commit(INIT_MEETING,payload);
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
   * 載入訊息資料
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
      let count = 0;
      for (let data of respData) {
        count++;
        if(count < 5) cardMsgList.push(data);
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
  /**
   * 載入位置資料
   */
  loadPosition({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/attendance/position.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data.data.list;
      let positionList = []
      let count = 0;
      for (let data of respData) {
        count++;
        // data.localStat = "1d 1h 1m";
        let createTimeFormat = new Date(data.createTime);
        let updateTimeFormat = new Date(data.updateTime);
        let s = parseInt(updateTimeFormat - createTimeFormat) / 1000
        let m = Math.floor(s / 60 % 60)
        let h = Math.floor(s / 60 / 60 % 24)
        let d = Math.floor(s / 60 / 60 / 24)
        data.localStat = "";
        if(d > 0) data.localStat+= d + " d ";
        if(h > 0) data.localStat+= h + " h ";
        if(m > 0) data.localStat+= m + " m ";

        // data.localStat = "1d 1h 1m";

        // let h = parseInt(updateTimeFormat - createTimeFormat) / 1000 / 60 / 60
        // let d = parseInt(updateTimeFormat - createTimeFormat) / 1000 / 60 / 60

        // localStat
        if(count < 6) positionList.push(data);
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        positionData:{
          positionList:[],
          errorCodeList:[],
        },
      }
      payload.result.positionData.positionList = positionList;
      payload.result.positionData.errorCodeList.push(0);
      commit(LOAD_POSITION, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.positionData.positionList.push(1);
      window.alert(error)
      commit(LOAD_POSITION, payload);
    });
  },
  /**
   * 載入心率分析資料
   */
  loadHra({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/attendance/heartRateAnalysis.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data.data.list;
      let hraList = []
      let count = 0;
      for (let data of respData) {
        count++;
        if(count < 5) hraList.push(data); 
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        hraData:{
          hraList:[],
          errorCodeList:[],
        },
      }
      payload.result.hraData.hraList = hraList;
      payload.result.hraData.errorCodeList.push(0);
      commit(LOAD_HRA, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.hraData.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_HRA, payload);
    });
  },
  /**
   * 載入考勤基本資料
   */
  loadAttendanceBase({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/attendance/attendanceData.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data.data.list;
      let attendanceBaseList = []
      let count = 0;
      for (let data of respData) {
        count++;
        if(count < 5) {
          data.date = "2020-1-21"
          data.time = "11:50:00"
          attendanceBaseList.push(data);
        }
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        attendanceBaseData:{
          errorCodeList:[],
        },
      }
      payload.result.attendanceBaseData.attendanceBaseList = attendanceBaseList;
      payload.result.attendanceBaseData.errorCodeList.push(0);
      commit(LOAD_ATTENDANCEBASE, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.attendanceBase.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_ATTENDANCEBASE, payload);
    });
  },
  /**
   * 載入SOS資料
   */
  loadSos({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/attendance/sos.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data.data.list;
      let sosList = []
      let count = 0;
      for (let data of respData) {
        count++;
        if(count < 5) {
          let time = data.time.split(" ");
          data.date = time[0]
          data.time = time[1]

          // data.date = "2020-1-21"
          // data.time = "11:50:00"
          sosList.push(data);
        }
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        sosData:{
          errorCodeList:[],
        },
      }
      payload.result.sosData.sosList = sosList;
      payload.result.sosData.errorCodeList.push(0);
      commit(LOAD_SOS, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.sosData.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_SOS, payload);
    });
  },
  /**
   * 載入MEETING資料
   */
  loadMeeting({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/attendance/meetingData.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data.data.list;
      let meetingList = []
      let count = 0;
      for (let data of respData) {
        count++;
        if(count < 4) meetingList.push(data);
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        meetingData:{
          errorCodeList:[],
        },
      }
      payload.result.meetingData.meetingList = meetingList;
      payload.result.meetingData.errorCodeList.push(0);
      commit(LOAD_MEETING, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.meetingData.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_MEETING, payload);
    });
  },
};

export default actions;
