<template>
  <div>
    <h1>Texte</h1>

    <div>
      <div class="bg:grey-lighter w:full px:1/2">
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/text/color'}"
          to="/text/color"
        >Couleur</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/text/size'}"
          to="/text/size"
        >Taille</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/text/weigth'}"
          to="/text/weigth"
        >Poid</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/text/alignment'}"
          to="/text/alignment"
        >Alignement</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/text/decoration'}"
          to="/text/decoration"
        >Décoration</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:2 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/text/line-height'}"
          to="/text/line-height"
        >Hauteur de ligne</router-link>
      </div>
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
    this.$router.push("/text/color");
  },
  watch: {
    "$route.path"(val) {
      if (this.$route.path === "/text") {
        this.$router.push("/text/color");
      }
    }
  }
};
</script>