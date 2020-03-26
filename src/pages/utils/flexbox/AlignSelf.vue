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
            v-if="item === 'self:auto'"
          >Default</pre>
        </div>
      </div>
    </div>

    <div class="flex:10/12">
      <div class="pb:1">
        This allows the default alignment (or the one specified by
        <pre class="inline text:purple">align-items</pre>) to be overridden for individual flex items.
      </div>
      <div class="border rounded:t:1/2 p:1 overflow:hidden">
        <div class="flex bg:grey-lighter transition" style="height: 400px">
          <div
            class="flex items:center text:grey-darker text:center bg:grey m:1/2 p:2"
            :class="value"
          >1</div>
          <div
            class="flex items:center text:grey-darker text:center bg:grey-light m:1/2 p:2"
            v-for="index in [2, 3, 4, 5]"
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
        'self:auto',
        'self:start',
        'self:center',
        'self:end',
        'self:stretch'
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
        `<div class="flex" style="height: 400px">
    <div class="${this.value}">1</div>
    <div>2</div>
    <div>3</div>
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>