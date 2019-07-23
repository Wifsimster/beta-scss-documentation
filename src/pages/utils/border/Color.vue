<template>
  <div class="flex">
    <div class="flex:1 mr:1">
      <div class="overflow-y:auto line:normal" style="max-height: 640px;">
        <table class="w:full">
          <thead>
            <tr>
              <th>Classe</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="color in colors" :key="color">
              <td class="px:1 border:b border:grey-lighter">
                <pre class="inline text:purple">.border:{{ color }}</pre>
                <pre
                  class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  v-if="color === 'grey-light'"
                >Défaut</pre>
              </td>
              <td class="px:1 py:1/2 border:b border:grey-lighter">
                <div class="border px:1 py:3" :class="'border:'+color"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex:3">
      <div class="flex flex:wrap">
        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="px:1 bg:grey-lighter border border:teal"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple1"></pre>
          </div>
        </div>

        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="px:1 bg:grey-lighter border:b border:red"></div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple2"></pre>
          </div>
        </div>

        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <input class="bg:grey-lighter border:b hover:border:green">
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple3"></pre>
          </div>
        </div>

        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <input class="bg:grey-lighter border:b focus:border:green">
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple4"></pre>
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
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="px:1 bg:grey-lighter border border:teal"></div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="px:1 bg:grey-lighter border:b border:red"></div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      `<input class="bg:grey-lighter border:b hover:border:green">`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      `<input class="bg:grey-lighter border:b focus:border:green">`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 33px;
}
</style>
