const state = {
    heartRate: {
      normal: {
        fields:[],
        fieldkeys:[],
        Allfields:[],
        Allfieldkeys:[],
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
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      }
    },
    sleep: {
      normal: {
        fields:[],
        fieldkeys:[],
        Allfields:[],
        Allfieldkeys:[],
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
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      }
    },
    sports: {
      reached: {
        fields:['Name','Group','Step'],
        fieldkeys:['name','group','step'],
        Allfields:['Name','Group','Step'],
        Allfieldkeys:['name','group','step'],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      noReached: {
        fields:['Name','Group','Step'],
        fieldkeys:['name','group','step'],
        Allfields:['Name','Group','Step'],
        Allfieldkeys:['name','group','step'],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      sportsSort: {
        fields:['No','Name','Group','Step'],
        fieldkeys:['no','name','group','step'],
        Allfields:['No','Name','Group','Step'],
        Allfieldkeys:['no','name','group','step'],
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
  