<template>
  <div class="flex flex:wrap my:1">
    <div class="flex flex:col flex:2/12">
      <table>
        <tbody>
          <tr
            v-for="item in properties"
            :key="item"
            @click="value = item"
            :class="{ 'active': value === item }"
          >
            <td class="flex justify:between">
              <pre class="inline text:purple">{{ item }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="item === 'line-height:3/2'"
              >Default</pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:2">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="py:1" :class="value">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
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
        'line-height:1/2',
        'line-height:3/4',
        'line-height:1',
        'line-height:3/2',
        'line-height:2',
        'line-height:5/2',
        'line-height:3'
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
    Lorem ipsum dolor sit amet...
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>

