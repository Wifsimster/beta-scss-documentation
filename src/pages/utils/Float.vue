<template>
  <card>
    <template #header>Float</template>

    <template #content>
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
              <tr>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:purple">.float:right</pre>
                </td>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue">float: right;</pre>
                </td>
              </tr>
              <tr>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:purple">.float:left</pre>
                </td>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue">float: left;</pre>
                </td>
              </tr>
              <tr>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:purple">.float:none</pre>
                </td>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue">float: none;</pre>
                </td>
              </tr>
              <tr>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:purple">.clearfix</pre>
                </td>
                <td class="p:0 border:b border:grey-light">
                  <pre class="text:blue">&::after {
    content: "";
    display: table;
    clear: both;
}</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex:1">
          <div class="flex flex:wrap">
            <div class="flex:1">
              <h2 class="mt:0">Float right</h2>
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1 mr:1">
                  <span class="bg:grey-light float:right text:center p:1">1</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple1"></pre>
              </div>
            </div>

            <div class="flex:1">
              <h2 class="mt:4">Float left</h2>
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1 mr:1">
                  <span class="float:left bg:grey-light text:center p:1">1</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple2"></pre>
              </div>
            </div>

            <div class="flex:1">
              <h2 class="mt:4">Float none</h2>
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1 mr:1 clearfix">
                  <span class="float:none bg:grey-light text:center p:1">1</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple3"></pre>
              </div>
            </div>

            <div class="flex:1">
              <h2 class="mt:4">Clearfix</h2>
              <div>
                <pre class="text:purple inline">.clearfix</pre>&nbsp;force les éléments enfants à se repositioner proprement.
              </div>

              <div class="flex">
                <div class="flex:1 mr:1">
                  <div class="border rounded:t:1/2 p:1">
                    <div class="bg:grey-lighter p:1 mb:2 mr:1">
                      <span class="float:left bg:grey-light text:center p:1 m:1/2">1</span>
                      <span>
                        Sans
                        <pre class="text:purple inline">.clearfix</pre>
                      </span>
                    </div>
                  </div>
                  <div class="bg:black rounded:b:1/2">
                    <pre class="language-html" v-html="exemple4"></pre>
                  </div>
                </div>

                <div class="flex:1">
                  <div class="border rounded:t:1/2 p:1">
                    <div class="bg:grey-lighter p:1 clearfix">
                      <span class="float:left bg:grey-light text:center p:1 m:1/2">1</span>
                      <span>
                        Avec
                        <pre class="text:purple inline">.clearfix</pre>
                      </span>
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
      ` <div class="bg:grey-lighter p:1 mr:1">
  <span class="bg:grey-light float:right text:center p:1">1</span>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="bg:grey-lighter p:1 mr:1">
  <span class="float:left bg:grey-light text:center p:1">1</span>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      `<div class="bg:grey-lighter p:1 mr:1 clearfix">
  <span class="float:none bg:grey-light text:center p:1">1</span>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      `<div class="bg:grey-lighter p:1 mb:2 mr:1">
  <span class="float:left bg:grey-light text:center p:1 m:1/2">1</span>
  <span>
    Sans
    <pre class="text:purple inline">.clearfix</pre>
  </span>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple5 = Prism.highlight(
      `<div class="bg:grey-lighter p:1 clearfix">
  <span class="float:left bg:grey-light text:center p:1 m:1/2">1</span>
  <span>
    Avec
    <pre class="text:purple inline">.clearfix</pre>
  </span>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>