import Vue from 'vue'
import {
  INIT,
  LOAD_STS,
  LOAD_GROUP,
  LOAD_GROUP_STAFF,
} from './mutationTypes';

const actions = {

  /**
   * 初始化
   */
  init({commit},payload) {
    commit(INIT, payload);
  },
  loadstatisticsData({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/groupAndStaff/statisticsData.json',
      params:{}
    }).then((resp) => { // 回應正常

      const respData = resp.data.data;
      let allNum = respData.allNum
      let maleNum = respData.maleNum
      let femaleNum = respData.femaleNum
      let bandBindNum = respData.bandBindNum
      let bandNotBindNum = respData.bandNotBindNum

      
      //TODO 後續補上errorcode判斷
      payload.result = {
        statisticsData:{
          errorCodeList:[]
        },
      }
      payload.result.statisticsData.allNum = allNum;
      payload.result.statisticsData.maleNum = maleNum;
      payload.result.statisticsData.femaleNum = femaleNum;
      payload.result.statisticsData.bandBindNum = bandBindNum;
      payload.result.statisticsData.bandNotBindNum = bandNotBindNum;
      payload.result.statisticsData.errorCodeList.push(0);
      commit(LOAD_STS, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.statisticsData.errorCodeList.push(1);
      window.alert(error)
      commit(LOAD_STS, payload);
    });
  },
  loadGroup({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/groupAndStaff/groupData.json',
      params:{}
    }).then((resp) => { // 回應正常

      const respData = resp.data.data;
      let groupList = respData

      //TODO 後續補上errorcode判斷
      payload.result = {
        groupData:{
          groupList:[],
          loadingErrorCodeList:[],
        },
      }
      
      // function newGroupListSet(groupList) { 
      //   let newGroupList = [];
      //   if(groupList.length > 0){
      //     for (let group of groupList) {
      //       group.label = group.name;
      //       group.children = newGroupListSet(group.children);
      //       newGroupList.push(group);
      //     }
      //   }
      //   return groupList;
      // }

      // groupList = newGroupListSet(groupList);

      payload.result.groupData.groupList = groupList;
      payload.result.groupData.loadingErrorCodeList.push(0);
      commit(LOAD_GROUP, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.groupData.loadingErrorCodeList.push(1);
      window.alert(error)
      commit(LOAD_GROUP, payload);
    });
  },
  loadGroupStaff({commit},payload) {
    // 0 = success
    // 1 = error
    Vue.prototype.$axios({
      url:'testdata/groupAndStaff/groupStaffData.json',
      params:{}
    }).then((resp) => { // 回應正常

      const respData = resp.data.data.list;
      let groupList = respData

      //TODO 後續補上errorcode判斷
      payload.result = {
        groupStaffData:{
          groupStaffList:[],
          loadingErrorCodeList:[],
        },
      }
      payload.result.groupStaffData.groupStaffList = groupList;
      payload.result.groupStaffData.loadingErrorCodeList.push(0);
      commit(LOAD_GROUP_STAFF, payload);

    }).catch((error) => { // 異常處理
      window.console.error(error);
      payload.result.groupStaffData.loadingErrorCodeList.push(1);
      window.alert(error)
      commit(LOAD_GROUP_STAFF, payload);
    });
  },
};

export default actions;
