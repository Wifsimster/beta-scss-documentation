<template>
  <card>
    <template #header>Rounded</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1 flex:wrap mr:1">
          <table class="w:full">
            <thead>
              <tr>
                <th>Class</th>
                <th>
                  Side
                  <span class="text:grey text:3/4">(Optional)</span>
                </th>
                <th>
                  Size
                  <span class="text:grey text:3/4">(Optional)</span>
                </th>
                <th>
                  <select v-model="selectedPixel" class="text:teal text:normal text:7/8">
                    <option v-for="item in pixels" :value="item" :key="item">{{ item }}px</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in sizes" :key="item">
                <td class="py:1 border:b border:grey-lighter">
                  <code v-if="index === 0" class="border rounded mr:1/4 py:1/5 px:1/4">rounded</code>
                </td>
                <td class="py:1 border:b border:grey-lighter">
                  <code v-if="item.prefix" class="border rounded m:1/4 p:1/2">{{ item.prefix }}</code>
                  {{ item.side }}
                  <pre
                    v-if="item.default"
                    class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  >Default</pre>
                </td>
                <td class="py:1 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 py:1/5 px:1/4">{{ item.key }}</code>
                  {{ item.value }}
                </td>
                <td class="py:1 border:b border:grey-lighter">{{ rem2Px(item.value) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex:1">
          <div class="flex flex:wrap">
            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="py:1 bg:grey-light rounded"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple1"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="py:1 bg:grey-light rounded:t"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple2"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="py:1 bg:grey-light rounded:b:1/2"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple3"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="py:1 bg:grey-light rounded:t:3/4"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple4"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div id="round" class="bg:grey-light rounded:full"></div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple5"></pre>
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
      pixels: [12, 14, 16, 18],
      selectedPixel: 14,
      sizes: [
        {
          class: 'rounded',
          prefix: ' ',
          side: 'All',
          default: true,
          key: '0',
          value: '0'
        },
        { prefix: 't', side: 'Top', key: '1/8', value: '0.125' },
        { prefix: 'r', side: 'Right', key: '', value: '0.25' },
        { prefix: 'b', side: 'Bottom', key: '1/2', value: '0.5' },
        { prefix: 'l', side: 'Left', key: '3/4', value: '0.75' },
        { key: '1', value: '1' },
        { key: 'full', value: '' }
      ],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null,
      exemple5: null
    }
  },
  methods: {
    rem2Px(val) {
      if (val && !isNaN(Number(val))) {
        let result = val * this.selectedPixel
        return `${result.toFixed(1)} px`
      }
      return null
    }
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      '<div class="py:1 bg:grey-light rounded"></div>',
      Prism.languages.html,
      'html'
    )

    this.exemple2 = Prism.highlight(
      '<div class="py:1 bg:grey-light rounded:t"></div>',
      Prism.languages.html,
      'html'
    )

    this.exemple3 = Prism.highlight(
      '<div class="py:1 bg:grey-light rounded:b:1/2"></div>',
      Prism.languages.html,
      'html'
    )

    this.exemple4 = Prism.highlight(
      '<div class="py:1 bg:grey-light rounded:t:3/4"></div>',
      Prism.languages.html,
      'html'
    )

    this.exemple5 = Prism.highlight(
      '<div class="bg:grey-light rounded:full"></div>',
      Prism.languages.html,
      'html'
    )
  }
}
</script>

<style lang="scss" scoped>
#round {
  height: 35px;
  width: 35px;
}
</style>
