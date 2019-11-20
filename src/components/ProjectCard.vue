<template>
  <div>
    <b-card
      :title="project.title"
      :img-src="project.coverPhoto"
      img-alt="Image"
      img-top
      tag="project"
      style="max-width: 20rem;"
      class="mb-2 project-card"
    >
      <b-card-text>
        {{ project.summary }}
      </b-card-text>

      <b-button :to="`projects/${project.slug}`" variant="primary">View</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ProjectCard extends Vue {
  @Prop() private project!: object
}

</script>

<style scoped lang="scss">
.project-card {
  min-height: 400px;
}
</style>
