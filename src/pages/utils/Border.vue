<template>
  <div>
    <h1>Bordures</h1>
    <div class="bg:grey-lighter w:full px:1/2">
      <router-link
        tag="span"
        class="cursor:pointer text:bold py:2 px:1/2"
        :class="{ 'border:b:1/8 border:orange': $route.path === '/border/color'}"
        to="/border/color"
      >Couleur</router-link>
      <router-link
        tag="span"
        class="cursor:pointer text:bold py:2 px:1/2"
        :class="{ 'border:b:1/8 border:orange': $route.path === '/border/style'}"
        to="/border/style"
      >Style</router-link>
      <router-link
        tag="span"
        class="cursor:pointer text:bold py:2 px:1/2"
        :class="{ 'border:b:1/8 border:orange': $route.path === '/border/width'}"
        to="/border/width"
      >Largeur</router-link>
    </div>

    <transition name="opacity" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "color"
    };
  },
  created() {
    this.$router.push("/border/color");
  },
  watch: {
    "$route.path"(val) {
      if (this.$route.path === "/border") {
        this.$router.push("/border/color");
      }
    }
  }
};
</script>