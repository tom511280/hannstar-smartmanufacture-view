const state = {
    heartRate: {
      normal: {
        fields:['Name','Group','Heart Rate','Time'],
        fieldkeys:['name','group','heart Rate','time'],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      abnormal: {
        fields:['Name','Group','Heart Rate','Time'],
        fieldkeys:['name','group','heart Rate','time'],
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
        fields:['Name','Group','Heart Rate','Time'],
        fieldkeys:['name','group','heart Rate','time'],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      abnormal: {
        fields:['Name','Group','Heart Rate','Time'],
        fieldkeys:['name','group','heart Rate','time'],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      }
    },
    sports: {
      reachedgoal: {
        fields:['Name','Group','Heart Rate','Time'],
        fieldkeys:['name','group','heart Rate','time'],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      notreachedgoal: {
        fields:['Name','Group','Heart Rate','Time'],
        fieldkeys:['name','group','heart Rate','time'],
        datas:[],
        errorCodeList:[],
        total: 0, // 總頁數
        pageNow: 1, // 當前頁數
        pageSize: 10, // 每頁數據筆數
        totalNumber: 0 //總數
      },
      sportsort: {
        fields:['NO.','Name','Group','Time','Steps'],
        fieldkeys:['no','name','group','time','steps'],
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
  