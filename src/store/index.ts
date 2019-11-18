import Vue from 'vue';
import Vuex from 'vuex';

import todo from './modules/todo';
import message from './modules/message';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    todo,
    message,
  },
});
