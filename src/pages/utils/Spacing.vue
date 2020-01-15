<template>
  <card>
    <template #header>Spacing</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1 mr:1">
          <table class="w:full">
            <thead>
              <tr>
                <th>Class</th>
                <th>
                  Side
                  <span class="text:grey text:3/4">(Optional)</span>
                </th>
                <th>Size</th>
                <th>
                  <select v-model="selectedPixel" class="text:teal text:normal text:7/8">
                    <option v-for="item in pixels" :value="item" :key="item">{{ item }}px</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(size, index) in sizes" :key="index">
                <td class="p:1 whitespace:no-wrap border:b border:grey-lighter">
                  <code
                    v-if="size.classPrefix"
                    class="border rounded mr:1/4 py:1/5 px:1/4"
                  >{{ size.classPrefix }}</code>
                  {{ size.class }}
                </td>

                <td class="p:1 whitespace:no-wrap border:b border:grey-lighter">
                  <code
                    v-if="size.side"
                    class="border rounded mr:1/4 py:1/5 px:1/4"
                  >{{ size.prefix }}</code>
                  {{ size.side }}
                  <span
                    v-if="size.default"
                    class="text:grey text:3/4"
                  >(Default)</span>
                </td>

                <td class="p:1 whitespace:no-wrap border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 py:1/5 px:1/4">{{ size.key }}</code>
                </td>

                <td
                  class="p:1 whitespace:no-wrap border:b border:grey-lighter"
                >{{ rem2Px(size.value) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex:2">
          <div class="flex flex:wrap">
            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1/2">
                  <div class="bg:grey-light p:2">Lo ipsum dolor sit amet.</div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple1"></pre>
              </div>
            </div>
            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1/2">
                  <div class="bg:grey-light py:1 px:2">Lo ipsum dolor sit amet.</div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple2"></pre>
              </div>
            </div>
            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1/2">
                  <div class="bg:grey-light pt:1/4 pr:2/5 py:3/5 pl:3/4">Lo ipsum dolor sit amet.</div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple3"></pre>
              </div>
            </div>
            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="bg:grey-lighter p:1/2">
                  <div class="bg:grey-light m:2">Lo ipsum dolor sit amet.</div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple4"></pre>
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
          classPrefix: 'p',
          class: 'Padding',
          prefix: '',
          side: 'All',
          default: true,
          key: '0',
          value: '0'
        },
        {
          classPrefix: 'm',
          class: 'Margin',
          prefix: 't',
          side: 'Top',
          key: '1/5',
          value: '0.2'
        },
        { prefix: 'r', side: 'Right', key: '1/4', value: '0.25' },
        { prefix: 'b', side: 'Bottom', key: '1/3', value: '0.33333' },
        { prefix: 'l', side: 'Left', key: '2/5', value: '0.4' },
        { prefix: 'x', side: 'Horizontal', key: '1/2', value: '0.5' },
        { prefix: 'y', side: 'Vertical', key: '3/5', value: '0.6' },
        { key: '2/3', value: '0.66667' },
        { key: '3/4', value: '0.75' },
        { key: '4/5', value: '0.8' },
        { key: '1', value: '1' },
        { key: '5/4', value: '1.25' },
        { key: '3/2', value: '1.5' },
        { key: '7/4', value: '1.75' },
        { key: '2', value: '2' },
        { key: '5/2', value: '2.5' },
        { key: '3', value: '3' },
        { key: '4', value: '4' },
        { key: 'auto', value: 'auto' }
      ],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null
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
      `<div class="bg:grey-lighter p:1/2">
  <div class="bg:grey-light p:2">Lo ipsum dolor sit amet.</div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple2 = Prism.highlight(
      `<div class="bg:grey-lighter p:1/2">
    <div class="bg:grey-lighter py:1 px:2">Lo ipsum dolor sit amet.</div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple3 = Prism.highlight(
      `<div class="bg:grey-lighter p:1/2">
    <div class="bg:grey-lighter pt:1/4 pr:2/5 py:3/5 pl:3/4">Lo ipsum dolor sit amet.</div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple4 = Prism.highlight(
      `<div class="bg:grey-lighter p:1/2">
    <div class="bg:grey-light m:1/2">Lo ipsum dolor sit amet.</div>
</div>`,
      Prism.languages.html,
      'html'
    )
  }
}
</script>

