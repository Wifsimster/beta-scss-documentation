<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <table>
        <thead>
          <tr>
            <th>Classe</th>
            <th>Propriétés</th>
            <th>
              Px
              <span class="text:grey text:3/4">(* 16px)</span>
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
Défaut</pre>
            </td>
            <td>
              <pre class="text:blue">{{ height.value }}</pre>
            </td>
            <td>{{ Number(height.value.replace("rem", "")) * 16 }}px</td>
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
      heights: [
        { key: "1/2", value: "0.5rem" },
        { key: "3/4", value: "0.75rem" },
        { key: "1", value: "1rem" },
        { key: "3/2", value: "1.5rem" },
        { key: "2", value: "2rem" },
        { key: "5/2", value: "2.5rem" },
        { key: "3", value: "3rem" }
      ],
      exemple1: null
    };
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

