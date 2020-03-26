<template>
  <div class="flex flex:wrap my:1">
    <div class="flex flex:col flex:2/12">
      <pre
        v-for="property in properties"
        :key="property.value"
        @click="value = property"
        :class="{ 'border:purple': value === property }"
        class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 cursor:pointer"
      >{{ property.label }}</pre>
      <multiselect placeholder="Choose a size" :options="sizes" v-model="size" />
    </div>

    <div class="flex:10/12">
      <div class="flex:1">
        <div class="border rounded:t:1/2 p:1">
          <div
            class="p:4 bg:grey-lighter rounded transition"
            :class="`border${this.value.value ? ':' + this.value.value : ''}${this.size ? ':' + this.size : ''}`"
          ></div>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="exemple"></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  data() {
    return {
      properties: [
        { label: 'All', value: null },
        { label: 'Top', value: 't' },
        { label: 'Right', value: 'r' },
        { label: 'Bottom', value: 'b' },
        { label: 'Left', value: 'l' },
        { label: 'Horizontal', value: 'x' },
        { label: 'Vertical', value: 'y' }
      ],
      sizes: ['0', '1/16', '1/8', '1/4', '1/2', '3/4', '1'],
      value: null,
      size: '1',
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
    },
    size() {
      this.setExemple()
    }
  },
  methods: {
    setExemple() {
      this.exemple = Prism.highlight(
        `<div class="border${this.value.value ? ':' + this.value.value : ''}${
          this.size ? ':' + this.size : ''
        }"></div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
