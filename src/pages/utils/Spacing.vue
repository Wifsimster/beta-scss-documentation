<template>
  <card>
    <template #header>Spacing</template>
    <template #content>
      <div class="flex flex:wrap my:1">
        <div class="flex flex:col flex:2/12">
          <pre
            v-for="(property, index) in properties"
            :key="index"
            @click="value = property"
            :class="{ 'border:purple': value === property }"
            class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 cursor:pointer"
          >{{ property.label }}</pre>
          <multiselect
            placeholder="Choose a position"
            :options="positions"
            v-model="position"
            label="label"
            track-by="value"
            class="mb:1/2"
          />
          <div class="flex flex:wrap">
            <multiselect placeholder="Choose a size" :options="sizes" v-model="size" />
          </div>
        </div>

        <div class="flex:10/12">
          <div class="flex flex:wrap">
            <div class="flex:1 px:1/2">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:2 bg:grey-light rounded">
                  <div
                    class="rounded bg:grey"
                    :class="`${value.value}${position.value}:${size}`"
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
        { label: 'padding', value: 'p' },
        { label: 'margin', value: 'm' }
      ],
      sizes: [
        '0',
        '1/5',
        '1/4',
        '1/3',
        '2/5',
        '1/2',
        '3/5',
        '2/3',
        '3/4',
        '4/5',
        '1',
        '5/4',
        '3/2',
        '7/4',
        '2',
        '5/2',
        '3',
        '4',
        'auto'
      ],
      positions: [
        { label: 'all', value: '' },
        { label: 'top', value: 't' },
        { label: 'right', value: 'r' },
        { label: 'bottom', value: 'b' },
        { label: 'left', value: 'l' },
        { label: 'horizontal', value: 'x' },
        { label: 'vertical', value: 'y' }
      ],
      position: { label: 'all', value: '' },
      value: null,
      size: '1',
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
    },
    position() {
      this.setExemple()
    },
    size() {
      this.setExemple()
    }
  },
  methods: {
    setExemple() {
      this.exemple = Prism.highlight(
        `<div class="${this.value.value}${this.position.value}:${this.size}">
    Lorem ipsum dolor sit ...
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
