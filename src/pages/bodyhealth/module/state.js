const state = {
    heartRate: {
      setting:{
        heartRateMaxValue: 0,
        heartRateMinValue: 0,
        loadingErrorCodeList:[],
        updateErrorCodeList:[],
      },
      normal: {
        fields:[],
        fieldkeys:[],
        Allfields:[],
        Allfieldkeys:[],
        fieldsWidth:[],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      abnormal: {
        fields:[],
        fieldkeys:[],
        Allfields:[],
        Allfieldkeys:[],
        fieldsWidth:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      }
    },
    sleep: {
      setting:{
        sleepMaxValue: 0,
        sleepMinValue: 0,
        loadingErrorCodeList:[],
        updateErrorCodeList:[],
      },
      normal: {
        fields:[],
        fieldkeys:[],
        Allfields:[],
        Allfieldkeys:[],
        fieldsWidth:[],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      abnormal: {
        fields:[],
        fieldkeys:[],
        Allfields:[],
        Allfieldkeys:[],
        fieldsWidth:[],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      }
    },
    sports: {
      setting:{
        sportsMinValue: 0,
        loadingErrorCodeList:[],
        updateErrorCodeList:[],
      },
      reached: {
        fields:[],
        fieldkeys:[],
        Allfields:[],
        Allfieldkeys:[],
        fieldsWidth:[],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      noReached: {
        fields:[],
        fieldkeys:[],
        Allfields:[],
        Allfieldkeys:[],
        fieldsWidth:[],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      sportsSort: {
        fields:[],
        fieldkeys:[],
        Allfields:[],
        Allfieldkeys:[],
        fieldsWidth:[],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
    }
  };
  
  export default state;
  