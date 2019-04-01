import Vue from 'vue'
import Vuex from 'vuex'
import { createVuexAlong } from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "小强",
    commitName: "小刘"
  },
  mutations: {
    changeCommitName(state, data) {
      state.commitName = data
    }
  },
  actions: {
    changeName({
      state
    }, data) {
      state.name = data;
    }
  },
  plugins: [createVuexAlong({})]
})
