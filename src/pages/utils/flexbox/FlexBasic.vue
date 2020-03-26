<template>
  <div class="flex my:1">
    <div class="flex:2/12 pr:1">
      <div class="flex flex:col">
        <div
          class="flex justify:between transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer"
          v-for="item in properties"
          :key="item"
          @click="value = item"
          :class="{ 'border:purple': value === item }"
        >
          <pre>{{ item }}</pre>
          <pre
            class="border bg:grey-lighter text:grey-dark px:1/3 text:3/4 rounded"
            v-if="item === 'flex:grow'"
          >Default</pre>
        </div>
      </div>
    </div>

    <div class="flex:10/12">
      <p
        class="pb:1"
      >This defines the default size of an element before the remaining space is distributed.</p>
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