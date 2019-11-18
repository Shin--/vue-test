<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Todo from './Todo.vue';

@Component
export default class TodoItem extends Vue {
  @Prop() private todo!: Todo;
}
</script>

<style scoped lang="scss">
</style>
