<template>
  <card>
    <template #header>Position</template>
    <template #content>
      <div class="flex flex:row">
        <div class="flex:2 mr:1">
          <div class="flex flex:col">
            <div class="flex:1 mb:2">
              <table class="w:full">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py:1 border:b border:grey-light">
                      <pre class="inline text:purple">.static</pre>
                    </td>
                    <td class="py:1 border:b border:grey-light">
                      <pre class="inline text:blue">position: static;</pre>
                    </td>
                  </tr>
                  <tr>
                    <td class="py:1 border:b border:grey-light">
                      <pre class="inline text:purple">.fixed</pre>
                    </td>
                    <td class="py:1 border:b border:grey-light">
                      <pre class="inline text:blue">position: fixed;</pre>
                    </td>
                  </tr>
                  <tr>
                    <td class="py:1 border:b border:grey-light">
                      <pre class="inline text:purple">.absolute</pre>
                    </td>
                    <td class="py:1 border:b border:grey-light">
                      <pre class="inline text:blue">position: absolute;</pre>
                    </td>
                  </tr>
                  <tr>
                    <td class="py:1 border:b border:grey-light">
                      <pre class="inline text:purple">.relative</pre>
                    </td>
                    <td class="py:1 border:b border:grey-light">
                      <pre class="inline text:blue">position: relative;</pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex:1">
              <table class="w:full">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Size</th>
                    <th>
                      <select
                        v-model="selectedPixel"
                        class="text:teal text:normal text:7/8"
                      >
                        <option
                          v-for="item in pixels" :value="item" :key="item"
                        >{{ item }}px</option
                        >
                      </select>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(size, index) in sizes" :key="index">
                    <td
                      class="py:1 border:b border:grey-lighter"
                      v-if="index === 0"
                    >
                      <code class="border rounded mr:1/4 py:1/5 px:1/4">t</code>
                      Top
                    </td>
                    <td
                      class="py:1 border:b border:grey-lighter"
                      v-else-if="index === 1"
                    >
                      <code class="border rounded mr:1/4 py:1/5 px:1/4">r</code>
                      Right
                    </td>
                    <td
                      class="py:1 border:b border:grey-lighter"
                      v-else-if="index === 2"
                    >
                      <code class="border rounded mr:1/4 py:1/5 px:1/4">b</code>
                      Bottom
                    </td>
                    <td
                      class="py:1 border:b border:grey-lighter"
                      v-else-if="index === 3"
                    >
                      <code class="border rounded mr:1/4 py:1/5 px:1/4">l</code>
                      Left
                    </td>
                    <td
                      class="py:1 border:b border:grey-lighter"
                      v-else-if="index === 4"
                    >
                      <code class="border rounded mr:1/4 py:1/5 px:1/4">x</code>
                      Horizontal
                    </td>
                    <td
                      class="py:1 border:b border:grey-lighter"
                      v-else-if="index === 5"
                    >
                      <code class="border rounded mr:1/4 py:1/5 px:1/4">y</code>
                      Vertical
                    </td>
                    <td class="py:1 border:b border:grey-lighter" v-else></td>

                    <td class="py:1 border:b border:grey-lighter">
                      <code class="border rounded mr:1/4 py:1/5 px:1/4">{{
                        size.key
                      }}</code>
                    </td>

                    <td class="py:1 border:b border:grey-lighter">
                      {{ rem2Px(size.value) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="flex:2">
          <div class="flex flex:wrap">
            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute t:0 x:0 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple1"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute y:0 r:0 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple2"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute b:0 x:0 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple3"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute l:0 y:0 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple4"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute y:0 x:0 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple5"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute l:0 t:0 h:8 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple6"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute r:0 t:0 h:8 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple7"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute b:0 r:0 h:8 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple8"></pre>
              </div>
            </div>

            <div class="flex:1 px:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1">
                <div class="relative p:3 bg:grey-light">
                  <div class="absolute l:0 b:0 h:8 p:1 bg:grey-darker"></div>
                </div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple9"></pre>
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
        { key: '0', value: '0' },
        { key: '1/4', value: '0.25' },
        { key: '1/2', value: '0.5' },
        { key: '3/4', value: '0.75' },
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
      exemple4: null,
      exemple5: null,
      exemple6: null,
      exemple7: null,
      exemple8: null,
      exemple9: null
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
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute t:0 x:0 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple2 = Prism.highlight(
      ` <div class="relative p:3 bg:grey-light">
  <div class="absolute y:0 r:0 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple3 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute b:0 x:0 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple4 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute l:0 y:0 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple5 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute y:0 x:0 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple6 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute l:0 t:0 h:8 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple7 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute r:0 t:0 h:8 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple8 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute b:0 r:0 h:8 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      'html'
    )

    this.exemple9 = Prism.highlight(
      `<div class="relative p:3 bg:grey-light">
  <div class="absolute l:0 b:0 h:8 p:1 bg:grey-darker"></div>
</div>`,
      Prism.languages.html,
      'html'
    )
  }
}
</script>
