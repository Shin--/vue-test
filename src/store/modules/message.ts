
import {
  VuexModule, Module, Action, Mutation, getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface IMessage {
  title: string,
  content: string,
}

export interface IMessageState {
  message: IMessage,
}

@Module({ dynamic: true, store, name: 'message' })
export class Message extends VuexModule implements IMessageState {
    message = { title: '', content: '' }

    @Mutation
    SET_CONTENT(content: string) {
      this.message.content = content;
    }

    @Action({ commit: 'SET_CONTENT' })
    setContent(content: string) {
      return content;
    }

    @Action({ commit: 'SET_CONTENT' })
    reverseContent() {
      return this.message.content.split('').reverse().join('');
    }
}

export default getModule(Message);
