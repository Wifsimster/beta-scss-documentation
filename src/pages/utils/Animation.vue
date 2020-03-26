<template>
  <card>
    <template #header>Animation</template>
    <template #content>
      <div class="flex flex:wrap my:1">
        <div class="flex:2/12 pr:1">
          <pre
            v-for="property in properties"
            :key="property"
            @click="value = property"
            :class="{ 'border:purple': value === property }"
            class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer"
          >{{ property }}</pre>
        </div>

        <div class="flex:10/12">
          <div class="flex flex:wrap">
            <div class="flex:1">
              <div class="border rounded:t:1/2 p:4" style="min-height: 250px">
                <div
                  class="transition border rounded bg:grey-light p:4"
                  :class="`${value}`"
                >Roating box</div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple"></pre>
              </div>
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
        'rotate:0',
        'rotate:90',
        'rotate:180',
        'rotate:270',
        'rotating'
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
        `<div class="${this.value}">Rotating box</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>


