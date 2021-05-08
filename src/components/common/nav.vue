<template>
  <div :class="autoClass">
    <div class="underline" :style="style"/>
    <ul class="nav-ul">
      <li v-for="list in listView.lists" :key="list.id" class="nav-li">
        <router-link :to="list.url">
          {{list.text}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {nav} from '../setup/common/nav';

export default defineComponent({
  name: "sNav",
  props:{
    autoClass:{
      type:String,
      default:'normal-nav',
    }
  },
  setup:nav,
})
</script>

<style lang="scss">
@import "../scss/common/nav";
</style>