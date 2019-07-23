<template>
  <div>
    <div class="flex flex:wrap">
      <div class="flex:1 mr:1">
        <table class="w:full">
          <thead>
            <tr>
              <th>Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in shrinks" :key="item[0]">
              <td class="px:1/2 py:1 border:b border:grey-light">
                <pre class="inline text:purple">.flex:{{ item[0] }}</pre>
                <pre
                  class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  v-if="item[0] === 'shrink'"
                >Default</pre>
              </td>
              <td class="px:1/2 py:1 border:b border:grey-light">
                <pre class="inline text:blue">flex-shrink: {{ item[1] }};</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:2">
        <div class="flex flex:col flex:wrap">
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter">
                <div
                  class="flex:none text:grey-darker text:center bg:grey-light m:1/2 p:1"
                >Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div
                  class="flex:shrink text:grey-darker text:center bg:grey-light m:1/2 p:1"
                >Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div
                  class="flex:none text:grey-darker text:center bg:grey-light m:1/2 p:1"
                >Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter">
                <div
                  class="flex:shrink text:grey-darker text:center bg:grey-light m:1/2 p:1"
                >Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div
                  class="flex:shrink-none text:grey-darker text:center bg:grey-light m:1/2 p:1"
                >Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div
                  class="flex:shrink text:grey-darker text:center bg:grey-light m:1/2 p:1"
                >Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple2"></pre>
            </div>
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
      shrinks: [["shrink", "1"], ["shrink-none", "0"]],
      exemple1: null,
      exemple2: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="flex">
    <div class="flex:none">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
    <div class="flex:shrink">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
    <div class="flex:none">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="flex">
    <div class="flex:shrink">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
    <div class="flex:shrink-none">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
    <div class="flex:shrink">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

