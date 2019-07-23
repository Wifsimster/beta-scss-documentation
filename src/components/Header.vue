<template>
  <div id="header" class="flex justify:between bg:black">
    <div>
      <router-link
        tag="div"
        class="text:white text:2 line-height:5/2 cursor:pointer"
        to="/"
        exact
      >beta-scss</router-link>
    </div>
    <div>
      <router-link
        tag="div"
        class="text:white text:3/2 line-height:5/2 cursor:pointer h:full"
        to="/"
        exact
      >
        Documentation
        <span class="text:7/8">{{ version }}</span>
      </router-link>
    </div>
    <div class="py:1/2 line-height:5/2 text:white text:7/8">Dernière mise à jour : {{ date }}</div>
  </div>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
export default {
  data() {
    return {
      version: VERSION,
      date: format(parseISO(BUILD_DATE), `dd/MM/yyyy HH:mm`)
    };
  }
};
</script>

<style lang="scss" scoped>
#header {
  height: 40px;
}
</style>
