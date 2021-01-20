import {
  INIT_STS,
  INIT_ATTENDANCE,
  INIT_EMPLOYEE,
  INIT_CARDMSG,
  LOAD_STS,
  LOAD_ATTENDANCE,
  LOAD_EMPLOYEE,
  LOAD_CARDMSG
} from './mutationTypes';

const mutations = {

  /**
   * 初始化
   */
  [INIT_STS](state) { 
    state.statisticsData.statisticsList = [];
    state.statisticsData.errorCodeList = [];
    state.statisticsData = Object.assign({}, state.statisticsData);
  },
  [INIT_ATTENDANCE](state) { 
    state.attendanceData.attendanceList = [];
    state.attendanceData.fields = ['Name','Group','Enter Time','Leave Time','Status','Detail'];
    state.attendanceData.fieldkeys = ['name','tenantName','inTime','outTime','state','detail'];
    state.attendanceData.fieldsWidth = ["20","40","30","60","60","40"]
    state.attendanceData.errorCodeList = [];
    state.attendanceData = Object.assign({}, state.attendanceData);
  },
  [INIT_EMPLOYEE](state) { 
    state.employeeData.employeeName = null;
    state.employeeData.gender = null; 
    state.employeeData.groupName = null;
    state.employeeData.location = null;
    state.employeeData.deviceType = null;
    state.employeeData.serialNo = null;
    state.employeeData.errorCodeList = [],
    state.employeeData = Object.assign({}, state.employeeData);
  },
  [INIT_CARDMSG](state) { 

    state.cardMsgData.cardMsgList = [];
    state.cardMsgData.fields = ['Content','Time','Status'];
    state.cardMsgData.fieldkeys = ['msg','createTime','status'];
    state.cardMsgData.fieldsWidth = ["33","33","33"]
    state.cardMsgData.errorCodeList = [];
    state.cardMsgData = Object.assign({}, state.cardMsgData);
  },
  
  /**
   * 載入考勤統計資料
   */
  [LOAD_STS](state, payload) { 
    if(payload.result != null) {
      let statisticsDataNew = Object.assign({}, state.statisticsData);
      statisticsDataNew.statisticsList = payload.result.statisticsData.statisticsList;
      statisticsDataNew.errorCodeList = payload.result.statisticsData.errorCodeList;
      state.statisticsData = Object.assign({}, state.statisticsData, statisticsDataNew)
    }
  },
  /**
   * 載入考勤資料
   */
  [LOAD_ATTENDANCE](state, payload) { 
    if(payload.result != null) {
      let attendanceDataNew = Object.assign({}, state.attendanceData);
      attendanceDataNew.attendanceList = payload.result.attendanceData.attendanceList;
      attendanceDataNew.errorCodeList = payload.result.attendanceData.errorCodeList;
      state.attendanceData = Object.assign({}, state.attendanceData, attendanceDataNew)
    }
  },
  /**
   * 載入員工資料
   */
  [LOAD_EMPLOYEE](state, payload) { 
    if(payload.result != null) {
      let employeeDataNew = Object.assign({}, state.employeeData);
      employeeDataNew.employeeName = payload.result.employeeData.employeeName;
      employeeDataNew.gender = payload.result.employeeData.gender;
      employeeDataNew.groupName = payload.result.employeeData.groupName;
      employeeDataNew.location = payload.result.employeeData.location;
      employeeDataNew.deviceType = payload.result.employeeData.deviceType;
      employeeDataNew.serialNo = payload.result.employeeData.serialNo;
      employeeDataNew.errorCodeList = payload.result.employeeData.errorCodeList;
      state.employeeData = Object.assign({}, state.employeeData, employeeDataNew)
    }
  },
  /**
   * 載入訊息資料
   */
  [LOAD_CARDMSG](state, payload) { 
    if(payload.result != null) {
      let cardMsgDataNew = Object.assign({}, state.cardMsgData);
      cardMsgDataNew.cardMsgList = payload.result.cardMsgData.cardMsgList;
      cardMsgDataNew.errorCodeList = payload.result.cardMsgData.errorCodeList;
      state.cardMsgData = Object.assign({}, state.cardMsgData, cardMsgDataNew)
    }
  },
};

export default mutations;
