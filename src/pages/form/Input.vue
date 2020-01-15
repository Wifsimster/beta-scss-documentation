<template>
  <div class="flex:1">
    <div class="flex flex:wrap">
      <div class="flex:1">
        <div class="flex flex:col mr:1">
          <div class="flex:1 px:1/2 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <label for="inputId">Input text</label>
              <input id="inputId" type="text" />
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple2"></pre>
            </div>
          </div>

          <div class="flex:1 px:1/2 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <label for="numberId">Input number</label>
              <input id="numberId" type="number" />
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple3"></pre>
            </div>
          </div>

          <div class="flex:1 px:1/2 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <label for="readonlyId">Input readonly</label>
              <input id="readonlyId" type="text" readonly v-model="readonly" />
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple4"></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="flex:1">
        <div class="text:5/4 text:grey-darkest mb:1">Properties</div>
        <table class="mb:2">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <pre class="inline rounded px:1/4 bg:grey-light text:purple-light">v-model</pre>
              </td>
              <td>
                <pre class="inline rounded px:1/4 bg:grey-light text:grey-dark">String</pre>
              </td>
              <td></td>
              <td>Variable liée au champ</td>
            </tr>
            <tr>
              <td>
                <pre class="inline rounded px:1/4 bg:grey-light text:purple-light">placeholder</pre>
              </td>
              <td>
                <pre class="inline rounded px:1/4 bg:grey-light text:grey-dark">String</pre>
              </td>
              <td></td>
              <td>Placeholder</td>
            </tr>
            <tr>
              <td>
                <pre class="inline rounded px:1/4 bg:grey-light text:purple-light">:readonly</pre>
              </td>
              <td>
                <pre class="inline rounded px:1/4 bg:grey-light text:grey-dark">Boolean</pre>
              </td>
              <td>
                <pre class="inline rounded px:1/4 bg:grey-light text:teal">false</pre>
              </td>
              <td>Désactive le champ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
export default {
  data() {
    return {
      data: null,
      readonly: 'Value',
      exemple2: null,
      exemple3: null,
      exemple4: null
    }
  },
  mounted() {
    this.exemple2 = Prism.highlight(
      `<label for="inputId">Input text</label>
<input id="inputId" type="text" v-model="data">`,
      Prism.languages.html,
      'html'
    )

    this.exemple3 = Prism.highlight(
      `<label for="numberId">Input number</label>
<input id="numberId" type="number" v-model="data">`,
      Prism.languages.html,
      'html'
    )

    this.exemple4 = Prism.highlight(
      ` <label for="readonlyId">Input readonly</label>
<input id="readonlyId" type="text" v-model="data" readonly>`,
      Prism.languages.html,
      'html'
    )
  }
}
</script>

