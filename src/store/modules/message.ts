
import {
  VuexModule, Module, Action, Mutation, MutationAction, getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface IMessageState {
    title: string,
    content: string,
}

@Module({ dynamic: true, store, name: 'todo' })
class Message extends VuexModule implements IMessageState {
    title = ''

    content = ''

    @MutationAction
    changeMessage(content: string) {
      return { content };
    }

    @MutationAction
    reverseMessage() {
      return { content: this.content.split('').reverse().join('') };
    }
}

export default getModule(Message);
