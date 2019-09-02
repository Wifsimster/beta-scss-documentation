<template>
  <div>
    <div class="flex flex:col shadow:large mx:2 pb:1/4 bg:white rounded:1/2">
      <div
        class="flex flex:wrap content:between relative m:1 pb:1/4 text:5/4 border:b:1/8 border:grey-lighter"
      >
        <slot name="header"></slot>
      </div>
      <slot name="navigation"></slot>
      <div class="p:1">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
