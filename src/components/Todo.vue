<template>
  <div>
    <TodoItem v-for="todoItem in todo.todos" v-bind:key="todoItem.id" v-bind:todo="todoItem"/>
    <input :value="message.content"/>
    <button @click="mmmaddTodoItem">Add</button>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import TodoItem from './TodoItem.vue';
import TodoModule from '@/store/modules/todo';

@Component({
  components: {
    TodoItem,
  },
})
export default class Todo extends Vue {
  get todos() {
    return TodoModule.todos;
  }

  addTodoItem(): void {
    console.log('todos:', this.todos);
  }
}

</script>

<style scoped lang="scss">
</style>
