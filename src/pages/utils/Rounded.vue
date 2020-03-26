<template>
  <card>
    <template #header>Rounded</template>
    <template #content>
      <div class="flex flex:wrap my:1">
        <div class="flex flex:col flex:2/12">
          <div class="flex mb:1">
            <pre class="border bg:grey-light text:purple border:purple rounded px:1 py:1/2 mr:1">rounded</pre>
          </div>
          <multiselect
            placeholder="Choose a position"
            :options="positions"
            v-model="position"
            label="label"
            track-by="value"
            class="mb:1"
          />
          <multiselect
            placeholder="Choose a size"
            :options="sizes"
            v-model="size"
            label="label"
            track-by="value"
          />
        </div>

        <div class="flex:10/12">
          <div class="flex flex:wrap">
            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div
                  class="py:4 bg:grey-light trannsition"
                  :class="`rounded${position && position.value ? ':' + position.value : ''}${size && size.value ? ':' + size.value : ''}`"
                ></div>
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
      positions: [
        { label: 'All', value: null },
        { label: 'Top', value: 't' },
        { label: 'Right', value: 'r' },
        { label: 'Bottom', value: 'b' },
        { label: 'Left', value: 'l' }
      ],
      sizes: [
        { label: '0', value: '0' },
        { label: '1/8', value: '1/8' },
        { label: '1/4', value: null },
        { label: '1/2', value: '1/2' },
        { label: '3/4', value: '3/4' },
        { label: '1', value: '1' },
        { label: 'full', value: 'full' }
      ],
      position: null,
      size: null,
      exemple: null
    }
  },
  created() {
    this.position = this.positions[0]
    this.size = this.sizes[5]
  },
  mounted() {
    this.setExemple()
  },
  watch: {
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
        `<div class="rounded${
          this.position && this.position.value ? ':' + this.position.value : ''
        }${this.size && this.size.value ? ':' + this.size.value : ''}"></div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
#round {
  height: 35px;
  width: 35px;
}
</style>
