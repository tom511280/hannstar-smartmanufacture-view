const state = {
  statisticsData:{
    statisticsList:[],
    errorCodeList:[],
  },
  attendanceData:{
    attendanceList:[],
    fields:[],
    fieldkeys:[],
    fieldsWidth:[],
    errorCodeList:[],
  },
  employeeData:{
    employeeName: null,
    gender: null, //boy=1 girl=0
    groupName: null,
    location: null,
    deviceType: null,
    serialNo: null, 
    errorCodeList:[],
  },
};
export default state;