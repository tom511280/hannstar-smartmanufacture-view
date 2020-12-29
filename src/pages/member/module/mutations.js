import {
  INIT_PAGE,
  LOGIN,
  SIGNIN,
  SEND_RESETPWDEMAIL,
  RESET_PWDE
} from './mutationTypes';

const mutations = {

  //初始化
  [INIT_PAGE](state) { 
    state.email = null;
    state.password = null;
    state.member = null;
    state.memberName = null;
    state.memberImg = null;
    state.confirmPassword = null;
  },
  // 登入
  [LOGIN](state, payload) { 
    state.email = payload.parameter.email;
    state.password = payload.parameter.password;
    state.member = payload.parameter.member;
    state.memberName = payload.parameter.memberName;
    state.memberImg = payload.parameter.memberImg;
    state.errorCodeList = payload.parameter.errorCodeList;
  },
  // 註冊
  [SIGNIN](state, payload) { 
    state.email = payload.parameter.email;
    state.password = payload.parameter.password;
    state.member = payload.parameter.member;
    state.memberName = payload.parameter.memberName;
    state.memberImg = payload.parameter.memberImg;
    state.errorCodeList = payload.parameter.errorCodeList;
  },
  // 寄送重設密碼Email
  [SEND_RESETPWDEMAIL](state, payload) { 
    window.console.log(state);
    state.errorCodeList = payload.parameter.errorCodeList;
  },
  // 重設密碼
  [RESET_PWDE](state, payload) { 
    window.console.log(state);
    state.errorCodeList = payload.parameter.errorCodeList;
  },
};

export default mutations;
