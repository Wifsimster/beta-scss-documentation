<template>
  <div class="flex">
    <div class="w:full">
      <h1>Transitions</h1>
      <div class="w:full-5">
        <a @click="slideLeft = !slideLeft">slide-left</a>
        <transition name="slide-left">
          <div v-if="slideLeft">Div slideLeft</div>
        </transition>
      </div>
      <div class="w:full-5">
        <a @click="slideRight = !slideRight">slide-right</a>
        <transition name="slide-right">
          <div v-if="slideRight">Div slideRight</div>
        </transition>
      </div>
      <div class="w:full-5">
        <a @click="slideTop = !slideTop">slide-top</a>
        <transition name="slide-top">
          <div v-if="slideTop">Div slideTop</div>
        </transition>
      </div>
      <div class="w:full-5">
        <a @click="slideBottom = !slideBottom">slide-bottom</a>
        <transition name="slide-bottom">
          <div v-if="slideBottom">Div slideBottom</div>
        </transition>
      </div>
      <div class="w:full-5">
        <a @click="opacity = !opacity">opacity</a>
        <transition name="opacity">
          <div v-if="opacity">Div opacity</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideLeft: false,
      slideRight: false,
      slideTop: false,
      slideBottom: false,
      opacity: false
    };
  }
};
</script>
