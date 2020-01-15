<template>
  <div
    id="header"
    class="flex justify:between items:center bg:black text:white shadow:large border:b border:grey-darkest px:1/3"
  >
    <router-link tag="div" class="text:3/2 cursor:pointer" to="/" exact>beta-scss</router-link>
    <router-link tag="div" class="text:3/2 cursor:pointer" to="/" exact>Documentation</router-link>
    <div class="text:7/8">Latest update : {{ date }}</div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
export default {
  data() {
    return {
      version: VERSION,
      date: format(parseISO(BUILD_DATE), 'MM/dd/yyyy HH:mm')
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  height: 40px;
}
</style>
