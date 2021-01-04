import {
  INIT,
} from './mutationTypes';

const mutations = {
  //初始化
  [INIT](state, payload) { 
    //預設
    if(payload.parameter == null){
      state.isShowSiderbar = true;
      state.isShowTopHeader = true;
    }else{
      state.isShowSiderbar = payload.parameter.isShowSiderbar;
      state.isShowTopHeader = payload.parameter.isShowTopHeader;
    }
  },
};

export default mutations;
