import Vue from 'vue'
import router from './router'

import App from 'pages/App'
import Card from 'components/Card'
import Multiselect from 'vue-multiselect'

Vue.component('Card', Card)
Vue.component('Multiselect', Multiselect)

import 'vue-multiselect/dist/vue-multiselect.min.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
