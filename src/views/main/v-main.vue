<template>
  <div class="v-main">
    <small-nav/>
    <m-header/>
    <div class="container">
      <div class="content major">
        <router-view v-if="$route.path!=='/'"/>
        <home v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {main} from '../../setup/main';
import MHeader from "../../components/head/m-header.vue";
import SmallNav from "../../components/small-nav/smallNav.vue";
import Home from "./home.vue";

export default defineComponent({
  name: "v-main",
  components: {Home, SmallNav, MHeader},
  setup:main,
})
</script>

<style lang="scss">
@import "scss/main";
</style>