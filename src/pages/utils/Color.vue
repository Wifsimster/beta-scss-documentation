<template>
  <card>
    <template #header>Colors</template>
    <template #content>
      <div
        class="flex:1 overflow:hidden rounded my:1"
        v-for="color in colors"
        :key="color"
      >
        <div
          class="flex justify-between relative shadow p:1/2"
          :class="'bg:' + color"
        >
          <div class="text:bold text:white uppercase">{{ color }}</div>
        </div>

        <div class="flex">
          <div
            v-if="color === 'grey'"
            class="flex:1 text:black text:bold line-height:1 text:3/4 px:1 py:3/2"
          >
            <div class="font:normal opacity:75">
              <pre>white</pre>
            </div>
          </div>

          <div
            v-for="variant in variants"
            :key="variant"
            class="flex:1 text:black text:bold line-height:1 text:3/4 px:1 py:3/2"
            :class="'bg:' + color + variant"
          >
            <div
              class="font:normal opacity:75"
              :class="{
                'text:white': variant === '-darker' || variant === '-darkest'
              }"
            >
              <pre>{{ color }}{{ variant }}</pre>
            </div>
          </div>

          <div
            v-if="color === 'grey'"
            class="flex:1 text:white text:bold line-height:1 text:3/4 bg:black px:1 py:3/2"
          >
            <div class="font:normal opacity:75">
              <pre>black</pre>
            </div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'grey',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'indigo',
        'purple',
        'pink'
      ],
      variants: [
        '-lightest',
        '-lighter',
        '-light',
        '',
        '-dark',
        '-darker',
        '-darkest'
      ]
    }
  }
}
</script>
