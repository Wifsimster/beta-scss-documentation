<template>
  <div class="flex my:1">
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
            v-if="item === 'flex:shrink'"
          >Default</pre>
        </div>
      </div>
    </div>

    <div class="flex:10/12">
      <p class="pb:1">This defines the ability for a flex item to shrink if necessary.</p>
      <div class="border rounded:t:1/2">
        <div class="flex bg:grey-lighter transition overflow-x:auto p:1">
          <div
            class="transition flex text:grey-darker rounded bg:grey m:1/2 p:2"
            :class="value"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel similique necessitatibus earum ex quidem possimus voluptate ad? Assumenda qui tempore aut fugiat alias ipsam hic quibusdam delectus unde minus.</div>
          <div
            class="flex text:grey-darker bg:grey-light rounded m:1/2 p:2"
            :class="value"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odit laboriosam provident perferendis harum maiores voluptates, ducimus tempore atque voluptatibus quisquam quis itaque ipsum. Amet pariatur eos qui quibusdam cum!</div>
        </div>
      </div>
      <div class="bg:black rounded:b:1/2">
        <pre class="language-html" v-html="exemple"></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  data() {
    return {
      value: null,
      properties: ['flex:shrink', 'flex:shrink-none'],
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
        `<div class="flex">
    <div class="${this.value}">Lorem ...</div>
    <div>Lorem ...</div>
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>