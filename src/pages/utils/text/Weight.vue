<template>
  <div class="flex flex:wrap my:1">
    <div class="flex flex:col flex:2/12">
      <table class="w:full">
        <tbody>
          <tr
            v-for="item in properties"
            :key="item"
            @click="value = item"
            :class="{ 'active': value === item }"
          >
            <td class="flex justify:between">
              <pre class="inline text:purple-dark">{{ item }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="item === 'text:normal'"
              >Default</pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:10/12">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2">
          <div class="border rounded:t:1/2 p:1">
            <div
              class="pb:1"
              :class="value"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti velit, ad sequi itaque perferendis quisquam in sunt deleniti blanditiis qui inventore tempora eos veniam obcaecati incidunt, et pariatur corporis molestiae!</div>
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
        'text:lightest',
        'text:lighter',
        'text:light',
        'text:normal',
        'text:bold',
        'text:bolder',
        'text:boldest'
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>

