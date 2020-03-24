<template>
  <card>
    <template #header>Responsive Grid</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1">
          <p class="pb:1">
            Automatically builds a responsive grid in flexbox based on media
            queries.
          </p>
          <div class="flex flex:wrap">
            <pre
              v-for="(property, index) in properties"
              :key="index"
              @click="value = property"
              :class="{ 'border:purple': value === property }"
              class="transition border bg:grey-light hover:bg:purple-lightest text:purple focus:bg:grey-light rounded px:1 py:1/2 mx:1 my:1/2 cursor:pointer"
            >{{ property }}</pre>
          </div>
          <p class="py:1">Manage rows and columns spacing.</p>
          <div class="flex mb:2">
            <multiselect
              :options="columnGapProperties"
              v-model="columnGap"
              placeholder="Select a column gap"
              class="mr:1"
            />
            <multiselect
              :options="rowGapProperties"
              v-model="rowGap"
              placeholder="Select a row gap"
            />
          </div>
          <div class="border rounded:t:1/2 p:1">
            <div :class="`${value} ${columnGap} ${rowGap}`">
              <div
                v-for="index in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']"
                :key="index"
                class="text:grey-dark text:center"
              >
                <div class="bg:grey-lighter py:1/2 border">{{ index }}</div>
              </div>
            </div>
          </div>
          <div class="bg:black rounded:b:1/2">
            <pre class="language-html" v-html="exemple"></pre>
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
        'responsive:2',
        'responsive:3',
        'responsive:4',
        'responsive:6',
        'responsive:8',
        'responsive:10',
        'responsive:12'
      ],
      columnGapProperties: [
        'column-gap:0',
        'column-gap:1/5',
        'column-gap:1/4',
        'column-gap:1/3',
        'column-gap:2/5',
        'column-gap:1/2',
        'column-gap:3/5',
        'column-gap:2/3',
        'column-gap:3/4',
        'column-gap:4/5',
        'column-gap:1',
        'column-gap:5/4',
        'column-gap:3/2',
        'column-gap:7/4',
        'column-gap:2',
        'column-gap:5/2',
        'column-gap:3',
        'column-gap:4'
      ],
      rowGapProperties: [
        'row-gap:0',
        'row-gap:1/5',
        'row-gap:1/4',
        'row-gap:1/3',
        'row-gap:2/5',
        'row-gap:1/2',
        'row-gap:3/5',
        'row-gap:2/3',
        'row-gap:3/4',
        'row-gap:4/5',
        'row-gap:1',
        'row-gap:5/4',
        'row-gap:3/2',
        'row-gap:7/4',
        'row-gap:2',
        'row-gap:5/2',
        'row-gap:3',
        'row-gap:4'
      ],
      value: null,
      columnGap: 'column-gap:0',
      rowGap: 'row-gap:0',
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
    },
    columnGap() {
      this.setExemple()
    },
    rowGap() {
      this.setExemple()
    }
  },
  methods: {
    setExemple() {
      this.exemple = Prism.highlight(
        `<div class="${this.value} ${this.columnGap} ${this.rowGap}">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    [...]
</div>`,
        Prism.languages.html,
        'html'
      )
    }
  }
}
</script>