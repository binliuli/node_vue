import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = r => require.ensure([],()=>r(require('./components/HelloWorld.vue')),'hello-world')
const Vuex = r => require.ensure([],()=>r(require('./components/Vuex.vue')),'Vuex')
const ReadJson = r => require.ensure([],()=>r(require('./components/ReadJson.vue')),'ReadJson')
const Vis = r => require.ensure([],()=>r(require('./components/visjs.vue')),'vis')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld,
      redirect: '/node' ,
      children: [
        { path: "/node", component: ReadJson },
        { path: "/vuex", component: Vuex },
        { path: "/vis", component: Vis },
      ]
    }
  ]
})
