<template>
  <div class="flex flex:wrap">
    <div class="flex:1 mr:1">
      <table class="w:full">
        <thead>
          <tr>
            <th>Class</th>
            <th>
              <select v-model="selectedPixel" class="text:teal text:normal text:7/8">
                <option v-for="item in pixels" :value="item" :key="item">{{ item }}px</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in properties"
            :key="item.key"
            @click="value = item.key"
            :class="{ 'active': value === item.key }"
          >
            <td>
              <pre class="inline text:purple-dark">.text:{{ item.key }}</pre>
              <pre
                class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                v-if="item.key === '1'"
              >Default</pre>
            </td>
            <td
              class="py:1/2 border:b border:grey-light text:teal-dark text:center"
            >{{ rem2Px(item.value) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex:3">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1" :class="'text:' + value">
            <p
              class="pb:1"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti velit, ad sequi itaque perferendis quisquam in sunt deleniti blanditiis qui inventore tempora eos veniam obcaecati incidunt, et pariatur corporis molestiae!</p>
            <p
              class="pb:1"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores libero vero neque ullam rerum ipsum saepe sequi soluta a quo! Tenetur, maiores? Eius voluptatum, laborum laudantium eaque adipisci aperiam error!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab in fuga doloribus natus corporis eligendi totam saepe deleniti laborum voluptatum consequuntur et, quod quaerat sapiente ex officia, ut dolor repudiandae?</p>
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
      pixels: [12, 14, 16, 18],
      selectedPixel: 14,
      properties: [
        { key: '1/2', value: '0.5' },
        { key: '3/4', value: '0.75' },
        { key: '7/8', value: '0.875' },
        { key: '1', value: '1' },
        { key: '9/8', value: '1.125' },
        { key: '5/4', value: '1.25' },
        { key: '3/2', value: '1.5' },
        { key: '7/4', value: '1.75' },
        { key: '2', value: '2' },
        { key: '3', value: '3' }
      ],
      value: null,
      exemple: null
    }
  },
  created() {
    this.value = this.properties[0].key
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
    rem2Px(val) {
      if (val && !isNaN(Number(val))) {
        let result = val * this.selectedPixel
        return `${result.toFixed(1)} px`
      }
      return null
    },
    setExemple() {
      this.exemple = Prism.highlight(
        `<div class="text:${this.value}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua...
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>

