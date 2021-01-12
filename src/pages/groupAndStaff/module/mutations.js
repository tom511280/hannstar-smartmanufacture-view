import {
  INIT,
  LOAD_STS,
  LOAD_GROUP,
  LOAD_GROUP_STAFF,
} from './mutationTypes';

const mutations = {
  //初始化
  [INIT](state, payload) {
    state.statisticsData.allNum = 0;
    state.statisticsData.maleNum = 0;
    state.statisticsData.femaleNum = 0;
    state.statisticsData.bandBindNum = 0;
    state.statisticsData.bandNotBindNum = 0;
    state.statisticsData.errorCodeList = [];

    state.groupData.groupData = [];
    state.groupData.loadingErrorCodeList = [];
    state.groupData.updateErrorCodeList = [];

    state.groupStaffData.groupStaffData = [];
    state.groupStaffData.fields = ["NO","Name","Genfer","Phone NO.","ID","Attendance","Group","Detail"];
    state.groupStaffData.fieldkeys = ["id","name","sex","phone","bandNo","needAttnd","orgName","detail"];
    state.groupStaffData.fieldsWidth = ["20","40","30","60","60","40","40","90"]
    state.groupStaffData.loadingErrorCodeList = [];
    state.groupStaffData.updateErrorCodeList = [];
  },
  [LOAD_STS](state, payload) {
    if(payload.result != null) {
      let statisticsDataNew = Object.assign({}, state.statisticsData);
      statisticsDataNew.allNum = payload.result.statisticsData.allNum;
      statisticsDataNew.maleNum = payload.result.statisticsData.maleNum;
      statisticsDataNew.femaleNum = payload.result.statisticsData.femaleNum;
      statisticsDataNew.bandBindNum = payload.result.statisticsData.bandBindNum;
      statisticsDataNew.bandNotBindNum = payload.result.statisticsData.bandNotBindNum;
      statisticsDataNew.errorCodeList = payload.result.statisticsData.errorCodeList;
      state.statisticsData = Object.assign({}, state.statisticsData, statisticsDataNew)
    } 
  },
  [LOAD_GROUP](state, payload) { 
    if(payload.result != null) {
      let groupDataNew = Object.assign({}, state.groupData);
      groupDataNew.groupList = payload.result.groupData.groupList;
      groupDataNew.loadingErrorCodeList = payload.result.groupData.loadingErrorCodeList;
      state.groupData = Object.assign({}, state.groupData, groupDataNew)
    }
  },
  [LOAD_GROUP_STAFF](state, payload) { 
    if(payload.result != null) {
      let groupStaffDataNew = Object.assign({}, state.groupStaffData);
      groupStaffDataNew.groupStaffList = payload.result.groupStaffData.groupStaffList;
      groupStaffDataNew.loadingErrorCodeList = payload.result.groupStaffData.loadingErrorCodeList;
      state.groupStaffData = Object.assign({}, state.groupStaffData, groupStaffDataNew)
    }
  },
};

export default mutations;
