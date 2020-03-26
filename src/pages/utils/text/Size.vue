<template>
  <div class="flex flex:wrap my:1">
    <div class="flex:2/12 pr:1">
      <div class="flex flex:col overflow-y:auto" style="max-height: 600px">
        <div
          class="flex justify:between transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer"
          v-for="item in properties"
          :key="item"
          @click="value = item"
          :class="{ 'border:purple': value === item }"
        >
          <pre>{{ item }}</pre>
          <pre
            class="border bg:grey-lighter text:grey-dark px:1/3 text:3/4 rounded"
            v-if="item === 'text:1'"
          >Default</pre>
        </div>
      </div>
    </div>

    <div class="flex:10/12">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1" :class="value">
            <p
              class="pb:1"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti velit, ad sequi itaque perferendis quisquam in sunt deleniti blanditiis qui inventore tempora eos veniam obcaecati incidunt, et pariatur corporis molestiae!</p>
            <p
              class="pb:1"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores libero vero neque ullam rerum ipsum saepe sequi soluta a quo! Tenetur, maiores? Eius voluptatum, laborum laudantium eaque adipisci aperiam error!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab in fuga doloribus natus corporis eligendi totam saepe deleniti laborum voluptatum consequuntur et, quod quaerat sapiente ex officia, ut dolor repudiandae?</p>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple"></pre>
          </div>
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
      properties: [
        'text:1/2',
        'text:3/4',
        'text:7/8',
        'text:1',
        'text:9/8',
        'text:5/4',
        'text:3/2',
        'text:7/4',
        'text:2',
        'text:3'
      ],
      value: null,
      exemple: null
    }
  },
  created() {
    this.value = this.properties[3]
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
        `<div class="${this.value}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua...
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>

