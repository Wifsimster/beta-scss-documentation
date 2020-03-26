<template>
  <card>
    <template #header>Display</template>
    <template #content>
      <div class="flex flex:wrap my:1">
        <div class="flex flex:col flex:2/12">
          <pre
            v-for="(property, index) in properties"
            :key="index"
            @click="value = property"
            :class="{ 'border:purple': value === property }"
            class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 mr:1 cursor:pointer"
          >{{ property }}</pre>
        </div>

        <div class="flex:10/12">
          <div class="flex:1">
            <div class="border rounded:t:1/2 p:1" style="min-height: 150px">
              <div class="bg:grey-light rounded m:4 p:4" :class="value"></div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple"></pre>
            </div>
          </div>
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
        'block',
        'inline-block',
        'inline',
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
