
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

@Module({ dynamic: true, store, name: 'todos' })
class Todo extends VuexModule implements ITodoState {
    todos = [] as ITodoItem[];

    @Mutation
    ADD_TODO_ITEM(todoItem: ITodoItem): void {
      this.todos.push(todoItem);
    }

    @Action({ commit: 'ADD_TODO_ITEM' })
    addTodoItem(title: string): ITodoItem {
      const lowestId: number | undefined = this.todos.reduce(
        (prev, curr) => (prev.id > curr.id ? prev : curr),
      ).id;
      return { title, id: lowestId || 1 };
    }
}

export default getModule(Todo);
