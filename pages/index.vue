<template>
  <div>
    <main role="main">
      <jumbotrons />
      <div class="py-5 bg-light">
        <div class="container">
          <project-list />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Jumbotrons from '~/components/Jumbotrons'
import ProjectList from '~/components/ProjectList'

export default {
  name: 'Index',
  components: {
    Jumbotrons,
    ProjectList
  }
}
</script>

<style lang="scss" scoped>
</style>
