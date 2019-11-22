<template>
  <b-row>
    <b-col
      v-for="item in 10"
      :key="item"
      lg="4"
      md="6"
    >
      <project />
    </b-col>
  </b-row>
</template>

<script>
import Project from './Project'

export default {
  components: {
    Project
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
