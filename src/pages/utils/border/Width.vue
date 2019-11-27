<template>
  <div class="flex">
    <div class="flex:1 mr:1">
      <table class="w:full">
        <thead>
          <tr>
            <th>Class</th>
            <th>
              Side
              <span class="text:grey text:3/4">(Optional)</span>
            </th>
            <th>
              Width
              <span class="text:grey text:3/4">(Optional)</span>
            </th>
            <th>
              <select
                v-model="selectedPixel"
                class="text:teal text:normal text:7/8"
              >
                <option v-for="item in pixels" :value="item"
                  >{{ item }}px</option
                >
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in sizes">
            <td class="py:1 border:b border:grey-lighter">
              <code
                v-if="index === 0"
                class="border rounded mr:1/4 py:1/5 px:1/4"
                >border</code
              >
            </td>
            <td class="py:1 border:b border:grey-lighter">
              <code class="border rounded m:1/4 p:1/2">{{ item.prefix }}</code>
              {{ item.side }}
              <pre
                v-if="item.default"
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
              >
Default</pre
              >
            </td>
            <td class="py:1 border:b border:grey-lighter">
              <code class="border rounded mr:1/4 py:1/5 px:1/4">{{
                item.key
              }}</code>
              <pre
                v-if="item.value === '0.0625'"
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
              >
Default</pre
              >
            </td>
            <td class="py:1 border:b border:grey-lighter">
              {{ rem2Px(item.value) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:1">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="py:1 bg:grey-lighter border:1/2"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple1"></pre>
          </div>
        </div>

        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="py:1 bg:grey-lighter border:b:1/4"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple2"></pre>
          </div>
        </div>

        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="py:1 bg:grey-lighter border:l:1/2"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple3"></pre>
          </div>
        </div>

        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="py:1 bg:grey-lighter border:y:1"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple4"></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs"
export default {
  data() {
    return {
      pixels: [12, 14, 16, 18],
      selectedPixel: 14,
      sizes: [
        { prefix: "", side: "All", default: true, key: "0", value: "0" },
        { prefix: "t", side: "Top", key: "1/16", value: "0.0625" },
        { prefix: "r", side: "Right", key: "1/8", value: "0.125" },
        { prefix: "b", side: "Bottom", key: "1/4", value: "0.25" },
        { prefix: "l", side: "Left", key: "1/2", value: "0.5" },
        { prefix: "x", side: "Horizontal", key: "3/4", value: "0.75" },
        { prefix: "y", side: "Vertical", key: "1", value: "1" }
      ],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null
    }
  },
  methods: {
    rem2Px(val) {
      if (val && !isNaN(Number(val))) {
        let result = val * this.selectedPixel
        return `${result.toFixed(1)} px`
      }
      return null
    }
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="border:1/2"></div>`,
      Prism.languages.html,
      "html"
    )

    this.exemple2 = Prism.highlight(
      `<div class="border:b:1/4"></div>`,
      Prism.languages.html,
      "html"
    )

    this.exemple3 = Prism.highlight(
      `<div class="border:l:1/2"></div>`,
      Prism.languages.html,
      "html"
    )

    this.exemple4 = Prism.highlight(
      `<div class="border:y:1"></div>`,
      Prism.languages.html,
      "html"
    )
  }
}
</script>
