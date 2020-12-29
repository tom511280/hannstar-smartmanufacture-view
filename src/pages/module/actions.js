import {
  INIT,
} from './mutationTypes';

const actions = {

  /**
   * 初始化
   */
  init({commit},payload) {
    commit(INIT, payload);
  },
};

export default actions;
