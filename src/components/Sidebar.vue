<template>
  <div id="sidebar" class="bg:black">
    <div id="sidebar-content">
      <div class="overflow-y:auto">
        <ul class="list-reset text:white m:0">
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/flexbox"
          >Flexbox</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/responsive"
          >Responsive Grid</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/color"
          >Colors</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/text"
          >Text</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/typography"
          >Typography</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/display"
          >Display</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/position"
          >Position</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/float"
          >Float</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/spacing"
          >Spacing</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/border"
          >Border</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/rounded"
          >Rounded</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/width"
          >Width</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/height"
          >Height</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/effect"
          >Effect</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/overflow"
          >Overflow</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/zindex"
          >Z-index</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/interactivity"
          >Interactivity</router-link>
          <router-link
            class="px:1 py:1/2 hover:text:white cursor:pointer text:grey transition"
            tag="li"
            active-class="bg:grey-darkest text:white"
            to="/animation"
          >Animation</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#sidebar {
  min-width: 120px;
  #sidebar-content {
    & > div {
      height: calc(100vh - 40px);
    }
  }
}
</style>