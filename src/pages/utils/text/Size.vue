<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <table class="w:full">
        <thead>
          <tr>
            <th>Classe</th>
            <th>Propriétés</th>
            <th>
              Px
              <span class="text:grey text:3/4">(* 16px)</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="size in sizes" :key="size.key">
            <td>
              <pre class="inline text:purple">.text:{{ size.key }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="size.key === '1'"
              >Défaut</pre>
            </td>
            <td>
              <pre class="text:blue">{{ size.value }}</pre>
            </td>
            <td
              class="px:1 border:b border:grey-light"
            >{{ Number(size.value.replace("rem", '')) * 16 }}px</td>
            <td class="px:1/2 border:b border:grey-light" :class="'text:'+size.key">Aa</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:2">
      <div class="flex flex:wrap">
        <div class="flex:1 py:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div
              class="px:1 text:3/4"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div class="px:1 text:1">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="px:1 text:5/4"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
            <div
              class="px:1 text:3/2"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
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
import Prism from "prismjs";
export default {
  data() {
    return {
      sizes: [
        { key: "1/2", value: "0.5rem" },
        { key: "3/4", value: "0.75rem" },
        { key: "7/8", value: "0.875rem" },
        { key: "1", value: "1rem" },
        { key: "5/4", value: "1.25rem" },
        { key: "3/2", value: "1.5rem" },
        { key: "7/4", value: "1.75rem" },
        { key: "2", value: "2rem" },
        { key: "3", value: "3rem" }
      ],
      exemple1: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="px:1 text:3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="px:1 text:1">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="px:1 text:5/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>
<div class="px:1 text:3/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

