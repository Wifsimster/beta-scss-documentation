<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <table class="w:full">
        <thead>
          <tr>
            <th>Class</th>
            <th>Properties</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="weight in weights" :key="weight.key">
            <td>
              <pre class="inline text:purple">.text:{{ weight.key }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="weight.key === 'normal'"
              >Default</pre>
            </td>
            <td class="text:center">
              <pre class="text:blue">{{ weight.value }}</pre>
            </td>
            <td class="text:center py:1/2 border:b border:grey-light" :class="'text:'+weight.key">Aa</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:2">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div
              class="py:1 text:lighter"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="py:1 text:light"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="py:1 text:normal"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="py:1 text:bold"
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
      weights: [
        { key: "lightest", value: "100" },
        { key: "lighter", value: "200" },
        { key: "light", value: "300" },
        { key: "normal", value: "400" },
        { key: "bold", value: "500" },
        { key: "bolder", value: "600" },
        { key: "boldest", value: "700" }
      ],
      exemple1: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="py:1 text:lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 text:light">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 text:normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 text:bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

