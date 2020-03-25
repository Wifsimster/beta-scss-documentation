<template>
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
          <tr
            v-for="item in properties"
            :key="item.key"
            @click="value = item.key"
            :class="{ 'active': value === item.key }"
          >
            <td>
              <pre class="inline text:purple">.text:{{ item.key }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="item.key === 'normal'"
              >Default</pre>
            </td>
            <td class="text:center">
              <pre class="py:1/2 text:teal-dark">{{ item.value }}</pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:3">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div
              class="pb:1"
              :class="'text:' + value"
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
        { key: 'lightest', value: '100' },
        { key: 'lighter', value: '200' },
        { key: 'light', value: '300' },
        { key: 'normal', value: '400' },
        { key: 'bold', value: '500' },
        { key: 'bolder', value: '600' },
        { key: 'boldest', value: '700' }
      ],
      value: null,
      exemple: null
    }
  },
  created() {
    this.value = this.properties[0].key
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
        `<div class="text:${this.value}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>

