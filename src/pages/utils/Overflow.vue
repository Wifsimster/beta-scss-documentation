<template>
  <card>
    <template #header>Overflow</template>
    <template #content>
      <div class="flex flex:wrap">
        <div class="flex:1 mr:1">
          <table class="w:full">
            <thead>
              <tr>
                <th>Class</th>
                <th>Properties</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in overflow" :key="item[0]">
                <td class="border:b border:grey-light">
                  <pre class="text:blue"><span class="text:purple">.{{ item[0] }}</span></pre>
                </td>
                <td class="border:b border:grey-light">
                  <pre class="text:blue">overflow: {{ item[1] }};</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex:2">
          <div class="flex flex:wrap">
            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1 overflow:hidden">
                <div
                  class="overflow:visible bg:grey-light p:1/2"
                  style="height: 75px;"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.</div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple1"></pre>
              </div>
            </div>

            <div class="flex:1 py:1/2 mb:1">
              <div class="border rounded:t:1/2 p:1 overflow:hidden">
                <div
                  class="overflow:scroll bg:grey-light p:1/2"
                  style="height: 75px;"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.</div>
              </div>
              <div class="bg:black rounded:b:1/2">
                <pre class="language-html" v-html="exemple2"></pre>
              </div>
            </div>
          </div>

          <div class="flex:1 py:1/2 mb:1">
            <div class="border rounded:t:1/2 p:1 overflow:hidden">
              <div
                class="overflow-x:scroll bg:grey-light p:1/2"
                style="height: 75px;"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.</div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple3"></pre>
            </div>
          </div>

          <div class="flex:1 py:1/2 mb:1">
            <div class="border rounded:t:1/2 p:1 overflow:hidden">
              <div
                class="overflow-y:scroll bg:grey-light p:1/2"
                style="height: 75px;"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.</div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple4"></pre>
            </div>
          </div>

          <div class="flex:1 py:1/2 mb:1">
            <div class="border rounded:t:1/2 p:1 overflow:hidden">
              <div
                class="overflow:auto bg:grey-light p:1/2"
                style="height: 75px;"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.</div>
            </div>
            <div class="bg:black rounded:b:1/2">
              <pre class="language-html" v-html="exemple5"></pre>
            </div>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      overflow: [
        ["overflow:auto", "auto"],
        ["overflow:hidden", "hidden"],
        ["overflow:visible", "visible"],
        ["overflow:scroll", "scroll"],
        ["overflow-x:auto", "auto"],
        ["overflow-y:auto", "auto"],
        ["overflow-x:hidden", "hidden"],
        ["overflow-y:hidden", "hidden"],
        ["overflow-x:visible", "visible"],
        ["overflow-y:visible", "visible"],
        ["overflow-x:scroll", "scroll"],
        ["overflow-y:scroll", "scroll"]
      ],
      exemple1: null,
      exemple2: null,
      exemple3: null,
      exemple4: null,
      exemple5: null
    };
  },
  mounted() {
    this.exemple1 = Prism.highlight(
      `<div class="overflow:visible">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple2 = Prism.highlight(
      `<div class="overflow:scroll">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple3 = Prism.highlight(
      `<div class="overflow-x:scroll">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple4 = Prism.highlight(
      `<div class="overflow-y:scroll">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
</div>`,
      Prism.languages.html,
      "html"
    );

    this.exemple5 = Prism.highlight(
      `<div class="overflow:auto">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
</div>`,
      Prism.languages.html,
      "html"
    );
  }
};
</script>

