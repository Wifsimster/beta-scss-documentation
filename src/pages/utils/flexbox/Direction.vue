<template>
  <div>
    <div class="flex flex:wrap">
      <div class="flex:1 mr:1 mb:1">
        <table class="w:full">
          <thead>
            <tr>
              <th>Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="direction in directions" :key="direction">
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:purple">.{{ direction }}</pre>
                <pre
                  class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  v-if="direction === 'row'"
                >Default</pre>
              </td>
              <td class="py:1/2 px:1 border:b border:grey-light">
                <pre class="inline text:blue">flex-direction: {{ direction }};</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:2">
        <div class="flex flex:col flex:wrap">
          <div class="flex:1 mr:1 mb:1">
            <div class="flex">
              <div
                v-for="(direction, index) in directions"
                :key="index"
                @click="value = direction"
                :class="{ 'bg:grey-light': value === direction }"
                class="bg:grey hover:bg:grey-light focus:bg:grey-light rounded px:1 py:1/2 mr:1 cursor:pointer"
              >{{ direction }}</div>
            </div>
            <div class="border:l border:r p:1">
              <div class="flex bg:grey-lighter transition" :class="value">
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">1</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">2</div>
                <div class="text:grey-darker text:center bg:grey-light m:1/2 p:1">3</div>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple"></pre>
            </div>
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
      directions: [
        'flex:row',
        'flex:row-reverse',
        'flex:col',
        'flex:col-reverse'
      ],
      value: null,
      exemple: null
    }
  },
  created() {
    this.value = this.directions[0]
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
        `<div class="flex ${this.value}">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>