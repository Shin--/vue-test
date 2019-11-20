import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface IRootState {
  state: {},
  mutations: {},
  actions: {},
  modules: {}
}

export default new Vuex.Store<IRootState>({})
