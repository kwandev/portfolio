<template>
  <b-row>
    <b-col
      v-for="project in projects"
      :key="project.id"
      lg="4"
      md="6"
    >
      <project :project="project" />
    </b-col>
  </b-row>
</template>

<script>
import Project from './Project'

export default {
  components: {
    Project
  },
  props: {
    projects: {
      type: Array,
      required: true,
      default: () => ([])
    }
  }
}
</script>

<style>
  .bd-placeholder-img {
    text-anchor: middle;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>
