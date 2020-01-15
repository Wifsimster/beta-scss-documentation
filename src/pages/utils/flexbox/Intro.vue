<template>
  <div>
    <div class="flex flex:col bg:grey-lighter mt:1 p:1/2 rounded">
      <div class="flex flex:wrap">
        <div class="flex:1 text:center bg:grey-light m:1/2 px:1/4 py:1 rounded">Item</div>
        <div class="flex:2 text:center bg:grey-light m:1/2 px:1/4 py:1 rounded">Item</div>
      </div>
      <div class="flex:1 text:center">Content</div>
    </div>

    <div class="flex flex:wrap">
      <div class="flex:1 px:1 my:1">
        <div class="border rounded:t:1/2 p:1">
          <div class="flex bg:grey-lighter">
            <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">1</div>
            <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">2</div>
            <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">3</div>
          </div>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="exemple1"></pre>
        </div>
      </div>

      <div class="flex:1 px:1 my:1">
        <div class="border rounded:t:1/2 p:1">
          <div class="flex flex:col bg:grey-lighter">
            <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">1</div>
            <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">2</div>
            <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">3</div>
          </div>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="exemple2"></pre>
        </div>
      </div>

      <div class="flex:2 px:1 my:1">
        <div class="border rounded:t:1/2 p:1">
          <div class="flex bg:grey-lighter">
            <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">1</div>
            <div class="flex:2 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">2</div>
            <div class="flex:3 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">3</div>
          </div>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="exemple3"></pre>
        </div>
      </div>

      <div class="flex:2 px:1 my:1">
        <div class="border rounded:t:1/2 p:1">
          <div class="flex bg:grey-lighter">
            <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">1</div>
            <div class="flex:2">
              <div class="flex flex:col">
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">2</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">3</div>
                <div class="flex:1 text:grey-darker text:center bg:grey-light m:1/2 px:1/4 py:1">4</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="exemple4"></pre>
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
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null
    }
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="flex">
  <div class="flex:1">1</div>
  <div class="flex:1">2</div>
  <div class="flex:1">3</div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple2 = Prism.highlight(
      `<div class="flex flex:col">
  <div class="flex:1">1</div>
  <div class="flex:1">2</div>
  <div class="flex:1">3</div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple3 = Prism.highlight(
      `<div class="flex">
  <div class="flex:1">1</div>
  <div class="flex:2">2</div>
  <div class="flex:3">3</div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple4 = Prism.highlight(
      ` <div class="flex">
    <div class="flex:1">1</div>
    <div class="flex:2">
        <div class="flex flex:col">
            <div class="flex:1">2</div>
            <div class="flex:1">3</div>
            <div class="flex:1">4</div>
        </div>
    </div>
</div>`,
      Prism.languages.html,
      'html'
    )
  }
}
</script>

