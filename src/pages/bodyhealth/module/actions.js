import Vue from 'vue'
import {
  INIT,
  LOAD_HEARTRATE,
  LOAD_SLEEP,
  LOAD_SPORTS
} from './mutationTypes';

const actions = {

  /**
   * 初始化
   */
  init({commit},payload) {
    commit(INIT,payload);
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
    //TODO
    payload.result.errorCodeList.push(0);
    payload.result.data = [];
    commit(LOAD_SLEEP, payload);
  },
  
  /**
   * 載入運動監測資料
   */
  loadSports({commit},payload) {
    //TODO
    payload.result.errorCodeList.push(0);
    payload.result.data = [];
    commit(LOAD_SPORTS, payload);
  },
};

export default actions;
