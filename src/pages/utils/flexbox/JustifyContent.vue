<template>
  <div>
    <div
      class="text:grey-darkest px:1 text:5/4"
    >Contrôle la disposition des éléments au niveau de l'axe principal du conteneur.</div>
    <div class="flex flex:wrap">
      <div class="flex:initial mr:1">
        <table class="w:full">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Propriétés</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in contents" :key="item[0]">
              <td class="px:1/2 py:1 border:b border:grey-light">
                <pre class="inline text:purple">.justify:{{ item[0] }}</pre>
                <pre
                  class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  v-if="item[0] === 'start'"
                >Défaut</pre>
              </td>
              <td class="px:1/2 py:1 border:b border:grey-light">
                <pre class="inline text:blue">justify-content: {{ item[1] }}</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:1">
        <div class="flex flex:col flex:wrap">
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex justify:start bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex justify:center bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple2"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex justify:end bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple3"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex justify:between bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple4"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex justify:around bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
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
      contents: [
        ["start", "flex:start"],
        ["center", "center"],
        ["end", "flex-end"],
        ["between", "space-between"],
        ["around", "space-around"]
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
      ` <div class="flex justify:start">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      ` <div class="flex justify:center">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      ` <div class="flex justify:end">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      ` <div class="flex justify:between">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple5 = Prism.highlight(
      ` <div class="flex justify:around">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

