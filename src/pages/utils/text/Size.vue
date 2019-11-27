<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <table class="w:full">
        <thead>
          <tr>
            <th>Class</th>
            <th>
              <select v-model="selectedPixel" class="text:teal text:normal text:7/8">
                <option v-for="item in pixels" :value="item">{{ item }}px</option>
              </select>
            </th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="size in sizes" :key="size.key">
            <td>
              <pre class="inline text:purple">.text:{{ size.key }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="size.key === '1'"
              >Default</pre>
            </td>
            <td class="py:1 border:b border:grey-light">{{ rem2Px(size.value) }}</td>
            <td class="text:center py:1/2 border:b border:grey-light" :class="'text:'+size.key">Aa</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:2">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div
              class="py:1 text:3/4"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div class="py:1 text:1">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="py:1 text:5/4"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="py:1 text:3/2"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple1"></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      pixels: [12, 14, 16, 18],
      selectedPixel: 14,
      sizes: [
        { key: "1/2", value: "0.5" },
        { key: "3/4", value: "0.75" },
        { key: "7/8", value: "0.875" },
        { key: "1", value: "1" },
        { key: "9/8", value: "1.125" },
        { key: "5/4", value: "1.25" },
        { key: "3/2", value: "1.5" },
        { key: "7/4", value: "1.75" },
        { key: "2", value: "2" },
        { key: "3", value: "3" }
      ],
      exemple1: null
    };
  },
  methods: {
    rem2Px(val) {
      if (val && !isNaN(Number(val))) {
        let result = val * this.selectedPixel;
        return `${result.toFixed(1)} px`;
      }
      return null;
    }
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="py:1 text:3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 text:1">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 text:5/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 text:3/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

