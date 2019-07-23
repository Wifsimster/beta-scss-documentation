<template>
  <div class="flex flex:col overflow:hidden" id="app">
    <com-header></com-header>
    <div>
      <div class="flex flex:row">
        <com-sidebar id="sidebar"></com-sidebar>
        <div class="flex:auto">
          <div class="flex flex:col">
            <div id="wrapper" class="overflow:auto relative">
              <div class="container p:0 m:auto">
                <transition name="opacity" mode="out-in">
                  <router-view></router-view>
                </transition>
              </div>
            </div>
          </div>
        </div>
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
