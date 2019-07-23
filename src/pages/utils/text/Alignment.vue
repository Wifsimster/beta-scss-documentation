<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <table class="w:full">
        <thead>
          <tr>
            <th>Class</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="alignment in alignments" :key="alignment">
            <td>
              <pre class="inline text:purple">.text:{{ alignment }}</pre>
            </td>
            <td class="px:1/2 border:b border:grey-light" :class="'text:'+alignment">Aa</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:3">
      <div class="flex flex:wrap">
        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div
              class="px:1 text:left"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="px:1 text:center"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="px:1 text:right"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="px:1 text:justify"
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
      alignments: ["left", "center", "right", "justify"],
      exemple1: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="px:1 text:left">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="px:1 text:center">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="px:1 text:right">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="px:1 text:justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

