<template>
  <card>
    <template #header>Color palette</template>
    <template #content>
      <div class="flex flex:col">
        <transition name="opacity">
          <div
            class="fixed b:2 r:3 z:10 flex items:baseline rounded px:1 py:1/2 bg:orange"
            v-if="value"
          >
            <i class="dropper"></i>
            <pre class="flex:1 text:2 text:grey-lighter ml:1/2">{{ value }}</pre>
          </div>
        </transition>
        <div class="w:full flex flex:wrap">
          <div class="mb:2 mr:2">
            <p class="text:bold mb:1">Black & White</p>
            <div class="flex flex:wrap">
              <div
                class="p:2 shadow rounded mr:1 mb:1 transition cursor:pointer border bg:black"
                @click="copy('black')"
              ></div>
              <div
                class="p:2 shadow rounded mr:1 mb:1 transition cursor:pointer border bg:white"
                @click="copy('white')"
              ></div>
            </div>
          </div>
          <div v-for="color in colors" :key="color" class="mb:2 mr:2">
            <p class="text:bold mb:1">{{ color.charAt(0).toUpperCase() + color.slice(1) }}</p>
            <div class="flex flex:wrap">
              <div
                v-for="variant in variants"
                :key="variant"
                class="p:2 shadow rounded mr:1 mb:1 transition cursor:pointer"
                :class="`bg:${color}${variant} border hover:border:${color}${variant}`"
                @click="copy(color + variant)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      colors: [
        'grey',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'indigo',
        'purple',
        'pink'
      ],
      variants: [
        '-lightest',
        '-lighter',
        '-light',
        '',
        '-dark',
        '-darker',
        '-darkest'
      ]
    }
  },
  methods: {
    async copy(value) {
      this.value = value
      await navigator.clipboard.writeText(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.dropper {
  display: inline-block;
  position: relative;
  color: white;
  width: 40px;
  height: 14px;
  border-width: 3px;
  border-style: solid;
  border-right: none;
  border-left-color: transparent;
  box-shadow: -9px 0 0 2px inset, 0 0 0 2px inset;
  border-radius: 50% 6px 6px 50%;
  transform: rotate(-45deg);
  margin: 12px -2px 8px -4px;
  border-top-color: transparent;
  border-bottom-color: transparent;

  &:after,
  &:before {
    content: "";
    pointer-events: none;
  }

  &:before {
    width: 4px;
    height: 14px;
    right: 10px;
    box-shadow: inset 0 0 0 32px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
