import {
  INIT_STS,
  INIT_ATTENDANCE,
  INIT_EMPLOYEE,
  INIT_CARDMSG,
  INIT_POSITION,
  INIT_HRA,
  INIT_ATTENDANCEBASE,
  INIT_SOS,
  INIT_MEETING,
  LOAD_STS,
  LOAD_ATTENDANCE,
  LOAD_EMPLOYEE,
  LOAD_CARDMSG,
  LOAD_POSITION,
  LOAD_HRA,
  LOAD_ATTENDANCEBASE,
  LOAD_SOS,
  LOAD_MEETING
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
  [INIT_POSITION](state) { 
    state.positionData.positionList = [];
    state.positionData.fields = ['Location','Start Time','End Time','Duration'];
    state.positionData.fieldkeys = ['addrDescri','createTime','updateTime','localStat'];
    state.positionData.fieldsWidth = ["25","25","25","25"]
    state.positionData.errorCodeList = [];
    state.positionData = Object.assign({}, state.positionData);
  },
  [INIT_HRA](state) { 
    state.hraData.hraList = [];
    state.hraData.fields = ['Minimum','Maximume','Average'];
    state.hraData.fieldkeys = ['minimum','maximum','average'];
    state.hraData.fieldsWidth = ["25","25","25"]
    state.hraData.errorCodeList = [];
    state.hraData = Object.assign({}, state.hraData);
  },
  [INIT_ATTENDANCEBASE](state) { 
    state.attendanceBaseData.attendanceBaseList = [];
    state.attendanceBaseData.fields = ['Date','Time','Status'];
    state.attendanceBaseData.fieldkeys = ['date','time','state'];
    state.attendanceBaseData.fieldsWidth = ["20","40","30"]
    state.attendanceBaseData.errorCodeList = [];
    state.attendanceBaseData = Object.assign({}, state.attendanceBaseData);
  },
  [INIT_SOS](state) { 
    state.sosData.sosList = [];
    state.sosData.fields = ['Date','Time','Check'];
    state.sosData.fieldkeys = ['date','time','check'];
    state.sosData.fieldsWidth = ["20","40","30"]
    state.sosData.errorCodeList = [];
    state.sosData = Object.assign({}, state.sosData);
  },
  [INIT_MEETING](state) { 
    state.meetingData.meetingList = [];
    state.meetingData.fields = ['Meeting Room','Duration'];
    state.meetingData.fieldkeys = ['room','duration'];
    state.meetingData.fieldsWidth = ["20","40"]
    state.meetingData.errorCodeList = [];
    state.meetingData = Object.assign({}, state.meetingData);
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
  /**
   * 載入位置資料
   */
  [LOAD_POSITION](state, payload) { 
    if(payload.result != null) {
      let positionDataNew = Object.assign({}, state.positionData);
      positionDataNew.positionList = payload.result.positionData.positionList;
      positionDataNew.errorCodeList = payload.result.positionData.errorCodeList;
      state.positionData = Object.assign({}, state.positionData, positionDataNew)
    }
  },
  /**
   * 載入心率分析
   */
  [LOAD_HRA](state, payload) { 
    if(payload.result != null) {
      let hraDataNew = Object.assign({}, state.hraData);
      hraDataNew.hraList = payload.result.hraData.hraList;
      hraDataNew.errorCodeList = payload.result.hraData.errorCodeList;
      state.hraData = Object.assign({}, state.hraData, hraDataNew)
    }
  },
  /**
   * 載入考勤基本資料
   */
  [LOAD_ATTENDANCEBASE](state, payload) { 
    if(payload.result != null) {
      let attendanceBaseDataNew = Object.assign({}, state.attendanceBaseData);
      attendanceBaseDataNew.attendanceBaseList = payload.result.attendanceBaseData.attendanceBaseList;
      attendanceBaseDataNew.errorCodeList = payload.result.attendanceBaseData.errorCodeList;
      state.attendanceBaseData = Object.assign({}, state.attendanceBaseData, attendanceBaseDataNew)
    }
  },
  /**
   * 載入sos資料
   */
  [LOAD_SOS](state, payload) { 
    if(payload.result != null) {
      let sosDataNew = Object.assign({}, state.sosData);
      sosDataNew.sosList = payload.result.sosData.sosList;
      sosDataNew.errorCodeList = payload.result.sosData.errorCodeList;
      state.sosData = Object.assign({}, state.sosData, sosDataNew)
    }
  },
  /**
   * 載入meeting資料
   */
  [LOAD_MEETING](state, payload) { 
    if(payload.result != null) {
      let meetingDataNew = Object.assign({}, state.meetingData);
      meetingDataNew.meetingList = payload.result.meetingData.meetingList;
      meetingDataNew.errorCodeList = payload.result.meetingData.errorCodeList;
      state.meetingData = Object.assign({}, state.meetingData, meetingDataNew)
    }
  },
};

export default mutations;
