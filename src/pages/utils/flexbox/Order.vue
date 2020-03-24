<template>
  <div class="flex flex:wrap">
    <div class="flex:1">
      <p
        class="pb:1"
      >By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.</p>
      <div class="flex py:1">
        <pre
          v-for="(property, index) in properties"
          :key="index"
          @click="value = property"
          :class="{ 'border:purple': value === property }"
          class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 cursor:pointer"
        >{{ property }}</pre>
      </div>
      <div class="border rounded:t:1/2 p:1 overflow:hidden">
        <div class="flex flex:wrap bg:grey-lighter">
          <div
            class="flex items:center text:grey-darker text:center bg:grey m:1/2 p:2"
            :class="value"
          >1</div>
          <div
            class="flex items:center text:grey-darker text:center bg:grey-light m:1/2 p:2"
            v-for="index in [2, 3, 4, 5]"
            :class="`order:${index}`"
            :key="index"
          >{{ index }}</div>
        </div>
      </div>
      <div class="bg:black rounded:b:1/2">
        <pre class="language-html" v-html="exemple"></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  data() {
    return {
      value: null,
      properties: [
        'order:first',
        'order:last',
        'order:none',
        'order:1',
        'order:2',
        'order:3',
        'order:4',
        'order:5'
      ],
      exemple: null
    }
  },
  created() {
    this.value = this.properties[0]
  },
  mounted() {
    this.setExemple()
  },
  watch: {
    value() {
      this.setExemple()
    }
  },
  methods: {
    setExemple() {
      this.exemple = Prism.highlight(
        `<div class="flex">
    <div class="${this.value}">1</div>
    <div class="order:2">2</div>
    <div class="order:3">3</div>
    <div class="order:4">4</div>
    <div class="order:5">5</div>
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>