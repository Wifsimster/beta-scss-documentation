<template>
  <div>
    <h1>Z-index</h1>
    <div class="flex">
      <div class="flex:1 mr:1">
        <table class="w:full">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Propriétés</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in z" :key="item">
              <td class="p:0 border:b border:grey-light">
                <pre class="text:blue"><span class="text:purple">.z:{{item}}</span></pre>
              </td>
              <td class="p:0 border:b border:grey-light">
                <pre class="text:blue">z-index: {{item}};</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:2">
        <div class="border rounded:1/2 p:1">
          <div class="relative text:center" style="height: 125px;">
            <div class="absolute p:2 z:50 ml:0 mt:0 bg:grey-lighter">z:50</div>
            <div class="absolute p:2 z:40 ml:1/2 mt:1/2 bg:grey-light">z:40</div>
            <div class="absolute p:2 z:30 ml:1 mt:1 bg:grey">z:30</div>
            <div class="absolute p:2 z:20 ml:3/2 mt:3/2 bg:grey-dark">z:20</div>
            <div class="absolute p:2 z:10 ml:2 mt:2 bg:grey-darker">z:10</div>
            <div class="absolute p:2 z:0 ml:5/2 mt:5/2 bg:grey-darkest">z:00</div>
          </div>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="exemple1"></pre>
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
      z: ["0", "10", "20", "30", "40", "50", "auto"],
      exemple1: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="relative text:center">
  <div class="absolute z:50 ml:0 mt:0 bg:grey-lighter">z:50</div>
  <div class="absolute z:40 ml:1/2 mt:1/2 bg:grey-light">z:40</div>
  <div class="absolute z:30 ml:1 mt:1 bg:grey">z:30</div>
  <div class="absolute z:20 ml:3/2 mt:3/2 bg:grey-dark">z:20</div>
  <div class="absolute z:10 ml:2 mt:2 bg:grey-darker">z:10</div>
  <div class="absolute z:0 ml:5/2 mt:5/2 bg:grey-darkest">z:0</div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

