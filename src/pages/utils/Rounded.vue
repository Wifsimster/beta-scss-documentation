<template>
  <card>
    <template #header>Rounded</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1 flex:wrap mr:1">
          <table class="w:full">
            <thead>
              <tr>
                <th>Class</th>
                <th>
                  Side
                  <span class="text:grey text:3/4">(Optional)</span>
                </th>
                <th>
                  Size
                  <span class="text:grey text:3/4">(Optional)</span>
                </th>
                <th>
                  Px
                  <span class="text:grey text:3/4">(* 14px)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">rounded</code>
                </td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded bg:grey-light m:1/4 p:1/2">&nbsp;</code>
                  All
                  <pre class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4">Default</pre>
                </td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">0</code> 0
                </td>
                <td class="px:1 border:b border:grey-lighter">0</td>
              </tr>
              <tr>
                <td class="px:1 border:b border:grey-lighter"></td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">t</code> Top
                </td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">1/8</code> 0.125rem
                </td>
                <td class="px:1 border:b border:grey-lighter">2px</td>
              </tr>
              <tr>
                <td class="px:1 border:b border:grey-lighter"></td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">r</code> Right
                </td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded bg:grey-light m:1/4 p:1/2">&nbsp;</code> 0.25rem
                  <pre class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4">Default</pre>
                </td>
                <td class="px:1 border:b border:grey-lighter">4px</td>
              </tr>
              <tr>
                <td class="px:1 border:b border:grey-lighter"></td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">b</code> Bottom
                </td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">1/2</code> 0.5rem
                </td>
                <td class="px:1 border:b border:grey-lighter">8px</td>
              </tr>
              <tr>
                <td class="px:1 border:b border:grey-lighter"></td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">l</code> Left
                </td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">3/4</code> 0.75rem
                </td>
                <td class="px:1 border:b border:grey-lighter">12px</td>
              </tr>
              <tr>
                <td class="px:1 border:b border:grey-lighter"></td>
                <td class="px:1 border:b border:grey-lighter"></td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">1</code> 1rem
                </td>
                <td class="px:1 border:b border:grey-lighter">14px</td>
              </tr>
              <tr>
                <td class="px:1 border:b border:grey-lighter"></td>
                <td class="px:1 border:b border:grey-lighter"></td>
                <td class="px:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">full</code> 9999px
                </td>
                <td class="px:1 border:b border:grey-lighter">9999px</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex:1">
          <div class="flex flex:wrap">
            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="px:1 bg:grey-light rounded"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple1"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="px:1 bg:grey-light rounded:t"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple2"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="px:1 bg:grey-light rounded:b:1/2"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple3"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="px:1 bg:grey-light rounded:t:3/4"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple4"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div id="round" class="bg:grey-light rounded:full"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple5"></pre>
              </div>
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
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null,
      exemple5: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="px:1 bg:grey-light rounded"></div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="px:1 bg:grey-light rounded:t"></div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      `<div class="px:1 bg:grey-light rounded:b:1/2"></div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      `<div class="px:1 bg:grey-light rounded:t:3/4"></div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple5 = Prism.highlight(
      `<div class="bg:grey-light rounded:full"></div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

<style lang="scss" scoped>
#round {
  height: 35px;
  width: 35px;
}
</style>
