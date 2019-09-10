<template>
  <card>
    <template #header>Position</template>
    <template #content>
      <div class="flex flex:row">
        <div class="flex:2 mr:1">
          <div class="flex flex:col">
            <div class="flex:1 mb:2">
              <table class="w:full">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px:1 border:b border:grey-light">
                      <pre class="inline text:purple">.static</pre>
                    </td>
                    <td class="px:1 border:b border:grey-light">
                      <pre class="inline text:blue">position: static;</pre>
                    </td>
                  </tr>
                  <tr>
                    <td class="px:1 border:b border:grey-light">
                      <pre class="inline text:purple">.fixed</pre>
                    </td>
                    <td class="px:1 border:b border:grey-light">
                      <pre class="inline text:blue">position: fixed;</pre>
                    </td>
                  </tr>
                  <tr>
                    <td class="px:1 border:b border:grey-light">
                      <pre class="inline text:purple">.absolute</pre>
                    </td>
                    <td class="px:1 border:b border:grey-light">
                      <pre class="inline text:blue">position: absolute;</pre>
                    </td>
                  </tr>
                  <tr>
                    <td class="px:1 border:b border:grey-light">
                      <pre class="inline text:purple">.relative</pre>
                    </td>
                    <td class="px:1 border:b border:grey-light">
                      <pre class="inline text:blue">position: relative;</pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex:1">
              <table class="w:full">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Taille</th>
                    <th>
                      Px
                      <span class="text:grey text:3/4">(* 14px)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(size, index) in sizes" :key="index">
                    <td class="px:1 border:b border:grey-lighter" v-if="index === 0">
                      <code class="border rounded mr:1/4 px:1/5 py:1/4">t</code> Top
                    </td>
                    <td class="px:1 border:b border:grey-lighter" v-else-if="index === 1">
                      <code class="border rounded mr:1/4 px:1/5 py:1/4">r</code> Right
                    </td>
                    <td class="px:1 border:b border:grey-lighter" v-else-if="index === 2">
                      <code class="border rounded mr:1/4 px:1/5 py:1/4">b</code> Bottom
                    </td>
                    <td class="px:1 border:b border:grey-lighter" v-else-if="index === 3">
                      <code class="border rounded mr:1/4 px:1/5 py:1/4">l</code> Left
                    </td>
                    <td class="px:1 border:b border:grey-lighter" v-else-if="index === 4">
                      <code class="border rounded mr:1/4 px:1/5 py:1/4">x</code> Horizontal
                    </td>
                    <td class="px:1 border:b border:grey-lighter" v-else-if="index === 5">
                      <code class="border rounded mr:1/4 px:1/5 py:1/4">y</code> Vertical
                    </td>
                    <td class="px:1 border:b border:grey-lighter" v-else></td>

                    <td class="px:1 border:b border:grey-lighter">
                      <code class="border rounded mr:1/4 px:1/5 py:1/4">{{ size.key }}</code>
                      {{ size.value}}
                    </td>

                    <td class="px:1 border:b border:grey-lighter" v-if="size.px">{{ size.px }}px</td>
                    <td class="px:1 border:b border:grey-lighter" v-else></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="flex:2">
          <div class="flex flex:wrap">
            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute t:0 y:0 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple1"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute x:0 r:0 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple2"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute b:0 y:0 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple3"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute l:0 x:0 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple4"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute x:0 y:0 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple5"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute l:0 t:0 h:8 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple6"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute r:0 t:0 h:8 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple7"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute b:0 r:0 h:8 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple8"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute l:0 b:0 h:8 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple9"></pre>
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
      sizes: [
        { key: "0", value: "0", px: "0" },
        { key: "1/4", value: "0.25rem", px: "4" },
        { key: "1/2", value: "0.5rem", px: "8" },
        { key: "3/4", value: "0.75rem", px: "12" },
        { key: "1", value: "1rem", px: "16" },
        { key: "5/4", value: "1.25rem", px: "20" },
        { key: "3/2", value: "1.5rem", px: "24" },
        { key: "7/4", value: "1.75rem", px: "28" },
        { key: "2", value: "2rem", px: "32" },
        { key: "5/2", value: "2.5rem", px: "40" },
        { key: "3", value: "3rem", px: "48" },
        { key: "4", value: "4rem", px: "64" },
        { key: "auto", value: "auto" }
      ],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null,
      exemple5: null,
      exemple6: null,
      exemple7: null,
      exemple8: null,
      exemple9: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute t:0 y:0 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      ` <div class="relative p:3 bg:grey-light">
  <div class="absolute x:0 r:0 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute b:0 y:0 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute l:0 x:0 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple5 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute x:0 y:0 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple6 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute l:0 t:0 h:8 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple7 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute r:0 t:0 h:8 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple8 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute b:0 r:0 h:8 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple9 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute l:0 b:0 h:8 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

