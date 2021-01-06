import {
  INIT,
} from './mutationTypes';

const mutations = {
  //初始化
  [INIT](state, payload) { 
    // state = {};
    // state = Object.assign({});
    //預設
    if(payload.parameter == null){
      state.isShowSiderbar = true;
      state.isShowTopHeader = true;
      state.isContainerBase = true;
    }else{
      state.isShowSiderbar = payload.parameter.isShowSiderbar;
      state.isShowTopHeader = payload.parameter.isShowTopHeader;
      state.isContainerBase = payload.parameter.isContainerBase;
    }
    window.console.log(state);
  },
};

export default mutations;
