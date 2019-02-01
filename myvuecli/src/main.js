import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GLOBALcONFIG from './config/config'

Vue.config.productionTip = false
Vue.prototype.$GLOBALcONFIG = GLOBALcONFIG;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
