<template>
  <div>
    <headers />
    <keep-alive>
      <nuxt />
    </keep-alive>
  </div>
</template>

<script>
import Headers from '~/components/Headers'
export default {
  name: 'LayoutDefault',
  components: {
    Headers
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active { transition: opacity .2s; }
.page-enter,
.page-leave-to { opacity: 0; }
</style>
