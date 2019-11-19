import Vue from 'vue';
import Vuex from 'vuex';

import { ITodoState } from './modules/todo';
import { IMessageState } from './modules/message';

Vue.use(Vuex);

export interface IRootState {
  todo: ITodoState,
  message: IMessageState
}

export default new Vuex.Store<IRootState>({});
