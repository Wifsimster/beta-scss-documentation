<template>
  <card>
    <template #header>Interactivity</template>
    <template #content>
      <div class="flex flex:wrap my:1">
        <div class="flex:2/12 pr:1">
          <pre
            v-for="property in properites"
            :key="property"
            @click="value = property"
            :class="{ 'border:purple': value === property }"
            class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mb:1/2 cursor:pointer"
          >{{ property }}</pre>
        </div>

        <div class="flex:10/12">
          <transition name="opacity">
            <div class="mb:1 bg:grey-lighter p:1 rounded" v-if="value === 'pointer-events:none'">
              <pre class="inline text:purple rounded">{{ value }}</pre>&nbsp;disabled JavaScript inside the element.
            </div>
          </transition>
          <transition name="opacity">
            <div class="mb:1 bg:grey-lighter p:1 rounded" v-if="value === 'pointer-events:auto'">
              <pre class="inline text:purple rounded">{{ value }}</pre>&nbsp;enable JavaScript inside the element.
            </div>
          </transition>
          <div class="flex flex:wrap">
            <div class="flex:1">
              <div class="border rounded:t:1/2 p:2">
                <div class="transition border rounded bg:grey-lighter p:2" :class="`${value}`">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquid dolor rem sit sapiente impedit in qui repellat voluptas quisquam ad obcaecati corporis magni facilis, ex consectetur ipsa nam quidem!
                    <br />
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque eaque neque placeat debitis fuga sequi vero maxime voluptatem, corporis veniam provident quos sed corrupti quibusdam soluta nisi laboriosam qui.
                  </p>
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
      properites: [
        'cursor:auto',
        'cursor:default',
        'cursor:pointer',
        'cursor:wait',
        'cursor:move',
        'cursor:not-allowed',
        'pointer-events:none',
        'pointer-events:auto'
      ],
      value: null,
      exemple: null
    }
  },
  created() {
    this.value = this.properites[0]
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
        `<div class="${this.value}"></div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>
