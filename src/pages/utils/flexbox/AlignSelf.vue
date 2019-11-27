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
            <tr v-for="item in selfs" :key="item[0]">
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:purple">.self:{{ item[0] }}</pre>
                <pre
                  class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  v-if="item[0] === 'auto'"
                >Default</pre>
              </td>
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:blue">align-self: {{ item[1] }};</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:2">
        <div class="flex flex:col flex:wrap">
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex items:stretch bg:grey-lighter" style="height: 150px;">
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="flex:1 self:auto text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex items:stretch bg:grey-lighter" style="height: 150px;">
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div
                  class="flex:1 self:start text:grey-darker text:center bg:grey-light m:1/2 p:1"
                >2</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple2"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex items:stretch bg:grey-lighter" style="height: 150px;">
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div
                  class="flex:1 self:center text:grey-darker text:center bg:grey-light m:1/2 p:1"
                >2</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple3"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex items:stretch bg:grey-lighter" style="height: 150px;">
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="flex:1 self:end text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple4"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex items:stretch bg:grey-lighter" style="height: 150px;">
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div
                  class="flex:1 self:stretch text:grey-darker text:center bg:grey-light m:1/2 p:1"
                >2</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple5"></pre>
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
      selfs: [
        ["auto", "auto"],
        ["start", "flex-start"],
        ["center", "center"],
        ["end", "flex-end"],
        ["stretch", "stretch"]
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
      ` <div class="flex items:stretch">
    <div>1</div>
    <div class="self:auto">2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      ` <div class="flex items:stretch">
    <div>1</div>
    <div class="self:start">2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      ` <div class="flex items:stretch">
    <div>1</div>
    <div class="self:center">2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      ` <div class="flex items:stretch">
    <div>1</div>
    <div class="self:end">2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple5 = Prism.highlight(
      ` <div class="flex items:stretch">
    <div>1</div>
    <div class="self:stretch">2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

