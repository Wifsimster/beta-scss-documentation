<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <div
        class="overflow-y:auto line:normal mb:1 mx:1/2"
        style="max-height: 680px;"
      >
        <table class="w:full">
          <thead>
            <tr>
              <th>Class</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="color in colors" :key="color">
              <td>
                <pre class="inline text:purple">.text:{{ color }}</pre>
                <pre
                  class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  v-if="color === 'black'"
                >
Default</pre
                >
              </td>
              <td
                class="text:center py:1/2 border:b border:grey-light"
                :class="'text:' + color"
              >
                Aa
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex:3">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="py:1 text:red-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.
            </div>
            <div class="py:1 text:teal-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.
            </div>
            <div class="py:1 text:purple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.
            </div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple1"></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs"
export default {
  data() {
    return {
      colors: [
        "black",
        "grey-darkest",
        "grey-darker",
        "grey-dark",
        "grey",
        "grey-light",
        "grey-lighter",
        "grey-lightest",
        "white",
        "red-darkest",
        "red-darker",
        "red-dark",
        "red",
        "red-light",
        "red-lighter",
        "red-lightest",
        "orange-darkest",
        "orange-darker",
        "orange-dark",
        "orange",
        "orange-light",
        "orange-lighter",
        "orange-lightest",
        "yellow:darkest",
        "yellow:darker",
        "yellow:dark",
        "yellow",
        "yellow:light",
        "yellow:lighter",
        "yellow:lightest",
        "green-darkest",
        "green-darker",
        "green-dark",
        "green",
        "green-light",
        "green-lighter",
        "green-lightest",
        "teal-darkest",
        "teal-darker",
        "teal-dark",
        "teal",
        "teal-light",
        "teal-lighter",
        "teal-lightest",
        "blue-darkest",
        "blue-darker",
        "blue-dark",
        "blue",
        "blue-light",
        "blue-lighter",
        "blue-lightest",
        "indigo-darkest",
        "indigo-darker",
        "indigo-dark",
        "indigo",
        "indigo-light",
        "indigo-lighter",
        "indigo-lightest",
        "purple-darkest",
        "purple-darker",
        "purple-dark",
        "purple",
        "purple-light",
        "purple-lighter",
        "purple-lightest",
        "pink-darkest",
        "pink-darker",
        "pink-dark",
        "pink",
        "pink-light",
        "pink-lighter",
        "pink-lightest"
      ],
      exemple1: null
    }
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="py:1 text:red-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 text:teal-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="py:1 text:purple">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>`,
      Prism.languages.html,
      "html"
    )
  }
}
</script>
