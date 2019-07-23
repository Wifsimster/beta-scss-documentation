<template>
  <card>
    <template #header>Display</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:2">
          <table class="w:full">
            <thead>
              <tr>
                <th>Class</th>
                <th>Properties</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="display in displayList" :key="display">
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:purple">.{{ display }}</pre>
                </td>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue">display: {{ display }};</pre>
                </td>
              </tr>
              <tr>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue"><span class="text:purple">.visibile</span></pre>
                </td>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue">visiblity: visible;</pre>
                </td>
              </tr>
              <tr>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue"><span class="text:purple">.invisible</span></pre>
                </td>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue">visibility: hidden;</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex:1">
          <div class="p:1/4 ml:1 mb:1">
            <h2>Inline</h2>
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-lighter p:1">
                <span class="inline text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">1</span>
                <span class="inline text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">2</span>
                <span class="inline text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">3</span>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
        </div>

        <div class="flex:1">
          <div class="p:1/4 ml:1 mb:1">
            <h2>Block</h2>
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-lighter p:1">
                <span class="block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">1</span>
                <span class="block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">2</span>
                <span class="block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">3</span>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple2"></pre>
            </div>
          </div>
        </div>

        <div class="flex:1">
          <div class="p:1/4 ml:1 mb:1">
            <h2>Inline Block</h2>
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-lighter p:1">
                <span
                  class="inline-block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"
                >1</span>
                <span
                  class="inline-block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"
                >2</span>
                <span
                  class="inline-block text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2"
                >3</span>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple3"></pre>
            </div>
          </div>
        </div>

        <div class="flex:1">
          <div class="p:1/4 ml:1 mb:1">
            <h2>Flex</h2>
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter p:1">
                <span class="flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">1</span>
                <span class="flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">2</span>
                <span class="flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">3</span>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple4"></pre>
            </div>
          </div>
        </div>

        <div class="flex:1">
          <div class="p:1/4 ml:1 mb:1">
            <h2>Inline Flex</h2>
            <div class="border rounded:t:1/2 p:1">
              <div class="inline-flex bg:grey-lighter p:1">
                <span class="flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">1</span>
                <span class="flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">2</span>
                <span class="flex:1 text:grey-dark text:center bg:grey-light px:1/2 py:1 mx:1/2">3</span>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple5"></pre>
            </div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      displayList: [
        "inline",
        "block",
        "inline-block",
        "none",
        "flex",
        "inline-flex"
      ],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null,
      exemple5: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div>
  <span class="inline">1</span>
  <span class="inline">2</span>
  <span class="inline">3</span>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div>
  <span class="block">1</span>
  <span class="block">2</span>
  <span class="block">3</span>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      `<div>
  <span
    class="inline-block"
  >1</span>
  <span
    class="inline-block"
  >2</span>
  <span
    class="inline-block"
  >3</span>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      `<div class="flex">
  <span class="flex:1">1</span>
  <span class="flex:1">2</span>
  <span class="flex:1">3</span>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple5 = Prism.highlight(
      `<div class="inline-flex">
  <span class="flex:1">1</span>
  <span class="flex:1">2</span>
  <span class="flex:1">3</span>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>
