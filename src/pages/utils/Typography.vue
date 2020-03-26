<template>
  <card>
    <template #header>Typography</template>
    <template #content>
      <div class="flex flex:col">
        <div class="flex my:1">
          <div class="flex flex:col w:2/12">
            <pre
              v-for="(property, index) in properties"
              :key="index"
              @click="value = property"
              :class="{ 'border:purple': value === property }"
              class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 cursor:pointer"
            >{{ property }}</pre>
          </div>

          <div class="w:10/12">
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-light rounded p:1" :class="value">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam recusandae amet quaerat perspiciatis, quis aliquam culpa rem, cupiditate eos tempora eum quod excepturi voluptate assumenda, nesciunt cumque fugiat est illo.
                  <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque cumque neque, tenetur ex optio animi blanditiis minima a nulla quisquam fugiat dolores molestiae voluptate libero accusantium sint fugit ea? Eum.
                  <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cupiditate nisi deleniti blanditiis est? Eveniet natus odit error libero, autem ducimus? Fuga eaque quos corrupti ad, ea perspiciatis consectetur quisquam.
                </p>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple"></pre>
            </div>
          </div>
        </div>

        <div class="flex my:1">
          <div class="flex flex:col w:2/12">
            <pre
              v-for="(property, index) in wrappingProperties"
              :key="index"
              @click="value02 = property"
              :class="{ 'border:purple': value02 === property }"
              class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 cursor:pointer"
            >{{ property }}</pre>
          </div>

          <div class="w:10/12">
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-light rounded p:1">
                <p class :class="value02">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate modi libero error qui possimus veritatis aliquam culpa praesentium enim recusandae, nisi optio, repellendus dolore? Optio eveniet libero placeat suscipit.
                  <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio atque quisquam repudiandae id quae culpa cupiditate dignissimos, quos quia incidunt. Dolores velit veritatis sapiente, aperiam suscipit earum ipsa labore.
                  <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cumque sequi explicabo necessitatibus libero incidunt molestias rerum voluptatum beatae laboriosam et illo sunt consectetur ab natus maxime, reprehenderit voluptate animi!
                </p>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple02"></pre>
            </div>
          </div>
        </div>

        <div class="flex my:1 flex:1">
          <div class="w:2/12">
            <pre
              class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mr:1 mb:1/2 border:purple"
            >{{ listProperty }}</pre>
          </div>

          <div class="w:10/12">
            <div class="border rounded:t:1/2 p:1">
              <div class="bg:grey-light rounded p:1">
                <ul :class="listProperty">
                  <li>Lorem ipsum dolor sit amet consectetur</li>
                  <li>Lorem ipsum dolor sit amet consectetur</li>
                  <li>Lorem ipsum dolor sit amet consectetur</li>
                  <li>Lorem ipsum dolor sit amet consectetur</li>
                </ul>
              </div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple03"></pre>
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
        'whitespace:normal',
        'whitespace:no-wrap',
        'whitespace:pre',
        'whitespace:pre-line',
        'whitespace:pre-wap'
      ],
      wrappingProperties: ['break-words', 'break-normal', 'truncate'],
      listProperty: 'list-reset',
      value: null,
      value02: null,
      exemple: null,
      exemple02: null,
      exemple03: null
    }
  },
  created() {
    this.value = this.properties[0]
    this.value02 = this.wrappingProperties[0]
  },
  mounted() {
    this.setExemple()
    this.setExemple02()
    this.setExemple03()
  },
  watch: {
    value() {
      this.setExemple()
    },
    value02() {
      this.setExemple02()
    }
  },
  methods: {
    setExemple() {
      this.exemple = Prism.highlight(
        `<div class="${this.value}">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
</div>`,
        Prism.languages.html,
        'html'
      )
    },
    setExemple02() {
      this.exemple02 = Prism.highlight(
        `<p class="${this.value02}">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit...
</p>`,
        Prism.languages.html,
        'html'
      )
    },
    setExemple03() {
      this.exemple03 = Prism.highlight(
        `<ul class="${this.listProperty}">
    <li>Lorem ipsum dolor sit</li>
    [...]
</ul>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
