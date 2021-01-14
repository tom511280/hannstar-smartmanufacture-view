import Vue from 'vue'
import App from './App.vue'



import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'normalize.css/normalize.css'
import '@/assets/css/hannstarCommon.css'; /*引入登入公共樣式*/
// import '@/assets/css/fontawesome.css';


//引入util
import validUtilPlugin from '@/plugins/validUtil';
Vue.use(validUtilPlugin);

//引入安裝註冊路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from '@/router.config';
const router=new VueRouter(routes)

//引入animate.css
import animated from 'animate.css' 
Vue.use(animated)

//引入vue-sidebar-menu
import VueSidebarMenu from 'vue-sidebar-menu'
import '@/assets/css/vue-sidebar-menu.css';
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

//引入狀態管理  自動找底下index
import store from './store'

//引入vue-echarts圖表
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
// import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
// import 'echarts-gl' //等等會使用 grapic 設定圖形文字，故需載入此 module
// Vue.component('v-chart', ECharts) // 註冊為 global component

//引入axios
// import axios from 'axios'
// Vue.prototype.axios= axios
import axiosPlugin from '@/plugins/axios';
Vue.use(axiosPlugin);

//引入element-ui用於分頁
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
