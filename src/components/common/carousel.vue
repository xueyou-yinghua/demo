<template>
  <div class="carousel">
    <div class="carousel-container"
         :style="style"
         @mouseenter="show"
         @mouseleave="unShow">
      <transition name="left">
        <button
            v-show="packageData.show"
            class="carousel-btn carousel-left">

        </button>
      </transition>
      <transition name="right">
        <button
            v-show="packageData.show"
            class="carousel-btn carousel-right">

        </button>
      </transition>
    </div>

    <ul>

    </ul>
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