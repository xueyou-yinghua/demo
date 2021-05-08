<template>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {sk} from './setup/Sakura';

export default defineComponent({
  name: "Sakura",
  setup:sk,
})
</script>
<style lang="scss">
@import "scss/Sakura";
</style>