<template>
  <card>
    <template #header>Display</template>
    <template #content>
      <div class="flex flex:col">
        <div class="flex mb:1">
          <pre
            v-for="(property, index) in properties"
            :key="index"
            @click="value = property"
            :class="{ 'border:purple': value === property }"
            class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 cursor:pointer"
          >{{ property }}</pre>
        </div>

        <div class="border rounded:t:1/2 p:1">
          <div
            class="bg:grey-light rounded p:1"
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
      properties: [
        'inline',
        'block',
        'inline-block',
        'none',
        'flex',
        'inline-flex',
        'visible',
        'invisible'
      ],
      value: null,
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
        `<div class="${this.value}">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit...
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
