import Vue from 'vue'
import {
  INIT_HEARTRATE,
  INIT_SLEEP,
  INIT_SPORTS,
  LOAD_HEARTRATE,
  LOAD_SLEEP,
  LOAD_SPORTS
} from './mutationTypes';

const actions = {

  /**
   * 初始化
   */
  initHeartrate({commit},payload) {
    commit(INIT_HEARTRATE,payload);
  },
  initSleep({commit},payload) {
    commit(INIT_SLEEP,payload);
  },
  initSports({commit},payload) {
    commit(INIT_SPORTS,payload);
  },

  /**
   * 載入心率監測資料
   */
  loadHeartrate({commit},payload) {

    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/monitordata/heartrate.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data;
      let normalDatas = []
      let abnormalDatas = []
      for (let data of respData) {
        if(data.heartRate < 100){
          // normalDatas.push(new Map(Object.entries(data)));
          normalDatas.push(data);
        } else{
          // abnormalDatas.push(new Map(Object.entries(data)));
          abnormalDatas.push(data);
        } 
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        heartRate:{
          normal:{
            errorCodeList:[],
          },
          abnormal:{
            errorCodeList:[],
          }
        }
      }
      payload.result.heartRate.normal.datas = normalDatas;
      payload.result.heartRate.normal.total = normalDatas.length / 10;
      payload.result.heartRate.normal.pageNow = 1;
      payload.result.heartRate.normal.pageSize = 10;
      payload.result.heartRate.normal.totalNumber  = normalDatas.length;

      payload.result.heartRate.abnormal.datas = abnormalDatas;
      payload.result.heartRate.abnormal.total = abnormalDatas.length / 10;
      payload.result.heartRate.abnormal.pageNow = 1;
      payload.result.heartRate.abnormal.pageSize = 10;
      payload.result.heartRate.abnormal.totalNumber = abnormalDatas.length;

      payload.result.heartRate.normal.errorCodeList.push(0);
      payload.result.heartRate.abnormal.errorCodeList.push(0);
      commit(LOAD_HEARTRATE, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.heartRate.normal.errorCodeList.push(1);
      payload.result.heartRate.abnormal.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_HEARTRATE, payload);
    });
   
  },

  /**
   * 載入睡眠監測資料
   */
  loadSleep({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/monitordata/sleep.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data;
      let normalDatas = []
      let abnormalDatas = []
      for (let data of respData) {
        if(data.heartRate < 100){
          // normalDatas.push(new Map(Object.entries(data)));
          normalDatas.push(data);
        } else{
          // abnormalDatas.push(new Map(Object.entries(data)));
          abnormalDatas.push(data);
        } 
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        sleep:{
          normal:{
            errorCodeList:[],
          },
          abnormal:{
            errorCodeList:[],
          }
        }
      }
      payload.result.sleep.normal.datas = normalDatas;
      payload.result.sleep.normal.total = normalDatas.length / 10;
      payload.result.sleep.normal.pageNow = 1;
      payload.result.sleep.normal.pageSize = 10;
      payload.result.sleep.normal.totalNumber  = normalDatas.length;

      payload.result.sleep.abnormal.datas = abnormalDatas;
      payload.result.sleep.abnormal.total = abnormalDatas.length / 10;
      payload.result.sleep.abnormal.pageNow = 1;
      payload.result.sleep.abnormal.pageSize = 10;
      payload.result.sleep.abnormal.totalNumber = abnormalDatas.length;

      payload.result.sleep.normal.errorCodeList.push(0);
      payload.result.sleep.abnormal.errorCodeList.push(0);
      commit(LOAD_SLEEP, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.sleep.normal.errorCodeList.push(1);
      payload.result.sleep.abnormal.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_SLEEP, payload);
    });
  },
  
  /**
   * 載入運動監測資料
   */
  loadSports({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/monitordata/sports.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data;
      let reachedlDatas = []
      let noReachedlDatas = []
      let sportsSortDatas = []
      for (let data of respData) {
        if(data.steps < 100){
          noReachedlDatas.push(data);
        } else{
          reachedlDatas.push(data);
        } 
        sportsSortDatas.push(data);
      }

      //TODO 後續補上errorcode判斷
      payload.result = {
        sports:{
          reached:{
            errorCodeList:[],
          },
          noReached:{
            errorCodeList:[],
          },
          sportsSort:{
            errorCodeList:[],
          }
        }
      }
      payload.result.sports.reached.datas = reachedlDatas;
      payload.result.sports.reached.total = reachedlDatas.length / 10;
      payload.result.sports.reached.pageNow = 1;
      payload.result.sports.reached.pageSize = 10;
      payload.result.sports.reached.totalNumber  = reachedlDatas.length;

      payload.result.sports.noReached.datas = noReachedlDatas;
      payload.result.sports.noReached.total = noReachedlDatas.length / 10;
      payload.result.sports.noReached.pageNow = 1;
      payload.result.sports.noReached.pageSize = 10;
      payload.result.sports.noReached.totalNumber = noReachedlDatas.length;

      payload.result.sports.sportsSort.datas = sportsSortDatas;
      payload.result.sports.sportsSort.total = sportsSortDatas.length / 10;
      payload.result.sports.sportsSort.pageNow = 1;
      payload.result.sports.sportsSort.pageSize = 10;
      payload.result.sports.sportsSort.totalNumber = sportsSortDatas.length;

      payload.result.sports.reached.errorCodeList.push(0);
      payload.result.sports.noReached.errorCodeList.push(0);
      payload.result.sports.sportsSort.errorCodeList.push(0);
      commit(LOAD_SPORTS, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.sports.reached.errorCodeList.push(1);
      payload.result.sports.noReached.errorCodeList.push(1);
      payload.result.sports.sportsSort.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_SPORTS, payload);
    });
  },
};

export default actions;
