<template>
  <div class="carousel">

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {carousel} from "../setup/common/carousel";

export default defineComponent({
  name: "carousel",
  setup:carousel,
})
</script>

<style lang="scss">
@import "../scss/common/carousel";
</style>