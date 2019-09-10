<template>
  <card>
    <template #header>Text</template>
    <template #navigation>
      <div class="bg:grey-lighter w:full px:1/2 flex flex:wrap">
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2"
          :class="{ 'text:orange': $route.path === '/text/color'}"
          to="/text/color"
        >Color</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2"
          :class="{ 'text:orange': $route.path === '/text/size'}"
          to="/text/size"
        >Size</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2"
          :class="{ 'text:orange': $route.path === '/text/weigth'}"
          to="/text/weigth"
        >Weigth</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2"
          :class="{ 'text:orange': $route.path === '/text/alignment'}"
          to="/text/alignment"
        >Alignment</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2"
          :class="{ 'text:orange': $route.path === '/text/decoration'}"
          to="/text/decoration"
        >Decoration</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2"
          :class="{ 'text:orange': $route.path === '/text/line-height'}"
          to="/text/line-height"
        >Line height</router-link>
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
    this.$router.push("/text/color").catch(err => {});
  },
  watch: {
    "$route.path"(val) {
      if (this.$route.path === "/text") {
        this.$router.push("/text/color").catch(err => {});
      }
    }
  }
};
</script>