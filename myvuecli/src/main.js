import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import GLOBALCONFIG from './config/config';
import axios from "axios"
import VueClipboard from 'vue-clipboard2'
import animated from 'animate.css' // npm install animate.css --save安装，再引入

Vue.use(animated)
Vue.use(VueClipboard)
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$GLOBALCONFIG = GLOBALCONFIG;
Vue.prototype.$ajax = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
