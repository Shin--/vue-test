<template>
  <ol>
    <TodoItem/>
  </ol>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TodoItem extends Vue {}
</script>

<style scoped lang="scss">
</style>
