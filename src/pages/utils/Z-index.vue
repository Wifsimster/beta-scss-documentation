<template>
  <card>
    <template #header>Z-index</template>
    <template #content>
      <div class="flex flex:col">
        <p
          class="mb:1"
        >The z-index property specifies the z-order of a positioned element and its descendants.</p>
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
          <div class="relative text:center" style="height: 200px;">
            <div
              class="absolute p:4 bg:grey-darkest text:grey-light rounded z:50 border"
              style="margin-left: 2rem"
            >z:50</div>
            <div
              class="absolute p:4 bg:grey-darker rounded z:40 border"
              style="margin-left: 4rem"
            >z:40</div>
            <div
              class="absolute p:4 bg:grey-dark rounded z:30 border"
              style="margin-left: 6rem"
            >z:30</div>
            <div class="absolute p:4 bg:grey rounded z:20 border" style="margin-left: 8rem">z:20</div>
            <div
              class="absolute p:4 bg:grey-light rounded z:10 border"
              style="margin-left: 10rem"
            >z:10</div>
            <div
              class="absolute p:4 bg:grey-lighter rounded z:0 border"
              style="margin-left: 12rem"
            >z:0</div>
            <div
              class="absolute p:4 bg:orange rounded border text:grey-lighter"
              :class="value"
              style="margin-left: 2rem; width: 370px;"
            >{{ value }}</div>
          </div>
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
      value: null,
      properties: ['z:0', 'z:10', 'z:20', 'z:30', 'z:40', 'z:50', 'z:auto'],
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
        `<div class="relative" style="height: 200px">
    <div class="absolute z:50">z:50</div>
    <div class="absolute z:40">z:40</div>
    <div class="absolute z:30">z:30</div>
    <div class="absolute z:20">z:20</div>
    <div class="absolute z:10">z:10</div>
    <div class="absolute z:0">z:0</div>
    <div class="absolute bg:orange ${this.value}">${this.value}</div>
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>

