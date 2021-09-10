<template>
  <card>
    <template #header>Documentation</template>
    <template #content>
      <div class="flex:1 my:2">
        This is the
        <a
          href="https://github.com/Wifsimster/beta-scss"
          target="_blank"
          class="text:bold text:purple"
        >beta-scss framework</a> documentation.
      </div>

      <div class="flex:1">
        <div class="flex">
          <div class="flex:1">
            Each size are proportional to
            <pre class="inline text:blue">1 rem</pre>,
            <pre class="inline text:blue">16 px</pre>&nbsp;, ie :
            <ul class="line-height:2">
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:1/4</pre>&nbsp;=>
                <pre class="inline text:blue">0.25 rem</pre>&nbsp;soit
                <pre class="inline text:blue">4px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:1/2</pre>&nbsp;=>
                <pre class="inline text:blue">0.5 rem</pre>&nbsp;soit
                <pre class="inline text:blue">8px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:3/4</pre>&nbsp;=>
                <pre class="inline text:blue">0.75 rem</pre>&nbsp;soit
                <pre class="inline text:blue">12px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:1</pre>&nbsp;=>
                <pre class="inline text:blue">1 rem</pre>&nbsp;soit
                <pre class="inline text:blue">14px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:2</pre>&nbsp;=>
                <pre class="inline text:blue">2 rem</pre>&nbsp;soit
                <pre class="inline text:blue">32px</pre>
              </li>
            </ul>
          </div>

          <div class="flex:1">
            Colors variants :
            <ul class="line-height:2">
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:{color}-darkest</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:{color}-darker</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:{color}-dark</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:{color}</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:{color}-light</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:{color}-lighter</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">{class}:{color}-lightest</pre>
              </li>
            </ul>
          </div>

          <div class="flex:1">
            Pseudo-class :
            <ul class="line-height:2">
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">hover:{class}</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">disabled:{class}</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">focus:{class}</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">first:{class}</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">last:{class}</pre>
              </li>
            </ul>
          </div>

          <div class="flex:1">
            Breakpoints :
            <ul class="line-height:2">
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">xxs:{class}</pre>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">320px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">xs:{class}</pre>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">375px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">sm:{class}</pre>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">425px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">md:{class}</pre>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">768px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">lg:{class}</pre>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">1024px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">xl:{class}</pre>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">1440px</pre>
              </li>
              <li>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">xxl:{class}</pre>
                <pre class="inline bg:grey-lighter rounded px:1/4 text:purple">2560px</pre>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

