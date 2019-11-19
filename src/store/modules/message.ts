
import {
  VuexModule, Module, Action, Mutation, getModule,
} from 'vuex-module-decorators';
import store from '@/store'

export interface IMessageState {
    title: string,
    content: string,
}

@Module({ dynamic: true, store, name: 'message' })
export class Message extends VuexModule implements IMessageState {
    title = ''

    content = ''

    @Mutation
    SET_MESSAGE(content: string) {
      this.content = content;
    }

    @Action({ commit: 'SET_MESSAGE' })
    changeMessage(event: any) {
      return event.target.value;
    }

    @Action({ commit: 'SET_MESSAGE' })
    reverseMessage() {
      return this.content.split('').reverse().join('');
    }
}

export default getModule(Message);
