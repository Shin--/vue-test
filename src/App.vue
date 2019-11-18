<template>
  <div id="app">
    <p>Message: {{ message }}</p>
    <button v-on:click="reverseMessage">
      Reverse Message
    </button>
    <input :value="message" @input="changeMessage"/>

    <h3 class="padding-top-40">Todo list</h3>
    <Todo/>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import Todo from './components/Todo.vue';

@Component({
  components: {
    Todo,
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
  methods: {
    ...mapActions([
      'changeMessage',
      'reverseMessage',
    ]),
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@for $i from 1 to 40 {
  $i: $i+1;
  .padding-top-#{$i} {
    padding-top: $i * 1px;
  }
}

</style>
