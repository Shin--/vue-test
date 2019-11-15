import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface Todo {
  id: number,
  title: string,
}

export default new Vuex.Store({
  state: {
    message: 'Hi! I am a message.',
    todoList: [] as Todo[],
  },
  mutations: {
    changeMessage(state, newMessage: string) {
      state.message = newMessage;
    },
    reverseMessage(state) {
      state.message = state.message.split('').reverse().join('');
    },
    addTodo(state, todo: Todo) {
      state.todoList.push(todo);
    },
  },
  actions: {
    changeMessage(context, newMessage) {
      context.commit('changeMessage', newMessage);
    },
    reverseMessage(context) {
      context.commit('reverseMessage');
    },
    addTodo(context, todo: Todo) {
      context.commit('addTodo', todo);
    },
  },
  modules: {
  },
});
