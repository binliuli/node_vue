import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = r => require.ensure([], () => r(require('./components/HelloWorld.vue')), 'hello-world')
const Vuex = r => require.ensure([], () => r(require('./components/Vuex.vue')), 'Vuex')
const ReadJson = r => require.ensure([], () => r(require('./components/ReadJson.vue')), 'ReadJson')
const Vis = r => require.ensure([], () => r(require('./components/visjs.vue')), 'vis')
const D3 = r => require.ensure([], () => r(require('./components/d3js.vue')), 'd3')
const Practice = r => require.ensure([], () => r(require('./components/Practice.vue')), 'Practice')
const menu = r => require.ensure([], () => r(require('./components/menu.vue')), 'menu')
const screenshot = r => require.ensure([], () => r(require('./components/screenshot.vue')), 'screenshot')
const Aaaa = r => require.ensure([], () => r(require('./components/Aaaa.vue')), 'Aaaa')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld,
      redirect: '/node',
      children: [
        { path: "/node", component: ReadJson },
        { path: "/vuex", component: Vuex },
        { path: "/vis", component: Vis },
        { path: "/d3", component: D3 },
        { path: "/practice", component: Practice },
        { path: "/menu", component: menu },
        { path: "/screenshot", component: screenshot },
        { path: "/aaa", component: Aaaa }
      ]
    }
  ]
})
