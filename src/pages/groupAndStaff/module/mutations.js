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

    state.group.groupData = [];
    state.group.loadingErrorCodeList = [];
    state.group.updateErrorCodeList = [];

    state.groupStaff.groupStaffData = [];
    state.groupStaff.loadingErrorCodeList = [];
    state.groupStaff.updateErrorCodeList = [];
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
  },
};

export default mutations;
