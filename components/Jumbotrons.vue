<template>
  <div class="text-center">
    <b-jumbotron>
      <template v-slot:header>
        Album example
      </template>
      <template v-slot:lead>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
        featured content or information.
      </template>

      <b-button variant="primary" href="#">
        More Info
      </b-button>
      <b-button variant="secondary" href="#">
        More Info
      </b-button>
    </b-jumbotron>
  </div>
</template>

<style lang="scss" scoped>
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;

  p:last-child { margin-bottom: 0; }
  .lead {
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
  }
}
.jumbotron-heading { font-weight: 300; }

@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}
</style>
