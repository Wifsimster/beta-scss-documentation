<template>
  <div
    id="header"
    class="flex justify:between items:baseline bg:black text:white shadow:large border:b border:grey-darkest"
  >
    <router-link tag="div" class="text:3/2 cursor:pointer my:1/4 mt:1/4" to="/" exact>beta-scss</router-link>
    <router-link tag="div" class="text:3/2 cursor:pointer h:full" to="/" exact>
      Documentation
      <span class="text:7/8">{{ version }}</span>
    </router-link>
    <div class="my:1/4 text:7/8">Latest update : {{ date }}</div>
  </div>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
export default {
  data() {
    return {
      version: VERSION,
      date: format(parseISO(BUILD_DATE), `MM/dd/yyyy HH:mm`)
    };
  }
};
</script>

<style lang="scss" scoped>
#header {
  height: 40px;
}
</style>
