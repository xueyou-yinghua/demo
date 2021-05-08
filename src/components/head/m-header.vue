<template>
  <header class="m-header">
    <div class="m-head major">
      <trade/>
      <div class="head-nav" v-if="store.state.area.width>1000">
        <s-nav/>
      </div>
      <div class="head-menu" v-else>
        <button @click="updateShow()">
          <i class="icon-menu"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {VHead} from '../setup/vHead';
import Trade from "../common/trade.vue";
import sNav from "../common/nav.vue";

export default defineComponent({
  name: "m-header",
  components: {sNav, Trade},
  setup:VHead,
})
</script>

<style lang="scss">
@import "../scss/head";
</style>