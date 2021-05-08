<template>
  <transition name="nav">
    <div class="small-nav" v-show="store.getters.show">
      <s-nav auto-class="fewNav"/>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {smallNav} from "../setup/smallNav";
import SNav from "../common/nav.vue";

export default defineComponent({
  name: "smallNav",
  components: {SNav},
  setup:smallNav,
})
</script>

<style lang="scss">
.small-nav{
  position: absolute;
  width: 300px;
  height: 100%;
  background: #ffd;
  z-index: 5;
  overflow: hidden;
  word-break: break-word;
}
.nav-enter-active,.nav-leave-active{
  transition: all 0.5s ease-out;
}

.nav-enter-from,
.nav-leave-to {
  transform: translateX(-100%);
}
</style>