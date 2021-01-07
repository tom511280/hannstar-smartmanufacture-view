import {
  INIT_HEARTRATE,
  INIT_SLEEP,
  INIT_SPORTS,
  LOAD_HEARTRATE,
  LOAD_SLEEP,
  LOAD_SPORTS,
  LOAD_HEARTRATE_SETTING,
  LOAD_SLEEP_SETTING,
  LOAD_SPORTS_SETTING,
  UPDATE_HEARTRATE_SETTING,
  UPDATE_SLEEP_SETTING,
  UPDATE_SPORTS_SETTING
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

    state.heartRate = Object.assign({}, state.heartRate);
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

    state.sleep = Object.assign({}, state.sleep);

  },
  [INIT_SPORTS](state) { 

    state.sports.reached.fields = ['Name','Group','Steps'];
    state.sports.reached.fieldkeys = ['name','group','steps'],
    state.sports.reached.Allfields = ['Name','Group','Steps'];
    state.sports.reached.Allfieldkeys = ['name','group','steps'],
    state.sports.reached.datas = [];
    
    state.sports.reached.errorCodeList = []
    state.sports.reached.total = 0
    state.sports.reached.pageNow = 1
    state.sports.reached.pageSize = 10
    state.sports.reached.totalNumber = 0

    state.sports.noReached.fields = ['Name','Group','Steps'];
    state.sports.noReached.fieldkeys = ['name','group','steps'],
    state.sports.noReached.Allfields = ['Name','Group','Steps'];
    state.sports.noReached.Allfieldkeys = ['name','group','steps'],
    state.sports.noReached.datas = [];
    
    state.sports.noReached.errorCodeList = []
    state.sports.noReached.total = 0
    state.sports.noReached.pageNow = 1
    state.sports.noReached.pageSize = 10
    state.sports.noReached.totalNumber = 0

    state.sports.sportsSort.fields = ['Name','Group','Steps'];
    state.sports.sportsSort.fieldkeys = ['name','group','steps'],
    state.sports.sportsSort.Allfields = ['Name','Group','Steps'];
    state.sports.sportsSort.Allfieldkeys = ['name','group','steps'],
    state.sports.sportsSort.datas = [];
    
    state.sports.sportsSort.errorCodeList = []
    state.sports.sportsSort.total = 0
    state.sports.sportsSort.pageNow = 1
    state.sports.sportsSort.pageSize = 10
    state.sports.sportsSort.totalNumber = 0

    state.sports = Object.assign({}, state.sports);
    
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
    let sportsNew = Object.assign({}, state.sports);

    sportsNew.reached.datas = payload.result.sports.reached.datas;
    sportsNew.reached.total = payload.result.sports.reached.total
    sportsNew.reached.pageNow = payload.result.sports.reached.pageNow;
    sportsNew.reached.pageSize = payload.result.sports.reached.pageSize;
    sportsNew.reached.totalNumber = payload.result.sports.reached.totalNumber;
    sportsNew.reached.errorCodeList = payload.result.sports.reached.errorCodeList;

    sportsNew.noReached.datas = payload.result.sports.noReached.datas;
    sportsNew.noReached.total = payload.result.sports.noReached.total
    sportsNew.noReached.pageNow = payload.result.sports.noReached.pageNow;
    sportsNew.noReached.pageSize = payload.result.sports.noReached.pageSize;
    sportsNew.noReached.totalNumber = payload.result.sports.noReached.totalNumber;
    sportsNew.noReached.errorCodeList = payload.result.sports.noReached.errorCodeList;

    sportsNew.sportsSort.datas = payload.result.sports.sportsSort.datas;
    sportsNew.sportsSort.total = payload.result.sports.sportsSort.total
    sportsNew.sportsSort.pageNow = payload.result.sports.sportsSort.pageNow;
    sportsNew.sportsSort.pageSize = payload.result.sports.sportsSort.pageSize;
    sportsNew.sportsSort.totalNumber = payload.result.sports.sportsSort.totalNumber;
    sportsNew.sportsSort.errorCodeList = payload.result.sports.sportsSort.errorCodeList;

    state.sports = Object.assign({}, state.sports, sportsNew)
  },
  //
  [LOAD_HEARTRATE_SETTING](state, payload) {
    if(payload.result != null) {
      let heartRateNew = Object.assign({}, state.heartRate);
      heartRateNew.setting.heartRateMaxValue = payload.result.heartRate.setting.heartRateMaxValue;
      heartRateNew.setting.heartRateMinValue = payload.result.heartRate.setting.heartRateMinValue;
      heartRateNew.setting.loadingErrorCodeList = payload.result.heartRate.setting.loadingErrorCodeList;
      heartRateNew.setting.updateErrorCodeList = payload.result.heartRate.setting.updateErrorCodeList;
      state.heartRate = Object.assign({}, state.heartRate, heartRateNew)
    }
  },
  //
  [LOAD_SLEEP_SETTING](state, payload) { 
    if(payload.result != null) {
      let sleepNew = Object.assign({}, state.sleep);
      sleepNew.setting.sleepMaxValue = payload.result.sleep.setting.sleepMaxValue;
      sleepNew.setting.sleepMinValue = payload.result.sleep.setting.sleepMinValue;
      sleepNew.setting.loadingErrorCodeList = payload.result.sleep.setting.loadingErrorCodeList;
      sleepNew.setting.updateErrorCodeList = payload.result.sleep.setting.updateErrorCodeList;
      state.heartRate = Object.assign({}, state.sleep, sleepNew)
    }
  },
  //
  [LOAD_SPORTS_SETTING](state, payload) { 
    if(payload.result != null) {
      let sportsNew = Object.assign({}, state.sports);
      sportsNew.setting.sportsMinValue = payload.result.sports.setting.sportsMinValue;
      sportsNew.setting.loadingErrorCodeList = payload.result.sports.setting.loadingErrorCodeList;
      sportsNew.setting.updateErrorCodeList = payload.result.sports.setting.updateErrorCodeList;
      state.sports = Object.assign({}, state.sports, sportsNew)
    }
  },
  //
  [UPDATE_HEARTRATE_SETTING](state, payload) { 
  },
  //
  [UPDATE_SLEEP_SETTING](state, payload) { 
  },
  //
  [UPDATE_SPORTS_SETTING](state, payload) { 
  },
};

export default mutations;
