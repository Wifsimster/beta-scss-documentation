<template>
  <card>
    <template #header>Effect</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1 mr:1">
          <table class="w:full">
            <thead>
              <tr>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:purple">.shadow</pre>
                </td>
              </tr>
              <tr v-for="shadow in shadows" :key="shadow">
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:purple">.shadow:{{shadow}}</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex:3">
          <div class="flex flex:wrap">
            <div class="flex:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="p:1">
                  <div class="inline-block bg:grey-lighter shadow p:2 mr:1 mb:1"></div>
                  <div class="inline-block bg:grey-lighter shadow:large p:2 mr:1 mb:1"></div>
                  <div class="inline-block bg:grey-lighter shadow:larger p:2 mr:1 mb:1"></div>
                  <div class="inline-block bg:grey-lighter shadow:inner p:2 mr:1 mb:1"></div>
                  <div class="inline-block bg:grey-lighter shadow:outline p:2 mr:1 mb:1"></div>
                  <div class="inline-block bg:grey-lighter shadow:none p:2 mr:1 mb:1"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple1"></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex:1">
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
                <tr v-for="opacity in opacities" :key="opacity">
                  <td class="p:0 border:b border:grey-light">
                    <pre class="text:purple">.opacity:{{opacity}}</pre>
                  </td>
                  <td class="p:0 border:b border:grey-light">
                    <pre class="text:blue">{{opacity}}%</pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex:3">
            <div class="flex flex:wrap">
              <div class="flex:1">
                <div class="border rounded:t:1/2 p:1">
                  <div class="p:1">
                    <div class="inline-block bg:grey-light opacity:0 p:2 mr:1 mb:1"></div>
                    <div class="inline-block bg:grey-light opacity:25 p:2 mr:1 mb:1"></div>
                    <div class="inline-block bg:grey-light opacity:50 p:2 mr:1 mb:1"></div>
                    <div class="inline-block bg:grey-light opacity:75 p:2 mr:1 mb:1"></div>
                    <div class="inline-block bg:grey-light opacity:100 p:2 mr:1 mb:1"></div>
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
  </card>
</template>

<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      shadows: ["large", "larger", "inner", "outline", "none"],
      opacities: ["0", "25", "50", "75", "100"],
      exemple1: null,
      exemple2: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="shadow"></div>
<div class="shadow:large"></div>
<div class="shadow:larger"></div>
<div class="shadow:inner"></div>
<div class="shadow:outline"></div>
<div class="shadow:none"></div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="opacity:0"></div>
<div class="opacity:25"></div>
<div class="opacity:50"></div>
<div class="opacity:75"></div>
<div class="opacity:100"></div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>
