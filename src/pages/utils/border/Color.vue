<template>
  <div class="flex flex:wrap my:1">
    <div class="flex flex:col flex:2/12">
      <div class="overflow-y:auto line:normal mb:1 mx:1/2" style="max-height: 680px;">
        <table class="w:full">
          <tbody>
            <tr
              v-for="color in properties"
              :key="color"
              @click="value = color"
              :class="{ 'active': value === color }"
            >
              <td>
                <pre class="inline text:purple-dark">.text:{{ color }}</pre>
                <pre
                  class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4"
                  v-if="color === 'grey-light'"
                >Default</pre>
              </td>
              <td class="p:1" :class="'bg:' + color"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex:10/12">
      <div class="flex flex:wrap">
        <div class="flex:1 px:1/2 mb:1">
          <div class="border rounded:t:1/2 p:1">
            <div class="p:1 rounded bg:grey-lighter" :class="'border border:' + value">
              <p
                class="pb:1"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti velit, ad sequi itaque perferendis quisquam in sunt deleniti blanditiis qui inventore tempora eos veniam obcaecati incidunt, et pariatur corporis molestiae!</p>
              <p
                class="pb:1"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores libero vero neque ullam rerum ipsum saepe sequi soluta a quo! Tenetur, maiores? Eius voluptatum, laborum laudantium eaque adipisci aperiam error!</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab in fuga doloribus natus corporis eligendi totam saepe deleniti laborum voluptatum consequuntur et, quod quaerat sapiente ex officia, ut dolor repudiandae?</p>
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

<script>
import Prism from 'prismjs'

export default {
  data() {
    return {
      properties: [
        'black',
        'grey-darkest',
        'grey-darker',
        'grey-dark',
        'grey',
        'grey-light',
        'grey-lighter',
        'grey-lightest',
        'white',
        'red-darkest',
        'red-darker',
        'red-dark',
        'red',
        'red-light',
        'red-lighter',
        'red-lightest',
        'orange-darkest',
        'orange-darker',
        'orange-dark',
        'orange',
        'orange-light',
        'orange-lighter',
        'orange-lightest',
        'yellow-darkest',
        'yellow-darker',
        'yellow-dark',
        'yellow',
        'yellow-light',
        'yellow-lighter',
        'yellow-lightest',
        'green-darkest',
        'green-darker',
        'green-dark',
        'green',
        'green-light',
        'green-lighter',
        'green-lightest',
        'teal-darkest',
        'teal-darker',
        'teal-dark',
        'teal',
        'teal-light',
        'teal-lighter',
        'teal-lightest',
        'blue-darkest',
        'blue-darker',
        'blue-dark',
        'blue',
        'blue-light',
        'blue-lighter',
        'blue-lightest',
        'indigo-darkest',
        'indigo-darker',
        'indigo-dark',
        'indigo',
        'indigo-light',
        'indigo-lighter',
        'indigo-lightest',
        'purple-darkest',
        'purple-darker',
        'purple-dark',
        'purple',
        'purple-light',
        'purple-lighter',
        'purple-lightest',
        'pink-darkest',
        'pink-darker',
        'pink-dark',
        'pink',
        'pink-light',
        'pink-lighter',
        'pink-lightest'
      ],
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
        `<div class="border border:${this.value}">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua...
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>