<template>
  <div class="trade-mark">
    <router-link to="/">
      <img src="../../../public/images/mySk1.png" class="normal-img">
      <img src="../../../public/images/mySk2.png" class="small-img">
    </router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "trade",
})
</script>

<style lang="scss">
.trade-mark{
  display: inline-block;
  height: 100%;
  a{
    display: inline-flex;
    height: 100%;
    align-items: center;
    padding: 0 20px;
  }
  img{
    height: 50%;
  }
}
.small-img{
  display: none;
}
@media screen and (max-width: 1000px){
  .normal-img{
    display: none;
  }
  .small-img{
    display: block;
  }
}
</style>