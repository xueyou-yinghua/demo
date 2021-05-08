<template>
  <div class="world">
    world
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {world} from '../../setup/world';

export default defineComponent({
  name: "world",
  setup:world,
})
</script>

<style lang="scss">

</style>