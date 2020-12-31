import axios from 'axios';

const plugin = {
  install(Vue) {
    const $vm = Vue;
    //axios.defaults.baseURL = 'http://localhost:8080/'; // dev
    // axios.defaults.baseURL = '/WantSmartVending'; // prod
    // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

    // axios.interceptors.request.use((config) => {
    //   //$vm.prototype.$loading.show();

    //   return config;
    // }, (error) => {
    //   //$vm.prototype.$loading.hide();
    //   window.console.log('request error: ', error);

    //   return Promise.reject(error);
    // });
    // axios.interceptors.response.use((response) => {
        //  window.console.log(response)
    //   // console.log('====================================');
    //   // console.log('axios.interceptors.response:', response);
    //   // console.log('====================================');

    //   // 回傳資訊有錯誤代碼時不顯示alert
    //   const apiList = [
    //     '/order/querySettlementTradInformationData', // 查詢結算交易資料
    //     '/order/querySettlementGoodsChangeData', // 查詢結算商品變動單資料
    //     '/order/querySettlementCustomerComplaintData', // 查詢結算客訴單資料
    //     '/order/querySettlementTradInformation',
    //   ];
    //   const apiName = response.config.url.replace(response.config.baseURL, '');

    //   //查詢訂單明細、商品變動單、客訴單資料顯示成功or失敗
    //   if (apiList.indexOf(apiName) > 0) {
    //     if (response.data.code === '9999' || response.data.rc === '9999') {
    //       setTimeout(() => {
    //         $vm.prototype.$showDataStatus.show({msg: '数据加载失敗'});
    //       }, 1000);

    //       setTimeout(() => {
    //         $vm.prototype.$showDataStatus.hide();
    //       }, 3000);
    //     } else {
    //       setTimeout(() => {
    //         $vm.prototype.$showDataStatus.show({msg: '数据加载成功'});
    //       }, 1000);

    //       setTimeout(() => {
    //         $vm.prototype.$showDataStatus.hide();
    //       }, 2500);
    //     }
    //   }

    //   if (apiList.indexOf(apiName) < 0) {
    //     if (response.data.rc) { // 有錯誤代碼
    //       if (response.data.rc === '9999') {
    //         $vm.prototype.$alert.show({ msg: '系统异常，请稍后再试。' });
    //         $('.btn-icon').removeAttr('disabled');
    //       } else {
    //         $vm.prototype.$alert.show({ msg: response.data.rm });
    //         $('.btn-icon').removeAttr('disabled');
    //       }
    //     }
    //   }

    //   setTimeout(() => {
    //     $vm.prototype.$loading.hide();
    //   }, 1000);
    //   return response;
    // }, (error) => {
    //   $vm.prototype.$loading.hide();
    //   $vm.prototype.$alert.show({ msg: '连线异常，请稍后再试。' });
    //   $('.btn-icon').removeAttr('disabled');

    //   return Promise.reject(error);
    // });

    $vm.prototype.$axios = axios;
  },
};

export default plugin;
