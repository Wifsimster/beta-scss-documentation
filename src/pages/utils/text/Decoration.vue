<template>
  <div class="flex flex:wrap my:1">
    <div class="flex:2/12 pr:1">
      <div class="flex flex:col">
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
            v-if="item === 'normal-case'"
          >Default</pre>
        </div>
      </div>
    </div>

    <div class="flex:10/12">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div
              class="py:1"
              :class="value"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et nisi quos accusantium perferendis nulla sit repellendus iure quo, architecto ipsam est nihil commodi repellat. Ut porro non iusto ullam.</div>
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
        'italic',
        'normal',
        'uppercase',
        'lowercase',
        'capitalize',
        'normal-case',
        'underline',
        'line-through',
        'no-underline'
      ],
      value: null,
      exemple: null
    }
  },
  created() {
    this.value = this.properties[5]
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

