<template>
  <div>
    <div class="flex flex:wrap">
      <div class="flex:1 mr:1">
        <table class="w:full">
          <thead>
            <tr>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in columns" :key="item">
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:purple">.flex:{{ item }}</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:3">
        <div class="flex flex:col flex:wrap">
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter">
                <div class="bg:grey-light flex:4/12 m:1/2 p:1">1</div>
                <div class="bg:grey-light flex:5/12 m:1/2 p:1">2</div>
                <div class="bg:grey-light flex:3/12 m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter">
                <div class="bg:grey-light flex:1/12 m:1/2 p:1">1</div>
                <div class="bg:grey-light flex:8/12 m:1/2 p:1">2</div>
                <div class="bg:grey-light flex:2/12 m:1/2 p:1">3</div>
                <div class="bg:grey-light flex:1/12 m:1/2 p:1">4</div>
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
      columns: [
        "1/12",
        "2/12",
        "3/12",
        "4/12",
        "5/12",
        "6/12",
        "7/12",
        "8/12",
        "9/12",
        "10/12",
        "11/12"
      ],
      exemple1: null,
      exemple2: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="flex">
  <div class="flex:4/12">1</div>
  <div class="flex:5/12">2</div>
  <div class="flex:3/12">3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="flex">
  <div class="flex:1/12">1</div>
  <div class="flex:8/12">2</div>
  <div class="flex:2/12">3</div>
  <div class="flex:1/12">4</div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

