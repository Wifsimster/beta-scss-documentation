<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <table class="w:full">
        <thead>
          <tr>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in properties"
            :key="item.key"
            @click="value = item"
            :class="{ 'active': value === item }"
          >
            <td class="py:1/2">
              <pre class="inline text:purple">.text:{{ item }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="item === 'left'"
              >Default</pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:3">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="py:1" :class="'text:' + value">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum itaque? Ullam odio aspernatur praesentium vel nesciunt quo quia cupiditate! Placeat deserunt quod temporibus commodi voluptates sunt? Placeat, necessitatibus porro?</p>
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
      properties: ['left', 'center', 'right', 'justify'],
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
        `<div class="text:${this.value}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua...
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>

