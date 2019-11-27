<template>
  <card>
    <template #header>Responsive Grid</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1 min-w:sm">
          <p>Automatically builds a responsive grid in flexbox based on media queries.</p>
          <table class="w:full my:1">
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="grid in grids" :key="grid.key">
                <td class="py:1/4 border:b border:grey-light">
                  <pre class="text:purple">.responsive:{{ grid.key }}</pre>
                </td>
                <td class="py:1/4 border:b border:grey-light">
                  <pre class="text:blue">{{ grid.value }}</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex:1 min-w:sm">
          <div class="p:1/4 ml:1 mb:1">
            <h2>2 columns grid</h2>
            <div class="border rounded:t:1/2 p:1">
              <div class="responsive:2">
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">1</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">2</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple1"></pre>
            </div>
          </div>
        </div>

        <div class="flex:1 min-w:sm">
          <div class="p:1/4 ml:1 mb:1">
            <h2>6 columns grid</h2>
            <div class="border rounded:t:1/2 p:1">
              <div class="responsive:6">
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">1</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">2</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">3</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">4</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">5</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">6</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple2"></pre>
            </div>
          </div>
        </div>

        <div class="flex:1 min-w:sm">
          <div class="p:1/4 ml:1 mb:1">
            <h2>12 columns grid</h2>
            <div class="border rounded:t:1/2 p:1">
              <div class="responsive:12">
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">1</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">2</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">3</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">4</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">5</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">6</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">7</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">8</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">9</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">10</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">11</div>
                <div class="text:grey-dark text:center bg:grey-light py:1/2 px:1">12</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple3"></pre>
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
      grids: [
        { key: "2", value: "2 columns" },
        { key: "3", value: "3 columns" },
        { key: "4", value: "4 columns" },
        { key: "6", value: "6 columns" },
        { key: "8", value: "8 columns" },
        { key: "10", value: "10 columns" },
        { key: "12", value: "12 columns" }
      ],
      exemple1: null,
      exemple2: null,
      exemple3: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="responsive:2">
  <div>1</div>
  <div>2</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="responsive:6">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      `<div class="responsive:12">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>
