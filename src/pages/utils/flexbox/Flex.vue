<template>
  <div class="flex my:1">
    <div class="flex:2/12 pr:1">
      <div class="flex flex:col">
        <div
          class="flex justify:between transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer"
          v-for="item in properties"
          :key="item"
          @click="value01 = item"
          :class="{ 'border:purple': value01 === item }"
        >
          <pre>{{ item }}</pre>
          <pre
            class="border bg:grey-lighter text:grey-dark px:1/3 text:3/4 rounded"
            v-if="item === 'flex:auto'"
          >Default</pre>
        </div>
      </div>
    </div>

    <div class="flex:10/12">
      <div class="pb:1">
        This is the shorthand for
        <pre class="inline text:purple">flex-grow</pre>,
        <pre class="inline text:purple">flex-shrink</pre>&nbsp;and
        <pre class="inline text:purple">flex-basis</pre>&nbsp;combined.
      </div>
      <div class="border rounded:t:1/2 p:1 overflow:hidden">
        <div class="flex flex:wrap bg:grey-lighter transition">
          <div
            class="transition flex text:grey-darker justify:center bg:grey m:1/2 p:2"
            :class="value01"
          >1</div>
          <div
            class="transition text:grey-darker justify:center bg:grey-light m:1/2 p:2"
            :class="value02"
          >2</div>
          <div
            class="transition text:grey-darker justify:center bg:grey-light m:1/2 p:2"
            :class="value03"
          >3</div>
          <div
            class="transition text:grey-darker justify:center bg:grey-light m:1/2 p:2"
            :class="value04"
          >4</div>
          <div
            class="transition text:grey-darker justify:center bg:grey-light m:1/2 p:2"
            :class="value05"
          >5</div>
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
      value01: 'flex:auto',
      value02: '',
      value03: '',
      value04: '',
      value05: '',
      properties: [
        'flex:auto',
        'flex:initial',
        'flex:1',
        'flex:2',
        'flex:3',
        'flex:none'
      ],
      exemple: null
    }
  },
  created() {
    this.value01 = this.properties[0]
  },
  mounted() {
    this.setExemple()
  },
  watch: {
    value01() {
      this.setExemple()
    }
  },
  methods: {
    setExemple() {
      if (this.value01 === 'flex:2') {
        this.value02 = 'flex:1'
        this.value03 = 'flex:2'
      } else if (this.value01 === 'flex:3') {
        this.value02 = 'flex:1'
        this.value03 = 'flex:2'
      } else {
        this.value02 = ''
        this.value03 = ''
      }

      this.exemple = Prism.highlight(
        `<div class="flex">
    <div class="${this.value01}">1</div>
    <div class="${this.value02}">2</div>
    <div class="${this.value03}">3</div>
    <div class="${this.value04}">4</div>
    <div class="${this.value05}">5</div>    
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
