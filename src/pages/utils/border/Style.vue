<template>
  <div class="flex flex:wrap my:1">
    <div class="flex flex:col flex:2/12">
      <pre
        v-for="property in properties"
        :key="property"
        @click="value = property"
        :class="{ 'border:purple': value === property }"
        class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 cursor:pointer"
      >{{ property }}</pre>
    </div>

    <div class="flex:10/12">
      <div class="flex:1">
        <div class="border rounded:t:1/2 p:1">
          <div
            class="p:1 rounded bg:grey-lighter transition"
            :class="'border border:1/2 border:' + value"
          >
            <p
              class="pb:1"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti velit, ad sequi itaque perferendis quisquam in sunt deleniti blanditiis qui inventore tempora eos veniam obcaecati incidunt, et pariatur corporis molestiae!</p>
            <p
              class="pb:1"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores libero vero neque ullam rerum ipsum saepe sequi soluta a quo! Tenetur, maiores? Eius voluptatum, laborum laudantium eaque adipisci aperiam error!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab in fuga doloribus natus corporis eligendi totam saepe deleniti laborum voluptatum consequuntur et, quod quaerat sapiente ex officia, ut dolor repudiandae?</p>
          </div>
        </div>
        <div class="bg:black rounded:b:1/2">
          <pre class="language-html" v-html="exemple"></pre>
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
      properties: ['solid', 'dashed', 'dotted', 'none'],
      value: null,
      exemple: null
    }
  },
  created() {
    this.value = this.properties[0]
  },
  mounted() {
    this.setExemple()
  },
  watch: {
    value() {
      this.setExemple()
    }
  },
  methods: {
    setExemple() {
      this.exemple = Prism.highlight(
        `<div class="border border:1/2 border:${this.value}">
    Lorem ispum dolor sit ...
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
