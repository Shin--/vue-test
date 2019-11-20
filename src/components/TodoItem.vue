<template>
  <li>{{ todo.title }}</li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ITodoItem } from '../store/modules/todo';

@Component
export default class TodoItem extends Vue {
  @Prop() private todo!: ITodoItem;
}
</script>

<style scoped lang="scss">
</style>
