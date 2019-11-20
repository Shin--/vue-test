<template>
  <div id="app">
    <!-- <h3>Message</h3>
    <p>Title: {{ message.title }}</p>
    <p>Content: {{ message.content }}</p>
    <button v-on:click="reverseMessage">
      Reverse message content
    </button>
    <input :value="message.content" @input="changeMessage"/>
    <h3 class="padding-top-40">Todo list</h3>
    <Todo/> -->
    <p>
      <router-link to="/projects">
        Projects
      </router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import Todo from './components/Todo.vue';
// import MessageModule from '@/store/modules/message';
import ProjectList from './views/ProjectList.vue'

@Component({
  components: {
    ProjectList
  }
})
export default class App extends Vue {

  // get message() {
  //   return MessageModule.message;
  // }

  // changeMessage(event: any) {
  //   MessageModule.setContent(event.target.value);
  // }

  // reverseMessage() {
  //   MessageModule.reverseContent();
  // }
}
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
