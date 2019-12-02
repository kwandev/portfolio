<template>
  <div>
    <section class="project_image">
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
        <b-carousel-slide>
          <h1>asdsadsadsa</h1>
          <template v-slot:img>
            <img
              class="d-block w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/seed/picsum/1024/480"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
    </section>

    <section class="container py-5">
      <section class="mb-5">
        <h2>🚀 토마토클래스</h2>
        <p class="text-muted">
          프로젝트 간단한 설명 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptates dolorum quaerat saepe cum unde vitae, nisi, voluptas praesentium beatae officia in asperiores deserunt ut iste molestias, possimus ipsam. Rerum.
        </p>
      </section>
      <section class="mb-5">
        <h3>🛠 기술스택</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>JS</li>
          <li>JS</li>
          <li>JS</li>
          <li>JS</li>
        </ul>
      </section>
      <section class="mb-5">
        <h3>👍 기여</h3>
        <p class="text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eaque pariatur ratione cum consectetur ab quos debitis consequuntur, maiores sequi libero repellat id ex consequatur atque a. Aliquam, rem recusandae!
        </p>
      </section>
      <section class="mb-5">
        <h3>📝 회고</h3>
        <p class="text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eaque pariatur ratione cum consectetur ab quos debitis consequuntur, maiores sequi libero repellat id ex consequatur atque a. Aliquam, rem recusandae!
        </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
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
