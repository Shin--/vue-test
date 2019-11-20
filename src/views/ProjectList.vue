<template>
  <b-container>
    <b-row>
      <b-col cols="4" v-for="project in projects" v-bind:key="project.slug">
        <ProjectCard :project="project"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProjectModule from '@/store/modules/projects'
import ProjectCard from '@/components/ProjectCard.vue'

@Component({
  components: {
    ProjectCard
  }
})
export default class ProjectList extends Vue {
  todoTitle: string = ''

  get projects () {
    return ProjectModule.projects
  }

  async created () {
    await ProjectModule.fetchProjects()
  }
}
</script>

<style scoped lang="scss">
</style>
