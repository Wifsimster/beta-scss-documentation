<template>
  <div>
    Animation
    <div class="flex flex:wrap">
      <div class="flex:1 mr:1">
        <table class="w:full">
          <thead>
            <tr>
              <th>Classe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <pre class="inline text:purple">.rotate:0</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.rotate:90</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.rotate:180</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.rotate:270</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.rotating</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.hover:rotate:0</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.hover:rotate:90</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.hover:rotate:180</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.hover:rotate:270</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.hover:rotating</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:3">
        <div class="flex flex:wrap">
          <div class="flex:1 mb:1 mr:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-lighter p:1">
                <i class="hexa-icons p:1 text:5/4 rotate:0">top</i>
                <i class="hexa-icons p:1 text:5/4 rotate:90">top</i>
                <i class="hexa-icons p:1 text:5/4 rotate:180">top</i>
                <i class="hexa-icons p:1 text:5/4 rotate:270">top</i>
                <i class="hexa-icons p:1 text:5/4 rotating">config</i>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
          <div class="flex:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-lighter p:1">
                <i class="hexa-icons inline-block p:1 text:5/4 rotate:90 hover:rotate:0">top</i>
                <i class="hexa-icons inline-block p:1 text:5/4 hover:rotate:90">top</i>
                <i class="hexa-icons inline-block p:1 text:5/4 hover:rotate:180">top</i>
                <i class="hexa-icons inline-block p:1 text:5/4 hover:rotate:270">top</i>
                <i class="hexa-icons inline-block p:1 text:5/4 hover:rotating">config</i>
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
      exemple1: null,
      exemple2: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<i class="hexa-icons rotate:0">top</i>
<i class="hexa-icons rotate:90">top</i>
<i class="hexa-icons rotate:180">top</i>
<i class="hexa-icons rotate:270">top</i>
<i class="hexa-icons rotating">config</i>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<i class="hexa-icons rotate:90 hover:rotate:0">top</i>
<i class="hexa-icons hover:rotate:90">top</i>
<i class="hexa-icons hover:rotate:180">top</i>
<i class="hexa-icons hover:rotate:270">top</i>
<i class="hexa-icons hover:rotating">config</i>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

