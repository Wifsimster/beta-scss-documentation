import '@babel/polyfill'
import Vue from 'vue'

import App from 'pages/App.vue'
import router from './router'

import Card from 'components/Card.vue'

Vue.component('Card', Card)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
