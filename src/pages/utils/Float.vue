<template>
  <card>
    <template #header>Float</template>
    <template #content>
      <div class="flex flex:wrap mb:1">
        <pre
          v-for="(property, index) in properties"
          :key="index"
          @click="value = property"
          :class="{ 'border:purple': value === property }"
          class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 cursor:pointer"
        >{{ property }}</pre>
      </div>

      <div class="flex:3 mr:1 mb:1">
        <div class="flex flex:wrap">
          <div class="flex:1 mr:1 mb:1">
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-lighter p:1 mr:1">
                <p class="py:1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fuga pariatur. Ipsam cum vel deleniti praesentium blanditiis, ex nulla facere doloremque pariatur quas autem aliquid iste, tempore officia rem nisi?
                  <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora architecto sed, quisquam hic, recusandae in iure nam veniam optio debitis totam quo soluta doloribus consectetur libero fugit quis eos.
                </p>
                <span
                  class="bg:grey-light text:center rounded shadow p:2 mx:1"
                  :class="value"
                >Floating box</span>
                <p class="py:1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum officiis voluptate minus sunt suscipit incidunt accusantium tempore et nesciunt quisquam voluptatem eos sed recusandae omnis, enim sapiente at perspiciatis repudiandae.
                  <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi deserunt ducimus error corrupti maxime sit assumenda natus tenetur? Omnis repellat neque modi eaque itaque voluptatem ab ea, expedita aut?
                </p>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple"></pre>
            </div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script>
import Prism from 'prismjs'

export default {
  data() {
    return {
      properties: ['float:left', 'float:right', 'float:none', 'clearfix'],
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
        `<p>Lorem ipsum ...</p>
<span class="${this.value}">Floating box</span>
<p>Lorem ipsum ...</p>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>