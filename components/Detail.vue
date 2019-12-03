<template>
  <div>
    <section v-if="carousel.length" class="project_image">
      <b-carousel
        id="carousel"
        v-model="slide"
        :interval="5000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide v-for="(item, index) in carousel" :key="index">
          <h1>{{ item.title }}</h1>
          <template v-slot:img>
            <img
              :src="item.url"
              class="d-block w-100"
              width="1024"
              height="480"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
    </section>

    <section class="container py-5">
      <slot />

      <b-button @click="goBack" variant="outline-secondary">
        &larr; Back
      </b-button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    carousel: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#carousel {
  text-shadow: 1px 1px 2px #333;
}
img { object-fit: cover; }

@media (max-width: 768px) {
  img { height: auto; }
}
</style>
