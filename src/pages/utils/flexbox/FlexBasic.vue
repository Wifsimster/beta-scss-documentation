<template>
  <div class="flex flex:wrap">
    <div class="flex:1">
      <p
        class="pb:1"
      >This defines the default size of an element before the remaining space is distributed.</p>
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
        <div class="flex bg:grey-lighter transition">
          <div
            class="transition flex justify:center text:grey-darker bg:grey m:1/2 p:2"
            :class="value"
          >1</div>
          <div class="flex:1/12 flex justify:center text:grey-darker bg:grey-light m:1/2 p:2">2</div>
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
        'flex:1/12',
        'flex:2/12',
        'flex:3/12',
        'flex:4/12',
        'flex:5/12',
        'flex:6/12',
        'flex:7/12',
        'flex:8/12',
        'flex:9/12',
        'flex:10/12',
        'flex:11/12'
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
  <div class="flex:1/12">2</div>
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>