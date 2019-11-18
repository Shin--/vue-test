<template>
  <div>
    <TodoItem v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TodoItem from './TodoItem.vue';

@Component({
  components: {
    TodoItem,
  },
})
export default class Todo extends Vue {}
</script>

<style scoped lang="scss">
</style>
