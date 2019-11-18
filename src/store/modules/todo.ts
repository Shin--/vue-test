
import {
  VuexModule, Module, Action, Mutation, getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface TodoItem {
    id: number,
    title: string,
}

export interface ITodoState {
    todos: TodoItem[],
}

@Module
class Todo extends VuexModule implements ITodoState {
    todos = [] as TodoItem[];

    @Mutation
    ADD_TODO_ITEM(todoItem: TodoItem): void {
      this.todos.push(todoItem);
    }

    @Action({ commit: 'ADD_TODO_ITEM' })
    addTodoItem(title: string): TodoItem {
      const id: number = this.todos.length ? this.todos.reduce((prev, curr) => (prev.id > curr.id ? prev : curr)).id : 1;
      return { id, title };
    }
}

export default getModule(Todo);
