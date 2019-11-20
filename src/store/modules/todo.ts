
import {
  VuexModule, Module, Action, Mutation, getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface ITodoItem {
    id: number,
    title: string,
}

export interface ITodoState {
    todos: ITodoItem[],
}

@Module({ dynamic: true, store, name: 'todoModule' })
class TodoModule extends VuexModule implements ITodoState {
    todos = [] as ITodoItem[];

    @Mutation
    ADD_TODO_ITEM(todoItem: ITodoItem): void {
      this.todos.push(todoItem);
    }

    @Action({ commit: 'ADD_TODO_ITEM', rawError: true })
    addTodoItem(title: string): ITodoItem {
      let newId = 1;
      if (this.todos.length) {
        newId = this.todos.reduce((prev, curr) => (prev.id > curr.id ? prev : curr)).id + 1;
      }
      return { title, id: newId };
    }
}

export default getModule(TodoModule);
