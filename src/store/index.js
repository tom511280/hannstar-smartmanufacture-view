import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from "vuex-persistedstate"



//by公用
import commonModule from '@/pages/module';

//by功能
import memberModule from '@/pages/member/module';
import bodyhealthModule from '@/pages/bodyhealth/module';
import groupAndStaffModule from '@/pages/groupAndStaff/module';
import attendanceModule from '@/pages/attendance/module';


Vue.use(Vuex);

//控管以下所有modules
export default new Vuex.Store({
  modules: {
    //by公用
    commonModule: commonModule,
    //by功能
    memberModule: memberModule,
    bodyhealthModule: bodyhealthModule,
    groupAndStaffModule: groupAndStaffModule,
    attendanceModule: attendanceModule,
  },
  //持久化vuex 避免因為刷新頁面數據消失
  plugins: [createPersistedState()]
});
