<template>
  <div class="flex:1">
    <div class="flex flex:wrap">
      <div class="flex:1 px:1/2 mb:1">
        <div class="border rounded:t:1/2 p:1">
          <fieldset class="border:1/8 border:teal">&nbsp;</fieldset>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="html01"></pre>
        </div>
      </div>
      <div class="flex:1 px:1/2 mb:1">
        <div class="border rounded:t:1/2 p:1">
          <fieldset class="border:1/8 border:teal">
            <legend>Légende</legend>
          </fieldset>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="html02"></pre>
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
      html01: null,
      html02: null
    };
  },
  mounted() {
    this.html01 = Prism.highlight(
      `<fieldset class="border:1/8 border:teal"></fieldset>`,
      Prism.languages.html,
      "html"
    );

    this.html02 = Prism.highlight(
      `<fieldset class="border:1/8 border:teal">
    <legend>Légende</legend>
</fieldset>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

