<template>
  <card>
    <template #header>Effect</template>
    <template #content>
      <div class="flex flex:col">
        <div class="flex mb:1">
          <pre
            v-for="(property, index) in shadowProperties"
            :key="index"
            @click="value = property"
            :class="{ 'border:purple': value === property }"
            class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 cursor:pointer"
          >{{ property }}</pre>
        </div>

        <div class="flex mb:1">
          <pre
            v-for="(property, index) in opacityProperties"
            :key="index"
            @click="value = property"
            :class="{ 'border:purple': value === property }"
            class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 cursor:pointer"
          >{{ property }}</pre>
        </div>

        <div class="border rounded:t:1/2 p:1">
          <div
            class="transition bg:grey-lighter rounded p:1"
            :class="value"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem perferendis impedit corrupti itaque odio, quidem nihil porro nam.</div>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="exemple"></pre>
        </div>
      </div>
    </template>
  </card>
</template>

<script>
import Prism from 'prismjs'
export default {
  data() {
    return {
      shadowProperties: [
        'shadow',
        'shadow:large',
        'shadow:larger',
        'shadow:inner',
        'shadow:outline',
        'shadow:none'
      ],
      opacityProperties: [
        'opacity:0',
        'opacity:25',
        'opacity:50',
        'opacity:75',
        'opacity:100'
      ],
      value: null,
      exemple: null
    }
  },
  created() {
    this.value = this.shadowProperties[0]
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
        `<div class="${this.value}"></div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
