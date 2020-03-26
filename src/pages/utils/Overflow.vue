<template>
  <card>
    <template #header>Overflow</template>
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
          <div class="flex flex:wrap">
            <div class="flex:1">
              <div class="border rounded:t:1/2 p:2">
                <div
                  class="transition border rounded bg:grey-lighter p:2"
                  style="max-height: 400px;"
                  :class="`${value}`"
                >
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquid dolor rem sit sapiente impedit in qui repellat voluptas quisquam ad obcaecati corporis magni facilis, ex consectetur ipsa nam quidem!
                    <br />
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque eaque neque placeat debitis fuga sequi vero maxime voluptatem, corporis veniam provident quos sed corrupti quibusdam soluta nisi laboriosam qui.
                    <br />
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi voluptate perspiciatis asperiores maxime, mollitia quas saepe magni sunt dignissimos. Animi at quae dolore obcaecati minima quia expedita quas perferendis!
                    <br />
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi velit inventore error laudantium ad sint illo repellendus eaque consectetur quae eum vitae, maxime ratione dignissimos beatae incidunt alias numquam iusto?
                    <br />
                    <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cupiditate ducimus beatae vitae perferendis! Doloremque fugiat quaerat vero, minima ab iusto repudiandae distinctio voluptatem eveniet deleniti! Autem maiores magnam odio.
                    <br />
                    <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tempore nisi labore a vitae dolores aperiam hic asperiores aliquid accusantium incidunt minus dolore, illum, doloremque architecto atque dolorem. Repellat, porro?
                    <br />
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam blanditiis explicabo atque nobis. Vel quia dolore explicabo nemo recusandae maiores deserunt quibusdam alias, blanditiis quos dignissimos facere veritatis minus.
                    <br />
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, exercitationem unde! Suscipit est id nam quas exercitationem modi aspernatur dignissimos, sequi voluptate ducimus alias qui excepturi repudiandae tempora nisi assumenda?
                    <br />
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit, itaque nobis sapiente explicabo aspernatur velit tenetur error sed odit voluptatibus praesentium obcaecati illo culpa quam alias numquam. Earum, ex!
                    <br />
                    <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eos error delectus dolorum, beatae velit commodi perspiciatis. Quasi quaerat debitis fuga eveniet autem sapiente deleniti voluptate sequi. Voluptatum, esse hic.
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
        'overflow:auto',
        'overflow:hidden',
        'overflow:visible',
        'overflow:scroll',
        'overflow-x:auto',
        'overflow-y:auto',
        'overflow-x:hidden',
        'overflow-y:hidden',
        'overflow-x:visible',
        'overflow-y:visible',
        'overflow-x:scroll',
        'overflow-y:scroll'
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
