<template>
  <b-card
    tag="article"
    class="mb-4 shadow-sm"
  >
    <template v-slot:header>
      <nuxt-link :to="`/project/${project.id}`" tag="a">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Thumbnail"
        >
          <title>title</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
      </nuxt-link>
    </template>
    <b-card-title>
      <div :title="project.name" class="text-truncate">
        {{ project.name }}
      </div>
    </b-card-title>
    <b-card-text>
      {{ project.summary }}
    </b-card-text>

    <div class="d-flex justify-content-between align-items-center">
      <b-button @click="goProject" variant="outline-secondary" size="sm">
        View
      </b-button>
      <small class="text-muted">{{ project.date }}</small>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    goProject () {
      this.$router.push({
        path: `/project/${this.project.id}`
      })
    }
  }
}
</script>

<style scoped>
  .card-header { padding: 0; }

  @media (min-width: 768px) {
    .card-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      height: 72px;
      overflow: hidden;
    }
  }
</style>
