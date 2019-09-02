<template>
  <div id="app">
    <com-header id="header"></com-header>
    <div class="flex">
      <com-sidebar id="sidebar"></com-sidebar>
      <div id="container" class="py:2 px:1 h:screen w:screen overflow:auto">
        <transition name="opacity" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
const ComHeader = () => import("components/Header.vue");
const ComSidebar = () => import("components/Sidebar.vue");

import "fonts/Montserrat/style.css";

export default {
  components: {
    ComHeader,
    ComSidebar
  }
};
</script>

<style lang="scss">
@import "../scss/app";
@import "../scss/prism";
</style>
