<template>
  <div class="v-home">
    <carousel/>
  </div>
</template>



<script lang="ts">
import {defineComponent} from "vue";
import {home} from "../../setup/home";
import Carousel from "../../components/common/carousel.vue";

export default defineComponent({
  name: "home",
  components: {Carousel},
  setup:home,
})
</script>

<style lang="scss">
@import "scss/home";
</style>