import {
  INIT_HEARTRATE,
  INIT_SLEEP,
  INIT_SPORTS,
  LOAD_HEARTRATE,
  LOAD_SLEEP,
  LOAD_SPORTS
} from './mutationTypes';

const mutations = {

  // 初始化
  [INIT_HEARTRATE](state) { 

    state.heartRate.normal.fields = ['Name','Group','Bpm'];
    state.heartRate.normal.fieldkeys = ['name','group','heartRate'];
    state.heartRate.normal.Allfields = ['Name','Group','Bpm','Time'];
    state.heartRate.normal.Allfieldkeys = ['name','group','heartRate','time'];
    state.heartRate.normal.datas = [];
    
    state.heartRate.normal.errorCodeList = []
    state.heartRate.normal.total = 0
    state.heartRate.normal.pageNow = 1
    state.heartRate.normal.pageSize = 10
    state.heartRate.normal.totalNumber = 0

    state.heartRate.abnormal.fields = ['Name','Group','Bpm'];
    state.heartRate.abnormal.fieldkeys = ['name','group','heartRate'];
    state.heartRate.abnormal.Allfields = ['Name','Group','Bpm','Time'];
    state.heartRate.abnormal.Allfieldkeys = ['name','group','heartRate','time'];
    state.heartRate.abnormal.datas = [];

    state.heartRate.abnormal.errorCodeList = []
    state.heartRate.abnormal.total = 0
    state.heartRate.abnormal.pageNow = 1
    state.heartRate.abnormal.pageSize = 10
    state.heartRate.abnormal.totalNumber = 0
  },
  [INIT_SLEEP](state) { 

    state.sleep.normal.fields = ['Name','Group','HRS'];
    state.sleep.normal.fieldkeys = ['name','group','time'];
    state.sleep.normal.Allfields = ['Name','Group','HRS'];
    state.sleep.normal.Allfieldkeys = ['name','group','time'];
    state.sleep.normal.datas = [];
    
    state.sleep.normal.errorCodeList = []
    state.sleep.normal.total = 0
    state.sleep.normal.pageNow = 1
    state.sleep.normal.pageSize = 10
    state.sleep.normal.totalNumber = 0

    state.sleep.abnormal.fields = ['Name','Group','HRS'];
    state.sleep.abnormal.fieldkeys = ['name','group','time'];
    state.sleep.abnormal.Allfields = ['Name','Group','HRS'];
    state.sleep.abnormal.Allfieldkeys = ['name','group','time'];
    state.sleep.abnormal.datas = [];

    state.sleep.abnormal.errorCodeList = []
    state.sleep.abnormal.total = 0
    state.sleep.abnormal.pageNow = 1
    state.sleep.abnormal.pageSize = 10
    state.sleep.abnormal.totalNumber = 0

  },
  [INIT_SPORTS](state) { 
    window.console.log(state);
  },
  // 載入心率監測資料
  [LOAD_HEARTRATE](state, payload) { 
    if(payload.result != null) {
      let heartRateNew = Object.assign({}, state.heartRate);

      heartRateNew.normal.datas = payload.result.heartRate.normal.datas;
      heartRateNew.normal.total = payload.result.heartRate.normal.total
      heartRateNew.normal.pageNow = payload.result.heartRate.normal.pageNow;
      heartRateNew.normal.pageSize = payload.result.heartRate.normal.pageSize;
      heartRateNew.normal.totalNumber = payload.result.heartRate.normal.totalNumber;
      heartRateNew.normal.errorCodeList = payload.result.heartRate.normal.errorCodeList;

      heartRateNew.abnormal.datas = payload.result.heartRate.abnormal.datas;
      heartRateNew.abnormal.total = payload.result.heartRate.abnormal.total
      heartRateNew.abnormal.pageNow = payload.result.heartRate.abnormal.pageNow;
      heartRateNew.abnormal.pageSize = payload.result.heartRate.abnormal.pageSize;
      heartRateNew.abnormal.totalNumber = payload.result.heartRate.abnormal.totalNumber;
      heartRateNew.abnormal.errorCodeList = payload.result.heartRate.abnormal.errorCodeList;

      state.heartRate = Object.assign({}, state.heartRate, heartRateNew)

    }
  },
  // 載入睡眠監測資料
  [LOAD_SLEEP](state, payload) { 
    if(payload.result != null) {
      let sleepNew = Object.assign({}, state.sleep);

      sleepNew.normal.datas = payload.result.sleep.normal.datas;
      sleepNew.normal.total = payload.result.sleep.normal.total
      sleepNew.normal.pageNow = payload.result.sleep.normal.pageNow;
      sleepNew.normal.pageSize = payload.result.sleep.normal.pageSize;
      sleepNew.normal.totalNumber = payload.result.sleep.normal.totalNumber;
      sleepNew.normal.errorCodeList = payload.result.sleep.normal.errorCodeList;

      sleepNew.abnormal.datas = payload.result.sleep.abnormal.datas;
      sleepNew.abnormal.total = payload.result.sleep.abnormal.total
      sleepNew.abnormal.pageNow = payload.result.sleep.abnormal.pageNow;
      sleepNew.abnormal.pageSize = payload.result.sleep.abnormal.pageSize;
      sleepNew.abnormal.totalNumber = payload.result.sleep.abnormal.totalNumber;
      sleepNew.abnormal.errorCodeList = payload.result.sleep.abnormal.errorCodeList;

      state.sleep = Object.assign({}, state.sleep, sleepNew)

    }
  },
  // 載入運動監測資料
  [LOAD_SPORTS](state, payload) { 
    state.sleep.reachedgoal.datas = payload.result.reachedgoal.datas;
    state.sleep.notreachedgoal.datas = payload.result.notreachedgoal.datas;
    state.sleep.sportsort.datas = payload.result.sportsort.datas;
  },
};

export default mutations;
