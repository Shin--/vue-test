<template>
  <div>
    <TodoItem v-for="todoItem in todos" v-bind:key="todoItem.id" :todo="todoItem"/>
    <input :value="message.content" v-on:change="changeTodoTitle"/>
    <button @click="addTodoItem">Add</button>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import TodoItem from './TodoItem.vue';
import TodoModule, { ITodoState, ITodoItem } from '@/store/modules/todo';
import MessageModule from '@/store/modules/message';

@Component({
  components: {
    TodoItem,
  },
})
export default class Todo extends Vue {
  todoTitle: string = ''

  get todos() {
    return TodoModule.todos;
  }

  get message() {
    return MessageModule.message;
  }

  changeTodoTitle(inputEvent: any) {
    this.todoTitle = inputEvent.target.value;
  }

  addTodoItem(): void {
    TodoModule.addTodoItem(this.todoTitle);
  }
}

</script>

<style scoped lang="scss">
</style>
