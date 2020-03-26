<template>
  <card>
    <template #header>Height</template>
    <template #content>
      <div class="flex flex:wrap my:1">
        <div class="flex:2/12 pr:1">
          <pre
            v-for="(property, index) in properties"
            :key="index"
            @click="value = property"
            :class="{ 'border:purple': value === property }"
            class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer"
          >{{ property.label }}</pre>

          <multiselect placeholder="Choose a size" :options="sizes" v-model="size" />
        </div>

        <div class="flex:10/12">
          <div class="flex flex:wrap">
            <div class="flex:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:1 bg:grey-light rounded" style="height: 400px">
                  <div
                    class="rounded bg:grey p:1"
                    :class="`${value.value}:${size}`"
                  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquid dolor rem sit sapiente impedit in qui repellat voluptas quisquam ad obcaecati corporis magni facilis, ex consectetur ipsa nam quidem!</div>
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
  </card>
</template>

<script>
import Prism from 'prismjs'

export default {
  data() {
    return {
      properties: [
        { label: 'Height', value: 'h' },
        { label: 'Min-height', value: 'min-h' },
        { label: 'Max-height', value: 'max-h' }
      ],
      sizes: [
        '0',
        '1/12',
        '2/12',
        '3/12',
        '4/12',
        '5/12',
        '6/12',
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        'full',
        'screen',
        'inherit',
        'auto'
      ],
      value: null,
      size: null,
      exemple: null
    }
  },
  created() {
    this.value = this.properties[0]
    this.size = this.sizes[6]
  },
  mounted() {
    this.setExemple()
  },
  watch: {
    value() {
      this.setExemple()
    },
    size() {
      this.setExemple()
    }
  },
  methods: {
    setExemple() {
      this.exemple = Prism.highlight(
        `<div style="height: 400px" class="${this.value.value}:${this.size}">
    Lorem ipsum dolor sit ...
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
