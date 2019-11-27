<template>
  <div>
    <div class="flex flex:wrap">
      <div class="flex:1 mr:1 mb:1">
        <table class="w:full">
          <thead>
            <tr>
              <th>Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in flexs" :key="item[0]">
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:purple">.flex:{{ item[0] }}</pre>
                <pre
                  class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  v-if="item[0] === 'auto'"
                >Default</pre>
              </td>
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:blue">flex: {{ item[1] }};</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:2">
        <div class="flex flex:col flex:wrap">
          <div class="flex:1 mr:1 mb:1">
            <div
              class="text:grey-darkest py:1 text:5/4"
            >Auto : L'élément peut se contracter et s'étendre au besoin.</div>
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter" style="height: 150px;">
                <div class="flex:auto text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="flex:auto text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="flex:auto text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
          <div class="flex:1 mr:1 mb:1">
            <div
              class="text:grey-darkest py:1 text:5/4"
            >Initial : L'élément peut se contracter mais ne peut pas s'étendre.</div>
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter" style="height: 150px;">
                <div class="flex:initial text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="flex:initial text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="flex:initial text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple2"></pre>
            </div>
          </div>
          <div class="flex:1 mr:1 mb:1">
            <div
              class="text:grey-darkest py:1 text:5/4"
            >Flex 1 : L'élément s'étend dès que possible et peut se contracter.</div>
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter" style="height: 150px;">
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple3"></pre>
            </div>
          </div>
          <div class="flex:1 mr:1 mb:1">
            <div
              class="text:grey-darkest py:1 text:5/4"
            >Flex 2 : L'élément s'étend en prennant deux fois plus d'espace que les autres éléments et peut se contracter.</div>
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter" style="height: 150px;">
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="flex:2 text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple4"></pre>
            </div>
          </div>
          <div class="flex:1 mr:1 mb:1">
            <div
              class="text:grey-darkest py:1 text:5/4"
            >Flex 3 : L'élément s'étend en prennant trois fois plus d'espace que les autres éléments et peut se contracter.</div>
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter" style="height: 150px;">
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="flex:3 text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple5"></pre>
            </div>
          </div>
          <div class="flex:1">
            <div
              class="text:grey-darkest py:1 text:5/4"
            >None : L'élément ne peut s'étendre ni se contracter.</div>
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter" style="height: 150px;">
                <div class="flex:none text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="flex:none text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="flex:none text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple6"></pre>
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
      flexs: [
        ["auto", "1 1 auto"],
        ["initial", "0 1 auto"],
        ["1", "1 1 0%"],
        ["2", "2 2 0%"],
        ["3", "3 3 0%"],
        // ["full", "0 1 100%"],
        ["none", "none"]
      ],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null,
      exemple5: null,
      exemple6: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="flex">
    <div class="flex:auto">1</div>
    <div class="flex:auto">2</div>
    <div class="flex:auto">3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="flex">
    <div class="flex:initial">1</div>
    <div class="flex:initial">2</div>
    <div class="flex:initial">3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      `<div class="flex">
    <div class="flex:1">1</div>
    <div class="flex:1">2</div>
    <div class="flex:1">3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      `<div class="flex">
    <div class="flex:1">1</div>
    <div class="flex:2">2</div>
    <div class="flex:1">3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple5 = Prism.highlight(
      `<div class="flex">
    <div class="flex:1">1</div>
    <div class="flex:3">2</div>
    <div class="flex:1">3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple6 = Prism.highlight(
      `<div class="flex">
    <div class="flex:none">1</div>
    <div class="flex:none">2</div>
    <div class="flex:none">3</div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>
