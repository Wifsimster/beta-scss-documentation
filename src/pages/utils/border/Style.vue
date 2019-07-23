<template>
  <div class="flex">
    <div class="flex:1 mr:1">
      <table class="w:full">
        <thead>
          <tr>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="style in styles" :key="style">
            <td class="px:1 border:b border:grey-lighter">
              <pre class="inline text:purple">.border:{{ style }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="style === 'solid'"
              >Default</pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex:3">
      <div class="flex flex:wrap">
        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="px:1 bg:grey-lighter border:solid border:1/4"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="borderStyle1"></pre>
          </div>
        </div>

        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="px:1 bg:grey-lighter border:dashed border:1/4"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="borderStyle2"></pre>
          </div>
        </div>

        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="px:1 bg:grey-lighter border:dotted border:1/4"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="borderStyle3"></pre>
          </div>
        </div>

        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="px:1 bg:grey-lighter border:none border:1/4"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="borderStyle4"></pre>
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
      styles: ["solid", "dashed", "dotted", "none"],
      borderStyle1: null,
      borderStyle2: null,
      borderStyle3: null,
      borderStyle4: null
    };
  },
  mounted() {
    this.borderStyle1 = Prism.highlight(
      `<div class="border:solid border:1/4"></div>`,
      Prism.languages.html,
      "html"
    );

    this.borderStyle2 = Prism.highlight(
      `<div class="border:dashed border:1/4"></div>`,
      Prism.languages.html,
      "html"
    );

    this.borderStyle3 = Prism.highlight(
      `<div class="border:dotted border:1/4"></div>`,
      Prism.languages.html,
      "html"
    );

    this.borderStyle4 = Prism.highlight(
      `<div class="border:none border:1/4"></div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>
