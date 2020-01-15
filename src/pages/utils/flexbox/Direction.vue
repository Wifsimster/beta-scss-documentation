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
            <tr v-for="direction in directions" :key="direction">
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:purple">.flex:{{ direction }}</pre>
                <pre
                  class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  v-if="direction === 'row'"
                >Default</pre>
              </td>
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:blue">flex-direction: {{ direction }};</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:2">
        <div class="flex flex:col flex:wrap">
          <div class="flex:1 mr:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex flex:row bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
          <div class="flex:1 mr:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex flex:row-reverse bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple2"></pre>
            </div>
          </div>
          <div class="flex:1 mr:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex flex:col bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple3"></pre>
            </div>
          </div>
          <div class="flex:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex flex:col-reverse bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple4"></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  data() {
    return {
      directions: ['row', 'row-reverse', 'col', 'col-reverse'],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null
    }
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      ` <div class="flex flex:row">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple2 = Prism.highlight(
      ` <div class="flex flex:row-reverse">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple3 = Prism.highlight(
      ` <div class="flex flex:col">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple4 = Prism.highlight(
      ` <div class="flex flex:col-reverse">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      'html'
    )
  }
}
</script>

