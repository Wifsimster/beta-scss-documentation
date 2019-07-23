<template>
  <div>
    <h1>Typographie</h1>
    <div class="flex">
      <div class="flex:1 mr:1">
        <table class="w:full">
          <thead>
            <tr>
              <th class="border:b:1/8 border:teal text:teal" colspan="2">Whitespace</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <pre class="inline text:purple">.whitespace:normal</pre>
                <pre class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4">Défaut</pre>
              </td>
              <td>
                <pre class="text:blue">white-space: normal;</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.whitespace:no-wrap</pre>
              </td>
              <td>
                <pre class="text:blue">white-space: nowrap;</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.whitespace:pre</pre>
              </td>
              <td>
                <pre class="text:blue">white-space: pre;</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.whitespace:pre-line</pre>
              </td>
              <td>
                <pre class="text:blue">white-space: pre-line;</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.whitespace:pre-wrap</pre>
              </td>
              <td>
                <pre class="text:blue">white-space: pre-wrap;</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:1 mr:1">
        <table class="w:full">
          <thead>
            <tr>
              <th class="border:b:1/8 border:teal text:teal" colspan="2">Wrapping</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <pre class="inline text:purple">.break-words</pre>
              </td>
              <td>
                <pre class="text:blue">word-wrap: break-word;</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.break-normal</pre>
                <pre class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4">Défaut</pre>
              </td>
              <td>
                <pre class="text:blue">word-wrap: normal;</pre>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.truncate</pre>
              </td>
              <td>
                <pre class="text:blue">
overflow: hidden;
text:overflow: ellipsis;
white-space: nowrap;
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex:1">
        <table class="w:full">
          <thead>
            <tr>
              <th class="border:b:1/8 border:teal text:teal" colspan="2">Listes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <pre class="inline bg:grey-light text:grey-dark text:3/4 rounded p:1/4">Défaut</pre>
              </td>
              <td>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Assumenda, quia temporibus</li>
                  <li>Quidem, ipsam illum quis</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <pre class="inline text:purple">.list-reset</pre>
              </td>
              <td>
                <ul class="list-reset">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Assumenda, quia temporibus</li>
                  <li>Quidem, ipsam illum quis</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

