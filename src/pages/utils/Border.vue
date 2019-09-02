<template>
  <card>
    <template #header>Border</template>
    <template #navigation>
      <div class="bg:grey-lighter w:full px:1/2">
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/border/color'}"
          to="/border/color"
        >Color</router-link>
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
        >Width</router-link>
      </div>
    </template>

    <template #content>
      <transition name="opacity" mode="out-in">
        <router-view></router-view>
      </transition>
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      tab: "color"
    };
  },
  created() {
    this.$router.push("/border/color").catch(err => {});
  },
  watch: {
    "$route.path"(val) {
      if (this.$route.path === "/border") {
        this.$router.push("/border/color").catch(err => {});
      }
    }
  }
};
</script>