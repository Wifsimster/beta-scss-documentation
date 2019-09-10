<template>
  <card>
    <template #header>Spacing</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1 mr:1">
          <table class="w:full">
            <thead>
              <tr>
                <th>Class</th>
                <th>
                  Side
                  <span class="text:grey text:3/4">(Optional)</span>
                </th>
                <th>Taille</th>
                <th>
                  Px
                  <span class="text:grey text:3/4">(* 14px)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(size, index) in sizes" :key="index">
                <td class="p:1 whitespace:no-wrap border:b border:grey-lighter" v-if="index === 0">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">p</code> Padding
                </td>
                <td
                  class="p:1 whitespace:no-wrap border:b border:grey-lighter"
                  v-else-if="index === 1"
                >
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">m</code> Margin
                </td>
                <td class="p:1 whitespace:no-wrap border:b border:grey-lighter" v-else></td>

                <td class="p:1 whitespace:no-wrap border:b border:grey-lighter" v-if="index === 0">
                  <code class="border rounded bg:grey-light m:1/4 p:1/2">&nbsp;</code>
                  All
                  <span class="text:grey text:3/4">(Default)</span>
                </td>
                <td
                  class="p:1 whitespace:no-wrap border:b border:grey-lighter"
                  v-else-if="index === 1"
                >
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">t</code> Top
                </td>
                <td
                  class="p:1 whitespace:no-wrap border:b border:grey-lighter"
                  v-else-if="index === 2"
                >
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">r</code> Right
                </td>
                <td
                  class="p:1 whitespace:no-wrap border:b border:grey-lighter"
                  v-else-if="index === 3"
                >
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">b</code> Bottom
                </td>
                <td
                  class="p:1 whitespace:no-wrap border:b border:grey-lighter"
                  v-else-if="index === 4"
                >
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">l</code> Left
                </td>
                <td
                  class="p:1 whitespace:no-wrap border:b border:grey-lighter"
                  v-else-if="index === 5"
                >
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">x</code> Horizontal
                </td>
                <td
                  class="p:1 whitespace:no-wrap border:b border:grey-lighter"
                  v-else-if="index === 6"
                >
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">y</code> Vertical
                </td>
                <td class="p:1 whitespace:no-wrap border:b border:grey-lighter" v-else></td>

                <td class="p:1 whitespace:no-wrap border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 px:1/5 py:1/4">{{ size.key }}</code>
                  {{ size.value}}
                </td>

                <td
                  class="p:1 whitespace:no-wrap border:b border:grey-lighter"
                  v-if="size.px"
                >{{ size.px}}px</td>
                <td class="p:1 whitespace:no-wrap border:b border:grey-lighter" v-else></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex:2">
          <div class="flex flex:wrap">
            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1/2">
                  <div class="bg:grey-light p:2">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple1"></pre>
              </div>
            </div>
            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1/2">
                  <div class="bg:grey-light px:1 py:2">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple2"></pre>
              </div>
            </div>
            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1/2">
                  <div class="bg:grey-light pt:1/4 pr:2/5 px:3/5 pl:3/4">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple3"></pre>
              </div>
            </div>
            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1/2">
                  <div class="bg:grey-light m:2">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple4"></pre>
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
        { key: "1/5", value: "0.2rem", px: "3.2" },
        { key: "1/4", value: "0.25rem", px: "4" },
        { key: "1/3", value: "0.33333rem", px: "5.33333" },
        { key: "2/5", value: "0.4rem", px: "6.4" },
        { key: "1/2", value: "0.5rem", px: "8" },
        { key: "3/5", value: "0.6rem", px: "9.6" },
        { key: "2/3", value: "0.66667rem", px: "10.66667" },
        { key: "3/4", value: "0.75rem", px: "12" },
        { key: "4/5", value: "0.8rem", px: "12.8" },
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
      exemple4: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="bg:grey-lighter p:1/2">
  <div class="bg:grey-light p:2">Lorem ipsum dolor sit amet.</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="bg:grey-lighter p:1/2">
    <div class="bg:grey-lighter px:1 py:2">Lorem ipsum dolor sit amet.</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      `<div class="bg:grey-lighter p:1/2">
    <div class="bg:grey-lighter pt:1/4 pr:2/5 px:3/5 pl:3/4">Lorem ipsum dolor sit amet.</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      `<div class="bg:grey-lighter p:1/2">
    <div class="bg:grey-light m:1/2">Lorem ipsum dolor sit amet.</div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

