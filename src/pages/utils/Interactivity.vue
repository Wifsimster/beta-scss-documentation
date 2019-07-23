<template>
  <div>
    <h1>Interactivité</h1>

    <div class="flex flex:wrap">
      <div class="flex:1 mr:1">
        <table class="w:full">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Propriétés</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:purple">.cursor:auto</pre>
              </td>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:blue">cursor: auto;</pre>
              </td>
            </tr>
            <tr>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:purple">.cursor:default</pre>
              </td>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:blue">cursor: default;</pre>
              </td>
            </tr>
            <tr>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:purple">.cursor:pointer</pre>
              </td>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:blue">cursor: pointer;</pre>
              </td>
            </tr>
            <tr>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:purple">.cursor:wait</pre>
              </td>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:blue">cursor: wait;</pre>
              </td>
            </tr>
            <tr>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:purple">.cursor:move</pre>
              </td>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:blue">cursor: move;</pre>
              </td>
            </tr>
            <tr>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:purple">.cursor:not-allowed</pre>
              </td>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:blue">cursor: not-allowed;</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex:3">
        <div class="flex flex:wrap">
          <div class="flex:1 mr:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-lighter p:1">
                <div
                  class="cursor:auto p:1 mr:1 mb:1 bg:grey-light inline-block"
                >Lorem ipsum dolor sit amet.</div>
                <div
                  class="cursor:default p:1 mr:1 mb:1 bg:grey-light inline-block"
                >Lorem ipsum dolor sit amet.</div>
                <div
                  class="cursor:pointer p:1 mr:1 mb:1 bg:grey-light inline-block"
                >Lorem ipsum dolor sit amet.</div>
                <div
                  class="cursor:wait p:1 mr:1 mb:1 bg:grey-light inline-block"
                >Lorem ipsum dolor sit amet.</div>
                <div
                  class="cursor:move p:1 mr:1 mb:1 bg:grey-light inline-block"
                >Lorem ipsum dolor sit amet.</div>
                <div
                  class="cursor:not-allowed p:1 mr:1 mb:1 bg:grey-light inline-block"
                >Lorem ipsum dolor sit amet.</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex:1 mt:2">
      <div class="flex flex:wrap">
        <div class="flex:1 mr:1">
          <table class="w:full">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Propriétés</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:purple">.pointer-events:none</pre>
                </td>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue">pointer-events: none;</pre>
                </td>
              </tr>
              <tr>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:purple">.pointer-events:auto</pre>
                </td>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue">pointer-events: auto;</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex:3">
          <div class="flex flex:wrap">
            <div class="flex:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1">
                  <div
                    class="bg:grey-light inline-block p:1 pointer-events:none cursor:pointer mr:1"
                    onclick="alert('event')"
                  >Click</div>
                  <div
                    class="bg:grey-light inline-block p:1 pointer-events:auto cursor:pointer"
                    onclick="alert('event')"
                  >Click</div>
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
      `<div class="cursor:auto">Lorem ipsum dolor sit amet.</div>
<div class="cursor:default">Lorem ipsum dolor sit amet.</div>
<div class="cursor:pointer">Lorem ipsum dolor sit amet.</div>
<div class="cursor:wait">Lorem ipsum dolor sit amet.</div>
<div class="cursor:move">Lorem ipsum dolor sit amet.</div>
<div class="cursor:not-allowed">Lorem ipsum dolor sit amet.</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="pointer-events:none" onclick="alert('event')">Click</div>
<div class="pointer-events:auto" onclick="alert('event')">Click</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>
