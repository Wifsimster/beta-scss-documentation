<template>
  <div>
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
            <tr v-for="item in orders" :key="item[0]">
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:purple">.order:{{ item[0] }}</pre>
              </td>
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:blue">order: {{ item[1] }};</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:2">
        <div class="flex flex:col flex:wrap">
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter">
                <div class="order:last text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="order:first text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple2"></pre>
            </div>
          </div>
          <div class="flex:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="flex bg:grey-lighter">
                <div class="order:3 text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="order:2 text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="order:1 text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple3"></pre>
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
      orders: [
        ["first", "-1"],
        ["last", "999"],
        ["none", "0"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"]
      ],
      exemple1: null,
      exemple2: null,
      exemple3: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      ` <div class="flex">
    <div class="order:last">1</div>
    <div>2</div>
    <div>3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      ` <div class="flex">
    <div>1</div>
    <div>2</div>
    <div class="order:first">3</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      ` <div class="flex">
    <div class="3">1</div>
    <div class="2">2</div>
    <div class="1">3</div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

