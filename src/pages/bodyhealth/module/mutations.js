import {
  INIT,
  LOAD_HEARTRATE,
  LOAD_SLEEP,
  LOAD_SPORTS
} from './mutationTypes';

const mutations = {

  // 初始化
  [INIT](state) { 
    
    state.heartRate.normal.errorCodeList = []
    state.heartRate.normal.total = 0
    state.heartRate.normal.pageNow = 1
    state.heartRate.normal.pageSize = 10
    state.heartRate.normal.totalNumber = 0

    state.heartRate.abnormal.errorCodeList = []
    state.heartRate.abnormal.total = 0
    state.heartRate.abnormal.pageNow = 1
    state.heartRate.abnormal.pageSize = 10
    state.heartRate.abnormal.totalNumber = 0

    // state.heartRate.normal.datas = [];
    // state.heartRate.abnormal.datas = [];
    // state.sleep.normal.datas = [];
    // state.sleep.abnormal.datas = [];
    // state.sports.notreachedgoal.datas = [];
    // state.sports.reachedgoal.datas = [];
    // state.sports.sportsort.datas = [];
  },
  // 載入心率監測資料
  [LOAD_HEARTRATE](state, payload) { 
    if(payload.result != null) {
      state.heartRate.normal.datas = payload.result.heartRate.normal.datas;
      state.heartRate.normal.total = payload.result.heartRate.normal.total
      state.heartRate.normal.pageNow = payload.result.heartRate.normal.pageNow;
      state.heartRate.normal.pageSize = payload.result.heartRate.normal.pageSize;
      state.heartRate.normal.totalNumber = payload.result.heartRate.normal.totalNumber;
      state.heartRate.normal.errorCodeList = payload.result.heartRate.normal.errorCodeList;

      state.heartRate.abnormal.datas = payload.result.heartRate.abnormal.datas;
      state.heartRate.abnormal.total = payload.result.heartRate.abnormal.total
      state.heartRate.abnormal.pageNow = payload.result.heartRate.abnormal.pageNow;
      state.heartRate.abnormal.pageSize = payload.result.heartRate.abnormal.pageSize;
      state.heartRate.abnormal.totalNumber = payload.result.heartRate.abnormal.totalNumber;
      state.heartRate.abnormal.errorCodeList = payload.result.heartRate.abnormal.errorCodeList;
    }
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
