import Vue from 'vue'
import {
  INIT_STS,
  INIT_ATTENDANCE,
  LOAD_STS,
  LOAD_ATTENDANCE,
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
};

export default actions;
