import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GLOBALCONFIG from './config/config';
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$GLOBALCONFIG = GLOBALCONFIG;
Vue.prototype.$ajax = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
