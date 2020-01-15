<template>
  <div class="flex">
    <div class="w:full">
      <h1>Datepickers</h1>
      <datepicker v-model="date"></datepicker>
    </div>
  </div>
</template>

<script>
import Datepicker from '../../components/utils/Datepicker.vue'
export default {
  components: { Datepicker },
  data() {
    return {
      date: null
    }
  }
}
</script>
