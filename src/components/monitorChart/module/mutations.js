import {
  INIT,
  LOAD_HEARTRATE,
  LOAD_SLEEP,
  LOAD_SPORTS
} from './mutationTypes';

const mutations = {

  // 初始化
  [INIT](state) { 
    state.heartRate.normal.datas = [];
    state.heartRate.abnormal.datas = [];
    state.sleep.normal.datas = [];
    state.sleep.abnormal.datas = [];
    state.sports.notreachedgoal.datas = [];
    state.sports.reachedgoal.datas = [];
    state.sports.sportsort.datas = [];
  },
  // 載入心率監測資料
  [LOAD_HEARTRATE](state, payload) { 
    state.heartRate.normal.datas = payload.result.normal.datas;
    state.heartRate.abnormal.datas = payload.result.abnormal.datas;
  },
  // 載入睡眠監測資料
  [LOAD_SLEEP](state, payload) { 
    state.sleep.normal.datas = payload.result.normal.datas;
    state.sleep.abnormal.datas = payload.result.abnormal.datas;
  },
  // 載入運動監測資料
  [LOAD_SPORTS](state, payload) { 
    state.sleep.reachedgoal.datas = payload.result.reachedgoal.datas;
    state.sleep.notreachedgoal.datas = payload.result.notreachedgoal.datas;
    state.sleep.sportsort.datas = payload.result.sportsort.datas;
  },
};

export default mutations;
