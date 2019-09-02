<template>
  <card>
    <template #header>Flexbox</template>
    <template #navigation>
      <div class="bg:grey-lighter w:full px:1/2">
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/intro'}"
          to="/flexbox/intro"
        >Introduction</router-link>
        <!-- Container's properties -->
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/direction'}"
          to="/flexbox/direction"
        >Direction</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/wrap'}"
          to="/flexbox/wrap"
        >Wrap</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/justify-content'}"
          to="/flexbox/justify-content"
        >Justify Content</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/align-items'}"
          to="/flexbox/align-items"
        >Align Items</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/align-content'}"
          to="/flexbox/align-content"
        >Align Content</router-link>

        <!-- Item's properties -->
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/order'}"
          to="/flexbox/order"
        >Order</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/align-self'}"
          to="/flexbox/align-self"
        >Align Self</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/flex'}"
          to="/flexbox/flex"
        >Flex</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/flex-grow'}"
          to="/flexbox/flex-grow"
        >Flex Grow</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/flex-shrink'}"
          to="/flexbox/flex-shrink"
        >Flex Shrink</router-link>
        <router-link
          tag="span"
          class="cursor:pointer text:bold py:1 px:1/2"
          :class="{ 'border:b:1/8 border:orange': $route.path === '/flexbox/flex-basic'}"
          to="/flexbox/flex-basic"
        >Flex Basic</router-link>
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
  created() {
    this.$router.push("/flexbox/intro").catch(err => {});
  },
  watch: {
    "$route.path"(val) {
      if (this.$route.path === "/flexbox") {
        this.$router.push("/flexbox/intro").catch(err => {});
      }
    }
  }
};
</script>


