<template>
  <card>
    <template #header>Position</template>
    <template #content>
      <div class="flex flex:wrap my:1">
        <div class="flex flex:col flex:2/12">
          <pre
            v-for="property in properties"
            :key="property.value"
            @click="value = property"
            :class="{ 'border:purple': value === property }"
            class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 cursor:pointer"
          >{{ property }}</pre>
          <div class="flex flex:wrap mr:1">
            <multiselect
              placeholder="Choose a position"
              :options="positions"
              v-model="position"
              label="label"
              track-by="value"
              class="mb:1/2"
            />
            <multiselect placeholder="Choose a size" :options="sizes" v-model="size" />

            <div class="w:full my:1/2">&nbsp;</div>

            <multiselect
              placeholder="Choose a position"
              :options="positions"
              v-model="position02"
              label="label"
              track-by="value"
              class="mb:1/2"
            />
            <multiselect placeholder="Choose a size" :options="sizes" v-model="size02" />
          </div>
        </div>

        <div class="flex:10/12">
          <div class="flex flex:wrap">
            <div class="flex:1 px:1/2">
              <div class="border rounded:t:1/2 p:1" style="min-height: 300px">
                <div class="relative p:4 bg:grey-light rounded">
                  <div
                    class="transition p:2 bg:grey-darker rounded"
                    :class="`${value} ${position.value}:${size} ${position02.value}:${size02}`"
                  ></div>
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
      properties: ['relative', 'absolute', 'fixed', 'static'],
      positions: [
        { label: 'top', value: 't' },
        { label: 'right', value: 'r' },
        { label: 'bottom', value: 'b' },
        { label: 'left', value: 'l' },
        { label: 'horizontal', value: 'x' },
        { label: 'vertical', value: 'y' }
      ],
      sizes: [
        '0',
        '1/4',
        '1/2',
        '3/4',
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
      value: 'absolute',
      position: { label: 'top', value: 't' },
      size: '1',
      position02: { label: 'left', value: 'l' },
      size02: '1',
      exemple: null
    }
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
    },
    position02() {
      this.setExemple()
    },
    size02() {
      this.setExemple()
    }
  },
  methods: {
    setExemple() {
      this.exemple = Prism.highlight(
        `<div class="relative">
  <div class="${this.value} ${this.position.value}:${this.size} ${this.position02.value}:${this.size02}"></div>
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
