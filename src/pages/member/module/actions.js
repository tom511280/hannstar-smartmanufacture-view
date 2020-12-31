import Vue from 'vue'
import {
  INIT_PAGE,
  LOGIN,
  SIGNIN,
  SEND_RESETPWDEMAIL,
  RESET_PWDE
} from './mutationTypes';

const actions = {

  /**
   * 初始化
   */
  initPage({commit}) {
    commit(INIT_PAGE);
  },

  /**
   * 登入
   */
  login({commit},payload) {

    // 0 = success
    // 1 = email is empty
    // 2 = email format is fail
    // 3 = password is empty
    // 4 = email address does not exist
    // 5 = password is not valid
    // 6 = other

    payload.parameter.errorCodeList = [];
    //驗證email
    if(!Vue.prototype.$validUtil.isNotEmpty(payload.parameter.email)){
      payload.parameter.errorCodeList.push(1);
    }else if(!Vue.prototype.$validUtil.isEmail(payload.parameter.email)){
      payload.parameter.errorCodeList.push(2);
    }
    //驗證pwd
    if(!Vue.prototype.$validUtil.isNotEmpty(payload.parameter.password)){
      payload.parameter.errorCodeList.push(3);
    }
    //沒過就回傳
    if(payload.parameter.errorCodeList.length > 0){
      commit(LOGIN, payload);
      return;
    } 

    Vue.prototype.$axios({
      url:'testdata/member.json',
      params:{}
    }).then((resp) => { // 回應正常
      const respData = resp.data;
      for (let member of respData) {
        if(payload.parameter.email == member.email){
          if(payload.parameter.password == member.password) {
            // 0 = success
            payload.parameter.errorCodeList.push(0);
          }else{
            // 5 = password is not valid
            payload.parameter.errorCodeList.push(5);
          }
          commit(LOGIN, payload);
          return;
        }
      }
      // 4 = email address does not exist
      payload.parameter.errorCodeList.push(4);
      commit(LOGIN, payload);
      return;

    }).catch((error) => { // 異常處理
      window.console.error(error);
      window.alert(error)
    });

    payload.parameter.errorCodeList.push(6);
    commit(LOGIN, payload);
  },
  /**
   * 註冊
   */
  signin({commit},payload) {

    // 0 = success
    // 1 = email is empty
    // 2 = email format is fail
    // 3 = password is empty
    // 4 = email address is exist
    // 5 = password format is fail
    // 6 = member is empty

    payload.parameter.errorCodeList = [];
    //驗證email
    if(!Vue.prototype.$validUtil.isNotEmpty(payload.parameter.email)){
      payload.parameter.errorCodeList.push(1);
    }else if(!Vue.prototype.$validUtil.isEmail(payload.parameter.email)){
      payload.parameter.errorCodeList.push(2);
    }
    //驗證member
    if(!Vue.prototype.$validUtil.isNotEmpty(payload.parameter.member)){
      payload.parameter.errorCodeList.push(6);
    }
    //驗證pwd
    if(!Vue.prototype.$validUtil.isNotEmpty(payload.parameter.password)){
      payload.parameter.errorCodeList.push(3);
    }
    //沒過就回傳
    if(payload.parameter.errorCodeList.length > 0){
      commit(SIGNIN, payload);
      return;
    } 

    //驗證帳密是否正確
    if(payload.parameter.email == "hannstar@hannstar.com"){
      payload.parameter.errorCodeList.push(4);
    } else if(payload.parameter.password.length < 6){
      payload.parameter.errorCodeList.push(5);
    } else {
      payload.parameter.errorCodeList.push(0);
    }
    
    commit(SIGNIN, payload);
  },
  /**
   * 寄送重設密碼Email
   */
  sendResetpwdemail({commit},payload) {

    // 0 = success
    // 1 = email is empty
    // 2 = email format is fail
    // 3 = email is not exist
    payload.parameter.errorCodeList = [];
    //驗證是否為空
    if(!Vue.prototype.$validUtil.isNotEmpty(payload.parameter.email)){
      payload.parameter.errorCodeList.push(1);
      commit(SEND_RESETPWDEMAIL, payload);
      return;
    }
    //驗證email格式
    if(!Vue.prototype.$validUtil.isEmail(payload.parameter.email)){
      payload.parameter.errorCodeList.push(2);
      commit(SEND_RESETPWDEMAIL, payload);
      return;
    }
    
    //驗證信箱是否存在
    if(payload.parameter.email != 'hannstar@hannstar.com'){
      payload.parameter.errorCodeList.push(3);
    }else{
      payload.parameter.errorCodeList.push(0);
    }
    commit(SEND_RESETPWDEMAIL, payload);
    
  },
  /**
   * 重設密碼
   */
  resetPwd({commit},payload) {
    // 0 = success
    // 1 = password is empty
    // 2 = confirmPassword is empty
    // 3 = confirmPassword format is fail
    // 4 = password is not equal to confirm password

    payload.parameter.errorCodeList = [];
    //驗證是否為空
    if(!Vue.prototype.$validUtil.isNotEmpty(payload.parameter.password)){
      payload.parameter.errorCodeList.push(1);
    }
    if(!Vue.prototype.$validUtil.isNotEmpty(payload.parameter.confirmPassword)){
      payload.parameter.errorCodeList.push(2);
    }
    //沒過就回傳
    if(payload.parameter.errorCodeList.length > 0){
      commit(RESET_PWDE, payload);
      return;
    } 


    if(payload.parameter.password.length < 6){
      payload.parameter.errorCodeList.push(3);
      commit(RESET_PWDE, payload);
      return;
    }
    if(payload.parameter.password != payload.parameter.confirmPassword){
      payload.parameter.errorCodeList.push(4);
      commit(RESET_PWDE, payload);
      return;
    }

    payload.parameter.errorCodeList.push(0);
    commit(RESET_PWDE, payload);
  }
};

export default actions;
