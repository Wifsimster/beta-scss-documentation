<template>
  <card>
    <template #header>Height</template>

    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1 mr:1">
          <table class="w:full">
            <thead>
              <tr>
                <th>Class</th>
                <th>Height</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(size, index) in sizes" :key="size.key">
                <td v-if="index === 0" class="px:1/2 border:b border:grey-lighter">
                  <code class="border rounded m:1/4 px:1/5 py:1/4">h</code>
                  Height
                </td>
                <td v-else-if="index === 1" class="px:1/2 border:b border:grey-lighter">
                  <code class="border rounded m:1/4 px:1/5 py:1/4">min-h</code>
                  Min-height
                </td>
                <td v-else-if="index === 2" class="px:1/2 border:b border:grey-lighter">
                  <code class="border rounded m:1/4 px:1/5 py:1/4">max-h</code>
                  Max-height
                </td>
                <td v-else class="px:1/2 border:b border:grey-lighter"></td>
                <td class="px:1/2 border:b border:grey-lighter">
                  <code class="border rounded m:1/4 px:1/5 py:1/4">
                    {{
                    size.key
                    }}
                  </code>
                  {{ size.value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex:2">
          <div class="flex flex:wrap">
            <div
              class="flex:1 border rounded:1/2 p:1/2 mb:1"
              v-for="(grids, index) in heights"
              :key="index"
            >
              <div class="flex justify:around bg:grey-lighter rounded" style="height: 200px;">
                <div v-for="(height, i) in grids" :key="i" class="h:full">
                  <pre class="inline text:center text:sm text:purple mx:1/2 py:1/2 h:2/12">
h:{{ height }}</pre>
                  <div class="h:10/12 my:1/4">
                    <div :class="'bg:grey-light border h:' + height"></div>
                  </div>
                </div>
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
        { key: "1/2", value: "50%" },

        { key: "1/3", value: "33.33333%" },
        { key: "2/3", value: "66.66667%" },

        { key: "1/4", value: "25%" },
        { key: "2/4", value: "50%" },
        { key: "3/4", value: "75%" },

        { key: "1/5", value: "20%" },
        { key: "2/5", value: "40%" },
        { key: "3/5", value: "60%" },
        { key: "4/5", value: "80%" },

        { key: "1/6", value: "16.66667%" },
        { key: "2/6", value: "33.33333%" },
        { key: "3/6", value: "50%" },
        { key: "4/6", value: "66.66667%" },
        { key: "5/6", value: "83.33333%" },

        { key: "1/12", value: "8.33333%" },
        { key: "2/12", value: "16.66667%" },
        { key: "3/12", value: "25%" },
        { key: "4/12", value: "33.33333%" },
        { key: "5/12", value: "41.66667%" },
        { key: "6/12", value: "50%" },
        { key: "7/12", value: "58.33333%" },
        { key: "8/12", value: "66.66667%" },
        { key: "9/12", value: "75%" },
        { key: "10/12", value: "83.33333%" },
        { key: "11/12", value: "91.66667%" },

        { key: "full", value: "100%" },
        { key: "screen", value: "100vw" },
        { key: "auto", value: "auto" }
      ],
      heights: [
        ["1/2"],
        ["1/3", "2/3"],
        ["1/4", "2/4", "3/4"],
        ["1/5", "2/5", "3/5", "4/5"],
        ["1/6", "2/6", "3/6", "4/6", "5/6"],
        [
          "1/12",
          "2/12",
          "3/12",
          "4/12",
          "5/12",
          "6/12",
          "7/12",
          "8/12",
          "9/12",
          "10/12",
          "11/12"
        ]
      ]
    };
  }
};
</script>