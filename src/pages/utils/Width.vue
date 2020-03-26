<template>
  <card>
    <template #header>Width</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1 mr:1">
          <table class="w:full">
            <thead>
              <tr>
                <th>Class</th>
                <th>Width</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(size, index) in sizes" :key="index">
                <td v-if="index === 0" class="py:1/2 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 py:1/5 px:1/4">w</code>
                  Width
                </td>
                <td v-else-if="index === 1" class="py:1/2 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 py:1/5 px:1/4">min-w</code>
                  Min-width
                </td>
                <td v-else-if="index === 2" class="py:1/2 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 py:1/5 px:1/4">max-w</code>
                  Max-width
                </td>
                <td v-else class="py:1/2 border:b border:grey-lighter"></td>
                <td class="py:1/2 border:b border:grey-lighter">
                  <code class="border rounded mr:1/4 py:1/5 px:1/4">{{ size.key }}</code>
                  {{ size.value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex:2 mt:2 mb:1">
          <div class="border rounded:1/2 p:1 mb:1" v-for="(grids, index) in widths" :key="index">
            <div
              class="flex items:center mb:1/2 bg:grey-lighter rounded"
              v-for="(width, i) in grids"
              :key="i"
            >
              <pre class="inline text:purple mx:1 w:1/12">.w:{{ width }}</pre>
              <div class="w:11/12">
                <div class="bg:grey-light" :class="'w:' + width" style="height: 30px;"></div>
              </div>
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
      sizes: [
        { key: '0', value: '0' },

        { key: '1/12', value: '8.33333%' },
        { key: '2/12', value: '16.66667%' },
        { key: '3/12', value: '25%' },
        { key: '4/12', value: '33.33333%' },
        { key: '5/12', value: '41.66667%' },
        { key: '6/12', value: '50%' },
        { key: '7/12', value: '58.33333%' },
        { key: '8/12', value: '66.66667%' },
        { key: '9/12', value: '75%' },
        { key: '10/12', value: '83.33333%' },
        { key: '11/12', value: '91.66667%' },

        { key: 'full', value: '100%' },
        { key: 'screen', value: '100vw' },
        { key: 'inherit', value: 'inherit' },
        { key: 'auto', value: 'auto' }
      ],
      widths: [
        [
          '1/12',
          '2/12',
          '3/12',
          '4/12',
          '5/12',
          '6/12',
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12'
        ]
      ]
    }
  }
}
</script>
