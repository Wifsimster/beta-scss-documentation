<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>
              <select v-model="selectedPixel" class="text:teal text:normal text:7/8">
                <option v-for="item in pixels" :value="item">{{ item }}px</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="height in heights" :key="height.key">
            <td>
              <pre class="inline text:purple">
.line-height:{{ height.key }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="height.key === '3/2'"
              >
Default</pre>
            </td>
            <td>{{ rem2Px(height.value) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:2">
      <div class="flex flex:wrap">
        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="px:1 line-height:1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>

            <div class="px:1 line-height:3/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>

            <div class="px:1 line-height:2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
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
      heights: [
        { key: "1/2", value: "0.5" },
        { key: "3/4", value: "0.75" },
        { key: "1", value: "1" },
        { key: "3/2", value: "1.5" },
        { key: "2", value: "2" },
        { key: "5/2", value: "2.5" },
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
      `<div class="px:1 line-height:1">Lorem ipsum dolor sit amet...</div>
<div class="px:1 line-height:3/2">Lorem ipsum dolor sit amet...</div>
<div class="px:1 line-height:2">Lorem ipsum dolor sit amet...</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

