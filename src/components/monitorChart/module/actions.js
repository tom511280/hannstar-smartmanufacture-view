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

    Vue.prototype.$axios({
      url:'testdata/monitordata/member.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data;
      for (let member of respData) {
        if(payload.parameter.email == member.email){
          if(payload.parameter.password == member.password) {
            // 0 = success
            payload.parameter.errorCodeList.push(0);
          }else{
            // 5 = password is not valid
            payload.parameter.errorCodeList.push(5);
          }
          commit(LOGIN, payload);
          return;
        }
      }
      // 4 = email address does not exist
      payload.parameter.errorCodeList.push(4);
      commit(LOGIN, payload);
      return;

    }).catch((error) => { // 異常處理
      window.console.error(error);
      window.alert(error)
    });

    commit(LOAD_HEARTRATE, payload);
  },

  /**
   * 載入睡眠監測資料
   */
  loadSleep({commit},payload) {
    commit(LOAD_SLEEP, payload);
  },
  
  /**
   * 載入運動監測資料
   */
  loadSports({commit},payload) {
    commit(LOAD_SPORTS, payload);
  },
};

export default actions;
