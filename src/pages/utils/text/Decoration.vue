<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <table class="w:full">
        <thead>
          <tr>
            <th>Class</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in decorations" :key="item">
            <td>
              <pre class="inline text:purple">.{{item}}</pre>
            </td>
            <td class="text:center py:1/2 border:b border:grey-light" :class="item">Aa</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:3">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="py:1 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="py:1 uppercase"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="py:1 capitalize"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="py:1 underline"
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
      decorations: [
        "italic",
        "normal",
        "uppercase",
        "lowercase",
        "capitalize",
        "normal-case",
        "underline",
        "line-through",
        "no-underline"
      ],
      exemple1: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="py:1 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

