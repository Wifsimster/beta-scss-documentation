<template>
  <card>
    <template #header>Documentation</template>
    <template #content>
      <div class="flex:1">
        <p>
          This is the
          <a href="https://github.com/Wifsimster/beta-scss" target="_blank">beta-scss</a> documentation.
        </p>
      </div>

      <div class="flex:1">
        Each size are proportional to
        <pre class="inline text:blue">1 rem</pre>,
        <pre class="inline text:blue">16 px</pre>&nbsp;, ie :
        <ul class="line-height:2">
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:1/4</pre>&nbsp;=>
            <pre class="inline text:blue">0.25 rem</pre>&nbsp;soit
            <pre class="inline text:blue">4px</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:1/2</pre>&nbsp;=>
            <pre class="inline text:blue">0.5 rem</pre>&nbsp;soit
            <pre class="inline text:blue">8px</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:3/4</pre>&nbsp;=>
            <pre class="inline text:blue">0.75 rem</pre>&nbsp;soit
            <pre class="inline text:blue">12px</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:1</pre>&nbsp;=>
            <pre class="inline text:blue">1 rem</pre>&nbsp;soit
            <pre class="inline text:blue">16px</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:2</pre>&nbsp;=>
            <pre class="inline text:blue">2 rem</pre>&nbsp;soit
            <pre class="inline text:blue">32px</pre>
          </li>
        </ul>
      </div>

      <div class="flex:1">
        Toutes les variations de couleurs sont définies par :
        <ul class="line-height:2">
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:{couleur}-darkest</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:{couleur}-darker</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:{couleur}-dark</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:{couleur}</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:{couleur}-light</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:{couleur}-lighter</pre>
          </li>
          <li>
            <pre class="inline bg:grey-lighter rounded py:1/4 text:purple">{Class}:{couleur}-lightest</pre>
          </li>
        </ul>
      </div>
    </template>
  </card>
</template>

